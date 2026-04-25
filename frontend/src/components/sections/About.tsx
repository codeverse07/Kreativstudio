'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="/assets/noir_fragrance.png"
                alt="Studio Visual"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 rounded-[2rem] border border-border mt-10"
              />
              {/* Decorative Frame */}
              <div className="absolute top-4 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-gold p-10 hidden md:block rounded-3xl shadow-2xl">
              <span className="text-black font-bold text-6xl">10+</span>
              <p className="text-black text-xs font-bold uppercase tracking-[0.2em] mt-3">Years of Visual Art</p>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.4em] text-xs mb-8 block font-bold"
            >
              Our Story
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">
              Driven by <span className="text-gold italic font-serif">Creativity</span> & Storytelling
            </h2>
            <div className="space-y-8 text-foreground/60 text-lg leading-relaxed max-w-xl">
              <p>
                We are a boutique creative studio dedicated to the art of luxury brand 
                communication. Our mission is to bridge the gap between high-end 
                aesthetics and strategic marketing.
              </p>
              <p>
                Specializing in the beauty and cosmetic sectors, we understand the 
                importance of texture, light, and emotion in capturing a brand's 
                essence. Our cinematic approach ensures that every campaign we 
                produce tells a compelling story.
              </p>
              <div className="pt-10 grid grid-cols-2 gap-12">
                <div className="group">
                  <h4 className="text-foreground font-bold mb-3 uppercase text-xs tracking-[0.2em] group-hover:text-gold transition-colors">Visionary</h4>
                  <div className="h-[1px] w-8 bg-gold mb-4 group-hover:w-12 transition-all" />
                  <p className="text-sm">Pushing boundaries of visual art.</p>
                </div>
                <div className="group">
                  <h4 className="text-foreground font-bold mb-3 uppercase text-xs tracking-[0.2em] group-hover:text-gold transition-colors">Detail Oriented</h4>
                  <div className="h-[1px] w-8 bg-gold mb-4 group-hover:w-12 transition-all" />
                  <p className="text-sm">Every pixel matters in luxury.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
