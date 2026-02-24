const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold uppercase mb-2">
          <span className="text-foreground">Scrap</span>
          <span className="text-gradient-copper">Kings</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ScrapKings. Best scrap metal buyers — Copper, Aluminum, Steel & more.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
