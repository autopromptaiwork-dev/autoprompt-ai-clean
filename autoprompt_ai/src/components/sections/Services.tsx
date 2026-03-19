import { motion } from "framer-motion";
import { Cpu, MessageSquare, Workflow } from "lucide-react";

const services = [
  {
    title: "AI Automation Systems",
    description: "End-to-end operational automation. We connect your existing tools and augment them with AI to handle repetitive back-office tasks silently in the background.",
    icon: <Cpu className="w-8 h-8 text-cyan-400" />,
    blobColor: "rgba(0,229,255,0.08)",
    iconColor: "text-cyan-400",
    iconBorder: "border-cyan-500/20",
  },
  {
    title: "Intelligent AI Chatbots",
    description: "Custom-trained AI agents that handle customer support, qualify leads, and close sales 24/7 without human intervention, acting as your tireless team members.",
    icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
    blobColor: "rgba(37,99,235,0.1)",
    iconColor: "text-blue-400",
    iconBorder: "border-blue-500/20",
  },
  {
    title: "Smart Digital Workflows",
    description: "Streamlined processes for document generation, data entry, and CRM management. Eliminate manual data transfer and reduce human error to zero.",
    icon: <Workflow className="w-8 h-8 text-indigo-400" />,
    blobColor: "rgba(99,102,241,0.1)",
    iconColor: "text-indigo-400",
    iconBorder: "border-indigo-500/20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-sm font-display font-semibold uppercase tracking-widest mb-4"
          >
            What we build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight"
          >
            Core <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed font-sans"
          >
            We don't just consult — we architect, build, and deploy production-ready AI systems
            tailored to your specific operational challenges.
          </motion.p>
        </div>

        {/* Cards — extra bottom padding so the glow light has room */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
              className="group glass-panel logo-tri-hover rounded-2xl p-8"
            >
              {/* Inner ambient blob — stays inside card, no clip needed */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top right, ${service.blobColor}, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-white/[0.04] border ${service.iconBorder} flex items-center justify-center mb-7 group-hover:scale-110 group-hover:border-opacity-60 transition-all duration-400`}>
                  {service.icon}
                </div>

                {/* Heading — Space Grotesk */}
                <h3 className="text-xl font-display font-semibold text-white mb-3 leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Body — Plus Jakarta Sans */}
                <p className="font-sans text-muted-foreground leading-relaxed text-[15px]">
                  {service.description}
                </p>

                {/* Bottom arrow hint */}
                <div className="mt-7 flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground/60 group-hover:text-cyan-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
