"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { MousePointer2, Sparkles } from "lucide-react";

/** Uses the user-provided portfolio avatar image with subtle cursor-reactive motion. */
export default function CursorAvatar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smooth = { stiffness: 110, damping: 23, mass: 0.7 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), smooth);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), smooth);
  const floatX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), smooth);
  const floatY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), smooth);
  const glowX = useSpring(useTransform(mouseX, [-1, 1], [38, 62]), smooth);
  const glowY = useSpring(useTransform(mouseY, [-1, 1], [30, 56]), smooth);
  const backgroundGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(206,247,123,.22), transparent 32%), linear-gradient(145deg,#222b23 3%,#121613 50%,#121212 100%)`;

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)));
    mouseY.set(Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)));
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-[550px]" style={{ perspective: 1100 }}>
      <motion.div
        ref={cardRef}
        onPointerMove={move}
        onPointerLeave={reset}
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="avatar-card relative isolate aspect-[0.93] overflow-hidden rounded-[30px] border border-[#42483b] bg-[#131712] shadow-[0_24px_85px_rgba(0,0,0,.36)] md:rounded-[36px]"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-90"
          style={reducedMotion ? undefined : { background: backgroundGlow }}
        />
        <div className="avatar-grid pointer-events-none absolute inset-0 opacity-30" />
        <span className="pointer-events-none absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[.17em] text-white/80 backdrop-blur md:left-8 md:top-8"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />PORTFOLIO AVATAR</span>
        <span className="pointer-events-none absolute right-6 top-6 z-20 text-[11px] font-bold tracking-[.17em] text-accent/75">FZ / 26</span>
        <motion.div
          style={reducedMotion ? undefined : { x: floatX, y: floatY }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center p-5 md:p-6"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[26px] border border-white/8 bg-[#1a201a] md:rounded-[30px]">
            <Image
              src="/famiya-avatar.jpg"
              alt="Illustrated portrait avatar for Famiya Zanaib"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 550px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,.52),transparent_28%,transparent_70%,rgba(10,10,10,.12))]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
          </div>
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121512] via-[#121512]/55 to-transparent" />
        <div className="pointer-events-none absolute bottom-7 left-7 right-7 z-20 flex items-end justify-between gap-4 md:bottom-9 md:left-9 md:right-9">
          <div>
            <div className="eyebrow text-accent">01 / MEET THE CREATIVE</div>
            <p className="mt-2 text-2xl font-black leading-none tracking-[-.065em] text-white md:text-3xl">Content with presence.</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent shadow-[0_0_24px_rgba(206,247,123,.15)]">
            <Sparkles size={18} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-1 top-[48%] z-30 hidden -translate-y-1/2 items-center gap-3 rounded-full border border-white/12 bg-black/45 px-4 py-3 text-[11px] font-semibold text-white/85 shadow-[0_14px_34px_rgba(0,0,0,.36)] backdrop-blur md:flex"
        animate={reducedMotion ? { y: 0 } : { y: [-6, 6, -6] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"><MousePointer2 size={16} /></span>
        Move your cursor
      </motion.div>
    </div>
  );
}
