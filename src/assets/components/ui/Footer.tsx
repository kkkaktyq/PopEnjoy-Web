import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎈</span>
            <span className="font-heading font-bold text-lg text-background">
              popenjoy
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#features"
              className="text-muted/80 hover:text-background transition-colors text-sm"
            >
              Fonctionnalités
            </a>
            <a
              href="#contact"
              className="text-muted/80 hover:text-background transition-colors text-sm"
            >
              Contact
            </a>
            <Link
              to="/privacy"
              className="text-muted/80 hover:text-background transition-colors text-sm"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-muted/20 text-center">
          <p className="text-muted/60 text-sm">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
