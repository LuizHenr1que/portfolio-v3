import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StackProps {
  language: 'pt' | 'en';
}

const stackCategories = [
  {
    title: { pt: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: { pt: 'Mobile', en: 'Mobile' },
    items: ['React Native', 'Expo', 'Kotlin', 'Android'],
  },
  {
    title: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Prisma', 'Socket.IO', 'WebSockets', 'Supabase'],
  },
  {
    title: { pt: 'Banco de Dados', en: 'Database' },
    items: ['PostgreSQL', 'PostGIS', 'MySQL', 'MongoDB', 'SQLite', 'Realm', 'Redis'],
  },
  {
    title: { pt: 'Ferramentas', en: 'Tools' },
    items: ['Docker', 'Git', 'Figma', 'Python'],
  },
];

export default function Stack({ language }: StackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stack" className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-16 sm:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Stack
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.title.en}
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-white text-gray-700 rounded-lg border border-gray-200"
                    whileHover={{ scale: 1.05, borderColor: 'rgb(59, 130, 246)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
