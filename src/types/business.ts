export interface Basics {
  niche: string;
  productType: string;
  targetPriceRange: string;
}

export interface PricingTier {
  label: string;
  price: number;
}

export interface WeekPlan {
  tasks: string[];
}

export interface Forecast {
  months: Array<{ month: string; revenue: number }>;
}

export interface Metrics {
  sales: number;
  traffic: number;
  cvr: number;
}
