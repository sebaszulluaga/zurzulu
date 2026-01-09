import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Research = () => {
  const { translations: t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white pt-20">
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4 text-cyber-green">
            {t.research.title}
          </h1>
          <p className="text-cyber-blue font-mono text-sm tracking-widest">
            / INTELLIGENCE
          </p>
        </motion.div>

        {/* GRID DE TARJETAS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* TARJETA DESTACADA */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm border border-cyber-green/50 rounded-lg p-6 hover:border-cyber-green transition-colors relative overflow-hidden"
          >
            {/* Efecto de fondo */}
            <div className="absolute inset-0 bg-cyber-green/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <ShieldAlert className="w-8 h-8 text-cyber-green" />
                <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-mono font-bold">
                  {t.research.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-mono text-white mb-2">
                {t.research.cardTitle}
              </h2>
              <p className="text-cyber-blue font-mono text-sm mb-4">
                {t.research.cardDesc}
              </p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Investigación técnica sobre vulnerabilidades en sistemas de facturación Zero-Rating y tunelización SSH.
              </p>

              {/* BOTÓN */}
              <a
                href="/docs/whitepaper.pdf"
                download
                className="bg-cyber-green text-black px-6 py-3 rounded font-bold hover:bg-white transition-all inline-flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
              >
                {t.research.button} <ShieldAlert size={18} />
              </a>
            </div>

            {/* Línea decorativa */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
          </motion.div>

          {/* TARJETA PLACEHOLDER */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg p-6 opacity-50 relative overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <ShieldAlert className="w-8 h-8 text-gray-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold font-mono text-gray-500 mb-2">
                {t.research.upcoming}
              </h2>
              <p className="text-gray-500 text-sm">
                More research coming soon...
              </p>
            </div>

            {/* Línea decorativa */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;