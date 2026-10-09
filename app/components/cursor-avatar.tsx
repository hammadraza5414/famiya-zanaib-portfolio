"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { MousePointer2, Sparkles } from "lucide-react";

/** Decorative original avatar, not a likeness of the portfolio owner. */
export default function CursorAvatar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smooth = { stiffness: 110, damping: 23, mass: 0.7 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [9, -9]), smooth);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), smooth);
  const floatX = useSpring(useTransform(mouseX, [-1, 1], [-11, 11]), smooth);
  const floatY = useSpring(useTransform(mouseY, [-1, 1], [-9, 9]), smooth);
  const gazeX = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), smooth);
  const gazeY = useSpring(useTransform(mouseY, [-1, 1], [-3.5, 3.5]), smooth);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - .5) * 2)));
    mouseY.set(Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - .5) * 2)));
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(206,247,123,.20),transparent_53%),linear-gradient(145deg,#222b23_3%,#121613_50%,#121212_100%)]" />
        <div className="avatar-grid pointer-events-none absolute inset-0 opacity-40" />
        <span className="pointer-events-none absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[.17em] text-white/80 backdrop-blur md:left-8 md:top-8"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />CREATIVE IN MOTION</span>
        <span className="pointer-events-none absolute right-6 top-6 z-20 text-[11px] font-bold tracking-[.17em] text-accent/75">FZ / 26</span>
        <motion.div style={reducedMotion ? undefined : { x: floatX, y: floatY }} className="pointer-events-none absolute inset-0">
          <svg viewBox="0 0 520 560" className="absolute inset-0 h-full w-full" role="img" aria-label="Stylized illustrated woman with eyes that follow cursor movement" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="avatar-bg" cx="50%" cy="43%" r="64%"><stop offset="0%" stopColor="#a7c06a" stopOpacity=".48"/><stop offset="65%" stopColor="#516447" stopOpacity=".25"/><stop offset="100%" stopColor="#151b19" stopOpacity=".05"/></radialGradient>
              <linearGradient id="avatar-hair" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#342623"/><stop offset=".52" stopColor="#1e1a1a"/><stop offset="1" stopColor="#0e1010"/></linearGradient>
              <linearGradient id="avatar-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4c4a2"/><stop offset=".5" stopColor="#e4aa88"/><stop offset="1" stopColor="#c4876e"/></linearGradient>
              <linearGradient id="avatar-jacket" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#282e2c"/><stop offset=".6" stopColor="#15191b"/><stop offset="1" stopColor="#070909"/></linearGradient>
              <linearGradient id="avatar-highlight" x1="0" y1="0" x2="0.7" y2="1"><stop stopColor="#615044"/><stop offset="1" stopColor="#231d1e"/></linearGradient>
              <clipPath id="avatar-circle"><circle cx="260" cy="287" r="211" /></clipPath>
            </defs>
            <circle cx="260" cy="287" r="216" fill="url(#avatar-bg)" />
            <circle cx="260" cy="287" r="214" fill="none" stroke="#d7ff68" strokeOpacity=".33" strokeWidth="1.5" />
            <circle cx="260" cy="287" r="234" fill="none" stroke="#d7ff68" strokeOpacity=".09" strokeDasharray="3 11" />
            <g clipPath="url(#avatar-circle)">
              {/* Hair silhouette */}
              <path d="M145 240 C140 109 191 80 264 75 C345 66 393 128 388 239 L421 467 L113 479 Z" fill="url(#avatar-hair)" />
              <path d="M180 185 C140 230 133 320 109 452 L180 487 L222 335 Z" fill="#18191a" />
              <path d="M355 184 C390 235 395 347 422 462 L342 472 L313 296 Z" fill="#191818" />
              {/* Neck and shoulders */}
              <path d="M220 359 L216 415 L171 440 L249 508 L342 439 L298 415 L298 354 Z" fill="url(#avatar-skin)" />
              <path d="M104 564 C104 477 130 424 218 412 L260 462 L299 411 C389 423 426 475 439 564 Z" fill="url(#avatar-jacket)" />
              <path d="M218 414 L260 464 L237 490 L201 429 Z" fill="#3c4642" />
              <path d="M300 413 L259 465 L284 488 L324 430 Z" fill="#303c37" />
              <path d="M249 473 L242 560 L282 560 L269 473 Z" fill="#121513" />
              <path d="M158 446 Q138 485 136 559 M365 446 Q388 503 391 557" stroke="#68756c" strokeOpacity=".28" fill="none" strokeWidth="3" />
              {/* Ear, face, cheek shading */}
              <ellipse cx="182" cy="290" rx="18" ry="30" fill="#d99d80" />
              <ellipse cx="349" cy="290" rx="17" ry="29" fill="#d99d80" />
              <path d="M175 218 C176 146 204 127 263 129 C327 132 354 177 352 243 L345 322 C340 364 296 402 263 404 C231 402 189 369 180 328 Z" fill="url(#avatar-skin)" />
              <path d="M190 301 Q199 348 238 369" fill="none" stroke="#bd7b6a" strokeOpacity=".20" strokeWidth="12" strokeLinecap="round" />
              <path d="M326 298 Q317 350 290 369" fill="none" stroke="#b3745d" strokeOpacity=".16" strokeWidth="12" strokeLinecap="round" />
              <ellipse cx="207" cy="317" rx="24" ry="13" fill="#efaa93" opacity=".35" />
              <ellipse cx="324" cy="317" rx="24" ry="13" fill="#efaa93" opacity=".34" />
              {/* Soft layered side-swept hair */}
              <path d="M177 282 C152 201 163 137 206 106 C255 73 326 81 360 136 C375 163 375 224 353 282 L342 222 C318 204 299 175 287 150 C257 191 225 193 195 202 Z" fill="url(#avatar-hair)" />
              <path d="M176 267 C162 192 174 127 224 107 C270 88 299 99 329 114 C289 107 243 135 233 169 C219 194 185 202 185 261 Z" fill="url(#avatar-highlight)" opacity=".78" />
              <path d="M347 210 Q381 315 359 444 L329 455 Q358 334 340 245 Z" fill="#1d1b1c" />
              <path d="M183 225 Q163 328 188 458 L152 456 Q143 329 169 218 Z" fill="#242022" />
              {/* Brow / eyes */}
              <path d="M207 258 Q232 246 246 259" fill="none" stroke="#362521" strokeWidth="6" strokeLinecap="round" />
              <path d="M283 259 Q305 245 324 257" fill="none" stroke="#362521" strokeWidth="6" strokeLinecap="round" />
              <path d="M203 281 Q226 270 246 282 Q226 296 203 281Z" fill="#fff3e8" />
              <path d="M281 281 Q301 269 325 281 Q302 296 281 281Z" fill="#fff3e8" />
              <motion.g style={reducedMotion ? undefined : { x: gazeX, y: gazeY }}>
                <circle cx="225" cy="282" r="8.5" fill="#5b493b" />
                <circle cx="303" cy="282" r="8.5" fill="#5b493b" />
                <circle cx="225" cy="282" r="5" fill="#1f2220" />
                <circle cx="303" cy="282" r="5" fill="#1f2220" />
                <circle cx="228" cy="279" r="2.3" fill="#fff" />
                <circle cx="306" cy="279" r="2.3" fill="#fff" />
              </motion.g>
              <path d="M202 281 Q222 268 246 282 M282 282 Q306 268 327 282" fill="none" stroke="#362521" strokeWidth="3.5" strokeLinecap="round" />
              {/* Nose and expressive small smile */}
              <path d="M264 285 Q253 318 259 321 Q265 325 273 320" stroke="#b57763" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M238 344 Q260 357 288 342 Q266 366 244 350 Z" fill="#b76766" />
              <path d="M242 344 Q267 353 285 343" fill="none" stroke="#f5b7a9" strokeWidth="3" strokeLinecap="round" />
              <path d="M248 369 Q265 374 280 369" fill="none" stroke="#c48f78" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
              {/* Earring and hair glint */}
              <circle cx="349" cy="310" r="4" fill="#d7ff68" />
              <path d="M179 198 Q187 137 225 116 M352 189 Q377 287 361 360" fill="none" stroke="#8f7770" strokeOpacity=".30" strokeWidth="4" strokeLinecap="round" />
            </g>
            {/* little four-pointed sparks */}
            <path d="M81 167 L87 181 L102 187 L87 193 L81 207 L75 193 L61 187 L75 181Z" fill="#d7ff68" opacity=".85" />
            <path d="M416 111 L420 121 L431 125 L420 129 L416 141 L412 129 L401 125 L412 121Z" fill="#d7ff68" opacity=".7" />
          </svg>
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121512] via-[#121512]/55 to-transparent" />
        <div className="pointer-events-none absolute bottom-7 left-7 right-7 z-20 flex items-end justify-between gap-4 md:bottom-9 md:left-9 md:right-9">
          <div><div className="eyebrow text-accent">01 / MEET THE CREATIVE</div><p className="mt-2 text-2xl font-black leading-none tracking-[-.065em] text-white md:text-3xl">Ideas have a face.</p></div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent"><Sparkles size={20} /></div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -left-3 top-[28%] z-20 rounded-xl border border-[#454b42] bg-[#1e241e]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-6 md:px-5"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-accent">01 / CREATE</p><p className="mt-1 text-sm font-bold text-white">Content & SEO</p></div>
      <div className="pointer-events-none absolute -right-3 top-[52%] z-20 rounded-xl border border-[#454b42] bg-[#1e241e]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-right-6 md:px-5"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-accent">02 / ELEVATE</p><p className="mt-1 text-sm font-bold text-white">Video & Strategy</p></div>
      <p className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[.19em] text-[#9aa595]"><MousePointer2 size={15} className="text-accent" />Move your cursor — the avatar follows</p>
    </div>
  );
}
