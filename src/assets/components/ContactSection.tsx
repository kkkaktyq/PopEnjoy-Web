import { motion } from "framer-motion";
import { Mail, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Une question ? Contactez-nous !
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour 
            toute question ou suggestion.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-12">
            <motion.a
              href="mailto:karouitkhadija11@gmail.com"
              className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-float transition-all duration-300 border border-border/50 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">karouitkhadija11@gmail.com</p>
              </div>
            </motion.a>
          </div>

          <div className="inline-flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-soft">
            <MessageCircle className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Réponse sous 24-48h en moyenne
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
