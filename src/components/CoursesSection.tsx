type CourseCardProps = {
  title: string;
  desc: string;
  level: string;
};

function CourseCard({ title, desc, level }: CourseCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
      <h4 className="text-xl font-bold text-primary">{title}</h4>
      <p className="flex-1 text-gray-700">{desc}</p>
      <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm self-start">
        {level}
      </span>
    </article>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20">
      <header className="text-center mb-12 px-4">
        <h3 className="text-3xl font-bold mb-4">Nossos Cursos</h3>
        <p className="text-gray-600">
          Oferecemos cursos de <b>inglês para todos os níveis: Do Básico ao Business English</b>
        </p>
         <p className="text-gray-600">
      Se você está começando do zero ou ainda não possui uma base sólida no idioma, oferecemos um <strong>curso completo de inglês geral</strong>, ideal para desenvolver as estruturas fundamentais e 
      aprender a se comunicar com naturalidade.
        </p>
         <p className="text-gray-600">
          Já para quem busca aperfeiçoamento profissional, temos nossos <strong>cursos de Inglês para áreas específicas</strong> — também conhecidos como <em>Business English</em>. São programas personalizados com foco no vocabulário e nas situações do dia a dia de cada profissão.
        </p>
        <p className="text-gray-600">
          Áreas atendidas: Direito, Contabilidade, Marketing, Engenharias, Medicina, entre outras. Tudo para você se comunicar com confiança no seu ambiente de trabalho.
        </p>

      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <CourseCard
          title="Inglês Básico e Intermediário"
          desc="Para quem está começando ou ainda não desenvolveu uma base sólida de comunicação."
          level="Básico e Intermediário"
        />
        <CourseCard
          title="Business English"
          desc="Cursos personalizados para áreas específicas como Direito, Contabilidade, 
          Marketing, Engenharia, Medicina, entre outras. Aprenda o vocabulário técnico e a 
          comunicação necessária para sua profissão."
          level="Todos os níveis"
        />
        <CourseCard
          title="Inglês para Viagens"
          desc="Frases essenciais e prática de situações típicas de aeroporto,
          hotel e passeios."
          level="Todos os níveis"
        />
      </div>
    </section>
  );
}
