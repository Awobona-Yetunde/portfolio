"use client";

import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { Server, Group, Code, Website } from "lucide-react";

const AboutMe = () => {
  
  const textVariants = {
    hidden: { x: -100, opacity: 0 }, 
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    }, 
  };

  // Animation settings for the cards (slides from right)
  const cardVariants = {
    hidden: { x: 100, opacity: 0 }, // Start 100px to the right, invisible
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    }, // Slide to center with a delay
  };

  return (
    <section id="about" className="py-12 md:py-0">
      <div className="items-center min-h-[calc(100vh-6rem)]">
        <h2 className="text-center text-3xl md:text-4xl mb-8 md:mb-12 font-bold">
          About <span className="text-purple-800">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-24 items-center">
          {/* Text Section */}
          <motion.div
            className="flex flex-col w-[450px] gap-12 justify-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h3 className="font-bold text-2xl">Devoted Full-Stack Developer</h3>
            <p>
              I'm a full-stack developer with a strong focus on building
              scalable, responsive, and impactful digital experiences. I
              specialize in back-end and full-stack development using modern
              technologies and frameworks. My work is guided by a passion for
              clean design, efficient code, and user-centered functionality.
            </p>
            <p>
              I hold a National Diploma in Statistics, but it's been the
              real-world projects and continuous learning that have truly shaped
              my journey. I'm passionate about solving problems and always
              pushing to build software that makes a real impact
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card
              title="Web Development"
              description="Creating responsive, dynamic websites and web applications, with the use of modern frameworks and technologies."
              icon={Server}
            />
            <Card
              title="Back-end Development"
              description="Designing and developing robust, scalable server-side systems, APIs, and microservices using modern frameworks and technologies to power dynamic web applications and software systems."
              icon={Group}
            />
            <Card
              title="Software Engineering"
              description="Designing and implementing software solutions, with a focus on scalability, performance, and maintainability."
              icon={Code}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
