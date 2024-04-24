import left from "../assets/icons/left.png";
import right from "../assets/icons/right.png";

const TimeSlot = () => {
  return (
    <div className="flex py-4 px-6 border-2 rounded-xl border-slate-200 justify-between gap-2">
      <button>
        <img src={left} alt="left" />
      </button>
      <div className="gap-6 flex ">
        <div className="px-4 py-3 border-2 border-slate-300 rounded-xl flex flex-col items-center bg-green-100">
          <span className="font-semibold text-green-700">Mon, 10th Oct</span>
          <span className=" font-bold">10 Slots</span>
        </div>
        <div className="px-4 py-3 border-2 border-slate-300 rounded-xl flex flex-col items-center">
          <span className="font-semibold ">Tue, 11th Oct</span>
          <span className="text-red-500 font-bold">02 Slots</span>
        </div>
        <div className="px-4 py-3 border-2 border-slate-300 rounded-xl flex flex-col items-center">
          <span className="font-semibold  ">Wed, 12th Oct</span>
          <span className="font-bold text-yellow-500">05 Slots</span>
        </div>
      </div>
      <button>
        <img src={right} alt="right" />
      </button>
    </div>
  );
};

export default TimeSlot;
