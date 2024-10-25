import React from "react";
import { ABOUT_TEXT } from "../constants";
import Technologies from "../components/Technologies";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="text-neutral-200 pb-4 border-b border-neutral-800 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mx-4 my-8 lg:my-20 text-3xl lg:text-4xl text-center"
      >
        🌌 About <span className="text-neutral-500">Me 🦄</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <p className="text-[14px] sm:text-[16px] md:text-xl lg:text-2xl p-2 max-w-lg sm:max-w-xl lg:max-w-3xl text-start leading-relaxed">
          {ABOUT_TEXT}
        </p>
      </motion.div>

     

      <div className="my-8 sm:mt-12 lg:my-20">
        <Technologies />
      </div>
    </div>
  );
};

export default About;
