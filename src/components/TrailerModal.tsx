/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { audio } from '../utils/audio';

interface TrailerModalProps {
  videoId: string | null;
  title?: string;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ videoId, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (videoId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#060806]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          audio.playBlip();
          onClose();
        }
      }}
    >
      <div className="w-full max-w-4xl bg-[#161c16] border-2 border-[#00AB00] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1e261e] border-b border-[#00AB00]/25 font-mono-code text-xs">
          <span className="text-[#00AB00] font-bold truncate">
            {title ? `TRAILER: ${title}` : 'GAMEPLAY / TRAILER'}
          </span>
          <button
            onClick={() => {
              audio.playBlip();
              onClose();
            }}
            className="flex items-center gap-1 text-[#9eb19e] hover:text-[#00AB00] transition-colors cursor-pointer"
          >
            <span>CERRAR</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Iframe del Trailer de YouTube */}
        <div className="relative pt-[56.25%] bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
