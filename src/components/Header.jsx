import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center bg-[#FFF7E2] justify-center py-4">
      <div className="flex items-center w-[80%] justify-between">
        <h1 className="text-green-900 text-4xl font-semibold tracking-[6px]">
          AMRUTAM
          
        </h1>
        <nav className="flex gap-6 font-semibold text-xl">
          <NavLink to={"/"} className={({isActive})=>isActive?'text-green-900 font-bold':''} >Home</NavLink>
          <NavLink to={"/finddoctors"} className={({isActive})=>isActive?'text-green-900 font-bold':''}>Find Doctors</NavLink>
          <NavLink to={"/about"} className={({isActive})=>isActive?'text-green-900 font-bold':''}>About us</NavLink>
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
