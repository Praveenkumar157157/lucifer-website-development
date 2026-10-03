import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { prompt?: string }
    const prompt = body.prompt?.trim().slice(0, 500)

    if (!prompt) {
      return NextResponse.json({ error: "Enter a question for the assistant." }, { status: 400 })
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "anthropic/claude-sonnet-4.5",
        messages: [
          {
            role: "system",
            content:
              "You are the LUCIFER AI hero assistant. Give concise, practical answers about creative AI systems, APIs, modern web development, and turning ideas into useful prototypes. Keep replies under 80 words and do not claim to access private data.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 160,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 502 })
    }

    const data = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> }
    return NextResponse.json({ text: data.choices?.[0]?.message?.content ?? "" })
  } catch {
    return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 500 })
  }
}
