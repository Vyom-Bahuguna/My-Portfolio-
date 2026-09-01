import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-xl mb-10 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-1 block">
            05 / EXTRACURRICULAR HONORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
            HONORS &amp; AWARDS
          </h2>
        </div>

        {/* Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A] flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-1 text-[10px] font-mono font-bold uppercase border border-[#0A0A0A]/20 dark:border-white/20 text-[#0A0A0A] dark:text-white mb-3">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                  {item.event}
                </p>
              </div>

              <p className="text-[11px] font-mono text-neutral-400 mt-4 uppercase">
                {item.institution}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

