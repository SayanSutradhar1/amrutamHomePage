import React from "react";
import Container from "./Container";
import frame from "../assets/images/frame.png";
import dp from "../assets/images/dp.png";
import rating from "../assets/images/rating.png";
import mark from "../assets/images/mark.png";

const Dashboard = () => {
  return (
    <Container>
      <div className="w-full relative">
        <img src={frame} alt="frame" className="w-full" />
        <div className="w-full flex h-[200px] justify-between bg-[#FFFBF2] relative top-[-36px]">
          <div className="ml-6 flex items-center">
            <img src={dp} alt="dp" className="absolute top-[-20px] scale-[1.2]" />
            <div className=" ml-52 py-7">
              <span className="flex items-center gap-2">
                <h1 className="font-semibold text-xl">Dr. Bruce Willis</h1>
                <img src={mark} alt="mark" className="scale-95 " />
              </span>
              <h1 className="my-2">Gynecologist</h1>
              <img src={rating} alt="rating" />
            </div>
          </div>
          <div className="flex gap-6 font-medium justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-xl">Followers</span>
              <span>850</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl"> Following</span>
              <span>18K</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">Posts</span>
              <span>250</span>
            </div>
          </div>
          <div className="px-10 flex items-center justify-center">
            <button className="py-5 px-8 rounded-md text-3xl hover:bg-transparent hover:border-2 hover:border-green-900 border-2 duration-100 bg-green-900 hover:text-green-900 text-[#FFFBF2] max-[1100px]:text-2xl">
              Book An Appointment
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
