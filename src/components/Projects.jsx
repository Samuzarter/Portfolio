import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-10 text-[#64ffda]">
        Proyectos
      </h2>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              bg-black/40 backdrop-blur-lg 
              border border-white/10 
              rounded-xl p-6 
              shadow-lg 
              transition-all duration-300 
              hover:border-[#64ffda] 
              hover:shadow-[#64ffda]/30 
              hover:translate-y-[-4px]
            "
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-2 
                text-[#64ffda] 
                border border-[#64ffda] 
                px-4 py-2 rounded-lg 
                transition-all duration-300 
                hover:bg-[#64ffda] hover:text-black
              "
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
