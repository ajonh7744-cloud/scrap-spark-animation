import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+85569460064"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-copper shadow-copper flex items-center justify-center text-primary-foreground animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
