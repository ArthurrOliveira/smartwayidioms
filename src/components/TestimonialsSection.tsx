const testimonials = [
  {
    name: "Ana Souza",
    quote:
      "Passei na entrevista de trabalho graças às aulas de Business English!",
  },
  {
    name: "Carlos Lima",
    quote:
      "Viajei para o Canadá e consegui me comunicar tranquilamente em todas as situações.",
  },
  {
    name: "Mariana Alves",
    quote:
      "As aulas online são muito práticas; faço aula no horário do almoço.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <header className="text-center mb-12 px-4">
        <h3 className="text-3xl font-bold mb-4">Depoimentos</h3>
        <p className="text-gray-600">Quem já estudou com a SmartWay Idioms</p>
      </header>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map(({ name, quote }) => (
          <figure
            key={name}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4"
          >
            <blockquote className="italic text-gray-700 flex-1">
              “{quote}”
            </blockquote>
            <figcaption className="text-primary font-semibold text-right">
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
