'use client';

import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    url: '/videos/glowradiance.mp4',
    title: 'Glow Radiance',
    tag: 'Beauty',
  },
  {
    id: 2,
    url: '/videos/silktexture.mp4',
    title: 'Silk Texture',
    tag: 'Cosmetics',
  },
  {
    id: 3,
    url: '/videos/brandessence.mp4',
    title: 'Brand Essence',
    tag: 'Campaign',
  },
];

const VideoShowcase = () => {
  return (
    <section id="showcase" className="py-24 bg-background transition-colors duration-500 relative">
      <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Immersive Visuals</span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Cinematic <span className="text-gold">Showcase</span>
          </h2>
        </motion.div>
        
        {/* Scroll snapping container */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 h-auto overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative min-w-[300px] md:min-w-[350px] aspect-[9/16] rounded-[2.5rem] overflow-hidden glass-card premium-border group cursor-pointer shadow-2xl snap-center"
            >
              <video
                src={vid.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 p-10 flex flex-col justify-end">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-gold text-xs uppercase tracking-widest mb-3 font-bold"
                >
                  {vid.tag}
                </motion.span>
                <h3 className="text-3xl font-bold text-white group-hover:tracking-wide transition-all duration-500">
                  {vid.title}
                </h3>
                
                <div className="h-1 w-0 bg-gold mt-4 group-hover:w-full transition-all duration-700" />
              </div>
              
              <div className="absolute top-8 right-8">
                 <div className="w-3 h-3 bg-gold rounded-full animate-ping opacity-75" />
                 <div className="absolute inset-0 w-3 h-3 bg-gold rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
