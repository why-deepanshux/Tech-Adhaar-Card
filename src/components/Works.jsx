import React from 'react'
import jobseeker from '../assets/jobseeker.png'
const Works = () => {
  return (
  <div className="md:w-[90%] w-[98%] mt-8 flex flex-col mx-auto">
    <div className="flex flex-row items-center gap-[1rem] ">
      <div className="inline text-4xl font-semibold">Works</div>
      <div className="h-[3px] flex-1 bg-black slider-animation"></div>
    </div>
    <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
        <img src={jobseeker} alt="" height={300} width={300} />
        <div className=' text-2xl font-semibold'>Somebody Give this smart talented guy a Job</div>
    </div>
  </div>);
}

export default Works
