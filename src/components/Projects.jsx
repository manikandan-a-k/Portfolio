import React from "react";
import { PROJECTS } from "../constants/index";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 mx-4 lg:my-20 text-3xl lg:text-4xl text-center"
      >
        🌌 Projects 🦄
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 border flex flex-col cursor-pointer justify-between space-y-4 p-6 bg-black rounded-lg border-white/20 transition-transform duration-300 hover:scale-105 max-w-[90%] md:max-w-full mx-auto"
          >
            <div className="flex flex-col gap-2">
              <h6 className="mb-2 font-semibold text-white text-lg sm:text-xl">
                {project.title}
              </h6>
              <div className="w-full h-32 sm:h-40 transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover object-center rounded mb-4"
                />
              </div>
              <div className="mb-2">
                <p className="text-neutral-400 text-ellipsis line-clamp-4 text-xs md:text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap mb-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded-md border border-white/20 px-2 py-1 text-xs sm:text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white cursor-pointer text-sm"
              >
                Github <BsArrowRight className="ml-2" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 rounded-md cursor-pointer text-sm transition-colors duration-300 hover:bg-gray-200"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
