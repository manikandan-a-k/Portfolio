import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div id="home" className="text-stone-300">
      <div className="flex flex-col items-center justify-center gap-10 md:gap-0 md:justify-center md:flex-row min-h-screen w-full md:items-center">

        <div className="w-full lg:w-1/2 flex flex-col items-center md:flex-row md:justify-center">
          <div className="image-container">
            <motion.img
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src="/profile.jpg"
              alt="Profile Image"
              className="rounded-2xl w-32 h-40 sm:w-40 sm:h-52 md:w-56 md:h-72 lg:w-80 lg:h-96 object-cover"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-[45%] flex flex-col space-y-4 items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              Hello, I'm
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#7b93fe] tracking-tight">
              Manikandan
            </h2>
          </motion.div>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl lg:text-3xl font-medium"
          >
            <span>- Aspiring </span>
            <span className="text-[#7b93fe]">
              <Typewriter
                words={["MERN Stack", "Full Stack"]}
                loop={0} 
                cursor
                cursorStyle=""
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span> Developer</span>
          </motion.p>

         
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="flex text-sm md:text-base items-center gap-4 md:gap-6 mt-6 flex-wrap justify-center"
          >
            <a
              href="/Manikandan.pdf"
              download
              className="py-2 w-28 md:w-36 text-center transition-transform duration-300 hover:scale-105 shadow-md rounded-md font-bold text-black border border-white/20 bg-[#7b93fe] hover:bg-[#6f83ea]"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="py-2 w-28 md:w-36 text-center transition-transform duration-300 hover:scale-105 shadow-md rounded-md font-bold border border-white/20 bg-black hover:bg-gray-800"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
