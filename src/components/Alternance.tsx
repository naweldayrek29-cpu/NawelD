import React from 'react';
import { Building2, Network, Globe, Mail, Users, Calendar, MapPin } from 'lucide-react';

const Alternance = () => {
  const missions = [
    {
      icon: Network,
      title: "Support IT et Maintenance du Parc",
      details: [
        "Assistance technique auprès des utilisateurs",
        "Diagnostic et résolution d’incidents matériels et logiciels",
        "Installation, configuration et maintenance des postes Windows",
        "Suivi du parc informatique et des équipements réseau"
      ]
    },
    {
      icon: Users,
      title: "Administration des Comptes et Accès",
      details: [
        "Création et gestion des comptes utilisateurs",
        "Administration des droits d’accès et des permissions",
        "Gestion des adresses email professionnelles",
        "Application des bonnes pratiques de sécurité"
      ]
    },
    {
      icon: Globe,
      title: "Infrastructure Systèmes et Réseaux",
      details: [
        "Administration Windows Server",
        "Utilisation d’Active Directory, DNS, DHCP et GPO",
        "Gestion des bornes Wi-Fi avec UniFi",
        "Suivi des demandes et incidents avec Odoo"
      ]
    },
    {
      icon: Mail,
      title: "Sécurité et Outils Numériques",
      details: [
        "Gestion des accès via badges et reconnaissance faciale",
        "Suivi des équipements liés à la sécurité",
        "Accompagnement des utilisateurs sur les outils numériques",
        "Documentation technique et amélioration des procédures"
      ]
    }
  ];

  return (
    <section id="alternance" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mon Alternance
          </h2>

          <div className="flex items-center justify-center space-x-3 mb-6">
            <Building2 className="text-purple-400" size={32} />
            <h3 className="text-3xl text-purple-400 font-bold">
              Le Grand Bleu
            </h3>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-300 flex-wrap gap-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-400" size={20} />
              <span>Siège de l'association — Marseille</span>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="text-purple-400" size={20} />
              <span>
                Technicienne Support Informatique en alternance | Mars 2025 - Août 2026
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Au sein du siège de l'Association Le Grand Bleu, je contribue au bon
            fonctionnement du système d'information en intervenant sur le support
            aux utilisateurs, l'administration des postes et des comptes, la
            maintenance du parc informatique ainsi que sur des projets liés aux
            infrastructures systèmes, réseaux et à la sécurité informatique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <mission.icon className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-5">
                    {mission.title}
                  </h4>

                  <div className="space-y-3">
                    {mission.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>

                        <span className="text-gray-300 text-sm">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            Compétences et outils utilisés
          </h4>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <Network className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">
                Systèmes & Réseaux
              </h5>
              <p className="text-gray-300 text-sm">
                Windows Server • Active Directory • DNS • DHCP • GPO • VLAN
              </p>
            </div>

            <div className="space-y-3">
              <Users className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">
                Support & Administration
              </h5>
              <p className="text-gray-300 text-sm">
                Support utilisateurs • Microsoft 365 • Gestion des comptes • Maintenance du parc
              </p>
            </div>

            <div className="space-y-3">
              <Globe className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">
                Outils & Sécurité
              </h5>
              <p className="text-gray-300 text-sm">
                Odoo • UniFi • Contrôle d'accès • Documentation technique
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Alternance;