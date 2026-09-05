import React from "react";
import {
  ChevronDown,
  Monitor,
  Network,
  ShieldCheck,
  Briefcase,
  FolderOpen,
  GraduationCap,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="accueil"
      className="min-h-screen relative overflow-hidden flex items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900"
    >
      {/* EFFETS DE FOND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-24 left-[10%] w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-[8%] w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-500/5 rounded-full" />

      </div>

      <div className="container mx-auto px-6 relative z-10 py-28 md:py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* BADGE */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              <GraduationCap size={17} />
              Bachelor Informatique & Cybersécurité
            </span>
          </div>

          {/* NOM */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">
              Nawel{" "}
            </span>

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              DAYREK
            </span>
          </h1>

          {/* TITRE */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Systèmes, Réseaux & Cybersécurité
          </h2>

          {/* ACCROCHE */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
           Je me spécialise dans les systèmes, les réseaux et la cybersécurité, avec une expérience en support informatique, administration système et gestion d’infrastructures.
          </p>

          {/* COMPETENCES PRINCIPALES */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/60 border border-purple-500/20 backdrop-blur-sm">
              <Monitor
                className="text-purple-400"
                size={19}
              />

              <span className="text-gray-300 text-sm md:text-base">
                Administration systèmes
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/60 border border-purple-500/20 backdrop-blur-sm">
              <Network
                className="text-purple-400"
                size={19}
              />

              <span className="text-gray-300 text-sm md:text-base">
                Réseaux & infrastructures
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/60 border border-purple-500/20 backdrop-blur-sm">
              <ShieldCheck
                className="text-purple-400"
                size={19}
              />

              <span className="text-gray-300 text-sm md:text-base">
                Cybersécurité
              </span>
            </div>

          </div>

          {/* BOUTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              onClick={() => scrollToSection("experiences")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              <Briefcase size={19} />
              Voir mes expériences

              <ChevronDown
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollToSection("projets")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-semibold hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <FolderOpen size={19} />
              Découvrir mes projets
            </button>

          </div>

        </div>
      </div>

      {/* INDICATEUR DE SCROLL */}
      <button
        onClick={() => scrollToSection("experiences")}
        aria-label="Découvrir la suite"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
      >
        <ChevronDown size={30} />
      </button>

    </section>
  );
};

export default Hero;