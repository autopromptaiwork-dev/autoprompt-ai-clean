import { motion } from "framer-motion";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-background/50 backdrop-blur-lg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="AutoPrompt AI" 
                className="h-8 w-auto object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="font-display font-bold text-xl tracking-tight">
                AutoPrompt <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              We build intelligent automation systems that eliminate repetitive tasks, 
              streamline your operations, and allow you to focus on scaling your business.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('services')} className="text-muted-foreground hover:text-cyan-400 transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo('how-it-works')} className="text-muted-foreground hover:text-cyan-400 transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollTo('systems')} className="text-muted-foreground hover:text-cyan-400 transition-colors">Systems We Build</button></li>
              <li><button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-cyan-400 transition-colors">About Us</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:autopromptaiwork@gmail.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  autopromptaiwork@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shaik-kamila-parveen-80184a343/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AutoPrompt AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
