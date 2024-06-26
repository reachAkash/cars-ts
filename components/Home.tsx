"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DownArrowIcon from "./icons/DownArrow";
import HorizontalIcon from "./icons/Horizontal";
import VerticalIcon from "./icons/Vertical";
import CarCard from "./CarCard";
import CarFinanceIcon from "./CarFinance";
import CarFinance from "./CarFinance";
import Pagination from "./PaginationComp";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const horizontal = false;
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-full lg:w-[82%] py-5 space-y-3 overflow-y-auto no-scrollbar h-svh ">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">
          Showing 1-12 of <span className="text-primary">54 </span>results
        </div>
        <div className="text-sm flex items-center gap-1">
          Sort by{" "}
          <span className="flex font-semibold items-center justify-between">
            Recently Added <DownArrowIcon />
          </span>
          <span className="flex items-center lg:hidden">
            <HorizontalIcon />
            <VerticalIcon />
          </span>
        </div>
      </div>
      <div className="hidden lg:flex justify-end space-x-1 rounded-md border px-4 py-2 border-secondary">
        <HorizontalIcon />
        <VerticalIcon />
      </div>
      <div
        className={`${
          !horizontal
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-8"
        } mt-2`}
      >
        {arr?.map((item, index) => {
          if (index == 2) return <CarFinance key={index} />;
          return <CarCard key={index} />;
        })}
      </div>
      <div className="py-4 flex m-auto">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
