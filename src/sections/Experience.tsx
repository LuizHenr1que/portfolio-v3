import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/experience';

interface ExperienceProps {
  language: 'pt' | 'en';
}

export default function Experience({ language }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 sm:py-32 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-16 sm:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {language === 'pt' ? 'Experiência' : 'Experience'}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-700">{exp.position[language]}</p>
                </div>
                <p className="text-gray-600 text-sm mt-2 sm:mt-0 sm:text-right">
                  {exp.period[language]}
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {exp.description[language].map((item, i) => (
                  <li key={i} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
