/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';

interface HeroProps {
  onPressStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPressStart }) => {
  const { hero, socials } = PORTFOLIO_CONFIG;

  const handleStart = () => {
    audio.playStart();
    onPressStart();
  };

  return (
    <header
      id="inicio"
      className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 max-w-5xl mx-auto select-none"
    >
      {/* Tag de Disponibilidad con punto parpadeante */}
      <div
        id="heroTag"
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-6 text-xs font-mono-code uppercase tracking-widest bg-[#161c16]/80 text-[#34d399] border-[#00AB00]/30 shadow-[0_0_15px_rgba(0,171,0,0.15)]"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#00AB00] animate-ping" />
        <span className="font-semibold text-[#00AB00]">{hero.tagAvailability}</span>
      </div>

      {/* Título Principal / Nombre con Gradiente en Espectro Verde y Plata */}
      <h1
        id="heroName"
        className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-5"
        style={{
          background: 'linear-gradient(135deg, #ffffff 15%, #00AB00 65%, #34d399 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(0, 171, 0, 0.25)',
        }}
      >
        {hero.nombre}
      </h1>

      {/* Rol / Subtítulo con Cursor Parpadeante de Consola */}
      <div
        id="heroRole"
        className="font-mono-code text-base sm:text-xl md:text-2xl text-[#9eb19e] mb-6 flex items-center justify-center gap-1"
      >
        <span>{hero.rol}</span>
        <span className="cursor-blink text-[#00AB00] font-bold">_</span>
      </div>

      {/* Tagline descriptivo */}
      <p
        id="heroTagline"
        className="max-w-2xl text-[#9eb19e] text-base sm:text-lg leading-relaxed mb-10 font-normal"
      >
        {hero.tagline}
      </p>

      {/* Botón Central PRESS START con Animación de Pulso Retro Arcade */}
      <div className="mb-12">
        <button
          id="press-start-btn"
          onClick={handleStart}
          className="btn-arcade-pulse font-pixel text-xs sm:text-sm text-[#0c0f0c] bg-[#00AB00] hover:bg-[#10e85a] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold tracking-wider inline-flex items-center gap-3 transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(0,171,0,0.5)] border-2 border-[#10e85a]"
        >
          <span className="text-sm">▶</span>
          <span>PRESS START</span>
        </button>
      </div>

      {/* Redes Sociales del Hero */}
      <div id="heroSocials" className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            onClick={() => audio.playBlip()}
            className="w-11 h-11 rounded-xl bg-[#1e261e] border border-[#00AB00]/25 text-[#f0f6f0] flex items-center justify-center transition-all duration-200 hover:bg-[#2E332E] hover:border-[#00AB00] hover:scale-110 shadow-sm"
          >
            <BrandIcon name={social.label} className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Indicador de Desplazamiento (SCROLL) */}
      <div
        id="heroScrollHint"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono-code text-[11px] text-[#607560] tracking-widest pointer-events-none"
      >
        <span>SCROLL</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-[#00AB00] to-transparent scroll-line-anim" />
      </div>
    </header>
  );
};
