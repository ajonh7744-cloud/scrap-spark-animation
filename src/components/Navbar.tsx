import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const links = [
    { key: "nav.materials", href: "#materials" },
    { key: "nav.reviews", href: "#reviews" },
    { key: "nav.faq", href: "#faq" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="font-heading text-2xl font-bold uppercase">
          <span className="text-foreground">Buy</span>
          <span className="text-gradient-copper">Scrap</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "km" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-heading font-bold uppercase tracking-wider border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
          >
            {lang === "en" ? "🇰🇭 ខ្មែរ" : "🇬🇧 EN"}
          </button>

          <a
            href="tel:+85569460064"
            className="px-5 py-2 font-heading text-sm font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-lg transition-transform hover:scale-105"
          >
            📞 {t("nav.call")}
          </a>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "km" : "en")}
            className="px-2 py-1.5 text-xs font-heading font-bold uppercase border border-border rounded-lg hover:border-primary transition-all"
          >
            {lang === "en" ? "🇰🇭" : "🇬🇧"}
          </button>
          <a
            href="tel:+85569460064"
            className="px-4 py-2 font-heading text-sm font-bold uppercase bg-gradient-copper text-primary-foreground rounded-lg"
          >
            📞 {t("nav.callShort")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
