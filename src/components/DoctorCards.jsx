import { items } from "../utils/doctors";
import Container from "./Container";
import icon1 from "../assets/doctors/icon1.svg";
import icon2 from "../assets/doctors/icon2.svg";
import icon3 from "../assets/doctors/icon3.svg";

const DoctorCards = () => {
  return (
    <Container>
      <div className="flex px-10 flex-wrap gap-20 w-full justify-center">
        {items.map(
          (
            { pic, rating, name, desc: { sub, exp, lang }, vid, chat },
            index
          ) => (
            <DoctorCard
              key={index}
              pic={pic}
              rating={rating}
              name={name}
              sub={sub}
              exp={exp}
              lang={lang}
              vid={vid}
              chat={chat}
            />
          )
        )}
      </div>
    </Container>
  );
};

const DoctorCard = ({ pic, rating, name, sub, exp, lang, vid, chat }) => {
  return (
    <div className="flex flex-col py-4 px-5 gap-4 bg-[#FFF7E2] drop-shadow-xl border-[2px] border-slate-100 rounded-2xl  items-center justify-center">
      <div className="relative mb-6 ">
        <img src={pic} alt="pic" className=" max-w-60" />
        <img
          src={rating}
          alt="rating"
          className="absolute bottom-[-8px] right-[50%] translate-x-[50%] z-10"
        />
      </div>
      <h1 className="font-semibold text-3xl">{name}</h1>
      <div className="flex flex-col gap-2 ">
        <span className="flex gap-3 items-center self-start">
          <img src={icon1} alt="icon" />
          <h1>{sub}</h1>
        </span>
        <span className="flex gap-3 items-center self-start">
          <img src={icon2} alt="icon" />
          <h1>{exp}</h1>
        </span>
        <span className="flex gap-3 items-center self-start">
          <img src={icon3} alt="icon" />
          <h1>{lang}</h1>
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex flex-col gap-1 items-center border-[1.9px] font-bold border-slate-200 px-3 py-1 rounded-md">
          <span className="text-[0.8rem]">Video Consultation</span>{" "}
          <span>{vid}</span>
        </button>
        <button className="flex flex-col gap-1 items-center border-[1.9px] font-bold border-slate-200 px-3 py-1 rounded-md">
          <span className="text-[0.8rem]">Chat Consultation</span>{" "}
          <span>{chat}</span>
        </button>
      </div>
      <button className="w-full bg-white py-2 border-[1.7px] border-green-950 rounded-md">
        View Profile
      </button>
      <button className="w-full py-2 border-[1.7px] border-green-950 bg-green-900 text-white rounded-md mt-[-10px] hover:bg-white hover:text-green-900 duration-100">
        Book Consultant
      </button>
    </div>
  );
};

export default DoctorCards;
