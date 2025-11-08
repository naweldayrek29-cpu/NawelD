import React from 'react';
import { User, GraduationCap, Calendar, MapPin, Code, Brain } from 'lucide-react';

const About = () => {
  const parcours = [
    {
      year: "2024-2025",
      title: "BTS SIO - 2ème année",
      subtitle: "Option SISR - Solutions d'Infrastructure, Systèmes et Réseaux",
      description: "Formation en alternance avec spécialisation en administration systèmes et réseaux",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-700"
    },
    {
      year: "2023-2024",
      title: "BTS SIO - 1ère année",
      subtitle: "Formation en alternance - Découverte des fondamentaux informatiques",
      description: "Apprentissage des bases en informatique, réseaux et développement",
      icon: Code,
      color: "from-blue-600 to-blue-700"
    },
    {
      year: "2023",
      title: "BUT Informatique - 1 ère année ",
      subtitle: "Bachelor universitaire technologique",
      description: "Acquisition des compétences de base en informatique et programmation",
      icon: Brain,
      color: "from-green-600 to-green-700"
    },
    {
      year: "2020-2023",
      title: "Baccalauréat Général",
      subtitle: "Spécialités Mathématiques et Informatique",
      description: "Formation générale avec orientation scientifique et technologique",
      icon: GraduationCap,
      color: "from-orange-600 to-orange-700"
    }
  ];

  const competencesTechniques = [
  "Administration Windows Server / Linux",
  "Configuration et maintenance réseaux",
  "Supervision systèmes (PRTG, SNMP, Zabbix)",
  "Gestion Active Directory",
  "Virtualisation (VMware, Hyper-V)",
  "Sécurité informatique et pare-feu",
  "Gestion de tickets (GLPI)",
  "Proxy / messagerie (Artica)",
  "Téléphonie IP (XiVO)",
  "Contrôleur WiFi"
];


  const competencesPersonnelles = [
    "Travail en équipe",
    "Communication client",
    "Résolution de problèmes",
    "Autonomie et initiative",
    "Gestion du stress",
    "Adaptabilité",
    "Sens du service",
    "Organisation et méthode"
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
            Découvrez mon parcours, mes compétences et ma passion pour l'informatique
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                <User className="text-white" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Étudiant BTS SIO</h3>
              <p className="text-purple-400 font-semibold mb-4">19 ans</p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="text-purple-400" size={16} />
                  <span>Le Grand Bleu - Alternance</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="text-purple-400" size={16} />
                  <span>2ème année - Option SISR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mon Profil</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionné par l'informatique depuis le lycée où j'ai choisi les spécialités Mathématiques et Informatique, 
                j'ai poursuivi mes études avec un BUT Informatique en 2023. Actuellement en 2ème année de BTS SIO option SISR, 
                je me spécialise dans l'administration des systèmes et réseaux.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mon alternance au sein de l'association Le Grand Bleu me permet d'appliquer mes connaissances théoriques 
                dans un environnement professionnel concret. J'y développe mes compétences en administration réseau, 
                gestion de services web et support utilisateur.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mon objectif est de devenir un expert en infrastructure informatique, capable de concevoir, 
                déployer et maintenir des solutions techniques robustes et sécurisées.
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
          <h3 className="text-2xl font-bold text-white mb-4">Contactez-moi</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de mes projets, 
            de mon parcours ou d'opportunités de collaboration.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-white">
            Me Contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
