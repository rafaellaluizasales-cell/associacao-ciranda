import React, { useState } from 'react';

export default function LightboxGallery({ fotos = [] }) {
  const [fotoAtiva, setFotoAtiva] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

  const categorias = ['Todas', ...new Set(fotos.map(f => f.categoria))];

  const fotosFiltradas = categoriaFiltro === 'Todas'
    ? fotos
    : fotos.filter(f => f.categoria === categoriaFiltro);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaFiltro(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              categoriaFiltro === cat
                ? 'bg-ciranda-terracotta text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-ciranda-amber/15 border border-ciranda-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotosFiltradas.map((foto) => (
          <div
            key={foto.id}
            onClick={() => setFotoAtiva(foto)}
            className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-ciranda-border shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-64 sm:h-72 w-full bg-stone-900 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={foto.url}
                alt={foto.titulo}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-ciranda-terracotta text-white px-2.5 py-1 rounded-full shadow-sm z-10">
                {foto.categoria}
              </span>
            </div>
            <div className="p-4 bg-white border-t border-ciranda-border/40">
              <h4 className="text-base font-serif font-bold text-ciranda-brown group-hover:text-ciranda-terracotta transition-colors">
                {foto.titulo}
              </h4>
              <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                {foto.legenda}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {fotoAtiva && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFotoAtiva(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFotoAtiva(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-ciranda-terracotta transition"
            >
              ✕
            </button>
            <img
              src={fotoAtiva.url}
              alt={fotoAtiva.titulo}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-stone-900 text-white space-y-1">
              <span className="badge-tag">{fotoAtiva.categoria}</span>
              <h3 className="text-xl font-serif font-bold">{fotoAtiva.titulo}</h3>
              <p className="text-sm text-stone-300">{fotoAtiva.legenda}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
