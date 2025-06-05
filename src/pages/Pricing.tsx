import { FC } from "react";
import { motion } from "framer-motion";

interface Tier {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "$19/mo",
    features: [
      "1 Course Storefront",
      "Standard Payment Gateways",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "$49/mo",
    highlight: true,
    features: [
      "Unlimited Course Storefronts",
      "Priority Payment Setup",
      "Advanced Analytics",
      "Custom Branding",
      "Priority Email Support",
    ],
  },
  {
    name: "Premium",
    price: "$99/mo",
    features: [
      "Everything in Pro",
      "Dedicated Onboarding Call",
      "1-on-1 Coaching Session",
      "API Access",
      "24/7 Chat Support",
    ],
  },
];

export const Pricing: FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0D1A] pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Pick a plan that grows with you. No hidden fees. Cancel anytime.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, when: "beforeChildren" },
          },
        }}
      >
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            className={`relative flex flex-col justify-between bg-[#1A1A2E] rounded-2xl p-6 ${
              tier.highlight
                ? "border-2 border-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]"
                : ""
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] rounded-full px-4 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
            )}

            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-white">{tier.price}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {tier.features.map((f, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="mt-1 text-green-400">✔</span>
                  <span className="text-gray-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-2xl px-6 py-3 font-medium text-white transition ${
                tier.highlight
                  ? "bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] hover:opacity-90"
                  : "bg-[#2B86C5] hover:bg-[#2470A0]"
              }`}
            >
              {tier.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
