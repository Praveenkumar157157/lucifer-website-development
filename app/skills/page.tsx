import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const skills = ["Python", "AI / LLMs", "Next.js", "REST APIs", "Automation", "UI systems", "Data workflows", "Experiments"]

export default function SkillsPage() {
  return <main className="min-h-screen bg-[#08080b] text-white"><Navigation /><section className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-40"><p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">// lucifer stack</p><h1 className="mt-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">Tools for turning ideas into systems.</h1><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 font-mono text-sm text-white/70 transition hover:border-fuchsia-400/50 hover:text-white">{skill}</div>)}</div></section><Footer /></main>
}
