import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className = "bg-red-600">
            <div className = "container mx-auto flex justify-between">
                <nav className = "flex">
                    <NavLink 
                        to= "/" 
                        className = "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 4xl font-bold cursive tracking-widest" 
                        activeClassName =  "text-white"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to = "/about" 
                        className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-red-700"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to = "/project"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to = "/posts"
                        className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-red-700"
                    >
                        Posts
                    </NavLink>
                </nav>
                <div className = "inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url = "https://linkedin.com/in/william-suryawidjaja/" 
                    className = "mr-4" 
                    target = "_blank" 
                    fgColor = "#fff" 
                    style = {{height:35, width:35}}/>
                    <SocialIcon 
                    url = "https://github.com/pochlax" 
                    className = "mr-4" 
                    target = "_blank" 
                    fgColor = "#fff" 
                    style = {{height:35, width:35}}/>
                    <SocialIcon 
                    url = "https://youtube.com" 
                    className = "mr-4" 
                    target = "_blank" 
                    fgColor = "#fff" 
                    style = {{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}