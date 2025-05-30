export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Imagem ilustrativa */}
        <img
          src="/about.jpg"  /* coloque uma imagem em public/about.jpg */
          alt="Professor ensinando online"
          className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-auto"
        />

        {/* Texto */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-primary">
            Metodologia focada em conversação
          </h3>
          <p className="mb-4 leading-relaxed">
            Desde a primeira aula você fala inglês. Nosso método prioriza a
            prática de situações reais de viagem, trabalho e dia a dia, guiado
            por professores nativos e materiais atualizados.
          </p>
          <p>
            Turmas reduzidas, feedback individual e flexibilidade de horários
            para caber na sua rotina.
          </p>
        </div>
      </div>
    </section>
  );
}
