import { useState } from "react";
import {
  Building2,
  Network,
  Users,
  Calendar,
  MapPin,
  ChevronDown,
  Server,
  ShieldCheck,
  Wrench,
  Briefcase,
  Monitor,
  Cable,
  Headset,
  FolderCog,
  type LucideIcon,
} from "lucide-react";

type Mission = {
  icon: LucideIcon;
  title: string;
  details: string[];
};

type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  description: string;
  missions: Mission[];
  tools: string[];
};

type Skill = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const Experiences = () => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      company: "Association Le Grand Bleu",
      role: "Technicienne Support Informatique — Alternance",
      location: "Marseille",
      date: "Mars 2025 - Août 2026",
      description:
        "Au sein de l’Association Le Grand Bleu, j’assure le support informatique aux utilisateurs, la préparation des postes Windows ainsi que la gestion des comptes et des accès.",
      missions: [
        {
          icon: Wrench,
          title: "Support IT & Maintenance",
          details: [
            "Assistance technique et résolution des incidents utilisateurs",
            "Installation et configuration des postes Windows",
          ],
        },
        {
          icon: Users,
          title: "Administration informatique",
          details: [
            "Création et gestion des comptes utilisateurs dans Active Directory et des messageries professionnelles",
            "Gestion des accès et des permissions via Active Directory",
          ],
        },
      ],
      tools: ["Windows", "Active Directory", "Microsoft 365"],
    },
    {
      company: "NETBFRS",
      role: "Stage — Infrastructure réseau et câblage",
      location: "Marseille",
      date: "Décembre 2024 - Février 2025",
      description:
        "Stage consacré à la découverte des interventions sur chantier et à la participation aux travaux de câblage des réseaux informatiques.",
      missions: [
        {
          icon: Network,
          title: "Infrastructure réseau & câblage",
          details: [
            "Participation aux interventions sur chantier pour l’installation de réseaux informatiques",
            "Tirage et passage de câbles Ethernet",
            "Assistance au raccordement et au branchement des câbles réseau",
          ],
        },
      ],
      tools: ["Câblage Ethernet", "Infrastructure réseau", "Interventions sur chantier"],
    },
  ];

  const skills: Skill[] = [
    {
      icon: Server,
      title: "Systèmes",
      items: [
        "Windows Server",
        "Windows",
        "Active Directory",
        "GPO",
        "Linux",
      ],
    },

    {
      icon: Network,
      title: "Réseaux",
      items: [
        "TCP/IP",
        "DNS",
        "DHCP",
        "VLAN",
        "Routage",
        "VPN",
        "UniFi",
      ],
    },

    {
      icon: Users,
      title: "Administration & Support",
      items: [
        "Microsoft 365",
        "Gestion des comptes",
        "Support utilisateurs",
        "Maintenance du parc",
        "Odoo",
      ],
    },

    {
      icon: ShieldCheck,
      title: "Outils & Sécurité",
      items: [
        "GLPI",
        "PowerShell",
        "UniFi",
        "Contrôle d'accès",
        "Documentation",
      ],
    },
  ];

  const toggleExperience = (index: number) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <section
      id="experiences"
      className="py-20 bg-gradient-to-b from-[#1e293b] to-[#111827]"
    >
      <div className="container mx-auto px-6">

        {/* EN-TÊTE — cohérent avec la section Mes projets techniques */}
        <div className="mb-12 overflow-hidden rounded-[28px] border border-purple-500/20 bg-gradient-to-br from-[#0c142a] via-[#101827] to-[#191630] p-7 md:p-10 lg:p-12 shadow-2xl shadow-purple-950/10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
                <Briefcase size={15} /> Mon parcours professionnel
              </span>
              <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mes expériences<br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  professionnelles
                </span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                Du support aux utilisateurs à l’administration des comptes, en passant par les interventions sur chantier et le câblage réseau : découvrez mes expériences sur le terrain.
              </p>
            </div>

            {/* Illustration technique, sans image externe */}
            <div aria-hidden="true" className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center sm:h-72">
              <div className="absolute inset-x-[12%] top-1/2 border-t border-dashed border-purple-400/40" />
              <div className="absolute inset-y-[12%] left-1/2 border-l border-dashed border-purple-400/40" />
              <div className="absolute left-[7%] top-[12%] rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-blue-300 shadow-lg shadow-blue-950/30"><Headset size={30} /></div>
              <div className="absolute right-[8%] top-[12%] rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4 text-purple-300 shadow-lg shadow-purple-950/30"><Users size={30} /></div>
              <div className="absolute bottom-[10%] left-[9%] rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4 text-purple-300"><Cable size={30} /></div>
              <div className="absolute bottom-[10%] right-[10%] rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-blue-300"><Monitor size={30} /></div>
              <div className="relative z-10 flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-2xl border border-purple-400/40 bg-[#111a35] text-purple-200 shadow-2xl shadow-purple-900/30">
                <Server size={40} />
                <span className="text-xs font-semibold text-white">Informatique</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-blue-400/20 bg-white/[0.035] px-4 py-4">
              <Headset size={22} className="shrink-0 text-blue-400" />
              <span className="font-medium text-white">Support IT</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-purple-400/20 bg-white/[0.035] px-4 py-4">
              <FolderCog size={22} className="shrink-0 text-purple-400" />
              <span className="font-medium text-white">Administration</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-purple-400/20 bg-white/[0.035] px-4 py-4">
              <Network size={22} className="shrink-0 text-purple-400" />
              <span className="font-medium text-white">Réseau & câblage</span>
            </div>
          </div>
        </div>

        {/* EXPERIENCES */}
        <div className="space-y-8 mb-20">

          {experiences.map((experience, index) => {
            const isOpen = openExperience === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1b2434] to-[#172033] backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/30 transition-all duration-300"
              >

                <button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  className="w-full p-6 md:p-8 text-left"
                >
                  <div className="flex items-start justify-between gap-6">

                    <div className="flex items-start gap-4">

                      <div className="bg-gradient-to-br from-purple-600 to-[#6d28d9] p-3 rounded-xl flex-shrink-0">
                        <Building2
                          className="text-white"
                          size={26}
                        />
                      </div>

                      <div>

                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
                          {experience.company}
                        </h3>

                        <p className="text-lg text-white font-semibold mb-4">
                          {experience.role}
                        </p>

                        <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-4">

                          <div className="flex items-center gap-2">
                            <MapPin
                              className="text-purple-400"
                              size={18}
                            />

                            <span>
                              {experience.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar
                              className="text-purple-400"
                              size={18}
                            />

                            <span>
                              {experience.date}
                            </span>
                          </div>

                        </div>

                        <p className="text-gray-300 max-w-4xl leading-relaxed">
                          {experience.description}
                        </p>

                        <p className="text-purple-400 text-sm font-medium mt-4">
                          {isOpen
                            ? "Réduire les détails"
                            : "Voir les missions en détail"}
                        </p>

                      </div>

                    </div>

                    <ChevronDown
                      className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={28}
                    />

                  </div>
                </button>

                {/* ACCORDEON */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[3000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8">

                    <div className="border-t border-purple-500/20 pt-8">

                      <h4 className="text-xl font-bold text-white mb-8">
                        Missions réalisées
                      </h4>

                      <div className="grid md:grid-cols-2 gap-6">

                        {experience.missions.map(
                          (mission, missionIndex) => {
                            const MissionIcon = mission.icon;

                            return (
                              <div
                                key={missionIndex}
                                className="group bg-[#151e30]/80 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300"
                              >
                                <div className="flex items-start gap-4">

                                  <div className="bg-gradient-to-br from-purple-600 to-[#6d28d9] p-3 rounded-lg flex-shrink-0">
                                    <MissionIcon
                                      className="text-white"
                                      size={24}
                                    />
                                  </div>

                                  <div className="flex-1">

                                    <h5 className="text-lg font-semibold text-white mb-5">
                                      {mission.title}
                                    </h5>

                                    <div className="space-y-3">

                                      {mission.details.map(
                                        (detail, detailIndex) => (
                                          <div
                                            key={detailIndex}
                                            className="flex items-start gap-2"
                                          >
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />

                                            <span className="text-gray-300 text-sm leading-relaxed">
                                              {detail}
                                            </span>
                                          </div>
                                        )
                                      )}

                                    </div>

                                  </div>

                                </div>
                              </div>
                            );
                          }
                        )}

                      </div>

                      {/* ENVIRONNEMENT TECHNIQUE */}
                      <div className="mt-10">

                        <h4 className="text-xl font-bold text-white mb-5">
                          Environnement technique
                        </h4>

                        <div className="flex flex-wrap gap-3">

                          {experience.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm hover:bg-purple-500/20 transition-colors duration-300"
                            >
                              {tool}
                            </span>
                          ))}

                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* COMPETENCES */}
        <div className="mt-20">

          <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
              Environnement technique
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compétences & outils
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Les technologies et outils que j’utilise dans mes expériences
              professionnelles et mes projets techniques.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;

              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-5">
                    <SkillIcon
                      className="text-purple-400"
                      size={26}
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    {skill.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1.5 text-xs text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experiences;