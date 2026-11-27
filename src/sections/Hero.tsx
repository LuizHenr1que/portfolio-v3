import { motion } from 'framer-motion';

export default function Hero() {
  const techStack = [
    'React',
    'TypeScript',
    'React Native',
    'Node.js',
    'NestJS',
    'PHP',
    'Laravel',
    'Python',
    'Redis',
    'PostgreSQL',
    'PostGIS',
    'Kotlin',
    'Android',
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luiz Henrique
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desenvolvedor Full Stack & Mobile
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgb(243, 244, 246)' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/luiz-henrique44"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/LuizHenr1que"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="/portfolio-v3/assets/CurriculoLuizHenrique.pdf"
              download
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
