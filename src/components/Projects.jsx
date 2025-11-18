import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 flex flex-col items-center text-white px-6"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-10 text-teal-400">
        Proyectos
      </h2>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              bg-black/40 backdrop-blur-lg
              border border-white/10 
              rounded-2xl 
              p-6 
              shadow-lg shadow-black/30
              transition-all duration-300 
              hover:border-teal-400 
              hover:shadow-teal-400/20 
              hover:-translate-y-1
            "
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block 
                text-teal-400 
                border border-teal-400 
                px-4 py-2 rounded-lg 
                font-medium
                transition-all duration-300 
                hover:bg-teal-400 hover:text-black
                hover:shadow-lg hover:shadow-teal-400/20
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
