'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-gold">
          KREATIV<span className={scrolled ? 'text-foreground' : 'text-white'}>STUDIO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-6 pl-6 border-l border-border/30">

            
            <Link
              href="#contact"
              className="px-6 py-2 bg-gold text-black hover:bg-foreground hover:text-background transition-all text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-gold/20"
            >
              Work with us
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Icons (Theme & Minimal Menu) */}
        <div className="flex items-center gap-4 md:hidden">

          {/* We keep the hamburger just for secondary links if needed, or we can remove it. Let's keep it but make it very clean */}
          <button
            className={`p-1 transition-all ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu - Premium Slide-down Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-border md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-10 space-y-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-tight text-foreground/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-gold text-black rounded-xl font-bold uppercase tracking-widest text-sm"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
