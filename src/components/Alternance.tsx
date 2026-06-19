import React from 'react';
import { Building2, Network, Globe, Mail, Users, Calendar, MapPin } from 'lucide-react';

const Alternance = () => {
  const missions = [
    {
      icon: Network,
      title: "Support Informatique et Gestion du Parc",
      description: "Participation à la maintenance du parc informatique et au bon fonctionnement des équipements utilisés au sein de l’association. J’interviens sur l’assistance aux utilisateurs, le suivi du matériel et la gestion de certains équipements liés à la sécurité des locaux.",
      details: [
        "Support technique auprès des utilisateurs",
        "Maintenance des postes informatiques et équipements réseau",
        "Suivi du parc informatique de l’association",
        "Gestion des accès aux bureaux via badges et reconnaissance faciale"
      ]
    },
    {
      icon: Users,
      title: "Gestion des Réservations et Accompagnement Utilisateur",
      description: "Administration de l’interface de réservation en ligne pour les activités aquatiques, les cours de natation et les formations. Cette mission me permet de contribuer à l’organisation des créneaux, au suivi des inscriptions et à l’accompagnement des usagers.",
      details: [
        "Gestion de l’interface de réservation en ligne",
        "Suivi des plannings, créneaux et disponibilités",
        "Validation et suivi des inscriptions",
        "Accompagnement des utilisateurs et communication avec les usagers"
      ]
    },
    {
      icon: Globe,
      title: "Mise à Jour et Maintenance du Site Internet",
      description: "Participation à la mise à jour du site internet de l’association afin de garantir l’accès aux informations importantes. J’interviens notamment sur l’actualisation des contenus, les informations liées aux formations et l’amélioration de l’expérience utilisateur.",
      details: [
        "Mise à jour des contenus et actualités",
        "Publication des informations liées aux formations",
        "Suivi des créneaux et disponibilités en ligne",
        "Amélioration continue de l’expérience utilisateur"
      ]
    },
    {
      icon: Mail,
      title: "Gestion des Comptes et Adresses Email",
      description: "Création et administration des adresses email professionnelles associées au domaine du Grand Bleu. Cette mission participe à l’amélioration de la communication interne, à la gestion des comptes utilisateurs et à la sécurisation des accès.",
      details: [
        "Création et configuration d’adresses email professionnelles",
        "Paramétrage des comptes utilisateurs",
        "Gestion des droits d’accès et des permissions",
        "Mise en place de bonnes pratiques de sécurité"
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
            <h3 className="text-3xl text-purple-400 font-bold">Le Grand Bleu</h3>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-400" size={20} />
              <span>Marseille</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-purple-400" size={20} />
              <span>Technicienne informatique en alternance | Mars 2025 - Aujourd’hui</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Dans le cadre de mon BTS SIO option SISR, j’effectue mon alternance au sein de l’Association Le Grand Bleu à Marseille.
            J’interviens sur différentes missions liées au support informatique, à la gestion des comptes utilisateurs, à la maintenance du parc informatique
            et à l’accompagnement de la digitalisation de l’association.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <mission.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-3">{mission.title}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">{mission.description}</p>
                  <div className="space-y-2">
                    {mission.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Environnement de travail */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Mon Environnement de Travail</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <Network className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Infrastructure Technique</h5>
              <p className="text-gray-300 text-sm">Gestion des serveurs, réseaux et équipements informatiques de l'association</p>
            </div>
            <div className="space-y-3">
              <Users className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Service Client</h5>
              <p className="text-gray-300 text-sm">Interface entre la technologie et les besoins des clients pour les réservations</p>
            </div>
            <div className="space-y-3">
              <Globe className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Développement Web</h5>
              <p className="text-gray-300 text-sm">Maintenance et amélioration continue du site internet de l'association</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternance;
