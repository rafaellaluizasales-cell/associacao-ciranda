import React, { useState } from 'react';

export default function WorkshopForm({ oficinas = [] }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    oficinaId: oficinas[0]?.id || '',
    telefone: '',
    email: '',
    observacoes: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const oficinaSelecionada = oficinas.find(o => o.id === formData.oficinaId) || oficinas[0];
    
    // Construct pre-filled WhatsApp message
    const msg = `*Nova Inscrição em Oficina - Site Ciranda*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Idade:* ${formData.idade} anos\n` +
      `*Oficina:* ${oficinaSelecionada?.titulo || 'Oficina'}\n` +
      `*Telefone/WhatsApp:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Observações:* ${formData.observacoes || 'Nenhuma'}`;

    const waUrl = `https://wa.me/5566984340745?text=${encodeURIComponent(msg)}`;

    setEnviado(true);
    
    // Open WhatsApp after brief state feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ciranda-border shadow-elevated">
      <div className="mb-8 text-center sm:text-left">
        <span className="badge-tag mb-2">Inscrição Simples</span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ciranda-brown">
          Formulário de Inscrição nas Oficinas
        </h3>
        <p className="text-sm text-stone-600 mt-2">
          Preencha seus dados abaixo. Sua inscrição é gratuita e enviada diretamente para a equipe da Ciranda.
        </p>
      </div>

      {enviado ? (
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h4 className="text-xl font-bold font-serif text-emerald-900">
            Inscrição Encaminhada com Sucesso!
          </h4>
          <p className="text-sm text-emerald-800 max-w-md mx-auto">
            Você está sendo redirecionado para o WhatsApp da Ciranda para confirmar sua vaga com a equipe.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="text-xs font-semibold text-emerald-700 underline"
          >
            Fazer outra inscrição
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Maria Aparecida da Silva"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Idade *
              </label>
              <input
                type="number"
                required
                min="5"
                max="100"
                placeholder="Ex: 18"
                value={formData.idade}
                onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="(66) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Oficina Desejada *
              </label>
              <select
                value={formData.oficinaId}
                onChange={(e) => setFormData({ ...formData, oficinaId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm bg-white"
              >
                {oficinas.map((oficina) => (
                  <option key={oficina.id} value={oficina.id}>
                    {oficina.titulo} ({oficina.status})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              E-mail (opcional)
            </label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Observações ou Mensagem (opcional)
            </label>
            <textarea
              rows="3"
              placeholder="Ex: Já fiz teatro na escola, gostaria de tirar dúvidas..."
              value={formData.observacoes}
              onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-ciranda-terracotta focus:ring-2 focus:ring-ciranda-terracotta/20 outline-none transition text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 text-base font-bold shadow-lg"
          >
            Concluir Inscrição & Enviar para a Ciranda
          </button>
        </form>
      )}
    </div>
  );
}
