import React from 'react';
import { Award, Download, ExternalLink, Calendar } from 'lucide-react';

const TCS = () => {
  // 📄 Chemin du PDF (placer le fichier directement dans /public/)
  const tcsPdfPath = import.meta.env.BASE_URL + 'Nawel_TCS.pdf';

  return (
    <section id="tcs" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre de section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Tableau de Compétences</h2>
        <p className="text-gray-300 mb-8">Voici mon tableau de compétence (TCS) — version complète en PDF.</p>

        {/* Carte style "projet scolaire" */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="text-gray-400" size={16} />
                <span className="text-gray-400 text-sm">2025</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">Voici mon tableau de compétence</h3>
            <p className="text-gray-300 mb-4">
              Accède à mon TCS complet (PDF) : synthèse de mes acquis, activités, preuves et niveau par compétence.
            </p>

            {/* Tags (optionnels) */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm">BTS SIO</span>
              <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm">Parcours SISR</span>
              <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm">Dossier PDF</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-600/20 text-green-300">
                Terminé
              </span>

              <div className="flex space-x-2">
                <a
                  href={tcsPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Visualiser</span>
                </a>
                <a
                  href={tcsPdfPath}
                  download
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 transition-colors"
                >
                  <Download size={18} />
                  <span className="text-sm">Télécharger</span>
                </a>
              </div>
            </div>

            {/* Aperçu intégré (uniquement sur écrans md+) */}
            <div className="mt-4">
              <object
                data={tcsPdfPath}
                type="application/pdf"
                className="w-full h-64 rounded-lg hidden md:block"
              >
                <p className="text-gray-400 text-sm">
                  Aperçu non disponible. Utilise les boutons ci-dessus pour ouvrir ou télécharger le PDF.
                </p>
              </object>
              <p className="text-[11px] text-gray-400 mt-2">
            
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TCS;
