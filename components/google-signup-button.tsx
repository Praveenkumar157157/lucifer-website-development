"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

export function GoogleSignupButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGoogleSignup() {
    setLoading(true)
    setError(null)

    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleGoogleSignup}
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : <span className="text-base font-black">G</span>}
        {loading ? "Connecting to Google..." : "Sign up with Google"}
      </button>
      {error && <p role="alert" className="text-xs text-red-300">{error}</p>}
    </div>
  )
}
