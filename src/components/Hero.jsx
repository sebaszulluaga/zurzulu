import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react'; // Quitamos el Lock que ya no se usa
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations: t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark pt-20">
      {/* SCANLINES */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)] opacity-30"></div>

      {/* FONDO DECORATIVO (MOVING GRID) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-[move_20s_linear_infinite]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyber-green opacity-20 blur-[100px]"></div>
        {/* DIGITAL PARTICLES */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-green rounded-full opacity-50"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* TEXTO (IZQUIERDA) */}
        <div className="md:w-1/2 text-left mb-10 md:mb-0" aria-live="polite">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-1 w-10 bg-cyber-green animate-pulse"></div>
            <span className="text-cyber-blue font-mono text-sm tracking-widest">SYSTEM_READY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-mono mb-6 leading-tight text-white group cursor-pointer"
          >
            JHON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue filter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:animate-pulse group-hover:filter group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_40px_rgba(59,130,246,0.5)] group-hover:[filter:sepia(0.3)_hue-rotate(90deg)_saturate(1.5)]">
              ZULUAGA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 max-w-lg border-l-2 border-gray-700 pl-4"
            dangerouslySetInnerHTML={{ __html: `${t.hero.role} <br/> ${t.hero.description}` }}
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-cyber-green text-black px-8 py-3 rounded font-bold hover:bg-white transition-all active:scale-95 active:animate-ping flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] focus:ring-2 focus:ring-white">
              {t.hero.button1} <Database size={18} />
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded hover:border-cyber-blue hover:text-cyber-blue transition-all active:scale-95 active:animate-ping focus:ring-2 focus:ring-cyber-blue">
              {t.hero.button2}
            </button>
          </motion.div>
        </div>

        {/* --- AQUÍ ESTÁ EL CAMBIO IMPORTANTE (IMAGEN REAL) --- */}
        <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
            {/* ILUMINACIÓN VOLUMÉTRICA */}
            <div className="absolute w-[400px] h-[400px] bg-cyber-green/10 rounded-full blur-[120px] z-0"></div>
            <div className="absolute w-[300px] h-[300px] bg-cyber-green/20 rounded-full blur-[80px] z-0"></div>
            <div className="absolute w-[200px] h-[200px] bg-cyber-blue/15 rounded-full blur-[60px] z-0"></div>

            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 group"
            >
                {/* TU FOTO REAL */}
                {/* Asegúrate de que yo.png esté en la carpeta /public */}
                <div className="relative overflow-hidden rounded-b-full border-b-4 border-cyber-green/50">
                  <img 
                      src="/yo.png" 
                      alt="Jhon Sebastian Zuluaga" 
                      className="w-full max-w-[400px] drop-shadow-[0_0_20px_rgba(16,185,129,0.4)] mask-image-gradient object-cover"
                  />
                  
                  {/* Efecto de Escaneo (Línea bajando) */}
                  <motion.div 
                      animate={{ top: ['-10%', '110%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      className="absolute left-0 w-full h-[2px] bg-cyber-green/80 shadow-[0_0_15px_#10b981] z-20"
                  ></motion.div>
                  
                  {/* Capa sutil de color verde encima */}
                  <div className="absolute inset-0 bg-cyber-green/10 mix-blend-overlay"></div>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;