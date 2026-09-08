/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface StatItem {
  label: string;
  value: number; // 0 a 100
}

export interface ProgrammingProject {
  id: string;
  titulo: string;
  tags: string[];
  descripcion: string;
  caracteristicasTecnicas?: string[];
  imagen: string;
  videoYoutubeId?: string; // ID de YouTube para modal de trailer (ej: "dQw4w9WgXcQ" o vacío)
  linkJugar?: string;
  linkCodigo?: string;
  linkDoc?: string;
}

export interface Creative3DProject {
  id: string;
  titulo: string;
  categoria: string;
  herramientas: string[];
  descripcion: string;
  imagen: string;
  videoUrl?: string; // YouTube o MP4
  plataformas: {
    nombre: string;
    url: string;
    icono?: string;
  }[];
}

export interface SkillItem {
  icon: string;
  label: string;
  nivel?: string; // ej: "Avanzado", "Intermedio"
  descripcion?: string;
}

export interface SkillCategory {
  categoria: string;
  items: SkillItem[];
}

export interface PortfolioConfig {
  hero: {
    tagAvailability: string;
    nombre: string;
    rol: string;
    tagline: string;
  };
  socials: SocialLink[];
  avatar: {
    src: string;
    badge: string;
  };
  bio: string[];
  stats: StatItem[];
  proyectosProgramacion: ProgrammingProject[];
  proyectos3D: Creative3DProject[];
  plataformasGenerales3D: {
    nombre: string;
    url: string;
    descripcion: string;
    icono: string;
  }[];
  inventarioHabilidades: SkillCategory[];
  contacto: {
    intro: string;
    email: string;
    ubicacion: string;
    disponibilidad: string;
    cvUrl: string;
  };
  qrUrl: string;
  footer: string;
}
