import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"
const container=(delay)=>({
hidden:{x:-100,opacity:0},
visible:{x:0,opacity:1,
  transition:{duration:0.5,delay:delay}
}
})

const Hero = () => {
  return (
    <div
      id="home"
      className="text-stone-300 pb-4  border-b border-neutral-800 lg:px-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center w-full min-h-screen justify-center">
        {/* Left Side - Text Section */}
        <div className="w-full lg:w-[45%]">
          <div className="flex flex-col gap-4  items-center lg:items-start text-center lg:text-left">
            <motion.div variants={container(0)}
            initial="hidden"
            animate="visible"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl  tracking-tight">
                Hello, I'm
              </h3>
              <h2 className="text-5xl sm:text-5xl lg:text-7xl  text-[#7b93fe]   tracking-tight ">
                Manikandan
              </h2>
            </motion.div>

            <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="text-xl sm:text-3xl lg:text-4xl font-medium">
              <span>- Aspiring </span>
              <span className="text-[#7b93fe]">
                <Typewriter
                  words={["MERN Stack", "Full Stack"]}
                  loop={0} // Infinite loop
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <span> Developer</span>
            </motion.p>

            {/* Buttons */}
            <motion.div 
            variants={container(1)}
            initial="hidden"
            animate="visible"
             className="flex text-sm md:text-base items-center gap-6 mt-4 flex-wrap justify-center lg:justify-start">
              <a
                href="/Manikandan_Resume.pdf"
                download
                className="py-[10px] w-32 md:w-40 text-center transition-transform duration-300 hover:scale-105 shadow-md rounded-md font-bold text-black border border-white/20 bg-[#7b93fe] hover:bg-[#6f83ea] "
              >
                Resume
              </a>
              <a
                href="#contact"
                className="py-[10px] w-32 md:w-40 shadow-md text-center transition-transform duration-300 hover:scale-105 rounded-md font-bold border border-white/20 bg-black hover:bg-gray-800 "
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex justify-center lg:justify-end items-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.5}}
              src="/profile.jpg"
              alt="Profile Image"
              className="rounded-2xl w-48 h-60 sm:w-56 sm:h-72 lg:w-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
