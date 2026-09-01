import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
          onClick={handleSkip}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-[#0A0A0A] dark:bg-[#0A0A0A] dark:text-white cursor-pointer select-none px-6"
        >
          <div className="relative z-10 max-w-xl text-center">
            
            {/* Gallery Exhibition Tag */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4 font-bold"
            >
              PORTFOLIO EXHIBITION · 2026
            </motion.p>

            {/* Name Reveal */}
            <motion.h1
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white mb-3"
            >
              Vyom Bahuguna
            </motion.h1>

            {/* Identity Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 font-medium tracking-wide uppercase"
            >
              Founder · Product Builder · AI/ML Enthusiast
            </motion.p>

            {/* Subtle Editorial Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="h-[1px] bg-[#0A0A0A]/20 dark:bg-white/20 mt-8 mx-auto w-48"
            />
          </div>

          {/* Micro Skip Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 text-[11px] font-mono text-neutral-500 tracking-widest uppercase font-bold"
          >
            Click to enter
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

