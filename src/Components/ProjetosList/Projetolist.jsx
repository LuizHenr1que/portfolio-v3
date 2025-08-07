import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import projectsData from "../../data/Projetos/projetos.json";
import useGitHubRepos from "../../hooks/useGitHubRepos";
import GitHubProjectCard from "./GitHubProjectCard";
import Pagination from "../Pagination/Pagination";
import config from "../../data/config.json";

const ProjectList = () => {
  const [showGitHubRepos, setShowGitHubRepos] = useState(false);
  const { 
    repos, 
    allRepos,
    loading, 
    error,
    currentPage,
    totalPages,
    totalItems,
    goToPage,
    goToNextPage,
    goToPrevPage,
    hasNextPage,
    hasPrevPage
  } = useGitHubRepos(config.github.username, 5);

  useEffect(() => {
    ScrollReveal().reveal('.project-card', {
      duration: 900,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
      interval: 100 
    });
  }, []);

  // Filtrar repositórios excluídos
  const filteredRepos = allRepos.filter(repo => 
    !config.github.excludeRepos.includes(repo.title)
  );

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Meus Projetos</h2>
        <button
          onClick={() => setShowGitHubRepos(!showGitHubRepos)}
          className="button_padrao border border-primaryHi px-4 py-2 rounded-lg text-sm"
        >
          {showGitHubRepos ? 'Mostrar Projetos Destacados' : 'Mostrar Todos os Repositórios'}
        </button>
      </div>

      <div className="flex flex-col project-card">
        {!showGitHubRepos ? (
          // Mostrar projetos manuais (destacados)
          projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card flex flex-col md:flex-row items-start gap-4 rounded-lg transition duration-200 mb-4 card"
            >
              <div className="p-2">
                <img
                  src={project.image[0].img}
                  alt={project.title}
                  className="w-80 rounded-lg md:w-52"
                />
              </div>
              <div className="flex flex-col pl-5 py-2 items-start w-full md:p-2">
                <h3 className="subtitulo">{project.title}</h3>
                <p className="text-gray-500 flex flex-col justify-between h-full">
                  {project.description}
                  <Link
                    to={`/project/${project.id}`}
                    className="button_padrao border border-primaryHi w-28 text-center rounded-lg py-1 mt-2"
                  >
                    Ver projeto
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : (
          // Mostrar repositórios do GitHub com paginação
          <>
            {loading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primaryHi mx-auto"></div>
                <p className="mt-2 text-gray-500">Carregando repositórios...</p>
              </div>
            )}
            
            {error && (
              <div className="text-center py-8 text-red-500">
                <p>Erro ao carregar repositórios: {error}</p>
              </div>
            )}
            
            {!loading && !error && filteredRepos.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>Nenhum repositório encontrado.</p>
              </div>
            )}
            
            {!loading && !error && repos.length > 0 && (
              <>
                {repos.map((repo) => (
                  <GitHubProjectCard key={repo.id} project={repo} />
                ))}
                
                {/* Componente de Paginação */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                  onPrevPage={goToPrevPage}
                  onNextPage={goToNextPage}
                  hasNextPage={hasNextPage}
                  hasPrevPage={hasPrevPage}
                  totalItems={totalItems}
                  itemsPerPage={5}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
