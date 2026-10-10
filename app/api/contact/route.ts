import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const notificationEmail = "zanaibfamiya@gmail.com";
const validTypes = new Set([
  "Event Planning & Collaborations",
  "Digital Marketing Strategy",
  "Lead Generation",
  "Cold Calling & Outreach",
  "Email Marketing",
  "Social Content & Video",
  "SEO Articles & Writing",
  "SEO Content & Writing",
  "Video Editing & Reels",
  "Content Strategy",
  "Event & Leadership Collaboration",
  "Something Else"
]);
const maxBodySize = 15_000;
const maxPerHour = 5;

function respond(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function supabaseHeaders(secret: string) {
  return {
    "apikey": secret,
    ...(secret.startsWith("eyJ") ? { "Authorization": "Bearer " + secret } : {}),
    "Content-Type": "application/json"
  };
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return respond({ error: "This request was not accepted." }, 403);
      }
    } catch {
      return respond({ error: "Invalid request origin." }, 403);
    }
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > maxBodySize) return respond({ error: "Your message is too large." }, 413);

  let input: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > maxBodySize) return respond({ error: "Your message is too large." }, 413);
    input = JSON.parse(body);
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Bad JSON");
  } catch {
    return respond({ error: "Please check your form and try again." }, 400);
  }

  // Passive bot trap: genuine visitors never see or fill this field.
  if (input.website) return respond({ saved: true, notificationSent: true });

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const projectType = typeof input.projectType === "string" ? input.projectType.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 2 || name.length > 100 || !isValidEmail(email) ||
      !validTypes.has(projectType) || message.length < 10 || message.length > 4000) {
    return respond({ error: "Please enter a valid name, email, project type and message." }, 400);
  }

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/+$/, "");
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseSecret) {
    return respond({ error: "Direct submissions are still being set up. Please contact Famiya by email for now." }, 503);
  }

  let apiUrl: URL;
  try {
    apiUrl = new URL(supabaseUrl + "/rest/v1/portfolio_inquiries");
    if (apiUrl.protocol !== "https:") throw new Error("Invalid URL");
  } catch {
    return respond({ error: "The contact service is temporarily unavailable. Please email Famiya directly." }, 503);
  }

  // A one-way identifier limits repeated submissions without storing raw IP addresses.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const ipHash = createHash("sha256").update(supabaseSecret + ":portfolio-contact:" + ip).digest("hex");
  const headers = supabaseHeaders(supabaseSecret);

  try {
    const recent = new URL(apiUrl);
    recent.searchParams.set("select", "id");
    recent.searchParams.set("ip_hash", "eq." + ipHash);
    recent.searchParams.set("created_at", "gte." + new Date(Date.now() - 60 * 60 * 1000).toISOString());
    recent.searchParams.set("limit", String(maxPerHour));

    const check = await fetch(recent, { headers, cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!check.ok) throw new Error("Rate limit lookup failed");
    const count = await check.json();
    if (!Array.isArray(count)) throw new Error("Rate limit format failed");
    if (count.length >= maxPerHour) return respond({ error: "Too many submissions. Please try again in an hour." }, 429);

    const insert = await fetch(apiUrl, {
      method: "POST",
      headers: { ...headers, "Prefer": "return=representation" },
      body: JSON.stringify({ name, email, project_type: projectType, message, ip_hash: ipHash }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store"
    });
    if (!insert.ok) throw new Error("Database insertion failed");
    const records = await insert.json();
    const id = records?.[0]?.id;
    if (typeof id !== "string") throw new Error("Database response invalid");

    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    let notificationSent = false;
    let resendId: string | null = null;

    if (resendKey && fromEmail) {
      try {
        const notification = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + resendKey,
            "Content-Type": "application/json",
            "Idempotency-Key": "famiya-inquiry-" + id
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [notificationEmail],
            reply_to: email,
            subject: "New portfolio enquiry — " + projectType,
            text: [
              "New inquiry submitted through Famiya's portfolio",
              "",
              "Name: " + name,
              "Email: " + email,
              "Project type: " + projectType,
              "Submission ID: " + id,
              "",
              "Message:",
              message,
              "",
              "Reply directly to this email to respond to the visitor."
            ].join("\n")
          }),
          signal: AbortSignal.timeout(10000),
          cache: "no-store"
        });
        if (notification.ok) {
          const data = await notification.json();
          notificationSent = true;
          resendId = typeof data.id === "string" ? data.id : null;
        }
      } catch {
        // Inquiry is still stored; email failure must never erase the lead.
      }
    }

    const updateUrl = new URL(apiUrl);
    updateUrl.searchParams.set("id", "eq." + id);
    await fetch(updateUrl, {
      method: "PATCH",
      headers: { ...headers, "Prefer": "return=minimal" },
      body: JSON.stringify({
        notification_status: notificationSent ? "sent" : (resendKey && fromEmail ? "failed" : "pending"),
        ...(resendId ? { resend_message_id: resendId } : {})
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store"
    }).catch(() => undefined);

    return respond({ saved: true, notificationSent }, 200);
  } catch {
    // Avoid revealing database details or secrets to a public visitor.
    return respond({ error: "The contact service is temporarily unavailable. Please try again or email Famiya directly." }, 503);
  }
}

export async function GET() {
  return respond({ error: "Method not allowed." }, 405);
}
