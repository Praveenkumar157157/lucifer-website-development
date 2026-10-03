"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GoogleSignupButton } from "@/components/google-signup-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArchiveSignIn() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-sm flex-col justify-center">
        <Link href="/" className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft aria-hidden="true" data-icon="inline-start" /> Back home
        </Link>
        <Card className="border-none shadow-2xl shadow-primary/10">
          <CardHeader className="flex flex-col gap-1">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <GoogleSignupButton label="Continue with Google" />
            </div>
            <div className="relative flex items-center gap-3 text-xs uppercase text-muted-foreground"><span className="h-px flex-1 bg-border" /><span>or</span><span className="h-px flex-1 bg-border" /></div>
            <p className="text-center text-sm text-muted-foreground">Continue with Google to access your account.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
