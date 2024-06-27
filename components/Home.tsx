"use client";

import React, { Ref, RefObject, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DownArrowIcon from "./icons/DownArrow";
import HorizontalIcon from "./icons/Horizontal";
import VerticalIcon from "./icons/Vertical";
import CarCard from "./CarCard";
import CarFinance from "./CarFinance";
import Pagination from "./PaginationComp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import axiosInstance from "@/axiosConfig";
import { setCar } from "@/slices/carSlice";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const horizontal = false;
  const carsData = useSelector((state: RootState) => state.cars.data);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full lg:w-[82%] py-5 space-y-3 overflow-y-auto no-scrollbar h-svh ">
      <div className="flex items-center justify-between">
        <div className="text-xs md:text-sm font-semibold">
          <span className="hidden md:inline-block">Showing 1-12 of</span>{" "}
          <span className="text-primary">54 </span>results
        </div>
        <div className="text-xs md:text-sm flex items-center gap-1">
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
            ? ` ${
                carsData.length > 0
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : ""
              } `
            : "flex flex-col gap-8"
        } mt-2`}
      >
        {carsData.length > 0 ? (
          carsData.map((item, index) => {
            if (index == 2) return <CarFinance key={index} />;
            return <CarCard item={item} key={index} />;
          })
        ) : (
          <div className="h-[40vh] w-full flex justify-center items-center">
            Loading...
          </div>
        )}
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
