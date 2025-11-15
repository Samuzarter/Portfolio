import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center text-white px-6 pt-24"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-8 text-[#64ffda]">
        Contacto
      </h2>

      {/* Contenedor de botones */}
      <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl max-w-md w-full text-center">
        <p className="text-gray-300 mb-6 text-lg">
          Si deseas ponerte en contacto conmigo, aquí tienes mis enlaces:
        </p>

        {/* Botones */}
        <div className="space-y-4">
          {/* Email */}
          <a
            href="mailto:tu-correo@gmail.com"
            className="
              block w-full
              text-[#64ffda] 
              border border-[#64ffda]
              py-3 rounded-lg
              transition-all duration-300
              hover:bg-[#64ffda] hover:text-black
            "
          >
            📧 Enviar Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full
              text-[#64ffda] 
              border border-[#64ffda]
              py-3 rounded-lg
              transition-all duration-300
              hover:bg-[#64ffda] hover:text-black
            "
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full
              text-[#64ffda] 
              border border-[#64ffda]
              py-3 rounded-lg
              transition-all duration-300
              hover:bg-[#64ffda] hover:text-black
            "
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
