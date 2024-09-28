import React from "react";

export default function Home() {
    return (
        <section id="home" className="text-gray-400 bg-gray-900 body-font min-h-screen flex items-center">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">  
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Hans-Randy
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I’m a software developer with a passion for building high-quality web APIs and applications. Explore my latest work, check out my projects, and learn more about how I can bring your ideas to life. Let’s create something amazing together!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}