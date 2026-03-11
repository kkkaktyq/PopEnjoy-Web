import { motion } from "framer-motion";
import { Palette, Hash, BookA, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Couleurs",
    description: "Apprendre les couleurs en éclatant des ballons colorés",
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Hash,
    title: "Chiffres",
    description: "Découvrir les chiffres de manière ludique et interactive",
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: BookA,
    title: "Alphabet",
    description: "Maîtriser l'alphabet lettre par lettre en s'amusant",
    color: "bg-accent",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Gamepad2,
    title: "Mode Libre",
    description: "Jouer librement et éclater tous les ballons sans limite",
    color: "bg-highlight",
    iconColor: "text-highlight-foreground",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            4 modes d'apprentissage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Chaque mode est conçu pour stimuler l'apprentissage tout en gardant 
            le plaisir au centre de l'expérience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card-gradient rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300 border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🎵</div>
            <h4 className="font-heading font-bold text-foreground mb-2">Sons amusants</h4>
            <p className="text-muted-foreground text-sm">Des effets sonores joyeux à chaque ballon éclaté</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="font-heading font-bold text-foreground mb-2">Système de records</h4>
            <p className="text-muted-foreground text-sm">Suivez vos progrès et battez vos propres records</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">👶</div>
            <h4 className="font-heading font-bold text-foreground mb-2">Adapté aux enfants</h4>
            <p className="text-muted-foreground text-sm">Interface intuitive et sécurisée pour les plus petits</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
