import React from "react";
import { items } from "../utils/experiences";

const Experiences = () => {
  return (
    <div className="border-2 border-slate-300 rounded-md">
      <div className="w-full px-5 py-4 bg-[#f4efe3] flex rounded-t-md items-center justify-between">
        <h1 className="text-xl ">My Work Experiences</h1>
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h1 className="text-green-900 font-semibold text-[1.15rem]">
          I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
        </h1>
        <div className="h-[1px] w-[80%] bg-slate-300"></div>
        <div className="flex flex-col gap-5">
          {items.map(({ icon, place, designation, duration }, index) => (
            <ExpItem
              key={index}
              icon={icon}
              place={place}
              designation={designation}
              duration={duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpItem = ({ icon, place, designation, duration }) => {
  return (
    <div className="flex gap-3">
      <img src={icon} alt={place} />
      <div className="flex justify-between gap-14 ">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{place}</span>
          <span>{designation}</span>
        </div>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default Experiences;
