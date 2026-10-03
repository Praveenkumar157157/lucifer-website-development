"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

export function GoogleSignupButton({ label = "Sign up with Google" }: { label?: string }) {
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
        className="flex min-h-14 w-full touch-manipulation items-center justify-center gap-2 rounded-xl border border-white/15 bg-white px-5 py-4 text-base font-bold text-black shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : <span className="text-base font-black">G</span>}
        {loading ? "Connecting to Google..." : label}
      </button>
      {error && <p role="alert" className="text-xs text-red-300">{error}</p>}
    </div>
  )
}
