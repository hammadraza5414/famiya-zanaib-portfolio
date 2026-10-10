"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import CursorAvatar from "./components/cursor-avatar";
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronDown, Copy,
  Linkedin, Mail, Menu, MoveUpRight, PenLine, Play, Send,
  Video, X, Users, Target, PhoneCall, CalendarDays,
} from "lucide-react";

const EMAIL = "zanaibfamiya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/famiya-zanaib-03156b366/";

type Category = "Events" | "Marketing" | "Writing";
type Project = {
  number: string;
  category: Category;
  eyebrow: string;
  name: string;
  period: string;
  featured: string;
  stat: string;
  statLabel: string;
  lines: string[];
};

const projects: Project[] = [
  {
    number: "01", category: "Events", eyebrow: "FOUNDING STORY / EVENTS BY USSSS",
    name: "Ideas become\nexperiences.", period: "EVENTS BY USSSS",
    featured: "Co-Founder · Events By Ussss",
    stat: "FOUNDER", statLabel: "EVENTS · COLLABORATION · CREATIVE DIRECTION",
    lines: [
      "Co-founded Events By Ussss alongside Mahpara Jabeen, building a creative event-focused initiative.",
      "Connecting event concepts, visual storytelling, communication and collaborative planning."
    ]
  },
  {
    number: "02", category: "Marketing", eyebrow: "DIGITAL MARKETING / OUTBOUND GROWTH",
    name: "From the right\nlead to the right message.", period: "DIGITAL MARKETING FOCUS",
    featured: "Lead Generation & Outbound Marketing",
    stat: "4", statLabel: "CONTENT · LEADS · CALLS · EMAIL",
    lines: [
      "Marketing focus spanning lead prospecting, outreach messaging, cold calling and email campaign workflows.",
      "Connecting audience research, relevant messaging and clear next steps for potential customers."
    ]
  },
  {
    number: "03", category: "Marketing", eyebrow: "CONTENT / CREATIVE STRATEGY",
    name: "Make content\nworth watching.", period: "SHORT-FORM CONTENT",
    featured: "Content Creation & Video Editing",
    stat: "360°", statLabel: "CONCEPT · SCRIPT · EDIT · PUBLISH",
    lines: [
      "Creating short-form digital content, from concepts and scripts to video edits and ready-to-publish assets.",
      "A creative approach to hooks, brand voice, engagement and content consistency."
    ]
  },
  {
    number: "04", category: "Writing", eyebrow: "SEO ARTICLES / LONG-FORM CONTENT",
    name: "Words that work\nlong after publishing.", period: "2024 — PRESENT",
    featured: "Freelance Content & SEO Writing",
    stat: "1,000+", statLabel: "ARTICLES DELIVERED · 10+ INDUSTRIES",
    lines: [
      "Delivered more than 1,000 SEO-focused articles across 10+ industries.",
      "Applied search intent, semantic keywords, readability and tone tailored to niche audiences."
    ]
  }
];

const services = [
  {
    number: "01", icon: Video, title: "Content Creation\n& Social Media",
    text: "Scroll-stopping short-form content, scripts, Reels, creative concepts and editorial calendars that express a brand clearly.",
    tags: ["REELS", "VIDEO EDITING", "SOCIAL CONTENT"],
  },
  {
    number: "02", icon: Target, title: "Lead Generation\n& Prospecting",
    text: "Finding relevant prospects, segmenting audiences and shaping outreach lists with fit and message relevance in mind.",
    tags: ["PROSPECT RESEARCH", "LEAD LISTS", "TARGETING"],
  },
  {
    number: "03", icon: PhoneCall, title: "Cold Calling\n& Outreach",
    text: "Clear outreach conversations, thoughtful opening messages and follow-up approaches that respect the prospect's time.",
    tags: ["OUTBOUND CALLS", "FOLLOW-UP", "CONVERSATIONS"],
  },
  {
    number: "04", icon: Mail, title: "Email Marketing\n& Campaigns",
    text: "Writing purposeful email sequences, refining campaign messages and planning follow-ups that give each contact a reason to respond.",
    tags: ["COLD EMAIL", "SEQUENCES", "COPYWRITING"],
  }
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTop({ number, label, right }: { number: string; label: string; right?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-line py-5 md:py-6">
      <p className="eyebrow text-fog"><span className="mr-4 text-accent">/{number}</span>{label}</p>
      {right && <p className="hidden text-[11px] tracking-[.12em] text-fog sm:block">{right}</p>}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.category === "Events") return (
    <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-xl border border-[#A7AD92] bg-[#324B3C] p-7 md:min-h-[320px] md:p-10">
      <div className="pointer-events-none absolute -right-14 -top-24 h-80 w-80 rounded-full bg-[#B99A76]/30 blur-[68px]" />
      <div className="pointer-events-none absolute inset-0 diagonal-lines opacity-[.12]" />
      <div className="relative flex items-center justify-between"><span className="eyebrow text-[#F6EDE0]">AN IDEA. A GATHERING. A MEMORY.</span><CalendarDays size={22} className="text-[#E8D9BE]" /></div>
      <div className="relative my-8"><p className="text-[12px] font-bold uppercase tracking-[.24em] text-[#E5D5BA]">THE CREATIVE EVENT BRAND</p><h3 className="mt-4 text-[clamp(43px,5.5vw,79px)] font-black leading-[.95] tracking-[-.085em] text-[#FFFBF4]">EVENTS<br/><span className="text-[#DED0AF]">BY USSSS.</span></h3></div>
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[#DCE2D5]/25 pt-5 text-[11px] tracking-[.09em] text-[#EEE6D7]"><span>CO-FOUNDED WITH PURPOSE</span><span>PEOPLE / IDEAS / EXPERIENCES</span></div>
    </div>
  );
  if (project.category === "Marketing") return (
    <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-xl border border-[#829B86] bg-[#3D5B4A] p-7 md:min-h-[280px] md:p-8">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div className="relative flex items-center justify-between"><span className="eyebrow text-[#E5EAD8]">{project.number === "02" ? "AUDIENCE / MESSAGE / ACTION" : "CREATE / CAPTURE / CONNECT"}</span>{project.number === "02" ? <Target size={25} className="text-[#E5EAD8]" /> : <Video size={25} className="text-[#E5EAD8]" />}</div>
      <div className="relative my-12 text-[clamp(46px,6vw,82px)] font-black leading-[.86] tracking-[-.08em] text-[#FFF8EC]">{project.number === "02" ? <>REACH.<br/><span className="text-[#E6D7B9]">RELEVANCE.</span></> : <>CREATE.<br/><span className="text-[#E6D7B9]">CONNECT.</span></>}</div>
      <div className="relative flex flex-wrap justify-between gap-2 border-t border-white/20 pt-5 text-[10px] uppercase tracking-[.13em] text-[#E9ECD9]"><span>{project.number === "02" ? "LEADS · COLD CALLING · EMAIL" : "CONTENT · REELS · VIDEO"}</span><span>FZ / MARKETING</span></div>
    </div>
  );
  return (
    <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-xl border border-[#7F9A83] bg-[#304E3D] p-7 md:min-h-[280px] md:p-8">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-50" />
      <div className="relative flex items-center justify-between"><span className="eyebrow text-[#E6E6CC]">SEARCH. WRITE. CONNECT.</span><PenLine size={23} className="text-[#E6E6CC]" /></div>
      <div className="relative mt-10 text-[clamp(45px,6.5vw,96px)] font-black leading-[.79] tracking-[-.085em] text-[#FFF8EC]">WORDS<br/><span className="text-[#D6E1C6]">WORK.</span></div>
      <div className="relative mt-10 flex justify-between border-t border-white/20 pt-4 text-[10px] tracking-[.16em] text-[#DDE5D7]"><span>SEO ARTICLES / WRITING</span><span>1000+ / 10+ INDUSTRIES</span></div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="interactive-card flex h-full flex-col rounded-[22px] border border-line bg-[#FFFBF4] p-3 md:p-4">
        <ProjectVisual project={project} />
        <div className="flex flex-1 flex-col px-3 pb-4 pt-7 md:px-5 md:pt-8">
          <div className="flex items-center justify-between gap-3"><span className="eyebrow text-accent">{project.eyebrow}</span><span className="text-xs text-fog">{project.number} / 04</span></div>
          <h3 className="mt-5 whitespace-pre-line text-[clamp(27px,3vw,41px)] font-bold leading-[1.08] tracking-[-.065em]">{project.name}</h3>
          <p className="mt-3 text-sm text-fog">{project.featured} <span className="mx-1 text-[#586D5E]">·</span> {project.period}</p>
          <div className="mt-6 border-y border-line py-5"><div className={`${project.stat.length > 5 ? "text-[clamp(32px,4vw,53px)]" : "text-[51px] md:text-[59px]"} font-black leading-none tracking-[-.09em] text-[#263C30]`}>{project.stat}</div><p className="eyebrow mt-3 text-fog">{project.statLabel}</p></div>
          <ul className="mt-6 space-y-3 pb-1">
            {project.lines.map((line) => <li key={line} className="flex gap-3 text-[13px] leading-[1.65] text-[#586D5E]"><span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />{line}</li>)}
          </ul>
          {project.category === "Marketing" && <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent">Explore · Engage · Grow <ArrowUpRight size={16} /></span>}
        </div>
      </article>
    </Reveal>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: "success" | "warning" | "error"; message: string } | null>(null);
  const [emailDraft, setEmailDraft] = useState<string | null>(null);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setFeedback(null);
    setEmailDraft(null);
    const draft = "mailto:" + EMAIL
      + "?subject=" + encodeURIComponent("Portfolio inquiry: " + projectType + " — " + name)
      + "&body=" + encodeURIComponent("Hi Famiya,\n\n" + message + "\n\nProject: " + projectType + "\nName: " + name + "\nReply to: " + email);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message, website })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.saved) {
        if (response.status === 503 || response.status >= 500) {
          setEmailDraft(draft);
          setFeedback({ kind: "warning", message: "Direct submissions are temporarily unavailable. Your details have NOT been saved. Use the email button below to open a prepared message, then press Send in your email app." });
        } else {
          setFeedback({ kind: "error", message: result.error || "Please check your details and try again." });
        }
        return;
      }
      setFeedback(result.notificationSent
        ? { kind: "success", message: "Your inquiry has been saved and Famiya has been notified by email." }
        : { kind: "warning", message: "Your inquiry has been saved in the private database. The email notification has not been sent." });
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
      setWebsite("");
    } catch {
      setEmailDraft(draft);
      setFeedback({ kind: "warning", message: "The online form is unavailable. Your inquiry has NOT been saved. Please open the prepared email below and press Send." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" aria-label="Project enquiry form">
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Your name *</label><input id="name" name="name" className="input-field" autoComplete="name" required minLength={2} maxLength={100} placeholder="How should I call you?" value={name} onChange={(e) => setName(e.target.value)} disabled={submitting} /></div>
        <div><label htmlFor="email" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Email address *</label><input id="email" name="email" type="email" className="input-field" autoComplete="email" required maxLength={254} placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={submitting} /></div>
      </div>
      <div><label htmlFor="projectType" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Project type *</label><div className="relative"><select id="projectType" name="projectType" className="input-field appearance-none" required value={projectType} onChange={(e) => setProjectType(e.target.value)} disabled={submitting}><option value="" disabled>Select what you have in mind</option><option>Event Planning &amp; Collaborations</option><option>Digital Marketing Strategy</option><option>Lead Generation</option><option>Cold Calling &amp; Outreach</option><option>Email Marketing</option><option>Social Content &amp; Video</option><option>SEO Articles &amp; Writing</option><option>Something Else</option></select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-[18px] text-fog" /></div></div>
      <div><label htmlFor="message" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Tell me about it *</label><textarea id="message" name="message" className="input-field min-h-[150px] resize-y" required minLength={10} maxLength={4000} placeholder="The big idea, the tiny details, your wildest brief…" value={message} onChange={(e) => setMessage(e.target.value)} disabled={submitting} /></div>
      <button type="submit" disabled={submitting} aria-busy={submitting} className="group flex w-full items-center justify-between rounded-xl bg-accent px-6 py-5 text-sm font-black uppercase tracking-[.1em] text-[#FBF7EE] transition-colors hover:bg-[#59735E] disabled:cursor-wait disabled:opacity-65"><span>{submitting ? "Sending your inquiry…" : "Send project inquiry"}</span><Send size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
      {feedback && <p role={feedback.kind === "error" ? "alert" : "status"} className={"rounded-lg border px-4 py-3 text-sm leading-relaxed " + (feedback.kind === "success" ? "border-[#9CB5A0] bg-[#E4EEDF] text-[#284B36]" : feedback.kind === "warning" ? "border-[#D7BD8B] bg-[#FBF1DB] text-[#70551A]" : "border-[#CD9B94] bg-[#FCEBE7] text-[#8B332D]")}>{feedback.message}{feedback.kind === "error" && <> <a href={"mailto:" + EMAIL} className="font-semibold underline">Email Famiya directly</a>.</>}</p>}
      {emailDraft && <a href={emailDraft} className="inline-flex items-center gap-2 rounded-xl bg-[#2B4637] px-5 py-3.5 text-sm font-semibold text-[#FFFBF4] hover:bg-[#526B59]"><Mail size={17}/> Open email to send inquiry <ArrowUpRight size={16}/></a>}
      <p className="text-xs leading-relaxed text-[#586D5E]">Direct storage is available only when the database is configured. If it isn't, you can use an email draft instead. <a href="/privacy" className="underline underline-offset-2 hover:text-[#263C30]">Privacy details</a>.</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      const node = document.createElement("textarea");
      node.value = EMAIL; node.style.position = "fixed"; node.style.opacity = "0";
      document.body.appendChild(node); node.select();
      const success = document.execCommand("copy"); node.remove();
      if (success) setCopied(true);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F2EADD]">
      <motion.div className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-accent" style={{ scaleX }} />
      <header className="sticky top-0 z-50 border-b border-line bg-[#F2EADD]/95 backdrop-blur-xl">
        <nav className="page-container flex h-[76px] items-center justify-between" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}><span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-accent bg-accent text-[19px] font-black tracking-[-.07em] text-[#FBF7EE]">FZ</span><span className="hidden text-xs font-extrabold uppercase tracking-[.12em] text-[#263C30] sm:block">Famiya Zanaib<span className="mt-1 block text-[9px] font-normal tracking-[.15em] text-[#586D5E]">CREATIVE PORTFOLIO / 2026</span></span></a>
          <div className="hidden items-center gap-9 md:flex"><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#events">Events</a><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#marketing">Marketing</a><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#writing">Writing</a></div>
          <div className="hidden items-center gap-4 md:flex"><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.1em] text-[#586D5E]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />Available for projects</span><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Famiya Zanaib on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9CAF9F] transition-colors hover:border-accent hover:text-accent"><Linkedin size={17}/></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#9CAF9F] px-5 py-3 text-xs font-bold transition-colors hover:border-accent hover:text-accent">Let&apos;s talk <ArrowUpRight size={15} /></a></div>
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} className="rounded-md border border-line p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
        </nav>
        {menuOpen && <div id="mobile-menu" className="page-container flex flex-col gap-1 border-t border-line py-3 md:hidden">{[["Events", "#events"], ["Marketing", "#marketing"], ["Writing", "#writing"], ["About", "#about"], ["Contact", "#contact"]].map(([text,href]) => <a key={href} className="rounded-lg px-2 py-3 text-sm font-semibold hover:bg-[#D9E5D7]" href={href} onClick={() => setMenuOpen(false)}>{text}</a>)}<a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg px-2 py-3 text-sm font-semibold text-accent"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a></div>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24 xl:pt-32">
          <div className="pointer-events-none absolute -right-72 top-0 h-[800px] w-[800px] rounded-full glow opacity-40" />
          <div className="page-container relative">
            <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-12"><span className="eyebrow flex items-center gap-3 text-[#586D5E]"><span className="h-[7px] w-[7px] rounded-full bg-accent"/>EVENTS · MARKETING · CONTENT</span><span className="eyebrow text-[#586D5E]">MULTAN, PAKISTAN · 30°N / 71°E</span></Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-12">
              <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22,1,0.36,1] }}>
                  <h1 className="display text-[clamp(68px,8.7vw,147px)]"><span className="block">FAMIYA</span><span className="mt-2 block">ZANAIB<span className="text-accent">.</span></span></h1>
                </motion.div>
                <Reveal className="mt-10 max-w-[590px] lg:mt-12"><p className="eyebrow mb-4 text-accent">EVENTS FOUNDER · DIGITAL MARKETING · CONTENT CREATOR</p><p className="text-[15px] leading-[1.85] text-[#586D5E] md:text-[17px]">Co-founder of <strong className="font-semibold text-[#263C30]">Events By Ussss</strong> with a focus on <strong className="font-semibold text-[#263C30]">digital marketing</strong> — content creation, lead generation, cold calling and email marketing. Also an experienced SEO article writer with 1,000+ articles delivered.</p><p className="mt-5 text-[13px] leading-[1.8] text-[#586D5E]">Founder-minded creative · BBA Banking &amp; Finance Scholar (CGPA 3.67) · IBF Society Vice President</p></Reveal>
                <Reveal delay={.12} className="mt-8"><div className="flex flex-wrap gap-3"><a href="#events" className="group inline-flex items-center gap-3 rounded-full bg-[#2B4637] px-6 py-4 text-[12px] font-bold uppercase tracking-[.07em] text-[#FBF7EE] transition-colors hover:bg-accent">Explore Events <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a><a href="#contact" className="group inline-flex items-center gap-3 rounded-full border border-[#9CAF9F] px-6 py-4 text-[12px] font-bold uppercase tracking-[.07em] transition-colors hover:border-[#45624E]">Get in touch <ArrowUpRight size={17} /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full px-3 py-4 text-[12px] font-bold uppercase tracking-[.07em] text-accent hover:text-[#263C30]"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a></div></Reveal>
              </div>
              <Reveal delay={.18} className="relative min-w-0"><CursorAvatar /></Reveal>
            </div>
            <Reveal className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-4 md:gap-4">
              {[["CO-FOUNDER", "EVENTS BY USSSS"], ["04", "MARKETING FOCUS AREAS"], ["1,000+", "SEO ARTICLES WRITTEN"], ["20+", "TEAM MEMBERS LED"]].map(([value,label]) => <div key={label} className="rounded-[16px] border border-line bg-[#E7ECE1] px-5 py-6 md:px-7 md:py-8"><p className={`${value.length > 5 ? "text-[clamp(22px,3vw,46px)]" : "text-[clamp(38px,4vw,64px)]"} font-black leading-none tracking-[-.085em]`}>{value}</p><p className="eyebrow mt-4 text-[#586D5E]">{label}</p></div>)}
            </Reveal>
            <div className="mt-10 flex items-center gap-3 text-xs tracking-wide text-[#586D5E]"><ArrowDownRight size={17} /><span>SCROLL TO EXPLORE</span><span className="ml-auto text-accent">01 — 05</span></div>
          </div>
        </section>

        <div className="marquee border-y border-line bg-[#DDE6DB] py-4" aria-hidden="true"><div className="marquee-track">{Array.from({length: 4}).flatMap((_,i) => ["EVENTS BY USSSS", "✳", "MARKETING THAT CONNECTS", "✳", "WORDS THAT WORK", "✳"].map((item,j) => <span key={`${i}-${j}`} className={`text-[12px] font-black tracking-[.12em] ${item === "✳" ? "text-accent" : "text-[#586D5E]"}`}>{item}</span>))}</div></div>


        <section id="events" className="page-container pb-24 pt-24 md:pb-32 md:pt-32">
          <SectionTop number="01" label="EVENTS BY USSSS" right="WHERE IDEAS BECOME EXPERIENCES" />
          <Reveal className="my-10 flex flex-col justify-between gap-5 md:my-14 md:flex-row md:items-end">
            <h2 className="section-title text-[clamp(52px,7.5vw,106px)]">First, the <span className="text-accent">events.</span><br/>Then, the impact.</h2>
            <p className="max-w-[280px] text-sm leading-[1.8] text-[#586D5E]">Co-founder of Events By Ussss — a creative initiative centered on experiences, collaboration and bringing people together.</p>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.16fr_.84fr]">
            <ProjectCard project={projects[0]} />
            <Reveal delay={.12}>
              <div className="flex h-full flex-col justify-between gap-8 rounded-[22px] border border-line bg-[#DFE8DA] p-8 md:p-10">
                <div><div className="eyebrow text-accent">THE FOUNDING MINDSET</div><h3 className="mt-8 text-[clamp(34px,4vw,60px)] font-black leading-[1.06] tracking-[-.07em]">Big ideas.<br/><span className="text-accent">Shared moments.</span></h3></div>
                <p className="max-w-sm text-[15px] leading-[1.9] text-[#526B59]">From shaping a concept to communicating its story, Events By Ussss reflects the creative and collaborative side of Famiya&apos;s work. Events are the starting point; thoughtful marketing helps them reach the right people.</p>
                <div className="flex flex-wrap gap-2">{["EVENT CONCEPTS", "CREATIVE DIRECTION", "TEAM COLLABORATION", "BRAND STORYTELLING"].map(label=><span key={label} className="rounded-full border border-[#A9BAAB] px-3 py-2 text-[10px] font-bold tracking-[.06em] text-[#47634F]">{label}</span>)}</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="marketing" className="border-t border-line bg-[#E1E8DE] pb-24 pt-8 md:pb-32 md:pt-10">
          <div className="page-container">
            <SectionTop number="02" label="DIGITAL MARKETING" right="THE MAIN FOCUS" />
            <Reveal className="my-10 flex flex-col justify-between gap-5 md:my-14 md:flex-row md:items-end">
              <h2 className="section-title text-[clamp(53px,7.6vw,106px)]">Create attention.<br/><span className="text-accent">Start conversations.</span></h2>
              <p className="max-w-[280px] text-sm leading-[1.8] text-[#586D5E]">A multi-channel approach connecting creative content with research, lead generation, outbound calls and email outreach.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((s,index)=><Reveal key={s.number} delay={index*.07}><article className="interactive-card flex h-full min-h-[330px] flex-col rounded-[20px] border border-line bg-panel p-7">
                <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C2D0C0] bg-[#E2E9DF]"><s.icon size={23} className="text-accent" strokeWidth={1.7}/></span><span className="eyebrow text-[#586D5E]">/{s.number}</span></div>
                <h3 className="mt-12 whitespace-pre-line text-[clamp(24px,2.5vw,31px)] font-bold leading-[1.1] tracking-[-.055em]">{s.title}</h3>
                <p className="mt-4 text-[13px] leading-[1.85] text-[#586D5E]">{s.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">{s.tags.map(tag=><span key={tag} className="rounded-full border border-[#C6D1C3] px-2.5 py-1.5 text-[9px] font-bold tracking-[.055em] text-[#586D5E]">{tag}</span>)}</div>
              </article></Reveal>)}
            </div>
            <Reveal className="mt-14 mb-6 flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl font-black tracking-[-.05em] md:text-3xl">Marketing focus areas in action.</h3><p className="text-xs text-[#586D5E]">OUTREACH + CONTENT CREATION</p></Reveal>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">{projects.filter(p=>p.category==="Marketing").map(p=><ProjectCard key={p.number} project={p}/>)}</div>
          </div>
        </section>

        <section id="writing" className="page-container pb-24 pt-24 md:pb-32 md:pt-32">
          <SectionTop number="03" label="ARTICLE WRITING & SEO" right="A STRONG FOUNDATION IN WORDS" />
          <Reveal className="my-10 flex flex-col justify-between gap-6 md:my-14 md:flex-row md:items-end">
            <h2 className="section-title text-[clamp(52px,7vw,102px)]">And then, the<br/><span className="text-accent">words that work.</span></h2>
            <p className="max-w-[275px] text-sm leading-[1.8] text-[#586D5E]">Article writing comes after events and marketing — but brings 1,000+ published pieces and experience across 10+ industries.</p>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <ProjectCard project={projects[3]} />
            <Reveal delay={.12}><div className="flex h-full flex-col justify-between rounded-[22px] border border-line bg-[#E7EDDF] p-8 md:p-10">
              <div><div className="eyebrow text-accent">WRITING CAPABILITIES</div><h3 className="mt-9 text-[clamp(35px,4vw,58px)] font-black leading-[1.02] tracking-[-.07em]">Good content<br/>earns attention.</h3><p className="mt-7 max-w-sm text-[15px] leading-[1.85] text-[#586D5E]">Search-focused long-form writing, website copy and content with a natural human voice — designed to answer the reader&apos;s question clearly.</p></div>
              <div className="mt-9 flex flex-wrap gap-2">{["BLOGS & ARTICLES", "ON-PAGE SEO", "SEARCH INTENT", "WEB COPY", "CONTENT RESEARCH"].map(x=><span key={x} className="rounded-full border border-[#A9BAAB] px-3 py-2 text-[10px] font-bold text-[#526B59]">{x}</span>)}</div>
            </div></Reveal>
          </div>
        </section>

        <section id="about" className="page-container pb-24 pt-24 md:pb-32 md:pt-32">
          <SectionTop number="04" label="BEHIND THE WORK" right="A FEW THINGS WORTH KNOWING" />
          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal><div className="relative overflow-hidden rounded-[24px] border border-line bg-[#E7EDDF] p-8 md:min-h-[540px] md:p-10"><div className="absolute right-0 top-0 h-80 w-80 glow"/><span className="eyebrow relative text-accent">HELLO, I&apos;M FAMIYA.</span><p className="relative mt-10 text-[clamp(35px,4.15vw,60px)] font-black leading-[1.08] tracking-[-.065em]">I believe good ideas deserve <span className="text-accent">great execution.</span></p><p className="relative mt-8 max-w-md text-[14px] leading-[1.9] text-[#586D5E]">I&apos;m a co-founder of Events By Ussss and a digital-marketing focused creative working across content, lead generation, cold calling and email outreach. I&apos;m also a BBA Banking & Finance scholar and the first female Vice President of the IBF Society at Bahauddin Zakariya University. SEO article writing brings another dimension to that work.</p><div className="relative mt-12 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B4C2B4] bg-accent text-sm font-black text-[#FBF7EE]">FZ</span><div><span className="block text-xs font-bold">Famiya Zanaib</span><span className="mt-1 block text-[11px] text-[#586D5E]">Event Founder. Marketer. Writer.</span></div></div></div></Reveal>
            <Reveal delay={.1}><div><h2 className="section-title text-[clamp(48px,5.7vw,78px)]">Quick facts<span className="text-accent">.</span></h2><p className="mb-9 mt-4 max-w-md text-sm leading-[1.7] text-[#586D5E]">The facts behind the person — a few coordinates on the map.</p><dl className="border-t border-line">{[
              ["LOCATION", "Multan, Pakistan"],
              ["EDUCATION", "BBA Banking & Finance", "Bahauddin Zakariya University · CGPA 3.67"],
              ["CURRENT FOCUS", "Events By Ussss & Digital Marketing", "Co-Founder · Content creation · Outreach · IBF Vice President"],
              ["LANGUAGES", "Urdu · English", "Chinese & Arabic (Conversational)"],
              ["EMAIL", EMAIL],
              ["LINKEDIN", "View LinkedIn profile"],
            ].map(([label, value, extra]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-5 md:grid-cols-[130px_1fr]"><dt className="eyebrow pt-[4px] text-[#586D5E]">{label}</dt><dd>{label === "LINKEDIN" ? <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline md:text-[16px]">{value}<ArrowUpRight size={16}/></a> : <span className="block text-[14px] font-semibold leading-relaxed md:text-[16px]">{value}</span>}{extra && <span className="mt-1 block text-xs leading-[1.6] text-[#586D5E]">{extra}</span>}</dd></div>)}</dl><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"><Linkedin size={17}/>Connect with Famiya on LinkedIn <MoveUpRight size={16}/></a></div></Reveal>
          </div>
        </section>

        <section className="overflow-hidden border-y border-line bg-accent py-10 text-[#FBF7EE] md:py-16"><div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><p className="section-title text-[clamp(46px,6vw,85px)]">YOUR IDEA. <span className="opacity-60">MY NEXT</span><br/>OBSESSION.</p><a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.09em] text-[#FBF7EE] transition-colors hover:bg-[#5C7762]">Let&apos;s build it <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17}/></a></div></section>

        <section id="contact" className="page-container pb-28 pt-24 md:pb-36 md:pt-32">
          <SectionTop number="05" label="LET'S CONNECT" right="YOUR NEXT GREAT PROJECT STARTS HERE" />
          <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal><div><p className="eyebrow mb-6 text-accent">GOT SOMETHING IN MIND?</p><h2 className="section-title max-w-[640px] text-[clamp(51px,6.2vw,89px)]">From events<br/>to outreach,<br/>let&apos;s make<br/><span className="text-accent">your idea<br/>connect.</span></h2><p className="mt-9 max-w-md text-[15px] leading-[1.85] text-[#586D5E]">Planning an event, launching a campaign, looking for leads or need purposeful content? Share the brief and let&apos;s talk.</p><div className="mt-10 flex flex-wrap items-center gap-3"><button type="button" onClick={handleCopy} className="group inline-flex items-center gap-3 rounded-full border border-[#9CAF9F] px-5 py-3.5 text-xs font-bold transition-colors hover:border-accent hover:text-accent">{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? "Email copied!" : "Copy email"}</button><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-[13px] text-[#586D5E] hover:text-[#263C30]">{EMAIL} <ArrowUpRight size={15}/></a></div><div className="mt-12 flex items-center gap-4 text-[#586D5E]"><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"><Linkedin size={18}/></a><a href={`mailto:${EMAIL}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"><Mail size={18}/></a><span className="eyebrow ml-2 text-[#586D5E]">LET&apos;S MAKE IT HAPPEN</span></div></div></Reveal>
            <Reveal delay={.13}><div className="rounded-[22px] border border-line bg-panel p-6 md:p-9"><div className="mb-8 flex items-center justify-between border-b border-line pb-6"><div><span className="eyebrow text-accent">PROJECT INQUIRY</span><h3 className="mt-2 text-2xl font-bold tracking-[-.04em]">Tell me your idea.</h3></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C2D0C0]"><ArrowUpRight size={23}/></span></div><ContactForm/></div></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-[#DDE7DB]"><div className="page-container pt-12"><div className="flex flex-col items-start justify-between gap-7 border-b border-line pb-12 md:flex-row md:items-end"><div><a href="#top" className="text-[clamp(48px,8vw,110px)] font-black leading-[.85] tracking-[-.08em]">FAMIYA ZANAIB<span className="text-accent">.</span></a><p className="mt-5 text-xs tracking-wide text-[#586D5E]">EVENTS FIRST. MARKETING FORWARD. WORDS THAT WORK.</p></div><a href="#top" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs font-bold hover:border-accent hover:text-accent">Back to top <ArrowUpRight size={16}/></a></div><div className="flex flex-col justify-between gap-5 py-7 text-xs text-[#586D5E] md:flex-row md:items-center"><p>© {new Date().getFullYear()} Famiya Zanaib. Built with intention.</p><div className="flex flex-wrap gap-6"><a href="#events" className="hover:text-[#263C30]">Events</a><a href="#marketing" className="hover:text-[#263C30]">Marketing</a><a href="#writing" className="hover:text-[#263C30]">Writing</a><a href="#about" className="hover:text-[#263C30]">About</a><a href="#contact" className="hover:text-[#263C30]">Contact</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#263C30]">LinkedIn ↗</a><a href={`mailto:${EMAIL}`} className="hover:text-[#263C30]">Email ↗</a></div><span>MULTAN, PK · WORLDWIDE ONLINE</span></div></div></footer>
    </div>
  );
}
