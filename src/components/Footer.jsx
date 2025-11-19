import { siteMeta } from '../data'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#064e50] to-[#022c2d] text-gray-200 py-8 mt-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 w-full">

        {/* Anchors tipo navbar */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base w-full max-w-full">
          <a href="#hero" className="hover:text-teal-400 transition">Inicio</a>
          <a href="#about" className="hover:text-teal-400 transition">Sobre mí</a>
          <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition">Proyectos</a>
          <a href="#experience" className="hover:text-teal-400 transition">Experiencia</a>
          <a href="#hero" className="hover:text-teal-400 transition">Contacto</a>
        </nav>

        {/* Íconos */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/samuzarter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-quiroz-rinc%C3%B3n/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="mailto:samuelquirozrincon1@gmail.com"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300 text-center">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
      </div>
    </footer>
  )
}
