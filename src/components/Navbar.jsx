import React from 'react'
import { Link } from 'react-router-dom';
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedIn.svg";
import twitter from "../assets/twitter.svg";
const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="md:w-[90%] h-[10vh] mx-auto w-full py-4 flex flex-row justify-between items-center">
        <div className="md:text-2xl text-xl font-semibold">Deepanshu Sharma</div>
        <div className=" flex flex-row items-center gap-[1.5rem] w-[30%] justify-between text-lg">
          <a href="#home">
            <div>Home</div>
          </a>
          <a href="#about">
            <div>About</div>
          </a>
          <a href="#projects">
            <div>Projects</div>
          </a>
          <a href="#works">
            <div>Works</div>
          </a>
        </div>

        <div className="flex flex-row gap-[1rem] items-center">
          <a href="https://github.com/why-deepanshux">
            <div className="h-[40px] w-[40px]  rounded-full">
              <img src={github} alt="github icon" className="w-full" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/deepanshu-sharma-449b661ba/">
            <div className="h-[40px] w-[40px] rounded-full">
              <img
                src={linkedIn}
                alt="Linked In Logo"
                className="h-full w-full"
              />
            </div>
          </a>
          <div className="h-[40px] w-[40px] rounded-full bg-black">
            {/* <img src={twitter} alt="x.logo" className="h-full w-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
