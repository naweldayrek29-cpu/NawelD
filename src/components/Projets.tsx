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
  download?: string;
  view?: string;
}

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('scolaire');

  const projets: Record<Category, Projet[]> = {
    scolaire: [
      {
        title: "Paramétrage Routeur & Switch",
        description:
          "Mise en place de deux VLAN isolés en DHCP afin de segmenter le réseau et renforcer la sécurité.",
        technologies: ["Switch Netgear", "Routeur Zyxel", "VLAN", "DHCP"],
        date: "01/01/2025 au 01/02/2025",
        status: "Terminé",
        icon: School,
        color: "from-indigo-600 to-indigo-700",
        download: import.meta.env.BASE_URL + "Parametrage_Routeur_Switch.pdf",
        view: import.meta.env.BASE_URL + "Parametrage_Routeur_Switch.pdf",
      },
      {
        title: "Installation de GLPI",
        description:
          "Déploiement d’une solution ITSM complète : gestion des tickets, inventaire, parc informatique et intégration LDAP/AD.",
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
        date: "01/03/2025 à aujourd'hui",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-teal-600 to-teal-700",
        download: import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
        view: import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
      },
      {
        title: "Installation de Zabbix",
        description:
          "Mise en place d’une plateforme de supervision : découverte automatique des hôtes, alertes, tableaux de bord et surveillance SNMP.",
        technologies: ["Zabbix Server", "Zabbix Agent", "SNMP", "MySQL/MariaDB", "Linux"],
        date: "01/03/2025 à aujourd'hui",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-orange-600 to-orange-700",
        download: import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
        view: import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
      },
      {
        title: "Installation d’Artica Proxy",
        description:
          "Configuration d’un proxy filtrant basé sur Squid : authentification LDAP/AD, filtrage web et gestion avancée des journaux.",
        technologies: ["Artica Proxy", "Squid", "LDAP/AD", "SSL", "Linux"],
        date: "2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-purple-600 to-purple-700",
      },
      {
        title: "Installation de XiVO (VoIP)",
        description:
          "Déploiement d’une solution de téléphonie IP : utilisateurs, trunks SIP, plan de numérotation et files d’attente.",
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
        description: "Refonte du site avec une interface modernisée, responsive et un système de réservation amélioré.",
        technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
        date: "2024",
        status: "En cours",
        icon: Building,
        color: "from-cyan-600 to-cyan-700",
      },
      {
        title: "Création Emails",
        description: "Création des Emails des nouveaux apprentis ou employés via Exchange.",
        technologies: ["Active Directory", "Exchange"],
        date: "2024",
        status: "Terminé",
        icon: Users,
        color: "from-orange-600 to-orange-700",
      },
    ],
  };

  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Mes Projets</h2>
        <p className="text-gray-300 mb-8">Sélection de réalisations scolaires et professionnelles.</p>

        <div className="flex justify-center mb-8 gap-2">
          {(['scolaire', 'professionnel'] as Category[]).map((cat) => (
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
                    {projet.view && (
                      <a
                        href={projet.view}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                      >
                        Voir
                      </a>
                    )}

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