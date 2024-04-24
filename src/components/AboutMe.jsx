import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import yt from '../assets/icons/yt.png'
import x from '../assets/icons/x.png'
const AboutMe = () => {
  return (
    <div className="border-2 border-slate-300 rounded-md ">
      <div className="w-full px-5 py-2 bg-[#f4efe3] flex rounded-t-md items-center justify-between">
        <h1 className="text-xl ">A little About me</h1>
        <button className="text-[1rem] rounded-md border-2 border-green-800  py-1 px-4 hover:bg-gray-100 duration-100">
          Follow +
        </button>
      </div>
      <div className="p-8 flex flex-col gap-4">
        <p className="text-[#333548a5] text-[1.2rem] leading-8">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <div className="flex gap-2 justify-center items-center">
            <div className="h-[1px] w-[75%] bg-slate-300"></div>
            <h1>Read More...</h1>
        </div>
        <div className="flex items-center gap-10">
            <h1 className="text-xl font-semibold">Language Spoken</h1>
            <div className="flex items-center gap-8 text-[1.3rem]">
              <span>English</span>
              <span>Hindi</span>
              <span>Telegu</span>
            </div>
        </div>
        <div className="flex gap-4">
          <a href="#"><img src={fb} alt="fb" /></a>
          <a href="#"><img src={ig} alt="ig" /></a>
          <a href="#"><img src={yt} alt="yt" /></a>
          <a href="#"><img src={x} alt="x" /></a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
