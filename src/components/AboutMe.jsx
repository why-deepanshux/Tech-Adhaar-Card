import React from 'react'
import Skills from './Skills';
const AboutMe = () => {
  return (
    <div
      id="about"
      className="md:w-[90%] w-[98%] mt-8 flex flex-col px-4 py-4 mx-auto"
    >
      <div className="text-4xl font-semibold flex flex-row items-center gap-2">
        <div className="inline">About</div>
        <div className="h-[3px] flex-1 bg-black"></div>
      </div>

      <div className="flex md:flex-row flex-col w-full mt-4 justify-between">
        <div className="md:w-[45%] flex flex-col gap-4 justify-start">
          <div className="text-gray-500 text-lg bg-white retro-shadow w-full border-2 p-2">
            Hey! I'm Deepanshu, a software developer based in India. <br />
            I love building applications that make an impact.From crafting
            seamless, smooth, and visually appealing UIs to developing
            fully-fledged web applications, I enjoy every step of the process.
            <br /> Designing, innovating, and solving complex problems keep me
            motivated.
          </div>
          <div className='retro-shadow bg-white border-2 flex flex-col w-full p-2'>
            <div className='text-2xl font-semibold mb-1'>Achievements</div>
            <div className='text-lg text-gray-500'>In Top 5 teams Hack The League and won the title of best ideation among 100+ teams from 10+ cities, Organized by JECRC University ,Jaipur.</div>
          </div>
        </div>

        <div className='md:w-[52%] bg-white retro-shadow border-2 p-2'>
          <Skills/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
