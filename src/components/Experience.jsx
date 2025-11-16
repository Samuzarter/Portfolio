import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-10 text-[#64ffda]">
        Experiencia
      </h2>

      {/* Contenedor de tarjetas */}
      <div className="w-full max-w-4xl space-y-6">
        {experience.map((job) => (
          <div
            key={job.id}
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
            {/* Rol y Empresa */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-2xl font-bold">{job.role}</h3>
              <span className="text-[#64ffda] text-lg mt-2 md:mt-0">
                {job.company}
              </span>
            </div>

            {/* Periodo */}
            <p className="text-gray-400 mb-4">
              {job.period}
            </p>

            {/* Detalles */}
            <p className="text-gray-300 leading-relaxed">
              {job.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
