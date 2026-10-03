import { gateway, generateText } from "ai"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { prompt?: string }
    const prompt = body.prompt?.trim().slice(0, 500)

    if (!prompt) {
      return NextResponse.json({ error: "Enter a question for the assistant." }, { status: 400 })
    }

    const { text } = await generateText({
      model: gateway("anthropic/claude-sonnet-4.5"),
      system:
        "You are the LUCIFER AI hero assistant. Give concise, practical answers about creative AI systems, APIs, modern web development, and turning ideas into useful prototypes. Keep replies under 80 words and do not claim to access private data.",
      prompt,
      maxOutputTokens: 160,
    })

    return NextResponse.json({ text })
  } catch {
    return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 500 })
  }
}
