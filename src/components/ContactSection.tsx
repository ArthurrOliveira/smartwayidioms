import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const WEBHOOK = import.meta.env.VITE_SHEETS_URL as string;
// crie no .env.local  →  VITE_SHEETS_URL=https://script.google.com/macros/s/…/exec

export default function ContactSection() {
  // State para controlar os valores digitados no form
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState(false);

  // Atualiza o state quando o usuário digita
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  // Quando clicar em Enviar, montamos a URL de GET e chamamos fetch
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setOk(false);

    // Monta a URL com query params. encodeURIComponent garante que caracteres especiais sejam escapados
    const params = new URLSearchParams({
      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,
    });
    const url = `${WEBHOOK}?${params.toString()}`;

    try {
      // Faz a requisição GET
      const resp = await fetch(url, {
        method: "GET", // use GET para não causar preflight CORS
      });
      const json = await resp.json();
      if (json.resultado === "ok") {
        setOk(true); // marcar como enviado
        setDados({ nome: "", email: "", telefone: "" }); // limpa campos
      } else {
        alert("Falha ao enviar. Tente novamente.");
      }
    } catch (err) {
      alert("Erro de rede. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  /* ---------------- JSX DA SEÇÃO (compacto) ---------------- */
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* === FORMULÁRIO === */}
        <form 
        className="space-y-6 bg-white p-8 rounded-2xl shadow-md"
        onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold text-primary">Fale Conosco</h3>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={dados.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={dados.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={dados.telefone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          

          {/* Mensagem de sucesso */}
          {ok && (
            <p className="text-green-600 font-medium">
              ✔️ Enviado! Entraremos em contato.
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="bg-primary text-white py-3 px-6 rounded-md
                       hover:bg-secondary transition-colors disabled:opacity-60"
          >
            {enviando ? "Enviando…" : "Enviar"}
          </button>
        </form>

        {/* === CONTATO === */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">Informações de Contato</h3>

          <div className="flex items-center gap-4">
            <Mail className="text-primary" />
            <a href="mailto:contato@smartway.com.br">contato@smartway.com.br</a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-primary" />
            <a href="tel:+5521981616840">(21) 98161-6840</a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-primary" />
            <span>Rio de Janeiro - RJ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
