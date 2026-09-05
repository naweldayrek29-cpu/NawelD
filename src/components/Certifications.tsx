import React from "react";
import {
  Award,
  Network,
  Shield,
  Calendar,
  Tag,
} from "lucide-react";

type Certification = {
  title: string;
  provider: string;
  date: string;
  status: string;
  description: string;
  skills: string[];
  color: string;
  icon: React.ElementType;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "CCNA 1 : Présentation des réseaux",
      provider: "Cisco Networking Academy",
      date: "Mars 2026",
      status: "Obtenue",
      description:
        "Certification axée sur les fondamentaux des réseaux, le modèle OSI, l’adressage IP, les équipements réseau et les bases de la communication entre machines.",
      skills: [
        "TCP/IP",
        "Adressage IPv4 / IPv6",
        "Modèle OSI",
        "Switching",
        "Cisco Packet Tracer",
      ],
      color: "from-blue-600 to-blue-700",
      icon: Network,
    },

    {
      title: "CCNA 2 : Switching, Routing and Wireless Essentials",
      provider: "Cisco Networking Academy",
      date: "Avril 2026",
      status: "Obtenue",
      description:
        "Certification orientée vers la commutation, le routage, les VLAN, le Wi-Fi et la configuration d’équipements réseau Cisco.",
      skills: [
        "VLAN",
        "Routage",
        "Switching",
        "Wi-Fi",
        "Configuration réseau",
      ],
      color: "from-purple-600 to-purple-700",
      icon: Network,
    },

    {
      title: "CCNA 3 : Enterprise Networking, Security & Automation",
      provider: "Cisco Networking Academy",
      date: "Avril 2026",
      status: "Obtenue",
      description:
        "Certification centrée sur les réseaux d’entreprise, la sécurité réseau, les ACL, le NAT, les VPN et l’automatisation.",
      skills: [
        "Sécurité réseau",
        "ACL",
        "NAT",
        "VPN",
        "Automatisation",
      ],
      color: "from-green-600 to-green-700",
      icon: Shield,
    },

    {
      title: "Network Technician Career Path",
      provider: "Cisco Networking Academy",
      date: "Février 2026",
      status: "Badge obtenu",
      description:
        "Parcours Cisco validant des compétences pratiques en installation, configuration, diagnostic et maintenance d’infrastructures réseau.",
      skills: [
        "Support réseau",
        "Dépannage",
        "Configuration IP",
        "Équipements réseau",
      ],
      color: "from-cyan-600 to-cyan-700",
      icon: Award,
    },

    {
      title: "Administration de la Cybersécurité",
      provider: "Cisco Networking Academy",
      date: "Mai 2025",
      status: "Réussite",
      description:
        "Module permettant de comprendre les bases de la cybersécurité, les menaces, les bonnes pratiques de protection et la sécurisation des systèmes.",
      skills: [
        "Cybersécurité",
        "Menaces",
        "Protection des données",
        "Bonnes pratiques",
      ],
      color: "from-red-600 to-red-700",
      icon: Shield,
    },

    {
      title: "Premiers pas avec Cisco Packet Tracer",
      provider: "Cisco Networking Academy",
      date: "Février 2026",
      status: "Certificat obtenu",
      description:
        "Module d’initiation à Cisco Packet Tracer permettant de simuler, configurer et tester des infrastructures réseau.",
      skills: [
        "Packet Tracer",
        "Simulation réseau",
        "Topologie",
        "Configuration Cisco",
      ],
      color: "from-yellow-600 to-yellow-700",
      icon: Network,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">

        {/* TITRE */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award
              className="text-purple-400"
              size={32}
            />

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Mes Certifications
            </h2>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En complément de ma formation et de mon alternance, j’ai obtenu
            plusieurs certifications afin de renforcer mes compétences en
            réseaux, systèmes, cybersécurité et administration
            d’infrastructures informatiques.
          </p>
        </div>

        {/* CARTES */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* ICONE + DATE */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`bg-gradient-to-br ${certification.color} p-3 rounded-lg group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon
                      className="text-white"
                      size={24}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Calendar
                      className="text-gray-400"
                      size={16}
                    />

                    <span className="text-gray-400 text-sm">
                      {certification.date}
                    </span>
                  </div>
                </div>

                {/* STATUT */}
                <div className="mb-3">
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {certification.status}
                  </span>
                </div>

                {/* TITRE */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {certification.title}
                </h3>

                {/* ORGANISME */}
                <p className="text-sm text-gray-400 mb-3">
                  {certification.provider}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {certification.description}
                </p>

                {/* COMPETENCES */}
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="flex items-center space-x-1 bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm"
                    >
                      <Tag size={12} />

                      <span>
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;