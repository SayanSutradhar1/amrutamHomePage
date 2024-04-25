import cross from '../assets/icons/cross.svg'
const Checks = () => {
  return (
    <div className="px-32 gap-5 flex justify-end pb-4 pt-16">
        <div className="px-5 py-2 gap-2 flex items-center relative border-[2px] bg-green-50 border-slate-200 rounded-3xl">
            <span className='text-[1.1rem]'>Hair Care</span>
            <img src={cross} alt="" className=' scale-90  cursor-pointer self-center'/>
        </div>
        <div className="px-5 py-2 gap-2 flex items-center relative border-[2px] bg-green-50 border-slate-200 rounded-3xl">
            <span className='text-[1.1rem]'>Female</span>
            <img src={cross} alt="" className=' scale-90  cursor-pointer self-center'/>
        </div>
        <div className="px-5 py-2 gap-2 flex items-center relative border-[2px] bg-green-50 border-slate-200 rounded-3xl">
            <span className='text-[1.1rem]'>Rs.0-Rs.500</span>
            <img src={cross} alt="" className=' scale-90  cursor-pointer self-center'/>
        </div>
        <div className="px-5 py-2 gap-2 flex items-center relative border-[2px] bg-green-50 border-slate-200 rounded-3xl">
            <span className='text-[1.1rem]'>Hindi</span>
            <img src={cross} alt="" className=' scale-90  cursor-pointer self-center'/>
        </div>
    </div>
  )
}

export default Checks