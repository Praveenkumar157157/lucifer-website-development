import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return <main className="min-h-screen bg-[#08080b] text-white"><Navigation /><section className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-40"><p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// about luciferai</p><h1 className="mt-6 max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Curiosity into <span className="text-cyan-300">systems.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">LuciferAI is a personal technology lab by K Praveenkumar for learning, experimenting, and building useful digital experiences with code, AI, APIs, and automation.</p></section><Footer /></main>
}
