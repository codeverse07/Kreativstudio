'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProjectModal from '../ui/ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Aura Luminous Serum',
    category: 'Beauty',
    image: '/assets/luxury_cosmetics_packaging.png',
    description: 'A comprehensive branding and cinematic production campaign for Aura Skin Care. We focused on capturing the ethereal quality of the serum through soft lighting and macro 8k textures.',
    features: ['4K Cinematic Commercial', 'Macro Product Shots', 'Social Media Campaign Kit']
  },
  {
    id: 2,
    title: 'Eternal Brilliance Ring',
    category: 'Jewelry',
    image: '/assets/luxury_ring.png',
    description: 'A masterpiece of macro jewelry photography showing the eternal brilliance of a luxury diamond ring. We captured the intricate facets and the play of light through specialized focus-stacking techniques.',
    features: ['Macro 8k Detail', 'Luxury Lighting Set', 'Focus Stacking Technique']
  },
  {
    id: 3,
    title: 'Silk Touch Makeup',
    category: 'Cosmetics',
    image: '/assets/silk_touch_makeup.png',
    description: 'Vibrant and tactile cosmetics photography that emphasizes texture and pigment. Designed to pop on high-resolution displays and social feeds.',
    features: ['Texture Specialist Filming', 'Color Grade Optimization', 'E-commerce Asset Pack']
  },
  {
    id: 4,
    title: 'Summer Serenity',
    category: 'Fashion',
    image: '/assets/fashion_summer.png',
    description: 'High-end fashion editorial highlighting the elegance of premium silk summer wear. Captured during golden hour to emphasize texture, flow, and seasonal warmth.',
    features: ['Fashion Editorial Production', 'Golden Hour Lighting', 'Material Texture Focus']
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Selected <span className="text-gold">Works</span>
            </h2>
            <p className="text-foreground/50 text-lg leading-relaxed">
              A collection of high-impact visual campaigns designed to resonate 
              with the premium luxury market.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-3 md:gap-4 justify-start md:justify-end">
            {['All', 'Beauty', 'Jewelry', 'Fashion', 'Cosmetics'].map((cat) => (
              <button
                key={cat}
                className="text-[9px] md:text-[10px] uppercase tracking-widest px-4 md:px-6 py-2 border border-border hover:border-gold hover:text-gold transition-all rounded-full font-bold whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group rounded-[2rem] border border-border bg-surface"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay - Modern Blur Effect */}
              <div className="absolute inset-x-4 bottom-4 glass-card p-8 rounded-[1.5rem] transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-2 block font-bold">{project.category}</span>
                <h3 className="text-2xl font-bold mb-6 text-foreground">{project.title}</h3>
                <button 
                  onClick={() => openModal(project)}
                  className="w-full py-4 bg-gold text-black text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all rounded-xl"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Portfolio;
