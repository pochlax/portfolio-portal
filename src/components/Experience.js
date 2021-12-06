import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import image from "../aurora.jpg"
import image2 from "../niagara.jpg"
   
   export default function Experience() {
    return (
        <section className = "pt-20" id = "experience">
        <div className = "container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Work Experience
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                    These are the projects that I have worked on in the past. Hover over the image to visit the Github Repo.


                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                    facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                    fuga dolore.
                </p>
            </div>
<VerticalTimeline 
    layout = '1-column-left'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 41, 54)' }}
    date = "September 2021 - Present"
    dateClassName = "ml-5"
    iconStyle={{ background: 'rgb(18, 24, 38)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <div className = "flex grid-col-2">
        <div className = "flex flex-col mt-4 ml-5">
            <h3 className="vertical-timeline-element-title text-left text-green-400 text-2xl font-semibold">Rainforest Automation</h3>
            <h4 className="vertical-timeline-element-subtitle text-left">Vancouver, BC</h4>
            <p className= "text-left">
            Making memes and shooting myself
            </p>
        </div>
        <div className = "flex-1">
            <img className = "ml-auto m-4 object-right w-100 h-44"
                alt="gallery"
                src={image}
            />
        </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 41, 54)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 41, 54)' }}
    date = "September 2021 - Present"
    dateClassName = "ml-5"
    iconStyle={{ background: 'rgb(18, 24, 38)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <div className = "flex grid-col-2">
        <div className = "flex flex-col mt-4 ml-5">
            <h3 className="vertical-timeline-element-title text-left text-green-400 text-2xl font-semibold">UBC Launchpad</h3>
            <h4 className="vertical-timeline-element-subtitle text-left">Vancouver, BC</h4>
            <p className= "text-left">
            Collaborative Agile Environment
            </p>
        </div>
        <div className = "flex-1">
            <img className = "ml-auto m-4 object-right w-100 h-44"
                alt="gallery"
                src={image2}
            />
        </div>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
        </section>
    );
   };

   const customTheme = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
   };