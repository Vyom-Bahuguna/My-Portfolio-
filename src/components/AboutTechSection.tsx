import React from 'react';
import { motion } from 'framer-motion';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const AboutTechSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2 block">
            02 / TECHNICAL SKILLS &amp; STACK
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
            TECHNICAL FOUNDATIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
            Categorized breakdown of computer science principles, data structures, database architecture, machine learning, and generative AI tools.
          </p>
        </div>

        {/* Editorial Multi-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="p-6 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A]"
            >
              <div className="mb-4 pb-3 border-b border-[#0A0A0A]/10 dark:border-white/10">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1 uppercase font-bold">
                  CATEGORY 0{idx + 1}
                </span>
                <h3 className="text-base font-bold font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

