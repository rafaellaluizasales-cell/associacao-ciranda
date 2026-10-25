import React, { useState, useEffect } from 'react';
import projetosTransparencia from '../data/transparencia.json';

export default function TransparenciaSection() {
  const [projetoAtivoId, setProjetoAtivoId] = useState(null);
  const [pdfAvisoAberto, setPdfAvisoAberto] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const encontrado = projetosTransparencia.find((p) => p.id === hash);
        if (encontrado) {
          setProjetoAtivoId(encontrado.id);
        }
      } else {
        setProjetoAtivoId(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const abrirProjeto = (id) => {
    setProjetoAtivoId(id);
    window.location.hash = id;
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const voltarParaLista = () => {
    setProjetoAtivoId(null);
    if (window.history.pushState) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = '';
    }
  };

  const projetoAtivo = projetosTransparencia.find((p) => p.id === projetoAtivoId);

  const handleRelatorioClick = () => {
    if (projetoAtivo?.pdfUrl) {
      window.open(projetoAtivo.pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      setPdfAvisoAberto(true);
    }
  };

  return (
    <div className="w-full">
      {/* Visualização de Detalhes do Projeto */}
      {projetoAtivo ? (
        <div className="space-y-8 transition-all duration-300 ease-out">
          {/* Botão Voltar */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <button
              onClick={voltarParaLista}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A6431E] bg-[#A6431E]/10 hover:bg-[#A6431E] hover:text-white transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para a lista de projetos
            </button>
            <span className="text-xs text-stone-400 font-mono hidden sm:inline-block">
              Transparência Pública • Ciranda
            </span>
          </div>

          {/* Layout 2 Colunas (Resumo & Extrato) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna Esquerda: Título, Resumo e Ação do Relatório */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#A6431E] uppercase tracking-tight leading-snug">
                  {projetoAtivo.titulo}
                </h2>
              </div>

              <div className="pt-2">
                <div className="inline-block border-b-2 border-[#A6431E] pb-1 mb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-[#A6431E] uppercase tracking-wider">
                    RESUMO
                  </h3>
                </div>
                <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left whitespace-pre-line">
                  {projetoAtivo.resumo}
                </p>
              </div>

              {/* Seção Relatório & Instagram */}
              <div className="pt-6 space-y-4 border-t border-stone-200/80">
                <p className="text-ciranda-amber font-bold text-xs sm:text-sm uppercase tracking-widest">
                  CONFIRA O RELATÓRIO AQUI
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {/* Ícone Instagram */}
                  <a
                    href={projetoAtivo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#A6431E] hover:bg-[#8B3516] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                    title="Acompanhe no Instagram"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Botão RELATÓRIO */}
                  <button
                    onClick={handleRelatorioClick}
                    className="px-8 py-3 bg-[#A6431E] hover:bg-[#8B3516] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer rounded-none active:scale-98"
                  >
                    RELATÓRIO
                  </button>
                </div>

                {/* Modal / Alerta discreto quando o PDF ainda não foi anexado */}
                {pdfAvisoAberto && (
                  <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-stone-800 text-xs sm:text-sm space-y-2 transition-all duration-300 ease-out">
                    <div className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-ciranda-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="space-y-1">
                        <p className="font-bold text-[#A6431E]">Documento em Processamento</p>
                        <p className="text-stone-600">
                          O arquivo PDF completo deste relatório de execução está sendo finalizado e será disponibilizado aqui para download em breve.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={() => setPdfAvisoAberto(false)}
                        className="text-xs font-bold text-[#A6431E] hover:underline uppercase"
                      >
                        Fechar aviso
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Coluna Direita: Box com EXTRATO */}
            <div className="lg:col-span-6">
              <div className="border-2 border-[#A6431E]/60 rounded-3xl p-6 sm:p-8 bg-white shadow-soft">
                <h3 className="text-2xl sm:text-3xl font-black text-[#A6431E] uppercase tracking-wide mb-6">
                  EXTRATO
                </h3>

                <div className="space-y-4">
                  {projetoAtivo.extrato.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs sm:text-[13px] leading-relaxed text-stone-700 pb-3 border-b border-stone-100 last:border-b-0 last:pb-0"
                    >
                      <p>
                        <span className="font-bold text-[#A6431E]">
                          {item.numero}. {item.rotulo}:
                        </span>{' '}
                        {item.valor && (
                          <span className="text-stone-800 whitespace-pre-line font-normal">
                            {item.valor}
                          </span>
                        )}
                      </p>

                      {/* Lista de itens (caso do item 9 - Remuneração da equipe) */}
                      {item.itens && item.itens.length > 0 && (
                        <ul className="mt-2 space-y-1 pl-3 text-stone-800 font-normal">
                          {item.itens.map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-1.5">
                              <span className="text-[#A6431E] font-bold">•</span>
                              <span>{sub.replace(/^[•\s]+/, '')}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* Visualização Inicial (Lista de Projetos - Modelo Mutirum) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna Esquerda: Texto Institucional de Apresentação */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#A6431E] uppercase tracking-wide">
              TRANSPARÊNCIA
            </h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Acompanhe aqui o histórico e o desenvolvimento dos projetos da Associação cultural Ciranda.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed pt-2">
              Clique sobre o botão e acesse os dados informativos.
            </p>
          </div>

          {/* Coluna Direita: Grade com os Botões dos Projetos */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projetosTransparencia.map((projeto) => (
                <button
                  key={projeto.id}
                  onClick={() => abrirProjeto(projeto.id)}
                  className="group w-full min-h-[110px] p-6 bg-[#A6431E] hover:bg-[#8B3516] active:scale-[0.99] text-white font-bold text-sm sm:text-base uppercase tracking-wide rounded-none shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center text-center cursor-pointer border border-[#8B3516]/40"
                >
                  <span className="leading-snug group-hover:scale-[1.02] transition-transform duration-200">
                    {projeto.titulo}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
