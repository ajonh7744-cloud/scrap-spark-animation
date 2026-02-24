import { motion } from "framer-motion";
import { Recycle, Zap, Truck, DollarSign } from "lucide-react";

const materials = [
  {
    name: "Copper",
    description: "Wires, pipes, coils, transformers, and all copper-based scrap",
    icon: "🔶",
    color: "border-primary/50 hover:border-primary",
    glow: "hover:shadow-copper",
  },
  {
    name: "Aluminum",
    description: "Cans, sheets, profiles, extrusions, and aluminum alloys",
    icon: "⬜",
    color: "border-aluminum/30 hover:border-aluminum",
    glow: "hover:shadow-[0_0_30px_-10px_hsl(210_15%_75%/0.4)]",
  },
  {
    name: "Steel & Iron",
    description: "Beams, rebar, machinery, automotive parts, and mixed ferrous metals",
    icon: "⬛",
    color: "border-steel/30 hover:border-steel",
    glow: "hover:shadow-[0_0_30px_-10px_hsl(220_8%_40%/0.4)]",
  },
  {
    name: "Brass & Bronze",
    description: "Fittings, valves, fixtures, and all brass/bronze alloys",
    icon: "🟡",
    color: "border-accent/30 hover:border-accent",
    glow: "hover:shadow-[0_0_30px_-10px_hsl(38_70%_50%/0.4)]",
  },
  {
    name: "Stainless Steel",
    description: "Kitchen equipment, tanks, medical instruments, and SS scrap",
    icon: "🔘",
    color: "border-foreground/20 hover:border-foreground/50",
    glow: "hover:shadow-[0_0_30px_-10px_hsl(40_10%_90%/0.2)]",
  },
  {
    name: "E-Waste & Mixed",
    description: "Circuit boards, motors, batteries, cables, and electronic scrap",
    icon: "♻️",
    color: "border-primary/30 hover:border-primary",
    glow: "hover:shadow-copper",
  },
];

const features = [
  { icon: DollarSign, title: "Best Prices", desc: "Competitive market rates" },
  { icon: Truck, title: "Free Pickup", desc: "We come to you" },
  { icon: Zap, title: "Instant Payment", desc: "Cash on the spot" },
  { icon: Recycle, title: "Eco-Friendly", desc: "100% recycled responsibly" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MaterialsSection = () => {
  return (
    <section id="materials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Features bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card"
            >
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">Materials </span>
            <span className="text-gradient-copper">We Buy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From copper wiring to industrial steel — we purchase all types of scrap metal at the best market rates.
          </p>
        </motion.div>

        {/* Materials grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {materials.map((mat) => (
            <motion.div
              key={mat.name}
              variants={item}
              className={`relative p-8 rounded-2xl bg-card border-2 ${mat.color} ${mat.glow} transition-all duration-300 hover-lift cursor-default group`}
            >
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-4xl mb-4 block">{mat.icon}</span>
              <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-2">
                {mat.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{mat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
