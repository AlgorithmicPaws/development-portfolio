export const translations = {
  en: {
    nav: { home: 'Home', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: {
      name: "Hey, I'm Sergio Florez",
      badge: 'Available for work',
      role1: 'Software Engineer',
      desc1: ' specialized in high-performance APIs, data analysis, and AI. ',
      role2: 'Full-stack developer',
      desc2: ' with +3 years of experience in Fine Tuning models, AWS, and production-ready systems. From Bogota, Colombia 🇨🇴.',
    },
    projects: { title: 'My Projects', viewProject: 'View Project', viewDetails: 'View Details', github: 'GitHub', liveProject: 'Live Project' },
    experience: {
      title: 'Professional Experience',
      viewAll: 'View all experience',
      badge: 'My Professional Journey',
      pageTitle: 'Professional Experience',
      backHome: 'Back to Home',
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Me',
      description: "Have a project in mind or want to discuss potential opportunities? Send me a message and I'll get back to you as soon as possible.",
    },
    footer: { credit: 'Made by Algorthmic Paws 🐾' },
  },
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      name: 'Hola, soy Sergio Florez',
      badge: 'Disponible para trabajar',
      role1: 'Ingeniero de Software',
      desc1: ' especializado en APIs de alto rendimiento, análisis de datos e IA. ',
      role2: 'Desarrollador Full Stack',
      desc2: ' con +3 años de experiencia en Fine Tuning de modelos, AWS y sistemas listos para producción. De Bogotá, Colombia 🇨🇴.',
    },
    projects: { title: 'Mis Proyectos', viewProject: 'Ver Proyecto', viewDetails: 'Ver Detalles', github: 'GitHub', liveProject: 'Proyecto en Vivo' },
    experience: {
      title: 'Experiencia Profesional',
      viewAll: 'Ver toda mi experiencia',
      badge: 'Mi Trayectoria Profesional',
      pageTitle: 'Experiencia Profesional',
      backHome: 'Volver al Inicio',
    },
    contact: {
      badge: 'Contáctame',
      title: 'Contáctame',
      description: '¿Tienes un proyecto en mente o quieres discutir oportunidades potenciales? Envíame un mensaje y te responderé lo antes posible.',
    },
    footer: { credit: 'Hecho por Algorthmic Paws 🐾' },
  },
} as const

export type Lang = keyof typeof translations

export function getTranslation(lang: Lang, key: string): string | undefined {
  const keys = key.split('.')
  let val: unknown = translations[lang]
  for (const k of keys) val = (val as Record<string, unknown>)?.[k]
  return typeof val === 'string' ? val : undefined
}
