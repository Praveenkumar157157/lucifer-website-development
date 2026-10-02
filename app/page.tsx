"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/Hero"

function LuciferHero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#08080b] px-6 pt-28 text-white">
      <div className="absolute inset-0 bg-[url('/images/luciferai-home-background.png')] bg-cover bg-center opacity-45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,11,0.98)_0%,rgba(8,8,11,0.78)_42%,rgba(8,8,11,0.3)_100%),linear-gradient(180deg,rgba(8,8,11,0.35),rgba(8,8,11,0.94))]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_15%_75%,rgba(34,211,238,0.12),transparent_28%)]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">LUCIFER AI / personal tech brand</p>
          <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] md:text-8xl">LUCIFER <span className="text-fuchsia-400">AI.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">Hi, I&apos;m K Praveenkumar. I build with code, AI, APIs, and modern web technologies — one experiment at a time.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/api-explorer" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-200">Explore the APIs</Link><Link href="/about" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-fuchsia-400/60 hover:text-white">About LUCIFER AI</Link></div>
        </div>
        <motion.div role="button" tabIndex={0} aria-label="Open LUCIFER AI chat" onClick={() => document.getElementById("ai-chat")?.scrollIntoView({ behavior: "smooth" })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") document.getElementById("ai-chat")?.scrollIntoView({ behavior: "smooth" }) }} className="relative mx-auto w-full max-w-sm cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-8 focus-visible:ring-offset-[#08080b]" initial={{ opacity: 0, y: 28, rotate: -3 }} animate={{ opacity: 1, y: [0, -10, 0], rotate: [-3, 2, -3] }} transition={{ opacity: { duration: 0.7 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}>
          <motion.div className="absolute -inset-8 rounded-full bg-fuchsia-500/20 blur-3xl" animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -right-5 top-8 z-10 rounded-2xl border border-cyan-300/30 bg-[#10131c]/90 px-4 py-2 font-mono text-xs text-cyan-200 shadow-xl" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 1, 1, 0], y: [8, 0, -4, -10] }} transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.8, 1] }}>hey, let&apos;s build</motion.div>
          <img src="/images/luciferai-smiling-mascot.png" alt="Smiling animated LUCIFER AI girl mascot" className="relative aspect-square w-full rounded-[2rem] border border-white/15 object-cover shadow-2xl shadow-fuchsia-900/40" />
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section className="bg-[#0d0d12] px-6 py-20 text-white"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3"><Link href="/chat" className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6 transition hover:border-cyan-300/60"><p className="font-mono text-xs text-cyan-300">01 / AI</p><h2 className="mt-12 text-2xl font-bold">Talk to LUCIFER AI</h2></Link><Link href="/api-explorer" className="rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/[0.06] p-6 transition hover:border-fuchsia-400/60"><p className="font-mono text-xs text-fuchsia-300">02 / APIs</p><h2 className="mt-12 text-2xl font-bold">Explore the endpoints</h2></Link><Link href="/skills" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/40"><p className="font-mono text-xs text-white/50">03 / STACK</p><h2 className="mt-12 text-2xl font-bold">See the toolkit</h2></Link></div></section>
      <Footer />
    </main>
  )
}
