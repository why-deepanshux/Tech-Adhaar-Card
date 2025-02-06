import React from 'react'
import me from '../assets/me.svg'
import meow from '../assets/meow.svg'
import cube from '../assets/cube.svg'
import { Link } from 'react-router-dom'
const Homie = () => {
  return (
    <div className="w-full bg-inherit mt-8 mb-8 ">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col w-[49%] ">
            <div className="w-full rounded-2xl Roboto-font text-6xl font-[800] text-center bg-[var(--primary-color)] text-[var(--background-color)] py-8">
              PORTFOL<span className="text-[#F2701D]">IO</span>
            </div>
            <div className="w-full border-2 border-[var(--primary-color)] rounded-2xl inter-font text-xl font-[400] px-4 py-6 retro-shadow transform transition-transform duration-300 ease-in-out hover:scale-105 mt-4">
              I'm a{" "}
              <span className="font-[600] text-2xl">Software Engineer</span>{" "}
              <br /> who builds immersive and user friendly applications that
              user loves .<br />
              <a
                href="https://drive.google.com/file/d/1in9ZSGt0uJKJQpPvOIf3M0wdJjhtYCIc/view?usp=sharing"
                target="_blank"
              >
                <button className="rounded-4xl border-2 px-6 py-2  bg-[var(--primary-color)] text-[var(--background-color)] mt-1 text-lg cursor-pointer">
                  Resume
                </button>
              </a>
            </div>
            <div className="flex flex-row mt-4 w-full justify-between">
              <div className="flex flex-col border-2 rounded-2xl w-[48%] py-4 justify-center items-center retro-shadow text-lg font-[500] transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="w-[80%] text-center border-b-2 py-2 hover:font-[700] cursor-pointer">
                  <Link to="/">HOME</Link>
                </div>
                <div className="w-[80%] text-center border-b-2 py-2 hover:font-[700] cursor-pointer">
                  <Link to="/about">ABOUT</Link>
                </div>
                <div className="w-[80%] text-center py-2 hover:font-[700] cursor-pointer">
                  <Link to="/contact">CONTACT ME</Link>
                </div>
              </div>
              <div className="flex flex-col w-[48%] border-2 rounded-2xl justify-start items-center retro-shadow text-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <div className="w-full text-center font-[700] text-2xl py-2">
                  <Link to="/projects">PROJECTS</Link>
                </div>
                <Link to="/projects" className='w-[65%] items-center'>
                  <img
                    src={cube}
                    alt="project-logo"
                    className="w-full animation-bounce "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[49%] max-h-[95vh] flex justify-center items-center border-4 border-[var(--primary-color)] rounded-2xl retro-shadow-side transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={meow}
              alt="My Character image"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="w-full mt-4 border-2 rounded-2xl retro-shadow-side text-2xl text-center py-4 font-[700] transform transition-transform duration-300 ease-in-out hover:scale-105">
          Skills
        </div>
      </div>
    </div>
  );
}

export default Homie
