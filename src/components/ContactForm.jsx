import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Dúvidas e Informações',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `*Contato pelo Site - Ciranda*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone || 'Não informado'}\n` +
      `*Assunto:* ${formData.assunto}\n` +
      `*Mensagem:* ${formData.mensagem}`;

    const waUrl = `https://wa.me/5566984340745?text=${encodeURIComponent(msg)}`;

    setEnviado(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ciranda-border shadow-soft">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-ciranda-brown mb-2">
        Envie uma Mensagem Direta
      </h3>
      <p className="text-xs sm:text-sm text-stone-600 mb-6">
        Fale conosco para projetos, apresentações, parcerias ou dúvidas sobre as oficinas.
      </p>

      {enviado ? (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
          <p className="text-emerald-900 font-bold text-lg">Mensagem enviada com sucesso!</p>
          <p className="text-xs text-emerald-800">
            Você será direcionado para o WhatsApp da Ciranda (`associacaoculturalciranda@gmail.com`).
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="text-xs font-semibold text-emerald-700 underline"
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Nome *
            </label>
            <input
              type="text"
              required
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="(66) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Assunto *
            </label>
            <select
              value={formData.assunto}
              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none text-sm bg-white"
            >
              <option value="Dúvidas e Informações">Dúvidas e Informações Gerais</option>
              <option value="Inscrição em Oficinas">Inscrição em Oficinas</option>
              <option value="Apresentação Teatral / Evento">Contratação de Espetáculos / Eventos</option>
              <option value="Parceria Cultural">Parceria Cultural</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Sua Mensagem *
            </label>
            <textarea
              required
              rows="4"
              placeholder="Escreva sua mensagem aqui..."
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none text-sm"
            ></textarea>
          </div>

          <button type="submit" className="w-full btn-primary py-3.5 text-sm">
            Enviar Mensagem
          </button>
        </form>
      )}
    </div>
  );
}
