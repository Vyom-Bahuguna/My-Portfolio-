import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-6 pb-10 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white transition-colors overflow-hidden">
      
      {/* 2-Column Side-by-Side Composition Container */}
      <div className="max-w-7xl mx-auto w-full my-auto py-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (55% Width / 7 Cols): Text & Headlines */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* 1. Small Accent Intro Line */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono tracking-tight text-amber-600 dark:text-amber-500 font-bold">
                👋 Hi, my name is Vyom and I am a...
              </span>
            </div>

            {/* 2. Stacked 4-Line Headline */}
            <div className="space-y-0.5 font-black font-sans uppercase text-[#0A0A0A] dark:text-white select-none">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[0.9]">
                PRODUCT
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[0.9]">
                BUILDER
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[0.9] text-amber-500">
                &amp; AI
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tighter leading-[0.9]">
                DEVELOPER
              </h1>
            </div>

            {/* 3. Muted Location & Role Tagline */}
            <p className="text-xs font-mono tracking-widest uppercase text-neutral-500 font-semibold pt-1">
              DEHRADUN, INDIA — FOUNDER &amp; SOFTWARE ENGINEER
            </p>

            {/* 4. Supporting Body Copy */}
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans font-normal leading-relaxed max-w-lg">
              {PERSONAL_INFO.tagline}
            </p>

            {/* 5. Two CTA Buttons Side-by-Side */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#0A0A0A] font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

          {/* Right Column (45% Width / 5 Cols): Framed Portrait Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] border-2 border-[#0A0A0A] dark:border-white overflow-hidden bg-neutral-100 dark:bg-neutral-900 p-2">
              <img
                src={PERSONAL_INFO.heroPortrait}
                alt="Vyom Bahuguna portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Minimal Editorial Footer Strip */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-6 border-t border-[#0A0A0A]/10 dark:border-white/10 mt-8">
        <span className="tracking-widest uppercase">VYOM BAHUGUNA © 2026</span>
        <span className="tracking-widest uppercase">SCROLL FOR WORK ↓</span>
      </div>

    </section>
  );
};



