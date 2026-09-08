/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Starfield } from './components/Starfield';
import { WorldNav } from './components/WorldNav';
import { Hero } from './components/Hero';
import { WorldAbout } from './components/WorldAbout';
import { WorldProgramming } from './components/WorldProgramming';
import { WorldCreative3D } from './components/WorldCreative3D';
import { WorldSkills } from './components/WorldSkills';
import { WorldSaveGame } from './components/WorldSaveGame';
import { Footer } from './components/Footer';
import { TrailerModal } from './components/TrailerModal';
import { AchievementToast } from './components/AchievementToast';
import { audio } from './utils/audio';

const ACHIEVEMENTS: Record<string, string> = {
  'mundo-01': 'Descubriste la historia y atributos del personaje (Mundo 01)',
  'mundo-02': 'Accediste a los repositorios y sistemas de código (Mundo 02)',
  'mundo-03': 'Iniciaste el visor de animación y render 3D (Mundo 03)',
  'mundo-04': 'Abriste el inventario técnico de habilidades (Mundo 04)',
  'mundo-05': '¡Punto de control alcanzado! Pantalla de guardado (Mundo 05)',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [activeTrailer, setActiveTrailer] = useState<{ id: string; title: string } | null>(null);
  
  // Logros al explorar
  const [achievement, setAchievement] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: '',
  });
  const unlockedRef = useRef<Set<string>>(new Set());
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerAchievement = (secId: string) => {
    if (unlockedRef.current.has(secId) || !ACHIEVEMENTS[secId]) return;
    unlockedRef.current.add(secId);

    audio.playAchievement();
    setAchievement({
      visible: true,
      message: ACHIEVEMENTS[secId],
    });

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setAchievement((prev) => ({ ...prev, visible: false }));
    }, 3800);
  };

  useEffect(() => {
    const sections = ['inicio', 'mundo-01', 'mundo-02', 'mundo-03', 'mundo-04', 'mundo-05'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          if (sections[i] !== 'inicio') {
            triggerAchievement(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handlePressStart = () => {
    const target = document.getElementById('mundo-01');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#f0f6f0] selection:bg-[#00AB00] selection:text-[#0b0f0b]">
      {/* Fondo de Estrellas Canvas */}
      <Starfield />

      {/* Navegación Lateral y Móvil (World Map) */}
      <WorldNav activeId={activeSection} />

      {/* Contenido Principal */}
      <main className="relative z-10">
        {/* INICIO: Pantalla Hero Press Start */}
        <Hero onPressStart={handlePressStart} />

        {/* MUNDO 01: Sobre Mí */}
        <WorldAbout />

        {/* MUNDO 02: Proyectos de Programación */}
        <WorldProgramming
          onOpenTrailer={(videoId, title) => setActiveTrailer({ id: videoId, title })}
        />

        {/* MUNDO 03: Proyectos Creativos (Animación 3D) */}
        <WorldCreative3D />

        {/* MUNDO 04: Inventario de Habilidades */}
        <WorldSkills />

        {/* MUNDO 05: Guardar Partida (Contacto & QR) */}
        <WorldSaveGame />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Modal de Video Trailer */}
      <TrailerModal
        videoId={activeTrailer ? activeTrailer.id : null}
        title={activeTrailer?.title}
        onClose={() => setActiveTrailer(null)}
      />

      {/* Notificación Toast de Logro Desbloqueado */}
      <AchievementToast
        visible={achievement.visible}
        message={achievement.message}
      />
    </div>
  );
}
