"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";

const Page = () => {
  const searchRef = useRef<any>();

  const focusInput = () => {
    console.log(searchRef.current);
  };

  return (
    <Provider store={store}>
      <div className="">
        <Navbar focusInput={focusInput} />
        <div className="text-center py-2 text-xl bg-red-500 text-white w-full">
          Some Filters might not work it&apos;s still in development phase😔{" "}
        </div>
        <div className="flex flex-col lg:flex-row px-4 md:px-8 xl:px-[4rem] gap-0 lg:gap-8">
          <Sidebar searchRef={searchRef} />
          <Home />
        </div>
      </div>
    </Provider>
  );
};

export default Page;
