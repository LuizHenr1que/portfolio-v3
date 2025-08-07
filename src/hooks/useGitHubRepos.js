import { useState, useEffect } from 'react';

const useGitHubRepos = (username, itemsPerPage = 5) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
        
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        
        const data = await response.json();
        
        // Filtrar apenas repositórios públicos e não forkados
        const filteredRepos = data.filter(repo => !repo.fork && !repo.private);
        
        // Mapear os dados para o formato usado no seu portfolio
        const formattedRepos = filteredRepos.map((repo) => ({
          id: `github-${repo.id}`,
          title: repo.name,
          description: repo.description || 'Projeto desenvolvido no GitHub',
          image: [
            { img: "/portfolio-v3/assets/imagens/projetosimg/github-default.svg" }
          ],
          technologies: repo.language ? [repo.language.toLowerCase()] : [],
          links: {
            github: repo.html_url,
            site: repo.homepage || null
          },
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated_at: repo.updated_at,
          isGitHubRepo: true
        }));
        
        setRepos(formattedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  // Calcular dados de paginação
  const totalPages = Math.ceil(repos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedRepos = repos.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { 
    repos: paginatedRepos, 
    allRepos: repos,
    loading, 
    error,
    currentPage,
    totalPages,
    totalItems: repos.length,
    goToPage,
    goToNextPage,
    goToPrevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
};

export default useGitHubRepos;
