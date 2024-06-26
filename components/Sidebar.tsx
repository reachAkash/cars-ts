// "use client";

// import React, { useEffect, useState, MouseEvent, useRef } from "react";
// import CarsSearch from "./CarsSearch";
// import Filter from "./Filter";
// import { SearchIcon } from "lucide-react";
// import { SlidersHorizontal } from "lucide-react";

// const Sidebar: React.FC = () => {
//   const filterRef = useRef<HTMLElement>(null);
//   const [showFilter, setShowFilter] = useState<boolean>(false);

//   const handleShowFilters = () => {
//     setShowFilter((prev) => !prev);
//   };

//   useEffect(() => {
//     const closeFilter = (e: Event) => {
//       console.log(e.target);
//       if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
//         setShowFilter(false);
//       }
//     };

//     window.addEventListener("click", closeFilter);

//     return () => window.removeEventListener("click", closeFilter);
//   }, []);

//   return (
//     <>
//       <div className="hidden lg:block w-[25%] sidebar py-5 space-y-4 overflow-y-scroll h-dvh no-scrollbar ">
//         <CarsSearch />
//         <Filter className="" />
//       </div>
//       <div className="flex lg:hidden w-full">
//         <div className="space-y-3 py-4 w-full">
//           <div className="flex relative w-full items-center justify-between">
//             <div className="font-semibold text-sm border-l-2 border-primary px-2">
//               Cars Search
//             </div>
//             <button
//               onClick={handleShowFilters}
//               className="bg-primary text-sm gap-2 text-white flex items-center justify-center px-2 py-1 rounded-md"
//             >
//               <SlidersHorizontal style={{ width: "15px" }} />
//               Filters
//             </button>
//             {showFilter && (
//               <Filter className="absolute top-0 right-0 z-50 h-[100vh] bg-white" />
//             )}
//           </div>
//           <div className="border w-full border-secondary flex items-center justify-between rounded-md px-4 py-2">
//             <input type="text" className="w-full border-none outline-none" />
//             <SearchIcon className="text-gray-300" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

"use client";

import React, { useEffect, useState, useRef } from "react";
import CarsSearch from "./CarsSearch";
import Filter, { FilterSmall } from "./Filter";
import { SearchIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

interface SidebarProps {
  // Add any props needed for the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
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
        <CarsSearch />
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
