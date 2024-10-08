/* Projects.jsx
Hans-Randy Masamba
301378248
2024-09-28 */

import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My Work
            Explore a selection of my projects, where creativity meets functionality. Each project reflects my passion for building efficient, scalable, and user-friendly solutions that solve real-world problems. From web applications to mobile-friendly designs, here’s a look at what I’ve been working on.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full h-[300px] p-4" // Set a fixed height
            >
              <div className="flex relative h-full"> {/* Ensure the parent is full height */}
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                  style={{ objectFit: "cover" }} // Maintain aspect ratio while filling
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
