import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        {/* Marca e direitos */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">SmartWay Idioms</h4>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>

        {/* Ícones de redes */}
        <nav className="flex gap-6">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:opacity-80"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:opacity-80"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
