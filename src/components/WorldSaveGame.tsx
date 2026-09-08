/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { 
  Mail, 
  MapPin, 
  Clock, 
  FileDown, 
  QrCode, 
  Check, 
  Copy, 
  Save, 
  Phone, 
  Eye, 
  X, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Languages, 
  Sparkles 
} from 'lucide-react';
import { audio } from '../utils/audio';

export const WorldSaveGame: React.FC = () => {
  const { contacto, qrUrl: fallbackUrl } = PORTFOLIO_CONFIG;
  const [pageUrl, setPageUrl] = useState(fallbackUrl);
  const [copied, setCopied] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);

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
              <div id="contactList" className="space-y-3 font-mono-code text-sm">
                <div className="flex items-center gap-3 text-[#9eb19e] bg-[#161c16] p-3 rounded-xl border border-[#00AB00]/15">
                  <Mail className="w-4 h-4 text-[#00AB00] shrink-0" />
                  <a
                    href={`mailto:${contacto.email}`}
                    className="text-[#f0f6f0] font-semibold break-all hover:text-[#00AB00] transition-colors"
                  >
                    {contacto.email}
                  </a>
                </div>

                {contacto.telefono && (
                  <div className="flex items-center gap-3 text-[#9eb19e] bg-[#161c16] p-3 rounded-xl border border-[#00AB00]/15">
                    <Phone className="w-4 h-4 text-[#00AB00] shrink-0" />
                    <a
                      href={`tel:${contacto.telefono.replace(/\s+/g, '')}`}
                      className="text-[#f0f6f0] font-semibold hover:text-[#00AB00] transition-colors"
                    >
                      {contacto.telefono}
                    </a>
                  </div>
                )}

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
                  className="font-mono-code text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] inline-flex items-center gap-2.5 transition-all duration-200 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Escribir un email</span>
                </a>

                {/* Botón Descargar CV oficial */}
                <a
                  id="ctaCv"
                  href={contacto.cvUrl}
                  download="CV_Jorge_Gutierrez.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playAchievement()}
                  className="font-mono-code text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl bg-[#2E332E] hover:bg-[#373f37] text-[#f0f6f0] border-2 border-[#00AB00]/50 hover:border-[#00AB00] inline-flex items-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md cursor-pointer group"
                  title="Descargar Curriculum Vitae en PDF"
                >
                  <FileDown className="w-4 h-4 text-[#00AB00] group-hover:scale-110 transition-transform" />
                  <span>Descargar CV</span>
                </a>

                {/* Botón Ver CV en pantalla */}
                <button
                  type="button"
                  onClick={() => {
                    audio.playBlip();
                    setShowCvModal(true);
                  }}
                  className="font-mono-code text-xs sm:text-sm font-semibold px-4 py-3.5 rounded-xl bg-[#162016] hover:bg-[#202920] text-[#34d399] hover:text-[#00AB00] border border-[#00AB00]/30 inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
                  title="Vista previa del CV"
                >
                  <Eye className="w-4 h-4 text-[#00AB00]" />
                  <span>Ver CV</span>
                </button>
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

      {/* Modal interactivo para visualizar el CV de Jorge Gutiérrez */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 bg-[#060806]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#f8fafc] text-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#00AB00] my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Barra superior de control del Modal */}
            <div className="bg-[#121c12] px-6 py-3.5 flex items-center justify-between border-b border-[#00AB00]/30">
              <div className="flex items-center gap-2 text-[#00AB00] font-mono-code text-xs sm:text-sm font-bold">
                <FileText className="w-4 h-4" />
                <span>CURRICULUM VITAE · JORGE GUTIÉRREZ</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={contacto.cvUrl}
                  download="CV_Jorge_Gutierrez.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audio.playAchievement()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-mono-code text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>DESCARGAR PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowCvModal(false)}
                  className="p-1.5 rounded-lg text-[#9eb19e] hover:text-[#f0f6f0] hover:bg-[#1e261e] transition-colors cursor-pointer"
                  title="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Documento CV renderizado fielmente */}
            <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
              {/* Header Banner */}
              <div className="bg-[#dde6f0] -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 p-8 text-center border-b border-[#cbd5e1]">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#193e73] tracking-wide mb-1">
                  JORGE GUTIÉRREZ
                </h1>
                <p className="text-sm sm:text-base text-[#41587a] italic font-medium">
                  Estudiante educación superior
                </p>
              </div>

              {/* Contenido en 2 columnas estilo CV */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Columna Izquierda (Objetivo, Habilidades, Contacto) */}
                <div className="md:col-span-5 space-y-6 md:border-r md:border-slate-200 md:pr-6">
                  {/* Objetivo Profesional */}
                  <div>
                    <h3 className="text-sm font-bold text-[#193e73] tracking-wider uppercase mb-2">
                      Objetivo Profesional
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Estoy en busca de un trabajo que pueda complementar mis estudios disponible Part-time.
                    </p>
                    <p className="text-xs text-slate-800 font-semibold mt-2">
                      Estoy dispuesto a aprender.
                    </p>
                  </div>

                  <div className="border-b border-dotted border-slate-300" />

                  {/* Habilidades */}
                  <div>
                    <h3 className="text-sm font-bold text-[#193e73] tracking-wider uppercase mb-2.5">
                      Habilidades
                    </h3>
                    <ul className="text-xs text-slate-700 space-y-1.5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Adaptabilidad</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Trabajo en equipo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Responsable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Razonable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Ordenado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#193e73]" />
                        <span>Disciplinado</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-dotted border-slate-300" />

                  {/* Contacto */}
                  <div>
                    <h3 className="text-sm font-bold text-[#193e73] tracking-wider uppercase mb-2.5">
                      Contacto
                    </h3>
                    <div className="text-xs text-slate-700 space-y-2">
                      <div className="flex items-start gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#193e73] shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">+56 9 8418 8621</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#193e73] shrink-0 mt-0.5" />
                        <span className="break-all font-medium text-slate-800">
                          jorge.gutierrez.leiva.1928@gmail.com
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#193e73] shrink-0 mt-0.5" />
                        <span>Villa La Obra 1 Gabriela, Santiago</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha (Experiencia, Estudios, Certificaciones, Idioma) */}
                <div className="md:col-span-7 space-y-6">
                  {/* Experiencia Laboral */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#193e73] uppercase tracking-wider mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Experiencia Laboral</span>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold text-[#193e73]">
                        TRABAJO EN PACKING-SANCO S.A.
                      </h4>
                      <p className="text-[11px] text-slate-500 italic mb-1.5">
                        Sanco S.A. Sgda Familia · Dic 2017 - Ene 2018
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Encargado de verificar la cantidad de fruta en las cajas y empaquetarlas.
                      </p>
                    </div>
                  </div>

                  {/* Estudios */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#193e73] uppercase tracking-wider mb-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Estudios</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#193e73]">
                            UNIVERSIDAD BERNARDO O'HIGGINS
                          </h4>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            2023 - Actualmente
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 mt-1">
                          Carrera Ingeniería en realidad virtual y juegos digitales
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#193e73]">
                            LICEO TÉCNICO INITEC
                          </h4>
                          <span className="text-[10px] font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-md">
                            2018 - 2022
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 mt-1">
                          Técnico en conectividad y redes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificaciones */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#193e73] uppercase tracking-wider mb-2">
                      <Award className="w-4 h-4" />
                      <span>Certificaciones</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-[#193e73] bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                        TECNICO PROFESIONAL CERTIFICADO
                      </div>
                      <div className="text-xs font-bold text-[#193e73] bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                        CURSO EN EXCEL BÁSICO CERTIFICADO
                      </div>
                      <div className="text-xs font-bold text-[#193e73] bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                        CURSO EN QA TESTING CERTIFICADO
                      </div>
                    </div>
                  </div>

                  {/* Idioma */}
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#193e73] uppercase tracking-wider mb-2">
                      <Languages className="w-4 h-4" />
                      <span>Idioma</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-slate-700">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
                        <span className="block font-bold text-[#193e73]">Español</span>
                        <span className="text-[11px] text-slate-500">Nativo</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
                        <span className="block font-bold text-[#193e73]">Inglés</span>
                        <span className="text-[11px] text-slate-500">Nivel medio</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
                        <span className="block font-bold text-[#193e73]">Francés</span>
                        <span className="text-[11px] text-slate-500">Básico</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie del modal */}
            <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Formato PDF Oficial disponible para descarga inmediata</span>
              <a
                href={contacto.cvUrl}
                download="CV_Jorge_Gutierrez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audio.playAchievement()}
                className="font-bold text-[#193e73] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Descargar archivo PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
