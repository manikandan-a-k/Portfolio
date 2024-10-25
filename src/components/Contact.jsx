import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div id="contact" className="text-neutral-200 flex flex-col items-center px-4">
      <h2 className="my-5 text-3xl lg:text-4xl text-center">
        🌌 Contact 🦄
      </h2>


      <div className="flex flex-wrap justify-center mt-10 items-center space-x-6">
     
        <a
          href="https://www.linkedin.com/in/manikandan-ak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <motion.img
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
        </a>

    
        <a
          href="https://github.com/manikandan-a-k"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <motion.img
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            src="/github.png"
            alt="GitHub"
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
        </a>

       
        <a
          href="mailto:manikandanalagesan08@gmail.com"
          className="hover:scale-110 transition-transform duration-300"
        >
          <motion.img
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            src="/gmail.png"
            alt="Gmail"
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
        </a>
      </div>

    
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/art.webp"
          alt="Art"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lg rounded-lg"
        />
      </div>

     
      <p className="text-center mt-5 pb-5 text-sm lg:text-base">
        Made with ❤️ by Manikandan A
      </p>
    </div>
  );
};

export default Contact;
