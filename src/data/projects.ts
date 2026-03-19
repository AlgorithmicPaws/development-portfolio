export interface Project {
  title: string
  description: string
  descriptionEs: string
  tags: string[]
  images: string[]
  githubLink: string
  liveLink?: string
}

export const projects: Project[] = [
  {
    title: "VIP SCM Marketplace",
    description: "Marketplace for construction and renovation materials with 10 concurrent users and 1,000+ monthly visits. Scalable solution expanding the company's online presence and client portfolio.",
    descriptionEs: "Marketplace de materiales de construcción y remodelación con 10 usuarios concurrentes y más de 1,000 visitas mensuales. Solución escalable que amplía la presencia online de la empresa y su cartera de clientes.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    images: ["/projects/scmvip.png","/projects/vipscm2.png", "/projects/vipscm3.png"],
    githubLink: "https://github.com/username/vip-scm",
  },
  {
    title: "Focus Timers",
    description: "Productivity web application featuring Pomodoro, Time Bag, and Time Blocking techniques. Reached 50 concurrent users and 500+ monthly visits, boosting productivity in the academic community.",
    descriptionEs: "Aplicación web de productividad con técnicas Pomodoro, Time Bag y Time Blocking. Alcanzó 50 usuarios concurrentes y más de 500 visitas mensuales, mejorando la productividad en la comunidad académica.",
    tags: ["React", "FastAPI", "MySQL"],
    images: ["/projects/focus-timers.png"],
    githubLink: "https://github.com/AlgorithmicPaws/focus-timers",
  },
  {
    title: "Rubber Duck 2.0",
    description: "Physical intelligent assistant using AI to help programmers solve errors through guided questioning, based on the rubber duck debugging technique. Improved debugging efficiency for the university programming community.",
    descriptionEs: "Asistente físico inteligente que usa IA para ayudar a programadores a resolver errores mediante preguntas guiadas, basado en la técnica rubber duck debugging. Mejoró la eficiencia de depuración en la comunidad universitaria de programación.",
    tags: ["AI", "QLoRA", "FastAPI", "3D Modeling"],
    images: ["/projects/duck.png"],
    githubLink: "https://github.com/username/rubber-duck",
  },
]
