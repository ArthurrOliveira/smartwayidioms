export default function Header() {
  return (
    <header className="w-full bg-primary text-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <img src="/logo.svg" alt="SmartWay Idioms" className="h-8" />
        <nav className="hidden md:flex gap-6">
          <a href="#courses" className="hover:underline">Cursos</a>
          <a href="#about"   className="hover:underline">Sobre</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
