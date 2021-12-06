import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        // <header className = "bg-red-600">
        //     <div className = "container mx-auto flex justify-between">
        //         <nav className = "flex">
        //             <NavLink 
        //                 to= "/" 
        //                 activeClassName =  "text-white"
        //                 className = "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest" 
        //             >
        //                 William Suryawidjaja
        //             </NavLink>
        //             <NavLink 
        //                 to = "/about" 
        //                 className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
        //                 activeClassName = "text-red-100 bg-red-700"
        //             >
        //                 About
        //             </NavLink>
        //             <NavLink 
        //                 to = "/project"
        //                 className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
        //                 activeClassName = "text-red-100 bg-red-700"
        //             >
        //                 Projects
        //             </NavLink>
        //             <NavLink 
        //                 to = "/posts"
        //                 className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
        //                 activeClassName = "text-red-100 bg-red-700"
        //             >
        //                 Posts
        //             </NavLink>
        //         </nav>
        //     </div>
        // </header>
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-white hover:text-green-400">
            William Suryawidjaja
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects2" className="mr-5 text-white hover:text-green-400">
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