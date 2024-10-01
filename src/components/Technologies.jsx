import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiRedux, SiPostman } from "react-icons/si";
import { FaNodeJs, FaGithub, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const technologies = [
  { icon: <RiReactjsLine />, name: "React", color: "#61DBFB" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiExpress />, name: "Express.js", color: "white" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#83CD29" },
  { icon: <RiJavascriptFill />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <IoLogoCss3 />, name: "CSS3", color: "#1572B6" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: <FaGitAlt />, name: "Git", color: "#F1502F" },
  { icon: <FaGithub />, name: "GitHub", color: "#181717" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" }
];

const Technologies = () => {
  return (
    <div className='pb-8 sm:pb-10 lg:pb-12'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='text-center mb-8 sm:mb-10 lg:mb-12 text-2xl sm:text-3xl lg:text-4xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className='border cursor-pointer border-white rounded-full px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-2 bg-black'
          >
            <div
              className='flex items-center justify-center text-2xl sm:text-3xl md:text-4xl'
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white'>
              {tech.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
