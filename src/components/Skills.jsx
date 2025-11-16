import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center text-white px-6 pt-24"
    >
      {/* Título principal */}
      <h2 className="text-4xl font-bold mb-12 text-[#64ffda]">
        Habilidades
      </h2>

      {/* CONTENEDOR GENERAL */}
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* FRONTEND */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">
            Lenguajes de Programación
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.Lenguajes.map((skill, i) => (
              <div
                key={i}
                className="
                  bg-black/40 backdrop-blur-lg 
                  border border-white/10 
                  rounded-xl p-4 text-center 
                  shadow-lg 
                  transition-all duration-300 
                  hover:border-[#64ffda] hover:shadow-[#64ffda]/30 
                  hover:scale-105
                "
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">
            Backend
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.backend.map((skill, i) => (
              <div
                key={i}
                className="
                  bg-black/40 backdrop-blur-lg 
                  border border-white/10 
                  rounded-xl p-4 text-center 
                  shadow-lg 
                  transition-all duration-300 
                  hover:border-[#64ffda] hover:shadow-[#64ffda]/30 
                  hover:scale-105
                "
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">
            Herramientas & Cloud
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.tools.map((skill, i) => (
              <div
                key={i}
                className="
                  bg-black/40 backdrop-blur-lg 
                  border border-white/10 
                  rounded-xl p-4 text-center 
                  shadow-lg 
                  transition-all duration-300 
                  hover:border-[#64ffda] hover:shadow-[#64ffda]/30 
                  hover:scale-105
                "
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.soft.map((skill, i) => (
              <div
                key={i}
                className="
                  bg-black/40 backdrop-blur-lg 
                  border border-white/10 
                  rounded-xl p-4 text-center 
                  shadow-lg 
                  transition-all duration-300 
                  hover:border-[#64ffda] hover:shadow-[#64ffda]/30 
                  hover:scale-105
                  flex items-center justify-center
                "
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
