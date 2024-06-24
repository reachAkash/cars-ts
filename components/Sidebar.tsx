import React from "react";
import CarsSearch from "./CarsSearch";
import Filter from "./Filter";
import { SearchIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="hidden lg:block w-[25%] sidebar py-5 space-y-4 overflow-y-scroll h-dvh no-scrollbar ">
        <CarsSearch />
        <Filter />
      </div>
      <div className="flex lg:hidden w-full">
        <div className="space-y-3 py-4 w-full">
          <div className="flex w-full items-center justify-between">
            <div className="font-semibold text-sm border-l-2 border-primary ml-4 px-2">
              Cars Search
            </div>
            <button className="bg-primary text-sm gap-2 text-white flex items-center justify-center px-2 py-1 rounded-md">
              <SlidersHorizontal style={{ width: "15px" }} />
              Filters
            </button>
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
