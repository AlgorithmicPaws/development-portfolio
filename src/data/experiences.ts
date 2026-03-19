export interface Experience {
  title: string
  company: string
  location: string
  date: string
  achievements: string[]
}

export const experiencesEN: Experience[] = [
  {
    title: "Backend Developer",
    company: "ViP Construction and Maintenance Services",
    location: "Bogotá, Colombia",
    date: "January 2025 - May 2025",
    achievements: [
      "Developed an e-commerce platform to improve sales conversion for a construction and building supplies business",
      "The platform handles approximately 20 concurrent users and over 100 monthly visits",
      "Led the team responsible for implementing a REST API with FastAPI, managing the database, including secure authentication and user session handling. Integrated the API with an interactive frontend developed in React"
    ]
  },
  {
    title: "Project Lead and Full Stack Developer",
    company: "Focus Timers Project",
    location: "Bogotá, Colombia",
    date: "June 2024 - December 2024",
    achievements: [
      "Developed a web application that optimizes productivity through techniques such as Pomodoro, Time Bag, and Time Blocking",
      "The platform handles approximately 50 concurrent users and over 500 monthly visits, contributing to improving the productivity of the local academic community",
      "Led the team responsible for implementing a REST API with FastAPI, managing the database, including secure authentication and user session handling. Integrated the API with an interactive frontend developed in React"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Wallet Trail",
    location: "Bogotá, Colombia",
    date: "December 2023 - May 2024",
    achievements: [
      "Designed and developed a web application that facilitates monthly budget planning, helping users optimize their personal finances",
      "The tool facilitates users' monthly financial control and planning, promoting more organized economic management"
    ]
  },
  {
    title: "Tutor and Teaching Assistant",
    company: "Universidad Sergio Arboleda",
    location: "Bogotá, Colombia",
    date: "February 2023 - December 2023",
    achievements: [
      "Prepared educational materials and workshops for Differential Calculus and Business Mathematics courses, benefiting over 80 students",
      "Implemented personalized pedagogical strategies, resulting in a 100% pass rate in the courses I supported"
    ]
  }
]

export const experiencesES: Experience[] = [
  {
    title: "Desarrollador Backend",
    company: "ViP servicios de construcción y mantenimiento",
    location: "Bogotá, Colombia",
    date: "Enero 2025 - Mayo 2025",
    achievements: [
      "Desarrollé un ecommerce para mejorar la conversión de ventas de un negocio de construcción e insumos de construcción",
      "La plataforma cuenta con cerca de 20 usuarios concurrentes y más de 100 visitas mensuales",
      "Lideré el equipo encargado de implementar una API REST con FastAPI, que gestiona la base de datos, incluye autenticación segura y maneja sesiones de usuario. Integramos la API con un frontend interactivo desarrollado en React"
    ]
  },
  {
    title: "Líder de proyecto y Desarrollador Full Stack",
    company: "Proyecto Focus Timers",
    location: "Bogotá, Colombia",
    date: "Junio 2024 - Diciembre 2024",
    achievements: [
      "Desarrollé una aplicación web que optimiza la productividad mediante técnicas como Pomodoro, Time Bag y Time Blocking",
      "La plataforma cuenta con cerca de 50 usuarios concurrentes y más de 500 visitas mensuales, contribuyendo a mejorar la productividad de la comunidad académica local",
      "Lideré el equipo encargado de implementar una API REST con FastAPI, que gestiona la base de datos, incluye autenticación segura y maneja sesiones de usuario. Integramos la API con un frontend interactivo desarrollado en React"
    ]
  },
  {
    title: "Desarrollador Full Stack",
    company: "Wallet Trail",
    location: "Bogotá, Colombia",
    date: "Diciembre 2023 - Mayo 2024",
    achievements: [
      "Diseñé y desarrollé una aplicación web que facilita la planificación de presupuestos mensuales, ayudando a los usuarios a optimizar sus finanzas personales",
      "La herramienta facilita el control y la planificación financiera mensual de los usuarios, promoviendo una gestión económica más organizada"
    ]
  },
  {
    title: "Tutor y Asistente de Profesor",
    company: "Universidad Sergio Arboleda",
    location: "Bogotá, Colombia",
    date: "Febrero 2023 - Diciembre 2023",
    achievements: [
      "Preparé materiales educativos y talleres para cursos de Cálculo Diferencial y Matemáticas Empresariales, beneficiando a más de 80 estudiantes",
      "Implementé estrategias pedagógicas personalizadas, resultando en una tasa de aprobación del 100% en los cursos que apoyé"
    ]
  }
]
