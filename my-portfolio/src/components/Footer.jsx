import { siteMeta } from '../data'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#064e50] to-[#022c2d] text-gray-200 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Texto */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} {siteMeta.name}. Todos los derechos reservados.
        </p>

        {/* Íconos */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="mailto:correo@ejemplo.com"
            className="text-gray-300 hover:text-teal-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}
