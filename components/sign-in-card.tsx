"use client"

import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { GoogleSignupButton } from "@/components/google-signup-button"

export default function SignInCard() {
  return (
    <section className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-2xl">
      <div className="rounded-[1.6rem] border border-white/10 bg-[#0d0d12]/90 px-6 py-8 sm:px-9 sm:py-10">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>

        <div className="mb-8 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-300/75">LUCIFER AI / ACCESS</p>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Welcome back.</h1>
          <p className="max-w-sm text-sm leading-6 text-white/55">Sign in with Google to unlock the AI tools, projects, games, and experiments.</p>
        </div>

        <GoogleSignupButton label="Continue with Google" />

        <div className="my-7 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-white/30">
          <span className="h-px flex-1 bg-white/10" />
          secure access
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06] p-4 text-xs leading-5 text-white/55">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <p>Your account uses Supabase Auth. We never store your Google password.</p>
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          New here? <Link href="/" className="text-cyan-300 transition hover:text-cyan-200">Explore the site first</Link>
        </p>
      </div>
    </section>
  )
}
