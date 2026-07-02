import React from 'react';
import { GraduationCap, Network, Database, Shield } from 'lucide-react';

const BtsSio = () => {
  const current = {
    title: "SISR — Solutions d’Infrastructure, Systèmes et Réseaux",
    description:
      "L’option SISR m’a permis d’acquérir des compétences en administration des systèmes et réseaux, en virtualisation, en sécurité informatique ainsi qu’en support utilisateur. Cette formation m’a préparée à concevoir, déployer et maintenir des infrastructures informatiques professionnelles.",
    competences: [
      "Windows Server • Linux • Active Directory",
      "DNS • DHCP • GPO • Exchange",
      "TCP/IP • VLAN • Routage • VPN",
      "Proxmox • Hyper-V • VMware",
      "GLPI • XIVO • FOG",
      "PowerShell • ZEVENET • Artica Proxy",
      "UniFi • Cisco Packet Tracer",
      "Support informatique • Documentation technique"
    ],
    icon: Network
  };

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
            Le BTS Services Informatiques aux Organisations forme des professionnels de l'informatique capables
            d'administrer, sécuriser et maintenir des infrastructures systèmes et réseaux. J'ai choisi
            l'option <span className="text-white font-semibold">SISR</span> afin de me spécialiser dans
            l'administration des systèmes, des réseaux et la cybersécurité.
          </p>
        </div>

        {/* Contenu : explication puis compétences acquises */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Explication de l’option */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">{current.title}</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {current.description}
            </p>
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

        {/* Mon Parcours */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <Shield className="text-purple-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Mon Parcours</h3>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Titulaire du <span className="text-white font-semibold">BTS Services Informatiques aux Organisations (option SISR)</span>,
            je poursuis mon parcours en Bachelor Informatique et Cybersécurité. Cette formation m'a permis de développer
            des compétences solides en administration systèmes, réseaux, virtualisation, sécurité informatique
            et support technique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BtsSio;