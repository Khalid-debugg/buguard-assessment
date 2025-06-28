import { PaginationProps } from '@/types'
import { LeftArrow, RightArrow } from '../ui/Icons'
const Pagination = ({
  totalData,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalData / itemsPerPage)

  if (totalPages <= 1) {
    return null
  }
  const getVisiblePages = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const pages = []
    pages.push(1, 2, 3)
    if (currentPage > 3 && currentPage <= totalPages / 2) {
      pages.push(currentPage)
    }
    pages.push('...')
    if (currentPage < totalPages - 2 && currentPage > totalPages / 2) {
      pages.push(currentPage)
    }
    pages.push(totalPages - 2, totalPages - 1, totalPages)
    return pages
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-[#EAECF0] pt-4 sm:flex-row">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-gray-800"
        aria-label={`Go to previous page, page ${currentPage - 1}`}
        aria-disabled={currentPage === 1}
      >
        <LeftArrow />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === 'number' ? onPageChange(page) : undefined
            }
            disabled={typeof page !== 'number'}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              typeof page === 'number' && currentPage === page
                ? 'bg-[#F9F5FF] text-title dark:bg-[#F9F5FF] dark:text-primary'
                : typeof page === 'number'
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'cursor-default'
            }`}
            aria-label={typeof page === 'number' ? `Go to page ${page}` : undefined}
            aria-current={typeof page === 'number' && currentPage === page ? 'page' : undefined}
            aria-disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-gray-800"
        aria-label={`Go to next page, page ${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <RightArrow />
      </button>
    </div>
  )
}

export default Pagination
