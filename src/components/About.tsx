import React from 'react';
import { User, GraduationCap, Calendar, MapPin, Code, Brain } from 'lucide-react';

const About = () => {
  const parcours = [
    {
      year: "2026-2027",
      title: "Bachelor Informatique & Cybersécurité",
      subtitle: "IFC Marseille",
      description: "Poursuite d’études en administration systèmes, réseaux et cybersécurité",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-700"
    },
    {
      year: "2024-2026",
      title: "BTS SIO - Option SISR",
      subtitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
      description: "Formation en alternance spécialisée en systèmes, réseaux, virtualisation et cybersécurité",
      icon: Code,
      color: "from-blue-600 to-blue-700"
    },
    {
      year: "2023-2024",
      title: "BUT Informatique - 1ère année",
      subtitle: "Bachelor universitaire technologique",
      description: "Acquisition des bases en algorithmique, programmation et développement",
      icon: Brain,
      color: "from-green-600 to-green-700"
    },
    {
      year: "2020-2023",
      title: "Baccalauréat Général",
      subtitle: "Spécialités Mathématiques et NSI",
      description: "Formation générale avec spécialisation en informatique et sciences numériques",
      icon: GraduationCap,
      color: "from-orange-600 to-orange-700"
    }
  ];

  const competencesTechniques = [
    "Windows Server / Linux",
    "Active Directory / GPO",
    "DNS / DHCP",
    "VLAN / VPN / Routage",
    "Proxmox / Hyper-V / VMware",
    "Microsoft 365",
    "Odoo / UniFi",
    "PowerShell"
  ];

  const competencesPersonnelles = [
    "Rigueur",
    "Autonomie",
    "Esprit d’équipe",
    "Sens du service",
    "Communication utilisateur",
    "Résolution d’incidents",
    "Organisation",
    "Curiosité technique"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <User className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">À Propos de Moi</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mon parcours, mes compétences et mon évolution dans les métiers de l’informatique.
          </p>
        </div>

        {/* Profile Section */}
<div className="grid lg:grid-cols-3 gap-12 mb-16">
  <div className="lg:col-span-1">
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
        <User className="text-white" size={64} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">
        Technicienne Support Informatique
      </h3>

      <p className="text-purple-400 font-semibold mb-4">
        20 ans
      </p>

      <div className="space-y-2 text-gray-300">
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="text-purple-400" size={16} />
          <span>Étudiante Bachelor Informatique & Cybersécurité - IFC Marseille</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Calendar className="text-purple-400" size={16} />
          <span>Recherche d'alternance • Septembre 2026</span>
        </div>
      </div>
    </div>
  </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mon Profil</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Titulaire d'un BTS SIO (option SISR), j'ai acquis une première expérience professionnelle grâce à mon alternance
                au sein du siège de l'Association Le Grand Bleu. J'y suis intervenue sur des missions de support informatique,
                d'administration systèmes, de gestion des comptes utilisateurs, de maintenance du parc informatique et
                d'accompagnement des utilisateurs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                À la rentrée 2026, j'intégrerai un Bachelor Informatique & Cybersécurité afin d'approfondir mes compétences
                en infrastructures systèmes, réseaux et cybersécurité. Je suis actuellement à la recherche d'une alternance
                pour poursuivre cette évolution professionnelle.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Mon Parcours</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-purple-400"></div>
            
            <div className="space-y-12">
              {parcours.map((etape, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`bg-gradient-to-br ${etape.color} p-2 rounded-lg`}>
                          <etape.icon className="text-white" size={20} />
                        </div>
                        <span className="text-purple-400 font-semibold">{etape.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{etape.title}</h4>
                      <p className="text-purple-300 font-medium mb-2">{etape.subtitle}</p>
                      <p className="text-gray-300 text-sm">{etape.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="text-purple-400 mr-3" size={28} />
              Compétences Techniques
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {competencesTechniques.map((competence, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{competence}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="text-purple-400 mr-3" size={28} />
              Compétences Personnelles
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {competencesPersonnelles.map((competence, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{competence}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

{/* Call to Action */}
<div className="mt-12 text-center bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
  <User className="text-purple-400 mx-auto mb-4" size={48} />

  <h3 className="text-2xl font-bold text-white mb-4">
    Télécharger mon CV
  </h3>

  <p className="text-gray-300 max-w-2xl mx-auto mb-6">
    Vous recherchez une alternante en administration systèmes et réseaux, support informatique
    ou cybersécurité ? Consultez mon CV pour découvrir mon parcours, mes compétences et mes projets.
  </p>

  <a
    href={import.meta.env.BASE_URL + "CV_DAYREK_Portfolio.pdf"}
    download="CV_DAYREK_Nawel.pdf"
    className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-white"
  >
    Télécharger mon CV
  </a>
</div>
      </div>
    </section>
  );
};

export default About;