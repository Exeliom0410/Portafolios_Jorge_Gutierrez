/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * 🎮 CONFIGURACIÓN DEL PORTAFOLIO - ¡EDITA AQUÍ TUS DATOS!
 * ============================================================================
 * Esta es la zona principal para personalizar todo el contenido de tu portafolio.
 * Solo cambia los textos, enlaces, imágenes o valores numéricos entre comillas.
 * No necesitas modificar el código de los componentes visuales a menos que quieras
 * cambiar la estructura.
 * ============================================================================
 */

import { PortfolioConfig } from './types';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  // ==========================================================================
  // 1. INICIO / HERO (PANTALLA DE "PRESS START")
  // ==========================================================================
  hero: {
    // Etiqueta superior de disponibilidad (ej: DISPONIBLE PARA NUEVOS PROYECTOS)
    tagAvailability: "DISPONIBLE PARA NUEVOS PROYECTOS",
    
    // Tu nombre completo o alias artístico
    nombre: "Jorge Gutierrez",
    
    // Tu rol o especialidad (el cursor parpadeará automáticamente al final)
    rol: "Game Developer, Programador & QA",
    
    // Breve descripción o frase de presentación
    tagline: "Creo mundos jugables desde cero: gameplay, sistemas y ese pequeño detalle que hace que un juego se sienta bien. Actualmente explorando metroidvania y animación 3D.",
  },

  // ==========================================================================
  // 2. REDES SOCIALES
  // (Aparecen en la pantalla de inicio, pie de página y accesos rápidos)
  // NOTA: Los iconos ahora se cargan como los LOGOTIPOS OFICIALES ORIGINALES
  // de cada marca (GitHub, itch.io, LinkedIn, X/Twitter, etc.) automáticamente.
  // ==========================================================================
  socials: [
    { icon: "github", label: "GitHub", url: "https://github.com/Exeliom0410" },
    { icon: "itchio", label: "itch.io", url: "https://exeliom0410" },
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/jorge-gutierrez-b693b62b7/" },
    { icon: "twitter", label: "X / Twitter", url: "https://x.com/Exliom" },
  ],

  // ==========================================================================
  // 3. MUNDO 01: SOBRE MÍ Y HOJA DE PERSONAJE
  // ==========================================================================
  avatar: {
    // URL de tu foto de perfil o avatar (cuadrada o proporción 1:1 recomendada)
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WnGZvhSajVF27bf6VE5lr5RXgBqMsANls278sDlSxA&s=10",
    
    // Insignia que aparece sobre la foto (ej: LV. 25, LV. 99, EXP MAX)
    badge: "LV. 25",
  },

  // Párrafos de tu biografía (puedes añadir más líneas entre comillas separadas por coma)
  bio: [
    "Estoy estudiando para ser desarrollador de videojuegos con experiencia creando prototipos y proyectos completos en Unity. Me obsesiona el 'game feel': ese momento en que los controles simplemente se sienten fluidos y precisos.",
    "Disfruto tanto la arquitectura de código y lógica de gameplay como la animación 3D. Me encanta colaborar en proyectos de equipo, aportar soluciones técnicas y seguir aprendiendo en cada desafío."
  ],

  // Barras de estadísticas tipo RPG (valores de 0 a 100)
  stats: [
    { label: "Programación (C#)", value: 90 },
    { label: "Game Design & Feel", value: 90 },
    { label: "Producción & QA", value: 80 },
    { label: "Animación 3D", value: 75 },
    { label: "Diseño de Niveles", value: 65 },
    { label: "Audio & Efectos", value: 40 },
  ],

  // ==========================================================================
  // 4. MUNDO 02: PROYECTOS DE PROGRAMACIÓN
  // Enfocado en arquitectura de software, mecánicas, scripts y sistemas jugables.
  // ==========================================================================
  proyectosProgramacion: [
    {
      id: "hell-breezer",
      titulo: "Hell Breezer",
      tags: ["C#", "Unity 2D", "Beat 'em up", "Combate Fluido", "State Machine"],
      descripcion: "Videojuego de acción que se centra en la venganza de un alma rota y que buscará cualquier medio para conseguirla. Implementación de combo systems, hitboxes dinámicas, control de inercia y control de estados de combate.",
      caracteristicasTecnicas: [
        "Arquitectura de Máquina de Estados Finita (FSM) para animaciones e inputs",
        "Sistema de combos con buffers de entrada y cancelación de frames",
        "Cálculo de impacto y feedback de daño (hitstop, screen shake, knockback)",
        "Lógica de spawning y oleadas de enemigos con comportamientos reactivos"
      ],
      imagen: "https://img.itch.zone/aW1hZ2UvMzk1MTgyOC8yMzU2MDE3MC5wbmc=/original/DRDooo.png",
      videoYoutubeId: "", // Si tienes un video en YouTube coloca el ID aquí (ej: "M7lc1UVf-VE")
      linkJugar: "https://hell-team.itch.io/hell-breezer",
      linkCodigo: "https://github.com/Exeliom0410",
      linkDoc: "https://hell-team.itch.io/hell-breezer"
    },
    {
      id: "combat-system-core",
      titulo: "Modular Combat & Controller Core",
      tags: ["C#", "Unity", "Architecture", "Input System", "QA Testing"],
      descripcion: "Framework modular de controlador de personajes 2.5D/3D con soporte para el nuevo Input System de Unity, gestión de estamina, dashes con invulnerabilidad (i-frames) y detección precisa de colisiones.",
      caracteristicasTecnicas: [
        "Desacoplamiento mediante Scriptable Objects y Event-Driven architecture",
        "Control de coyote time, jump buffering y curvas de aceleración personalizada",
        "Suit de pruebas unitarias y validaciones de testing QA para bugs de movimiento"
      ],
      imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      linkCodigo: "https://github.com/Exeliom0410",
    },
    {
      id: "enemy-ai-pathfinding",
      titulo: "Enemy AI & Behavior Tree System",
      tags: ["C#", "Unity", "IA de Juegos", "NavMesh / Grid", "Algoritmos"],
      descripcion: "Sistema de Inteligencia Artificial para enemigos con árboles de comportamiento, patrullaje, detección por conos de visión y oído, y transición a estados de alerta, persecución y flanqueo.",
      caracteristicasTecnicas: [
        "Nodos modulares de Behavior Tree reusables en cualquier tipo de enemigo",
        "Optimizador de búsqueda de caminos en tiempo real con evasión de obstáculos",
        "Gestor de agresividad grupal para evitar ataques simultáneos caóticos"
      ],
      imagen: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      linkCodigo: "https://github.com/Exeliom0410",
    }
  ],

  // ==========================================================================
  // 5. MUNDO 03: PROYECTOS CREATIVOS (ANIMACIÓN 3D)
  // Con carrusel interactivo, visor de renders/modelos y enlaces a tus plataformas
  // (ArtStation, Sketchfab, YouTube, Instagram, etc.).
  // ==========================================================================
  proyectos3D: [
    {
      id: "3d-character-rig-action",
      titulo: "Rigging y Ciclo de Combate de Personaje",
      categoria: "Animación de Personajes 3D",
      herramientas: ["Blender 4.0", "Rigify", "Graph Editor", "FBX Unity Pipeline"],
      descripcion: "Creación completa de esqueleto dinámico, control de cinemática inversa (IK/FK switches), curvas de timing y espaciado para un set de combate: idle reactivo, ataque pesado con arco de anticipación y recuperación estilizada.",
      imagen: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      plataformas: [
        { nombre: "ArtStation", url: "https://www.artstation.com", icono: "🎨" },
        { nombre: "Sketchfab", url: "https://sketchfab.com", icono: "🧊" },
        { nombre: "YouTube Reel", url: "https://youtube.com", icono: "▶️" }
      ]
    },
    {
      id: "3d-creature-run-cycle",
      titulo: "Animación de Criatura Cuadrúpeda & Run Cycle",
      categoria: "Locomoción & Cinemática",
      herramientas: ["Blender", "Keyframe Animation", "Weight Painting"],
      descripcion: "Estudio de peso, inercia de columna vertebral y overlapping action en colas y orejas para una bestia cuadrúpeda de fantasía, optimizado para interpolación limpia en motores de videojuego en tiempo real.",
      imagen: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      plataformas: [
        { nombre: "ArtStation", url: "https://www.artstation.com", icono: "🎨" },
        { nombre: "Sketchfab", url: "https://sketchfab.com", icono: "🧊" }
      ]
    },
    {
      id: "3d-props-diorama",
      titulo: "Diorama Sci-Fi & Animación Mecánica de Props",
      categoria: "Props 3D & Entornos",
      herramientas: ["Blender", "Hard Surface", "Cycles Render", "Substance"],
      descripcion: "Modelado hard-surface y animación de compuertas hidráulicas, turbinas y efectos de partículas cinemáticas para un escenario de juego de ciencia ficción con iluminación volumétrica.",
      imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      plataformas: [
        { nombre: "Sketchfab", url: "https://sketchfab.com", icono: "🧊" },
        { nombre: "ArtStation", url: "https://www.artstation.com", icono: "🎨" }
      ]
    },
    {
      id: "3d-cutscene-cinematic",
      titulo: "Cinemática de Presentación & Expresiones Faciales",
      categoria: "Cutscene & Acting 3D",
      herramientas: ["Blender", "Shape Keys", "Camera Rig", "Lighting"],
      descripcion: "Animación dramática de cámara, expresiones gestuales mediante shape keys y sincronización rítmica para una secuencia cinemática de introducción de jefe de nivel.",
      imagen: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      plataformas: [
        { nombre: "YouTube", url: "https://youtube.com", icono: "▶️" },
        { nombre: "ArtStation", url: "https://www.artstation.com", icono: "🎨" }
      ]
    }
  ],

  // Plataformas donde subes tu portafolio 3D completo
  plataformasGenerales3D: [
    {
      nombre: "ArtStation",
      url: "https://www.artstation.com",
      descripcion: "Galería de renders en alta resolución y breakdowns",
      icono: "🎨"
    },
    {
      nombre: "Sketchfab",
      url: "https://sketchfab.com",
      descripcion: "Modelos 3D interactivos con visor en tiempo real",
      icono: "🧊"
    },
    {
      nombre: "YouTube Channel",
      url: "https://youtube.com",
      descripcion: "Demoreels de animación, playbacks y breakdowns técnicos",
      icono: "📺"
    },
    {
      nombre: "Instagram / TikTok",
      url: "https://instagram.com",
      descripcion: "WIPs diarios, avances de animación y pruebas rápidas",
      icono: "📱"
    }
  ],

  // ==========================================================================
  // 6. MUNDO 04: INVENTARIO DE HABILIDADES
  // NOTA IMPORTANTE: Siguiendo tu indicación, se han eliminado GDScript,
  // JavaScript y Python.
  // Solo se mantienen tus lenguajes activos (C#), motores y herramientas.
  // ==========================================================================
  inventarioHabilidades: [
    {
      categoria: "Lenguajes",
      items: [
        { icon: "💻", label: "C#", nivel: "Principal", descripcion: "Gameplay programming, Unity API, POO y patrones de diseño" },
        { icon: "⚡", label: "HLSL / Shaders", nivel: "Intermedio", descripcion: "Efectos visuales de pantalla, distorsiones y shaders 2D/3D" }
      ]
    },
    {
      categoria: "Motores & Frameworks",
      items: [
        { icon: "🎮", label: "Unity", nivel: "Avanzado", descripcion: "Físicas 2D/3D, UGUI, Cinemachine, AudioMixer, Profiler" }
      ]
    },
    {
      categoria: "3D & Arte Digital",
      items: [
        { icon: "🌀", label: "Blender", nivel: "Avanzado", descripcion: "Modelado poligonal, Rigging, Animación por keyframes y UVs" },
        //Si los llego a utilizar, quitar las barras (//) al inicio de la linea
        //{ icon: "🎨", label: "Substance Painter", nivel: "Intermedio", descripcion: "Texturizado PBR y baking de mapas normales" },
        //{ icon: "🖌️", label: "Aseprite / Pixel Art", nivel: "Intermedio", descripcion: "Spritesheets y animaciones de personajes 2D" }
      ]
    },
    {
      categoria: "Gestión, Versionado & QA",
      items: [
        { icon: "🗂️", label: "GitHub / Git", nivel: "Avanzado", descripcion: "Control de versiones, branching, tags y commits limpios" },
        { icon: "📜", label: "Jira", nivel: "Intermedio", descripcion: "Gestión ágil de tareas, sprints y seguimiento de bugs" },
        { icon: "📊", label: "Excel", nivel: "Básico", descripcion: "Organización de datos, tablas de balance, presupuestos y control de avance" },
        { icon: "🔍", label: "QA & Bug Tracking", nivel: "Avanzado", descripcion: "Pruebas de regresión, documentación y test cases de gameplay" }
      ]
    }
  ],

  // ==========================================================================
  // 7. MUNDO 05: GUARDAR PARTIDA (CONTACTO & QR)
  // ==========================================================================
  contacto: {
    intro: "Escríbeme si tienes un proyecto, una vacante o simplemente quieres hablar de desarrollo de videojuegos, programación o animación 3D. Suelo responder en menos de 48 horas.",
    email: "Jorge.gutierrez.leiva.1928@gmail.com",
    ubicacion: "Santiago, Chile — disponible remoto o presencial",
    disponibilidad: "Freelance & tiempo completo",
    cvUrl: "#", // Reemplaza '#' por el link directo a tu PDF en Google Drive o Dropbox
  },

  // URL por defecto que se codifica en el código QR interactivo
  qrUrl: "https://jorge-gutierrez-portfolio.com",

  // Texto del pie de página
  footer: "Desarrollado con inspiración Retro Arcade RPG · Todos los derechos reservados © " + new Date().getFullYear(),
};
