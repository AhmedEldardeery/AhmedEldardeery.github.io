const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </a>

          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved. Crafted with passion.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#work"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
