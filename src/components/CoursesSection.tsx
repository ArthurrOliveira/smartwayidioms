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
          Escolha o formato que melhor se adapta ao seu objetivo
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <CourseCard
          title="Inglês para Viagens"
          desc="Frases essenciais e prática de situações típicas de aeroporto,
          hotel e passeios."
          level="Todos os níveis"
        />
        <CourseCard
          title="Inglês Corporativo"
          desc="Reuniões, apresentações e e-mails profissionais para impulsionar sua carreira."
          level="Intermediário+"
        />
        <CourseCard
          title="Preparatório IELTS / TOEFL"
          desc="Estratégias de prova, simulados cronometrados e feedback detalhado."
          level="Avançado"
        />
      </div>
    </section>
  );
}
