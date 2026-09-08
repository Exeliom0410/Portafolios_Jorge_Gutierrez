/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { 
  Box, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Layers, 
  Maximize2, 
  Play, 
  Pause, 
  Sparkles 
} from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';

export const WorldCreative3D: React.FC = () => {
  const { proyectos3D, plataformasGenerales3D } = PORTFOLIO_CONFIG;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentProject = proyectos3D[currentIndex] || proyectos3D[0];

  // Carrusel automático
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proyectos3D.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, proyectos3D.length]);

  const handlePrev = () => {
    audio.playBlip();
    setCurrentIndex((prev) => (prev - 1 + proyectos3D.length) % proyectos3D.length);
  };

  const handleNext = () => {
    audio.playBlip();
    setCurrentIndex((prev) => (prev + 1) % proyectos3D.length);
  };

  const handleSelect = (idx: number) => {
    audio.playBlip();
    setCurrentIndex(idx);
  };

  return (
    <section id="mundo-03" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline justify-between gap-4 mb-12 sm:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00] mb-2">
              <span className="w-3 h-3 bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
              <span>MUNDO 03</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
              Proyectos Creativos · Animación 3D
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#facc15] bg-[#1e261e] px-3.5 py-1.5 rounded-full border border-[#00AB00]/30">
            <Box className="w-3.5 h-3.5 text-[#00AB00]" />
            <span>BLENDER · RIGGING · KEYFRAMING</span>
          </div>
        </div>

        {/* Carrusel Principal de Animación 3D */}
        <div className="bg-[#1e261e] border-2 border-[#00AB00]/30 rounded-3xl overflow-hidden shadow-2xl mb-12">
          {/* Barra superior de visor 3D retro */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#161c16] border-b border-[#00AB00]/20 font-mono-code text-xs">
            <div className="flex items-center gap-2 text-[#00AB00]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AB00] animate-pulse" />
              <span className="font-bold">VISOR DE MODELADO & ANIMACIÓN 3D</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-[#9eb19e] hover:text-[#00AB00] px-2 py-1 rounded bg-[#1e261e] border border-[#00AB00]/20 transition-colors"
                title={isPlaying ? 'Pausar rotación automática' : 'Reproducir rotación automática'}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span className="text-[10px] hidden sm:inline">{isPlaying ? 'AUTO: ON' : 'AUTO: OFF'}</span>
              </button>
              <span className="text-[#9eb19e] font-bold">
                {String(currentIndex + 1).padStart(2, '0')} / {String(proyectos3D.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Escenario de Presentación (2 columnas: Visor Visual + Ficha Técnica) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Columna Izquierda: Imagen / Render / Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[440px] bg-[#121612] overflow-hidden group">
              <img
                src={currentProject.imagen}
                alt={currentProject.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none" />

              {/* Botón para ver en Lightbox / Pantalla Completa */}
              <button
                onClick={() => {
                  audio.playBlip();
                  setLightboxImage(currentProject.imagen);
                }}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#0f130f]/80 text-[#00AB00] border border-[#00AB00]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#00AB00] hover:text-[#0c0f0c]"
                title="Ampliar Render"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Badge de Categoría sobre la imagen */}
              <div className="absolute bottom-4 left-4 font-mono-code text-xs px-3 py-1 rounded-md bg-[#0f130f]/85 border border-[#00AB00]/50 text-[#f0f6f0] flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3 h-3 text-[#facc15]" />
                <span>{currentProject.categoria}</span>
              </div>

              {/* Controles de Navegación Flechas Izq/Der */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f130f]/80 text-[#f0f6f0] border border-[#00AB00]/40 flex items-center justify-center hover:bg-[#00AB00] hover:text-[#0c0f0c] transition-all cursor-pointer shadow-lg"
                title="Proyecto Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f130f]/80 text-[#f0f6f0] border border-[#00AB00]/40 flex items-center justify-center hover:bg-[#00AB00] hover:text-[#0c0f0c] transition-all cursor-pointer shadow-lg"
                title="Proyecto Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Columna Derecha: Información del Proyecto y Enlaces a Plataformas */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#1e261e] border-t lg:border-t-0 lg:border-l border-[#00AB00]/20">
              <div className="space-y-4">
                {/* Herramientas utilizadas */}
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.herramientas.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-md bg-[#2E332E] border border-[#00AB00]/30 text-[#34d399]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Título de la Animación */}
                <h3 className="font-display font-bold text-2xl text-[#f0f6f0] leading-snug">
                  {currentProject.titulo}
                </h3>

                {/* Descripción Técnica de Animación */}
                <p className="text-[#9eb19e] text-sm leading-relaxed">
                  {currentProject.descripcion}
                </p>
              </div>

              {/* Sección de Enlaces a Plataformas del Proyecto */}
              <div className="pt-6 border-t border-[#00AB00]/20 mt-6">
                <div className="font-mono-code text-xs text-[#00AB00] font-semibold mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ver este proyecto en plataformas:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.plataformas.map((plat) => (
                    <a
                      key={plat.nombre}
                      href={plat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audio.playBlip()}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#2E332E] hover:bg-[#00AB00] hover:text-[#0c0f0c] text-[#f0f6f0] font-mono-code text-xs font-semibold border border-[#00AB00]/30 transition-all duration-200 shadow-sm"
                    >
                      <BrandIcon name={plat.nombre} className="w-4 h-4 shrink-0" />
                      <span>{plat.nombre}</span>
                      <ExternalLink className="w-3 h-3 opacity-75" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Miniaturas inferiores para seleccionar directamente */}
          <div className="p-4 bg-[#161c16] border-t border-[#00AB00]/20 flex items-center justify-center gap-2.5 overflow-x-auto">
            {proyectos3D.map((proj, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 w-16 sm:w-20 h-10 sm:h-12 ${
                    isSelected
                      ? 'border-[#00AB00] scale-105 shadow-[0_0_10px_#00AB00]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  title={proj.titulo}
                >
                  <img
                    src={proj.imagen}
                    alt={proj.titulo}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#00AB00]/20 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hub de Plataformas Generales donde están subidos tus proyectos 3D */}
        <div className="bg-[#1e261e]/70 border border-[#00AB00]/25 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#00AB00] uppercase tracking-wider mb-2 font-bold">
            <Layers className="w-4 h-4" />
            <span>PORTAFOLIOS & PERFILES 3D EXTERNOS</span>
          </div>
          <p className="text-[#9eb19e] text-sm mb-6 max-w-2xl">
            Explora mis modelos interactivos en tiempo real, desgloses fotograma a fotograma y demoreels completos en las principales comunidades 3D:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plataformasGenerales3D.map((plat) => (
              <a
                key={plat.nombre}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audio.playBlip()}
                className="p-4 rounded-xl bg-[#2E332E] border border-[#00AB00]/20 hover:border-[#00AB00] hover:bg-[#373f37] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#182018] border border-[#00AB00]/25 flex items-center justify-center group-hover:border-[#00AB00] transition-colors">
                      <BrandIcon name={plat.nombre} className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00AB00] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#f0f6f0] group-hover:text-[#00AB00] transition-colors">
                    {plat.nombre}
                  </h4>
                  <p className="text-[11px] text-[#9eb19e] mt-1 line-clamp-2">
                    {plat.descripcion}
                  </p>
                </div>
                <div className="font-mono-code text-[10px] text-[#00AB00] mt-3 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <span>Abrir enlace</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal para ampliar imagen */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-[#060806]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={lightboxImage}
              alt="Render ampliado"
              className="max-h-[85vh] w-auto rounded-xl border border-[#00AB00]/40 shadow-2xl object-contain"
            />
            <span className="font-mono-code text-xs text-[#9eb19e] mt-3">
              Haz clic en cualquier parte para cerrar
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
