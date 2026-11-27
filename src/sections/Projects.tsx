import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';

interface ProjectsProps {
  language: 'pt' | 'en';
}

export default function Projects({ language }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-16 sm:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {language === 'pt' ? 'Projetos' : 'Projects'}
        </motion.h2>

        {/* PagPegue em destaque */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                  {projects[0].title}
                </h3>
                <p className="text-xl text-gray-600">
                  {projects[0].description[language]}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      {language === 'pt' ? 'Problema' : 'Problem'}
                    </h4>
                    <p className="text-gray-700">{projects[0].problem[language]}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      {language === 'pt' ? 'Solução' : 'Solution'}
                    </h4>
                    <p className="text-gray-700">{projects[0].solution[language]}</p>
                  </div>
                </div>
                {projects[0].highlight && (
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="text-blue-900 font-medium">
                      ✨ {projects[0].highlight[language]}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {projects[0].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                  {projects[0].media.type === 'video' ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      poster={projects[0].media.src.replace('.mp4', '.jpg')}
                    >
                      <source src={projects[0].media.src} type="video/mp4" />
                      <img src={projects[0].media.src.replace('.mp4', '.png')} alt={projects[0].media.alt} />
                    </video>
                  ) : (
                    <img
                      src={projects[0].media.src}
                      alt={projects[0].media.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Posts do LinkedIn */}
            {projects[0].linkedInPosts && projects[0].linkedInPosts.length > 0 && (
              <div className="px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
                <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
                  {language === 'pt' ? 'Prova Social' : 'Social Proof'}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {projects[0].linkedInPosts.map((post) => (
                    <motion.a
                      key={post.id}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-colors"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-700 font-semibold text-sm">LH</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                          <p className="text-sm text-gray-700 line-clamp-2">{post.excerpt}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Outros projetos */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                {project.media.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={project.media.src.replace('.mp4', '.jpg')}
                  >
                    <source src={project.media.src} type="video/mp4" />
                    <img src={project.media.src.replace('.mp4', '.png')} alt={project.media.alt} />
                  </video>
                ) : project.media.type === 'gif' ? (
                  <img src={project.media.src} alt={project.media.alt} className="w-full h-full object-cover" />
                ) : (
                  <img src={project.media.src} alt={project.media.alt} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description[language]}</p>
                <p className="text-sm text-gray-700">{project.solution[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex gap-3 pt-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {language === 'pt' ? 'Ver online' : 'View live'} →
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-900 hover:text-gray-700 font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
