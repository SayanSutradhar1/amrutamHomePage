import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center bg-[#FFF7E2] justify-center py-4">
      <div className="flex items-center w-[80%] justify-between">
        <h1 className="text-green-900 text-4xl font-semibold tracking-[6px]">
          AMRUTAM
        </h1>
        <nav className="flex gap-6 font-semibold text-xl">
          <Link to={"/"}>Home</Link>
          <Link to={"/finddoctors"}>Find Doctors</Link>
          <Link to={"#"}>About us</Link>
        </nav>
        <div className="flex gap-3 items-center">
          <button className="px-5 py-2 text-xl border-green-900 border-2 rounded-md">
            Login
          </button>
          <button className="px-5 py-2 text-xl bg-green-900 rounded-md border-2 text-[#FFF7E2] hover:bg-transparent border-green-950 duration-100 hover:text-green-900">
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
