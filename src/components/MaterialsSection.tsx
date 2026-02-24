import { motion } from "framer-motion";
import { DollarSign, Scale, Truck, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const MaterialsSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: DollarSign, title: t("feat.prices"), desc: t("feat.pricesDesc") },
    { icon: Scale, title: t("feat.scales"), desc: t("feat.scalesDesc") },
    { icon: Truck, title: t("feat.pickup"), desc: t("feat.pickupDesc") },
    { icon: Zap, title: t("feat.payment"), desc: t("feat.paymentDesc") },
  ];

  const materials = [
    { name: t("mat.iron"), description: t("mat.ironDesc"), icon: "⬛", color: "border-steel/30 hover:border-steel", glow: "hover:shadow-[0_0_30px_-10px_hsl(220_8%_40%/0.4)]" },
    { name: t("mat.copper"), description: t("mat.copperDesc"), icon: "🔶", color: "border-primary/50 hover:border-primary", glow: "hover:shadow-copper" },
    { name: t("mat.aluminum"), description: t("mat.aluminumDesc"), icon: "⬜", color: "border-aluminum/30 hover:border-aluminum", glow: "hover:shadow-[0_0_30px_-10px_hsl(210_15%_75%/0.4)]" },
    { name: t("mat.ewaste"), description: t("mat.ewasteDesc"), icon: "🖥️", color: "border-primary/30 hover:border-primary", glow: "hover:shadow-copper" },
    { name: t("mat.batteries"), description: t("mat.batteriesDesc"), icon: "🔋", color: "border-accent/30 hover:border-accent", glow: "hover:shadow-[0_0_30px_-10px_hsl(38_70%_50%/0.4)]" },
    { name: t("mat.brass"), description: t("mat.brassDesc"), icon: "🟡", color: "border-accent/30 hover:border-accent", glow: "hover:shadow-[0_0_30px_-10px_hsl(38_70%_50%/0.4)]" },
    { name: t("mat.phones"), description: t("mat.phonesDesc"), icon: "📱", color: "border-foreground/20 hover:border-foreground/50", glow: "hover:shadow-[0_0_30px_-10px_hsl(40_10%_90%/0.2)]" },
    { name: t("mat.machinery"), description: t("mat.machineryDesc"), icon: "⚙️", color: "border-steel/30 hover:border-steel", glow: "hover:shadow-[0_0_30px_-10px_hsl(220_8%_40%/0.4)]" },
    { name: t("mat.vehicles"), description: t("mat.vehiclesDesc"), icon: "🚗", color: "border-primary/30 hover:border-primary", glow: "hover:shadow-copper" },
    { name: t("mat.more"), description: t("mat.moreDesc"), icon: "♻️", color: "border-primary/30 hover:border-primary", glow: "hover:shadow-copper" },
  ];

  return (
    <section id="materials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
          {features.map((f) => (
            <motion.div key={f.title} variants={item} className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card">
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">{t("mat.heading1")}</span>
            <span className="text-gradient-copper">{t("mat.heading2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("mat.subtext")}</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
          {materials.map((mat) => (
            <motion.div key={mat.name} variants={item} className={`relative p-6 rounded-2xl bg-card border-2 ${mat.color} ${mat.glow} transition-all duration-300 hover-lift cursor-default group text-center`}>
              <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-3xl mb-3 block">{mat.icon}</span>
              <h3 className="font-heading text-base font-bold uppercase text-foreground mb-1">{mat.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{mat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
