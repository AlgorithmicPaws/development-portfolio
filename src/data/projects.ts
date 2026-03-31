export interface Project {
  title: string
  description: string
  descriptionEs: string
  longDescription: string
  longDescriptionEs: string
  tags: string[]
  images: string[]
  githubLink: string
  liveLink?: string
}

export const projects: Project[] = [
  {
    title: "Focus Timers",
    description: "Productivity web app with Pomodoro, Flowtime, and Time Budget techniques. Full-stack with React + TypeScript, FastAPI, PostgreSQL, JWT auth, and CI/CD. Reached 50+ concurrent users in the academic community.",
    descriptionEs: "Aplicación web de productividad con técnicas Pomodoro, Flowtime y Bolsa de Tiempo. Full-stack con React + TypeScript, FastAPI, PostgreSQL, autenticación JWT y CI/CD. Alcanzó más de 50 usuarios concurrentes en la comunidad académica.",
    longDescription: "A productivity web application implementing three evidence-based time management techniques: Pomodoro (focused work intervals with short breaks), Flowtime (open-ended focus sessions that end when you decide), and Time Budget (flexible time banking per task). Built with React 18 + TypeScript and Tailwind CSS v4 on the frontend using Feature-Sliced Design, Zustand for auth state, and TanStack Query for server state. The backend is FastAPI + SQLAlchemy 2.0 with PostgreSQL on Supabase, JWT authentication with refresh tokens, rate limiting, and Alembic migrations. Deployed with Vercel (frontend) and Railway (backend), with full CI/CD via GitHub Actions. Organically grew to 50+ concurrent users and 500+ monthly visits, becoming a go-to study tool in the university community.",
    longDescriptionEs: "Aplicación web de productividad que implementa tres técnicas de gestión del tiempo basadas en evidencia: Pomodoro (intervalos de trabajo enfocado con pausas cortas), Flowtime (sesiones de enfoque abiertas que terminan cuando decides) y Bolsa de Tiempo (presupuesto de tiempo flexible por tarea). Construida con React 18 + TypeScript y Tailwind CSS v4 en el frontend usando Feature-Sliced Design, Zustand para estado de auth y TanStack Query para estado del servidor. El backend usa FastAPI + SQLAlchemy 2.0 con PostgreSQL en Supabase, autenticación JWT con refresh tokens, rate limiting y migraciones con Alembic. Desplegada con Vercel (frontend) y Railway (backend), con CI/CD completo vía GitHub Actions. Creció orgánicamente hasta más de 50 usuarios concurrentes y 500+ visitas mensuales, convirtiéndose en una herramienta habitual en la comunidad universitaria.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Zustand", "TanStack Query", "Tailwind CSS"],
    images: ["/projects/focus-timers.png"],
    githubLink: "https://github.com/AlgorithmicPaws/focus-timers",
    liveLink: "https://focus-timers-3uxl.vercel.app/",
  },
  {
    title: "Rubber Duck 2.0",
    description: "Physical intelligent assistant using AI to help programmers solve errors through guided questioning, based on the rubber duck debugging technique.",
    descriptionEs: "Asistente físico inteligente que usa IA para ayudar a programadores a resolver errores mediante preguntas guiadas, basado en la técnica rubber duck debugging.",
    longDescription: "A physical intelligent assistant inspired by the rubber duck debugging technique, built with custom hardware and an AI model fine-tuned with QLoRA. Instead of giving direct answers, it guides programmers through a Socratic questioning process — asking targeted questions that help surface the real root cause of bugs. The backend runs on FastAPI and the device was fully 3D-modeled and printed. Deployed in the university programming lab, it reduced average bug resolution time and became a go-to resource for the student developer community.",
    longDescriptionEs: "Asistente físico inteligente inspirado en la técnica rubber duck debugging, construido con hardware personalizado y un modelo de IA ajustado con QLoRA. En lugar de dar respuestas directas, guía a los programadores mediante un proceso de preguntas socráticas que ayudan a identificar la verdadera causa raíz de los errores. El backend corre sobre FastAPI y el dispositivo fue completamente modelado e impreso en 3D. Desplegado en el laboratorio de programación universitario, redujo el tiempo promedio de resolución de bugs y se convirtió en un recurso habitual para la comunidad estudiantil de desarrollo.",
    tags: ["AI", "QLoRA", "FastAPI", "3D Modeling"],
    images: ["/projects/duck.png"],
    githubLink: "https://github.com/AlgorithmicPaws/rubberduck2.0",
  },
  {
    title: "Chinook Music Store",
    description: "Full-stack music store with catalog, shopping cart, and order management. REST API with FastAPI and async SQLAlchemy, React + TypeScript SPA frontend.",
    descriptionEs: "Tienda de música full-stack con catálogo, carrito de compras y gestión de pedidos. API REST con FastAPI y SQLAlchemy asíncrono, SPA frontend en React + TypeScript.",
    longDescription: "A full-stack e-commerce platform for a digital music store, built on an extended version of the classic Chinook database. The REST API (FastAPI + async SQLAlchemy 2.0) exposes endpoints for catalog browsing, customer management, and a complete purchase flow — differentiating between assisted sales and self-service via employee tracking. The React + TypeScript frontend features a navigable catalog with genre and search filters, detail pages for tracks, albums, and artists, a localStorage-persisted shopping cart, full checkout process, and invoice history. Containerized with Docker for reproducible deployments.",
    longDescriptionEs: "Plataforma e-commerce full-stack para una tienda de música digital, construida sobre una versión extendida de la base de datos clásica Chinook. La API REST (FastAPI + SQLAlchemy 2.0 asíncrono) expone endpoints para navegación de catálogo, gestión de clientes y un flujo de compra completo — diferenciando ventas asistidas de autoservicio mediante seguimiento de empleados. El frontend en React + TypeScript incluye un catálogo navegable con filtros por género y búsqueda, páginas de detalle para canciones, álbumes y artistas, carrito persistido en localStorage, proceso de checkout completo e historial de facturas. Contenerizado con Docker para despliegues reproducibles.",
    tags: ["React", "TypeScript", "FastAPI", "MySQL", "Docker"],
    images: ["/projects/chinook.svg"],
    githubLink: "https://github.com/AlgorithmicPaws/bigdata",
  },
  {
    title: "VIP SCM Marketplace",
    description: "B2B marketplace for construction and renovation materials. Scalable solution with 10 concurrent users and 1,000+ monthly visits expanding the company's digital presence.",
    descriptionEs: "Marketplace B2B de materiales de construcción y remodelación. Solución escalable con 10 usuarios concurrentes y más de 1,000 visitas mensuales que amplía la presencia digital de la empresa.",
    longDescription: "A full-featured B2B marketplace for construction and renovation materials, developed for a real company to digitize and scale their sales operation. Built with React on the frontend and FastAPI with PostgreSQL on the backend, it supports product catalogs, supplier and buyer management, and end-to-end purchase workflows. Scaled to handle 10 concurrent users with 1,000+ monthly visits, the platform directly contributed to growing the company's online client portfolio and streamlining their commercial process beyond their physical store.",
    longDescriptionEs: "Marketplace B2B completo para materiales de construcción y remodelación, desarrollado para una empresa real con el objetivo de digitalizar y escalar su operación comercial. Construido con React en el frontend y FastAPI con PostgreSQL en el backend, soporta catálogos de productos, gestión de proveedores y compradores, y flujos de compra de extremo a extremo. Escalado para manejar 10 usuarios concurrentes con más de 1,000 visitas mensuales, la plataforma contribuyó directamente al crecimiento de la cartera de clientes en línea y a la optimización del proceso comercial más allá de su tienda física.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    images: ["/projects/scmvip.png","/projects/vipscm2.png", "/projects/vipscm3.png"],
    githubLink: "https://github.com/AlgorithmicPaws/vip-ecommerce",
  },
]
