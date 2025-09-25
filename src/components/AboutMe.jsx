"use client";

import React from "react";
import Card from "./Card";
import { Server, Group, Code } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex flex-col items-center">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 font-bold">
          About <span className="text-purple-800">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8 items-center w-full">
          {/* Text Section */}
          <div className="w-full max-w-[18rem] sm:max-w-sm md:max-w-md flex flex-col gap-3 sm:gap-4 md:gap-5">
            <h3 className="font-bold text-base sm:text-lg md:text-xl">
              Devoted Full-Stack Developer
            </h3>
            <p className="text-[0.65rem] sm:text-xs md:text-sm">
              I'm a full-stack developer with a strong focus on building
              scalable, responsive, and impactful digital experiences. I
              specialize in back-end and full-stack development using modern
              technologies and frameworks. My work is guided by a passion for
              clean design, efficient code, and user-centered functionality.
            </p>
            <p className="text-[0.65rem] sm:text-xs md:text-sm">
              I hold a National Diploma in Statistics, but it's been the
              real-world projects and continuous learning that have truly shaped
              my journey. I'm passionate about solving problems and always
              pushing to build software that makes a real impact.
            </p>
          </div>

          {/* Card Section */}
          <div className="w-full max-w-[18rem] sm:max-w-sm md:max-w-md flex flex-col gap-2 sm:gap-3 md:gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
