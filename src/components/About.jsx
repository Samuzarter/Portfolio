import React from "react";
import { siteMeta } from "../data";

const Highlight = ({ children }) => (
  <span className="text-teal-400 font-semibold">
    {children}
  </span>
);

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-10 text-teal-400">
        Sobre mí
      </h2>

      {/* Card */}
      <div className="
        max-w-2xl 
        bg-black/40 
        backdrop-blur-lg 
        border border-white/10 
        rounded-2xl 
        p-8 
        shadow-lg 
        shadow-black/30
      ">

        {/* Nombre */}
        <h3 className="text-3xl font-bold text-center mb-1">
          {siteMeta.name}
        </h3>

        {/* Rol */}
        <p className="text-xl text-teal-400 text-center mb-6">
          {siteMeta.role}
        </p>

        {/* Descripción */}
        <p className="text-gray-300 leading-relaxed text-lg text-left space-y-4">
          Soy un Desarrollador Back-End especializado en arquitecturas sólidas y servicios altamente escalables con
          Python, C#, .NET, SQL y AWS. Tengo Experiencia en el desarrollo de APIs REST/no REST (incluyendo JWT)
          y la implementación de pipelines CI/CD. Me enfoco en el diseño de sistemas, la automatización 
          y el testing automatizado/QA en la nube. Cuento con Inglés C1 para colaborar eficazmente en entornos técnicos internacionales.
        </p>
      </div>
    </section>
  );
}
