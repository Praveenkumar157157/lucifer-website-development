import { convertToModelMessages, streamText } from "ai"

const DEFAULT_MODEL = "google/gemini-3.8-flash"

export async function POST(request: Request) {
  const body = (await request.json()) as {
    messages?: Parameters<typeof convertToModelMessages>[0]
    model?: string
  }
  const modelMessages = await convertToModelMessages(body.messages ?? [])

  const result = streamText({
    model: body.model || DEFAULT_MODEL,
    system: "You are LUCIFER AI, a friendly, concise AI guide for K Praveenkumar's personal technology lab. Help with Python, AI, APIs, Next.js, automation, debugging, and creative experiments. Be practical, curious, and honest. Never claim to have performed actions you cannot perform.",
    messages: modelMessages,
  })

  return new Response(result.textStream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
  })
}
