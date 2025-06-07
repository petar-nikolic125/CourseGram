import type { Basics, PricingTier } from "../../types/business";

export type { Basics };

export interface PricingData {
  tiers: PricingTier[];
}

export interface MarketingData {
  captions: string[];
  hashtags: string[];
  bestTimes?: Array<{ time: string; count: number }>;
}
