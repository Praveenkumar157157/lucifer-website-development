import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <section className="bg-[#0d0d12] px-6 py-20 text-white"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3"><a href="/chat" className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6 transition hover:border-cyan-300/60"><p className="font-mono text-xs text-cyan-300">01 / AI</p><h2 className="mt-12 text-2xl font-bold">Talk to LUCIFER AI</h2></a><a href="/api-explorer" className="rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/[0.06] p-6 transition hover:border-fuchsia-400/60"><p className="font-mono text-xs text-fuchsia-300">02 / APIs</p><h2 className="mt-12 text-2xl font-bold">Explore the endpoints</h2></a><a href="/skills" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/40"><p className="font-mono text-xs text-white/50">03 / STACK</p><h2 className="mt-12 text-2xl font-bold">See the toolkit</h2></a></div></section>
      <Footer />
    </main>
  )
}
