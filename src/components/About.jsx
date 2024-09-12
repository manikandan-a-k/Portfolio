import React from "react";
import { ABOUT_TEXT } from "../constants";
import Technologies from "../components/Technologies";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div
      id="about"
      className=" text-neutral-200 pb-4 border-b border-neutral-800   px-4 sm:px-6 lg:px-8"
    >
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-5 lg:my-20 text-3xl lg:text-4xl text-center">
        🌌 About <span className="text-neutral-500">Me 🦄</span>
      </motion.h2>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1}}
       className="flex justify-center">
        <p className="text-[15px]  md:text-2xl p-2 max-w-xl lg:max-w-3xl text-start">
          {ABOUT_TEXT}
        </p>
      </motion.div>

      <div className="mt-10 lg:mt-20">
        <Technologies />
      </div>
    </div>
  );
};

export default About;
