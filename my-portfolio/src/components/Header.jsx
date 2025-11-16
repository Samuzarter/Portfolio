import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { siteMeta } from "../data"
import avatar from "../assets/avatar.jpg"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120) // cuando se baja del Hero
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`
      fixed top-4 left-1/2 -translate-x-1/2 
      w-[95%] md:w-[85%] z-50 transition-all duration-300
      rounded-2xl px-4 shadow-xl
      ${scrolled
        ? "backdrop-blur-xl bg-[#033b3c]/40 border border-white/10"
        : "backdrop-blur-lg bg-[#033b3c]/10 border border-white/5"
      }
  `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* MINI AVATAR ANIMADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={scrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-teal-400 shadow-md"
          />
          <span className="text-gray-100 font-medium">{siteMeta.name}</span>
        </motion.div>

        {/* LINKS */}
        <nav className="hidden md:flex gap-8 text-gray-200">
          <a href="#hero" className="hover:text-teal-300 transition">Inicio</a>
          <a href="#about" className="hover:text-teal-300 transition">Sobre mí</a>
          <a href="#skills" className="hover:text-teal-300 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-300 transition">Proyectos</a>
          <a href="#experience" className="hover:text-teal-300 transition">Experiencia</a>
          <a href="#contact" className="hover:text-teal-300 transition">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
