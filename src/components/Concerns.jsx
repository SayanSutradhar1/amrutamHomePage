import React from "react";
import { items } from "../utils/concerns";

const Concerns = () => {
  return (
    <div className="border-2 border-slate-300 rounded-md">
      <div className="w-full px-5 py-4 bg-[#f4efe3] flex rounded-t-md items-center justify-between">
        <h1 className="text-xl ">The Concerns I Treat</h1>
      </div>
      <div className="p-8 flex gap-5 flex-wrap items-center">
        {items.map((item, index) => (
          <span
            className="text-green-900 font-semibold py-1 px-3 rounded-[2rem] bg-slate-100"
            key={index}
          >
            {item}
          </span>
        ))}
        <button className="py-2 px-4 border-2 border-gray-300 rounded-[1rem]">
          +5 More
        </button>
      </div>
    </div>
  );
};

export default Concerns;
