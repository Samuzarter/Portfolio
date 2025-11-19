import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="fixed top-2 left-0 w-full z-50">
      <nav
        className={`
          w-full max-w-[800px] mx-auto
          flex items-center justify-between
          px-5 py-4 rounded-2xl shadow-xl transition-all duration-300
          z-50
          ${scrolled
            ? "backdrop-blur-xl bg-[#033b3c]/40 border border-white/10"
            : "backdrop-blur-lg bg-[#033b3c]/10 border border-white/5"
          }
        `}
      >
        {/* AVATAR ANIMADO */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
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
          <li><a href="#contact" className="hover:text-teal-300 transition">Contacto</a></li>
        </ul>
        
        {/* NOMBRE SOLO EN MOBILE */}
        <span className="text-gray-100 font-medium text-lg md:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
          {siteMeta.name}
        </span>

        {/* ICONO HAMBURGUESA ANIMADO */}
        <button
          onClick={toggleMenu}
          className="relative z-50 md:hidden text-teal-300 w-8 h-8 flex items-center justify-center overflow-hidden"
        >
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: open ? -90 : 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.25 }}
          >
            {open ? "✕" : "☰"}
          </motion.span>
        </button>
      </nav>

      {/* MENÚ MOBILE - FIX ABSOLUTE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden flex flex-col gap-4
              absolute left-0 right-0
              top-full mt-3
              mx-auto w-[92%] max-w-[800px]
              px-6 py-5 rounded-2xl
              bg-[#022c2d]/95 backdrop-blur-xl shadow-xl
              text-gray-200 z-40
            "
          >
            <li><a href="#hero" onClick={toggleMenu} className="hover:text-teal-300 transition">Inicio</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-teal-300 transition">Sobre mí</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="hover:text-teal-300 transition">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-teal-300 transition">Proyectos</a></li>
            <li><a href="#experience" onClick={toggleMenu} className="hover:text-teal-300 transition">Experiencia</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-teal-300 transition">Contacto</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
