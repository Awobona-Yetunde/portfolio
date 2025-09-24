import { Github } from "lucide-react";
import React from "react";

const Projects = () => {
  const projects = [
    {
      image: "../images/recruitement.jpg",
      title: "Recruitment Website",
      details:
        "A responsive fullstack website built with next.js, tailwind css and python",
      languages: ["Next.js", "Python", "Tailwind CSS", "Javascript"],
      demoUrl:
        "https://recruitment-site-git-main-awobona-yetundes-projects.vercel.app/",
      codeUrl: "https://github.com/Awobona-Yetunde/recruitment-site",
    },
    {
      image: "../images/booking.jpg",
      title: "Client Booking System",
      details:
        "A responsive website built with next.js, javascript, tailwind css. I only built the landing page of this website. ",
      languages: ["Next.js", "Javascript", "Tailwind CSS"],
      demoUrl: "https://teamc-client-booking-system-applica-alpha.vercel.app/",
      codeUrl:
        "https://github.com/favouritesam/teamc-client-booking-system-applications",
    },
    {
      image: "../images/quiz.jpg",
      title: "QUIZ Website",
      details:
        "A responsive website built with html, javascript, tailwind css.",
      languages: ["HTML", "CSS", "JavaScript"],
    
      codeUrl: "https://github.com/Awobona-Yetunde/quizapp",
    },
    {
      image: "../images/ecommerce.jpg",
      title: "Amazon E-commerce clone",
      details:
        "A responsive amazon clone website built with html, javascript, css",
      languages: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://awobona-yetunde.github.io/Amazon-clone/",
      codeUrl: "https://github.com/Awobona-Yetunde/Amazon-clone",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-scree flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-purple-800">My</span> Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold  mb-2">
                  {project.title}
                </h3>
                <p className=" mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages.map((language, langIndex) => (
                    <button
                      key={langIndex}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                    >
                      {language}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-purple-600 transition-colors"
                  >
                    View Project
                  </a>
                  <div className=" bg-black text-white border border-white flex gap-2 rounded-lg px-4 py-2 hover:border-purple-500">
                    <Github />
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block  font-medium transition-colors"
                    >
                      Code base
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
