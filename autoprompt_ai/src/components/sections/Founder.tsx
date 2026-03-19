import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";

export function Founder() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-1 md:p-2 max-w-4xl w-full"
        >
          <div className="bg-background/80 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Shaik Kamila Parveen" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-cyan-400 font-medium tracking-wider text-sm uppercase mb-2">The Founder</h4>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Shaik Kamila Parveen</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                As the founder of AutoPrompt AI, I specialize in bridging the gap between cutting-edge AI technologies and real-world business operations. My goal is to build systems that act as massive leverage levers for growing agencies.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/shaik-kamila-parveen-80184a343/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 transition-all duration-300 font-medium"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
