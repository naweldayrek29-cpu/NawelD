import React, { useState } from 'react';
import { Eye, Scale, Cpu, ExternalLink, Calendar, Tag } from 'lucide-react';

const Veilles = () => {
  const [activeCategory, setActiveCategory] = useState<'technologique' | 'juridique'>('technologique');

  const veilles: Record<'technologique' | 'juridique', Array<{
    title: string;
    description: string;
    source: string;
    date: string;
    tags: string[];
    link: string;
    color: string;
  }>> = {
    technologique: [
      // 🔥 Ajouts demandés
      {
        title: "Free : fuite de données et vol d’IBAN",
        description:
          "Une vaste fuite (fin 2024) a exposé des données d’abonnés Free, dont certains IBAN. Des campagnes de phishing récentes réutilisent ces infos pour paraître crédibles.",
        source: "Cybermalveillance.gouv.fr",
        date: "Octobre 2024 – Octobre 2025 (suivi)",
        tags: ["Fuite de données", "IBAN", "Phishing", "Télécom"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-de-donnees-personnelles-free-202410",
        color: "from-rose-600 to-rose-700"
      },
      {
        title: "Panne AWS (Amazon) : de nombreuses applis impactées",
        description:
          "Une panne majeure d’AWS (US-EAST-1) a provoqué des indisponibilités en chaîne (DNS/équilibreurs) touchant des apps grand public et pro à l’échelle mondiale.",
        source: "The Verge",
        date: "Octobre 2025",
        tags: ["Cloud", "AWS", "Disponibilité", "DNS"],
        link: "https://www.theverge.com/news/802486/aws-outage-alexa-fortnite-snapchat-offline",
        color: "from-yellow-600 to-yellow-700"
      },

      // ✅ Ton contenu existant
      {
        title: "Évolution de la Cybersécurité en 2024",
        description: "Les nouvelles menaces et les solutions émergentes dans la cybersécurité, notamment l'IA dans la sécurité.",
        source: "ANSSI, CERT-FR",
        date: "Décembre 2024",
        tags: ["Cybersécurité", "IA", "Menaces"],
        link: "#",
        color: "from-red-600 to-red-700"
      },
      {
        title: "Cloud Computing et Edge Computing",
        description: "L'évolution vers le cloud hybride et l'importance croissante de l'edge computing pour les infrastructures modernes.",
        source: "AWS, Microsoft Azure",
        date: "Novembre 2024",
        tags: ["Cloud", "Edge Computing", "Infrastructure"],
        link: "#",
        color: "from-blue-600 to-blue-700"
      },
      {
        title: "Virtualisation et Conteneurisation",
        description: "Les dernières innovations en virtualisation, Docker, Kubernetes et leur impact sur l'administration système.",
        source: "Docker, VMware",
        date: "Octobre 2024",
        tags: ["Docker", "Kubernetes", "Virtualisation"],
        link: "#",
        color: "from-green-600 to-green-700"
      },
      {
        title: "Intelligence Artificielle en IT",
        description: "L'intégration de l'IA dans l'administration réseau et le support technique pour améliorer l'efficacité.",
        source: "Cisco, HPE",
        date: "Septembre 2024",
        tags: ["IA", "Automatisation", "Réseau"],
        link: "#",
        color: "from-purple-600 to-purple-700"
      }
    ],
    juridique: [
      {
        title: "RGPD et Protection des Données",
        description: "Mise à jour des réglementations RGPD et impact sur les SI et la gestion des données perso.",
        source: "CNIL",
        date: "Décembre 2024",
        tags: ["RGPD", "Protection données", "Conformité"],
        link: "#",
        color: "from-indigo-600 to-indigo-700"
      },
      {
        title: "Directive NIS2 en Europe",
        description: "La nouvelle directive sur la sécurité des réseaux et des systèmes d'information et ses implications.",
        source: "Union Européenne",
        date: "Novembre 2024",
        tags: ["NIS2", "Sécurité", "Réglementation"],
        link: "#",
        color: "from-yellow-600 to-yellow-700"
      },
      {
        title: "Droit à la Déconnexion",
        description: "Évolutions sur le droit à la déconnexion et impacts sur l’informatique d’entreprise.",
        source: "Légifrance",
        date: "Octobre 2024",
        tags: ["Droit social", "Numérique", "Entreprise"],
        link: "#",
        color: "from-cyan-600 to-cyan-700"
      },
      {
        title: "Cybermalveillance et Responsabilités",
        description: "Cadre juridique de la lutte contre la cybermalveillance et responsabilités des admins systèmes.",
        source: "Cybermalveillance.gouv.fr",
        date: "Septembre 2024",
        tags: ["Cybermalveillance", "Responsabilité", "Juridique"],
        link: "#",
        color: "from-orange-600 to-orange-700"
      }
    ]
  };

  return (
    <section id="veilles" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Eye className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Mes Veilles</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suivi de l'actualité technologique et juridique dans le domaine informatique
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-full p-2 border border-purple-500/20 flex gap-2">
            <button
              onClick={() => setActiveCategory('technologique')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'technologique'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Cpu size={20} />
              <span>Veille Technologique</span>
            </button>
            <button
              onClick={() => setActiveCategory('juridique')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'juridique'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Scale size={20} />
              <span>Veille Juridique</span>
            </button>
          </div>
        </div>

        {/* Veilles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {veilles[activeCategory].map((veille, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${veille.color} p-3 rounded-lg group-hover:shadow-lg transition-all duration-300`}>
                  {activeCategory === 'technologique' ? (
                    <Cpu className="text-white" size={24} />
                  ) : (
                    <Scale className="text-white" size={24} />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-gray-400" size={16} />
                  <span className="text-gray-400 text-sm">{veille.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{veille.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{veille.description}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Source : {veille.source}</p>
                <div className="flex flex-wrap gap-2">
                  {veille.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center space-x-1 bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm"
                    >
                      <Tag size={12} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <a
                  href={veille.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Lire plus</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Information Box */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <Eye className="text-purple-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Importance de la Veille</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dans un secteur en évolution permanente, rester informée permet d’anticiper les risques (fuite de données,
            phishing) et de comprendre l’impact des pannes d’infrastructures cloud sur les services critiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Veilles;
