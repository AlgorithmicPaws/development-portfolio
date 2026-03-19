export interface Experience {
  title: string
  company: string
  location: string
  date: string
  achievements: string[]
}

export const experiencesEN: Experience[] = [
  {
    title: "Systems Auditor",
    company: "Electoral Campaign Systems Audit",
    location: "Bogotá, Colombia",
    date: "February 2026 - March 2026",
    achievements: [
      "Performed technical inspection and verification of pre-count, scrutiny, and digitization systems for the March 8, 2026 elections, including source code review (Python, Java) and identification of critical security vulnerabilities.",
      "Audited the technological infrastructure (multi-datacenter architecture, AWS, layered cybersecurity) and participated in national simulations validating platforms and citizen viewers."
    ]
  },
  {
    title: "Systems Auditor",
    company: "Rubber Duck 2.0 Project",
    location: "Bogotá, Colombia",
    date: "August 2025 - November 2025",
    achievements: [
      "Designed an intelligent physical assistant that uses AI to help programmers solve errors through guided questioning, based on the rubber duck debugging technique.",
      "Performed fine-tuning of a language model using QLoRA on a custom dataset of debugging conversations, optimizing the base model for the specific technical domain.",
      "Direct impact on the university academic community, improving debugging efficiency and students' analytical skills."
    ]
  },
  {
    title: "Full Stack Developer and Backend Team Lead",
    company: "Chinook Music Store Project",
    location: "Bogotá, Colombia",
    date: "August 2025 - November 2025",
    achievements: [
      "Developed a complete online music store system on the Chinook database, including navigable catalog, shopping cart, customer management (CRUD), and invoice history.",
      "Implemented the backend with FastAPI using async/await, with AWS RDS and AWS Glue compatible configuration and automated testing with pytest.",
      "Configured Docker deployment with separate development and production environments, documenting the deployment process on EC2 with NGINX as a reverse proxy."
    ]
  },
  {
    title: "Food Service Worker",
    company: "Kings Dominion",
    location: "Virginia, United States",
    date: "May 2025 - August 2025",
    achievements: [
      "Participated in an educational and cultural exchange program, gaining experience interacting with customers in English, improving communication skills, and building cordial relationships with colleagues from multiple cultures."
    ]
  },
  {
    title: "Project Lead and Backend Developer",
    company: "ViP Construction and Maintenance Services",
    location: "Bogotá, Colombia",
    date: "February 2025 - June 2025",
    achievements: [
      "Developed a marketplace for construction and renovation materials. The platform handles approximately 10 concurrent users, mostly companies, and over 1,000 monthly visits, improving the company's online presence and creating a scalable platform to expand its client portfolio.",
      "Led the development of a REST API with FastAPI for data management, secure authentication, and session handling, integrated with an interactive React frontend."
    ]
  },
  {
    title: "Project Lead and Full Stack Developer",
    company: "Focus Timers Project",
    location: "Bogotá, Colombia",
    date: "June 2024 - December 2024",
    achievements: [
      "Developed a web application that optimizes productivity through techniques such as Pomodoro, Time Bag, and Time Blocking.",
      "The platform handles approximately 50 concurrent users and over 500 monthly visits, contributing to improving the productivity of the local academic community.",
      "Led the team responsible for implementing a REST API with FastAPI, managing the database, including secure authentication and user session handling. Integrated the API with an interactive frontend developed in React."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Wallet Trail",
    location: "Bogotá, Colombia",
    date: "December 2023 - May 2024",
    achievements: [
      "Designed and developed a web application that facilitates monthly budget planning, helping users optimize their personal finances.",
      "The tool facilitates users' monthly financial control and planning, promoting more organized economic management."
    ]
  },
  {
    title: "Tutor and Teaching Assistant",
    company: "Universidad Sergio Arboleda",
    location: "Bogotá, Colombia",
    date: "February 2023 - December 2023",
    achievements: [
      "Prepared educational materials and workshops for Differential Calculus and Business Mathematics courses, benefiting over 80 students.",
      "Implemented personalized pedagogical strategies, resulting in a 100% pass rate in the courses I supported."
    ]
  }
]

export const experiencesES: Experience[] = [
  {
    title: "Auditor de Sistemas",
    company: "Auditoría de Sistemas – Campaña Electoral",
    location: "Bogotá, Colombia",
    date: "Febrero 2026 - Marzo 2026",
    achievements: [
      "Realicé inspección y verificación técnica de los sistemas de preconteo, escrutinio y digitalización para las elecciones del 8 de marzo de 2026, incluyendo revisión de código fuente (Python, Java) e identificación de vulnerabilidades críticas de seguridad.",
      "Audité la infraestructura tecnológica (arquitectura multi-datacenter, AWS, ciberseguridad en capas) y participé en simulacros nacionales validando plataformas y visores ciudadanos."
    ]
  },
  {
    title: "Auditor de Sistemas",
    company: "Proyecto Rubber Duck 2.0",
    location: "Bogotá, Colombia",
    date: "Agosto 2025 - Noviembre 2025",
    achievements: [
      "Diseñé un asistente físico e inteligente que utiliza IA para ayudar a los programadores a resolver errores mediante preguntas guiadas, basándose en la técnica del patito de goma.",
      "Realicé Fine Tuning de un modelo de lenguaje usando QLoRA sobre un dataset propio de conversaciones de debugging, optimizando el modelo base para el dominio técnico específico.",
      "Impacto directo en la comunidad académica de la universidad, mejorando la eficiencia en debugging y las habilidades analíticas de estudiantes."
    ]
  },
  {
    title: "Desarrollador Full Stack y Líder Equipo Backend",
    company: "Proyecto Chinook Music Store",
    location: "Bogotá, Colombia",
    date: "Agosto 2025 - Noviembre 2025",
    achievements: [
      "Desarrollé un sistema completo de tienda de música en línea sobre la base de datos Chinook, incluyendo catálogo navegable, carrito de compras, gestión de clientes (CRUD) e historial de facturas.",
      "Implementé el backend con FastAPI usando async/await, con configuración compatible con AWS RDS, AWS Glue y tests automatizados con pytest.",
      "Configuré despliegue con Docker con entornos de desarrollo y producción separados, documentando el proceso de deployment en EC2 con NGINX como reverse proxy."
    ]
  },
  {
    title: "Trabajador de Servicio de Alimentos",
    company: "Kings Dominion",
    location: "Virginia, Estados Unidos",
    date: "Mayo 2025 - Agosto 2025",
    achievements: [
      "Bajo un programa de intercambio educativo y cultural, adquirí experiencia interactuando con clientes en inglés, mejorando mis habilidades comunicativas y llevando una relación cordial con compañeros de trabajo de múltiples culturas."
    ]
  },
  {
    title: "Líder de Proyecto y Desarrollador Backend",
    company: "ViP servicios de construcción y mantenimiento",
    location: "Bogotá, Colombia",
    date: "Febrero 2025 - Junio 2025",
    achievements: [
      "Desarrollé un marketplace para venta de materiales de construcción y renovaciones. La plataforma cuenta con cerca de 10 usuarios concurrentes en su mayoría empresas y más de 1000 visitas mensuales, mejorando la presencia en línea de la empresa y creando una plataforma escalable para ampliar su portafolio de clientes.",
      "Dirigí el desarrollo de una API REST con FastAPI para gestión de datos, autenticación segura y manejo de sesiones, integrada con un frontend interactivo en React."
    ]
  },
  {
    title: "Líder de proyecto y Desarrollador Full Stack",
    company: "Proyecto Focus Timers",
    location: "Bogotá, Colombia",
    date: "Junio 2024 - Diciembre 2024",
    achievements: [
      "Desarrollé una aplicación web que optimiza la productividad mediante técnicas como Pomodoro, Time Bag y Time Blocking.",
      "La plataforma cuenta con cerca de 50 usuarios concurrentes y más de 500 visitas mensuales, contribuyendo a mejorar la productividad de la comunidad académica local.",
      "Lideré el equipo encargado de implementar una API REST con FastAPI, que gestiona la base de datos, incluye autenticación segura y maneja sesiones de usuario. Integramos la API con un frontend interactivo desarrollado en React."
    ]
  },
  {
    title: "Desarrollador Full Stack",
    company: "Wallet Trail",
    location: "Bogotá, Colombia",
    date: "Diciembre 2023 - Mayo 2024",
    achievements: [
      "Diseñé y desarrollé una aplicación web que facilita la planificación de presupuestos mensuales, ayudando a los usuarios a optimizar sus finanzas personales.",
      "La herramienta facilita el control y la planificación financiera mensual de los usuarios, promoviendo una gestión económica más organizada."
    ]
  },
  {
    title: "Tutor y Asistente de Profesor",
    company: "Universidad Sergio Arboleda",
    location: "Bogotá, Colombia",
    date: "Febrero 2023 - Diciembre 2023",
    achievements: [
      "Preparé materiales educativos y talleres para cursos de Cálculo Diferencial y Matemáticas Empresariales, beneficiando a más de 80 estudiantes.",
      "Implementé estrategias pedagógicas personalizadas, resultando en una tasa de aprobación del 100% en los cursos que apoyé."
    ]
  }
]
