import React from "react";
import { siteMeta } from "../data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO / NOMBRE */}
        <h1 className="text-xl font-bold tracking-wide text-aqua drop-shadow-[0_0_6px_#3ef2e9]">
          {siteMeta.name}
        </h1>

        {/* LINKS */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a 
              href="#about" 
              className="text-gray-200 hover:text-aqua transition-all duration-300 hover:drop-shadow-[0_0_6px_#3ef2e9]"
            >
              Sobre mí
            </a>
          </li>

          <li>
            <a 
              href="#skills" 
              className="text-gray-200 hover:text-aqua transition-all duration-300 hover:drop-shadow-[0_0_6px_#3ef2e9]"
            >
              Habilidades
            </a>
          </li>

          <li>
            <a 
              href="#projects" 
              className="text-gray-200 hover:text-aqua transition-all duration-300 hover:drop-shadow-[0_0_6px_#3ef2e9]"
            >
              Proyectos
            </a>
          </li>

          <li>
            <a 
              href="#experience" 
              className="text-gray-200 hover:text-aqua transition-all duration-300 hover:drop-shadow-[0_0_6px_#3ef2e9]"
            >
              Experiencia
            </a>
          </li>

          <li>
            <a 
              href="#contact" 
              className="text-gray-200 hover:text-aqua transition-all duration-300 hover:drop-shadow-[0_0_6px_#3ef2e9]"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
