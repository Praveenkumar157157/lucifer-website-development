import { NextResponse } from "next/server"

const endpoints = {
  wingo1m: "https://luciferapi.com/wingo1m.php",
  wingo30s: "https://luciferapi.com/30sec.php",
  trx1m: "https://luciferapi.com/trx1m.php",
  k3_1m: "https://luciferapi.com/k3_1m.php",
  d5_1m: "https://luciferapi.com/d5_1m.php",
} as const

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("source") as keyof typeof endpoints | null
  const endpoint = key ? endpoints[key] : undefined

  if (!endpoint) {
    return NextResponse.json({ error: "Unknown API source" }, { status: 400 })
  }

  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" }, next: { revalidate: 30 } })
    const text = await response.text()
    let data: unknown
    try {
      data = JSON.parse(text)
    } catch {
      data = text
    }

    return NextResponse.json({ source: key, data, fetchedAt: new Date().toISOString() }, { status: response.status })
  } catch {
    return NextResponse.json({ error: "The upstream API could not be reached." }, { status: 502 })
  }
}

export const runtime = "nodejs"
