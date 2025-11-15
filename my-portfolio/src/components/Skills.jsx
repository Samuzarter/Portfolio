import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-8 text-[#64ffda]">
        Habilidades
      </h2>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {skills.map((skill, i) => (
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
    </section>
  );
}
