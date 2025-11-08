import React, { useState } from 'react';
import {
  FolderOpen,
  School,
  Building,
  Github,
  Calendar,
  Users,
  Download,
  type LucideIcon,
} from 'lucide-react';

type Category = 'scolaire' | 'professionnel';
type ProjetStatus = 'Terminé' | 'En cours';

interface Projet {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: ProjetStatus;
  icon: LucideIcon;
  color: string;
  link?: string;
  repo?: string;
  download?: string;
}

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('scolaire');

  const projets: Record<Category, Projet[]> = {
    scolaire: [
      {
        title: "Paramétrage Routeur & Switch",
        description:
          "Procédure PDF détaillée pour configurer un switch Netgear et un routeur Zyxel avec VLAN, IP et DHCP.",
        technologies: ["Switch Netgear", "Routeur Zyxel", "VLAN", "DHCP"],
        date: "2025",
        status: "Terminé",
        icon: School,
        color: "from-indigo-600 to-indigo-700",
        download: import.meta.env.BASE_URL + "Parametrage_Routeur_Switch.pdf",
      },
      {
        title: "Application de Gestion Parc Informatique",
        description:
          "Développement d'une application web pour la gestion d'un parc informatique avec base de données.",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        status: "En cours",
        icon: FolderOpen,
        color: "from-green-600 to-green-700",
      },

      // ===== Ajouts demandés =====
      {
        title: "Installation de GLPI",
        description:
          "Mise en place de GLPI pour la gestion des tickets et des actifs (installation, base de données, serveur web, LDAP/AD, notifications mail et agents d’inventaire).",
        technologies: [
          "GLPI",
          "Linux (Debian/Ubuntu)",
          "Apache/Nginx",
          "PHP-FPM",
          "MariaDB/MySQL",
          "LDAP / Active Directory",
          "SMTP",
          "GLPI Agent"
        ],
        date: "2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-teal-600 to-teal-700",
      },
      {
        title: "Installation de Zabbix",
        description:
          "Déploiement d’une plateforme de supervision Zabbix avec découverte d’hôtes, templates SNMP/agent, cartes, alertes et tableaux de bord.",
        technologies: ["Zabbix Server", "Zabbix Agent", "SNMP", "MySQL/MariaDB", "Linux"],
        date: "2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-orange-600 to-orange-700",
      },
      {
        title: "Installation d’Artica Proxy",
        description:
          "Mise en place d’Artica Proxy (Squid) : contrôle d’accès, authentification LDAP/AD, filtrage web, logs et rapports.",
        technologies: ["Artica Proxy", "Squid", "LDAP/AD", "SSL", "Linux"],
        date: "2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-purple-600 to-purple-700",
      },
      {
        title: "Installation de XiVO (VoIP)",
        description:
          "Installation et configuration de XiVO (Asterisk) : utilisateurs, trunks, plans de numérotation, files d’attente et softphones.",
        technologies: ["XiVO", "Asterisk", "SIP", "VoIP", "Debian"],
        date: "2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-rose-600 to-rose-700",
      },
    ],
    professionnel: [
      {
        title: "Modernisation Site Web Grand Bleu",
        description:
          "Refonte et optimisation du site de réservation avec interface responsive et système de réservation amélioré.",
        technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
        date: "2024",
        status: "En cours",
        icon: Building,
        color: "from-cyan-600 to-cyan-700",
      },
      {
        title: "Automatisation Création Emails",
        description:
          "Script d'automatisation pour la création d'adresses email avec le domaine du Grand Bleu.",
        technologies: ["PowerShell", "Active Directory", "Exchange"],
        date: "2024",
        status: "Terminé",
        icon: Users,
        color: "from-orange-600 to-orange-700",
      },
      {
        title: "Système de Monitoring Réseau",
        description:
          "Mise en place d'un système de surveillance du réseau informatique avec alertes en temps réel.",
        technologies: ["PRTG", "SNMP", "PowerShell", "MySQL"],
        date: "2023",
        status: "Terminé",
        icon: Building,
        color: "from-red-600 to-red-700",
      },
    ],
  };

  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Titre de section */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Mes Projets</h2>
        <p className="text-gray-300 mb-8">Sélection de réalisations scolaires et professionnelles.</p>

        {/* Tabs catégorie */}
        <div className="flex justify-center mb-8 gap-2">
          {(['scolaire','professionnel'] as Category[]).map((cat)=> (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all border ${
                activeCategory === cat
                  ? 'bg-purple-700 text-white border-purple-500'
                  : 'text-gray-300 border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {cat === 'scolaire' ? 'Projets scolaires' : 'Projets professionnels'}
            </button>
          ))}
        </div>

        {/* Cartes projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets[activeCategory].map((projet, index) => {
            const Icon = projet.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${projet.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-400 text-sm">{projet.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{projet.title}</h3>
                <p className="text-gray-300 mb-4">{projet.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {projet.technologies.map((tech, i) => (
                    <span key={i} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      projet.status === 'Terminé'
                        ? 'bg-green-600/20 text-green-300'
                        : 'bg-orange-600/20 text-orange-300'
                    }`}
                  >
                    {projet.status}
                  </span>

                  <div className="flex space-x-2">
                    {projet.download && (
                      <a
                        href={projet.download}
                        download
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                      >
                        <Download size={18} />
                        <span className="text-sm">Télécharger</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projets;
