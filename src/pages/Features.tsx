import { FC } from "react";
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiDollarSign,
  FiLayers,
  FiShield,
  FiBox,
  FiZap,
} from "react-icons/fi";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FiMonitor className="text-3xl text-[#FF3CAC]" />,
    title: "No Code Store Builder",
    description:
      "Launch your course storefront in minutes—no technical skills required. Drag, drop, and go live.",
  },
  {
    icon: <FiDollarSign className="text-3xl text-[#784BA0]" />,
    title: "Built-in Payments",
    description:
      "Accept credit cards, Apple Pay, Google Pay, and more. We handle PCI compliance so you don’t have to.",
  },
  {
    icon: <FiLayers className="text-3xl text-[#2B86C5]" />,
    title: "Flexible Course Layouts",
    description:
      "Showcase videos, PDFs, quizzes, and downloads in a sleek, customizable interface that fits your brand.",
  },
  {
    icon: <FiShield className="text-3xl text-[#FF3CAC]" />,
    title: "Secure Content",
    description:
      "Protect your PDF and video assets behind a secure paywall. We automatically watermark and obfuscate links.",
  },
  {
    icon: <FiBox className="text-3xl text-[#784BA0]" />,
    title: "Inventory & Bundles",
    description:
      "Package multiple courses, bundle with eBooks, or sell one-off digital downloads. You’re in full control.",
  },
  {
    icon: <FiZap className="text-3xl text-[#2B86C5]" />,
    title: "Fast & Scalable",
    description:
      "Our infrastructure scales with your traffic—no slowdowns when your promotion goes viral.",
  },
];

export const Features: FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0D1A] pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features to Grow Your Course Business
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-400 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Everything you need—storefront, payments, content protection, analytics, and integrations—built into one platform.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, when: "beforeChildren" },
          },
        }}
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1A1A2E] rounded-2xl p-6 flex flex-col items-start space-y-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] bg-opacity-20 rounded-full p-4">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
