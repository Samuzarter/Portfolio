import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-animated min-h-screen text-lightgray">
      
      {/* Header / Navbar */}
      <Header />

      {/* Espacio para que el header fijo no tape el contenido */}
      <main className="pt-24">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
