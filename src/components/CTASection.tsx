import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="text-gradient-copper">Sell?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Get the best price for your scrap. Contact us today for a free quote and fast pickup in Phnom Penh.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Phone, label: "Call Us", value: "+855 69 460 064" },
              { icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia" },
              { icon: Clock, label: "Working Hours", value: "Mon–Sat 7AM–6PM" },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                className="flex flex-col items-center p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <info.icon className="w-6 h-6 text-primary mb-3" />
                <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">{info.label}</span>
                <span className="text-foreground font-semibold">{info.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="tel:+85569460064"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-heading font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-xl shadow-copper transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            📞 Call Now: 069 460 064
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
