import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={20} />
                <span className="text-gray-300">naweldayrek29@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-purple-400" size={20} />
                <span className="text-gray-300">LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-purple-400" size={20} />
                <span className="text-gray-300">GitHub</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#accueil" className="block text-gray-300 hover:text-purple-400 transition-colors">Accueil</a>
              <a href="#alternance" className="block text-gray-300 hover:text-purple-400 transition-colors">Alternance</a>
              <a href="#bts-sio" className="block text-gray-300 hover:text-purple-400 transition-colors">BTS SIO</a>
              <a href="#projets" className="block text-gray-300 hover:text-purple-400 transition-colors">Projets</a>
              <a href="#veilles" className="block text-gray-300 hover:text-purple-400 transition-colors">Veilles</a>
              <a href="#tcs" className="block text-gray-300 hover:text-purple-400 transition-colors">TCS</a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">À propos</a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Étudiante en BTS SIO option SISR, passionnée par l'administration réseau 
              et les technologies informatiques. En alternance au Grand Bleu.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© 2024 Portfolio BTS SIO. Fait avec</span>
            <Heart className="text-red-400" size={16} />
            <span>et React</span>
          </div>
          <div className="text-gray-400 text-sm">
            Étudiante BTS SIO - Option SISR
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;