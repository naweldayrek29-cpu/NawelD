import React, { useState } from 'react';
import { Eye, Scale, Cpu, ExternalLink, Calendar, Tag, X } from 'lucide-react';

type Category = 'technologique' | 'juridique';

type Veille = {
  title: string;
  description: string;
  fullDescription: string;
  legalFramework?: string[];
  cnilRole?: string;
  concreteExample?: string;
  currentIssue?: string;
  conclusion?: string;
  source: string;
  date: string;
  tags: string[];
  link: string;
  color: string;
};

const Veilles = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('technologique');
  const [selectedVeille, setSelectedVeille] = useState<Veille | null>(null);

  const veilles: Record<Category, Veille[]> = {
    technologique: [
      {
        title: "IA Claude utilisée dans des opérations de cyberespionnage",
        description:
          "Une étude révèle que l’IA Claude d’Anthropic a été exploitée pour planifier et exécuter une cyberattaque complète, marquant un tournant majeur dans la cybersécurité.",
        fullDescription:
          "Cet article montre que l’intelligence artificielle Claude, développée par Anthropic, aurait été utilisée dans une opération de cyberattaque très avancée. D’après les informations relayées, une grande partie des actions techniques aurait été préparée ou réalisée avec l’aide de l’IA, ce qui montre à quel point ces outils deviennent puissants. Ce cas met en évidence un danger important : les intelligences artificielles peuvent désormais être détournées pour aider à rechercher des failles, automatiser certaines tâches techniques et faciliter des attaques complexes. Même si l’intervention humaine reste encore nécessaire, cette affaire prouve que l’IA représente désormais un enjeu majeur dans le domaine de la cybersécurité. À mon avis, cet événement montre qu’il devient urgent de mieux encadrer l’utilisation de l’IA pour éviter qu’elle soit utilisée à des fins malveillantes.",
        source: "Le Monde Informatique",
        date: "Novembre 2025",
        tags: ["Fuite de données", "Amazon", "Cybersécurité"],
        link: "https://www.bfmtv.com/tech/intelligence-artificielle/claude-l-intelligence-artificielle-d-anthropic-aurait-ete-utilisee-pour-mener-une-cyberattaque-complexe-concue-a-80-ou-90-par-l-ia-coup-de-semonce-ou-coup-de-pub_AV-202511240921.html",
        color: "from-yellow-600 to-yellow-700"
      },
      {
        title: "Phishing : escroqueries numériques en forte hausse",
        description:
          "Le phishing reste l’une des attaques les plus répandues en France, utilisant des SMS, e-mails ou appels frauduleux pour voler des données personnelles ou bancaires.",
        fullDescription:
          "Cette veille explique que le phishing est aujourd’hui l’une des formes de cyberattaque les plus courantes. Les pirates utilisent de faux e-mails, de faux SMS ou même des appels pour tromper les victimes et récupérer leurs informations personnelles ou bancaires. Cette méthode repose surtout sur la manipulation et la confiance de l’utilisateur. Ce sujet est important car il montre que la cybersécurité ne dépend pas uniquement des outils techniques, mais aussi du comportement humain. À mon avis, cette menace est particulièrement dangereuse car elle touche tout le monde et peut avoir des conséquences graves, aussi bien pour les particuliers que pour les entreprises.",
        source: "Cybermalveillance.gouv.fr",
        date: "Décembre 2024",
        tags: ["Phishing", "Cyberattaque", "Ingénierie sociale"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing",
        color: "from-rose-600 to-rose-700"
      }
    ],

    juridique: [
      {
        title: "Violation de données à la Fédération Française de Tir",
        description:
          "Une fuite de données personnelles a touché la FFTir, exposant les informations d’adhérents et augmentant les risques d’usurpation d’identité.",
        fullDescription:
          "Cette actualité montre qu’une fuite de données peut avoir des conséquences juridiques et humaines très importantes. Les informations personnelles de nombreux adhérents ont été exposées, ce qui augmente les risques d’arnaques, d’usurpation d’identité ou d’utilisation frauduleuse des données. Cette situation rappelle que les organismes ont l’obligation de protéger les données qu’ils collectent. En cas de manquement, leur responsabilité peut être engagée. À mon avis, cette veille montre bien l’importance du respect des règles liées à la protection des données et du rôle essentiel de la sécurité informatique dans les organisations.",
        source: "CNIL",
        date: "Novembre 2025",
        tags: ["Fuite de données", "Sécurité", "FFTir"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-de-donnees-personnelles-fftir-202511",
        color: "from-indigo-600 to-indigo-700"
      },
      {
        title: "RGPD : de quoi parle-t-on ?",
        description:
          "Le RGPD encadre le traitement des données personnelles en Europe et impose des obligations essentielles aux organisations.",
        fullDescription:
          "Le RGPD est un règlement européen qui encadre l’utilisation des données personnelles. Il impose aux entreprises, administrations et organismes de respecter plusieurs obligations, comme informer les personnes concernées, sécuriser les données collectées et limiter leur utilisation à des objectifs précis.",

        legalFramework: [
          "Article 5 : il définit les grands principes du RGPD, comme la transparence, la limitation des finalités, la minimisation des données et la sécurité.",
          "Article 6 : il précise qu’un traitement de données doit toujours avoir une base légale, comme le consentement, l’exécution d’un contrat ou une obligation légale.",
          "Articles 15 à 17 : ils garantissent aux personnes le droit d’accès, le droit de rectification et le droit à l’effacement de leurs données personnelles.",
          "Article 32 : il impose aux organisations de mettre en place des mesures techniques et organisationnelles adaptées pour protéger les données.",
          "Article 33 : il oblige les organisations à notifier une violation de données à la CNIL dans un délai de 72 heures lorsqu’il existe un risque pour les personnes concernées."
        ],

        cnilRole:
          "En France, la CNIL est l’autorité chargée de faire respecter le RGPD. Elle accompagne les organisations, informe les citoyens, contrôle les entreprises et peut prononcer des sanctions en cas de non-respect des règles.",

        concreteExample:
          "Par exemple, lorsqu’une entreprise subit une fuite de données personnelles, elle doit réagir rapidement, sécuriser son système, informer la CNIL si nécessaire et prévenir les personnes concernées lorsque le risque est important. Cela montre que la protection des données est à la fois une responsabilité juridique et technique.",

        currentIssue:
          "Avec l’augmentation des cyberattaques, du phishing et de la collecte massive de données, le RGPD est devenu un outil essentiel pour protéger les utilisateurs et responsabiliser les organisations.",

        conclusion:
          "Cette veille montre que l’informatique ne concerne pas seulement la technique. Elle implique aussi des responsabilités juridiques, éthiques et sécuritaires. Pour une organisation, respecter le RGPD permet de protéger les utilisateurs, d’éviter des sanctions et de renforcer la confiance.",

        source: "Union Européenne / CNIL",
        date: "Octobre 2024",
        tags: ["RGPD", "Protection des données", "CNIL"],
        link: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees",
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
            Suivi de l’actualité technologique et juridique afin de comprendre les enjeux de la cybersécurité,
            de la protection des données et des obligations légales des organisations.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-full p-2 border border-purple-500/20 flex gap-2">
            <button
              onClick={() => {
                setActiveCategory('technologique');
                setSelectedVeille(null);
              }}
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
              onClick={() => {
                setActiveCategory('juridique');
                setSelectedVeille(null);
              }}
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

              <div className="flex justify-between items-center mt-4">
                <a
                  href={veille.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>En savoir plus</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setSelectedVeille(veille)}
                  className="text-gray-300 hover:text-white transition-colors underline"
                >
                  Voir la description
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedVeille && (
          <div className="mt-12 bg-gray-800/70 border border-purple-500/30 rounded-2xl p-8 shadow-xl animate-fade-in">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedVeille.title}</h3>
                <p className="text-sm text-gray-400">
                  {selectedVeille.source} • {selectedVeille.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedVeille(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6 text-gray-300 leading-8 text-lg mb-6">
              <p>{selectedVeille.fullDescription}</p>

              {selectedVeille.legalFramework && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Cadre juridique du RGPD
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedVeille.legalFramework.map((article, index) => (
                      <li key={index}>{article}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedVeille.cnilRole && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Rôle de la CNIL
                  </h4>
                  <p>{selectedVeille.cnilRole}</p>
                </div>
              )}

              {selectedVeille.concreteExample && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Exemple concret
                  </h4>
                  <p>{selectedVeille.concreteExample}</p>
                </div>
              )}

              {selectedVeille.currentIssue && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Enjeu actuel
                  </h4>
                  <p>{selectedVeille.currentIssue}</p>
                </div>
              )}

              {selectedVeille.conclusion && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Conclusion
                  </h4>
                  <p>{selectedVeille.conclusion}</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedVeille.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href={selectedVeille.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Consulter l’article original</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Veilles;
