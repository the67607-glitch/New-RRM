/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Lock } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToForm: (pkg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, scrollToForm }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg-paper/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center">
              <Lock className="text-brand-secondary w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-primary">إدارة المخاطر الإيجارية</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => scrollToForm('طلب تقييم أولي')}
              className="text-xs font-bold uppercase tracking-widest bg-brand-primary text-white px-6 py-3 hover:bg-brand-secondary hover:text-brand-primary transition-all"
            >
              طلب تقييم
            </button>
          </div>

          <button className="md:hidden text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-brand-primary p-12 flex flex-col justify-center"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold text-white hover:text-brand-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => scrollToForm('طلب تقييم أولي')}
                className="text-xl font-bold bg-brand-secondary text-brand-primary py-6 mt-8"
              >
                طلب تقييم أولي
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
