'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Target, TrendingUp } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';

const services = [
  {
    icon: <Camera className="w-8 h-8 text-gold" />,
    title: 'Ad Shoot Photography',
    desc: 'High-end product photography that captures the finest details and essence of your products.',
    image: '/assets/service_ad_shoot.png'
  },
  {
    icon: <Video className="w-8 h-8 text-gold" />,
    title: 'Video Production',
    desc: 'Cinematic commercials and social media content tailored for luxury brand storytelling.',
    image: '/assets/service_video.png'
  },
  {
    icon: <Target className="w-8 h-8 text-gold" />,
    title: 'Brand Strategy',
    desc: 'Strategic direction and visual identity development to position your brand in the premium market.',
    image: '/assets/service_strategy.png'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold" />,
    title: 'Digital Marketing',
    desc: 'Data-driven marketing campaigns to increase brand reach and conversion across digital channels.',
    image: '/assets/service_marketing.png'
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: any) => {
    setSelectedService({
      ...service,
      image: service.image,
      description: service.desc + " We use state-of-the-art equipment and a cinematic approach to ensure your brand's story is told with maximum impact and visual fidelity.",
      features: [
        'Premium high-resolution deliverables',
        'Custom visual strategy sessions',
        'Multi-platform optimization'
      ]
    });
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nude/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-gold">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gold mx-auto mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/50 text-lg leading-relaxed"
          >
            We blend cinematic aesthetics with data-driven strategy to create 
            visual identities that resonate with the premium luxury market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl glass-card premium-border overflow-hidden cursor-default"
            >
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-foreground/40 text-sm leading-relaxed mb-6 group-hover:text-foreground/60 transition-colors duration-300">
                  {service.desc}
                </p>

                <div className="pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                   <button 
                    onClick={() => openModal(service)}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold flex items-center gap-2 hover:gap-4 transition-all"
                   >
                     Learn More <div className="w-8 h-[1px] bg-gold" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedService}
      />
    </section>
  );
};

export default Services;
