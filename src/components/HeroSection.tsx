export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center
             bg-primary text-white min-h-screen gap-8 px-4"
    >
      {/* Título */}
      <h2 className="text-4xl md:text-6xl font-extrabold max-w-3xl">
        Aprenda inglês on-line <br className="hidden md:block" />
        com professores nativos
      </h2>

      {/* Botão CTA */}
      <a
        href="#courses"
        className="bg-white text-primary font-semibold py-3 px-8 rounded-full
               transition-transform hover:scale-105 shadow-md"
      >
        Conheça nossos cursos
      </a>
    </section>
  );
}
