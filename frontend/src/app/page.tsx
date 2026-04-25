import Hero from "@/components/sections/Hero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Owner from "@/components/sections/Owner";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <Portfolio />
      <Services />
      <About />
      <Owner />
      <Testimonials />
      <Contact />
    </>
  );
}
