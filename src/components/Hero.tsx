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
      className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 pb-24 xl:pb-20 max-w-5xl mx-auto select-none"
    >
      {/* Tag de Disponibilidad con punto parpadeante */}
      <div
        id="heroTag"
        className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border mb-5 sm:mb-6 text-[10px] sm:text-xs font-mono-code uppercase tracking-wider sm:tracking-widest bg-[#161c16]/80 text-[#34d399] border-[#00AB00]/30 shadow-[0_0_15px_rgba(0,171,0,0.15)] max-w-full"
      >
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00AB00] animate-ping shrink-0" />
        <span className="font-semibold text-[#00AB00] leading-snug">{hero.tagAvailability}</span>
      </div>

      {/* Título Principal / Nombre con Gradiente en Espectro Verde y Plata */}
      <h1
        id="heroName"
        className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-4 sm:mb-5 break-words max-w-full"
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
        className="font-mono-code text-sm sm:text-xl md:text-2xl text-[#9eb19e] mb-5 sm:mb-6 flex items-center justify-center flex-wrap gap-1 px-2"
      >
        <span>{hero.rol}</span>
        <span className="cursor-blink text-[#00AB00] font-bold">_</span>
      </div>

      {/* Tagline descriptivo */}
      <p
        id="heroTagline"
        className="max-w-2xl text-[#9eb19e] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 font-normal px-2"
      >
        {hero.tagline}
      </p>

      {/* Botón Central PRESS START con Animación de Pulso Retro Arcade */}
      <div className="mb-8 sm:mb-12">
        <button
          id="press-start-btn"
          onClick={handleStart}
          className="btn-arcade-pulse font-pixel text-xs sm:text-sm text-[#0c0f0c] bg-[#00AB00] hover:bg-[#10e85a] px-7 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold tracking-wider inline-flex items-center gap-3 transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(0,171,0,0.5)] border-2 border-[#10e85a]"
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
        className="mt-8 xl:mt-0 xl:absolute xl:bottom-8 xl:left-1/2 xl:-translate-x-1/2 flex flex-col items-center gap-2 font-mono-code text-[11px] text-[#607560] tracking-widest pointer-events-none"
      >
        <span>SCROLL</span>
        <div className="w-[2px] h-7 sm:h-8 bg-gradient-to-b from-[#00AB00] to-transparent scroll-line-anim" />
      </div>
    </header>
  );
};
