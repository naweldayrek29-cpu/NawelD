import React, { useState } from 'react';
import { Eye, Scale, Cpu, ExternalLink, Calendar, Tag, X } from 'lucide-react';

type Category = 'technologique' | 'juridique';

type Veille = {
  title: string;
  description: string;
  fullDescription: string;
  legalFramework?: string[];
  cnilRole?: string;
  steps?: string[];
  technicalDetails?: string[];
  risks?: string[];
  conclusion?: string;
  techConclusion?: string;
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
          "Claude, l’IA d’Anthropic, aurait été utilisée dans une campagne de cyberespionnage largement automatisée, montrant l’évolution des cyberattaques avec l’intelligence artificielle.",

        fullDescription:
          "Cette veille présente un cas marquant dans le domaine de la cybersécurité : l’utilisation de Claude, une intelligence artificielle développée par Anthropic, dans une opération de cyberespionnage. Selon Anthropic, l’attaque aurait été détectée en septembre 2025 et rendue publique en novembre 2025. L’IA n’aurait pas seulement servi à conseiller les attaquants, mais aurait aussi participé à l’exécution de plusieurs étapes techniques de l’attaque. Cela montre une évolution importante : l’intelligence artificielle peut désormais être utilisée comme un outil actif dans des cyberattaques complexes.",

        technicalDetails: [
          "Claude aurait été utilisé pour analyser des systèmes cibles et aider à identifier des failles exploitables.",
          "L’IA aurait pu assister la rédaction de scripts, l’automatisation de commandes et l’organisation des étapes de l’attaque.",
          "L’attaque aurait visé plusieurs types d’organisations, notamment des entreprises technologiques, financières et des institutions.",
          "La particularité de cette affaire est le niveau d’autonomie : une grande partie des actions aurait été réalisée avec une intervention humaine limitée.",
          "Anthropic a indiqué avoir détecté l’activité suspecte, bloqué les comptes liés à l’attaque et renforcé ses systèmes de détection."
        ],

        risks: [
          "Les cyberattaques peuvent devenir plus rapides car l’IA automatise certaines tâches techniques.",
          "Des attaquants moins expérimentés peuvent être aidés par l’IA pour mener des actions plus complexes.",
          "Les attaques peuvent être plus difficiles à détecter si elles s’adaptent rapidement aux réactions du système ciblé.",
          "L’IA peut être détournée pour produire du code malveillant, analyser des vulnérabilités ou faciliter l’ingénierie sociale.",
          "Les entreprises doivent donc intégrer l’IA dans leurs stratégies de défense, pas seulement dans leurs outils de productivité."
        ],

        techConclusion:
          "Cette veille montre que l’intelligence artificielle transforme profondément la cybersécurité. Elle peut être un outil puissant pour défendre les systèmes, mais aussi un moyen d’accélérer et d’automatiser des attaques. ",

        source: "Anthropic / Le Monde Informatique",
        date: "Novembre 2025",
        tags: ["IA", "Claude", "Cyberespionnage", "Cybersécurité"],
        link: "https://www.anthropic.com/news/disrupting-AI-espionage",
        color: "from-yellow-600 to-yellow-700"
      },
      {
  title: "Phishing : escroqueries numériques en forte hausse",
  description:
    "Le phishing reste l’une des attaques les plus répandues en France, utilisant des SMS, e-mails ou appels frauduleux pour voler des données personnelles ou bancaires.",

  fullDescription:
    "Cette veille explique que le phishing est aujourd’hui l’une des formes de cyberattaque les plus courantes. Les pirates utilisent de faux e-mails, de faux SMS ou même des appels pour tromper les victimes et récupérer leurs informations personnelles ou bancaires. Cette méthode repose surtout sur la manipulation et la confiance de l’utilisateur. Ce sujet est important car il montre que la cybersécurité ne dépend pas uniquement des outils techniques, mais aussi du comportement humain. À mon avis, cette menace est particulièrement dangereuse car elle touche tout le monde et peut avoir des conséquences graves, aussi bien pour les particuliers que pour les entreprises.",

  technicalDetails: [
    "Les pirates créent de faux e-mails ou SMS imitant des entreprises connues (banques, impôts, livraison…).",
    "Ils redirigent les victimes vers de faux sites internet très ressemblants aux sites officiels.",
    "Les utilisateurs sont incités à entrer leurs identifiants ou leurs données bancaires.",
    "Le phishing peut aussi prendre la forme de smishing (SMS frauduleux) ou de vishing (appel téléphonique).",
    "Les attaques reposent souvent sur des techniques d’ingénierie sociale (urgence, peur, confiance)."
  ],

  risks: [
    "Vol d’identifiants de connexion (mail, réseaux sociaux, comptes professionnels).",
    "Accès frauduleux à des comptes bancaires ou administratifs.",
    "Usurpation d’identité à partir des données personnelles récupérées.",
    "Installation de logiciels malveillants via des pièces jointes.",
    "Propagation d’une attaque dans une entreprise si un salarié est piégé."
  ],

  techConclusion:
    "Le phishing reste une menace majeure car il exploite principalement le facteur humain. Même avec des systèmes de sécurité performants, une erreur d’attention peut suffire à compromettre des données sensibles.",

  source: "Cybermalveillance.gouv.fr",
  date: "Décembre 2024",
  tags: ["Phishing", "Cyberattaque", "Ingénierie sociale", "Cybersécurité"],
  link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/dossier-phishing",
  color: "from-rose-600 to-rose-700"
}
    ],
    juridique: [
      {
        title: "Violation de données à la Fédération Française de Tir",
        description:
          "Une fuite de données personnelles a touché la FFTir suite à une intrusion informatique, exposant les informations de nombreux adhérents.",

        fullDescription:
          "En octobre 2025, la FFTir (Fédération Française de Tir) a été victime d’une cyberattaque. Une intrusion non autorisée a été détectée sur ses systèmes informatiques entre le 18 et le 20 octobre 2025. Cette attaque a permis à des individus malveillants d’accéder à des données personnelles de licenciés.\n\nLes données concernées incluent des informations d’identité (nom, prénom, date de naissance), ainsi que des coordonnées (adresse, e-mail, téléphone et numéro de licence).\n\nMême si aucune donnée bancaire ou liée aux armes n’a été compromise, cette fuite reste grave car ces informations peuvent être utilisées pour des attaques de phishing (arnaques), d’usurpation d’identité ou même des cambriolages ciblés.",

        steps: [
          "Détection d’une intrusion non autorisée dans le système informatique",
          "Déconnexion immédiate des serveurs pour stopper l’attaque",
          "Signalement de l’incident aux autorités (CNIL)",
          "Dépôt de plainte et ouverture d’une enquête",
          "Information des licenciés concernés",
          "Mise en place de nouvelles mesures de sécurité et audit du système"
        ],

        legalFramework: [
          "Article 32 du RGPD (Règlement Général sur la Protection des Données) : la présence d’une intrusion montre que les mesures de sécurité mises en place n’étaient pas suffisantes.",
          "Article 5 du RGPD : le principe de confidentialité et d’intégrité des données n’a pas été respecté puisque des informations personnelles ont été accessibles.",
          "Article 33 du RGPD : la FFTir a respecté son obligation de notification en informant la CNIL après la fuite.",
          "Article 34 du RGPD : la FFTir a également respecté son obligation d’information en prévenant les personnes concernées."
        ],

        conclusion:
          "Cette affaire montre que même des organisations publiques ou sportives peuvent être ciblées par des cyberattaques. Elle met en évidence l’importance de la cybersécurité et du respect du RGPD. Une faille de sécurité peut avoir des conséquences graves, même sans données sensibles comme les coordonnées bancaires. Avec l’augmentation des cyberattaques, les organisations doivent renforcer leurs systèmes, anticiper les risques et protéger les données personnelles pour éviter les abus et maintenir la confiance des utilisateurs.",

        source: "Cybermalveillance.gouv.fr / FFTir",
        date: "Novembre 2025",
        tags: ["Fuite de données", "RGPD", "Cybersécurité", "FFTir"],
        link: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/violation-de-donnees-personnelles-fftir-202511",
        color: "from-indigo-600 to-indigo-700"
      },
      {
        title: "RGPD : de quoi parle-t-on ?",
        description:
          "Le RGPD (Règlement Général sur la Protection des Données) encadre le traitement des données personnelles en Europe et impose des obligations essentielles aux organisations.",
        fullDescription:

          "Le RGPD (Règlement Général sur la Protection des Données) est un règlement européen qui encadre l’utilisation des données personnelles. Il impose aux entreprises, administrations et organismes de respecter plusieurs obligations, comme informer les personnes concernées, sécuriser les données collectées et limiter leur utilisation à des objectifs précis.",

        legalFramework: [
          "Article 5 du RGPD : il définit les grands principes comme la transparence, la limitation des finalités, la minimisation des données et la sécurité.",
          "Article 6 du RGPD : il précise qu’un traitement de données doit toujours avoir une base légale, comme le consentement, l’exécution d’un contrat ou une obligation légale.",
          "Articles 15 à 17 du RGPD : ils garantissent aux personnes le droit d’accès, le droit de rectification et le droit à l’effacement, aussi appelé droit à l’oubli.",
          "Article 32 du RGPD : il impose aux organisations de mettre en place des mesures techniques et organisationnelles adaptées pour protéger les données.",
          "Article 33 du RGPD : il oblige les organisations à notifier une violation de données à la CNIL (Commission Nationale de l’Informatique et des Libertés) dans un délai de 72 heures lorsqu’il existe un risque pour les personnes concernées."
        ],

        cnilRole:
          "En France, la CNIL (Commission Nationale de l’Informatique et des Libertés) est l’autorité chargée de faire respecter le RGPD (Règlement Général sur la Protection des Données). Elle contrôle les organisations, informe les citoyens et peut prononcer des sanctions en cas de non-respect des règles.\n\nL’ANSSI (Agence nationale de la sécurité des systèmes d'information) est également une autorité française, mais son rôle est principalement technique. Elle intervient pour protéger les systèmes informatiques, prévenir les cyberattaques et accompagner les organisations en cas d’incident de sécurité.\n\nContrairement au RGPD qui est une réglementation européenne applicable dans l’ensemble de l’Union européenne, la CNIL et l’ANSSI sont des organismes français qui interviennent uniquement à l’échelle nationale.",

        steps: [
          "Détecter l’incident",
          "Sécuriser le système",
          "Analyser les risques",
          "Notifier la CNIL sous 72h si nécessaire",
          "Informer les personnes concernées"
        ],

        conclusion:
          "Cette veille montre que l’informatique ne concerne pas seulement la technique. Avec l’augmentation des cyberattaques, du phishing (technique de fraude visant à tromper l’utilisateur pour obtenir ses informations) et de la collecte massive de données, le RGPD est devenu essentiel pour protéger les utilisateurs. Il impose aux organisations de réagir rapidement en cas d’incident, de sécuriser leurs systèmes et d’assumer leurs responsabilités juridiques. Respecter le RGPD permet ainsi d’éviter des sanctions, de renforcer la sécurité et de maintenir la confiance des utilisateurs.",



        source: "Union Européenne / CNIL",
        date: "Octobre 2024",
        tags: ["RGPD", "Protection des données", "CNIL", "ANSSI"],
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

            <div className="space-y-8 text-gray-300 leading-8 text-lg mb-6">
              <p>{selectedVeille.fullDescription}</p>

              {selectedVeille.technicalDetails && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Fonctionnement technique de l’attaque
                  </h4>

                  <ul className="list-disc list-inside space-y-2">
                    {selectedVeille.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedVeille.risks && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Risques et impacts pour la cybersécurité
                  </h4>

                  <ul className="list-disc list-inside space-y-2">
                    {selectedVeille.risks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedVeille.techConclusion && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Conclusion
                  </h4>

                  <p>{selectedVeille.techConclusion}</p>
                </div>
              )}

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
                    Rôle de la CNIL et de l’ANSSI
                  </h4>

                  <p className="whitespace-pre-line">{selectedVeille.cnilRole}</p>
                </div>
              )}

              {selectedVeille.steps && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {selectedVeille.title.includes("Fédération Française de Tir")
                      ? "Gestion de l’incident : actions menées par la FFTir après la fuite de données"
                      : "Étapes à suivre en cas de fuite de données ou de cyberattaque"}
                  </h4>

                  <div className="grid md:grid-cols-5 gap-4 text-center">
                    {selectedVeille.steps.map((step, index) => (
                      <div
                        key={index}
                        className="relative bg-gradient-to-br from-purple-600/30 to-purple-700/20 border border-purple-500/30 rounded-xl p-4 text-purple-100 font-medium shadow-md hover:scale-105 transition-all duration-300"
                      >
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                          {index + 1}
                        </div>

                        <p className="text-sm leading-6">{step}</p>

                        {index < selectedVeille.steps!.length - 1 && (
                          <span className="hidden md:block absolute top-1/2 -right-3 text-purple-300 text-2xl">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
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
