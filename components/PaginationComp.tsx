import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 border ${
            i === currentPage
              ? "border-primary bg-primary text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 w-full ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-300 rounded-md"
      >
        &lt; Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-300 rounded-md"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
