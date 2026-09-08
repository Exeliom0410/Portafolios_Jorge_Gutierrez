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
    }
  ],

  // ==========================================================================
  // 5. MUNDO 03: PROYECTOS CREATIVOS (ANIMACIÓN 3D & VFX UNITY)
  // Con carrusel interactivo, visor de renders/capturas, botón de video externo y fichas técnicas.
  // ==========================================================================
  proyectos3D: [
    {
      id: "buho-animacion-blender-unity",
      titulo: "Animación de Búho 3D (Blender → Unity)",
      categoria: "Animación & Rigging 3D",
      herramientas: ["Blender", "Unity Engine", "Animator Controller", "Rigging", "Weight Painting"],
      descripcion: "Diseño, esqueleto dinámico y animación de personaje alado estilizado en Blender exportado a Unity. Configuración de clips en el Animator Controller ('Búho de pie', 'Búho aterrizaje' y 'Búho despegando') con aleteo reactivo e interpolación fluida para videojuegos.",
      imagen: "./images/image.png",
      videoUrl: "./videos/buho-animacion.mp4",
      linkVideoExterno: "https://youtu.be/izf2wHtuzOs", // Enlace de YouTube de la animación del Búho
      detallesTecnicos: {
        titulo: "Clips de Animación en Unity Animator:",
        items: [
          { nombre: "Búho de pie (Idle)", color: "#00AB00" },
          { nombre: "Búho despegando (Flap)", color: "#facc15" },
          { nombre: "Búho aterrizaje", color: "#34d399" },
          { nombre: "Cinemática de Alas", color: "#60a5fa" },
        ],
      },
    },
    {
      id: "unity-vfx-efectos-especiales",
      titulo: "Efectos Especiales en Unity (VFX Bola de Fuego & Shaders)",
      categoria: "VFX & Efectos Especiales",
      herramientas: ["Unity Engine", "VFX Graph", "Shader Graph", "Particle System", "Post-Processing", "URP"],
      descripcion: "Diseño e integración de efectos visuales (VFX) en tiempo real desarrollados en Unity. Implementación del efecto de Bola de Fuego, simulación de partículas GPU, ondas de choque, chispas e iluminación volumétrica optimizados para videojuegos.",
      imagen: "./images/vfx_portada.png",
      videoUrl: "./videos/unity-vfx.mp4",
      linkVideoExterno: "https://youtu.be/y_ANaJj5-Xg", // Enlace de YouTube de la Bola de Fuego VFX
      detallesTecnicos: {
        titulo: "Módulos y Sistemas de Efectos VFX en Unity:",
        items: [
          { nombre: "Sistemas de Partículas GPU", color: "#00AB00" },
          { nombre: "Shader Graph Dinámico", color: "#facc15" },
          { nombre: "Ondas de Choque & Distorsión", color: "#60a5fa" },
          { nombre: "Post-Processing & Bloom", color: "#ec4899" },
        ],
      },
    },
  ],

  // Portafolios y perfiles 3D externos (Desactivados temporalmente)
  // Si en el futuro creas perfiles en ArtStation, Sketchfab o YouTube, puedes agregarlos aquí.
  plataformasGenerales3D: [],

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
    email: "jorge.gutierrez.leiva.1928@gmail.com",
    telefono: "+56 9 8418 8621",
    ubicacion: "Villa La Obra 1 Gabriela, Santiago, Chile",
    disponibilidad: "Disponible Part-time (complementario con estudios) · Remoto o presencial",
    cvUrl: "./cv-jorge-gutierrez.pdf",
  },

  // URL por defecto que se codifica en el código QR interactivo
  qrUrl: "https://jorge-gutierrez-portfolio.com",

  // Texto del pie de página
  footer: "Desarrollado con inspiración Retro Arcade RPG · Todos los derechos reservados © " + new Date().getFullYear(),
};
