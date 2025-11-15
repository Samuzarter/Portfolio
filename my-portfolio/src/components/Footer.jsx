import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-600 bg-white/50 mt-12">
      <div className="max-w-5xl mx-auto px-6">© {new Date().getFullYear()} · Samuel Quiroz Rincón · Hecho con React</div>
    </footer>
  )
}