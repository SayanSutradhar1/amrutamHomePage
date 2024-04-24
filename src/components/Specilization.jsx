import React from "react";
import { items } from "../utils/specializations";

const Specilization = () => {
  return (
    <div className="border-2 border-slate-300 rounded-md ">
      <div className="w-full px-5 py-4 bg-[#f4efe3] flex rounded-t-md items-center justify-between">
        <h1 className="text-xl ">I Specialize in</h1>
      </div>
      <div className="p-8 flex gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specilization;
