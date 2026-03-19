import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center border-y border-white/5 bg-background/50">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/30 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-medium leading-tight text-white"
        >
          "Automation should not just replace human effort. It should <span className="text-gradient font-bold">remove friction</span> from your business operations."
        </motion.p>
      </div>
    </section>
  );
}
