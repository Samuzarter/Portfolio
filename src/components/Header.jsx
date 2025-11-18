import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteMeta } from "../data";
import avatar from "../assets/avatar.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);

      if (window.scrollY > 20) setOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] md:w-[85%] z-50">

      {/* NAV */}
      <nav
        className={`
          flex items-center justify-between
          px-5 py-4 rounded-2xl shadow-xl transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-xl bg-[#033b3c]/40 border border-white/10"
              : "backdrop-blur-lg bg-[#033b3c]/10 border border-white/5"
          }
        `}
      >

        {/* MINI AVATAR ANIMADO (restaurado) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            scrolled
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-teal-400 shadow-md"
          />
          <span className="text-gray-100 font-medium hidden sm:block">
            {siteMeta.name}
          </span>
        </motion.div>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-200">
          <li><a href="#hero" className="hover:text-teal-300 transition">Inicio</a></li>
          <li><a href="#about" className="hover:text-teal-300 transition">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-teal-300 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-300 transition">Proyectos</a></li>
          <li><a href="#experience" className="hover:text-teal-300 transition">Experiencia</a></li>
          <li><a href="#hero" className="hover:text-teal-300 transition">Contacto</a></li>
        </ul>

        {/* BOTÓN MOBILE */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-300 text-3xl select-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="
            md:hidden flex flex-col gap-4 mt-2 px-6 py-4
            bg-[#022c2d]/95 backdrop-blur-xl rounded-2xl shadow-lg
            text-gray-200
          "
        >
          <li><a href="#hero" onClick={toggleMenu} className="hover:text-teal-300 transition">Inicio</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-teal-300 transition">Sobre mí</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="hover:text-teal-300 transition">Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-teal-300 transition">Proyectos</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="hover:text-teal-300 transition">Experiencia</a></li>
          <li><a href="#hero" onClick={toggleMenu} className="hover:text-teal-300 transition">Contacto</a></li>
        </motion.ul>
      )}
    </header>
  );
}
