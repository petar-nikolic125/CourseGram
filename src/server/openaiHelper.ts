import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY! });

export async function chat(messages: ChatCompletionMessageParam[]) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages,
      });
      return res.choices[0].message?.content ?? "";
    } catch (err: unknown) {
      const anyErr = err as { response?: { status: number; headers: Record<string, string> } };
      const status = anyErr.response?.status;
      if (status === 429 && attempt < 2) {
        const retry = Number(anyErr.response?.headers["retry-after"] || 3);
        await new Promise((r) => setTimeout(r, retry * 1000));
        continue;
      }
      throw err as Error;
    }
  }
  throw new Error("OpenAI request failed");
}
