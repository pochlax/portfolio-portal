import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import sanityClient from "../Client.js";
   
export default function Experiences() {
    const [experienceData, setExperienceData] = useState(null);

    useEffect(() => {
        console.log("Hello")
        sanityClient
        .fetch(
            `*[_type == "experience"] | order(endDate desc){
              company,
              position,
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
              link,
              tags
          }`
        )
        .then((data) => setExperienceData(data))
        .catch(console.error)
    }, []);

    return (
        <section className = "pt-20" id = "experience">
            <div className = "container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Work Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                        Working collaboratively with fellow passionate programmers has allowed us to develop extensive projects, that are more intricate and 

                        tackle increasingly complex problems that wouldn't be possible to do alone. In addition, I enjoy discussing and analyzing the varying points of views 
                        
                        that comes by working as a team. 

                    </p>
                </div>

                <VerticalTimeline 
                    layout = '1-column-left'>
                    {experienceData && experienceData.map((experience, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 41, 54)' }}
                            date = {new Date(experience.startDate).toLocaleDateString() + " - " + new Date(experience.endDate).toLocaleDateString()}
                            dateClassName = "ml-5"
                            iconStyle={{ background: 'rgb(18, 24, 38)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <div className = "flex grid-col-2">
                                <div className = "flex flex-col mt-4 ml-5 w-2/3">
                                    <h3 className="vertical-timeline-element-title text-left text-green-400 text-2xl font-semibold">{experience.company}</h3>
                                    <h4 className="vertical-timeline-element-subtitle text-left">{experience.position}</h4>
                                    <h4 className="vertical-timeline-element-subtitle text-left">{experience.place}</h4>
                                    <p className= "text-left">
                                    {experience.description}
                                    </p>
                                </div>
                                <div className = "flex-1 w-1/3 ml-5">
                                    <img className = "ml-auto m-4 object-right w-100 h-40"
                                        alt="gallery"
                                        src={experience.image.asset.url}
                                    />
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
   };