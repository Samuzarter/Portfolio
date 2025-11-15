import React from "react";
import { siteMeta } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-6 text-[#64ffda]">
        Sobre mí
      </h2>

      {/* Contenedor tipo tarjeta */}
      <div className="max-w-3xl bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl text-center">
        
        {/* Tu nombre */}
        <h3 className="text-3xl font-bold mb-2">
          {siteMeta.name}
        </h3>

        {/* Tu rol */}
        <p className="text-xl text-[#64ffda] mb-4">
          {siteMeta.role}
        </p>

        {/* Descripción */}
        <p className="text-gray-300 leading-relaxed text-lg">
          {siteMeta.intro}
        </p>
      </div>
    </section>
  );
}
