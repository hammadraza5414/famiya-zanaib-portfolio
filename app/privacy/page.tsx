import Link from "next/link";

export const metadata = {
  title: "Privacy & project inquiries — Famiya Zanaib",
  description: "How portfolio contact submissions are handled and protected."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F2EADD] px-6 py-14 text-[#263C30] md:py-24">
      <article className="mx-auto max-w-2xl rounded-3xl border border-[#CCD4C7] bg-[#FFFBF4] p-7 md:p-12">
        <Link href="/" className="text-sm font-bold text-[#526B59] hover:underline">← Back to portfolio</Link>
        <h1 className="mt-8 text-4xl font-black tracking-tight md:text-5xl">Project inquiry privacy</h1>
        <p className="mt-5 leading-7 text-[#586D5E]">When you submit an inquiry, Famiya Zanaib receives the information you choose to provide so she can respond about a potential project.</p>
        <div className="mt-8 space-y-7 text-sm leading-7">
          <section><h2 className="text-lg font-bold">What is collected</h2><p className="text-[#586D5E]">Your name, email address, project type, message, submission date, and a one-way hashed network identifier used for spam prevention. Your raw IP address is not stored in the inquiry table.</p></section>
          <section><h2 className="text-lg font-bold">Where it goes</h2><p className="text-[#586D5E]">Inquiries are saved in a private Supabase database. When email notifications are enabled, Resend sends a notification to zanaibfamiya@gmail.com. Vercel hosts this website and its server endpoint. These providers process data to deliver the service.</p></section>
          <section><h2 className="text-lg font-bold">Purpose and retention</h2><p className="text-[#586D5E]">This information is used to review and reply to inquiries, not to sell contact lists or send unsolicited marketing. Inquiries are retained only as needed for the project conversation and recordkeeping; deletion is handled on request.</p></section>
          <section><h2 className="text-lg font-bold">Access or deletion requests</h2><p className="text-[#586D5E]">Email <a href="mailto:zanaibfamiya@gmail.com" className="underline">zanaibfamiya@gmail.com</a> to ask about or request deletion of your inquiry.</p></section>
        </div>
      </article>
    </main>
  );
}
