import CarIcon from "@/components/icons/Car";
import HeartIcon from "@/components/icons/Heart";
import UserIcon from "@/components/icons/User";
import React from "react";
import { Search } from "lucide-react";
import { Bookmark } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-primary sticky top-0 z-50">
      <div className="flex items-center justify-between px-[1rem] lg:px-[2rem] xl:px-[4rem]">
        <div className="w-[50%] md:w-[25%] text-lg sm:text-xl md:text-2xl xl:text-3xl text-white font-thin">
          Motor<span className="font-semibold">Genius</span>.co.uk
        </div>
        <div className="hidden lg:block w-[70%] lg:w-[75%]">
          <div className="w-full rounded-es-full flex items-center text-black justify-end gap-4 text-sm bg-white py-2">
            <span className="flex items-center justify-between border-r-2 border-gray-300 px-8 gap-2">
              <CarIcon />
              Recently Viewed
            </span>
            <span className="flex items-center justify-between border-r-2 border-gray-300 px-8 gap-2">
              <HeartIcon />
              Shortlist
            </span>
            <span className="flex items-center justify-between px-8 gap-2">
              <UserIcon />
              Sign In
            </span>
          </div>
          <div className="flex items-center justify-end gap-[2rem] text-white px-2 py-2">
            <span>Search</span>
            <span>Finance</span>
            <span>Sell</span>
            <span>About us</span>
          </div>
        </div>
        <div className="lg:hidden w-[50%] flex items-center justify-end py-3 gap-2 md:gap-4">
          <div className="border-r text-white px-2 md:px-4 gap-1 border-white flex items-center">
            <span className="hidden sm:flex">Search</span>{" "}
            <Search className="text-white" />{" "}
            <Bookmark className="text-white" />
          </div>
          <div className="text-white text-sm md:text-base">Sign In </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
