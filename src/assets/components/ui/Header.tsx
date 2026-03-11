import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎈</span>
            <span className="font-heading font-bold text-lg text-foreground">
              popenjoy
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Fonctionnalités
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact
            </a>
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Confidentialité
            </Link>
            <Button size="sm" className="ml-2">
              Télécharger
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-card border-b border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Confidentialité
              </Link>
              <Button size="sm" className="w-full mt-2">
                Télécharger
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
