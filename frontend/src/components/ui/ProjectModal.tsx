'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    features?: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-all backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 relative h-48 md:h-full flex-shrink-0">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto custom-scrollbar">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-3 block">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h2>
              
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>{project.description}</p>
                
                {project.features && (
                  <div>
                    <h4 className="text-foreground font-bold mb-4 uppercase tracking-widest text-sm">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all text-sm rounded-xl">
                  Contact About Project
                </button>
                <button 
                  onClick={onClose}
                  className="px-8 py-4 border border-border text-foreground font-bold uppercase tracking-widest hover:bg-foreground/5 transition-all text-sm rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
