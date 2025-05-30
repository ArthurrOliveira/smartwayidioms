export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary to-secondary text-white py-24 px-4"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-2xl">
        Aprenda inglês on-line <br className="hidden md:block" /> com professores
        nativos
      </h2>

      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Aulas 100 % conversação • Horários flexíveis • Todos os níveis
      </p>

      <a
        href="#courses"
        className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Conheça nossos cursos
      </a>
    </section>
  );
}
