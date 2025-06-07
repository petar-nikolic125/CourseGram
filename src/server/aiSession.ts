import { v4 as uuidv4 } from "uuid";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import type { Basics, WeekPlan, Forecast, PricingTier, Metrics } from "../types/business.js";
import { chat } from "./openaiHelper";

export class AISession {
  id: string;
  messages: ChatCompletionMessageParam[];
  createdAt: number;
  basics: Basics;
  pricing: PricingTier[] | null = null;

  constructor(basics: Basics) {
    this.id = uuidv4();
    this.createdAt = Date.now();
    this.basics = basics;
    this.messages = [
      {
        role: "system",
        content:
          "You are a veteran COO specializing in online micro-courses. Respond in concise JSON.",
      },
      {
        role: "user",
        content: JSON.stringify(basics),
      },
    ];
  }

  addUser(content: string) {
    this.messages.push({ role: "user", content });
  }

  addAssistant(content: string) {
    this.messages.push({ role: "assistant", content });
  }

  async start(): Promise<{ pricing: PricingTier[]; weekPlan: WeekPlan; forecast: Forecast }> {
    const content = await chat(this.messages);
    this.addAssistant(content);
    const parsed = JSON.parse(content);
    this.pricing = parsed.pricing;
    return parsed;
  }

  async next(metrics: Metrics): Promise<{ updatedPlan: WeekPlan; forecast: Forecast; advice: string }> {
    this.addUser(JSON.stringify({ basics: this.basics, pricing: this.pricing, metrics }));
    this.addUser("continue");
    const content = await chat(this.messages);
    this.addAssistant(content);
    return JSON.parse(content);
  }

  async end(): Promise<{ summary: string }> {
    this.addUser("End simulation and summarize results");
    const content = await chat(this.messages);
    this.addAssistant(content);
    return { summary: content };
  }
}
