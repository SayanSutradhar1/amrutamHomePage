import AppointmentFee from "./AppointmentFee";
import SessionMode from "./SessionMode";
import calendar from "../assets/icons/calendar.svg";
import TimeSlot from "./TimeSlot";
import Timings from "./Timings";

const Appointment = () => {
  return (
    <div className="p-8 border-2 border-slate-200 rounded-md flex flex-col gap-10">
      <AppointmentFee />
      <div className="flex gap-2 items-center">
        <span className="font-bold text-xl px-2 ">
          Select your mode of session
        </span>
        <div className="h-[1px] flex-1 bg-slate-400"></div>
      </div>
      <SessionMode />
      <div className="flex gap-2 items-center">
        <span className="font-bold text-xl px-2 ">Pic a time slot</span>
        <div className="h-[1px] flex-1 bg-slate-400"></div>
        <img src={calendar} alt="calender" />
      </div>
      <TimeSlot />
      <Timings />
      <button className="w-[90%] py-4 px-6 font-semibold border-2 bg-green-800 rounded-md text-white self-center text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-green-900 duration-100 hover:text-green-900">
        Make an Appointment
      </button>
    </div>
  );
};

export default Appointment;
