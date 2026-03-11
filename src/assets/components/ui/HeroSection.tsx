import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";
import { Button } from "@/components/ui/button";
import { Play, Star, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Floating balloons decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-16 h-20 rounded-full bg-primary/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-16 rounded-full bg-secondary/40"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-10 h-14 rounded-full bg-accent/40"
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-60 left-1/3 w-8 h-12 rounded-full bg-highlight/50"
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-1/4 w-14 h-18 rounded-full bg-pink/40"
          animate={{ y: [-12, 8, -12] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
              <span className="text-2xl">🎈</span>
              <span className="text-sm font-medium text-muted-foreground">
                Jeu éducatif pour enfants
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
              <span className="text-gradient">popenjoy</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Apprendre en s'amusant ! 🎯
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 mb-8 leading-relaxed">
              Un jeu captivant où vos enfants apprennent les couleurs, les chiffres 
              et l'alphabet en éclatant des ballons colorés. Éducatif, amusant et 
              sans publicité !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base font-semibold shadow-card hover:shadow-float transition-all duration-300 bg-primary hover:bg-primary/90">
                <Play className="w-5 h-5" />
                Télécharger sur Google Play
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base font-semibold border-2"
              >
                <Star className="w-5 h-5" />
                En savoir plus
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-highlight text-highlight"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  4.9/5 étoiles
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  10K+ téléchargements
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.img
                src={heroMockup}
                alt="popenjoy - App Preview"
                className="w-72 md:w-80 lg:w-96 drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
