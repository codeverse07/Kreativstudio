'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Camera, MessageCircle, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-5xl font-bold mb-8">Let's Create <span className="text-gold font-serif italic text-6xl">Art</span></h2>
            <p className="text-foreground/60 text-lg mb-12 leading-relaxed">
              Ready to elevate your brand's visual identity? Reach out to us for
              collaborations, inquiries, or just to say hello.
            </p>
 
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1 font-bold">Email Us</p>
                  <p className="text-lg font-bold">hello.creativstudio@gmail.com</p>
                </div>
              </div>
 
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1 font-bold">Call Us</p>
                  <p className="text-lg font-bold">+91-8976110774</p>
                </div>
              </div>
            </div>
 
            <div className="mt-16 flex gap-6">
              {[Camera, MessageCircle, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all border border-border shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
 
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass-card p-12 rounded-3xl border border-border shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gold font-bold">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-surface border border-border p-5 rounded-2xl focus:outline-none focus:border-gold transition-all text-foreground placeholder:text-foreground/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-gold font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-surface border border-border p-5 rounded-2xl focus:outline-none focus:border-gold transition-all text-foreground placeholder:text-foreground/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
 
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Message</label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-surface border border-border p-5 rounded-2xl focus:outline-none focus:border-gold transition-all resize-none text-foreground placeholder:text-foreground/20"
                  placeholder="Tell us about your project..."
                />
              </div>
 
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-3 disabled:opacity-50 rounded-2xl shadow-xl shadow-gold/20"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
 
              {status === 'success' && <p className="text-green-600 font-bold text-center">Your message has been sent successfully!</p>}
              {status === 'error' && <p className="text-red-600 font-bold text-center">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
