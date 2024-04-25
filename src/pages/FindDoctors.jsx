import React from 'react'
import FindDoctorsMain from '../components/FindDoctorsMain'
import SelectBox from '../components/SelectBox'
import Checks from '../components/Checks'
import DoctorCards from '../components/DoctorCards'

const FindDoctors = () => {
  return (
    <>
      <FindDoctorsMain/>
      <SelectBox/>
      <Checks/>
      <DoctorCards/>
    </>
  )
}

export default FindDoctors