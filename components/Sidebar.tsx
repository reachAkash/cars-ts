"use client";

import React, { useEffect, useState, useRef, RefObject } from "react";
import CarsSearch from "./CarsSearch";
import Filter, { FilterSmall } from "./Filter";
import { SearchIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

interface SidebarProps {
  searchRef: RefObject<HTMLElement>;
}

const Sidebar: React.FC<SidebarProps> = ({ searchRef }) => {
  const filterRef = useRef<HTMLElement>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const handleShowFilters = () => {
    setShowFilter((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="hidden lg:block w-[25%] sidebar py-5 space-y-4 overflow-y-scroll h-dvh no-scrollbar ">
        <CarsSearch searchRef={searchRef} />
        <Filter className="" />
      </div>
      <div className="flex lg:hidden w-full">
        <div className="space-y-3 py-4 w-full">
          <div className="flex relative w-full items-center justify-between">
            <div className="font-semibold text-sm border-l-2 border-primary px-2">
              Cars Search
            </div>
            <FilterSmall />
          </div>
          <div className="border w-full border-secondary flex items-center justify-between rounded-md px-4 py-2">
            <input type="text" className="w-full border-none outline-none" />
            <SearchIcon className="text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
