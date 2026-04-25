'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Play, Briefcase, Mail } from 'lucide-react';

const BottomNav = () => {

  
  const navItems = [
    { name: 'Home', icon: <Home size={22} />, href: '#' },
    { name: 'Showcase', icon: <Play size={22} />, href: '#showcase' },
    { name: 'Work', icon: <Briefcase size={22} />, href: '#portfolio' },
    { name: 'Contact', icon: <Mail size={22} />, href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full z-[60] md:hidden"
    >
      <div className="flex items-center justify-around px-2 py-3 bg-background/95 backdrop-blur-2xl border-t border-border/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-safe">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="flex flex-col items-center gap-1.5 text-foreground/50 hover:text-gold transition-colors p-2"
          >
            {item.icon}
            <span className="text-[9px] uppercase tracking-widest font-bold">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default BottomNav;
