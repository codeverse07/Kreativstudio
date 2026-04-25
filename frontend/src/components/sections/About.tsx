'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="pt-20 pb-0 lg:py-24 bg-background transition-colors duration-500 overflow-hidden">
      
      {/* ======================= */}
      {/* DESKTOP VIEW (lg and up) */}
      {/* ======================= */}
      <div className="container mx-auto px-6 hidden lg:block">
        <div className="flex flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="/assets/noir_fragrance.png"
                alt="Studio Visual"
                fill
                className="object-cover lg:grayscale hover:grayscale-0 transition-all duration-1000 rounded-[2rem] border border-border"
              />
              {/* Decorative Frame */}
              <div className="absolute top-4 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-gold p-10 rounded-3xl shadow-2xl">
              <span className="text-black font-bold text-6xl">10+</span>
              <p className="text-black text-xs font-bold uppercase tracking-[0.2em] mt-3">Years of Visual Art</p>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
            <h2 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">
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

      {/* ========================== */}
      {/* MOBILE APP-LIKE VIEW (lg- ) */}
      {/* ========================== */}
      <div className="w-full relative z-10 block lg:hidden">
        
        {/* Mobile Header Block */}
        <div className="px-6 mb-8">
           <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block font-bold">
              Our Story
            </span>
            <h2 className="text-4xl font-bold leading-tight">
              Driven by <span className="text-gold italic font-serif block mt-1 relative z-10">Creativity</span> & Storytelling
            </h2>
        </div>

        {/* Mobile Image Card */}
        <div className="px-6 mb-10 relative">
          <div className="w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/noir_fragrance.png"
                alt="Studio Visual"
                fill
                className="object-cover"
                priority
              />
               {/* Quick gradient over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Floating Badge (Replacing absolute gold box) */}
          <div className="absolute bottom-6 right-10 bg-gold/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gold border-opacity-50">
             <span className="text-black font-extrabold text-3xl block text-center">10+</span>
             <p className="text-black text-[8px] font-bold uppercase tracking-[0.2em] text-center mt-1">Years<br/>Visual Art</p>
          </div>
        </div>

        {/* Mobile Text Block */}
        <div className="px-6 space-y-6 text-foreground/80 text-[15px] leading-relaxed font-medium pb-12">
            <p>
              We are a boutique creative studio dedicated to the art of luxury brand 
              communication. Our mission is to bridge the gap between high-end 
              aesthetics and strategic marketing.
            </p>
            <p className="text-foreground/60">
              Specializing in the beauty and cosmetic sectors, we understand the 
              importance of texture, light, and emotion in capturing a brand's 
              essence.
            </p>

            <div className="pt-8 flex flex-col gap-6">
                <div className="bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                  <h4 className="text-white font-extrabold mb-2 uppercase text-[10px] tracking-[0.2em] flex items-center gap-3">
                    <span className="h-[2px] w-4 bg-gold block"></span> 
                    Visionary
                  </h4>
                  <p className="text-xs text-foreground/50">Pushing boundaries of visual art.</p>
                </div>
                <div className="bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-white/5">
                  <h4 className="text-white font-extrabold mb-2 uppercase text-[10px] tracking-[0.2em] flex items-center gap-3">
                    <span className="h-[2px] w-4 bg-gold block"></span> 
                    Detail Oriented
                  </h4>
                  <p className="text-xs text-foreground/50">Every pixel matters in luxury.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
