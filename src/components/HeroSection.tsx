import { motion } from "framer-motion";
import heroImage from "@/assets/hero-scrap.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Large pile of assorted scrap metal for recycling in Phnom Penh"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-body font-semibold tracking-widest uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
            Top Scrap Buyers in Phnom Penh
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-foreground">Selling Scrap?</span>
          <span className="block text-gradient-copper">We Buy at High Prices!</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fast service, fair scales in <strong className="text-primary">Phnom Penh</strong> and surrounding areas.{" "}
          <strong className="text-primary">Copper</strong>, <strong className="text-aluminum">Aluminum</strong>,{" "}
          <strong className="text-steel">Iron & Steel</strong>, E-Waste & more.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="tel:+85569460064"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-heading font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-lg shadow-copper animate-pulse-glow transition-transform hover:scale-105"
          >
            📞 Call Now: 069 460 064
          </a>
          <a
            href="#materials"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-heading font-bold uppercase tracking-wider border-2 border-primary/40 text-foreground rounded-lg transition-all hover:border-primary hover:bg-primary/10"
          >
            View Materials
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
