import { motion } from "framer-motion";
import copperImage from "@/assets/slides/copper.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CopperHighlight = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: "mdi:cash-multiple", value: t("copper.stat1Val"), label: t("copper.stat1") },
    { icon: "mdi:scale-balance", value: t("copper.stat2Val"), label: t("copper.stat2") },
    { icon: "mdi:truck-fast", value: t("copper.stat3Val"), label: t("copper.stat3") },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-copper">
              <img
                src={copperImage}
                alt="Premium copper scrap - wires pipes and red copper bought at highest prices in Phnom Penh"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 text-primary-foreground rounded-full font-heading text-sm font-bold uppercase tracking-wider">
                  <span className="iconify" data-icon="mdi:star" data-width="18"></span>
                  {t("copper.badge")}
                </span>
              </div>
            </div>
            {/* Decorative glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-copper opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-500" />
          </motion.div>

          {/* Content side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-sm font-bold uppercase tracking-widest mb-4">
                <span className="iconify" data-icon="mdi:fire" data-width="20"></span>
                {t("copper.tag")}
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                <span className="text-foreground">{t("copper.heading1")}</span>
                <br />
                <span className="text-gradient-copper">{t("copper.heading2")}</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("copper.desc")}
            </p>

            {/* Types list */}
            <div className="space-y-3">
              {["copper.type1", "copper.type2", "copper.type3", "copper.type4"].map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="iconify text-primary" data-icon="mdi:check-circle" data-width="22"></span>
                  <span className="text-foreground font-medium">{t(key)}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 rounded-xl bg-card border border-primary/20 shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className="iconify text-primary mx-auto mb-2" data-icon={s.icon} data-width="28"></span>
                  <div className="font-heading text-xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+85569460064"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-lg shadow-copper transition-transform hover:scale-105"
              >
                <span className="iconify" data-icon="mdi:phone" data-width="20"></span>
                {t("copper.callNow")}
              </a>
              <a
                href="https://wa.me/85569460064?text=I%20want%20to%20sell%20copper%20scrap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-wider border-2 border-primary/40 text-foreground rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
              >
                <span className="iconify" data-icon="mdi:whatsapp" data-width="20"></span>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CopperHighlight;
