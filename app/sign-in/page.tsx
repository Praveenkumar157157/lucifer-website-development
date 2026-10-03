import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GoogleSignupButton } from "@/components/google-signup-button"

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md flex-col justify-center">
        <Link href="/" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft aria-hidden="true" data-icon="inline-start" />
          Back home
        </Link>
        <section className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-8" aria-labelledby="sign-in-title">
          <header className="mb-7 flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">LUCIFER AI</p>
            <h1 id="sign-in-title" className="text-3xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm leading-6 text-muted-foreground">Sign in to continue exploring the AI workspace.</p>
          </header>
          <div className="flex flex-col gap-5">
            <GoogleSignupButton label="Continue with Google" />
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              <span>secure access</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center text-xs leading-5 text-muted-foreground">By continuing, you agree to use this site responsibly. Your Google account remains protected by Google OAuth.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
