import React from 'react'
import project1 from '../assets/project1.png'
import githubwhite from '../assets/githubwhite.svg'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.jpg'
const Projects = () => {
  return (
    <div
      id="projects"
      className="md:w-[90%] w-[98%] mt-8 flex flex-col mx-auto "
    >
      <div className="flex flex-row items-center gap-[1rem] ">
        <div className="inline text-4xl font-semibold">Projects</div>
        <div className="h-[3px] flex-1 bg-black slider-animation"></div>
      </div>
      <div className="flex flex-col mt-4 justify-evenly w-full">
        <div
          id="Project-1"
          className="flex  md:flex-row flex-col gap-[1rem] scroll-animation"
        >
          <div className="bg-white">
            <img
              src={project1}
              alt=""
              className="max-h-[250px] max-w-[500px] w-auto h-auto border-2 retro-shadow"
            />
          </div>
          <div className="flex-1 flex-col p-4">
            <div className="text-2xl font-semibold">
              TL-2 : A E-commerce Product Tracker
            </div>
            <div className="text-md text-gray-500 mt-2">
              A web application that can track price and stock availabilty for
              an ecommerce product for you. It uses a web scraper to extract the
              price and send you an email whenever price drops or a threshold
              achieved.
            </div>
            <div className="flex flex-row gap-[1rem]">
              <a
                href="https://github.com/why-deepanshux/Thik-Thik-Laga-Lo-TTLL-"
                target="_blank"
              >
                <button className="secondary-button px-4 py-1 mt-2">
                  <img src={githubwhite} height={25} width={25} />
                  <div>GitHub</div>
                </button>
              </a>
              <a href="https://tl2-v1.vercel.app/" target="_blank">
                <button className="secondary-button px-4 py-1 mt-2">
                  <div>Visit</div>
                </button>
              </a>
            </div>

            <div className="flex-end flex flex-row flex-wrap mt-2 md:mt-4 gap-[1rem]">
              <div className="project-skill">NextJs</div>
              <div className="project-skill">Typescript</div>
              <div className="project-skill">MongoDB</div>
            </div>
          </div>
        </div>

        {/* project 1 */}
        <div
          id="Project-2"
          className="flex  md:flex-row flex-col gap-[1rem] scroll-animation mt-8"
        >
          <div className="bg-white">
            <img
              src={project2}
              alt=""
              className="max-h-[250px] max-w-[500px] w-auto h-auto border-2 retro-shadow"
            />
          </div>
          <div className="flex-1 flex-col p-4">
            <div className="text-2xl font-semibold">
              Being Baniya : Expense Manager
            </div>
            <div className="text-md text-gray-500 mt-2">
              A web app that lets you manage your expenses at ease. Not only you
              can manage expense your expenses , it also provides you with
              splitwise functionality where you can add you can manage expenses
              with friends.
            </div>
            <div className="flex flex-row gap-[1rem]">
              <a
                href="https://github.com/why-deepanshux/Being-Baniya"
                target="_blank"
              >
                <button className="secondary-button px-4 py-1 mt-2">
                  <img src={githubwhite} height={25} width={25} />
                  <div>GitHub</div>
                </button>
              </a>
              <a href="https://being-baniya.vercel.app/" target="_blank">
                <button className="secondary-button px-4 py-1 mt-2">
                  <div>Visit</div>
                </button>
              </a>
            </div>

            <div className="flex-end flex flex-row flex-wrap mt-2 md:mt-4 gap-[1rem]">
              <div className="project-skill">React</div>
              <div className="project-skill">JavaScript</div>
              <div className="project-skill">Firebase</div>
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div
          id="Project-3"
          className="flex  md:flex-row flex-col gap-[1rem] scroll-animation mt-8"
        >
          <div className="bg-white">
            <img
              src={project3}
              alt=""
              className="max-h-[250px] max-w-[400px] w-auto h-auto border-2 retro-shadow"
            />
          </div>
          <div className="flex-1 flex-col p-4">
            <div className="text-2xl font-semibold">
              Algo How : Path Finding Algorithm Visualizer
            </div>
            <div className="text-md text-gray-500 mt-2">
              A web app to visualize path finding algorithms "DFS" , "BFS" ,
              "Dijkstras" using beautiful UI.
            </div>
            <div className="flex flex-row gap-[1rem]">
              <a
                href="https://github.com/why-deepanshux/Being-Baniya"
                target="_blank"
              >
                <button className="secondary-button px-4 py-1 mt-2">
                  <img src={githubwhite} height={25} width={25} />
                  <div>GitHub</div>
                </button>
              </a>
              <a href="https://being-baniya.vercel.app/" target="_blank">
                <button className="secondary-button px-4 py-1 mt-2">
                  <div>Visit</div>
                </button>
              </a>
            </div>

            <div className="flex-end flex flex-row flex-wrap mt-2 md:mt-4 gap-[1rem]">
              <div className="project-skill">React</div>
              <div className="project-skill">JavaScript</div>
              <div className="project-skill">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
