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

      <div className="relative w-full max-w-4xl">

        {/* Línea vertical del timeline */}
        <div className="absolute left-4 top-0 h-full w-1 bg-[#64ffda]/30 rounded-full z-0"></div>

        {/* Tarjetas */}
        <div className="space-y-10"> 
          {experience.map((job) => (
            <div key={job.id} className="relative pl-10">  {/* margen para alinear tarjeta */}

              {/* Punto del timeline */}
              <div
                className="
                  absolute left-[18px] top-6 -translate-x-1/2
                  -translate-x-1/2
                  w-5 h-5 rounded-full 
                  bg-[#64ffda] 
                  border-4 border-[#022c2d] 
                  shadow-[0_0_12px_#64ffda]
                  z-20
                "
              ></div>

              {/* Tarjeta */}
              <div
                className="
                  relative z-10
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
                {/* Cabecera (rol + empresa) */}
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

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed">
                  {job.details}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
