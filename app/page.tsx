import { Navigation } from "@/components/navigation"
import { BentoGrid } from "@/components/bento-grid"
import { SocialSection } from "@/components/social-section"
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
        <div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-8 rounded-full bg-fuchsia-500/20 blur-3xl" /><img src="/images/image.png" alt="Neon purple cat mascot wearing pixel sunglasses" className="relative aspect-square w-full rounded-[2rem] border border-white/15 object-cover shadow-2xl shadow-fuchsia-900/40" /></div>
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
      <BentoGrid />
      <SocialSection />
      <Footer />
    </main>
  )
}
