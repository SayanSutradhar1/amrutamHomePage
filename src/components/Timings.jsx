import React from "react";

const Timings = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 mr-5">
        <h1 className="text-[1.1rem] font-bold ml-5">Morning</h1>
        <div className="flex flex-wrap gap-4 ">
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            09:00 AM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            09:30 AM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            10:00 AM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            10:15 AM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            10:45 AM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl bg-green-900 text-white">
            11:00 AM
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mr-5">
        <h1 className="text-[1.1rem] font-bold ml-5">Evening</h1>
        <div className="flex flex-wrap gap-4 ">
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            04:00 PM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            04:15 PM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            04:30 PM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            04:45 PM
          </span>
          <span className="px-4 py-5 border-2 border-slate-100 rounded-3xl">
            05:15 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timings;
