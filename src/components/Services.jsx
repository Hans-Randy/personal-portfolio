/* Services.jsx
Hans-Randy Masamba
301378248
2024-09-28 */

import { ComputerDesktopIcon, CloudIcon } from "@heroicons/react/24/solid";
import { services } from "../data/data";

export default function Services() {
  return (
    <section id="services">
      <div className="container px-5 py-10 mx-auto text-center">
        <CloudIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Services
        </h1>
        <div className="flex flex-wrap m-4">
          {services.map((service) => (
            <div key={service.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <ComputerDesktopIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{service.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt={service.name}
                    src={service.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {service.name}
                    </span>
                    <span className="text-gray-500 font-medium ">
                      {service.description}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
