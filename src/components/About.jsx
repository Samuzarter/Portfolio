import React from "react";
import { siteMeta } from "../data";

const Highlight = ({ children }) => (
  <span className="text-[#64ffda] font-semibold">
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
        <p className="text-gray-300 leading-relaxed text-lg text-left">
          Soy un <Highlight>Desarrollador Back-End</Highlight> con experiencia en la creación de 
          <Highlight> arquitecturas sólidas</Highlight> y 
          <Highlight> servicios escalables</Highlight> utilizando 
          <Highlight> Python</Highlight>, <Highlight>C#</Highlight>, <Highlight>.NET</Highlight>, <Highlight>SQL</Highlight> y 
          <Highlight> AWS</Highlight>. He desarrollado 
          <Highlight> APIs REST</Highlight> y <Highlight>no REST</Highlight> con autenticación mediante 
          <Highlight> JWT</Highlight> e integración a bases de datos, además de implementar 
          <Highlight> pipelines CI/CD</Highlight> para despliegues eficientes. 

          Me apasiona el <Highlight>diseño de sistemas</Highlight>, la 
          <Highlight> automatización de procesos</Highlight> y el 
          <Highlight> desarrollo de soluciones en la nube</Highlight>. Actualmente profundizo en 
          <Highlight> testing automatizado</Highlight> y prácticas de 
          <Highlight> QA</Highlight> apoyándome en herramientas de 
          <Highlight> AWS</Highlight>. 

          Cuento con un nivel de <Highlight>inglés C1</Highlight>, lo que me permite comunicarme y 
          colaborar de manera efectiva en entornos técnicos.
        </p>
      </div>
    </section>
  );
}
