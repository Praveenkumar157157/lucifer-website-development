"use client"

import Link from "next/link"
import { CursorTrackingCharacter } from "@/components/CursorTrackingCharacter"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07070a] px-6 pb-8 pt-28 text-white md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(168,85,247,0.2),transparent_28%),radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.08),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative z-20 max-w-xl self-center pb-10 lg:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">LUCIFER AI / digital systems</p>
          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">Build<br /><span className="text-fuchsia-400">without</span><br />limits.</h1>
          <p className="mt-7 max-w-md text-base leading-7 text-white/55">Full stack development, AI experiments, APIs, and interfaces built with curiosity and precision.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/about" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-200">View my work <span aria-hidden="true">→</span></Link><Link href="/contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:border-fuchsia-400/60 hover:text-white">Let&apos;s talk</Link></div>
        </div>
        <CursorTrackingCharacter />
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:left-12">Move your cursor around her</div>
    </section>
  )
}
