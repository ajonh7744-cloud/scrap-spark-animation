import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">{t("about.heading1")}</span>
            <span className="text-gradient-copper">{t("about.heading2")}</span>
          </h2>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto text-center space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">{t("about.p1").split(".")[0]}.</strong> {t("about.p1").split(".").slice(1).join(".")}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          <p className="text-lg text-muted-foreground">
            {t("about.p3")}{" "}
            <a href="tel:+85569460064" className="text-primary font-bold hover:underline">+855 69 460 064</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
