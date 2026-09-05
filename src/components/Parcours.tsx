import React from "react";
import {
  GraduationCap,
  ArrowUp,
  BookOpen,
  Code2,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Formation = {
  period: string;
  title: string;
  school: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
  current?: boolean;
};

const Parcours = () => {
  const formations: Formation[] = [
    {
      period: "2020 — 2023",
      title: "Baccalauréat Général",
      school: "Spécialités Mathématiques & NSI",
      description:
        "Mes premières bases solides en informatique grâce à la spécialité Numérique et Sciences Informatiques, complétées par les mathématiques.",
      skills: [
        "NSI",
        "Algorithmique",
        "Programmation",
        "Mathématiques",
      ],
      icon: BookOpen,
    },

    {
      period: "2023 — 2024",
      title: "BUT Informatique",
      school: "1ère année",
      description:
        "Une première année qui m’a permis d’acquérir des bases solides en programmation, bases de données, systèmes et réseaux, tout en découvrant plusieurs outils et technologies utilisés en environnement informatique.",
      skills: [
        "SQL",
        "Cisco Packet Tracer",
        "TCP/IP",
        "DHCP",
        "Linux",
        "Programmation",
      ],
      icon: Code2,
    },

    {
      period: "2024 — 2026",
      title: "BTS SIO — Option SISR",
      school: "ENSITECH Marseille",
      description:
        "Une formation orientée systèmes et réseaux qui m’a permis de développer des compétences concrètes en administration, virtualisation, infrastructures réseau, sécurité et support informatique.",
      skills: [
        "Windows Server",
        "Active Directory",
        "DNS / DHCP",
        "VLAN",
        "Virtualisation",
        "Cybersécurité",
      ],
      icon: Network,
    },

    {
      period: "2026 — 2027",
      title: "Bachelor Chef de Projet Réseau & Sécurité Informatique",
      school: "IFC Marseille",
      description:
        "Je poursuis aujourd’hui ma spécialisation afin d’approfondir mes compétences en réseaux, sécurité informatique, administration des infrastructures et gestion de projets techniques.",
      skills: [
        "Réseaux",
        "Cybersécurité",
        "Administration",
        "Gestion de projet",
      ],
      icon: ShieldCheck,
      current: true,
    },
  ];

  return (
    <section
      id="parcours"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <GraduationCap size={17} />
            Formation & évolution
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Mon parcours
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            De mes premières bases en informatique à ma spécialisation en
            systèmes, réseaux et cybersécurité.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-purple-400 via-purple-500/60 to-purple-500/10" />

          <div className="md:hidden absolute left-[19px] top-8 bottom-0 w-px bg-gradient-to-b from-purple-400 via-purple-500/60 to-purple-500/10" />

          <div className="relative flex md:justify-center justify-start mb-12">
            <div className="relative z-10 w-10 h-10 rounded-full bg-purple-600 border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <ArrowUp className="text-white" size={20} />
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {[...formations].reverse().map((formation, index) => {
              const Icon = formation.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={formation.title}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-gray-900 transition-all duration-300 ${
                        formation.current
                          ? "bg-purple-400 shadow-lg shadow-purple-500/60"
                          : "bg-purple-600"
                      }`}
                    />
                  </div>

                  <div className="md:hidden absolute left-[10px] top-8 z-20">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-gray-900 ${
                        formation.current
                          ? "bg-purple-400 shadow-lg shadow-purple-500/60"
                          : "bg-purple-600"
                      }`}
                    />
                  </div>

                  <div
                    className={`${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    } ml-12 md:ml-0`}
                  >
                    <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-7 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300">
                      {formation.current && (
                        <div className="absolute -top-3 right-5">
                          <span className="px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-600 border border-purple-400/30 rounded-full shadow-lg shadow-purple-500/10">
                            Formation actuelle
                          </span>
                        </div>
                      )}

                      <div className="mb-4">
                        <span className="text-sm font-semibold tracking-wide text-purple-400">
                          {formation.period}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-12 h-12 flex-shrink-0 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                          <Icon
                            className="text-purple-400"
                            size={25}
                          />
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {formation.title}
                          </h3>

                          <p className="text-purple-300 text-sm font-medium">
                            {formation.school}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                        {formation.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {formation.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs text-gray-300 bg-gray-800/80 border border-purple-500/20 rounded-full hover:text-purple-300 hover:border-purple-500/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/10 via-purple-500/5 to-purple-800/10 border border-purple-500/20 rounded-2xl p-8 md:p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <ShieldCheck
                className="text-purple-400"
                size={29}
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Une spécialisation qui s’est construite progressivement
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Au fil de mon parcours, je me suis progressivement orientée vers
              les systèmes, les réseaux et la cybersécurité. Mon objectif est de
              poursuivre mes études jusqu’au Master afin de renforcer mes
              compétences techniques et évoluer vers des missions à plus fortes
              responsabilités dans le domaine de l’IT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;