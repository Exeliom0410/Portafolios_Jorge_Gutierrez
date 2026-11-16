/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, Compass } from 'lucide-react';
import { audio } from '../utils/audio';

export interface WorldSection {
  id: string;
  level: string;
  label: string;
  shortLabel: string;
}

export const WORLD_SECTIONS: WorldSection[] = [
  { id: 'inicio', level: 'START', label: 'INICIO', shortLabel: 'Inicio' },
  { id: 'mundo-01', level: 'MUNDO 01', label: 'SOBRE MÍ', shortLabel: 'Sobre Mí' },
  { id: 'mundo-02', level: 'MUNDO 02', label: 'PROYECTO (DEV)', shortLabel: 'Proyecto' },
  { id: 'mundo-03', level: 'MUNDO 03', label: 'ANIMACIÓN 3D', shortLabel: '3D Art' },
  { id: 'mundo-04', level: 'MUNDO 04', label: 'INVENTARIO', shortLabel: 'Skills' },
  { id: 'mundo-05', level: 'MUNDO 05', label: 'GUARDAR', shortLabel: 'Guardar' },
];

interface WorldNavProps {
  activeId: string;
}

export const WorldNav: React.FC<WorldNavProps> = ({ activeId }) => {
  const [isMuted, setIsMuted] = useState(audio.getMuted());

  const handleToggleSound = () => {
    const muted = audio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      audio.playBlip();
    }
  };

  const handleNavClick = (id: string) => {
    audio.playBlip();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = WORLD_SECTIONS.findIndex((s) => s.id === activeId);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const progressPct = (safeActiveIndex / (WORLD_SECTIONS.length - 1)) * 100;

  return (
    <>
      {/* Botón de Sonido Flotante Superior Izquierdo */}
      <div className="fixed top-3.5 left-3.5 sm:top-5 sm:left-5 z-50 flex items-center gap-2">
        <button
          id="sound-toggle-btn"
          onClick={handleToggleSound}
          title={isMuted ? 'Activar sonido 8-bit' : 'Silenciar sonido'}
          className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-mono-code transition-all duration-200 border cursor-pointer"
          style={{
            backgroundColor: 'rgba(22, 28, 22, 0.85)',
            backdropFilter: 'blur(8px)',
            borderColor: isMuted ? 'rgba(96, 117, 96, 0.4)' : '#00AB00',
            color: isMuted ? '#9eb19e' : '#f0f6f0',
            boxShadow: isMuted ? 'none' : '0 0 12px rgba(0, 171, 0, 0.25)',
          }}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-[#9eb19e]" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#00AB00]" />
          )}
          <span className="hidden sm:inline">
            {isMuted ? 'SONIDO: OFF' : 'SFX: ON'}
          </span>
        </button>

        <div
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono-code border"
          style={{
            backgroundColor: 'rgba(22, 28, 22, 0.85)',
            backdropFilter: 'blur(8px)',
            borderColor: 'rgba(0, 171, 0, 0.25)',
            color: '#00AB00',
          }}
        >
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span>MAPA DE NIVELES</span>
        </div>
      </div>

      {/* Navegación Lateral Derecha (Escritorio) */}
      <nav
        id="desktop-world-nav"
        aria-label="Mapa de Mundo"
        className="hidden xl:flex fixed right-4 2xl:right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-end py-4"
      >
        {/* Línea de ruta con progreso */}
        <div className="absolute right-[9px] top-6 bottom-6 w-[2px] pointer-events-none">
          {/* Línea punteada de fondo */}
          <div
            className="w-full h-full border-r-2 border-dashed"
            style={{ borderColor: 'rgba(0, 171, 0, 0.2)' }}
          />
          {/* Línea verde de progreso activo */}
          <div
            className="absolute top-0 left-0 w-full transition-all duration-300 rounded-full"
            style={{
              height: `${progressPct}%`,
              backgroundColor: '#00AB00',
              boxShadow: '0 0 8px #00AB00',
            }}
          />
        </div>

        {/* Nodos de nivel */}
        <div className="flex flex-col gap-5 relative z-10">
          {WORLD_SECTIONS.map((sec, idx) => {
            const isActive = sec.id === activeId;
            return (
              <button
                key={sec.id}
                id={`nav-node-${sec.id}`}
                onClick={() => handleNavClick(sec.id)}
                className="group flex items-center gap-3 py-1 cursor-pointer outline-none text-right"
              >
                {/* Etiqueta tooltip expandible (permanente en 2xl+, hover en xl para evitar solapar tarjetas en laptops 1280px) */}
                <div
                  className={`font-mono-code text-[11px] px-2.5 py-1 rounded-md border transition-all duration-200 whitespace-nowrap shadow-md ${
                    isActive
                      ? 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 2xl:opacity-100 2xl:translate-x-0 bg-[#2E332E] border-[#00AB00] text-[#f0f6f0]'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#161c16] border-[#00AB00]/20 text-[#9eb19e]'
                  }`}
                >
                  <span className="text-[#00AB00] font-semibold mr-1.5">{sec.level}:</span>
                  {sec.label}
                </div>

                {/* Marcador de nodo */}
                <div className="relative flex items-center justify-center w-5 h-5">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-[#00AB00] border-[#f0f6f0] scale-125 shadow-[0_0_10px_#00AB00]'
                        : 'bg-[#161c16] border-[#607560] group-hover:border-[#00AB00] group-hover:scale-110'
                    }`}
                  />
                  {isActive && (
                    <span className="absolute -left-3 text-[#facc15] font-pixel text-[10px] animate-pulse">
                      ▶
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Navegación Inferior Sticky (Celulares y iPad) */}
      <nav
        id="mobile-world-nav"
        aria-label="Mapa de Mundo Móvil"
        className="xl:hidden fixed bottom-0 left-0 right-0 z-50 px-1.5 sm:px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] border-t border-[#00AB00]/25 bg-[#0f130f]/95 backdrop-blur-md"
      >
        <div className="max-w-xl mx-auto grid grid-cols-6 gap-1">
          {WORLD_SECTIONS.map((sec) => {
            const isActive = sec.id === activeId;
            return (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`flex flex-col items-center justify-center gap-1 px-1 sm:px-2 py-1.5 rounded-lg transition-all text-center cursor-pointer ${
                  isActive
                    ? 'bg-[#2E332E] text-[#00AB00] font-bold border border-[#00AB00]'
                    : 'text-[#9eb19e] hover:text-[#f0f6f0]'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-[#00AB00] scale-125' : 'bg-[#607560]'
                  }`}
                />
                <span className="text-[8px] sm:text-[10px] font-mono-code uppercase tracking-tight sm:tracking-wider leading-none truncate max-w-full">
                  {sec.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
