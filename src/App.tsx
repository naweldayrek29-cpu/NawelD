import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Alternance from './components/Alternance';
import BtsSio from './components/BtsSio';
import Projets from './components/Projets';
import Veilles from './components/Certifications';
import TCS from './components/TCS';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'alternance', 'bts-sio', 'projets', 'veilles', 'tcs', 'about'];
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header activeSection={activeSection} />
      <Hero />
      <Alternance />
      <BtsSio />
      <Projets />
      <Veilles />
      <TCS />
      <About />
      <Footer />
    </div>
  );
}

export default App;