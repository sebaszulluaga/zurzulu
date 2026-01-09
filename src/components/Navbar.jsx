import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translations: t } = useLanguage();

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'research', path: '/research' },
    { key: 'ventures', path: '/ventures' },
    { key: 'arsenal', path: '/arsenal' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-cyber-dark/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse group">
          <Shield className="w-8 h-8 text-cyber-green group-hover:rotate-12 transition-transform duration-300" />
          <span className="self-center text-2xl font-mono font-bold whitespace-nowrap text-white tracking-tighter">
            JSZ<span className="text-cyber-green">_SEC</span>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* DESKTOP MENU */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent bg-cyber-gray md:bg-none">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-300 rounded hover:text-cyber-green md:p-0 transition-colors duration-300 font-mono hover:translate-x-1 md:hover:translate-x-0"
                >
                  <span className="text-cyber-blue mr-1 md:hidden">&gt;</span>
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
            <li className="mt-2 md:mt-0 flex items-center">
              <div
                className="relative w-12 h-6 bg-gray-700 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyber-green"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLanguage(language === 'en' ? 'es' : 'en');
                  }
                }}
                tabIndex={0}
                role="switch"
                aria-label="Switch Language"
                aria-checked={language === 'en'}
              >
                <motion.div
                  className="absolute top-0.5 w-5 h-5 bg-cyber-green rounded-full"
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  style={{ left: language === 'en' ? '22px' : '2px' }}
                />
                <span className={`absolute left-1 top-0.5 text-xs font-bold text-white transition-opacity ${language === 'es' ? 'opacity-100' : 'opacity-0'}`}>ES</span>
                <span className={`absolute right-1 top-0.5 text-xs font-bold text-white transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-0'}`}>EN</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;