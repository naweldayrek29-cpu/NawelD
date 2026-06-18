import React from 'react';
import { ChevronDown, Monitor, Network, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            DAYREK Nawel
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            Étudiante BTS SIO - Option SISR
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/30">
              <Network className="text-purple-400" size={20} />
              <span className="text-gray-300">Support informatique</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/30">
              <Monitor className="text-purple-400" size={20} />
              <span className="text-gray-300">Administration systèmes</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/30">
              <Shield className="text-purple-400" size={20} />
              <span className="text-gray-300">Supervision réseau</span>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('alternance')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Découvrir mon parcours
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
