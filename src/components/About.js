import React from "react";
import image from "../aurora.jpg"
import Resume from "../Resume.pdf"

export default function About() {
  return (
    <section id="about" className = "pt-20">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
          <p className="text-justify mb-8 leading-relaxed">
            Hi! I'm William Suryawidjaja, an undergraduate Student in the University of British Columbia; majoring in Computer Science, and minoring in Data Science. 
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            As a developer, I am curious, collaborative and result-driven. I strive to produce code that is simple, easily scalable and reusable. 
            Through my experiences of working with numerous fellow developers, I have learnt to become a great communicator and quickly adapt to my work environment. 
            In my free time, I love to explore new technologies that I can implement to improve the code that I create.
          </p>
          <div className="flex justify-center">
            <a
              href={Resume}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get my Resume!
            </a>
            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Past Projects
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src= {image}
          />
        </div>
      </div>
    </section>
  );
}