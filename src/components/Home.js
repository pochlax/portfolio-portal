import React from "react"
import image from "../aurora.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} 
            alt = "Aurora Borealis" 
            className = "absolute object-cover w-full h-full filter saturate-0"
            />
            <section className = "relative flex-column justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className = "text-6xl text-blue-500 text-center font-bold cursive leading-none lg:leading-snug home-name">
                    Hi, I'm William! 👋
                </h1>
                <h2 className = "text-4xl text-blue-500 text-center cursive ">
                    Full Stack Developer based in Vancouver, BC
                </h2>

            </section>
        </main>
    )
}