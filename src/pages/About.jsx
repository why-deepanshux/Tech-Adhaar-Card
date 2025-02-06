import React from 'react'
import { Link } from 'react-router-dom'
import backArrow from '../assets/backArrow.svg'
import aboutImg from '../assets/aboutImg.svg'
import esckey from '../assets/esckey.svg'
const About = () => {
  return (
    <div className="w-[80%] h-full mx-auto">
      <div className="w-full flex flex-col py-4">
        <Link to="/">
          <button className="text-xl border-2 rounded-4xl light-button cursor-pointer px-8 py-2 font-[500] flex flex-row gap-2 justify-center items-center">
            <img src={backArrow} height={25} width={30} alt="arrow" />
            Back
          </button>
        </Link>

        <div className="text-4xl font-[600] inter-font mt-8">About Me</div>

        <div className="flex flex-row justify-between w-full px-2 mt-8">
          <div className="w-[30%] ">
            <img
              src={aboutImg}
              alt="about image"
              className="retro-shadow-side rounded-2xl"
            />
          </div>
          <div className="w-[65%] flex flex-col">
            <img
              src={esckey}
              alt=""
              height={100}
              width={100}
              className="transform transition-transform duration-300 ease-in-out hover:scale-80 cursor-pointer"
            />
            <div className="w-[95%] mx-auto mt-4 retro-shadow-side border-4">
              <div className="border-b-4 py-1 px-2 text-xl font-[500] inter-font">
                Hey! I'm Deepanshu, a software developer based in India.
              </div>
              <div className="text-[1rem] inter-font px-2 py-2">
                I love building applications that make an impact. From crafting
                seamless, smooth, and visually appealing UIs to developing
                fully-fledged web applications, I enjoy every step of the
                process. Designing, innovating, and solving complex problems
                keep me motivated.
                <br />
                <br /> I have a strong grasp of Data Structures & Algorithms and
                am currently diving into the world of Artificial Intelligence &
                Machine Learning. If you want to discuss ideas, collaborate, or
                just enjoy some chai with my guitar, feel free to reach out!
                <br />
                <Link to="/contact">
                  <button className="text-[var(--background-color)] bg-[var(--primary-color)] border-2 rounded-4xl mt-2 px-4 py-2 cursor-pointer">
                    Contact Me{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
