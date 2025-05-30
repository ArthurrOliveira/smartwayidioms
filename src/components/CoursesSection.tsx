type CourseCardProps = {
  title: string;
  desc: string;
  level: string;
};

function CourseCard({ title, desc, level }: CourseCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col">
      <h4 className="text-xl font-bold mb-2 text-primary">{title}</h4>
      <p className="flex-1 mb-4">{desc}</p>
      <span className="inline-block px-3 py-1 bg-primary text-white rounded-full self-start">
        {level}
      </span>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Nossos Cursos</h3>
        <p>Escolha o formato que melhor se adapta ao seu objetivo.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        <CourseCard
          title="Inglês para Viagens"
          desc="Frases essenciais e prática de situações típicas de aeroporto,
          hotel, restaurantes e passeios."
          level="Todos os níveis"
        />
        <CourseCard
          title="Inglês Corporativo"
          desc="Foque em reuniões, apresentações e e-mails profissionais para
          impulsionar sua carreira."
          level="Intermediário+"
        />
        <CourseCard
          title="Preparatório IELTS / TOEFL"
          desc="Estratégias de prova, simulados cronometrados e feedback detalhado
          nas redações."
          level="Avançado"
        />
      </div>
    </section>
  );
}
