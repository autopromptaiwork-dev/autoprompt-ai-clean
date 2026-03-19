import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Systems", id: "systems" },
    { name: "About", id: "about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="AutoPrompt AI Logo" 
            className="h-8 w-auto object-contain"
            onError={(e) => {
              // Fallback if logo fails to load
              e.currentTarget.style.display = 'none';
              const textLogo = document.getElementById('text-logo');
              if (textLogo) textLogo.style.display = 'block';
            }}
          />
          <span id="text-logo" className="font-display font-bold text-xl tracking-tight hidden">
            AutoPrompt <span className="text-cyan-400">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            data-cal-link="autoprompt.-ai-cimcd3/website-booking"
            data-cal-namespace="website-booking"
            className="px-5 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-lg font-medium text-muted-foreground hover:text-white text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                data-cal-link="autoprompt.-ai-cimcd3/website-booking"
                data-cal-namespace="website-booking"
                className="mt-4 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center w-full shadow-lg shadow-cyan-500/20"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
