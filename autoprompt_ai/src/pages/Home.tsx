import { useEffect } from "react";
import { initCalEmbed } from "@/lib/cal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pipeline } from "@/components/sections/Pipeline";
import { Systems } from "@/components/sections/Systems";
import { Quote } from "@/components/sections/Quote";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  // Initialize Cal.com script on mount
  useEffect(() => {
    initCalEmbed();
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Simple CTA Strip */}
        <section className="py-12 border-y border-white/5 bg-cyan-950/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-display font-medium text-white text-center sm:text-left">
              Ready to automate your workflow and reclaim your time?
            </h3>
            <button
              data-cal-link="autoprompt.-ai-cimcd3/website-booking"
              data-cal-namespace="website-booking"
              className="px-8 py-3 rounded-full font-semibold bg-white text-black hover:scale-105 transition-transform duration-300 whitespace-nowrap shadow-lg shadow-white/10"
            >
              Book a Strategy Call
            </button>
          </div>
        </section>

        <Pipeline />
        <Systems />
        <Quote />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
