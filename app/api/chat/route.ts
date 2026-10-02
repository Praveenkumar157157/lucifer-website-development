import { convertToModelMessages, streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()
  const modelMessages = await convertToModelMessages(messages)

  const result = streamText({
    model: "google/gemini-3.8-flash",
    system: "You are LuciferAI, a friendly, concise AI guide for K Praveenkumar's personal technology lab. Help with Python, AI, APIs, Next.js, automation, debugging, and creative experiments. Be practical, curious, and honest. Never claim to have performed actions you cannot perform.",
    messages: modelMessages,
  })

  return result.toUIMessageStreamResponse()
}
