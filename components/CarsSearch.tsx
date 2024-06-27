"use client";

import React, { FormEvent, MouseEvent, RefObject, useState } from "react";
import SearchIcon from "./icons/Search";
import axiosInstance from "@/axiosConfig";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { setCar } from "@/slices/carSlice";
import { RootState } from "@/store";

interface CarsSearchProps {
  searchRef: any;
}
const CarsSearch: React.FC<CarsSearchProps> = ({ searchRef }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const carsData = useSelector((state: RootState) => state.cars.data);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const data = await axiosInstance.get("/api");
      console.log(data.data);
      dispatch(setCar(data.data));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim() != "") {
      fetchData();
    }
  };

  const handleIconClick = (e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    if (searchInput.trim() != "") {
      fetchData();
    }
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
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          ref={searchRef}
          type="text"
          className="w-full border-none outline-none"
        />
        <SearchIcon onClick={handleIconClick} className="text-gray-300" />
      </form>
    </div>
  );
};

export default CarsSearch;
