// src/components/Hero.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { LiveCounter } from "./LiveCounter";

export default function Hero() {
  const [ticker, setTicker] = useState("@coachmike just earned $3,482");
  const navigate = useNavigate();
  useEffect(() => {
    const data = [
      "@coachmike just earned $3,482",
      "@creatorsara just earned $1,208",
      "@buildtim just earned $542",
    ];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % data.length;
      setTicker(data[i]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="
        relative overflow-hidden snap-container
        min-h-screen
        bg-transparent                         /* no solid bg—shows seamless-gradient */
        flex flex-col md:flex-row
        items-center justify-between
        px-6 md:px-12 lg:px-24
        pt-28 pb-16
      "
    >
      {/** 1) Very faint neon wash behind everything (–z-20) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-insta-purple/10 via-insta-blue/10 to-insta-pink/10
          -z-20
        "
      />

      {/** 2) Neon “orb” behind content (–z-10, no blur) */}
      <div
        className="
          absolute top-[-10%] right-[-5%]
          w-96 h-96 rounded-full
          bg-gradient-to-tr from-insta-pink/30 via-insta-purple/25 to-insta-blue/20
          animate-floatY                   /* gentle up/down float */
          opacity-80
          -z-10
        "
      />

      {/** 3) Small neon “spark” circles (–z-10, no blur) */}
      <div
        className="
          absolute bottom-10 right-10
          w-24 h-24 rounded-full
          bg-gradient-to-br from-insta-orange/25 to-insta-yellow/20
          animate-floatY
          opacity-70
          -z-10
        "
      />
      <div
        className="
          absolute top-1/3 left-10
          w-20 h-20 rounded-full
          bg-gradient-to-br from-insta-purple/25 to-insta-pink/20
          animate-floatX
          opacity-70
          -z-10
        "
      />

      {/** ──────────────────────────────────────────────────
         TEXT & BUTTONS (z-10)
         ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full md:w-1/2 max-w-2xl space-y-10">
        <h1
          className="
            text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-insta-pink via-insta-purple to-insta-blue
            animate-text-gradient           /* continuous shimmer */
            drop-shadow-[0_0_20px_rgba(214,41,118,0.6)]  /* pink glow shadow */
            leading-[1.1]
          "
        >
          Launch your course store in{" "}
          <span
            className="
              pulsing-underline                   /* pulsing neon underline */
              text-transparent bg-clip-text
              bg-gradient-to-r from-insta-yellow via-insta-orange to-insta-pink
              hover:underline-pulse               /* extra pulse on hover */
              focus:outline-none focus:ring-4 focus:ring-insta-yellow/40
              transition-all duration-300
              cursor-pointer
            "
          >
            4 minutes
          </span>{" "}
          — no code.
        </h1>

        <p
          className="
            text-lg md:text-xl font-medium
            text-gray-100/90
            tracking-wide leading-relaxed
            transform transition-transform duration-500
            hover:scale-105                     /* slight pop on hover */
          "
        >
          Create{" "}
          <span
            className="
              text-transparent bg-clip-text
              bg-gradient-to-r from-insta-orange via-insta-pink to-insta-purple
              animate-text-gradient          /* shimmer link text too */
              cursor-pointer
              transition-colors duration-300
              hover:text-white
              hover:underline
            "
          >
            gram.link/yourname
          </span>{" "}
          today.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            size="lg"
            aria-label="Start your free GramCourses store now in under 4 minutes"
            onClick={() => navigate("/wizard/0")}
            className="
              bg-gradient-to-r from-insta-pink via-insta-purple to-insta-blue
              hover:from-insta-yellow hover:to-insta-orange
              shadow-insta-glow                /* multicolor drop shadow */
              text-white font-semibold rounded-full
              px-8 py-4 md:px-10 md:py-5
              transition-all duration-300 ease-out
              transform hover:scale-105          /* pop on hover */
              focus:outline-none focus:ring-6 focus:ring-insta-yellow/50
            "
          >
            Start Free Store
          </Button>

          <button
            className="
              text-insta-yellow font-semibold underline
              px-4 py-2 rounded-lg
              hover:text-insta-pink hover:bg-insta-blue/20
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-insta-pink/40
            "
            onClick={() => navigate("/demo")}
          >
            60‐sec demo →
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <LiveCounter className="text-insta-blue font-semibold text-lg" />
          <p
            className="
              text-sm text-gray-200/80
              tracking-wide
              animate-glow-pulse              /* ticker gently pulses */
            "
          >
            {ticker}
          </p>
        </div>
      </div>

      {/** ──────────────────────────────────────────────────
         PHONE MOCKUP (z-10)
         ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
        {/* Phone Shell */}
        <div
          className="
            phone-mockup                       /* sci-fi phone shell */
            border-4 border-insta-purple/60
            rounded-[2rem]
            shadow-[0_0_40px_rgba(214,41,118,0.5),0_0_80px_rgba(79,91,213,0.3)]
            overflow-hidden
            transform scale-95
            transition-transform duration-500 ease-in-out
            hover:scale-100                    /* scale up on hover */
            hover:shadow-[0_0_60px_rgba(214,41,118,0.7),0_0_100px_rgba(79,91,213,0.5)]
            w-72 h-[400px]
          "
        >
          {/* Animated “Screen” Gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r from-insta-yellow via-insta-orange to-insta-pink
              bg-[length:200%_200%]
              animate-insta-spectrum         /* cycles full Insta spectrum */
            "
          />
        </div>

        {/* Floating Neon Sparks (–z-10, no blur) */}
        <div
          className="
            absolute -right-8 top-1/3
            w-12 h-12 rounded-full
            bg-gradient-to-tr from-insta-pink to-insta-purple
            opacity-80
            animate-floatY
            -z-10
          "
        />
        <div
          className="
            absolute -bottom-6 right-1/4
            w-20 h-20 rounded-full
            bg-gradient-to-br from-insta-orange to-insta-blue
            opacity-70
            animate-floatX
            -z-10
          "
        />
      </div>
    </section>
  );
}
