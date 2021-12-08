// import { CodeIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import sanityClient from "../Client.js";

export default function Projects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "project"] | order(endDate desc){
              title,
              slug,
              image{
                asset ->{
                    _id, 
                    url
                },
                alt
              },
              startDate,
              endDate,
              place,
              description,
              projectType,
              link,
              tags
          }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Past Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
            These are the projects that I have worked on in the past. 

            I worked on these projects to fortify my knowledge whilst learning new languages, and to practice good programming habits.
            
            Hover over the project image to visit the Project GitHub Repo!
          </p>
        </div>
        {projectData && projectData.map((project, index) => (
            <div className="flex grid-col m-4 pb-3">
                <div className="flex relative sm:w-1/2 w-100 h-100 mr-3">
                <img
                    alt= {project.title + ' image'}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src = {project.image.asset.url}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 content-center opacity-0 hover:opacity-100">
                    <a
                    href={project.link}
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Visit Github Repo
                    </a>
                </div>
                </div>
                <div className="px-8 py-10 inset-0 relative w-full border-4 border-gray-800 bg-gray-900">
                <h1 className="text-left title-font text-lg font-medium text-green-400 mb-1">
                    {project.title}
                    </h1>
                    <h2 className="text-left tracking-widest text-sm title-font font-medium text-white mb-1">
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </h2>
                    <p className="text-left leading-relaxed"> {project.description}
                    <br className="hidden lg:inline-block" />
                    <br className="hidden lg:inline-block" />
                </p>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}