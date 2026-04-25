'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Creative Studio transformed our brand image. Their cinematic approach to our launch video was exactly what we needed to position ourselves as a premium player.",
    author: "Jhanvi Raj",
    role: "Marketing Director at LUXE Beauty",
  },
  {
    quote: "The attention to detail in their photography is unparalleled. They didn't just take photos; they captured our product's soul.",
    author: "Richa Sukla",
    role: "Founder of Essence Fragrances",
  },
  {
    quote: "Professional, creative, and most importantly, they understand the luxury market. Truly a partner in our brand's growth.",
    author: "Raviraj Singh",
    role: "CEO at Red Cosmetics",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
          What Our <span className="text-gold italic font-serif">Clients Say</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-3rem)] glass-card p-12 rounded-[2.5rem] flex flex-col justify-between border border-border shadow-xl hover:shadow-gold/10 transition-all duration-500"
            >
              <div>
                <span className="text-gold text-6xl font-serif mb-8 block opacity-50 italic">"</span>
                <p className="text-foreground/70 italic text-lg leading-relaxed mb-10">
                  {t.quote}
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <h4 className="text-foreground font-bold uppercase tracking-[0.2em] text-xs">{t.author}</h4>
                <p className="text-gold text-[10px] mt-2 uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
