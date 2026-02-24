import { motion } from "framer-motion";

const Navbar = () => {
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
          {["Materials", "Reviews", "FAQ", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+85569460064"
            className="px-5 py-2 font-heading text-sm font-bold uppercase tracking-wider bg-gradient-copper text-primary-foreground rounded-lg transition-transform hover:scale-105"
          >
            📞 Call Now
          </a>
        </div>
        {/* Mobile CTA */}
        <a
          href="tel:+85569460064"
          className="md:hidden px-4 py-2 font-heading text-sm font-bold uppercase bg-gradient-copper text-primary-foreground rounded-lg"
        >
          📞 Call
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
