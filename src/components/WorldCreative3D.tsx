/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { 
  Box, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Film,
  Image as ImageIcon,
  Maximize2, 
  Play, 
  Pause, 
  Sparkles,
  Video
} from 'lucide-react';
import { audio } from '../utils/audio';
import { BrandIcon } from './BrandIcon';
import { getLocalVideo, getLocalCover } from '../utils/videoStorage';

const getYouTubeId = (url?: string | null): string | null => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
};

export const WorldCreative3D: React.FC = () => {
  const { proyectos3D } = PORTFOLIO_CONFIG;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'video' | 'render'>('render');
  const [customVideos, setCustomVideos] = useState<Record<string, string>>({});
  const [customCovers, setCustomCovers] = useState<Record<string, string>>({});
  const [customLinks, setCustomLinks] = useState<Record<string, string>>({});
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageFallbackAttempted, setImageFallbackAttempted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentProject = proyectos3D[currentIndex] || proyectos3D[0];
  const activeCustomVideo = customVideos[currentProject.id];
  const activeCustomCover = customCovers[currentProject.id];
  const activeCustomLink = customLinks[currentProject.id];

  const validCustomLink =
    activeCustomLink &&
    activeCustomLink !== '#' &&
    activeCustomLink !== 'https://www.youtube.com' &&
    activeCustomLink !== 'https://youtube.com'
      ? activeCustomLink
      : null;

  const activeVideoLink =
    validCustomLink || currentProject.linkVideoExterno || currentProject.videoUrl || 'https://www.youtube.com';

  const youtubeId = getYouTubeId(activeVideoLink);
  const activeVideoSource = activeCustomVideo || currentProject.videoUrl;
  const activeCoverSource = activeCustomCover || currentProject.imagen;
  const hasVideo = Boolean(activeVideoSource || youtubeId);

  // Cargar videos, carátulas y enlaces guardados (anclados permanentemente de los cambios previos)
  useEffect(() => {
    proyectos3D.forEach((proj) => {
      getLocalVideo(proj.id).then((cachedUrl) => {
        if (cachedUrl) {
          setCustomVideos((prev) => ({ ...prev, [proj.id]: cachedUrl }));
        }
      });
      getLocalCover(proj.id).then((cachedCover) => {
        if (cachedCover) {
          setCustomCovers((prev) => ({ ...prev, [proj.id]: cachedCover }));
        }
      });
      const savedLink =
        localStorage.getItem(`custom_video_link_${proj.id}`) ||
        (proj.id === 'buho-animacion-blender-unity' ? localStorage.getItem('buho_custom_video_link') : null);
      if (savedLink) {
        setCustomLinks((prev) => ({ ...prev, [proj.id]: savedLink }));
      }
    });
  }, [proyectos3D]);

  // Reiniciar estado al cambiar de proyecto (priorizando la portada/render)
  useEffect(() => {
    setVideoError(false);
    setImageError(false);
    setImageFallbackAttempted(false);
    if (activeCustomCover || currentProject.imagen) {
      setViewMode('render');
    } else if (activeCustomVideo || currentProject.videoUrl) {
      setViewMode('video');
    }
  }, [currentIndex, currentProject.id, currentProject.imagen, currentProject.videoUrl, activeCustomCover, activeCustomVideo]);

  // Carrusel automático (solo si está activo el switch auto)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proyectos3D.length);
    }, 7000);
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

  const isVfxProject = currentProject.categoria.includes('VFX') || currentProject.id.includes('vfx');

  return (
    <section id="mundo-03" className="relative z-10 py-24 sm:py-32 border-t border-[#00AB00]/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabecera de Nivel */}
        <div className="flex items-baseline justify-between gap-4 mb-12 sm:mb-16 flex-wrap">
          <div>
            <div className="flex items-center gap-2 font-pixel text-xs sm:text-sm text-[#00AB00] mb-2">
              <span className="w-3 dot-diamond bg-[#00AB00] pixel-diamond shadow-[0_0_8px_#00AB00]" />
              <span>MUNDO 03</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f6f0] tracking-tight">
              Proyectos Creativos · Animación 3D & VFX
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#facc15] bg-[#1e261e] px-3.5 py-1.5 rounded-full border border-[#00AB00]/30">
            <Box className="w-3.5 h-3.5 text-[#00AB00]" />
            <span>BLENDER · RIGGING · UNITY VFX & SHADERS</span>
          </div>
        </div>

        {/* Carrusel Principal de Animación 3D & VFX */}
        <div className="bg-[#1e261e] border-2 border-[#00AB00]/30 rounded-3xl overflow-hidden shadow-2xl mb-12">
          {/* Barra superior de visor retro */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#161c16] border-b border-[#00AB00]/20 font-mono-code text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2 text-[#00AB00]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AB00] animate-pulse" />
              <span className="font-bold uppercase">
                {isVfxProject ? 'VISOR DE EFECTOS ESPECIALES & SHADERS (UNITY)' : 'VISOR DE MODELADO & ANIMACIÓN 3D (BLENDER)'}
              </span>
            </div>

            {/* Selector de modo Video vs Render (si el proyecto tiene ambos) */}
            <div className="flex items-center gap-3">
              {hasVideo && currentProject.imagen && (
                <div className="flex items-center bg-[#1e261e] p-0.5 rounded-lg border border-[#00AB00]/25">
                  <button
                    onClick={() => {
                      audio.playBlip();
                      setViewMode('video');
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      viewMode === 'video'
                        ? 'bg-[#00AB00] text-[#0c0f0c]'
                        : 'text-[#9eb19e] hover:text-[#f0f6f0]'
                    }`}
                  >
                    <Film className="w-3 h-3" />
                    <span>Video Clip</span>
                  </button>
                  <button
                    onClick={() => {
                      audio.playBlip();
                      setViewMode('render');
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      viewMode === 'render'
                        ? 'bg-[#00AB00] text-[#0c0f0c]'
                        : 'text-[#9eb19e] hover:text-[#f0f6f0]'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Portada / Render</span>
                  </button>
                </div>
              )}

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-[#9eb19e] hover:text-[#00AB00] px-2.5 py-1 rounded bg-[#1e261e] border border-[#00AB00]/20 transition-colors cursor-pointer"
                title={isPlaying ? 'Pausar rotación automática' : 'Reproducir rotación automática'}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3.5 h-3.5" />}
                <span className="text-[10px] hidden sm:inline">{isPlaying ? 'AUTO: ON' : 'AUTO: OFF'}</span>
              </button>
              <span className="text-[#9eb19e] font-bold font-mono-code">
                {String(currentIndex + 1).padStart(2, '0')} / {String(proyectos3D.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Escenario de Presentación (2 columnas: Visor Visual + Ficha Técnica) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Columna Izquierda: Video Player o Portada / Render */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] bg-[#0c100c] overflow-hidden group flex items-center justify-center">
              {viewMode === 'video' ? (
                youtubeId ? (
                  /* Reproductor YouTube embebido sin cookies de rastreo */
                  <div className="relative w-full h-full min-h-[350px] sm:min-h-[440px] flex items-center justify-center bg-[#0a0d0a]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={currentProject.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full min-h-[350px] sm:min-h-[440px] border-0"
                    />
                  </div>
                ) : hasVideo && !videoError && activeVideoSource ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-[#0a0d0a]">
                    <video
                      ref={videoRef}
                      key={activeVideoSource}
                      src={activeVideoSource}
                      poster={activeCoverSource || undefined}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={() => setVideoError(true)}
                      onPlay={() => setIsPlaying(false)}
                      className="w-full h-full object-contain max-h-[480px]"
                    />
                    <div className="absolute inset-0 crt-overlay opacity-20 pointer-events-none" />
                  </div>
                ) : (
                  /* Presentación elegante retro cuando el clip se visualiza externamente */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0e130e] m-4 rounded-2xl border border-[#00AB00]/30">
                    <div className="w-16 h-16 rounded-2xl bg-[#162016] border border-[#00AB00]/40 flex items-center justify-center text-[#00AB00] mb-4 shadow-[0_0_20px_rgba(0,171,0,0.2)]">
                      <Video className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-[#f0f6f0] mb-2">
                      {currentProject.titulo}
                    </h4>
                    <p className="text-xs text-[#9eb19e] max-w-sm mb-6 leading-relaxed">
                      {isVfxProject
                        ? 'Demostración del efecto Bola de Fuego y shaders en tiempo real.'
                        : 'Demostración de animación 3D y cinemática en Unity.'}
                    </p>
                    <a
                      href={activeVideoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audio.playStart()}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-mono-code text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,171,0,0.4)] cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{isVfxProject ? 'VER BOLA DE FUEGO EN YOUTUBE' : 'VER ANIMACIÓN BÚHO EN YOUTUBE'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )
              ) : activeCoverSource && !imageError ? (
                /* Vista de Portada / Render (Captura del proyecto) */
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#121612]">
                  <img
                    src={activeCoverSource}
                    alt={currentProject.titulo}
                    onError={(e) => {
                      if (!imageFallbackAttempted && youtubeId) {
                        setImageFallbackAttempted(true);
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                      } else {
                        setImageError(true);
                      }
                    }}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 crt-overlay opacity-25 pointer-events-none" />

                  {/* Botón central para reproducir/ver video sobre la portada */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        audio.playStart();
                        setViewMode('video');
                      }}
                      className="pointer-events-auto inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-[#0f130f]/90 hover:bg-[#00AB00] text-[#00AB00] hover:text-[#0c0f0c] border-2 border-[#00AB00] font-mono-code text-xs font-bold transition-all shadow-[0_0_25px_rgba(0,171,0,0.5)] hover:scale-105 cursor-pointer"
                      title="Reproducir aquí"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>REPRODUCIR DEMO</span>
                    </button>
                    <a
                      href={activeVideoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audio.playBlip()}
                      className="pointer-events-auto p-3 rounded-2xl bg-[#0f130f]/90 hover:bg-[#00AB00] text-[#9eb19e] hover:text-[#0c0f0c] border border-[#00AB00]/40 hover:border-[#00AB00] transition-all hover:scale-105 shadow-md"
                      title="Abrir en YouTube en nueva pestaña"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Botón para ver en Lightbox / Pantalla Completa */}
                  <button
                    onClick={() => {
                      audio.playBlip();
                      setLightboxImage(activeCoverSource);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-[#0f130f]/80 text-[#00AB00] border border-[#00AB00]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#00AB00] hover:text-[#0c0f0c] z-20 cursor-pointer"
                    title="Ampliar Portada"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Escenario cuando no se visualiza la imagen directa */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#0e130e] m-4 rounded-2xl border border-[#00AB00]/30">
                  <div className="w-16 h-16 rounded-2xl bg-[#162016] border border-[#00AB00]/40 flex items-center justify-center text-[#00AB00] mb-4 shadow-[0_0_20px_rgba(0,171,0,0.2)]">
                    {isVfxProject ? <Sparkles className="w-8 h-8 text-[#facc15]" /> : <Box className="w-8 h-8 text-[#00AB00]" />}
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#f0f6f0] mb-2">
                    {currentProject.titulo}
                  </h4>
                  <p className="text-xs text-[#9eb19e] max-w-sm mb-6 leading-relaxed">
                    {isVfxProject
                      ? 'Efectos especiales en tiempo real desarrollados con Shader Graph y VFX Graph.'
                      : 'Animación y rigging exportado para videojuegos en Unity.'}
                  </p>
                  <a
                    href={activeVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audio.playStart()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-mono-code text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,171,0,0.4)] cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isVfxProject ? 'VER VIDEO DE LOS EFECTOS' : 'VER VIDEO DE LA ANIMACIÓN'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Badge de Categoría sobre el viewport */}
              <div className="absolute bottom-4 left-4 font-mono-code text-xs px-3 py-1 rounded-md bg-[#0f130f]/85 border border-[#00AB00]/50 text-[#f0f6f0] flex items-center gap-1.5 shadow-md pointer-events-none z-10">
                <Sparkles className="w-3 h-3 text-[#facc15]" />
                <span>{currentProject.categoria}</span>
              </div>

              {/* Controles de Navegación Flechas Izq/Der */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f130f]/80 text-[#f0f6f0] border border-[#00AB00]/40 flex items-center justify-center hover:bg-[#00AB00] hover:text-[#0c0f0c] transition-all cursor-pointer shadow-lg z-10"
                title="Proyecto Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f130f]/80 text-[#f0f6f0] border border-[#00AB00]/40 flex items-center justify-center hover:bg-[#00AB00] hover:text-[#0c0f0c] transition-all cursor-pointer shadow-lg z-10"
                title="Proyecto Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Columna Derecha: Información del Proyecto y Desglose Técnico */}
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

                {/* Título del Proyecto */}
                <h3 className="font-display font-bold text-2xl text-[#f0f6f0] leading-snug">
                  {currentProject.titulo}
                </h3>

                {/* Descripción Técnica */}
                <p className="text-[#9eb19e] text-sm leading-relaxed">
                  {currentProject.descripcion}
                </p>

                {/* Desglose de clips técnicos / módulos de VFX */}
                {currentProject.detallesTecnicos && (
                  <div className="bg-[#161c16] rounded-xl p-3.5 border border-[#00AB00]/20 space-y-2.5">
                    <div className="font-mono-code text-[11px] text-[#34d399] font-bold uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#00AB00]" />
                      <span>{currentProject.detallesTecnicos.titulo}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d1dfd1]">
                      {currentProject.detallesTecnicos.items.map((item) => (
                        <div
                          key={item.nombre}
                          className="flex items-center gap-2 bg-[#1e261e] px-2.5 py-1.5 rounded-lg border border-[#00AB00]/15"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="truncate">{item.nombre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botón Principal para ver el Video */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={activeVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audio.playStart()}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#00AB00] hover:bg-[#10e85a] text-[#0c0f0c] font-mono-code text-sm font-bold transition-all shadow-[0_0_25px_rgba(0,171,0,0.4)] hover:shadow-[0_0_35px_rgba(0,171,0,0.7)] cursor-pointer group uppercase tracking-wider"
                  >
                    <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                    <span>
                      {isVfxProject ? 'VER BOLA DE FUEGO EN YOUTUBE' : 'VER ANIMACIÓN BÚHO EN YOUTUBE'}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-80 ml-1" />
                  </a>

                  <div className="flex items-center justify-between px-1 font-mono-code text-[11px] text-[#9eb19e]">
                    <span className="truncate max-w-[220px] opacity-80 flex items-center gap-1.5">
                      <Film className="w-3 h-3 text-[#00AB00] shrink-0" />
                      <span className="truncate">{activeVideoLink.replace(/^https?:\/\//, '')}</span>
                    </span>
                    <span className="text-[#34d399] text-[10px] font-semibold uppercase tracking-wider shrink-0">
                      {isVfxProject ? 'VFX Bola de Fuego' : 'Búho 3D Blender'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estado técnico del Asset o Pipeline */}
              {currentProject.plataformas && currentProject.plataformas.length > 0 ? (
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
              ) : (
                <div className="pt-4 border-t border-[#00AB00]/20 mt-6 flex items-center justify-between text-xs font-mono-code text-[#9eb19e]">
                  <span className="flex items-center gap-2 text-[#34d399]">
                    <span className="w-2 h-2 rounded-full bg-[#00AB00] animate-pulse" />
                    {isVfxProject ? 'Unity VFX Pipeline · Shader Graph' : 'Asset 3D · Blender Pipeline'}
                  </span>
                  <span className="text-[#facc15] font-semibold">
                    {isVfxProject ? 'Real-Time VFX' : 'Ready for Unity'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Selector interactivo inferior (Cartuchos de Nivel) */}
          <div className="p-4 bg-[#161c16] border-t border-[#00AB00]/20 flex items-center justify-center gap-3 overflow-x-auto">
            {proyectos3D.map((proj, idx) => {
              const isSelected = idx === currentIndex;
              const thumbImg = customCovers[proj.id] || proj.imagen;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 transition-all duration-200 shrink-0 text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#222d22] border-[#00AB00] shadow-[0_0_15px_rgba(0,171,0,0.35)] scale-[1.02]'
                      : 'bg-[#121612] border-[#00AB00]/20 opacity-70 hover:opacity-100 hover:border-[#00AB00]/50'
                  }`}
                  title={proj.titulo}
                >
                  <div className="w-12 h-9 rounded-lg overflow-hidden border border-[#00AB00]/30 shrink-0 bg-[#0a0d0a] flex items-center justify-center">
                    {thumbImg ? (
                      <img
                        src={thumbImg}
                        alt={proj.titulo}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const yt = getYouTubeId(proj.linkVideoExterno);
                          const target = e.target as HTMLImageElement;
                          if (yt && !target.src.includes('youtube') && !target.src.includes('ytimg')) {
                            target.src = `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    ) : (
                      <Sparkles className="w-4 h-4 text-[#00AB00]" />
                    )}
                  </div>
                  <div className="font-mono-code text-xs">
                    <div className="text-[10px] text-[#00AB00] font-bold tracking-wider">
                      PROYECTO 0{idx + 1}
                    </div>
                    <div className="text-[#f0f6f0] font-semibold truncate max-w-[210px]">
                      {proj.titulo.split('(')[0].trim()}
                    </div>
                  </div>
                </button>
              );
            })}
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

