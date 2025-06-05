// src/components/Hero.tsx
import type { FC } from "react";
import { PhoneMockup } from "./PhoneMockup";
import { LiveCounter } from "./LiveCounter";
import { VideoModal } from "./VideoModal";
import { StickyCTA } from "./StickyCTA";

const Hero: FC = () => (
    <div className="bg-page-gradient bg-fixed text-white min-h-screen relative">
        {/* ─── HERO SECTION ─────────────────────────────────────────────────────── */}
        <section className="hero-section h-screen w-screen overflow-hidden pt-24">

            {/* MAIN CONTENT */}
            <div className="hero-container px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative z-20">
                {/* ← LEFT COLUMN → */}
                <div className="hero-content w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <h2 className="hero-headline">
                        Open your <br className="hidden md:block" />
                        course store in 4 minutes—<br />
                        no code.
                    </h2>

                    {/* Live Counter */}
                    <LiveCounter className="
            mt-2
            inline-block
            bg-white/10
            text-lg md:text-xl
            font-semibold
            px-4 py-2
            rounded-full
            shadow-lg
            backdrop-blur-sm
            hover:bg-white/20
            transition
          " />


                    {/* Primary CTA */}
                    <button className="hero-cta mt-6 focus:ring-4 focus:ring-accent1/50">
                        Start Free Store
                    </button>

                    {/* Video Modal Trigger */}
                    <div className="mt-4">
                        <VideoModal className="
              inline-flex items-center space-x-2
              bg-white/10 hover:bg-white/20
              px-4 py-2 rounded-full
              text-white font-medium
              shadow-md
              transition
              focus:outline-none focus:ring-4 focus:ring-white/30
            " />
                    </div>

                    {/* Rating */}
                    <p className="hero-rating mt-4">
                        Rated <span className="text-white font-semibold">★ 4.9/5</span> by{" "}
                        2,134 creators
                    </p>

                    {/* Footer */}
                    <footer className="hero-footer mt-2 flex items-center space-x-2">
                        <span className="hero-footer__link">@coachmike</span>
                        <span>→ $3,482 today</span>
                    </footer>
                </div>

                {/* ← RIGHT COLUMN → */}
                <div className="hero-right w-full md:w-1/2 flex justify-center">
                    <PhoneMockup />
                </div>
            </div>

            {/* Sticky CTA pill (appears on scroll) */}
            <StickyCTA className="
        hidden lg:flex
        fixed bottom-8 right-8
        bg-gradient-to-r from-accent1 to-accent2
        text-white font-bold
        px-6 py-3 rounded-full
        shadow-2xl
        hover:shadow-[0_0_20px_rgba(255,90,200,0.8)]
        transition
      " />
        </section>
    </div>
);

export default Hero;
