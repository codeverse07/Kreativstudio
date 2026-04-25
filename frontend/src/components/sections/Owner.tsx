'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Database, TrendingUp, Code, ShieldCheck } from 'lucide-react';

const Owner = () => {
  const expertise = [
    {
      icon: <Code className="text-gold" size={20} />,
      title: "B.Tech CSE",
      desc: "Deep technical foundation in Computer Science and Systems Architecture."
    },
    {
      icon: <Database className="text-gold" size={20} />,
      title: "Backend Architect",
      desc: "Managing robust server-side operations and secure data infrastructure."
    },
    {
      icon: <TrendingUp className="text-gold" size={20} />,
      title: "Digital Marketing",
      desc: "Expertise in high-conversion ad strategies and brand scaling."
    },
    {
      icon: <ShieldCheck className="text-gold" size={20} />,
      title: "Lead Operations",
      desc: "Ensuring seamless project delivery and genuine client connections."
    }
  ];

  return (
    <section id="owner" className="py-24 bg-background relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-6 block font-bold">
              The Visionary Behind
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Sachin Kumar <span className="text-gold italic font-serif">Jha</span>
            </h2>
            
            <p className="text-foreground/70 text-lg mb-12 leading-relaxed max-w-xl">
              As the architect of Creative Studio's digital experiences and technical backbone, 
              I blend engineering precision with creative marketing strategy. My mission is to 
              ensure that every pixel and every line of code serves a singular purpose: 
              elevating your brand to its premium potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-foreground font-extrabold uppercase text-sm tracking-[0.2em]">{item.title}</h4>
                  </div>
                  <p className="text-base text-foreground/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs text-foreground/40 italic">
                * Dedicated to building genuine, high-trust connections with every client.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative group"
          >
            {/* Glassmorphic card effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-surface">
              <Image
                src="/assets/sachin_founder.jpg"
                alt="Sachin Kumar Jha"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              {/* Overlay details */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-xl tracking-tight">Sachin Kumar Jha</p>
                    <p className="text-gold/80 text-xs font-bold uppercase tracking-widest mt-1">Founder & Lead Engineer</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border-r-2 border-t-2 border-gold/40 rounded-tr-3xl hidden md:block" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 border-l-2 border-b-2 border-gold/40 rounded-bl-3xl hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Owner;
