import { useState } from "react";
import { motion } from "framer-motion";

/* ── Brand logo SVGs ───────────────────────────────────────────── */

const GoogleFormsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#7248B9"/>
    <path d="M14 12h14l8 8v18a2 2 0 01-2 2H14a2 2 0 01-2-2V14a2 2 0 012-2z" fill="#fff" fillOpacity=".15"/>
    <path d="M28 12l8 8h-8V12z" fill="#fff" fillOpacity=".3"/>
    <path d="M28 12l8 8h-8V12z" fill="#fff" fillOpacity=".2"/>
    <rect x="17" y="24" width="14" height="2" rx="1" fill="white"/>
    <rect x="17" y="29" width="14" height="2" rx="1" fill="white"/>
    <rect x="17" y="19" width="9" height="2" rx="1" fill="white"/>
    <circle cx="15.5" cy="25" r="1.5" fill="white"/>
    <circle cx="15.5" cy="30" r="1.5" fill="white"/>
    <circle cx="15.5" cy="20" r="1.5" fill="white"/>
  </svg>
);

const GoogleSheetsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#0F9D58"/>
    <path d="M14 12h14l8 8v18a2 2 0 01-2 2H14a2 2 0 01-2-2V14a2 2 0 012-2z" fill="#fff" fillOpacity=".15"/>
    <path d="M28 12l8 8h-8V12z" fill="#fff" fillOpacity=".3"/>
    <rect x="16" y="22" width="16" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
    <line x1="16" y1="27" x2="32" y2="27" stroke="white" strokeWidth="1.5"/>
    <line x1="22" y1="22" x2="22" y2="34" stroke="white" strokeWidth="1.5"/>
    <line x1="27" y1="22" x2="27" y2="34" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const MakeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#1a0030"/>
    {/* Three tilted bars — Make's actual logo */}
    <g transform="rotate(-18, 24, 24)">
      <rect x="7" y="12" width="8" height="26" rx="2.5" fill="#FF40FF"/>
      <rect x="20" y="12" width="8" height="26" rx="2.5" fill="#9B30FF"/>
      <rect x="33" y="12" width="8" height="26" rx="2.5" fill="#5B00CC"/>
    </g>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#CC785C"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="26" fontWeight="bold" fill="white" fontFamily="Georgia, serif">C</text>
    <circle cx="36" cy="14" r="4" fill="#FFCFB8"/>
    <circle cx="36" cy="14" r="2" fill="white"/>
  </svg>
);

const PDFIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#E5271C"/>
    <path d="M13 10h16l9 9v24a2 2 0 01-2 2H13a2 2 0 01-2-2V12a2 2 0 012-2z" fill="#fff" fillOpacity=".15"/>
    <path d="M29 10l9 9h-9V10z" fill="#fff" fillOpacity=".3"/>
    <rect x="10" y="26" width="28" height="12" rx="2" fill="white"/>
    <text x="24" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E5271C" fontFamily="Arial, sans-serif">PDF</text>
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect width="48" height="48" rx="8" fill="#075E54"/>
    <rect x="10" y="14" width="28" height="18" rx="3" fill="none" stroke="white" strokeWidth="2"/>
    <polyline points="10,14 24,26 38,14" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="34" cy="32" r="8" fill="#25D366"/>
    <path d="M30 32c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-.8 0-1.6-.2-2.2-.6l-2.8.8.8-2.8c-.5-.7-.8-1.5-.8-2.4z" fill="white"/>
    <path d="M32 31h4M32 33.5h2.5" stroke="#25D366" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

/* ── Pipeline steps ────────────────────────────────────────────── */
const STEPS = [
  {
    id: 1,
    label: "Google Forms",
    sublabel: "Client fills form",
    icon: <GoogleFormsIcon />,
    accent: "#7248B9",
    stepLabel: "Trigger",
  },
  {
    id: 2,
    label: "Google Sheets",
    sublabel: "Data logged instantly",
    icon: <GoogleSheetsIcon />,
    accent: "#0F9D58",
    stepLabel: "Database",
  },
  {
    id: 3,
    label: "Make",
    sublabel: "Automation triggered",
    icon: <MakeIcon />,
    accent: "#9B30FF",
    stepLabel: "Automate",
  },
  {
    id: 4,
    label: "Claude AI",
    sublabel: "AI processes data",
    icon: <ClaudeIcon />,
    accent: "#CC785C",
    stepLabel: "AI Process",
  },
  {
    id: 5,
    label: "PDF Engine",
    sublabel: "Quote generated",
    icon: <PDFIcon />,
    accent: "#E5271C",
    stepLabel: "Document",
  },
  {
    id: 6,
    label: "Email + WhatsApp",
    sublabel: "Delivered instantly",
    icon: <DeliveryIcon />,
    accent: "#25D366",
    stepLabel: "Delivery",
  },
];

export function Pipeline() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 -translate-y-1/2 bg-blue-700/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 -translate-y-1/2 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-sm font-display font-semibold uppercase tracking-widest mb-4"
          >
            Automation Pipeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-5"
          >
            How Our <span className="text-gradient">Systems Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Data flows from your customer's first touch through AI reasoning, document creation, and instant delivery — all without human intervention.
          </motion.p>
        </div>

        {/* Pipeline row */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-0">

          {/* Background connecting line (full width) */}
          <div className="hidden lg:block absolute top-[52px] left-[72px] right-[72px] h-[2px] z-0"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 100%)" }}
          >
            {/* Animated beam */}
            <motion.div
              className="absolute top-0 h-full rounded-full"
              style={{
                width: "18%",
                background: "linear-gradient(90deg, transparent, #00E5FF, #2563EB, transparent)",
              }}
              animate={{ x: ["-10%", "600%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Travelling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{
                background: "#00E5FF",
                boxShadow: "0 0 12px 4px rgba(0,229,255,0.7)",
              }}
              animate={{ left: ["-2%", "102%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center w-full lg:w-auto">
              {/* Mobile vertical connector */}
              {i !== STEPS.length - 1 && (
                <div className="lg:hidden flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="my-0"
                  />
                </div>
              )}

              {/* Node card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 22 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={hovered === i ? { y: -10, scale: 1.08 } : { y: 0, scale: 1 }}
                className="flex flex-col items-center cursor-default"
              >
                {/* Icon wrapper */}
                <div
                  className="relative w-[88px] h-[88px] rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hovered === i
                      ? `radial-gradient(circle, ${step.accent}22 0%, rgba(2,6,23,0.95) 100%)`
                      : "rgba(255,255,255,0.03)",
                    border: hovered === i
                      ? `1.5px solid ${step.accent}88`
                      : "1.5px solid rgba(255,255,255,0.08)",
                    boxShadow: hovered === i
                      ? `0 0 28px 6px ${step.accent}44, 0 0 60px 12px ${step.accent}18`
                      : "none",
                  }}
                >
                  {step.icon}

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-white"
                    style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}88` }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center max-w-[100px]">
                  <div
                    className="text-sm font-display font-bold leading-tight transition-colors duration-200"
                    style={{ color: hovered === i ? step.accent : "white" }}
                  >
                    {step.label}
                  </div>
                  <div className="text-[11px] font-sans text-muted-foreground mt-1 leading-tight">
                    {step.sublabel}
                  </div>
                </div>

                {/* Tooltip on hover */}
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-[11px] font-display font-semibold whitespace-nowrap z-20"
                    style={{
                      background: step.accent,
                      color: "white",
                      boxShadow: `0 4px 20px ${step.accent}66`,
                    }}
                  >
                    {step.stepLabel}
                  </motion.div>
                )}
              </motion.div>

              {/* Mobile vertical line between items */}
              {i < STEPS.length - 1 && (
                <div className="lg:hidden w-[2px] h-10 my-2 rounded-full relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    className="absolute top-0 w-full rounded-full"
                    style={{ height: "40%", background: "linear-gradient(180deg, #00E5FF, transparent)" }}
                    animate={{ y: ["-40%", "140%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom legend row */}
        <div className="hidden lg:flex justify-between mt-14 px-[72px]">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="text-center w-[88px]"
            >
              <div className="text-[10px] font-display font-bold uppercase tracking-widest" style={{ color: step.accent }}>
                Step {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
