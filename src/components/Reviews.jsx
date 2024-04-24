import React from "react";
import { items } from "../utils/reviews";

const Reviews = () => {
  return (
    <div className="border-2 border-slate-300 rounded-md">
      <div className="w-full px-5 py-4 bg-[#f4efe3] flex rounded-t-md items-center justify-between">
        <h1 className="text-xl ">Featured Reviews (102)</h1>
      </div>
      <div className="p-12 flex flex-col gap-16">
        {items.map(({ dp, name, designation, date, rating, desc }, index) => (
          <Review
            key={index}
            name={name}
            dp={dp}
            designation={designation}
            date={date}
            rating={rating}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};

const Review = ({ dp, name, designation, date, rating, desc }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <img src={dp} alt={name} />
        <div className="flex justify-between gap-14 items-center">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{name}</span>
            <span>{designation}</span>
          </div>
          <span>{date}</span>
        </div>
      </div>
      <img src={rating} alt="rating" className=" w-24"/>
      <p>{desc}</p>
    </div>
  );
};

export default Reviews;
