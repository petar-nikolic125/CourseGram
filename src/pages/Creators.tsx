import { FC } from "react";
import { motion } from "framer-motion";
import { CreatorCard, Creator } from "../components/CreatorCard";

const creatorsData: Creator[] = [
  {
    avatarUrl: "/avatars/rachel.jpg",
    quote: "Made $1.2k in 3 days with a 2-video course. I’m hooked.",
    name: "Rachel K.",
    handle: "coachrachel",
    tag: "Fitness",
    badge: "💰 $1.2k in 3d",
  },
  {
    avatarUrl: "/avatars/mark.jpg",
    quote:
      "No marketing degree, just 10k followers and a voice. Sold out my first 50 spots.",
    name: "Mark T.",
    handle: "markcreates",
    tag: "Design",
  },
  {
    avatarUrl: "/avatars/lisa.jpg",
    quote: "My $7 grammar guide just paid my rent.",
    name: "Lisa S.",
    handle: "lisawrites",
    tag: "Writing",
  },
  {
    avatarUrl: "/avatars/jordan.jpg",
    quote: "$27k course in 30 days—unreal ROI!",
    name: "Jordan P.",
    handle: "jordanprofit",
    badge: "🏆 Top Vouch",
  },
  {
    avatarUrl: "/avatars/alex.jpg",
    quote: "Zero code setup, $5k in month one.",
    name: "Alex M.",
    handle: "alexlaunch",
    tag: "Tech",
  },
];

export const Creators: FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0D1A] pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Top Creators
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Real people, real success stories. Find your inspiration here.
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
        {creatorsData.map((c, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <CreatorCard creator={c} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
