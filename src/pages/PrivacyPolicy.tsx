import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Calendar, Shield, Database, Eye, Trash2, Edit } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>

            <div className="bg-card rounded-3xl shadow-card p-8 md:p-12 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Politique de Confidentialité
                </h1>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-10">
                <Calendar className="w-4 h-4" />
                <span>Dernière mise à jour : Janvier 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bienvenue sur <strong className="text-foreground">popenjoy</strong>. Nous nous engageons à protéger 
                    la vie privée de nos utilisateurs, en particulier celle des enfants. Cette politique de 
                    confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                    personnelles conformément au RGPD et aux règles de Google Play.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
                    <Database className="w-5 h-5" />
                    Données collectées
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Notre application peut collecter les informations suivantes :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Données de progression :</strong> Scores, records et statistiques de jeu stockés localement sur l'appareil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Préférences utilisateur :</strong> Paramètres de l'application (son, langue, mode de jeu préféré)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Données techniques :</strong> Type d'appareil, version d'Android, identifiant publicitaire anonymisé</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-accent/30 rounded-xl border border-accent">
                    <p className="text-foreground text-sm font-medium">
                      ✅ Nous ne collectons PAS de données personnelles sensibles telles que : nom, adresse email, 
                      numéro de téléphone, photos ou localisation précise.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
                    <Eye className="w-5 h-5" />
                    Utilisation des données
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Les données collectées sont utilisées pour :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Améliorer l'expérience :</strong> Personnaliser le contenu et sauvegarder la progression</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Analyse anonyme :</strong> Comprendre comment l'application est utilisée pour l'améliorer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span><strong className="text-foreground">Support technique :</strong> Diagnostiquer et résoudre les problèmes techniques</span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
                    <Shield className="w-5 h-5" />
                    Stockage et sécurité
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous prenons la sécurité de vos données très au sérieux :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Les données de progression sont stockées <strong className="text-foreground">localement sur votre appareil</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Les données analytiques sont <strong className="text-foreground">anonymisées et agrégées</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Nous utilisons des <strong className="text-foreground">protocoles de sécurité standards</strong> pour protéger les données</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Aucune donnée n'est vendue ou partagée à des tiers à des fins commerciales</span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">5</span>
                    <Edit className="w-5 h-5" />
                    Vos droits
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-primary" />
                        Droit d'accès
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Demander une copie des données vous concernant
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                        <Edit className="w-4 h-4 text-primary" />
                        Droit de rectification
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Corriger les données inexactes
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                        <Trash2 className="w-4 h-4 text-primary" />
                        Droit à l'effacement
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Supprimer vos données (désinstaller l'app efface toutes les données locales)
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Droit d'opposition
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Refuser certains traitements de données
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">6</span>
                    Protection des enfants
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre application est destinée aux enfants et nous accordons une attention particulière 
                    à leur protection. Nous ne collectons pas sciemment de données personnelles d'enfants 
                    sans le consentement parental. L'application ne contient pas de publicités ciblées, 
                    d'achats intégrés non sécurisés, ni de liens vers des contenus inappropriés.
                  </p>
                </section>

                <section className="p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer 
                    vos droits, vous pouvez nous contacter :
                  </p>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      📧 Email : <a href="mailto:karouitkhadija11@gmail.com" className="text-primary hover:underline">karouitkhadija11@gmail.com</a>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Nous nous engageons à répondre à toute demande dans un délai de 30 jours.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
