"use client";

import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion"; 

const Hero = () => {
  
  const textVariants = {
    hidden: { x: -100, opacity: 0 }, // Start 100px to the left, invisible
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  
  const imageVariants = {
    hidden: { x: 100, opacity: 0 }, // Start 100px to the right, invisible
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    }, 
  };

  return (
    <section id="hero" className="py-5">
      <div className="flex flex-col gap-12 md:flex-row md:gap-30 min-h-[calc(100vh-6rem)] items-center justify-center">
        
        <motion.div
          className="w-[450px] flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="font-bold text-5xl">
            Hi, I'm <span className="text-purple-700">Awobona</span> Yetunde
          </h2>
          <p className="font-semibold">I am a Fullstack Developer</p>
          <p>
            I craft innovative software solutions that drive impact. With
            expertise in full-stack development, I transform concepts into
            reality, creating interfaces that are both intuitive and engaging.
          </p>
          <div className="flex gap-5">
            <button className="bg-purple-500 rounded-lg px-4 py-2">
              <a href="#contacts">Contact Me</a>
            </button>
            <button className="bg-purple-500 rounded-lg px-4 py-2 flex gap-2 items-center">
              <a href="/resume.pdf" download>
                Resume
              </a>
              <Download />
            </button>
          </div>
        </motion.div>

        
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <img
            src="/images/mypic.jpg"
            className="h-[300px] w-[300px] rounded-full"
            alt="Awobona Yetunde"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
