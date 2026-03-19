import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We'll get back to you shortly.",
      className: "bg-background border border-cyan-500/30 text-white",
    });
    // Form reset would go here
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Build Your <br />
              <span className="text-gradient">AI Advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Whether you need a full operational audit or want to implement a specific automated system, we're ready to partner with you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a href="mailto:autopromptaiwork@gmail.com" className="font-medium hover:text-cyan-400 transition-colors">
                    autopromptaiwork@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-600/5">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400 mt-1">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Ready to move fast?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Skip the email tag and book a direct strategy call to discuss your automation needs.
                  </p>
                  <button
                    data-cal-link="autoprompt.-ai-cimcd3/website-booking"
                    data-cal-namespace="website-booking"
                    className="px-6 py-3 rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-colors shadow-lg w-full sm:w-auto"
                  >
                    Schedule Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-cyan-400" />
              <h3 className="text-2xl font-display font-semibold text-white">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">How can we help?</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Tell us about your current bottlenecks..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
