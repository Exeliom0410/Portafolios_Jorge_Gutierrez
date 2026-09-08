/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Shield, Sparkles, Terminal } from 'lucide-react';

export const WorldAbout: React.FC = () => {
  const { avatar, bio, stats } = PORTFOLIO_CONFIG;

  return (
    <section id="mundo-01" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline gap-4 mb-12 sm:mb-16 flex-wrap">
          <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00]">
            <span className="w-3 h-3 bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
            <span>MUNDO 01</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
            Sobre mí
          </h2>
          <span className="font-mono-code text-xs text-[#9eb19e] px-2.5 py-1 rounded bg-[#1e261e] border border-[#00AB00]/20">
            [CHARACTER PROFILE]
          </span>
        </div>

        {/* Grid: Avatar + Bio & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Avatar Frame RPG */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[260px] aspect-square rounded-2xl p-2 bg-[#1e261e] border-2 border-[#00AB00]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
              {/* Esquinas decorativas de marco arcade */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00AB00]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00AB00]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00AB00]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00AB00]" />

              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#2E332E]">
                <img
                  id="avatarImg"
                  src={avatar.src}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none" />
              </div>

              {/* Insignia de Nivel RPG */}
              <div
                id="avatarBadge"
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-pixel text-[11px] px-3.5 py-1.5 rounded-md bg-[#0f130f] border border-[#00AB00] text-[#00AB00] shadow-[0_0_12px_rgba(0,171,0,0.4)] flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3 h-3 text-[#facc15]" />
                <span>{avatar.badge}</span>
              </div>
            </div>

            {/* Subtítulo de Clase de Personaje */}
            <div className="mt-6 flex items-center gap-2 font-mono-code text-xs text-[#9eb19e] bg-[#161c16] px-3 py-1.5 rounded-lg border border-[#00AB00]/20">
              <Shield className="w-3.5 h-3.5 text-[#00AB00]" />
              <span>CLASE: GAME DEV / CODER</span>
            </div>
          </div>

          {/* Biografía y Stat Sheet RPG */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* Texto de Biografía */}
            <div className="bg-[#1e261e] border border-[#00AB00]/25 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[#00AB00] mb-4 pb-2 border-b border-[#00AB00]/15">
                <Terminal className="w-4 h-4" />
                <span>BIO // REGISTRO_DEL_JUGADOR</span>
              </div>
              <div id="bioText" className="space-y-4 text-[#d1dfd1] text-base leading-relaxed">
                {bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Hoja de Estadísticas (Stat Sheet) */}
            <div className="bg-[#1e261e] border border-[#00AB00]/25 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between font-mono-code text-xs text-[#00AB00] mb-5 pb-2 border-b border-[#00AB00]/15">
                <span>HABILIDADES DE ATRIBUTO (STATS)</span>
                <span className="text-[#9eb19e]">MAX: 100</span>
              </div>

              <div id="statSheet" className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="grid grid-cols-12 gap-3 items-center">
                    <span className="col-span-5 sm:col-span-4 font-mono-code text-xs sm:text-sm text-[#9eb19e] truncate">
                      {stat.label}
                    </span>
                    
                    {/* Barra de Progreso */}
                    <div className="col-span-5 sm:col-span-7 h-2.5 bg-[#121612] rounded-full overflow-hidden p-0.5 border border-[#00AB00]/30">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${stat.value}%`,
                          background: 'linear-gradient(90deg, #00AB00, #34d399)',
                          boxShadow: '0 0 8px rgba(0, 171, 0, 0.4)',
                        }}
                      />
                    </div>

                    <span className="col-span-2 sm:col-span-1 font-mono-code text-xs text-[#00AB00] text-right font-bold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
