import React from 'react'
import loader from '../assets/loader.gif'
const Loader = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-white'>
        <img src={loader} alt="" className='h-[200px] w-[300px]' />
        <div className='text-xl font-semibold'>Loading....</div>
    </div>
  )
}

export default Loader
