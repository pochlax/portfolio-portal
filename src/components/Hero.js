import React from 'react'
import Typical from 'react-typical'

export default function Hero() {
    return(
        <section id = "hero" className = "bg-gray-800 pt-20">
            <div>
                <h1 className = "text-green-400 ml-60 text-2xl pt-20 pb-5"> Hi, I am </h1>
                <div className = "text-6xl pb-10 font-extrabold ml-60">
                    <Typical loop = {Infinity} 
                            wrapper = "p" 
                            steps = {['William Suryawidjaja 👋.', 4000, 
                                    'a computer scientist @ UBC 📚.', 
                                    1500,
                                    'a full-stack developer 💻.', 
                                    1000,
                                    'a sport enthusiast ⚽ 🏀.',
                                    1000]}/>
                </div>
                <div className = "ml-60 text-2xl pb-72 w-96">
                    <h1> I am an aspiring full-stack software developer with a passion for learning about new technologies, tackling challenging projects, and working in collaborative environments. </h1>
                </div>
            </div>
        </section>
    )
}