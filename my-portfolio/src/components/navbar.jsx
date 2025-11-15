return (
  <header className="fixed top-0 w-full z-50 header-glass">
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-aquasoft font-bold text-xl">Tu Nombre</h1>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 text-lightgray">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-aqua transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-aquasoft"
      >
        ☰
      </button>
    </nav>

    {/* Mobile menu */}
    {open && (
      <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lightgray">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={toggleMenu}
              className="hover:text-aqua transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </header>
);
