const testimonials = [
  {
    name: 'Ana Souza',
    quote:
      'Passei na entrevista de trabalho graças às aulas de Business English!',
  },
  {
    name: 'Carlos Lima',
    quote:
      'Viajei para o Canadá e consegui me comunicar tranquilamente em todas as situações.',
  },
  {
    name: 'Mariana Alves',
    quote: 'A plataforma online é muito prática, faço aula no horário do almoço.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Depoimentos</h3>
        <p>Quem já estudou com a SmartWay Idioms</p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map(({ name, quote }) => (
          <figure
            key={name}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
          >
            <blockquote className="flex-1 italic mb-4">“{quote}”</blockquote>
            <figcaption className="text-primary font-semibold">{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
