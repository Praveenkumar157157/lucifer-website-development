"use client"

import { useState } from "react"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

export function GoogleSignupButton({ label = "Sign up with Google" }: { label?: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGoogleSignIn() {
    setLoading(true)
    setError(null)
    const supabase = createSupabaseBrowserClient()
    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    })
    if (authError) {
      setError(authError.message)
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button type="button" onClick={handleGoogleSignIn} disabled={loading} className="flex min-h-14 w-full touch-manipulation items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-4 text-base font-semibold text-foreground shadow-sm transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60">
        <span aria-hidden="true" className="font-bold text-lg">G</span>
        {loading ? "Connecting to Google..." : label}
      </button>
      {error ? <p role="alert" className="text-center text-xs text-destructive">{error}</p> : null}
    </div>
  )
}
