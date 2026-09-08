/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trophy } from 'lucide-react';

interface AchievementToastProps {
  visible: boolean;
  message: string;
}

export const AchievementToast: React.FC<AchievementToastProps> = ({ visible, message }) => {
  return (
    <div
      id="achievement-toast"
      className={`fixed left-5 bottom-16 sm:bottom-6 z-50 flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#1e261e] border-2 border-[#00AB00] shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500 max-w-xs sm:max-w-sm ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#00AB00]/20 border border-[#00AB00] flex items-center justify-center shrink-0">
        <Trophy className="w-5 h-5 text-[#facc15] animate-bounce" />
      </div>
      <div>
        <div className="font-pixel text-[9px] text-[#00AB00] tracking-wider mb-1">
          ★ LOGRO DESBLOQUEADO
        </div>
        <div className="font-mono-code text-xs text-[#f0f6f0] leading-snug font-medium">
          {message}
        </div>
      </div>
    </div>
  );
};
