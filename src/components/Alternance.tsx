import React, { useState } from "react";
import {
  Building2,
  Network,
  Globe,
  Mail,
  Users,
  Calendar,
  MapPin,
  ChevronDown,
  Server,
  ShieldCheck,
  Wrench,
  LucideIcon,
} from "lucide-react";

type Mission = {
  icon: LucideIcon;
  title: string;
  details: string[];
};

type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  description: string;
  missions: Mission[];
  tools: string[];
};

type Skill = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const Alternance = () => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      company: "Association Le Grand Bleu",
      role: "Technicienne Support Informatique — Alternance",
      location: "Marseille",
      date: "Mars 2025 - Août 2026",
      description:
        "Au sein du siège de l'Association Le Grand Bleu, je contribue au bon fonctionnement du système d'information en intervenant sur le support aux utilisateurs, l'administration des postes et des comptes, la maintenance du parc informatique ainsi que sur les infrastructures systèmes, réseaux et les outils de sécurité.",

      missions: [
        {
          icon: Network,
          title: "Support IT et Maintenance du Parc",
          details: [
            "Assistance technique auprès des utilisateurs",
            "Diagnostic et résolution d’incidents matériels et logiciels",
            "Installation, configuration et maintenance des postes Windows",
            "Suivi et maintenance du parc informatique",
            "Suivi des équipements réseau",
            "Accompagnement des utilisateurs dans l’utilisation des outils numériques",
          ],
        },
        {
          icon: Users,
          title: "Administration des Comptes et Accès",
          details: [
            "Création et gestion des comptes utilisateurs",
            "Administration des droits d’accès et des permissions",
            "Gestion des adresses email professionnelles",
            "Administration des comptes Microsoft 365",
            "Application des bonnes pratiques de sécurité",
            "Gestion des accès utilisateurs selon leurs besoins",
          ],
        },
        {
          icon: Globe,
          title: "Infrastructure Systèmes et Réseaux",
          details: [
            "Administration Windows Server",
            "Utilisation d’Active Directory",
            "Gestion de DNS, DHCP et GPO",
            "Administration et suivi des bornes Wi-Fi UniFi",
            "Suivi des équipements réseau",
            "Participation au maintien du bon fonctionnement de l’infrastructure",
          ],
        },
        {
          icon: Mail,
          title: "Outils, Sécurité et Documentation",
          details: [
            "Suivi des demandes et incidents avec Odoo",
            "Gestion des accès via badges et reconnaissance faciale",
            "Suivi des équipements liés à la sécurité",
            "Documentation technique",
            "Amélioration des procédures internes",
            "Accompagnement des utilisateurs sur les outils numériques",
          ],
        },
      ],

      tools: [
        "Windows Server",
        "Active Directory",
        "Microsoft 365",
        "DNS",
        "DHCP",
        "GPO",
        "UniFi",
        "Odoo",
        "Windows",
      ],
    },

    {
      company: "NETBFRS",
      role: "Technicienne Informatique — Stage",
      location: "Marseille",
      date: "Décembre 2025 - Février 2026",
      description:
        "Stage orienté infrastructure réseau et maintenance informatique, avec des interventions sur le câblage, les équipements Wi-Fi, Active Directory et le diagnostic matériel.",

      missions: [
        {
          icon: Network,
          title: "Infrastructure Réseau",
          details: [
            "Participation au montage de baies de brassage",
            "Raccordement de câbles Ethernet",
            "Organisation et suivi des équipements réseau",
            "Installation et configuration de points d’accès Wi-Fi",
          ],
        },
        {
          icon: Users,
          title: "Administration Système",
          details: [
            "Maintenance d’Active Directory",
            "Intervention sur les environnements Windows",
            "Vérification et maintenance des postes informatiques",
          ],
        },
        {
          icon: Wrench,
          title: "Maintenance Matérielle",
          details: [
            "Diagnostic de pannes sur ordinateurs",
            "Diagnostic de problèmes sur appareils mobiles",
            "Remplacement de composants matériels",
            "Résolution de problèmes techniques",
            "Maintenance préventive et corrective du matériel",
          ],
        },
      ],

      tools: [
        "Active Directory",
        "Windows",
        "Ethernet",
        "Wi-Fi",
        "Réseau",
        "Hardware",
      ],
    },

    {
      company: "IT Consulting Marseille",
      role: "Stage de découverte — Administration Systèmes et Réseaux",
      location: "Marseille",
      date: "Mars 2024 - Avril 2024",
      description:
        "Première immersion professionnelle dans l’administration systèmes et réseaux, avec des missions de maintenance, de préparation de postes et de déploiement logiciel.",

      missions: [
        {
          icon: Wrench,
          title: "Maintenance Informatique",
          details: [
            "Assistance à la maintenance du matériel informatique",
            "Participation au diagnostic de problèmes techniques",
            "Vérification du bon fonctionnement des équipements",
          ],
        },
        {
          icon: Users,
          title: "Préparation des Postes",
          details: [
            "Participation à la configuration des postes informatiques",
            "Installation de logiciels",
            "Déploiement de mises à jour",
            "Préparation des environnements utilisateurs",
          ],
        },
        {
          icon: Server,
          title: "Sauvegarde et Administration",
          details: [
            "Découverte des procédures de sauvegarde",
            "Observation des pratiques d’administration systèmes",
            "Découverte du fonctionnement d’une infrastructure informatique professionnelle",
          ],
        },
      ],

      tools: [
        "Windows",
        "Maintenance",
        "Déploiement logiciel",
        "Mises à jour",
        "Sauvegarde",
      ],
    },
  ];

  const skills: Skill[] = [
    {
      icon: Server,
      title: "Systèmes",
      items: [
        "Windows Server",
        "Windows",
        "Active Directory",
        "GPO",
        "Linux",
      ],
    },
    {
      icon: Network,
      title: "Réseaux",
      items: [
        "TCP/IP",
        "DNS",
        "DHCP",
        "VLAN",
        "Routage",
        "VPN",
        "UniFi",
      ],
    },
    {
      icon: Users,
      title: "Administration & Support",
      items: [
        "Microsoft 365",
        "Gestion des comptes",
        "Support utilisateurs",
        "Maintenance du parc",
        "Odoo",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Outils & Sécurité",
      items: [
        "GLPI",
        "PowerShell",
        "UniFi",
        "Contrôle d'accès",
        "Documentation",
      ],
    },
  ];

  const toggleExperience = (index: number) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <section
      id="alternance"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">

        {/* TITRE */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            Mon parcours professionnel
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Expériences professionnelles
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les expériences qui m’ont permis de développer mes
            compétences en support informatique, systèmes, réseaux et
            maintenance.
          </p>
        </div>

        {/* EXPERIENCES */}
        <div className="space-y-8 mb-20">
          {experiences.map((experience, index) => {
            const isOpen = openExperience === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  className="w-full p-6 md:p-8 text-left"
                >
                  <div className="flex items-start justify-between gap-6">

                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-xl flex-shrink-0">
                        <Building2 className="text-white" size={26} />
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl text-purple-400 font-bold mb-2">
                          {experience.company}
                        </h3>

                        <p className="text-lg text-white font-semibold mb-4">
                          {experience.role}
                        </p>

                        <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin
                              className="text-purple-400"
                              size={18}
                            />
                            <span>{experience.location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar
                              className="text-purple-400"
                              size={18}
                            />
                            <span>{experience.date}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 max-w-4xl leading-relaxed">
                          {experience.description}
                        </p>

                        <p className="text-purple-400 text-sm font-medium mt-4">
                          {isOpen
                            ? "Réduire les détails"
                            : "Voir les missions en détail"}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={28}
                    />
                  </div>
                </button>

                {/* ACCORDEON */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[3000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8">
                    <div className="border-t border-purple-500/20 pt-8">

                      <h4 className="text-xl font-bold text-white mb-8">
                        Missions réalisées
                      </h4>

                      <div className="grid md:grid-cols-2 gap-6">
                        {experience.missions.map(
                          (mission, missionIndex) => {
                            const MissionIcon = mission.icon;

                            return (
                              <div
                                key={missionIndex}
                                className="group bg-gray-900/40 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                              >
                                <div className="flex items-start gap-4">

                                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg flex-shrink-0">
                                    <MissionIcon
                                      className="text-white"
                                      size={24}
                                    />
                                  </div>

                                  <div className="flex-1">
                                    <h5 className="text-lg font-semibold text-white mb-5">
                                      {mission.title}
                                    </h5>

                                    <div className="space-y-3">
                                      {mission.details.map(
                                        (detail, detailIndex) => (
                                          <div
                                            key={detailIndex}
                                            className="flex items-start gap-2"
                                          >
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>

                                            <span className="text-gray-300 text-sm leading-relaxed">
                                              {detail}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>

                      {/* ENVIRONNEMENT TECHNIQUE */}
                      <div className="mt-10">
                        <h4 className="text-xl font-bold text-white mb-5">
                          Environnement technique
                        </h4>

                        <div className="flex flex-wrap gap-3">
                          {experience.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm hover:bg-purple-500/20 transition-colors duration-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPETENCES */}
        <div className="mt-20">

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
              Environnement technique
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compétences & outils
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Les technologies et outils que j’utilise dans mes expériences
              professionnelles et mes projets techniques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;

              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-5">
                    <SkillIcon
                      className="text-purple-400"
                      size={26}
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    {skill.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1.5 text-xs text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Alternance;