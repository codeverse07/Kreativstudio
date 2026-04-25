'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Cinematic Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-semibold"
          >
            Crafting Visual Excellence
          </motion.p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight text-white transition-colors duration-500">
            Creative <span className="text-gold">Ad Studio</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            High-end advertisement production for beauty, cosmetics, and luxury brands. 
            Elevating your vision through cinematic storytelling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#portfolio"
              className="px-8 md:px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all text-sm flex items-center justify-center rounded-xl shadow-lg shadow-gold/20 w-full sm:w-auto"
            >
              View Work
            </Link>
            <Link 
              href="#contact"
              className="px-8 md:px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-sm flex items-center justify-center rounded-xl w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
