import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-light text-dark sticky top-0 z-50 shadow-sm">
      <div className="w-full flex items-center justify-between p-6">
        {/* Logo */}
        <a href="#hero" className="text-lg font-bold">
          <span className="text-primary">SmartWay Idioms</span> 
        </a>

        {/* Botão hamburger (mobile) */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navegação */}
  <nav
  className={`${
    open ? 'flex' : 'hidden'
  } flex-col md:flex md:flex-row gap-6
             items-center justify-center text-center
             font-semibold md:mx-auto`}
        >
          <a href="#about" className="hover:text-primary">
            Sobre
          </a>
          <a href="#courses" className="hover:text-primary">
            Cursos
          </a>
          <a href="#testimonials" className="hover:text-primary">
            Depoimentos
          </a>
          <a href="#contact" className="hover:text-primary">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
