import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-20 bg-background transition-colors duration-500 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter text-gold">
              KREATIV<span className="text-foreground">STUDIO</span>
            </Link>
            <p className="text-foreground/40 text-sm mt-4 max-w-xs">
              Elevating brands through high-end cinematic advertising and professional visual storytelling.
            </p>
          </div>
          
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold uppercase text-xs tracking-widest">Navigation</h4>
              <Link href="#" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">Home</Link>
              <Link href="#portfolio" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">Work</Link>
              <Link href="#services" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">Services</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground font-bold uppercase text-xs tracking-widest">Social</h4>
              <Link href="#" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">Instagram</Link>
              <Link href="#" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">LinkedIn</Link>
              <Link href="#" className="text-foreground/40 hover:text-gold text-sm transition-colors uppercase tracking-widest">Behance</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/20 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Kreativ Studio Production. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-foreground/20 hover:text-foreground text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
