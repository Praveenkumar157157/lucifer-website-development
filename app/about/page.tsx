import { Footer } from "@/components/footer"

const services = [
  ["Websites", "Modern, responsive websites for personal and professional projects."],
  ["Web Applications", "Custom applications with practical interfaces and backend functionality."],
  ["API Development", "Create and integrate APIs for connecting applications and services."],
  ["UI Development", "Responsive interfaces for web applications and dashboards."],
  ["UI/UX Design", "Clean layouts and user-focused digital experiences."],
  ["Automated Bots", "Custom automation and bot solutions for suitable workflows."],
  ["Custom Automation", "Automate repetitive tasks and connect different systems."],
  ["Mini Projects", "Small custom projects for learning, testing, and practical use."],
]

export default function AboutPage() {
  return <main className="min-h-screen bg-[#08080b] text-white"><section className="mx-auto max-w-6xl px-6 pb-28 pt-40"><p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// about me</p><h1 className="mt-6 max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Building digital <span className="text-cyan-300">experiences.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">I&apos;m a developer focused on creating modern websites, applications, APIs, user interfaces, and automated solutions. I enjoy turning ideas into functional, clean, and responsive digital products.</p><div className="mt-20"><p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">// what I do</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, description]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40"><h2 className="font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-white/45">{description}</p></article>)}</div></div><div className="mt-20 border-t border-white/10 pt-8"><p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// featured work</p><h2 className="mt-4 text-3xl font-bold">My projects</h2><div className="mt-6 grid gap-3 md:grid-cols-4">{[["LuciferAPI", "API development and data services."], ["Web Applications", "Custom web-based applications and tools."], ["UI Projects", "Modern interfaces and dashboards."], ["Automation Projects", "Bots and automated workflows."]].map(([title, description]) => <div key={title} className="rounded-2xl border border-white/10 p-5"><h3 className="font-semibold text-cyan-200">{title}</h3><p className="mt-2 text-sm text-white/45">{description}</p></div>)}</div></div></section><Footer /></main>
}
