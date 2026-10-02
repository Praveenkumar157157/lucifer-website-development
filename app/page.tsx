"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApiSection } from "@/components/api-section"

function LuciferHero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#08080b] px-6 pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_15%_75%,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">LuciferAI / personal tech brand</p>
          <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] md:text-8xl">Learn.<br /><span className="text-fuchsia-400">Build.</span><br />Create.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">Hi, I&apos;m K Praveenkumar. I build with code, AI, APIs, and modern web technologies — one experiment at a time.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#api" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-200">Explore the APIs</a><a href="#about" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-fuchsia-400/60 hover:text-white">About LuciferAI</a></div>
        </div>
        <motion.div className="relative mx-auto w-full max-w-sm" initial={{ opacity: 0, y: 28, rotate: -3 }} animate={{ opacity: 1, y: [0, -10, 0], rotate: [-3, 2, -3] }} transition={{ opacity: { duration: 0.7 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}>
          <motion.div className="absolute -inset-8 rounded-full bg-fuchsia-500/20 blur-3xl" animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -right-5 top-8 z-10 rounded-2xl border border-cyan-300/30 bg-[#10131c]/90 px-4 py-2 font-mono text-xs text-cyan-200 shadow-xl" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 1, 1, 0], y: [8, 0, -4, -10] }} transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.8, 1] }}>hey, let&apos;s build</motion.div>
          <img src="/images/luciferai-smiling-mascot.png" alt="Smiling animated LuciferAI girl mascot" className="relative aspect-square w-full rounded-[2rem] border border-white/15 object-cover shadow-2xl shadow-fuchsia-900/40" />
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <LuciferHero />
      <section id="about" className="bg-[#0d0d12] px-6 py-20 text-white"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// about</p><h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">Turning curiosity into practical digital experiences.</h2><p className="mt-6 max-w-2xl leading-8 text-white/55">LuciferAI is a space for learning, experimenting, and sharing projects across software development, artificial intelligence, APIs, automation, and creative technology.</p></div></section>
      <ApiSection />
      <section id="skills" className="bg-[#08080b] px-6 py-20 text-white"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">// lucifer stack</p><h2 className="mt-4 text-3xl font-bold md:text-5xl">Tools for turning ideas into systems.</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["Python", "AI / LLMs", "Next.js", "REST APIs", "Automation", "UI systems", "Data workflows", "Experiments"].map((skill) => <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-mono text-sm text-white/70 transition hover:border-fuchsia-400/50 hover:text-white">{skill}</div>)}</div></div></section>
      <Footer />
    </main>
  )
}
