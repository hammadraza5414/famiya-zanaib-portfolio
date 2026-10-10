# Famiya Zanaib — Portfolio

Next.js 15, React 19, Tailwind CSS, Framer Motion. Responsive beige-and-dusky-green design, supplied portrait avatar with cursor tilt, LinkedIn and accessible contact form.

## Development

    npm install
    npm run dev
    npm run typecheck

## Secure inquiry submission setup

The contact form POSTs to /api/contact. Messages are only considered saved after a Supabase database insert succeeds. Once Resend is set up, a notification is sent to zanaibfamiya@gmail.com. An email failure does not delete a stored inquiry; its status remains pending/failed in the database.

1. Create a Supabase project, open its SQL Editor, and execute supabase/portfolio_inquiries.sql.
2. In Vercel -> famiya-zanaib-portfolio -> Settings -> Environment Variables set:
   - SUPABASE_URL: your Supabase project URL
   - SUPABASE_SECRET_KEY: secret server key (sb_secret_...; do not use the publishable/anon key)
   - RESEND_API_KEY: Resend API key
   - RESEND_FROM_EMAIL: e.g. Famiya Portfolio <contact@your-verified-domain.com>
3. In Resend, verify the domain used by RESEND_FROM_EMAIL before sending to Famiya's Gmail address.
4. Deploy to **Production** after setting the environment variables.
5. Submit a test enquiry and verify the new row in Supabase Table Editor -> portfolio_inquiries and delivery in Famiya's inbox.

Never paste secrets into GitHub or the client-side application. Vercel environment values must have **Production** target selected (optionally Preview and Development too).

If Supabase variables are missing, the form returns a clear configuration message rather than pretending the inquiry was delivered. If Resend isn't configured, the inquiry is stored but the page warns that email notification is pending.

## Security and spam controls

- Secrets and the destination mailbox are used server-side only.
- Validates all fields on the server and limits request size.
- Checks request origin, includes a honeypot, and limits to 5 inquiries/hour per one-way IP hash in the database.
- RLS is enabled with no public permissions/policies. Browser users cannot query submitted data.
- The public API never returns sensitive provider errors, credentials, or submitted lead details.

## Viewing inquiries

Go to your Supabase project > Table Editor > portfolio_inquiries.
The notification_status column indicates sent, pending, or failed. Clicking Reply in the email notification replies to the visitor.

## Data protection

See /privacy for visitors' privacy notice. Retention/deletion requests should be managed in Supabase by the site owner.

## Changing content

Project information and services live in app/page.tsx; colors are in tailwind.config.ts and app/globals.css.

## Portfolio content order (2026)

1. Events By Ussss — co-founder highlight
2. Digital marketing — content creation, lead generation, cold calling, email marketing
3. SEO article writing — 1,000+ articles across 10+ industries
4. About and contact

## Form configuration note

If SUPABASE_SECRET_KEY is absent or the database is unavailable, the form cannot store inquiries. The form shows a clear warning and offers a prefilled email draft; the visitor must press Send in their email application. Do not treat opening a draft as a sent inquiry.
