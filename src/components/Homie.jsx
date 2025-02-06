import React from 'react'
import me from '../assets/me.svg'
import meow from '../assets/meow.png'
import cube from '../assets/cube.svg'
const Homie = () => {
  return (
    <div className="w-full bg-inherit mt-8 mb-8 ">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col w-[49%] ">
            <div className="w-full rounded-2xl Roboto-font text-6xl font-[800] text-center bg-[var(--primary-color)] text-[var(--background-color)] py-8">
              PORTFOL<span className="text-[#F2701D]">IO</span>
            </div>
            <div className="w-full border-2 border-[var(--primary-color)] rounded-2xl inter-font text-xl font-[400] px-4 py-8 retro-shadow transform transition-transform duration-300 ease-in-out hover:scale-105 mt-4">
              I'm a{" "}
              <span className="font-[600] text-2xl">Software Engineer</span>{" "}
              <br /> who builds immersive and user friendly applications that
              user loves .
            </div>
            <div className="flex flex-row mt-4 w-full justify-between">
              <div className="flex flex-col border-2 rounded-2xl w-[48%] py-4 justify-center items-center retro-shadow text-lg font-[500] transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="w-[80%] text-center border-b-2 py-2 hover:font-[700]">
                  HOME
                </div>
                <div className="w-[80%] text-center border-b-2 py-2 hover:font-[700]">
                  ABOUT
                </div>
                <div className="w-[80%] text-center py-2 hover:font-[700]">
                  CONTACT ME
                </div>
              </div>
              <div className="flex flex-col w-[48%] border-2 rounded-2xl justify-start items-center retro-shadow text-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="w-full text-center font-[700] text-2xl py-2">
                  PROJECTS
                </div>
                <img
                  src={cube}
                  alt="project-logo"
                  className="w-[65%] animation-bounce "
                />
              </div>
            </div>
          </div>
          <div className="w-[49%] flex justify-center items-center border-4 border-[var(--primary-color)] rounded-2xl h-[90vh] retro-shadow-side transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={meow}
              alt="My Character image"
              className="object-cover h-[100%]"
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
