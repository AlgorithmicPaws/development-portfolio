export const translations = {
  en: {
    nav: { home: 'Home', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: {
      name: "Hey, I'm Sergio Florez",
      badge: 'Available for work',
      role1: 'Computer scientist',
      desc1: ' passionate about web development. ',
      role2: 'Full-stack developer',
      desc2: ' with +2 years of experience building useful and stylish web apps. From Bogota, Colombia 🇨🇴.',
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
      role1: 'Científico de computación',
      desc1: ' apasionado por el desarrollo web. ',
      role2: 'Desarrollador Full-stack',
      desc2: ' con +2 años de experiencia construyendo aplicaciones útiles y elegantes. De Bogotá, Colombia 🇨🇴.',
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
