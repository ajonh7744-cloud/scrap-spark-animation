const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold uppercase mb-2">
          <span className="text-foreground">Buy All Types of </span>
          <span className="text-gradient-copper">Scrap</span>
        </p>
        <p className="text-muted-foreground text-sm mb-2">
          Trusted scrap dealer in Phnom Penh, Cambodia — Copper, Aluminum, Iron, E-Waste & more.
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Buy All Types of Scrap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
