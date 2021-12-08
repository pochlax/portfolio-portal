import React from "react"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#hero" className="ml-3 text-xl text-white hover:text-green-400">
                        William Suryawidjaja
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 text-white hover:text-green-400">
                        About Me
                    </a>
                    <a href="#projects" className="mr-5 text-white hover:text-green-400">
                        Projects
                    </a>
                    <a href="#tech" className="mr-5 text-white hover:text-green-400">
                        Skills
                    </a>
                    <a href="#experience" className="mr-5 text-white hover:text-green-400">
                        Experience
                    </a>
                </nav>
                <div className = "inline-flex py-3 px-3">
                    <SocialIcon 
                        url = "https://github.com/pochlax" 
                        className = "mr-4" 
                        target = "_blank" 
                        bgColor = "#6e5494"
                        fgColor = "#fff" 
                        style = {{height:35, width:35}}/>
                    <SocialIcon 
                        url = "https://linkedin.com/in/william-suryawidjaja/" 
                        className = "mr-4" 
                        target = "_blank" 
                        fgColor = "#fff" 
                        style = {{height:35, width:35}}/>  
                    <SocialIcon 
                        url = "mailto:wsuryawidjaja@gmail.com" 
                        className = "mr-4" 
                        target = "_blank" 
                        bgColor = "#fff"
                        fgColor = "#f00" 
                        style = {{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}