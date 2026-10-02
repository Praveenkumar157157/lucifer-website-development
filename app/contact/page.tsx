import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return <main className="min-h-screen bg-[#08080b] text-white"><Navigation /><section className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-40"><p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// contact</p><h1 className="mt-6 text-6xl font-black tracking-[-0.06em] md:text-8xl">Let&apos;s build <span className="text-cyan-300">next.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">Have an idea, API, or creative experiment? Start a conversation with LuciferAI.</p><a href="mailto:hello@luciferai.dev" className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-cyan-200">hello@luciferai.dev</a></section><Footer /></main>
}
