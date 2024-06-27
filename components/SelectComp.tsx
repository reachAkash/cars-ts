"use client";

import React, { useRef, MouseEvent } from "react";

interface Select {
  label: string;
}

const SelectComp: React.FC<Select> = (props) => {
  const boxRef = useRef<HTMLSelectElement>(null);

  const handleOpenSelect = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (boxRef.current) {
      boxRef.current.click();
    }
  };

  return (
    <div
      onClick={handleOpenSelect}
      className="border w-full border-gray-200 px-2 py-2 rounded-md"
    >
      <div className="text-xs font-medium">{props?.label}</div>
      <select
        ref={boxRef}
        className="w-full cursor-pointer outline-none border-none"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default SelectComp;
