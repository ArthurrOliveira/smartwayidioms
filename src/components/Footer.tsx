import { Mail, Phone, Facebook, Instagram } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-dark text-light py-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4">
    {/* Marca e direitos */}
    <div className="text-center md:text-left">
      <h4 className="text-xl font-bold mb-2">SmartWay Idioms</h4>
      <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
    </div>

    {/* Redes sociais */}
    <nav className="flex gap-6">
      <a
        href="https://instagram.com/smartwayidioms"
        aria-label="Instagram"
        className="hover:text-accent transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://facebook.com/smartwayidioms"
        aria-label="Facebook"
        className="hover:text-accent transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </nav>

    {/* Informações de contato */}
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-accent" />
        <a href="mailto:contato@smartwayidioms.com" 
        className="hover:text-accent">
          contato@smartwayidioms.com
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-accent" />
        <a href="https://wa.me/5521981616840" 
        className="hover:text-accent">
          (21) 98161-6840
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}
