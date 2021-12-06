// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import image from "../aurora.jpg"
import image2 from "../niagara.jpg"

// import { projects } from "../data";

export default function Projects2() {
  return (
    <section id="projects2" className="text-gray-400 bg-gray-900 body-font pt-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Past Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

            These are the projects that I have worked on in the past. Hover over the image to visit the Github Repo.


            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex grid-col m-4 pb-3">
              <div className="flex relative sm:w-1/2 w-100 h-100 mr-3">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 content-center opacity-0 hover:opacity-100">
                    <a
                    href="#resume"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Visit Github Repo
                    </a>
                </div>
              </div>
              <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
                 <h1 className="text-left title-font text-lg font-medium text-green-400 mb-1">
                    Ledge-It 
                  </h1>
                  <h2 className="text-left tracking-widest text-sm title-font font-medium text-white mb-1">
                    September 2021 - April 2022 
                  </h2>
                  <p className="text-left leading-relaxed"> Part of UBC Launchpad Project
                    <br className="hidden lg:inline-block" />
                    <br className="hidden lg:inline-block" />
                 </p>
                </div>
        </div>
        <div className="flex grid-col m-4 pb-3">
              <div className="flex relative sm:w-1/2 w-100 h-100 mr-3">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image2}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 content-center opacity-0 hover:opacity-100">
                    <a
                    href="#resume"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Visit Github Repo
                    </a>
                </div>
              </div>
              <div className="px-8 py-10 inset-0 relative w-full border-4 border-gray-800 bg-gray-900">
                 <h1 className="text-left title-font text-lg font-medium text-green-400 mb-1">
                    Healthier U 
                  </h1>
                  <h2 className="text-left tracking-widest text-sm title-font font-medium text-white mb-1">
                    December 2020 - February 2021 
                  </h2>
                  <p className="text-left leading-relaxed"> Side project to track my nutrition goals
                    <br className="hidden lg:inline-block" />
                    <br className="hidden lg:inline-block" />
                 </p>
                </div>
        </div>
      </div>
    </section>
  );
}