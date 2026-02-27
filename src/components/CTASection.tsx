import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  const contacts = [
    { icon: Phone, label: t("cta.phone"), value: t("cta.phoneVal"), href: "tel:+85569460064", color: "text-primary" },
    { icon: MessageCircle, label: "WhatsApp", value: "+855 69 460 064", href: "https://wa.me/85569460064", color: "text-green-500" },
    { icon: MessageCircle, label: t("cta.telegram"), value: t("cta.telegramVal"), href: "https://t.me/+85569460064", color: "text-blue-400" },
    { icon: Facebook, label: t("cta.facebook"), value: t("cta.facebookVal"), href: "https://www.facebook.com/profile.php?id=489012197639262", color: "text-blue-500" },
    { icon: MapPin, label: t("cta.location"), value: t("cta.locationVal"), href: "https://maps.google.com/?q=Phnom+Penh+Cambodia", color: "text-red-400" },
    { icon: Clock, label: t("cta.hours"), value: t("cta.hoursVal"), href: undefined, color: "text-accent" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
            <span className="text-foreground">{t("cta.heading1")}</span>
            <span className="text-gradient-copper">{t("cta.heading2")}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">{t("cta.sub")}</p>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {contacts.map((c, i) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Wrapper
                    {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer block"
                  >
                    <c.icon className={`w-7 h-7 ${c.color} mb-3`} />
                    <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-1">{c.label}</span>
                    <span className="text-foreground font-semibold text-lg">{c.value}</span>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Primary CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+85569460064"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-heading font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-xl shadow-copper transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              📞 {t("hero.callNow")}
            </motion.a>
            <motion.a
              href="https://wa.me/85569460064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-heading font-bold uppercase tracking-wider bg-green-600 text-white rounded-xl shadow-lg transition-all hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              💬 WhatsApp
            </motion.a>
            <motion.a
              href="https://t.me/+85569460064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-heading font-bold uppercase tracking-wider border-2 border-blue-400/40 text-foreground rounded-xl transition-all hover:border-blue-400 hover:bg-blue-400/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ✈️ Telegram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
