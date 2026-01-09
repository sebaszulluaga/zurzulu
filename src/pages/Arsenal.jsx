import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Arsenal = () => {
  const { translations: t } = useLanguage();

  const codeLines = [
    '$ git clone https://github.com/sebaszulluaga/zurzulu-recon',
    '$ ./zurzulu.sh --target evilcorp.com'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* MAIN BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-400">
            {t.arsenal.title}
          </h1>
          <p className="text-green-300 text-lg mb-8">
            {t.arsenal.subtitle}
          </p>

          {/* CODE BOX */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 border border-green-400/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="text-left">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  variants={lineVariants}
                  className="text-green-400 mb-2"
                >
                  {line}
                  <span className="animate-pulse">_</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GIANT BUTTON */}
          <motion.a
            href="https://github.com/sebaszulluaga/zurzulu-recon"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="inline-flex items-center gap-3 bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-300 transition-all shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]"
          >
            <Github size={24} />
            {t.arsenal.button}
          </motion.a>
        </motion.div>

        {/* SECONDARY SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-300">
            {t.arsenal.linkedinTitle}
          </h2>
          <a
            href="https://linkedin.com/in/sebaszulluaga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-green-400/50 text-green-400 px-6 py-2 rounded hover:bg-green-400/10 transition-all"
          >
            {t.arsenal.linkedinButton}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Arsenal;