// src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      /* 90 % da altura da tela, cor vermelha */
      className="relative flex flex-col md:flex-row items-center justify-center
                 bg-primary text-light min-h-[85vh] px-4 gap-8"
    >
      {/* === TEXTO === */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Aprenda inglês on-line <br />
          com professores nativos
        </h1>

        <p className="text-lg md:text-xl text-light/90">
          Aulas com foco em conversação, turmas reduzidas e horários flexíveis.
        </p>

        {/* === BOTÕES === */}
        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-6">
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5521981616840"
            className="inline-block bg-light text-primary border-2 border-accent
                       font-semibold py-3 px-8 rounded-full shadow-md
                       transition-colors hover:bg-accent hover:text-light"
          >
            Agende sua aula experimental
          </a>

          {/* Botão Saiba Mais */}
          <a
            href="#about"
            className="inline-block border-2 border-white text-light
                       font-semibold py-3 px-8 rounded-full transition-colors
                       hover:bg-white hover:text-primary"
          >
            Saiba mais
          </a>
        </div>
      </div>

      {/* === IMAGEM === */}
      <img
        src="logosemfundo.png"
        alt="Aluno estudando inglês on-line"
        className="order-1 md:order-1 w-full md:w-1/2 h-64 md:h-[380px] object-contain rounded-2xl"
      />
    </section>
  );
}
