import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContactProps {
  language: 'pt' | 'en';
}

export default function Contact({ language }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      label: 'Email',
      value: 'luizhenriquejob4@gmail.com',
      href: 'mailto:luizhenriquejob4@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/luiz-henrique44',
      href: 'https://www.linkedin.com/in/luiz-henrique44',
    },
    {
      label: 'GitHub',
      value: 'github.com/LuizHenr1que',
      href: 'https://github.com/LuizHenr1que',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            {language === 'pt' ? 'Vamos conversar?' : "Let's talk?"}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Estou sempre aberto a novos projetos e oportunidades.'
              : "I'm always open to new projects and opportunities."}
          </p>

          <motion.div
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label !== 'Email' ? '_blank' : undefined}
                  rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-0">
                    {info.label}
                  </span>
                  <span className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {info.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="mt-12 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {language === 'pt'
              ? 'Rio de Janeiro, Brasil'
              : 'Rio de Janeiro, Brazil'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
