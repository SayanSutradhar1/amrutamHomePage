import tick from '../assets/icons/tick.png'

const SessionMode = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-between'>
      <div className='px-10 py-3 border-2 border-slate-300 rounded-md flex flex-col items-center'>
        <span className='font-semibold text-[1.2rem]'>In Clinc</span>
        <span className=''>45 mins</span>
      </div>
      <div className='px-10 py-3 border-2 border-slate-300 rounded-md flex flex-col items-center bg-green-100'>
        <span className='font-semibold text-[1.2rem] flex gap-2 items-center'>
          <h1>Video</h1>
          <img src={tick} alt="tick" className='bg-green-900 p-[2px] rounded-xl'/>
        </span>
        <span className=''>45 mins</span>
      </div>
      <div className='px-10 py-3 border-2 border-slate-300 rounded-md flex flex-col items-center'>
        <span className='font-semibold text-[1.2rem]'>Chat</span>
        <span className=''>10 mins</span>
      </div>
    </div>
  )
}

export default SessionMode