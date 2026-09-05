import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "experiences",
        "parcours",
        "projets",
        "certifications",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header activeSection={activeSection} />

      <Hero />

      <Experiences />

      <Parcours />

      <Projets />

      <Certifications />

      <Footer />
    </div>
  );
}

export default App;