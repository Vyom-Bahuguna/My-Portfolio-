import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#campaign' },
    { name: 'IIT MANDI', href: '#iit-mandi' },
    { name: 'SKILLS', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0A0A0A]/95 border-b border-[#0A0A0A]/10 dark:border-white/10 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Bold Editorial Logo & Small Accent Dot */}
        <a 
          href="#" 
          className="flex items-center gap-2 group"
        >
          <span className="font-black text-lg sm:text-xl tracking-tighter uppercase text-[#0A0A0A] dark:text-white">
            VYOM BAHUGUNA
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" title="Available for projects"></span>
        </a>

        {/* Center/Right: Minimal Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#0A0A0A] dark:text-white font-bold underline decoration-2 underline-offset-8'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-[#0A0A0A] dark:hover:text-white font-medium'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Far Right Actions: Single Filled Button CTA + Theme Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#0A0A0A] text-xs font-bold font-mono tracking-wider uppercase rounded-full transition-all duration-200"
          >
            <span>CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Minimal Theme Switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-[#0A0A0A] dark:text-white hover:opacity-75 transition-opacity"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0A0A] dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white dark:bg-[#0A0A0A] border-b border-[#0A0A0A]">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest text-[#0A0A0A] dark:text-white font-bold uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#0A0A0A]/20 dark:border-white/20 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-3 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] text-xs font-mono font-bold tracking-wider uppercase text-center rounded-full"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

