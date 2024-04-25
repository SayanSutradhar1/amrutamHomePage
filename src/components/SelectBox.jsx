import React from 'react'

const SelectBox = () => {
  return (
    <div className='w-full px-36 flex justify-around items-center py-3 m-auto border-b-[1px] border-slate-200'>
        <select name="expertise" id="expertise" className='bg-[#F3F3F3] pr-6 pl-2 py-2 rounded-md'>
            <option value="Expertise">Expertise</option>
        </select>
        <select name="Gender" id="Gender" className='bg-[#F3F3F3] pr-6 pl-2 py-2 rounded-md'>
            <option value="Gender">Gender</option>
        </select>
        <select name="Fees" id="Fees" className='bg-[#F3F3F3] pr-6 pl-2 py-2 rounded-md'>
            <option value="Fees">Fees</option>
        </select>
        <select name="Languages" id="Languages" className='bg-[#F3F3F3] pr-6 pl-2 py-2 rounded-md'>
            <option value="Languages">Languages</option>
        </select>
        <select name="All Filters" id="All Filters" className='bg-green-100 pr-6 pl-2 py-2 rounded-md'>
            <option value="All Filters">All Filters</option>
        </select>
    </div>
  )
}

export default SelectBox