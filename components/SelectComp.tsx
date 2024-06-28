"use client";

import axiosInstance from "@/axiosConfig";
import { setCar, startLoading } from "@/slices/carSlice";
import React, { useRef, MouseEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Select {
  label: string;
  data?: string[];
  doorsData?: number[];
}

const SelectComp: React.FC<Select> = ({ label, data, doorsData }) => {
  const [selectvalue, setSelectValue] = useState<string | number>();
  const dispatch = useDispatch();

  const getFilteredData = async () => {
    try {
      if (selectvalue) {
        dispatch(startLoading(true));
        let url;
        if (data && data.length > 0)
          url = `/api/getcars?limit=9&bodyType=${selectvalue}`;
        else if (doorsData && doorsData.length > 0)
          url = `/api/getcars?limit=9&doors=${selectvalue}`;
        console.log(url);
        const resData = await axiosInstance.get(url!);
        console.log(resData.data);
        dispatch(setCar(resData.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFilteredData();
  }, [selectvalue]);

  return (
    <div className="border w-full border-gray-200 px-2 py-2 rounded-md">
      <div className="text-xs font-medium">{label}</div>
      <select
        value={selectvalue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        className="w-full cursor-pointer outline-none border-none"
      >
        {data &&
          data.length > 0 &&
          data?.map((item: string, index) => {
            return <option key={index}>{item}</option>;
          })}
        {doorsData &&
          doorsData.length > 0 &&
          doorsData?.map((item: number, index) => {
            return <option key={index}>{item}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectComp;
