import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";

const Page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col lg:flex-row px-4 md:px-8 xl:px-[4rem] gap-0 md:gap-8">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default Page;
