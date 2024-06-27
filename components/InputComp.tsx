import React from "react";

interface InputProps {
  label: string;
}
const InputComp: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="border-2 rounded-md w-full px-2 py-1 border-gray-100">
      <div className="text-sm font-light ">{label}</div>
      <div className="font-medium">$1000</div>
    </div>
  );
};

export default InputComp;
