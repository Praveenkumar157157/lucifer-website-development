import { createUIMessageStream, createUIMessageStreamResponse } from "ai"
import { NextResponse } from "next/server"

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
const DEFAULT_MODEL = "openai/gpt-4o"
const ALLOWED_MODELS = new Set([
  "google/gemini-2.5-flash",
  "google/gemini-3.8-flash",
  "openai/gpt-4o",
  "anthropic/claude-sonnet-4",
])

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: Array<{
        role: "user" | "assistant" | "system"
        parts?: Array<{ type: string; text?: string }>
      }>
      model?: string
    }
    const modelId = body.model && ALLOWED_MODELS.has(body.model) ? body.model : DEFAULT_MODEL
    const messages = body.messages ?? []

    if (!Array.isArray(messages) || messages.length > 40) {
      return NextResponse.json({ error: "Invalid conversation." }, { status: 400 })
    }

    const modelMessages = messages.map((message) => ({
      role: message.role,
      content: (message.parts ?? [])
        .filter((part): part is { type: "text"; text: string } => part.type === "text")
        .map((part) => part.text)
        .join(""),
    })).filter((message) => message.content)

    const apiKey = process.env.OPENROUTER_API_KEY_2 ?? process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "OpenRouter API key is not configured." }, { status: 500 })
    }

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://lucifer-website-development.vercel.app",
        "X-OpenRouter-Title": "LUCIFER AI",
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          {
            role: "system",
            content:
              "You are LUCIFER AI, a concise technical assistant for K Praveenkumar. Answer the user's latest question directly. Do not introduce yourself, repeat your capabilities, add meta commentary, or include notes about what you can or cannot execute unless the user asks. Help with Python, AI, APIs, Next.js, automation, debugging, and creative experiments. Be practical and honest. Never claim to have performed actions you cannot perform.",
          },
          ...modelMessages,
        ],
        max_tokens: 1200,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "The OpenRouter request failed." }, { status: 502 })
    }

    const data = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> }
    const text = data.choices?.[0]?.message?.content ?? ""
    const stream = createUIMessageStream({
      execute: ({ writer }) => {
        const textId = "openrouter-text"
        writer.write({ type: "text-start", id: textId })
        writer.write({ type: "text-delta", id: textId, delta: text })
        writer.write({ type: "text-end", id: textId })
      },
    })

    return createUIMessageStreamResponse({ stream })
  } catch {
    return NextResponse.json({ error: "The OpenRouter request failed." }, { status: 500 })
  }
}
