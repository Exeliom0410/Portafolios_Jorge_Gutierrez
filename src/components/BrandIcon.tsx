/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  SiGithub,
  SiItchdotio,
  SiX,
  SiArtstation,
  SiSketchfab,
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiUnity,
  SiBlender,
  SiJira,
  SiGit,
  SiAseprite,
  SiOpengl,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { ShieldCheck, Globe } from 'lucide-react';

interface BrandIconProps {
  name: string;
  className?: string;
  size?: number | string;
  colored?: boolean;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  name,
  className = 'w-5 h-5',
  size = '1.2em',
  colored = true,
}) => {
  const normalized = name.toLowerCase().trim();

  const wrap = (node: React.ReactNode, titleText: string, customColor?: string) => (
    <span
      className={`inline-flex items-center justify-center shrink-0 leading-none ${className}`}
      style={colored && customColor ? { color: customColor } : undefined}
      title={titleText}
      aria-label={titleText}
    >
      {node}
    </span>
  );

  // GitHub
  if (normalized.includes('github')) {
    return wrap(
      <SiGithub size={size} color={colored ? '#ffffff' : undefined} />,
      'GitHub',
      '#ffffff'
    );
  }

  // Git standalone
  if (normalized === 'git' || normalized.includes('git/')) {
    return wrap(
      <SiGit size={size} color={colored ? '#F05032' : undefined} />,
      'Git',
      '#F05032'
    );
  }

  // Itch.io
  if (normalized.includes('itch')) {
    return wrap(
      <SiItchdotio size={size} color={colored ? '#FA5C5C' : undefined} />,
      'itch.io',
      '#FA5C5C'
    );
  }

  // LinkedIn (Official In Logo)
  if (normalized.includes('linkedin')) {
    return wrap(
      <FaLinkedin size={size} color={colored ? '#0A66C2' : undefined} />,
      'LinkedIn',
      '#0A66C2'
    );
  }

  // X / Twitter
  if (
    normalized.includes('twitter') ||
    normalized === 'x' ||
    normalized.includes('x /') ||
    normalized.includes('x/')
  ) {
    return wrap(
      <SiX size={size} color={colored ? '#FFFFFF' : undefined} />,
      'X (Twitter)',
      '#FFFFFF'
    );
  }

  // ArtStation
  if (normalized.includes('artstation')) {
    return wrap(
      <SiArtstation size={size} color={colored ? '#13AFF0' : undefined} />,
      'ArtStation',
      '#13AFF0'
    );
  }

  // Sketchfab
  if (normalized.includes('sketchfab')) {
    return wrap(
      <SiSketchfab size={size} color={colored ? '#1CAAD9' : undefined} />,
      'Sketchfab',
      '#1CAAD9'
    );
  }

  // YouTube
  if (normalized.includes('youtube')) {
    return wrap(
      <SiYoutube size={size} color={colored ? '#FF0000' : undefined} />,
      'YouTube',
      '#FF0000'
    );
  }

  // Instagram
  if (normalized.includes('instagram')) {
    return wrap(
      <SiInstagram size={size} color={colored ? '#E4405F' : undefined} />,
      'Instagram',
      '#E4405F'
    );
  }

  // TikTok
  if (normalized.includes('tiktok')) {
    return wrap(
      <SiTiktok size={size} color={colored ? '#25F4EE' : undefined} />,
      'TikTok',
      '#25F4EE'
    );
  }

  // Unity Engine
  if (normalized.includes('unity')) {
    return wrap(
      <SiUnity size={size} color={colored ? '#FFFFFF' : undefined} />,
      'Unity Engine',
      '#FFFFFF'
    );
  }

  // Blender
  if (normalized.includes('blender')) {
    return wrap(
      <SiBlender size={size} color={colored ? '#EA7600' : undefined} />,
      'Blender 3D',
      '#EA7600'
    );
  }

  // C# (Official Brand C# Symbol)
  if (normalized.includes('c#') || normalized.includes('csharp')) {
    return wrap(
      <TbBrandCSharp size={size} color={colored ? '#A179DC' : undefined} />,
      'C#',
      '#A179DC'
    );
  }

  // Adobe Substance 3D / Substance Painter (Official Pt / Substance 3D Brand Mark)
  if (normalized.includes('substance')) {
    return wrap(
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="24" height="24" rx="5" fill="#1C1814" />
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="#FF7800" strokeWidth="1.5" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fill="#FF8000"
          fontSize="12.5"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5px"
        >
          Pt
        </text>
      </svg>,
      'Adobe Substance 3D Painter'
    );
  }

  // Aseprite
  if (normalized.includes('aseprite')) {
    return wrap(
      <SiAseprite size={size} color={colored ? '#7CC8B6' : undefined} />,
      'Aseprite',
      '#7CC8B6'
    );
  }

  // Jira (Atlassian Jira)
  if (normalized.includes('jira')) {
    return wrap(
      <SiJira size={size} color={colored ? '#0052CC' : undefined} />,
      'Atlassian Jira',
      '#0052CC'
    );
  }

  // Microsoft Excel
  if (normalized.includes('excel')) {
    return wrap(
      <PiMicrosoftExcelLogoFill size={size} color={colored ? '#107C41' : undefined} />,
      'Microsoft Excel',
      '#107C41'
    );
  }

  // Shaders / HLSL / OpenGL / Graphics
  if (normalized.includes('shader') || normalized.includes('hlsl') || normalized.includes('glsl')) {
    return wrap(
      <SiOpengl size={size} color={colored ? '#5586A4' : undefined} />,
      'Shaders & OpenGL',
      '#5586A4'
    );
  }

  // QA & Bug Testing
  if (normalized.includes('qa') || normalized.includes('bug') || normalized.includes('test')) {
    return wrap(
      <ShieldCheck className="w-full h-full" />,
      'QA & Bug Tracking',
      '#00AB00'
    );
  }

  // Fallback
  return wrap(<Globe className="w-full h-full" />, name);
};
