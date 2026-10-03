import { convertToModelMessages, gateway, streamText } from "ai"
import { NextResponse } from "next/server"

const DEFAULT_MODEL = "google/gemini-3.8-flash"
const ALLOWED_MODELS = new Set([
  "google/gemini-2.5-flash",
  "google/gemini-3.8-flash",
  "openai/gpt-4o",
  "anthropic/claude-sonnet-4",
])

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: Parameters<typeof convertToModelMessages>[0]
      model?: string
    }
    const modelId = body.model && ALLOWED_MODELS.has(body.model) ? body.model : DEFAULT_MODEL
    const messages = body.messages ?? []

    if (!Array.isArray(messages) || messages.length > 40) {
      return NextResponse.json({ error: "Invalid conversation." }, { status: 400 })
    }

    const modelMessages = await convertToModelMessages(messages)
    const result = streamText({
      model: gateway(modelId),
      system: "You are LUCIFER AI, a friendly, concise AI guide for K Praveenkumar's personal technology lab. Help with Python, AI, APIs, Next.js, automation, debugging, and creative experiments. Be practical, curious, and honest. Never claim to have performed actions you cannot perform.",
      messages: modelMessages,
      maxOutputTokens: 1200,
    })

    return new Response(result.textStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    })
  } catch {
    return NextResponse.json({ error: "The AI Gateway request failed." }, { status: 500 })
  }
}
