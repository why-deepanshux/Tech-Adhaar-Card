import React from 'react'
import Homie from './Homie';
const Home = () => {
  return (
    <div className="w-[80%] mx-auto bg-[var(--background-color)] inter-font flex flex-col">
      <div className="flex flex-row justify-between py-4 content-center">
        <div className="text-4xl font-[400] tracking-wider">Deepanshu Sharma</div>
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="h-[20px] w-[20px] bg-black "></div>
          <div className="h-[20px] w-[20px] bg-black "></div>
          <div className="h-[20px] w-[20px] bg-black "></div>
        </div>
      </div>
       <Homie/>
    </div>
  );
}

export default Home
