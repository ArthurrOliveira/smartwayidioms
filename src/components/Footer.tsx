export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h4 className="font-bold text-xl mb-2">SmartWay Idioms</h4>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80">
            {/* Lucide / HeroIcons ou SVG próprio */}
            <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80">
            <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
