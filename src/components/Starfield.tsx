/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    interface Star {
      x: number;
      y: number;
      radius: number;
      speed: number;
      alpha: number;
      color: string;
    }

    let stars: Star[] = [];

    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      
      const palette = [
        '#ffffff',
        '#d4ecd4',
        '#00AB00', // Verde de la paleta del usuario
        '#10e85a',
        '#34d399',
        '#2E332E',
      ];

      stars = Array.from({ length: Math.min(count, 140) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.35 + 0.05,
        alpha: Math.random() * 0.7 + 0.2,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar fondo radial suave con el tono verde arcade sutil
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        0,
        50,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width
      );
      gradient.addColorStop(0, '#151d15');
      gradient.addColorStop(0.5, '#101410');
      gradient.addColorStop(1, '#0c0f0c');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar estrellas
      stars.forEach((star) => {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (!reduceMotion) {
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    initStars();
    render();

    const handleResize = () => {
      initStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
