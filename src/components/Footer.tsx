import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold uppercase mb-2">
          <span className="text-foreground">{t("footer.title1")}</span>
          <span className="text-gradient-copper">{t("footer.title2")}</span>
        </p>
        <p className="text-muted-foreground text-sm mb-2">{t("footer.desc")}</p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
