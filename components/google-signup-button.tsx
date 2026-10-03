"use client"

import { useState } from "react"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

type GoogleSignupButtonProps = {
  label?: string
}

export function GoogleSignupButton({ label = "Sign up with Google" }: GoogleSignupButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGoogleSignIn() {
    setLoading(true)
    setError(null)

    try {
      const supabase = createSupabaseBrowserClient()
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin },
      })

      if (authError) throw authError
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Unable to connect to Google.")
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="flex min-h-14 w-full touch-manipulation items-center justify-center gap-3 rounded-xl border border-border bg-foreground px-5 py-4 text-base font-bold text-background transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span aria-hidden="true" className="font-semibold">G</span>
        {loading ? "Connecting to Google..." : label}
      </button>
      {error ? <p role="alert" className="text-center text-xs text-destructive">{error}</p> : null}
    </div>
  )
}
