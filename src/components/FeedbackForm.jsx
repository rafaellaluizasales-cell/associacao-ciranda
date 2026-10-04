import React, { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    nome: '',
    relacao: 'Aluna(o) de Oficina',
    depoimento: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `*Novo Depoimento / Feedback para a Ciranda*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Vínculo:* ${formData.relacao}\n` +
      `*Depoimento:* ${formData.depoimento}`;

    const waUrl = `https://wa.me/5566984340745?text=${encodeURIComponent(msg)}`;

    setEnviado(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <div className="bg-ciranda-card rounded-3xl p-6 sm:p-8 border border-ciranda-border shadow-soft">
      <div className="mb-6">
        <span className="badge-tag mb-2">Sua Voz Na Ciranda</span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-ciranda-brown">
          Deixe seu Depoimento ou Mensagem
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Assistiu a um espetáculo ou participou de uma oficina? Compartilhe sua experiência conosco!
        </p>
      </div>

      {enviado ? (
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2">
          <p className="text-emerald-900 font-bold text-base">Muito obrigado pelo carinho!</p>
          <p className="text-xs text-emerald-800">
            Seu depoimento foi enviado para nossa equipe de publicação.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="text-xs font-semibold text-emerald-700 underline"
          >
            Enviar outro depoimento
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: João Pedro"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta outline-none text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Sua Relação com a Ciranda *
              </label>
              <select
                value={formData.relacao}
                onChange={(e) => setFormData({ ...formData, relacao: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta outline-none text-sm bg-white"
              >
                <option value="Aluna(o) de Oficina">Aluna(o) de Oficina</option>
                <option value="Espectador / Público">Espectador / Público</option>
                <option value="Artista / Parceiro">Artista / Parceiro Cultural</option>
                <option value="Morador de Barra do Garças">Morador de Barra do Garças</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Seu Depoimento *
            </label>
            <textarea
              required
              rows="3"
              placeholder="Como foi sua experiência com os projetos da Ciranda?"
              value={formData.depoimento}
              onChange={(e) => setFormData({ ...formData, depoimento: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta outline-none text-sm bg-white"
            ></textarea>
          </div>

          <button type="submit" className="btn-secondary w-full py-3 text-xs uppercase tracking-wider">
            Enviar Depoimento
          </button>
        </form>
      )}
    </div>
  );
}
