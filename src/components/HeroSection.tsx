export default function HeroSection() {
  return (
    <section
      id="hero"
      /* 90 % da altura da tela, cor vermelha */
      className="relative flex flex-col md:flex-row items-center justify-center
                 bg-primary text-light min-h-[85vh] px-4 gap-8"
    >
      {/* === TEXTO === */}
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Aprenda inglês on-line<br />
          com professores nativos
        </h1>

        <p className="text-lg md:text-xl text-light/90">
          Aulas 100 % conversação, turmas reduzidas e horários flexíveis.
        </p>

        {/* === BOTÃO === */}
        <a
          href="#courses"
          className="inline-block bg-light text-primary border-2 border-accent
                     font-semibold py-3 px-8 rounded-full shadow-md
                     transition-colors hover:bg-accent hover:text-light"
        >
          Conheça nossos cursos
        </a>
      </div>

      {/* === IMAGEM === */}
      <img
        src="logosemfundo.png"
        alt="Aluno estudando inglês on-line"
        className="w-full md:w-1/2 h-64 md:h-[380px] object-contain rounded-2xl shadow-lg"
      />
    </section>
  );
}
