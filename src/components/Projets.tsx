import React, { useState } from 'react';
import {
  FolderOpen,
  School,
  Building,
  Calendar,
  Users,
  Download,
  type LucideIcon,
  X,
} from 'lucide-react';

type Category = 'scolaire' | 'professionnel';
type ProjetStatus = 'Terminé' | 'En cours';

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
  const [activeCategory, setActiveCategory] = useState<Category>('scolaire');
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);

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
          "Déploiement d’une solution de ticketing : gestion des tickets, inventaire, parc informatique et intégration LDAP/AD.",
        technologies: [
          "GLPI",
          "Linux (Debian/Ubuntu)",
          "Apache",
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
        technologies: ["Artica Proxy", "Squid", "LDAP/AD", "SSL", "Linux", "GPO"],
        date: "01/10/2025 à aujourd'hui",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-purple-600 to-purple-700",
        download: import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
        view: import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
      },
      {
        title: "Déploiement du contrôleur WiFi UniFi",
        description:
          "Installation et configuration d’un contrôleur WiFi UniFi sous Debian avec accès web centralisé pour la gestion du réseau sans fil.",
        technologies: ["UniFi", "Debian", "Podman", "WiFi", "Réseau"],
        date: "01/11/2025 à aujourd'hui",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-blue-600 to-blue-700",
        download: import.meta.env.BASE_URL + "Procédure_WIFI_Unifi.pdf",
        view: import.meta.env.BASE_URL + "Procédure_WIFI_Unifi.pdf",
      },
      {
        title: "Installation de XiVO (VoIP)",
        description:
          "Déploiement d’une solution de téléphonie IP : utilisateurs, trunks SIP, plan de numérotation et tests d’appels.",
        technologies: ["XiVO", "SIP", "VoIP", "Debian", "Zoiper"],
        date: "01/12/2025 à aujourd'hui",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-rose-600 to-rose-700",
        download: import.meta.env.BASE_URL + "Procedure_XiVO_DAYREKNAWEL.pdf",
        view: import.meta.env.BASE_URL + "Procedure_XiVO_DAYREKNAWEL.pdf",
      },
    ],

    professionnel: [
      {
        title: "Mise en place d’un serveur Booking",
        description:
          "Déploiement d’une solution de réservation pour les cours de natation afin d’automatiser les inscriptions et centraliser la gestion des créneaux.",
        technologies: ["Booking", "Base de données", "Excel", "Administration", "Gestion des réservations"],
        date: "01/07/2025 à aujourd'hui",
        status: "Terminé",
        icon: Building,
        color: "from-cyan-600 to-cyan-700",
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
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProjet(null);
              }}
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

        {/* 🔥 SCHEMA AJOUTÉ */}
        {activeCategory === 'scolaire' && (
          <div className="mb-12 bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">
                Schéma de mon infrastructure réseau
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              Ce schéma présente l’organisation générale de mon infrastructure réseau.
            </p>

            <div className="overflow-hidden rounded-xl border border-purple-500/20 bg-gray-900/50 mb-4">
              <img
                src={import.meta.env.BASE_URL + "Schema_Infra.png"}
                alt="Schéma Infra"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex gap-2">
              <a
                href={import.meta.env.BASE_URL + "Schema_Infra.png"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
              >
                Voir
              </a>

              <a
                href={import.meta.env.BASE_URL + "Schema_Infra.png"}
                download
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
              >
                <Download size={18} />
                <span className="text-sm">Télécharger</span>
              </a>
            </div>
          </div>
        )}

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
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    projet.status === 'Terminé'
                      ? 'bg-green-600/20 text-green-300'
                      : 'bg-orange-600/20 text-orange-300'
                  }`}>
                    {projet.status}
                  </span>

                  <div className="flex space-x-2">
                    {projet.view && (
                      <a href={projet.view} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30">
                        Voir
                      </a>
                    )}

                    {projet.download && (
                      <a href={projet.download} download
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30">
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

        {activeCategory === 'scolaire' && (
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FolderOpen className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Dossier E5</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Retrouvez ici mon dossier E5 lié à l’épreuve de support et mise à disposition de services informatiques.
              </p>

              <div className="flex gap-2">
                <a
                  href={import.meta.env.BASE_URL + "DOSSIERE5_DAYREK_Nawel.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  Voir
                </a>

                <a
                  href={import.meta.env.BASE_URL + "DOSSIERE5_DAYREK_Nawel.pdf"}
                  download
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  <Download size={18} />
                  <span className="text-sm">Télécharger</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FolderOpen className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Dossier E6</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Retrouvez ici mon dossier E6 lié à l’épreuve d’administration des systèmes et des réseaux.
              </p>

              <div className="flex gap-2">
                <a
                  href={import.meta.env.BASE_URL + "BTSSIREAPROE6_DAYREK_Nawel.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  Voir
                </a>

                <a
                  href={import.meta.env.BASE_URL + "BTSSIREAPROE6_DAYREK_Nawel.pdf"}
                  download
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  <Download size={18} />
                  <span className="text-sm">Télécharger</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projets;