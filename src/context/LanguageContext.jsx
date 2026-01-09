import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is 'en'

  const translations = {
    es: {
      nav: { home: "Inicio", research: "Laboratorio de Investigación", ventures: "Emprendimientos", arsenal: "Arsenal" },
      hero: { role: "Ingeniero de Ciberseguridad | Investigador Blue Team", description: "Asegurando infraestructura mediante <span class=\"text-white font-semibold\">pensamiento adversarial</span>.", button1: "Ver Investigaciones", button2: "Contactar" },
      research: { title: "INTELLIGENCE & RESEARCH", cardTitle: "Legacy Protocol Evasion", cardDesc: "HTTP Header Injection & DPI Bypass Techniques", badge: "TLP:AMBER", button: "Download Report", upcoming: "UPCOMING RESEARCH..." },
      ventures: { title: "ACTIVE VENTURES", privadoya: { name: "PrivadoYA", desc: "Privacy and data protection platform for Latam.", button: "Visit privadoYA.com" }, cybertura: { name: "Cybertura", desc: "Offensive Cybersecurity Consulting and Active Defense.", button: "Visit cybertura.com" } },
      arsenal: { title: "ZURZULU-RECON", subtitle: "Automated Attack Surface Mapping Framework", button: "Ver en GitHub", linkedinTitle: "CONNECT ON LINKEDIN", linkedinButton: "Ver Perfil" }
    },
    en: {
      nav: { home: "Home", research: "Research Lab", ventures: "Ventures", arsenal: "Arsenal" },
      hero: { role: "Cybersecurity Engineer | Blue Team Researcher", description: "Securing infrastructure through <span class=\"text-white font-semibold\">adversarial thinking</span>.", button1: "View Research", button2: "Contact" },
      research: { title: "INTELLIGENCE & RESEARCH", cardTitle: "Legacy Protocol Evasion", cardDesc: "HTTP Header Injection & DPI Bypass Techniques", badge: "TLP:AMBER", button: "Descargar Informe", upcoming: "UPCOMING RESEARCH..." },
      ventures: { title: "ACTIVE VENTURES", privadoya: { name: "PrivadoYA", desc: "Plataforma de privacidad y protección de datos para Latam.", button: "Visitar privadoYA.com" }, cybertura: { name: "Cybertura", desc: "Consultoría de Ciberseguridad Ofensiva y Defensa Activa.", button: "Visitar cybertura.com" } },
      arsenal: { title: "ZURZULU-RECON", subtitle: "Automated Attack Surface Mapping Framework", button: "View on GitHub", linkedinTitle: "CONNECT ON LINKEDIN", linkedinButton: "View Profile" }
    }
  };

  const value = {
    language,
    setLanguage,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};