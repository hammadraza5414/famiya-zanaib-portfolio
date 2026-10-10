"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import CursorAvatar from "./components/cursor-avatar";
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronDown, Copy,
  Linkedin, Mail, Menu, MoveUpRight, PenLine, Play, Send,
  Video, X, Users,
} from "lucide-react";

const EMAIL = "zanaibfamiya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/famiya-zanaib-03156b366/";

type Category = "Writing" | "Creative" | "Leadership" | "Finance";
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
    number: "01", category: "Writing", eyebrow: "FREELANCE / SEO STRATEGY",
    name: "Words engineered\nto get found.", period: "2024 — PRESENT",
    featured: "Freelance Content & SEO Specialist",
    stat: "1,000+", statLabel: "SEO ARTICLES · 10+ INDUSTRIES",
    lines: ["Managed concurrent content pipelines supporting organic search visibility.", "Applied semantic keyword strategies and adapted tone for technical and niche brands."],
  },
  {
    number: "02", category: "Creative", eyebrow: "SOCIAL / VIDEO PRODUCTION",
    name: "Make them stop.\nMake them watch.", period: "2025 — PRESENT",
    featured: "Short-form Content Creator & Video Editor",
    stat: "360°", statLabel: "END-TO-END VIDEO PRODUCTION",
    lines: ["Concepted, shot and edited Reels and short-form assets from start to finish.", "Used trends, pacing and retention-first edits to help content reach audiences."],
  },
  {
    number: "03", category: "Leadership", eyebrow: "LEADERSHIP / EVENT STRATEGY",
    name: "Lead with purpose.\nDeliver with people.", period: "BAHAUDDIN ZAKARIYA UNIVERSITY",
    featured: "First Female Vice President — IBF Society",
    stat: "20+", statLabel: "TEAM MEMBERS · 5+ EVENTS",
    lines: ["Elected to lead student society operations while maintaining a 3.67 CGPA.", "Coordinated communications, public speaking, logistics and major university events."],
  },
  {
    number: "04", category: "Finance", eyebrow: "BANKING / FINANCIAL OPERATIONS",
    name: "Precision behind\nthe numbers.", period: "UBL + LAHORE GYMKHANA",
    featured: "Financial & Banking Internships",
    stat: "4+", statLabel: "BANKING DEPARTMENTS",
    lines: ["Supported internal audit reviews and compliance checks at United Bank Limited.", "Worked on financial ledgers, record keeping and reconciliation at Lahore Gymkhana."],
  },
];

const services = [
  {
    number: "01", icon: PenLine, title: "Content Writing\n& SEO",
    text: "Search-optimized articles, long-form blogs and website copy — built around brand voice, intent and semantic SEO.",
    tags: ["SEO ARTICLES", "WEB COPY", "CONTENT STRATEGY"],
  },
  {
    number: "02", icon: Video, title: "Video Editing\n& Short-form",
    text: "From concept and script to editing and retention. Reels designed to stop the scroll and tell a memorable story.",
    tags: ["REELS", "VIDEO EDITING", "SOCIAL CONTENT"],
  },
  {
    number: "03", icon: Users, title: "Leadership\n& Events",
    text: "Bringing teams together, executing university-scale events and making ambitious ideas operationally real.",
    tags: ["TEAM LEADERSHIP", "EVENTS", "OPERATIONS"],
  },
];

const filters = ["All work", "Writing", "Creative", "Leadership", "Finance"] as const;
type Filter = (typeof filters)[number];

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
  if (project.category === "Writing") return (
    <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border border-[#7F9A83] bg-[#304E3D] p-6 md:min-h-[270px] md:p-8">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-50" />
      <div className="relative flex items-center justify-between"><span className="eyebrow text-[#E6E6CC]">SEARCH. WRITE. RANK.</span><span className="h-3 w-3 rounded-full bg-[#E8EDDC]" /></div>
      <div className="relative mt-12"><div className="text-[clamp(46px,7vw,96px)] font-black leading-[.77] tracking-[-.085em] text-white">WORDS<br/><span className="text-[#E2E8D5]">WORK.</span></div></div>
      <div className="relative mt-6 flex justify-between border-t border-white/20 pt-4 text-[10px] tracking-[.16em] text-white/50"><span>CONTENT WITH A PURPOSE</span><span>001 / SEO</span></div>
    </div>
  );
  if (project.category === "Creative") return (
    <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[#849D8C] bg-[#4C6656] p-7 md:min-h-[270px]">
      <div className="absolute -left-12 -top-24 h-80 w-80 rounded-full bg-[#C9D9C3]/20 blur-[55px]" />
      <div className="absolute -bottom-48 -right-20 h-96 w-96 rounded-full bg-[#97B49D]/20 blur-[45px]" />
      <div className="absolute inset-0 diagonal-lines opacity-25" />
      <motion.div whileHover={{ scale: 1.07, rotate: 8 }} className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#FAF1E0]/40 bg-[#E9DDC8]/10 backdrop-blur md:h-28 md:w-28">
        <Play size={33} fill="#E9DDC8" stroke="#E9DDC8" className="ml-2" />
      </motion.div>
      <div className="relative mt-7 text-center text-[30px] font-black leading-none tracking-[-.06em] text-[#FAF1E0] md:text-[40px]">THE SCROLL<br/>STOPS HERE.</div>
      <div className="absolute bottom-5 left-6 right-6 flex justify-between text-[10px] tracking-[.16em] text-[#FAF1E0]/60"><span>REELS / EDITING</span><span>VIDEO / SOCIAL</span></div>
    </div>
  );
  if (project.category === "Leadership") return (
    <div className="relative flex min-h-[220px] items-end overflow-hidden rounded-xl border border-[#769684] bg-[#304B42] p-7 md:min-h-[270px] md:p-8">
      <div className="absolute right-0 top-0 h-full w-1/2 diagonal-lines opacity-40" />
      <span className="absolute -right-4 -top-12 text-[230px] font-black leading-none tracking-[-.12em] text-[#E9E6D7]/[.09] md:text-[290px]">20</span>
      <div className="relative"><div className="eyebrow mb-5 text-[#E9ECD9]">PEOPLE. PURPOSE. PROGRESS.</div><div className="text-5xl font-black leading-[.9] tracking-[-.07em] text-white md:text-6xl">LEAD<br/><span className="text-[#DBE5CE]">FORWARD.</span></div></div>
      <span className="absolute bottom-7 right-7 rounded-full border border-[#E9ECDD]/40 px-3 py-1 text-xs font-semibold text-[#E9ECD9]">VP / IBF</span>
    </div>
  );
  return (
    <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border border-[#839B86] bg-[#435D4D] p-7 md:min-h-[270px] md:p-8">
      <div className="absolute inset-0 grid-texture opacity-50" />
      <div className="relative flex justify-between"><span className="eyebrow text-[#DAE7CA]">ANALYZE / RECONCILE</span><span className="eyebrow text-[#DAE7CA]/70">04—08</span></div>
      <div className="relative flex h-24 items-end gap-2 pb-1">
        {[34, 53, 42, 72, 62, 84, 75, 100, 86, 112].map((height, index) => <div key={index} className="w-full rounded-t-[2px] bg-[#DAE7CA]" style={{ height, opacity: .27 + index * .07 }} />)}
      </div>
      <div className="relative flex items-end justify-between gap-3 border-t border-white/20 pt-5"><span className="text-[28px] font-black leading-none tracking-[-.065em] text-[#FFF8EC] md:text-4xl">DETAIL IS<br/>EVERYTHING.</span><ArrowUpRight className="shrink-0 text-[#DAE7CA]" size={28} /></div>
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
          <div className="mt-6 border-y border-line py-5"><div className="text-[51px] font-black leading-none tracking-[-.09em] text-[#263C30] md:text-[59px]">{project.stat}</div><p className="eyebrow mt-3 text-fog">{project.statLabel}</p></div>
          <ul className="mt-6 space-y-3 pb-1">
            {project.lines.map((line) => <li key={line} className="flex gap-3 text-[13px] leading-[1.65] text-[#586D5E]"><span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />{line}</li>)}
          </ul>
          {project.category === "Creative" && <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent">Concept · Edit · Publish <ArrowUpRight size={16} /></span>}
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

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message, website })
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.saved) {
        setFeedback({ kind: "error", message: result.error || "Sorry, your message couldn't be saved. Please try again or contact Famiya by email." });
        return;
      }

      setFeedback(result.notificationSent
        ? { kind: "success", message: "Your inquiry has been received! Famiya has been notified by email." }
        : { kind: "warning", message: "Your inquiry has been saved, but the email notification is pending. Famiya can find your message in the submissions database." });
      setName("");
      setEmail("");
      setProjectType("");
      setMessage("");
      setWebsite("");
    } catch {
      setFeedback({ kind: "error", message: "We couldn't connect to the submissions service. Please try again or email Famiya directly." });
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
      <div><label htmlFor="projectType" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Project type *</label><div className="relative"><select id="projectType" name="projectType" className="input-field appearance-none" required value={projectType} onChange={(e) => setProjectType(e.target.value)} disabled={submitting}><option value="" disabled>Select what you have in mind</option><option>SEO Content & Writing</option><option>Video Editing & Reels</option><option>Content Strategy</option><option>Event & Leadership Collaboration</option><option>Something Else</option></select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-[18px] text-fog" /></div></div>
      <div><label htmlFor="message" className="mb-2 block text-[12px] font-bold uppercase tracking-[.13em] text-[#586D5E]">Tell me about it *</label><textarea id="message" name="message" className="input-field min-h-[150px] resize-y" required minLength={10} maxLength={4000} placeholder="The big idea, the tiny details, your wildest brief…" value={message} onChange={(e) => setMessage(e.target.value)} disabled={submitting} /></div>
      <button type="submit" disabled={submitting} aria-busy={submitting} className="group flex w-full items-center justify-between rounded-xl bg-accent px-6 py-5 text-sm font-black uppercase tracking-[.1em] text-[#FBF7EE] transition-colors hover:bg-[#59735E] disabled:cursor-wait disabled:opacity-65"><span>{submitting ? "Sending your inquiry…" : "Send project inquiry"}</span><Send size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
      {feedback && <p role={feedback.kind === "error" ? "alert" : "status"} className={"rounded-lg border px-4 py-3 text-sm leading-relaxed " + (feedback.kind === "success" ? "border-[#9CB5A0] bg-[#E4EEDF] text-[#284B36]" : feedback.kind === "warning" ? "border-[#D7BD8B] bg-[#FBF1DB] text-[#70551A]" : "border-[#CD9B94] bg-[#FCEBE7] text-[#8B332D]")}>{feedback.message}{feedback.kind === "error" && <> <a href={"mailto:" + EMAIL} className="font-semibold underline">Email Famiya directly</a>.</>}</p>}
      <p className="text-xs leading-relaxed text-[#586D5E]">Inquiries are stored privately to respond to your project request. We do not sell your information. <a href="/privacy" className="underline underline-offset-2 hover:text-[#263C30]">How your information is handled</a>.</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All work");
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const filteredProjects = activeFilter === "All work" ? projects : projects.filter((p) => p.category === activeFilter);

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
          <div className="hidden items-center gap-9 md:flex"><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#work">Work</a><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#about">About</a><a className="text-[13px] font-semibold text-[#586D5E] transition-colors hover:text-[#263C30]" href="#services">Expertise</a></div>
          <div className="hidden items-center gap-4 md:flex"><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.1em] text-[#586D5E]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />Available for projects</span><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Famiya Zanaib on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9CAF9F] transition-colors hover:border-accent hover:text-accent"><Linkedin size={17}/></a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#9CAF9F] px-5 py-3 text-xs font-bold transition-colors hover:border-accent hover:text-accent">Let&apos;s talk <ArrowUpRight size={15} /></a></div>
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} className="rounded-md border border-line p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
        </nav>
        {menuOpen && <div id="mobile-menu" className="page-container flex flex-col gap-1 border-t border-line py-3 md:hidden">{[["Work", "#work"], ["About", "#about"], ["Expertise", "#services"], ["Contact", "#contact"]].map(([text,href]) => <a key={href} className="rounded-lg px-2 py-3 text-sm font-semibold hover:bg-[#D9E5D7]" href={href} onClick={() => setMenuOpen(false)}>{text}</a>)}<a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg px-2 py-3 text-sm font-semibold text-accent"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a></div>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24 xl:pt-32">
          <div className="pointer-events-none absolute -right-72 top-0 h-[800px] w-[800px] rounded-full glow opacity-40" />
          <div className="page-container relative">
            <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-12"><span className="eyebrow flex items-center gap-3 text-[#586D5E]"><span className="h-[7px] w-[7px] rounded-full bg-accent"/>THE WORK OF A CURIOUS MIND</span><span className="eyebrow text-[#586D5E]">MULTAN, PAKISTAN · 30°N / 71°E</span></Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-12">
              <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22,1,0.36,1] }}>
                  <h1 className="display text-[clamp(68px,8.7vw,147px)]"><span className="block">FAMIYA</span><span className="mt-2 block">ZANAIB<span className="text-accent">.</span></span></h1>
                </motion.div>
                <Reveal className="mt-10 max-w-[590px] lg:mt-12"><p className="eyebrow mb-4 text-accent">CONTENT STRATEGIST · WRITER · EDITOR</p><p className="text-[15px] leading-[1.85] text-[#586D5E] md:text-[17px]">Results-driven Content Writer, SEO Strategist and Short-form Video Editor with <strong className="font-semibold text-[#263C30]">3+ years of experience</strong> delivering <strong className="font-semibold text-[#263C30]">1,000+ high-quality articles</strong> and digital content that connects.</p><p className="mt-5 text-[13px] leading-[1.8] text-[#586D5E]">BBA Banking &amp; Finance Scholar (CGPA 3.67) · First Female Vice President, IBF Society</p></Reveal>
                <Reveal delay={.12} className="mt-8"><div className="flex flex-wrap gap-3"><a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-[#2B4637] px-6 py-4 text-[12px] font-bold uppercase tracking-[.07em] text-[#FBF7EE] transition-colors hover:bg-accent">Explore my work <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a><a href="#contact" className="group inline-flex items-center gap-3 rounded-full border border-[#9CAF9F] px-6 py-4 text-[12px] font-bold uppercase tracking-[.07em] transition-colors hover:border-[#45624E]">Get in touch <ArrowUpRight size={17} /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full px-3 py-4 text-[12px] font-bold uppercase tracking-[.07em] text-accent hover:text-[#263C30]"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a></div></Reveal>
              </div>
              <Reveal delay={.18} className="relative min-w-0"><CursorAvatar /></Reveal>
            </div>
            <Reveal className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-4 md:gap-4">
              {[["1,000+", "ARTICLES WRITTEN"], ["3+", "YEARS OF EXPERIENCE"], ["3.67", "BBA CGPA"], ["20+", "TEAM MEMBERS LED"]].map(([value,label]) => <div key={label} className="rounded-[16px] border border-line bg-[#E7ECE1] px-5 py-6 md:px-7 md:py-8"><p className="text-[clamp(38px,4vw,64px)] font-black leading-none tracking-[-.085em]">{value}</p><p className="eyebrow mt-4 text-[#586D5E]">{label}</p></div>)}
            </Reveal>
            <div className="mt-10 flex items-center gap-3 text-xs tracking-wide text-[#586D5E]"><ArrowDownRight size={17} /><span>SCROLL TO EXPLORE</span><span className="ml-auto text-accent">01 — 05</span></div>
          </div>
        </section>

        <div className="marquee border-y border-line bg-[#DDE6DB] py-4" aria-hidden="true"><div className="marquee-track">{Array.from({length: 4}).flatMap((_,i) => ["WORDS THAT WORK", "✳", "STORIES THAT STAY", "✳", "IDEAS INTO IMPACT", "✳"].map((item,j) => <span key={`${i}-${j}`} className={`text-[12px] font-black tracking-[.12em] ${item === "✳" ? "text-accent" : "text-[#586D5E]"}`}>{item}</span>))}</div></div>

        <section id="services" className="page-container pb-24 pt-24 md:pb-32 md:pt-32">
          <SectionTop number="01" label="WHAT I DO" right="THE THINGS I CARE ABOUT DOING WELL" />
          <Reveal className="my-10 flex flex-col justify-between gap-6 md:my-14 md:flex-row md:items-end"><h2 className="section-title max-w-3xl text-[clamp(51px,7vw,99px)]">A little bit of<br/><span className="text-accent">everything.</span> A lot<br/>of intention.</h2><p className="max-w-[250px] text-sm leading-[1.7] text-[#586D5E]">Three disciplines. One common thread: thoughtful work that actually moves things forward.</p></Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s, index) => <Reveal key={s.number} delay={index*.08}><article className="interactive-card flex h-full min-h-[365px] flex-col rounded-[20px] border border-line bg-panel p-7 md:min-h-[410px] md:p-8"><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C2D0C0] bg-[#E2E9DF]"><s.icon size={23} className="text-accent" strokeWidth={1.7}/></span><span className="eyebrow text-[#586D5E]">/{s.number}</span></div><h3 className="mt-16 whitespace-pre-line text-[30px] font-bold leading-[1.1] tracking-[-.065em] lg:text-[36px]">{s.title}</h3><p className="mt-4 text-[13px] leading-[1.85] text-[#586D5E]">{s.text}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{s.tags.map(tag => <span key={tag} className="rounded-full border border-[#C6D1C3] px-2.5 py-1.5 text-[9px] font-bold tracking-[.065em] text-[#586D5E]">{tag}</span>)}</div></article></Reveal>)}
          </div>
        </section>

        <section id="work" className="border-t border-line bg-[#E1E8DE] pb-24 pt-8 md:pb-32 md:pt-10">
          <div className="page-container">
            <SectionTop number="02" label="SELECTED WORK / EXPERIENCE" right="A TRACK RECORD, NOT JUST A TITLE" />
            <Reveal className="mt-10 flex flex-col justify-between gap-5 md:mt-14 md:flex-row md:items-end"><h2 className="section-title text-[clamp(56px,8vw,112px)]">The proof<br/>is in the <span className="stroked">work.</span></h2><p className="max-w-[255px] text-sm leading-[1.8] text-[#586D5E]">A mix of words, visuals, leadership and precision — each with its own story.</p></Reveal>
            <div className="my-10 flex flex-wrap gap-2" aria-label="Filter projects">{filters.map(filter => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${activeFilter === filter ? "border-accent bg-accent text-[#FBF7EE]" : "border-[#A9BAAB] text-[#586D5E] hover:border-[#607B67] hover:text-[#263C30]"}`}>{filter}</button>)}</div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">{filteredProjects.map(p => <ProjectCard key={p.number} project={p}/>)}</div>
            <Reveal className="mt-8 flex items-center justify-between gap-4 border-b border-line pb-6 text-xs text-[#586D5E]"><span>EVERY PROJECT IS A CHANCE TO MAKE SOMETHING MEANINGFUL.</span><span>{String(filteredProjects.length).padStart(2,"0")} PROJECTS</span></Reveal>
          </div>
        </section>

        <section id="about" className="page-container pb-24 pt-24 md:pb-32 md:pt-32">
          <SectionTop number="03" label="BEHIND THE WORK" right="A FEW THINGS WORTH KNOWING" />
          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal><div className="relative overflow-hidden rounded-[24px] border border-line bg-[#E7EDDF] p-8 md:min-h-[540px] md:p-10"><div className="absolute right-0 top-0 h-80 w-80 glow"/><span className="eyebrow relative text-accent">HELLO, I&apos;M FAMIYA.</span><p className="relative mt-10 text-[clamp(35px,4.15vw,60px)] font-black leading-[1.08] tracking-[-.065em]">I believe good ideas deserve <span className="text-accent">great execution.</span></p><p className="relative mt-8 max-w-md text-[14px] leading-[1.9] text-[#586D5E]">I&apos;m a BBA Banking & Finance scholar, content specialist and first female Vice President of the IBF Society at Bahauddin Zakariya University. My work moves between search strategy, editing timelines, event floors and financial detail — always with curiosity at the center.</p><div className="relative mt-12 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B4C2B4] bg-accent text-sm font-black text-[#FBF7EE]">FZ</span><div><span className="block text-xs font-bold">Famiya Zanaib</span><span className="mt-1 block text-[11px] text-[#586D5E]">Writer. Creator. Leader.</span></div></div></div></Reveal>
            <Reveal delay={.1}><div><h2 className="section-title text-[clamp(48px,5.7vw,78px)]">Quick facts<span className="text-accent">.</span></h2><p className="mb-9 mt-4 max-w-md text-sm leading-[1.7] text-[#586D5E]">The facts behind the person — a few coordinates on the map.</p><dl className="border-t border-line">{[
              ["LOCATION", "Multan, Pakistan"],
              ["EDUCATION", "BBA Banking & Finance", "Bahauddin Zakariya University · CGPA 3.67"],
              ["CURRENT ROLES", "Content Creator & Vice President", "IBF Society · Short-form media"],
              ["LANGUAGES", "Urdu · English", "Chinese & Arabic (Conversational)"],
              ["EMAIL", EMAIL],
              ["LINKEDIN", "View LinkedIn profile"],
            ].map(([label, value, extra]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-5 md:grid-cols-[130px_1fr]"><dt className="eyebrow pt-[4px] text-[#586D5E]">{label}</dt><dd>{label === "LINKEDIN" ? <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline md:text-[16px]">{value}<ArrowUpRight size={16}/></a> : <span className="block text-[14px] font-semibold leading-relaxed md:text-[16px]">{value}</span>}{extra && <span className="mt-1 block text-xs leading-[1.6] text-[#586D5E]">{extra}</span>}</dd></div>)}</dl><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"><Linkedin size={17}/>Connect with Famiya on LinkedIn <MoveUpRight size={16}/></a></div></Reveal>
          </div>
        </section>

        <section className="overflow-hidden border-y border-line bg-accent py-10 text-[#FBF7EE] md:py-16"><div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><p className="section-title text-[clamp(46px,6vw,85px)]">YOUR IDEA. <span className="opacity-60">MY NEXT</span><br/>OBSESSION.</p><a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.09em] text-[#FBF7EE] transition-colors hover:bg-[#5C7762]">Let&apos;s build it <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17}/></a></div></section>

        <section id="contact" className="page-container pb-28 pt-24 md:pb-36 md:pt-32">
          <SectionTop number="04" label="LET'S CONNECT" right="YOUR NEXT GREAT PROJECT STARTS HERE" />
          <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal><div><p className="eyebrow mb-6 text-accent">GOT SOMETHING IN MIND?</p><h2 className="section-title max-w-[640px] text-[clamp(51px,6.2vw,89px)]">Give me any<br/>concept, and<br/>I&apos;ll turn it into<br/><span className="text-accent">content that<br/>converts.</span></h2><p className="mt-9 max-w-md text-[15px] leading-[1.85] text-[#586D5E]">A quick brief, a half-formed idea or an ambitious launch — tell me what you&apos;re imagining. We&apos;ll start there.</p><div className="mt-10 flex flex-wrap items-center gap-3"><button type="button" onClick={handleCopy} className="group inline-flex items-center gap-3 rounded-full border border-[#9CAF9F] px-5 py-3.5 text-xs font-bold transition-colors hover:border-accent hover:text-accent">{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? "Email copied!" : "Copy email"}</button><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-[13px] text-[#586D5E] hover:text-[#263C30]">{EMAIL} <ArrowUpRight size={15}/></a></div><div className="mt-12 flex items-center gap-4 text-[#586D5E]"><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"><Linkedin size={18}/></a><a href={`mailto:${EMAIL}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"><Mail size={18}/></a><span className="eyebrow ml-2 text-[#586D5E]">LET&apos;S MAKE IT HAPPEN</span></div></div></Reveal>
            <Reveal delay={.13}><div className="rounded-[22px] border border-line bg-panel p-6 md:p-9"><div className="mb-8 flex items-center justify-between border-b border-line pb-6"><div><span className="eyebrow text-accent">PROJECT INQUIRY</span><h3 className="mt-2 text-2xl font-bold tracking-[-.04em]">Tell me your idea.</h3></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C2D0C0]"><ArrowUpRight size={23}/></span></div><ContactForm/></div></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-[#DDE7DB]"><div className="page-container pt-12"><div className="flex flex-col items-start justify-between gap-7 border-b border-line pb-12 md:flex-row md:items-end"><div><a href="#top" className="text-[clamp(48px,8vw,110px)] font-black leading-[.85] tracking-[-.08em]">FAMIYA ZANAIB<span className="text-accent">.</span></a><p className="mt-5 text-xs tracking-wide text-[#586D5E]">WORDS THAT WORK. STORIES THAT STAY.</p></div><a href="#top" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs font-bold hover:border-accent hover:text-accent">Back to top <ArrowUpRight size={16}/></a></div><div className="flex flex-col justify-between gap-5 py-7 text-xs text-[#586D5E] md:flex-row md:items-center"><p>© {new Date().getFullYear()} Famiya Zanaib. Built with intention.</p><div className="flex flex-wrap gap-6"><a href="#work" className="hover:text-[#263C30]">Work</a><a href="#about" className="hover:text-[#263C30]">About</a><a href="#contact" className="hover:text-[#263C30]">Contact</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#263C30]">LinkedIn ↗</a><a href={`mailto:${EMAIL}`} className="hover:text-[#263C30]">Email ↗</a></div><span>MULTAN, PK · WORLDWIDE ONLINE</span></div></div></footer>
    </div>
  );
}
