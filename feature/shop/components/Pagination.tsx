import { PaginationProps } from "../lib/shopTypes";
import Image from "next/image";
import back from "../assets/back-button.png";
import forward from "../assets/forward-button.png";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Generate page numbers dynamically
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // how many numbers to show around currentPage

    // Always show first page
    pages.push(1);

    // Add "..." if needed
    if (currentPage - delta > 2) {
      pages.push("...");
    }

    // Add middle pages
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    // Add "..." if needed
    if (currentPage + delta < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page if > 1
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center gap-6 font-semibold text-[13.366px]">
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="disabled:opacity-50 cursor-pointer"
      >
        <Image src={back} alt="Previous" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="p-2 w-9 text-[#325471]">
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => onPageChange(page as number)}
              className={`${
                currentPage === page
                  ? "text-white bg-[#F2430D]"
                  : "text-[#325471]"
              } p-2 w-9 cursor-pointer`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 cursor-pointer"
      >
        <Image src={forward} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
