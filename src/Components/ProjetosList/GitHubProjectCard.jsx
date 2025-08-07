import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

const GitHubProjectCard = ({ project }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="project-card flex flex-col md:flex-row items-start gap-4 rounded-lg transition duration-200 mb-4 card border border-gray-200 p-4">
      <div className="p-2">
        <div className="w-80 md:w-52 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
          <FaGithub className="text-4xl text-gray-400" />
        </div>
      </div>
      
      <div className="flex flex-col pl-5 py-2 items-start w-full md:p-2">
        <h3 className="subtitulo flex items-center gap-2">
          {project.title}
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            GitHub
          </span>
        </h3>
        
        <p className="text-gray-500 mb-2">{project.description}</p>
        
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <FaCodeBranch />
            {project.forks}
          </span>
          <span>
            Atualizado em {formatDate(project.updated_at)}
          </span>
        </div>
        
        <div className="flex gap-2">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button_padrao border border-primaryHi px-3 py-1 rounded-lg flex items-center gap-2 text-sm"
          >
            <FaGithub />
            Código
          </a>
          
          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="button_padrao border border-green-500 px-3 py-1 rounded-lg flex items-center gap-2 text-sm"
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

GitHubProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    stars: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
    links: PropTypes.shape({
      github: PropTypes.string.isRequired,
      site: PropTypes.string
    }).isRequired
  }).isRequired
};

export default GitHubProjectCard;
