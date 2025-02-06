import React from 'react'
import Homie from './Homie';
import github from '../assets/github.svg'
import linkedIn from "../assets/linkedIn.svg"
import twitter from "../assets/twitter.svg"
const Home = () => {
  return (
    <div className="w-[80%] mx-auto bg-[var(--background-color)] inter-font flex flex-col">
      <div className="flex flex-row justify-between py-4 content-center">
        <div className="text-4xl font-[400] tracking-wider">
          Deepanshu Sharma
        </div>
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="h-[40px] w-[40px]  rounded-full">
            <img src={github} alt="github icon" className="w-full" />
          </div>
          <div className="h-[40px] w-[40px] rounded-full">
            <img
              src={linkedIn}
              alt="Linked In Logo"
              className="h-full w-full"
            />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-black">
            {/* <img src={twitter} alt="x.logo" className="h-full w-full" /> */}
          </div>
        </div>
      </div>
      <Homie />
    </div>
  );
}

export default Home
