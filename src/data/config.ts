export interface Project {
  id: string;
  title: string;
  category: 'Landing' | 'Business' | 'E-commerce' | 'Web App';
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  stars: number;
  featured: boolean;
  metrics: string;
  image: string;
}

export interface StudioConfig {
  studioName: string;
  shortName: string;
  tagline: string;
  subtagline: string;
  githubUsername: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  location: string;
  status: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
}

export const STUDIO_CONFIG: StudioConfig = {
  studioName: "BRUTA WEB STUDIO",
  shortName: "BRUTA",
  tagline: "YOUR BUSINESS DESERVES A BETTER WEBSITE.",
  subtagline: "Diseño & desarrollo web de alto impacto para marcas y negocios que quieren crecer, vender más y destacar con identidad propia.",
  githubUsername: "Nahuel-Tapia",
  whatsappNumber: "5491130000000", // Código país + código área + número
  whatsappMessage: "Hola Nahuel! Vengo desde tu web Bruta Studio y quiero cotizar el desarrollo de un proyecto web.",
  email: "contacto@brutastudio.dev",
  location: "Buenos Aires, Argentina (Trabajo Remoto Global)",
  status: "Disponible para nuevos proyectos Q2/Q3",
  socials: {
    github: "https://github.com/Nahuel-Tapia",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
  },
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ledesir-fragancias",
    title: "Le Désir Fragancias | E-Commerce Luxury",
    category: "E-commerce",
    description: "Tienda online de perfumería exclusiva con catálogo interactivo, Supabase backend en tiempo real, Astro & React y checkout optimizado.",
    techStack: ["Astro", "React", "Supabase", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Nahuel-Tapia/ledesir-fragancias",
    demoUrl: "https://ledesir-fragancias.vercel.app",
    stars: 1,
    featured: true,
    metrics: "Arquitectura Serverless • Despliegue en Vercel",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "veterinaria-aplicativo",
    title: "Veterinaria Integral | Gestión & Turnos",
    category: "Web App",
    description: "Plataforma integral veterinaria con portal de clientes, gestión de pacientes, reservas de turnos y sincronización web y móvil.",
    techStack: ["JavaScript", "React", "Node.js", "Express", "Vercel"],
    githubUrl: "https://github.com/Nahuel-Tapia/Veterinaria-Aplicativo",
    demoUrl: "https://veterinaria-aplicativo.vercel.app",
    stars: 1,
    featured: true,
    metrics: "Sistema Fullstack Modular con frontend, backend y móvil",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "eco-huella",
    title: "Eco Huella | Calculadora de Huella de Carbono",
    category: "Web App",
    description: "Aplicación interactiva con cuestionario dinámico, algoritmo de cálculo de emisiones anuales y recomendaciones personalizadas en tiempo real.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Nahuel-Tapia/eco-huella",
    demoUrl: "https://eco-huella-weld.vercel.app",
    stars: 1,
    featured: true,
    metrics: "Algoritmo dinámico • 100% Mobile Ready",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "comercio-proyecto",
    title: "E-Commerce Enterprise Architecture",
    category: "Business",
    description: "Solución comercial robusta construida con Clean Architecture (Domain, Application, Infrastructure, Tests) para alto volumen de transacciones.",
    techStack: [".NET / C#", "TypeScript", "Clean Architecture", "Unit Tests"],
    githubUrl: "https://github.com/Nahuel-Tapia/Comercio-Proyecto",
    demoUrl: "https://github.com/Nahuel-Tapia/Comercio-Proyecto",
    stars: 1,
    featured: true,
    metrics: "Arquitectura Empresarial en capas • Tests Unitarios",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bruta-studio",
    title: "Bruta Web Studio | Plataforma de Agencia",
    category: "Landing",
    description: "Sitio web de agencia digital con diseño brutalista de alto impacto, presupuestador interactivo, slider antes/después y simulador responsive.",
    techStack: ["React 19", "TypeScript", "Tailwind v4", "Vite", "Puppeteer"],
    githubUrl: "https://github.com/Nahuel-Tapia/Bruta",
    demoUrl: "https://github.com/Nahuel-Tapia/Bruta",
    stars: 1,
    featured: false,
    metrics: "100% Código a Medida • Carga < 0.5s",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "IDEA & ESTRATEGIA",
    subtitle: "Nos contás tu proyecto y objetivos.",
    description: "Analizamos tu modelo de negocio, tu audiencia ideal y definimos el mapa de navegación enfocado en convertir visitantes en clientes.",
    deliverable: "Brief estratégico, mapa de sitio y propuesta de valor"
  },
  {
    step: "02",
    title: "DISEÑO UI/UX EXCLUSIVO",
    subtitle: "Creamos una propuesta visual personalizada.",
    description: "Diseñamos interfaces de alta fidelidad, con tipografía contundente, paleta de colores a medida y componentes interactivos.",
    deliverable: "Prototipo interactivo en Figma & Guía de estilo"
  },
  {
    step: "03",
    title: "DESARROLLO & CÓDIGO LIMPIO",
    subtitle: "Convertimos el diseño en una web funcional.",
    description: "Construimos con código moderno, modular y ultrarrápido (React / Next.js / Tailwind). Sin plantillas genéricas infladas ni dependencias innecesarias.",
    deliverable: "Repositorio en GitHub con commits claros y arquitectura limpia"
  },
  {
    step: "04",
    title: "PRUEBAS & RENDIMIENTO",
    subtitle: "Revisamos cada detalle al milímetro.",
    description: "Optimizamos velocidad de carga (90+ en Google Lighthouse), compatibilidad responsive en smartphones y tablets, y seguridad SSL.",
    deliverable: "Informe de rendimiento Google PageSpeed y auditoría SEO"
  },
  {
    step: "05",
    title: "LANZAMIENTO & CRECIMIENTO",
    subtitle: "Tu web lista para recibir clientes.",
    description: "Configuración de dominio, hosting de alta velocidad, integración con WhatsApp Business y analítica para medir resultados.",
    deliverable: "Sitio 100% online, indexado en Google y manual de uso"
  }
];

export const FAQS = [
  {
    q: "¿Por qué invertir en una web personalizada en lugar de una plantilla genérica?",
    a: "Las plantillas genéricas (Wix, WordPress con themes sobrecargados) suelen tardar 5 a 10 segundos en cargar, no se adaptan bien a móviles y lucen idénticas a la competencia. Nuestras webs están programadas a medida con código limpio, cargan en menos de 1 segundo y están estructuradas para convertir visitantes en clientes reales."
  },
  {
    q: "¿Cómo se vincula con mi WhatsApp o CRM?",
    a: "Integramos botones inteligentes y formularios con disparadores directos a tu WhatsApp con mensajes prediseñados y categorizados según el servicio que el cliente consultó, eliminando la fricción."
  },
  {
    q: "¿Cuánto tiempo toma el desarrollo de mi web?",
    a: "Una Landing Page de alta conversión suele entregarse en 5 a 7 días hábiles. Sitios corporativos completos o catálogos e-commerce toman entre 10 y 20 días hábiles, con entregas progresivas de avances en cada fase."
  },
  {
    q: "¿Qué pasa con el dominio y el hosting?",
    a: "Te asesoramos en la compra de tu dominio propio (.com, .com.ar, etc.) a tu nombre y configuramos hosting moderno de máxima velocidad (Vercel / Cloudflare) con certificado de seguridad SSL gratis para siempre."
  },
  {
    q: "¿Puedo ver el progreso en tiempo real en GitHub?",
    a: "¡Totalmente! Creemos en la transparencia total. Compartimos el repositorio contigo para que puedas ver cada commit, branch y avance técnico en vivo."
  }
];
