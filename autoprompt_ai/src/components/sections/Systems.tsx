import { motion } from "framer-motion";
import { Receipt, Users, Bot } from "lucide-react";

const systems = [
  {
    icon: <Receipt className="w-6 h-6 text-cyan-400" />,
    title: "AI Quotation Generator",
    desc: "Transform complex pricing matrices into instant, beautifully formatted proposals.",
    features: ["Form ingestion", "Dynamic pricing logic", "PDF Generation", "Auto-email delivery"]
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "AI Lead Capture System",
    desc: "Never lose a lead. Automatically enrich contact data and route to the correct sales rep.",
    features: ["LinkedIn/Email scraping", "CRM sync", "Lead scoring via AI", "Slack/Teams alerts"]
  },
  {
    icon: <Bot className="w-6 h-6 text-indigo-400" />,
    title: "AI Customer Chatbot",
    desc: "A custom knowledge-base trained agent that resolves 80% of level 1 support tickets.",
    features: ["Website integration", "Trained on your docs", "Hand-off to human", "Analytics dashboard"]
  }
];

export function Systems() {
  return (
    <section id="systems" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Systems We <span className="text-gradient">Deploy</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-xl"
            >
              Pre-architected frameworks that we customize to fit your exact business rules and operational style.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-cal-link="autoprompt.-ai-cimcd3/website-booking"
            data-cal-namespace="website-booking"
            className="px-6 py-3 rounded-xl font-medium border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors w-max"
          >
            Discuss Your System
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systems.map((system, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel logo-tri-hover rounded-2xl p-8 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {system.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">{system.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{system.desc}</p>
              
              <ul className="space-y-3">
                {system.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
