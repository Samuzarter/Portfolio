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
          Soy un Desarrollador Back-End con experiencia en la construcción de arquitecturas sólidas y servicios escalables, combinando un enfoque orientado a la calidad con la implementación de buenas prácticas de desarrollo. Durante mi trayectoria he trabajado con tecnologías como Python, C#, .NET, SQL y AWS, desarrollando APIs REST y no REST integradas con bases de datos, autenticación segura mediante JWT, y despliegues optimizados mediante pipelines CI/CD.
          <br /><br />
          Me interesa profundamente el diseño de sistemas robustos, la creación de APIs eficientes, la automatización de procesos y la implementación de soluciones modernas en la nube. Últimamente he ampliado mis conocimientos hacia el testing automatizado y prácticas de QA, con especial interés en herramientas y servicios que ofrece AWS para mejorar el aseguramiento de calidad. Además, cuento con un nivel de inglés C1, lo que me permite documentar, comunicar y colaborar eficazmente con equipos técnicos internacionales.
        </p>
      </div>
    </section>
  );
}
