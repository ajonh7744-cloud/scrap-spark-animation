import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const socials = [
    { icon: Phone, href: "tel:+85569460064", label: "Phone" },
    { icon: MessageCircle, href: "https://t.me/+85569460064", label: "Telegram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=489012197639262", label: "Facebook" },
    { icon: MapPin, href: "https://maps.google.com/?q=Phnom+Penh+Cambodia", label: "Location" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold uppercase mb-1">
              <span className="text-foreground">{t("footer.title1")}</span>
              <span className="text-gradient-copper">{t("footer.title2")}</span>
            </p>
            <p className="text-muted-foreground text-sm">{t("footer.desc")}</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {t("footer.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
