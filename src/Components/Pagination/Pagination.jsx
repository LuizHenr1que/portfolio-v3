import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Pagination.css';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  onPrevPage, 
  onNextPage, 
  hasNextPage, 
  hasPrevPage,
  totalItems,
  itemsPerPage
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Gerar números das páginas para mostrar
  const getPageNumbers = () => {
    if (totalPages <= 1) return [1];
    
    const delta = 2; // Quantas páginas mostrar de cada lado da página atual
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return [...new Set(rangeWithDots)]; // Remove duplicatas
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {/* Informações sobre os itens */}
      <div className="text-sm text-gray-600">
        Mostrando {startItem} a {endItem} de {totalItems} repositórios
      </div>

      {/* Controles de paginação */}
      <div className="flex items-center gap-2">
        {/* Botão anterior */}
        <button
          onClick={onPrevPage}
          disabled={!hasPrevPage}
          className={`p-2 rounded-lg border transition-colors ${
            hasPrevPage
              ? 'border-primaryHi text-primaryHi hover:bg-primaryHi hover:text-white'
              : 'border-gray-300 text-gray-400 cursor-not-allowed'
          }`}
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        {/* Números das páginas */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNumber, index) => {
            if (pageNumber === '...') {
              return (
                <span key={`dots-${index}`} className="px-2 py-2 text-gray-500">
                  ...
                </span>
              );
            }

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={`px-3 py-2 rounded-lg border transition-colors ${
                  currentPage === pageNumber
                    ? 'bg-primaryHi text-white border-primaryHi'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Botão próximo */}
        <button
          onClick={onNextPage}
          disabled={!hasNextPage}
          className={`p-2 rounded-lg border transition-colors ${
            hasNextPage
              ? 'border-primaryHi text-primaryHi hover:bg-primaryHi hover:text-white'
              : 'border-gray-300 text-gray-400 cursor-not-allowed'
          }`}
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  hasPrevPage: PropTypes.bool.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
