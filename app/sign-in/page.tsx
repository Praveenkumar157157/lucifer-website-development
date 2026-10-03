import type { Metadata } from "next"
import SignInCard from "@/components/sign-in-card"

export const metadata: Metadata = {
  title: "Sign in | LUCIFER AI",
  description: "Sign in to continue to LUCIFER AI.",
}

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-4 py-16 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[min(80vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-12 size-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <SignInCard />
    </main>
  )
}
