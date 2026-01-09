import React from 'react';
import { motion } from 'framer-motion';
import { Check, User, Code } from 'lucide-react';

const Ventures = () => {
  const projects = [
    {
      id: 'privadoya',
      logo: '/logoprivadoya.png',
      title: 'PrivadoYA - Confianza y Seguridad',
      description: 'Protegemos a la comunidad hispanohablante en EE. UU. contra robos digitales y estafas en WhatsApp, Instagram y correos.',
      benefits: [
        'No solicitamos contraseñas',
        'Pagos seguros con Stripe',
        'Atención 100% en español'
      ],
      buttonText: 'Visitar Sitio',
      buttonUrl: 'https://privadoya.com',
      glowColor: 'cyber-green'
    },
    {
      id: 'cybertura',
      logo: '/logocybertura.jpg',
      title: 'Remote IT Support & Cybersecurity',
      subtitle: 'For freelancers and small businesses in NYC.',
      services: ['Remote Support', 'Security Hardening', 'Cloud Backup'],
      pricing: [
        { label: 'One-Time Fix', price: '$79' },
        { label: 'Monthly Support', price: '$149' }
      ],
      buttonText: 'View Services',
      buttonUrl: 'https://cybertura.com',
      glowColor: 'cyber-blue'
    },
    {
      id: 'sebaszulluaga',
      icon: User,
      title: 'SebasZuluaga.com',
      description: 'Hub personal de información, trayectoria y marca personal.',
      buttonText: 'Visitar Perfil',
      buttonUrl: 'https://sebaszulluaga.com',
      glowColor: 'cyber-green'
    },
    {
      id: 'zurzulu',
      icon: Code,
      title: 'Zurzulu Project',
      description: 'Arquitectura de portafolio de nueva generación. Desarrollado con React, Tailwind y Vite (La plataforma actual).',
      badge: 'Under Development',
      buttonText: 'Ver Demo',
      buttonUrl: '/',
      glowColor: 'cyber-blue'
    }
  ];

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
            ACTIVE VENTURES
          </h1>
          <p className="text-cyber-blue font-mono text-sm tracking-widest">
            / INNOVATION
          </p>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyber-green transition-all relative overflow-hidden group"
            >
              {/* Efecto de fondo */}
              <div className={`absolute inset-0 bg-${project.glowColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* LOGO O ICONO */}
                <div className="flex items-center justify-between mb-4">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className={`h-12 w-auto ${project.id === 'cybertura' ? 'rounded mix-blend-lighten' : ''}`}
                    />
                  ) : (
                    <project.icon className={`w-12 h-12 text-${project.glowColor}`} />
                  )}
                  {project.badge && (
                    <span className="bg-orange-500 text-black px-2 py-1 rounded text-xs font-mono font-bold">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* TÍTULO Y SUBTÍTULO */}
                <h2 className="text-xl font-bold font-mono text-white mb-2">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-cyber-blue text-sm mb-2">
                    {project.subtitle}
                  </p>
                )}

                {/* DESCRIPCIÓN */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* BENEFICIOS O SERVICIOS */}
                {project.benefits && (
                  <ul className="text-sm text-gray-300 mb-4 space-y-1">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}

                {project.services && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRECIOS */}
                {project.pricing && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Pricing:</p>
                    <div className="space-y-1">
                      {project.pricing.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.label}:</span>
                          <span className="text-white font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BOTÓN */}
                <a
                  href={project.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-${project.glowColor} text-black px-6 py-3 rounded font-bold hover:bg-white transition-all inline-block shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]`}
                >
                  {project.buttonText}
                </a>
              </div>

              {/* Línea decorativa */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${project.glowColor} to-transparent opacity-50`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;