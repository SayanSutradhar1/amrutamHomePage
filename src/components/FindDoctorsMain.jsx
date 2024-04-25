import ellipse1 from "../assets/ellipse/ellipse1.png";
import ellipse2 from "../assets/ellipse/ellipse2.png";
import location from "../assets/location.png";
import icon from '../assets/icon.svg'

const FindDoctorsMain = () => {
  return (
    <div className="relative w-full flex h-64 bg-[#EAF2EA]">
      <img src={ellipse1} alt="" className="absolute left-36" />
      <img src={ellipse1} alt="" className="absolute right-36" />
      <img src={ellipse2} alt="" className="absolute left-[300px] bottom-0" />
      <img src={ellipse2} alt="" className="absolute right-[300px] bottom-0" />
      <div className="w-full flex justify-center items-center gap-12 flex-col z-10 relative">
        <h1 className="text-center text-4xl text-black font-semibold">
          Find expert Doctors for an In-clinic session here
        </h1>
        <div className="flex gap-4">
          <div className="flex justify-center items-center w-[280px] bg-white p-2 rounded-md">
            <img src={location} alt="" className="w-8" />
            <select
              name="location"
              id="location"
              className="text-black p-2 rounded-md outline-none"
            >
              <option value="loaction" defaultChecked>
                Select Location
              </option>
            </select>
          </div>
          <div className="flex justify-between rounded-md items-center w-full bg-white px-4">
            <span>eg. Doctor, specialisation, clinic name</span>
            <img src={icon} alt="" className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorsMain;
