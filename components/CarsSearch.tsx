"use client";

import React, { FormEvent, MouseEvent } from "react";
import SearchIcon from "./icons/Search";
import axiosInstance from "@/axiosConfig";

const CarsSearch: React.FC = () => {
  const fetchData = async () => {
    try {
      const data = await axiosInstance.get("/api");
      console.log(data.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const handleIconClick = (e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    fetchData();
    console.log("im here");
  };

  return (
    <div className="space-y-3">
      <div className="font-semibold text-sm border-l-2 border-primary ml-4 px-2">
        Cars Search
      </div>
      <form
        onSubmit={handleSearch}
        className=" border border-secondary flex items-center justify-between rounded-md px-4 py-2"
      >
        <input type="text" className="w-full border-none outline-none" />
        <SearchIcon onClick={handleIconClick} className="text-gray-300" />
      </form>
    </div>
  );
};

export default CarsSearch;
