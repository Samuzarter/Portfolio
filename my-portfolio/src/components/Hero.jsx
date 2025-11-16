import { motion, useScroll, useTransform } from "framer-motion"
import { siteMeta } from "../data"
import avatar from "../assets/avatar.jpg"

export default function Hero() {
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const scale = useTransform(scrollY, [0, 600], [1, 0.8])
  const translateY = useTransform(scrollY, [0, 600], [0, -120])

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center relative">
      
      <motion.img
        src={avatar}
        alt="avatar"
        style={{ opacity, scale, y: translateY }}
        className="w-44 h-44 rounded-full border-4 border-teal-400 shadow-2xl"
      />

      <motion.h1
        style={{ opacity, y: translateY }}
        className="text-4xl md:text-5xl font-bold mt-6 text-gray-100"
      >
        {siteMeta.name}
      </motion.h1>

      <motion.p
        style={{ opacity, y: translateY }}
        className="text-xl text-teal-300 mt-2"
      >
        {siteMeta.role}
      </motion.p>

      <motion.p
        style={{ opacity, y: translateY }}
        className="text-gray-300 max-w-xl mt-4"
      >
        {siteMeta.intro}
      </motion.p>

      <motion.div
        style={{ opacity, y: translateY }}
        className="flex gap-6 text-2xl mt-6"
      >
        <a href="https://github.com/Samuzarter" className="hover:text-teal-400 transition">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://linkedin.com/samuel-quiroz-rincon" className="hover:text-teal-400 transition">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </motion.div>

    </section>
  )
}
