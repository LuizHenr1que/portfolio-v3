import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useGitHubRepos from "../../hooks/useGitHubRepos";
import config from "../../data/config.json";
import { FaGithub } from "react-icons/fa";

const GitHubReposPreview = ({ limit = 3 }) => {
  const { allRepos, loading, error } = useGitHubRepos(config.github.username);

  // Pegar os repositórios mais recentemente atualizados
  const recentRepos = allRepos
    .filter(repo => !config.github.excludeRepos.includes(repo.title))
    .slice(0, limit);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primaryHi mx-auto"></div>
        <p className="mt-2 text-gray-500 text-sm">Carregando repositórios...</p>
      </div>
    );
  }

  if (error || recentRepos.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FaGithub />
          Repositórios Recentes
        </h3>
        <Link
          to="/projetos"
          className="text-primaryHi hover:underline text-sm"
        >
          Ver todos
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentRepos.map((repo) => (
          <div
            key={repo.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-sm mb-2 truncate">{repo.title}</h4>
            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
              {repo.description}
            </p>
            
            {repo.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {repo.technologies.slice(0, 2).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {repo.technologies.length > 2 && (
                  <span className="text-xs text-gray-500">
                    +{repo.technologies.length - 2}
                  </span>
                )}
              </div>
            )}
            
            <a
              href={repo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryHi hover:underline text-xs flex items-center gap-1"
            >
              <FaGithub />
              Ver código
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

GitHubReposPreview.propTypes = {
  limit: PropTypes.number
};

export default GitHubReposPreview;
