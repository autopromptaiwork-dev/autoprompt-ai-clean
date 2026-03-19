import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { AutomationBot } from "@/components/three/AutomationBot";

function BotFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-cyan-500/10 animate-pulse border border-cyan-500/20" />
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="AI Network Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        />
      </div>

      {/* Main content - split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 py-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-100">
              Premium AI Automation Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight tracking-tight mb-6"
          >
            AI Systems That Run Your Business{" "}
            <span className="text-gradient">While You Focus on Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            We design automation systems that eliminate manual work, streamline
            operations, and help your business scale without extra effort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              data-cal-link="autoprompt.-ai-cimcd3/website-booking"
              data-cal-namespace="website-booking"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book a Strategy Call
            </button>

            <button
              onClick={() => scrollTo("systems")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold glass-panel text-white hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Systems
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* Live metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            {[
              { value: "10x", label: "Faster workflows" },
              { value: "24/7", label: "Automated ops" },
              { value: "0", label: "Repetitive tasks" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-xl font-display font-bold text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Bot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full lg:w-auto h-[380px] sm:h-[460px] lg:h-[560px] xl:h-[620px] max-w-lg lg:max-w-none relative"
        >
          {/* Glow base behind canvas */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
              style={{ animationDuration: "4s" }}
            />
          </div>

          <Suspense fallback={<BotFallback />}>
            <AutomationBot />
          </Suspense>

          {/* Floating label badges around the bot */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-8 right-4 lg:right-0 glass-panel px-3 py-2 rounded-xl border-cyan-500/20 text-xs font-medium text-cyan-300 pointer-events-none hidden sm:flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AI Processing
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-16 left-2 lg:left-0 glass-panel px-3 py-2 rounded-xl border-blue-500/20 text-xs font-medium text-blue-300 pointer-events-none hidden sm:flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Workflow Active
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 right-0 lg:-right-4 glass-panel px-3 py-2 rounded-xl border-indigo-500/20 text-xs font-medium text-indigo-300 pointer-events-none hidden sm:flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Automating
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500/60 to-transparent" />
      </motion.div>
    </section>
  );
}
