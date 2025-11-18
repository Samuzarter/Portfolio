import { motion, useScroll, useTransform } from "framer-motion"
import { siteMeta } from "../data"
import avatar from "../assets/avatar.jpg"

export default function Hero() {
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.85])
  const translateY = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <section
      id="hero"
      className="
        min-h-[85vh] 
        flex flex-col items-center justify-center 
        text-center relative 
        px-6 pt-20 md:pt-24
      "
    >
      {/* Avatar */}
      <motion.img
        src={avatar}
        alt="avatar"
        style={{ opacity, scale, y: translateY }}
        className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-teal-400 shadow-2xl"
      />

      {/* Nombre */}
      <motion.h1
        style={{ opacity, y: translateY }}
        className="text-3xl md:text-5xl font-bold mt-6 text-gray-100"
      >
        {siteMeta.name}
      </motion.h1>

      {/* Rol */}
      <motion.p
        style={{ opacity, y: translateY }}
        className="text-lg md:text-xl text-teal-300 mt-1"
      >
        {siteMeta.role}
      </motion.p>

      {/* Intro */}
      <motion.p
        style={{ opacity, y: translateY }}
        className="text-gray-300 max-w-xl mt-4 text-sm md:text-base leading-relaxed"
      >
        {siteMeta.intro}
      </motion.p>

      {/* Links */}
      <motion.div
        style={{ opacity, y: translateY }}
        className="flex flex-wrap justify-center items-center gap-6 text-2xl mt-8"
      >
        {/* GitHub */}
        <a
          href="https://github.com/Samuzarter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition transform hover:scale-110"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/samuel-quiroz-rinc%C3%B3n/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition transform hover:scale-110"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        {/* Correo */}
        <div
          onClick={() => window.location.href = "mailto:samuelquirozrincon1@gmail.com"}
          className="
            text-sm md:text-lg text-gray-300 
            hover:text-teal-400 transition 
            border border-gray-600 px-3 py-1 rounded-xl
            hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/20
            cursor-pointer select-text
          "
        >
          samuelquirozrincon1@gmail.com
        </div>
      </motion.div>
    </section>
  )
}
