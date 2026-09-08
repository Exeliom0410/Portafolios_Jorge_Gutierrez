/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { ArrowUp, Gamepad2 } from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';

export const Footer: React.FC = () => {
  const { footer, socials } = PORTFOLIO_CONFIG;

  const scrollToTop = () => {
    audio.playBlip();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#00AB00]/20 bg-[#0f130f] pt-12 pb-24 lg:pb-12 text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Botón Volver Arriba */}
        <button
          onClick={scrollToTop}
          className="font-mono-code text-xs font-semibold px-4 py-2 rounded-xl bg-[#1e261e] hover:bg-[#2E332E] text-[#9eb19e] hover:text-[#00AB00] border border-[#00AB00]/25 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>VOLVER AL INICIO</span>
        </button>

        {/* Redes */}
        <div className="flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              onClick={() => audio.playBlip()}
              className="w-9 h-9 rounded-lg bg-[#161c16] border border-[#00AB00]/20 hover:border-[#00AB00] hover:scale-110 text-[#9eb19e] flex items-center justify-center transition-all"
            >
              <BrandIcon name={social.label} className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Texto de Copyright */}
        <div className="flex items-center justify-center gap-2 font-mono-code text-xs text-[#607560]">
          <Gamepad2 className="w-3.5 h-3.5 text-[#00AB00]" />
          <p id="footerText">{footer}</p>
        </div>
      </div>
    </footer>
  );
};
