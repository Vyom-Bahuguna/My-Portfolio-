import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';

export const IITMandiSection: React.FC = () => {
  const iitData = EDUCATION[1];
  const schoolData = EDUCATION[0];

  return (
    <section id="iit-mandi" className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2 block">
            03 / ACADEMICS &amp; CERTIFICATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
            IIT MANDI &amp; EDUCATION
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main IIT Mandi Residential Program Showcase (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A] p-6 sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                  INTENSIVE RESIDENTIAL PROGRAM
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
                  IIT MANDI — HIMSHIKHAR PROGRAM
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-mono font-bold border border-[#0A0A0A] dark:border-white uppercase">
                {iitData.credential}
              </span>
            </div>

            <p className="text-xs font-mono text-neutral-500 mb-8">
              {iitData.collaboration}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              
              {/* Photo: Certificate Presentation */}
              <div className="md:col-span-6">
                <div className="border border-[#0A0A0A] dark:border-white">
                  <img
                    src={iitData.photo}
                    alt="Vyom Bahuguna receiving Himshikhar Program completion certificate at IIT Mandi"
                    className="w-full h-auto object-cover max-h-[260px]"
                  />
                  <div className="p-2.5 bg-[#0A0A0A] text-white text-[10px] font-mono text-center uppercase tracking-wider">
                    Certificate presentation with faculty at IIT Mandi
                  </div>
                </div>
              </div>

              {/* Curriculum Overview */}
              <div className="md:col-span-6 space-y-4">
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  {iitData.description}
                </p>
                
                <div className="p-4 border border-[#0A0A0A]/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50">
                  <span className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white block mb-2 uppercase">
                    Core Program Modules:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-700 dark:text-neutral-300">
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">Python</span>
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">DSA</span>
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">Databases</span>
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">Classical ML</span>
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">Deep Learning</span>
                    <span className="px-2 py-0.5 border border-[#0A0A0A]/20 dark:border-white/20">GenAI &amp; LLMs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capstone Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-[#0A0A0A]/20 dark:border-white/20">
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                  PROGRAM CAPSTONE
                </span>
                <p className="text-sm font-bold text-[#0A0A0A] dark:text-white mb-1">
                  {iitData.capstone}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                  Digital library accessibility and reading support platform.
                </p>
              </div>

              <div className="p-5 border border-[#0A0A0A]/20 dark:border-white/20">
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                  MINI PROJECT
                </span>
                <p className="text-sm font-bold text-[#0A0A0A] dark:text-white mb-1">
                  Instant Autocomplete Engine
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans">
                  {iitData.miniProject}
                </p>
              </div>
            </div>

          </motion.div>

          {/* St. Joseph's Academy Secondary Education (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                SENIOR SECONDARY SCHOOLING
              </span>
              <h3 className="text-2xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white mb-1">
                ST. JOSEPH'S ACADEMY
              </h3>
              <p className="text-xs font-mono text-neutral-500 mb-6">
                Dehradun, India
              </p>

              <div className="p-5 border border-[#0A0A0A]/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50 mb-6">
                <div className="text-xs font-mono text-neutral-500 mb-1 uppercase">ISC Class XII Score</div>
                <div className="text-3xl font-black font-sans text-[#0A0A0A] dark:text-white">
                  85.5% <span className="text-xs font-sans font-normal text-neutral-500">Best Four</span>
                </div>
                <div className="text-xs text-neutral-500 font-mono mt-1">
                  (84.0% Overall Score)
                </div>
              </div>

              <h4 className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-3">
                Relevant Coursework:
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans mb-6">
                {schoolData?.coursework?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 border border-[#0A0A0A] dark:border-white text-center">
              <span className="text-xs font-mono text-[#0A0A0A] dark:text-white font-bold uppercase tracking-wider">
                ISC Senior Secondary
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

