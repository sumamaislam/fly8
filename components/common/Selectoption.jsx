import React from "react";

function Selectoption({...props}) {
  return (
    <div className="text-gray-500 h-[45px] hello">
      <select
        className="w-full py-[12px] mt-[10px] h-[45px] border border-gray-700 rounded-md p-2 outline-none focus:border-none"
        {...props}
      >
        <option hidden>Country/ Region</option>
        <option>USA</option>
        <option>UAE</option>
        <option>UK</option>
      </select>
    </div>
  );
}

export default Selectoption;
