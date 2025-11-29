import React, { useState } from 'react';
import { Eye, Scale, Cpu, ExternalLink, Calendar, Tag } from 'lucide-react';

const Veilles = () => {
  const [activeCategory, setActiveCategory] = useState<'technologique' | 'juridique'>('technologique');

  // --- VEILLES SIMPLIFIÉES SELON TA DEMANDE ---
  const veilles: Record<'technologique' | 'juridique', Array<{
    title: string;
    description: string;
    source: string;
    date: string;
    tags: string[];
    link: string;
    morePage: string;
    color: string;
  }>> = {
    technologique: [
      {
        title: "IA Claude utilisée dans des opérations de cyberespionnage",
        description:
          "Une étude révèle que l’IA Claude d’Anthropic a été exploitée pour planifier et exécuter une cyberattaque complète, marquant un tournant majeur dans la cybersécurité.",
        source: "Le Monde Informatique",
        date: "Novembre 2025",
        tags: ["Fuite de données", "Amazon", "Cybersécurité"],
        link: "https://www.bfmtv.com/tech/intelligence-artificielle/claude-l-intelligence-artificielle-d-anthropic-aurait-ete-utilisee-pour-mener-une-cyberattaque-complexe-concue-a-80-ou-90-par-l-ia-coup-de-semonce-ou-coup-de-pub_AV-202511240921.html",
        morePage: "/veille/amazon-fuite", // ⚠️ Page interne à créer dans ton portfolio
        color: "from-yellow-600 to-yellow-700"
      },
      {
        title: "Phishing : escroqueries numériques en forte hausse",
        description:
          "Le phishing reste l’une des attaques les plus répandues en France, utilisant des SMS, e‑mails ou appels frauduleux pour voler des données personnelles ou bancaires.",
        source: "Cybermalveillance.gouv.fr",
        date: "Décembre 2024",
        tags: ["Phishing", "Cyberattaque", "Ingénierie sociale"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing",
        morePage: "/veille/phishing-france", // ⚠️ Page interne à créer
        color: "from-rose-600 to-rose-700"
      }
    ],

    juridique: [
      {
        title: "Violation de données à la Fédération Française de Tir",
        description:
          "Une fuite de données personnelles a touché la FFTir, exposant les informations d’adhérents et augmentant les risques d’usurpation d’identité.",
        source: "CNIL",
        date: "Novembre 2025",
        tags: ["Fuite de données", "Sécurité", "FFTir"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-de-donnees-personnelles-fftir-202511",
        morePage: "/veille/rgpd", // ⚠️ Page interne à créer
        color: "from-indigo-600 to-indigo-700"
      },
      {
        title: "RGPD : de quoi parle‑t‑on ?",
        description:
          "Le RGPD encadre le traitement des données personnelles en Europe et impose des obligations essentielles aux organisations.",
        source: "Union Européenne",
        date: "Octobre 2024",
        tags: ["RGPD", "Protection des données", "CNIL"],
        link: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees",
        morePage: "/veille/nis2", // ⚠️ Page interne à créer
        color: "from-blue-600 to-blue-700"
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

        {/* Sélecteur de catégorie */}
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

        {/* Grille des veilles */}
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

              {/* Boutons navigation */}
              <div className="flex justify-between items-center mt-4">
                {/* Lien externe */}
                <a
                  href={veille.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>En savoir plus</span>
                  <ExternalLink size={16} />
                </a>

                {/* Page interne */}
                <a
                  href={veille.morePage}
                  className="text-gray-300 hover:text-white transition-colors underline"
                >
                  Voir la description
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Veilles;