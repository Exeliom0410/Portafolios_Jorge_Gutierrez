/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Code2, Play, GitBranch, Cpu, CheckCircle2 } from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';

interface WorldProgrammingProps {
  onOpenTrailer: (videoId: string, title: string) => void;
}

export const WorldProgramming: React.FC<WorldProgrammingProps> = ({ onOpenTrailer }) => {
  const { proyectosProgramacion } = PORTFOLIO_CONFIG;

  return (
    <section id="mundo-02" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline justify-between gap-4 mb-12 sm:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00] mb-2">
              <span className="w-3 h-3 bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
              <span>MUNDO 02</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
              Proyecto de Programación
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#34d399] bg-[#1e261e] px-3.5 py-1.5 rounded-full border border-[#00AB00]/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>GAMEPLAY CODE & ARCHITECTURE</span>
          </div>
        </div>

        {/* Contenedor de Proyectos de Programación */}
        {proyectosProgramacion.length === 1 ? (
          (() => {
            const p = proyectosProgramacion[0];
            return (
              <article
                key={p.id}
                className="bg-[#1e261e] border-2 border-[#00AB00]/30 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#00AB00] hover:shadow-[0_20px_45px_rgba(0,171,0,0.22)] group"
              >
                {/* Barra superior estilo terminal arcade */}
                <div className="flex items-center justify-between px-6 py-3 bg-[#161c16] border-b border-[#00AB00]/20 font-mono-code text-xs">
                  <div className="flex items-center gap-2 text-[#00AB00]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AB00] animate-pulse" />
                    <span className="font-bold">PROYECTO DESTACADO · GAMEPLAY & ARQUITECTURA</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#34d399] font-semibold">
                    <span className="hidden sm:inline">MOTOR:</span>
                    <span>C# · UNITY 2D</span>
                  </div>
                </div>

                {/* Grid Panorámico 2 Columnas: Portada e Información completa */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Columna Izquierda: Portada / Imagen Grande */}
                  <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] bg-[#121612] overflow-hidden group">
                    <img
                      src={p.imagen}
                      alt={p.titulo}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 crt-overlay opacity-35 pointer-events-none" />

                    {/* Botón de Trailer si existe video */}
                    {p.videoYoutubeId && (
                      <button
                        onClick={() => {
                          audio.playBlip();
                          onOpenTrailer(p.videoYoutubeId!, p.titulo);
                        }}
                        className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#0f130f]/85 border-2 border-[#00AB00] text-[#00AB00] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer"
                        title="Ver Trailer / Gameplay"
                      >
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </button>
                    )}

                    {/* Badge inferior sobre la imagen */}
                    <div className="absolute bottom-4 left-4 font-mono-code text-xs px-3 py-1 rounded-md bg-[#0f130f]/85 border border-[#00AB00]/50 text-[#f0f6f0] flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#00AB00]" />
                      <span>BEAT 'EM UP DE ACCIÓN</span>
                    </div>
                  </div>

                  {/* Columna Derecha: Información completa, especificaciones técnicas y enlaces */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#1e261e] border-t lg:border-t-0 lg:border-l border-[#00AB00]/20">
                    <div className="space-y-5">
                      {/* Etiquetas de Tecnologías */}
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono-code text-xs font-semibold text-[#00AB00] bg-[#00AB00]/10 border border-[#00AB00]/30 px-3 py-1 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Título de Proyecto */}
                      <div>
                        <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f0f6f0] group-hover:text-[#00AB00] transition-colors leading-tight">
                          {p.titulo}
                        </h3>
                        <p className="font-mono-code text-xs text-[#34d399] mt-1">
                          Desarrollo y Programación Principal de Sistemas de Combate
                        </p>
                      </div>

                      {/* Descripción Funcional */}
                      <p className="text-[#b3c7b3] text-sm sm:text-base leading-relaxed">
                        {p.descripcion}
                      </p>

                      {/* Aspectos Técnicos Destacados (Grid en 2 columnas) */}
                      {p.caracteristicasTecnicas && p.caracteristicasTecnicas.length > 0 && (
                        <div className="bg-[#161c16] rounded-2xl p-4 sm:p-5 border border-[#00AB00]/20">
                          <div className="font-mono-code text-xs text-[#34d399] font-bold uppercase tracking-wider flex items-center gap-2 mb-3">
                            <Code2 className="w-4 h-4 text-[#00AB00]" />
                            <span>Implementación Técnica & Gameplay:</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {p.caracteristicasTecnicas.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-[#d1dfd1] leading-snug"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#00AB00] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#00AB00]/20 mt-6">
                      {p.linkJugar && (
                        <a
                          href={p.linkJugar}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => audio.playBlip()}
                          className="flex-1 min-w-[200px] font-mono-code text-sm px-5 py-3 rounded-xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-bold text-center flex items-center justify-center gap-2.5 transition-all duration-150 shadow-md cursor-pointer hover:shadow-[0_0_15px_rgba(0,171,0,0.4)]"
                        >
                          {p.linkJugar.includes('itch') ? (
                            <BrandIcon name="itchio" className="w-4 h-4 shrink-0" colored={false} />
                          ) : (
                            <Play className="w-4 h-4 fill-current" />
                          )}
                          <span>{p.linkJugar.includes('itch') ? 'JUGAR EN ITCH.IO' : 'JUGAR / DEMO'}</span>
                        </a>
                      )}

                      {p.linkCodigo && (
                        <a
                          href={p.linkCodigo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => audio.playBlip()}
                          className="font-mono-code text-sm px-5 py-3 rounded-xl bg-[#2E332E] hover:bg-[#373f37] hover:text-[#00AB00] text-[#f0f6f0] border border-[#00AB00]/30 text-center flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer"
                          title="Ver Repositorio en GitHub"
                        >
                          <BrandIcon name="github" className="w-4 h-4 shrink-0" />
                          <span>Ver Código en GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {proyectosProgramacion.map((p) => (
              <article
                key={p.id}
                className="bg-[#1e261e] border border-[#00AB00]/25 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#00AB00] hover:shadow-[0_15px_35px_rgba(0,171,0,0.2)] group"
              >
                {/* Portada con Overlay CRT y Botón Trailer */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#161c16]">
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 crt-overlay opacity-40 pointer-events-none" />

                  {/* Botón de Trailer si existe video */}
                  {p.videoYoutubeId && (
                    <button
                      onClick={() => {
                        audio.playBlip();
                        onOpenTrailer(p.videoYoutubeId!, p.titulo);
                      }}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#0f130f]/85 border-2 border-[#00AB00] text-[#00AB00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110 shadow-lg cursor-pointer"
                      title="Ver Trailer / Gameplay"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  )}

                  {/* Badge Superior */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded font-mono-code text-[10px] uppercase tracking-wider bg-[#0f130f]/80 text-[#34d399] border border-[#00AB00]/40 backdrop-blur-xs">
                    C# / ENGINE
                  </div>
                </div>

                {/* Contenido / Cuerpo de la Tarjeta */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
                  {/* Etiquetas de Tecnologías */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-[10px] font-semibold text-[#00AB00] bg-[#00AB00]/10 border border-[#00AB00]/30 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Título */}
                  <h3 className="font-display font-bold text-xl text-[#f0f6f0] group-hover:text-[#00AB00] transition-colors">
                    {p.titulo}
                  </h3>

                  {/* Descripción Funcional */}
                  <p className="text-[#9eb19e] text-xs sm:text-sm leading-relaxed flex-1">
                    {p.descripcion}
                  </p>

                  {/* Aspectos Técnicos Destacados */}
                  {p.caracteristicasTecnicas && p.caracteristicasTecnicas.length > 0 && (
                    <div className="bg-[#161c16] rounded-xl p-3 border border-[#00AB00]/15 space-y-1.5">
                      <div className="font-mono-code text-[10px] text-[#34d399] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Code2 className="w-3 h-3" />
                        <span>Implementación Técnica:</span>
                      </div>
                      {p.caracteristicasTecnicas.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 text-[11px] text-[#b3c7b3] leading-snug"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#00AB00] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Botones de Acción */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#00AB00]/15 mt-auto">
                    {p.linkJugar && (
                      <a
                        href={p.linkJugar}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => audio.playBlip()}
                        className="flex-1 font-mono-code text-xs px-3 py-2 rounded-lg bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-bold text-center flex items-center justify-center gap-2 transition-all duration-150 shadow-sm"
                      >
                        {p.linkJugar.includes('itch') ? (
                          <BrandIcon name="itchio" className="w-4 h-4 shrink-0" colored={false} />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        )}
                        <span>{p.linkJugar.includes('itch') ? 'Jugar en itch.io' : 'Jugar / Demo'}</span>
                      </a>
                    )}

                    {p.linkCodigo && (
                      <a
                        href={p.linkCodigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => audio.playBlip()}
                        className="font-mono-code text-xs px-3 py-2 rounded-lg bg-[#2E332E] hover:bg-[#373f37] hover:text-[#00AB00] text-[#f0f6f0] border border-[#00AB00]/30 text-center flex items-center justify-center gap-2 transition-all duration-150"
                        title="Ver Repositorio en GitHub"
                      >
                        <BrandIcon name="github" className="w-4 h-4 shrink-0" />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
