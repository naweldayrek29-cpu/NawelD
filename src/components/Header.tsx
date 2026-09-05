import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: "accueil",
      label: "Accueil",
      href: "#accueil",
    },
    {
      id: "experiences",
      label: "Expériences",
      href: "#experiences",
    },
    {
      id: "parcours",
      label: "Parcours",
      href: "#parcours",
    },
    {
      id: "projets",
      label: "Projets",
      href: "#projets",
    },
    {
      id: "certifications",
      label: "Certifications",
      href: "#certifications",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <User
              className="text-purple-400"
              size={28}
            />

            <span className="text-xl font-bold text-white">
              Portfolio
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative transition-colors duration-300 hover:text-purple-400 ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-white"
                }`}
              >
                {item.label}

                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* BOUTON MENU MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-3 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 transition-colors duration-300 hover:text-purple-400 ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;