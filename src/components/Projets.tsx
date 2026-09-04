import React, { useMemo, useState } from "react";
import {
  FolderOpen,
  School,
  Building,
  Calendar,
  Users,
  Download,
  X,
  Briefcase,
  Eye,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Category = "scolaire" | "professionnel";
type ProjetStatus = "Terminé" | "En cours";

interface Projet {
  title: string;
  description: string;
  fullDescription?: React.ReactNode;
  technologies: string[];
  date: string;
  status: ProjetStatus;
  icon: LucideIcon;
  color: string;
  download?: string;
  view?: string;
}

const Projets = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("professionnel");

  const [selectedProjet, setSelectedProjet] =
    useState<Projet | null>(null);

  const projets: Record<Category, Projet[]> = {
    scolaire: [
      {
        title: "Mise en place d'un Active Directory",
        description:
          "Installation et configuration d’un contrôleur de domaine Active Directory avec gestion centralisée des utilisateurs, groupes et stratégies.",
        technologies: [
          "Windows Server",
          "Active Directory",
          "DNS",
          "GPO",
        ],
        date: "01/02/2025 au 15/02/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-sky-600 to-sky-700",
        download:
          import.meta.env.BASE_URL + "Active_Directory.pdf",
        view:
          import.meta.env.BASE_URL + "Active_Directory.pdf",
      },

      {
        title: "Configuration du routeur Zyxel",
        description:
          "Configuration et sécurisation d’un routeur Zyxel avec gestion du DHCP, du routage et des accès réseau.",
        technologies: [
          "Zyxel",
          "DHCP",
          "Routage",
          "Réseau",
        ],
        date: "15/02/2025 au 01/03/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-emerald-600 to-emerald-700",
        download:
          import.meta.env.BASE_URL + "tpZyXel.pdf",
        view:
          import.meta.env.BASE_URL + "tpZyXel.pdf",
      },

      {
        title: "Paramétrage Routeur & Switch",
        description:
          "Mise en place de deux VLAN isolés en DHCP afin de segmenter le réseau et renforcer la sécurité.",
        technologies: [
          "Switch Netgear",
          "Routeur Zyxel",
          "VLAN",
          "DHCP",
        ],
        date: "01/01/2025 au 01/02/2025",
        status: "Terminé",
        icon: School,
        color: "from-indigo-600 to-indigo-700",
        download:
          import.meta.env.BASE_URL +
          "Parametrage_Routeur_Switch.pdf",
        view:
          import.meta.env.BASE_URL +
          "Parametrage_Routeur_Switch.pdf",
      },

      {
        title: "Installation de GLPI",
        description:
          "Déploiement d’une solution de ticketing : gestion des tickets, inventaire, parc informatique et intégration LDAP/AD.",
        technologies: [
          "GLPI",
          "Linux (Debian/Ubuntu)",
          "Apache",
          "MariaDB/MySQL",
          "LDAP / Active Directory",
          "GLPI Agent",
        ],
        date: "01/03/2025 au 20/03/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-teal-600 to-teal-700",
        download:
          import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
      },

      {
        title: "Installation de Zabbix",
        description:
          "Mise en place d’une plateforme de supervision avec découverte automatique des hôtes, alertes, tableaux de bord et surveillance SNMP.",
        technologies: [
          "Zabbix Server",
          "Zabbix Agent",
          "SNMP",
          "MySQL/MariaDB",
          "Linux",
        ],
        date: "21/03/2025 au 10/04/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-orange-600 to-orange-700",
        download:
          import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
      },

      {
        title: "Installation d’Artica Proxy",
        description:
          "Configuration d’un proxy avec filtrage web et sécurisation de l’accès à Internet.",
        technologies: [
          "Artica Proxy",
          "SSL",
          "Linux",
          "GPO",
        ],
        date: "01/10/2025 au 15/10/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-purple-600 to-purple-700",
        download:
          import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
      },

      {
        title: "Déploiement du contrôleur WiFi UniFi",
        description:
          "Installation et configuration d’un contrôleur WiFi UniFi sous Debian avec accès web centralisé pour la gestion du réseau sans fil.",
        technologies: [
          "UniFi",
          "Debian",
          "WiFi",
          "Réseau",
        ],
        date: "01/11/2025 au 15/11/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-blue-600 to-blue-700",
        download:
          import.meta.env.BASE_URL +
          "Procédure_WIFI_Unifi.pdf",
        view:
          import.meta.env.BASE_URL +
          "Procédure_WIFI_Unifi.pdf",
      },

      {
        title: "Installation de XiVO (VoIP)",
        description:
          "Déploiement d’une solution de téléphonie IP avec configuration des utilisateurs, des postes et de l’environnement VoIP.",
        technologies: [
          "XiVO",
          "SIP",
          "Debian",
          "Zoiper",
        ],
        date: "01/12/2025 au 20/12/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-rose-600 to-rose-700",
        download:
          import.meta.env.BASE_URL +
          "Procedure_XiVO_DAYREKNAWEL.pdf",
        view:
          import.meta.env.BASE_URL +
          "Procedure_XiVO_DAYREKNAWEL.pdf",
      },
    ],

    professionnel: [
      {
        title: "Mise en place du service Microsoft Bookings",

        description:
          "Déploiement de Microsoft Bookings afin de centraliser les réservations des cours de natation, automatiser une partie du processus d’inscription et faciliter le suivi des disponibilités.",

        fullDescription: (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Contexte
              </h4>

              <p>
                Dans le cadre de mon alternance au sein de
                l’association Le Grand Bleu, j’ai participé au
                déploiement de Microsoft Bookings afin d’améliorer
                l’organisation et la gestion des réservations liées
                aux cours de natation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Situation initiale
              </h4>

              <p className="mb-2">
                Avant la mise en place de la solution, la gestion
                des inscriptions reposait principalement sur des
                traitements manuels :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>demandes reçues par téléphone ou SMS ;</li>
                <li>saisie des créneaux dans des tableaux Excel ;</li>
                <li>
                  suivi manuel des disponibilités et des participants.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Problématique
              </h4>

              <p className="mb-2">
                Cette organisation entraînait plusieurs contraintes :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  temps important consacré au traitement des réservations ;
                </li>
                <li>risque d’erreurs, d’oublis ou de doublons ;</li>
                <li>
                  difficulté à disposer d’une vision claire des créneaux
                  disponibles ;
                </li>
                <li>suivi des inscriptions moins fluide pour l’équipe.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Objectifs
              </h4>

              <p className="mb-2">
                Le projet avait pour objectif de :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>centraliser la gestion des réservations ;</li>
                <li>
                  automatiser une partie du processus d’inscription ;
                </li>
                <li>
                  simplifier le suivi des créneaux et des participants ;
                </li>
                <li>
                  réduire la charge administrative liée aux réservations.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Mise en œuvre
              </h4>

              <p className="mb-2">
                J’ai participé à plusieurs étapes du déploiement :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>configuration du service Microsoft Bookings ;</li>
                <li>
                  création et paramétrage des créneaux de réservation ;
                </li>
                <li>gestion des disponibilités ;</li>
                <li>suivi des inscriptions ;</li>
                <li>
                  accompagnement des utilisateurs dans la prise en main
                  de la solution ;
                </li>
                <li>
                  assistance en cas de difficulté ou de problème
                  d’utilisation ;
                </li>
                <li>
                  ajustements et modifications à partir des retours des
                  utilisateurs.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Résultats
              </h4>

              <p className="mb-2">
                La mise en place de Microsoft Bookings a permis :
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  une gestion des réservations plus rapide et plus
                  centralisée ;
                </li>
                <li>
                  une réduction des erreurs liées aux saisies manuelles ;
                </li>
                <li>
                  un meilleur suivi des disponibilités et des inscriptions ;
                </li>
                <li>
                  un gain de temps pour les équipes administratives ;
                </li>
                <li>
                  une organisation plus fluide des cours de natation.
                </li>
              </ul>
            </div>
          </div>
        ),

        technologies: [
          "Microsoft Bookings",
          "Microsoft 365",
          "Excel",
          "Gestion des réservations",
        ],

        date: "Juillet 2025 — Décembre 2025",
        status: "Terminé",
        icon: Building,
        color: "from-cyan-500 to-cyan-700",
      },

      {
        title: "Gestion des groupes et des droits d’accès",

        description:
          "Organisation des accès aux ressources selon l’organigramme grâce à des groupes de sécurité Active Directory.",

        fullDescription: (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Contexte
              </h4>

              <p>
                Dans le cadre de l’administration de l’infrastructure
                informatique, j’ai participé à la mise en place d’une
                gestion structurée des droits d’accès selon
                l’organigramme de la structure.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Principe retenu
              </h4>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Les droits ne sont plus attribués utilisateur par utilisateur.
                </li>
                <li>
                  Les accès sont gérés par groupes Active Directory.
                </li>
                <li>
                  Chaque groupe correspond à un service ou à une fonction.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Objectifs
              </h4>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  mettre en place le principe du moindre privilège ;
                </li>
                <li>
                  organiser les accès de manière claire et cohérente ;
                </li>
                <li>
                  simplifier la gestion des comptes utilisateurs ;
                </li>
                <li>
                  faciliter l’arrivée et le départ des collaborateurs.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Résultats
              </h4>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  gestion centralisée et simplifiée des droits d’accès ;
                </li>
                <li>
                  meilleure sécurisation des données sensibles ;
                </li>
                <li>
                  gain de temps pour l’administration du système ;
                </li>
                <li>
                  intégration plus rapide des nouveaux utilisateurs.
                </li>
              </ul>
            </div>
          </div>
        ),

        technologies: [
          "Active Directory",
          "Groupes de sécurité",
          "Gestion des droits",
          "Administration système",
        ],

        date: "Septembre 2025 — Décembre 2025",
        status: "Terminé",
        icon: Users,
        color: "from-orange-500 to-orange-700",
      },
    ],
  };

  const activeProjects = useMemo(
    () => projets[activeCategory],
    [activeCategory]
  );

  return (
    <section
      id="projets"
      className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      {/* EFFETS DE FOND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Sparkles size={16} />
            Projets & mises en œuvre
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Mes projets
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une sélection de projets techniques réalisés dans le cadre de ma
            formation et de mon alternance, autour des systèmes, des réseaux,
            de l’administration et du support informatique.
          </p>

        </div>

        {/* CATEGORIES */}
        <div className="flex justify-center mb-10">

          <div className="inline-flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-gray-900/40 border border-purple-500/20 backdrop-blur-sm">

            <button
              onClick={() => {
                setActiveCategory("professionnel");
                setSelectedProjet(null);
              }}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === "professionnel"
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Briefcase size={16} />
              Projets professionnels

              <span className="text-xs opacity-80">
                ({projets.professionnel.length})
              </span>
            </button>

            <button
              onClick={() => {
                setActiveCategory("scolaire");
                setSelectedProjet(null);
              }}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === "scolaire"
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <School size={16} />
              Projets scolaires

              <span className="text-xs opacity-80">
                ({projets.scolaire.length})
              </span>
            </button>

          </div>

        </div>

        {/* INTRO CATEGORIE */}
        <div className="mb-10 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6">

          {activeCategory === "professionnel" ? (
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Briefcase
                  className="text-purple-400"
                  size={22}
                />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  Projets menés en contexte professionnel
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Cette section présente des projets réalisés dans le cadre de
                  mon alternance, avec les besoins identifiés, les solutions
                  mises en place, les outils utilisés et les résultats obtenus.
                </p>

              </div>

            </div>
          ) : (
            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck
                  className="text-purple-400"
                  size={22}
                />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  Projets techniques réalisés en BTS SIO
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Ces projets regroupent plusieurs mises en place techniques
                  réalisées pendant mon BTS SIO, avec les configurations,
                  outils utilisés et principales étapes. Certaines données
                  peuvent être volontairement masquées pour préserver la
                  confidentialité.
                </p>

              </div>

            </div>
          )}

        </div>

        {/* ENVIRONNEMENT DE SIMULATION + SCHEMA */}
        {activeCategory === "scolaire" && (
          <div className="mb-12 bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-xl">

            {/* CONTEXTE NAUTICOR */}
            <div className="mb-8">

              <div className="flex items-start gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Building
                    className="text-purple-400"
                    size={24}
                  />
                </div>

                <div>

                  <p className="text-sm text-purple-300 font-medium mb-1">
                    Environnement pédagogique fictif
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    NAUTICOR — Contexte de l’entreprise
                  </h3>

                </div>

              </div>

              <p className="text-gray-300 leading-relaxed max-w-5xl">
                <span className="text-white font-semibold">
                  NAUTICOR
                </span>{" "}
                est une PME fictive spécialisée dans les activités nautiques
                et aquatiques, créée dans le cadre de mon BTS SIO SISR.
                Son développement et son projet de devenir centre de formation
                entraînent de nouveaux besoins en postes, utilisateurs et
                services réseau. L’objectif est de faire évoluer son système
                d’information pour le rendre plus structuré, fiable et sécurisé.
              </p>

            </div>

            {/* SEPARATEUR */}
            <div className="border-t border-purple-500/20 my-8" />

            {/* INFRASTRUCTURE */}
            <div className="mb-6">

              <div className="flex items-start gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <FolderOpen
                    className="text-purple-400"
                    size={24}
                  />
                </div>

                <div>

                  <p className="text-sm text-purple-300 font-medium mb-1">
                    Vue d’ensemble de l’environnement
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Infrastructure de l’entreprise fictive
                  </h3>

                </div>

              </div>

              <p className="text-gray-300 leading-relaxed">
                Ce schéma présente l’infrastructure mise en place pour
                l’environnement NAUTICOR et utilisée dans mes différents
                projets techniques.
              </p>

            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-purple-500/20 bg-gray-900/50 mb-5">

              <img
                src={
                  import.meta.env.BASE_URL +
                  "Schema_Infra.png"
                }
                alt="Schéma de l’infrastructure réseau fictive NAUTICOR"
                className="w-full h-auto object-contain"
              />

            </div>

            {/* BOUTONS */}
            <div className="flex flex-wrap gap-3">

              <a
                href={
                  import.meta.env.BASE_URL +
                  "Schema_Infra.png"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
              >
                <Eye size={18} />
                Voir le schéma
              </a>

              <a
                href={
                  import.meta.env.BASE_URL +
                  "Schema_Infra.png"
                }
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10 transition-all"
              >
                <Download size={18} />
                Télécharger
              </a>

            </div>

          </div>
        )}

        {/* CARTES PROJETS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {activeProjects.map((projet, index) => {
            const Icon = projet.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-sm p-6 shadow-xl hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-purple-500/10 transition-all duration-300 flex flex-col min-h-[420px]"
              >

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* HAUT CARTE */}
                <div className="flex items-start justify-between gap-4 mb-6">

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${projet.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon
                      className="text-white"
                      size={24}
                    />
                  </div>

                  <div className="text-right">

                    <div className="inline-flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <Calendar size={15} />
                      <span>{projet.date}</span>
                    </div>

                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          projet.status === "Terminé"
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                            : "bg-orange-500/15 text-orange-300 border border-orange-500/20"
                        }`}
                      >
                        {projet.status}
                      </span>
                    </div>

                  </div>

                </div>

                {/* CONTENU */}
                <div className="flex-1 flex flex-col">

                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {projet.title}
                  </h3>

                  <p className="text-gray-300 leading-8 mb-5 flex-1">
                    {projet.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {projet.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs bg-purple-600/15 text-purple-200 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* BOUTONS */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">

                    {activeCategory === "professionnel" &&
                      projet.fullDescription && (
                        <button
                          onClick={() =>
                            setSelectedProjet(projet)
                          }
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:opacity-90 transition-all"
                        >
                          <Eye size={18} />
                          Voir le projet
                        </button>
                      )}

                    {activeCategory === "scolaire" &&
                      projet.view && (
                        <a
                          href={projet.view}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:opacity-90 transition-all"
                        >
                          <Eye size={18} />
                          Voir la procédure
                        </a>
                      )}

                    {activeCategory === "scolaire" &&
                      projet.download && (
                        <a
                          href={projet.download}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <Download size={18} />
                          Télécharger
                        </a>
                      )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* DETAIL PROJET PROFESSIONNEL */}
        {selectedProjet && (
          <div className="mt-14 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl animate-fade-in">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">

              <div>

                <div className="inline-flex items-center gap-2 text-purple-300 text-sm font-medium mb-3">
                  <Briefcase size={16} />
                  Projet professionnel
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  {selectedProjet.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {selectedProjet.date} •{" "}
                  {selectedProjet.status}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedProjet(null)
                }
                className="self-start text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

            </div>

            <div className="text-gray-300 leading-8 text-base md:text-lg mb-8">
              {selectedProjet.fullDescription}
            </div>

            <div className="pt-6 border-t border-white/10">

              <h4 className="text-white font-semibold mb-4">
                Technologies utilisées
              </h4>

              <div className="flex flex-wrap gap-3">

                {selectedProjet.technologies.map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm bg-purple-600/15 text-purple-200 border border-purple-500/20"
                    >
                      #{tech}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>
        )}

        {/* NOTE CONFIDENTIALITE */}
        {activeCategory === "scolaire" && (
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">

            <p className="text-sm text-gray-300 leading-relaxed">
              Certaines informations présentes dans les procédures
              peuvent être anonymisées ou partiellement masquées afin
              d’éviter l’exposition de données sensibles.
            </p>

          </div>
        )}

      </div>
    </section>
  );
};

export default Projets;