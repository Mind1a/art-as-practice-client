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

  return (
    <div className="flex items-center gap-6 font-semibold text-[13.366px]">
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="disabled:opacity-50 cursor-pointer"
      >
        <Image src={back} alt="" />
      </button>

      <div className="flex items-center gap-2">
        {/* Page 1 */}
        <button
          onClick={() => onPageChange(1)}
          className={`${
            currentPage === 1 ? "text-white bg-[#F2430D]" : "text-[#325471]"
          } p-2 w-9 cursor-pointer`}
        >
          1
        </button>

        {/* Page 2 (only if we have at least 2 pages) */}
        {totalPages > 2 && (
          <button
            onClick={() => onPageChange(2)}
            className={`${
              currentPage === 2 ? "text-white bg-[#F2430D]" : "text-[#325471]"
            } p-2 w-9 cursor-pointer`}
          >
            2
          </button>
        )}

        {/* Dots (only if there are more than 3 pages) */}
        {totalPages > 3 && <span className="p-2 w-9 text-[#325471]">...</span>}

        {/* Last Page (only if > 2) */}
        {totalPages > 2 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${
              currentPage === totalPages
                ? "text-white bg-[#F2430D]"
                : "text-[#325471]"
            } p-2 w-9 cursor-pointer`}
          >
            {totalPages}
          </button>
        )}
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 cursor-pointer"
      >
        <Image src={forward} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
