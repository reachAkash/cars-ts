"use client";

import axiosInstance from "@/axiosConfig";
import { setCar, startLoading } from "@/slices/carSlice";
import React, { useRef, MouseEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Select {
  label: string;
  data?: string[];
}

const SelectComp: React.FC<Select> = ({ label, data }) => {
  const [selectvalue, setSelectValue] = useState("");
  const dispatch = useDispatch();

  const getFilteredData = async () => {
    try {
      dispatch(startLoading(true));
      const data = await axiosInstance.get(
        `/api/getcars?bodyType=${selectvalue}`
      );
      console.log("first");
      console.log(data.data);
      dispatch(setCar(data.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="border w-full border-gray-200 px-2 py-2 rounded-md">
      <div className="text-xs font-medium">{label}</div>
      <select
        value={selectvalue}
        onChange={(e) => {
          setSelectValue(e.target.value);
          getFilteredData();
        }}
        className="w-full cursor-pointer outline-none border-none"
      >
        {data?.map((item: string, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectComp;
