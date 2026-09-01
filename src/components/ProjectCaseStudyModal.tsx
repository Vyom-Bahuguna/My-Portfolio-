import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Users } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './GithubIcon';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0A0A0A] border border-[#0A0A0A] dark:border-white z-10 text-[#0A0A0A] dark:text-white p-6 sm:p-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 dark:border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-mono font-bold uppercase border border-[#0A0A0A] dark:border-white">
                CASE STUDY
              </span>
              {project.formerName && (
                <span className="text-xs font-mono text-neutral-500">
                  (Formerly: {project.formerName})
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight uppercase mb-2">
              {project.name}
            </h2>
            <p className="text-xs font-mono text-neutral-500 mb-4 font-bold uppercase tracking-wider">
              {project.role}
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Metrics & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 border border-[#0A0A0A]/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50 mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-amber-500" />
              <div>
                <span className="text-base font-bold font-mono text-[#0A0A0A] dark:text-white block">
                  {project.userMetric}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {project.userMetricLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-mono font-bold text-xs uppercase"
              >
                <span>LIVE APP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white font-mono font-bold text-xs uppercase hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 border border-[#0A0A0A]/20 dark:border-white/20">
              <h3 className="text-xs font-mono uppercase tracking-widest font-bold mb-2">
                THE PROBLEM
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-6 border border-[#0A0A0A]/20 dark:border-white/20">
              <h3 className="text-xs font-mono uppercase tracking-widest font-bold mb-2">
                THE SOLUTION
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h3 className="text-lg font-black font-sans uppercase mb-6 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-2">
              KEY FEATURES &amp; INTERFACE
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 border border-[#0A0A0A]/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50">
                  <div className="md:col-span-6">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase block mb-1">
                      FEATURE 0{index + 1}
                    </span>
                    <h4 className="text-base font-bold font-sans uppercase mb-2 text-[#0A0A0A] dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <div className="border border-[#0A0A0A] dark:border-white overflow-hidden">
                      <img
                        src={feature.screenshot || project.mainImage}
                        alt={feature.title}
                        className="w-full h-auto object-cover max-h-52"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mb-6 p-5 border border-[#0A0A0A] dark:border-white">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider mb-2">
              TECH STACK &amp; ARCHITECTURE:
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono border border-[#0A0A0A]/20 dark:border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

