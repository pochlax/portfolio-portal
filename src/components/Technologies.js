import React, { useState, useEffect } from 'react';
import image from "../aurora.jpg"
import sanityClient from "../Client.js";

export default function Skills()
{
    const [backEndData, setBackEndData] = useState(null);
    const [frontEndData, setFrontEndData] = useState(null);
    const [otherData, setOtherData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "technology" && technologyType == "backEnd"]{
            name,
            image{
                asset ->{
                    _id, 
                    url
                },
                alt
            },
            technologyType,
        }`
        )
        .then((data) => setBackEndData(data))
        .catch(console.error);
        sanityClient
        .fetch(
            `*[_type == "technology" && technologyType == "frontEnd"]{
            name,
            image{
                asset ->{
                    _id, 
                    url
                },
                alt
            },
            technologyType,
        }`
        )
        .then((data) => setFrontEndData(data))
        .catch(console.error);
        sanityClient
        .fetch(
            `*[_type == "technology" && technologyType == "others"]{
            name,
            image{
                asset ->{
                    _id, 
                    url
                },
                alt
            },
            technologyType,
        }`
        )
        .then((data) => setOtherData(data))
        .catch(console.error);
    },[])

    return (
        <section className = "pt-20" id = "tech">
            <div className = "max-w-5xl mx-auto text-center justify-center py-12">
                <div className="flex flex-col w-full mb-20">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Technology Stack
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                        These are the projects that I have worked on in the past. Hover over the image to visit the Github Repo.


                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                {/* <div className = "flex flex-wrap justify-center pt-2 w-30">
                    <div className = "flex flex-col w-40 p-10 m-6 oveflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <h1 className = "text-center text-xl sm:text-2xl font-semibold mb-4"> Back End </h1>
                        <img src={image} 
                        alt = "Java" />
                        <p className = "m-3 text-xl sm:text-2xl font-semibold text-center"> Java </p>
                    </div>
                </div> */}
                <section className="container mx-auto pt-2">
                    <section className="grid grid-cols-3 gap-3">
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <p className = "text-2xl text-center text-gray sm:text-4xl font-semibold pb-3">
                            Back End
                            </p>
                            <div className = "flex grid grid-cols-2">
                                {backEndData && backEndData.map((tech, index) => (
                                    <div className = "flex flex-col px-2">
                                        <img src={tech.image.asset.url} alt = "python" className = "w-52 h-20"></img>
                                        <h1 className = "py-2"> {tech.name} </h1>
                                    </div>
                                ))}
                            </div>
                        </article>
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <p className = "text-2xl text-center text-gray sm:text-4xl font-semibold pb-3">
                            Front End
                            </p>
                            <div className = "flex grid grid-cols-2">
                                {frontEndData && frontEndData.map((tech, index) => (
                                    <div className = "flex flex-col px-2">
                                        <img src={tech.image.asset.url} alt = "python" className = "w-52 h-20"></img>
                                        <h1 className = "py-2"> {tech.name} </h1>
                                    </div>
                                ))}
                            </div>
                        </article>
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <p className = "text-2xl text-center text-gray sm:text-4xl font-semibold pb-3">
                            Dev Tools
                            </p>
                        </article>
                    </section>
                </section>
            </div>
        </section>
    )
}