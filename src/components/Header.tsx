import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#hero" className="text-lg font-bold">
          SmartWay Idioms
        </a>

        {/* Botão hamburger (mobile) */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navegação */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-6`}
        >
          <a href="#about" className="hover:underline">
            Sobre
          </a>
          <a href="#courses" className="hover:underline">
            Cursos
          </a>
          <a href="#testimonials" className="hover:underline">
            Depoimentos
          </a>
          <a href="#contact" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
