"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Loader2, RefreshCw, Terminal } from "lucide-react"

const apis = [
  { id: "wingo1m", name: "Wingo 1M", endpoint: "wingo1m.php", note: "1-minute result history" },
  { id: "wingo30s", name: "Wingo 30 Sec", endpoint: "30sec.php", note: "30-second result history" },
  { id: "trx1m", name: "TRX 1M", endpoint: "trx1m.php", note: "1-minute result history" },
  { id: "k3_1m", name: "K3 1M", endpoint: "k3_1m.php", note: "1-minute result history" },
  { id: "d5_1m", name: "D5 1M", endpoint: "d5_1m.php", note: "1-minute result history" },
] as const

export function ApiSection() {
  const [active, setActive] = useState<(typeof apis)[number]["id"]>("wingo1m")
  const [payload, setPayload] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const selected = apis.find((api) => api.id === active) ?? apis[0]
  const url = `https://luciferapi.com/${selected.endpoint}`

  async function fetchResults() {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(`/api/results?source=${selected.id}`)
      const result = await response.json()
      if (!response.ok) throw new Error(result.error ?? "Request failed")
      setPayload(result.data)
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Request failed")
    } finally {
      setLoading(false)
    }
  }

  async function copyEndpoint() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section id="api" className="relative overflow-hidden bg-[#08080b] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(34,211,238,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">// api section</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Build on the data layer.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/55">Simple, public GET endpoints for result and history data. Explore a source, test the response, and wire LuciferAI into your next experiment.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2 px-3 py-2 text-xs text-white/40"><Terminal className="h-4 w-4 text-cyan-300" /> available endpoints</div>
            <div className="space-y-2">
              {apis.map((api) => (
                <button key={api.id} onClick={() => { setActive(api.id); setPayload(null); setError("") }} className={`w-full rounded-2xl border p-4 text-left transition ${active === api.id ? "border-fuchsia-400/50 bg-fuchsia-400/10" : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"}`}>
                  <div className="flex items-center justify-between"><span className="font-semibold">{api.name}</span><ArrowUpRight className="h-4 w-4 text-white/30" /></div>
                  <p className="mt-1 font-mono text-xs text-white/40">{api.note}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-[#101016] p-5 shadow-2xl shadow-fuchsia-950/20 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">GET / {selected.endpoint}</p><h3 className="mt-2 text-2xl font-bold">{selected.name}</h3></div><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">no auth</span></div>
            <button onClick={copyEndpoint} className="mt-6 flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-left font-mono text-xs text-white/55 hover:border-cyan-300/40"><span className="truncate">{url}</span>{copied ? <Check className="h-4 w-4 shrink-0 text-emerald-300" /> : <Copy className="h-4 w-4 shrink-0" />}</button>
            <div className="mt-5 flex items-center gap-3"><button onClick={fetchResults} disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-200 disabled:opacity-50">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />} Test endpoint</button><span className="font-mono text-xs text-white/35">GET · JSON / history</span></div>
            <motion.pre key={`${selected.id}-${String(payload)}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 min-h-48 max-h-72 overflow-auto rounded-2xl border border-white/10 bg-black/45 p-4 font-mono text-xs leading-6 text-cyan-100/75">{error ? `Error: ${error}` : payload ? JSON.stringify(payload, null, 2) : "// Response preview\n// Select an endpoint and test the connection."}</motion.pre>
            <p className="mt-4 text-xs text-white/35">For result/history display only. No prediction or betting functionality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
