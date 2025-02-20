import React from 'react'
import main from "../assets/main.mp4"
const Home2 = () => {
  return (
    <div
      id="home"
      className="w-[90%] mt-4 h-[90vh] flex md:flex-row flex-col-reverse justify-between mx-auto"
    >
      <div className="w-full md:w-[45%] flex flex-col justify-center px-2 ">
        <div className="text-4xl font-semibold">Hello</div>
        <div className="text-4xl font-semibold">
          I'm <span className="">Deepanshu Sharma</span>
        </div>
        <div className="text-2xl text-gray-600 py-2">
          A Software Engineer and Web Developer
        </div>
        <a
          href="https://drive.google.com/file/d/1HURLDHKJhTXDBm9IczTsN6kGGOch8m_J/view?usp=sharing"
          target="_blank"
        >
          <button className=" px-8 py-2  bg-[var(--primary-color)] text-[var(--background-color)] mt-1 text-lg cursor-pointer">
            Resume
          </button>
        </a>
      </div>

      <div className="md:w-[55%] w-full flex justify-end items-center">
        <video
          src={main}
          autoPlay
          loop
          muted
          className="h-full border-none"
          controls={false}
        />
      </div>
    </div>
  );
}

export default Home2
