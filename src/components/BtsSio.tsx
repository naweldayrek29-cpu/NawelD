import React, { useState } from 'react';
import { GraduationCap, Code, Network, Database, Shield } from 'lucide-react';

const BtsSio = () => {
  const [activeOption, setActiveOption] = useState<'sisr' | 'slam'>('sisr');

  const options = {
    sisr: {
      title: "SISR — Solutions d’Infrastructure, Systèmes et Réseaux",
      description:
        "L’option SISR forme à l’exploitation et à l’administration d’infrastructures informatiques. Elle met l’accent sur la continuité de service, la sécurité opérationnelle et l’assistance aux utilisateurs dans des environnements Windows et Linux, du poste de travail aux services réseau.",
      competences: [
        "Administration systèmes Windows / Linux (services, durcissement, sauvegardes)",
        "Annuaire et services d’infrastructure : AD, DNS, DHCP, GPO",
        "Réseaux : adressage, VLAN, routage, VPN (site-à-site / client), QoS",
        "Sécurité opérationnelle : pare-feu, NAT, segmentation, gestion des accès",
        "Virtualisation (Hyper-V, VMware, Proxmox) et notions de cloud",
        "Exploitation & support : gestion d’incidents/demandes, procédures, documentation",
        "Contrôle d’accès & sûreté : badges, reconnaissance faciale, caméras"
      ],
      icon: Network
    },
    slam: {
      title: "SLAM — Solutions Logicielles et Applications Métiers",
      description:
        "L’option SLAM prépare au développement d’applications et à l’industrialisation logicielle. Elle couvre la conception, la qualité de code, la data et l’intégration continue pour livrer des solutions robustes et maintenables.",
      competences: [
        "Développement web : HTML, CSS, JavaScript/TypeScript",
        "POO et architectures (Java, C#, patterns, couches)",
        "Bases de données & SQL : modélisation, requêtes, optimisation",
        "Frameworks & écosystèmes : React, Angular, Node.js/Express",
        "APIs REST/JSON, auth, rôles et sécurité applicative",
        "Qualité & déploiement : Git, tests, CI/CD, conteneurisation",
        "Documentation technique, revues de code et bonnes pratiques"
      ],
      icon: Code
    }
  } as const;

  const current = options[activeOption];
  const Icon = current.icon;

  return (
    <section id="bts-sio" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <GraduationCap className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">BTS SIO</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Le BTS Services Informatiques aux Organisations forme des professionnels capables de concevoir,
            déployer et exploiter des solutions informatiques au service des métiers, avec deux spécialisations :
            <span className="text-white font-semibold"> SISR</span> (Solutions d’Infrastructure, Systèmes et Réseaux)
            et <span className="text-white font-semibold"> SLAM</span> (Solutions Logicielles et Applications Métiers).
          </p>
        </div>

        {/* Sélecteur d’option */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-full p-2 border border-purple-500/20">
            <button
              onClick={() => setActiveOption('sisr')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeOption === 'sisr'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Option SISR
            </button>
            <button
              onClick={() => setActiveOption('slam')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeOption === 'slam'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Option SLAM
            </button>
          </div>
        </div>

        {/* Contenu : explication puis compétences acquises */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Explication de l’option */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">{current.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{current.description}</p>
          </div>

          {/* Compétences acquises */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Database className="text-purple-400 mr-3" size={28} />
              Compétences acquises durant la formation
            </h3>
            <ul className="space-y-3">
              {current.competences.map((competence, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{competence}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mon Parcours — TOUJOURS FIXE (SISR) */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <Shield className="text-purple-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Mon Parcours</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Actuellement en 2<sup>e</sup> année de <span className="text-white font-semibold">BTS SIO (option SISR)</span>,
            je me spécialise en administration des systèmes et réseaux. Je maîtrise l’installation, la configuration et la
            sécurisation des serveurs (Linux/Windows), la virtualisation, les réseaux (LAN, VLAN, routage), ainsi que la
            supervision (<span className="font-semibold">Zabbix</span>).
          </p>
        </div>
      </div>
    </section>
  );
};

export default BtsSio;
