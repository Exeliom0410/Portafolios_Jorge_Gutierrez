/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Mail, MapPin, Clock, FileDown, QrCode, Check, Copy, Save, ExternalLink } from 'lucide-react';
import { audio } from '../utils/audio';

export const WorldSaveGame: React.FC = () => {
  const { contacto, qrUrl: fallbackUrl } = PORTFOLIO_CONFIG;
  const [pageUrl, setPageUrl] = useState(fallbackUrl);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Detectar automáticamente y de forma estricta la URL real de esta página
    if (typeof window !== 'undefined' && window.location?.href) {
      // Tomamos el origen y pathname limpio para que enlace exactamente a la web
      const fullUrl = window.location.origin + window.location.pathname;
      setPageUrl(fullUrl || window.location.href);
    }
  }, []);

  const handleCopy = () => {
    audio.playBlip();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(pageUrl);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(
    pageUrl
  )}`;

  return (
    <section id="mundo-05" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline justify-between gap-4 mb-12 sm:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00] mb-2">
              <span className="w-3 h-3 bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
              <span>MUNDO 05</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
              Guardar partida
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#00AB00] bg-[#1e261e] px-3.5 py-1.5 rounded-full border border-[#00AB00]/30">
            <Save className="w-3.5 h-3.5" />
            <span>CHECKPOINT // SAVE POINT</span>
          </div>
        </div>

        {/* Pantalla de Guardado (Save Screen) */}
        <div className="bg-[#1e261e] border-2 border-[#00AB00]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Lado Izquierdo: Datos de Contacto y Acción */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f0f6f0] mb-3">
                  ¿Continuamos la historia?
                </h3>
                <p id="contactIntro" className="text-[#9eb19e] text-base leading-relaxed">
                  {contacto.intro}
                </p>
              </div>

              {/* Lista de Contacto */}
              <div id="contactList" className="space-y-3.5 font-mono-code text-sm">
                <div className="flex items-center gap-3 text-[#9eb19e] bg-[#161c16] p-3 rounded-xl border border-[#00AB00]/15">
                  <Mail className="w-4 h-4 text-[#00AB00] shrink-0" />
                  <span className="text-[#f0f6f0] font-semibold break-all">{contacto.email}</span>
                </div>

                <div className="flex items-center gap-3 text-[#9eb19e] bg-[#161c16] p-3 rounded-xl border border-[#00AB00]/15">
                  <MapPin className="w-4 h-4 text-[#00AB00] shrink-0" />
                  <span className="text-[#f0f6f0]">{contacto.ubicacion}</span>
                </div>

                <div className="flex items-center gap-3 text-[#9eb19e] bg-[#161c16] p-3 rounded-xl border border-[#00AB00]/15">
                  <Clock className="w-4 h-4 text-[#00AB00] shrink-0" />
                  <span className="text-[#f0f6f0]">{contacto.disponibilidad}</span>
                </div>
              </div>

              {/* Botones de Contacto Primarios */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  id="ctaEmail"
                  href={`mailto:${contacto.email}`}
                  onClick={() => audio.playBlip()}
                  className="font-mono-code text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] inline-flex items-center gap-2.5 transition-all duration-200 shadow-md transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Escribir un email</span>
                </a>

                <a
                  id="ctaCv"
                  href={contacto.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playBlip()}
                  className="font-mono-code text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl bg-[#2E332E] hover:bg-[#373f37] text-[#f0f6f0] border border-[#00AB00]/40 inline-flex items-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <FileDown className="w-4 h-4 text-[#00AB00]" />
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>

            {/* Lado Derecho: Visor de Código QR Estático */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-xs bg-[#161c16] border-2 border-dashed border-[#00AB00]/35 rounded-2xl p-6 text-center flex flex-col items-center shadow-lg">
                <div className="flex items-center gap-1.5 font-pixel text-[10px] text-[#00AB00] mb-3">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>ESCANEA PARA ABRIR ESTA PÁGINA</span>
                </div>

                {/* Imagen QR Estática enlazada directamente a esta página */}
                <div className="p-2.5 bg-white rounded-xl shadow-inner mb-3.5 group relative">
                  <img
                    id="qrImg"
                    src={qrImageUrl}
                    alt="Código QR de esta página"
                    width={180}
                    height={180}
                    className="block rounded-lg"
                  />
                </div>

                {/* Indicador de URL fija */}
                <div className="w-full space-y-2.5">
                  <div className="bg-[#0f130f] border border-[#00AB00]/30 rounded-lg px-3 py-2 text-left">
                    <span className="block font-mono-code text-[10px] text-[#34d399] uppercase font-bold tracking-wider mb-0.5">
                      URL del Portafolio
                    </span>
                    <p className="font-mono-code text-xs text-[#f0f6f0] truncate select-all" title={pageUrl}>
                      {pageUrl}
                    </p>
                  </div>

                  <button
                    id="qrCopyBtn"
                    type="button"
                    onClick={handleCopy}
                    className="w-full font-mono-code text-xs font-bold py-2.5 px-3 rounded-lg bg-[#2E332E] hover:bg-[#373f37] hover:text-[#00AB00] text-[#f0f6f0] border border-[#00AB00]/40 flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00AB00]" />
                        <span className="text-[#00AB00]">¡Enlace copiado al portapapeles!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#00AB00]" />
                        <span>Copiar enlace de esta página</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
