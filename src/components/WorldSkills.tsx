/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Backpack, Info } from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';

export const WorldSkills: React.FC = () => {
  const { inventarioHabilidades } = PORTFOLIO_CONFIG;
  const [selectedSkill, setSelectedSkill] = useState<{
    label: string;
    icon: string;
    nivel?: string;
    descripcion?: string;
    categoria: string;
  } | null>(null);

  const handleSlotClick = (
    item: { label: string; icon: string; nivel?: string; descripcion?: string },
    categoria: string
  ) => {
    audio.playBlip();
    setSelectedSkill({ ...item, categoria });
  };

  return (
    <section id="mundo-04" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline justify-between gap-4 mb-12 sm:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00] mb-2">
              <span className="w-3 h-3 bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
              <span>MUNDO 04</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
              Inventario de habilidades
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#34d399] bg-[#1e261e] px-3.5 py-1.5 rounded-full border border-[#00AB00]/30">
            <Backpack className="w-3.5 h-3.5" />
            <span>INVENTORY SLOTS // TECH_STACK</span>
          </div>
        </div>

        {/* Panel de Inventario tipo RPG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slots de Inventario por Categoría */}
          <div className="lg:col-span-8 space-y-8">
            {inventarioHabilidades.map((cat) => (
              <div key={cat.categoria} className="bg-[#1e261e] border border-[#00AB00]/25 rounded-2xl p-5 sm:p-6">
                <h3 className="font-mono-code text-xs font-bold text-[#00AB00] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[#00AB00]" />
                  <span>{cat.categoria}</span>
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {cat.items.map((item) => {
                    const isSelected = selectedSkill?.label === item.label;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleSlotClick(item, cat.categoria)}
                        className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 cursor-pointer min-h-[86px] ${
                          isSelected
                            ? 'bg-[#2E332E] border-[#00AB00] shadow-[0_0_15px_rgba(0,171,0,0.35)] scale-105'
                            : 'bg-[#161c16] border-[#00AB00]/20 hover:border-[#00AB00] hover:bg-[#2E332E] hover:-translate-y-1'
                        }`}
                        title={item.label}
                      >
                        {/* Esquinas decorativas de ranura de inventario */}
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#00AB00]/40" />
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#00AB00]/40" />

                        <div className="w-8 h-8 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                          <BrandIcon name={item.label} className="w-6 h-6" />
                        </div>
                        <span className="font-mono-code text-[10px] text-[#f0f6f0] text-center leading-tight font-semibold">
                          {item.label}
                        </span>

                        {item.nivel && (
                          <span className="font-mono-code text-[8px] text-[#34d399] mt-1 uppercase tracking-tighter">
                            {item.nivel}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Panel Lateral: Detalle del Item Seleccionado (Inspection Window) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#1e261e] border-2 border-[#00AB00]/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              {/* Scanlines sutiles */}
              <div className="absolute inset-0 crt-overlay opacity-20 pointer-events-none" />

              <div className="flex items-center gap-2 font-mono-code text-xs text-[#00AB00] pb-3 border-b border-[#00AB00]/20 mb-4 font-bold">
                <Info className="w-4 h-4" />
                <span>INSPECCIÓN DE HABILIDAD</span>
              </div>

              {selectedSkill ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#2E332E] border border-[#00AB00] flex items-center justify-center shadow-md">
                      <BrandIcon name={selectedSkill.label} className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-[#f0f6f0]">
                        {selectedSkill.label}
                      </h4>
                      <span className="font-mono-code text-[11px] text-[#34d399] uppercase">
                        {selectedSkill.categoria}
                      </span>
                    </div>
                  </div>

                  {selectedSkill.nivel && (
                    <div className="inline-block font-mono-code text-xs px-2.5 py-1 rounded bg-[#0f130f] border border-[#00AB00]/30 text-[#00AB00]">
                      NIVEL: {selectedSkill.nivel}
                    </div>
                  )}

                  <p className="text-[#9eb19e] text-sm leading-relaxed bg-[#161c16] p-3.5 rounded-xl border border-[#00AB00]/15">
                    {selectedSkill.descripcion || 'Herramienta esencial dominada e integrada en el flujo de desarrollo.'}
                  </p>
                </div>
              ) : (
                <div className="py-8 text-center text-[#9eb19e] space-y-2">
                  <div className="text-3xl opacity-50">👆</div>
                  <p className="font-mono-code text-xs">
                    Haz clic en cualquier ranura del inventario para ver los detalles técnicos y dominio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
