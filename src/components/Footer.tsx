import React from "react";
import {
  Heart,
  Mail,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex items-center space-x-3">
                <Mail
                  className="text-purple-400"
                  size={20}
                />

                <a
                  href="mailto:naweldayrek29@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  naweldayrek29@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Linkedin
                  className="text-purple-400"
                  size={20}
                />

                <a
                  href="https://www.linkedin.com/in/nawel-dayrek-18b005288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Navigation
            </h3>

            <div className="space-y-2">

              <a
                href="#accueil"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Accueil
              </a>

              <a
                href="#experiences"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Expériences
              </a>

              <a
                href="#parcours"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Parcours
              </a>

              <a
                href="#projets"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Projets
              </a>

              <a
                href="#certifications"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Certifications
              </a>

            </div>
          </div>

          {/* PORTFOLIO */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Portfolio
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Étudiante spécialisée en systèmes, réseaux et cybersécurité,
              avec une expérience en support informatique, administration
              système et maintenance d’infrastructures.
            </p>
          </div>

        </div>

        {/* BAS DU FOOTER */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">

          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>
              © 2026 Portfolio. Fait avec
            </span>

            <Heart
              className="text-red-400"
              size={16}
            />

            <span>
              et React
            </span>
          </div>

          <div className="text-gray-400 text-sm">
            Systèmes • Réseaux • Cybersécurité
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;