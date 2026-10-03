import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const services = [
  "Mini Projects",
  "Websites & Web Applications",
  "API Development & Integration",
  "UI Development",
  "UI/UX Design",
  "Automated Bots",
  "Custom Automation",
  "Dashboard & Admin UI",
  "Frontend Development",
  "Custom Web Solutions",
]

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      <Navigation />
      <section className="relative mx-auto max-w-6xl px-6 pb-28 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -right-32 top-28 size-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-96 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">// contact luciferai</p>
            <h1 className="mt-6 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-8xl">Have a project<br />in mind? <span className="text-fuchsia-400">Let&apos;s build it.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">Have a project in mind? Let&apos;s build it together. Tell me what you&apos;re imagining and we&apos;ll turn the first idea into a working system.</p>
            <a href="mailto:lucifer@luciferapi.com?subject=Start%20a%20Project" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-cyan-200">Start a Project <span aria-hidden="true">→</span></a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">I&apos;m available for</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service, index) => <li key={service} className="flex items-center gap-3 text-sm text-white/70"><span className="font-mono text-xs text-cyan-300/70">0{index + 1}</span>{service}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><span className="font-mono text-xs uppercase tracking-[0.25em] text-white/35">Email</span><a href="mailto:lucifer@luciferapi.com" className="text-xl font-semibold text-cyan-300 transition hover:text-white sm:text-2xl">lucifer@luciferapi.com</a></div>
      </section>
      <Footer />
    </main>
  )
}
