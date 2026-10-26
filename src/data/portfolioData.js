export const portfolioData = {
  es: {
    personal: {
      name: "KENNY PALACIN CRISTOBAL",
      badge: "Disponible para proyectos & oportunidades",
      roles: [
        "Desarrollador Full Stack",
        "Especialista en IA & Gemini",
        "Desarrollador Móvil (Flutter / Kotlin)",
        "Estudiante Ing. de Software (USIL)"
      ],
      location: "Lima, Perú",
      phone: "+51 937 765 918",
      whatsapp: "https://wa.me/51937765918?text=Hola%20Kenny,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar",
      email: "kennypalacin130698@gmail.com",
      linkedin: "https://www.linkedin.com/in/kenny-palacin/",
      github: "https://github.com/Kenny2006-PE",
      githubUser: "Kenny2006-PE",
      summary:
        "Egresado de Diseño y Desarrollo de Software (TECSUP) y estudiante de Ingeniería de Software (USIL), con experiencia en desarrollo Full Stack y construcción de soluciones web, móviles y basadas en Inteligencia Artificial. Especializado en el diseño e implementación de APIs REST, bases de datos relacionales/NoSQL, interfaces responsivas y consumo de servicios externos. Enfocado en la creación de software escalable, mantenible y orientado a resolver problemas de negocio mediante metodologías ágiles y buenas prácticas de programación.",
      stats: [
        { label: "Experiencia Profesional", value: "+1 Año", desc: "Desarrollo Full Stack en producción" },
        { label: "Proyectos Clave", value: "3+", desc: "IA, FinTech, Geo-commerce & Reservas" },
        { label: "Formación de Élite", value: "TECSUP + USIL", desc: "Diseño de Software & Ing. de Software" },
        { label: "Dominio de Idioma", value: "Inglés B2", desc: "Certificado por Conversa" }
      ]
    },
    nav: {
      hero: "Inicio / CV",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Educación & Certs",
      contact: "Contacto",
      downloadCv: "Descargar CV",
      viewCv: "Ver CV Completo"
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Trayectoria laboral comprobada en desarrollo de soluciones de software de alto impacto.",
      jobs: [
        {
          company: "QTECH EXPERIENCE",
          role: "Desarrollador Full Stack",
          location: "Lima, Perú",
          period: "Mar 2025 - Nov 2025",
          type: "Jornada Completa",
          highlights: [
            "Diseño e implementación de interfaces web responsivas y amigables con el usuario utilizando Figma, HTML5, CSS3, JavaScript y PHP, optimizando la experiencia en múltiples dispositivos.",
            "Desarrollo de un sistema de comunicación y mensajería en tiempo real mediante AJAX y JavaScript, agilizando la coordinación operativa entre operarios y técnicos en campo.",
            "Construcción y despliegue de un módulo de gestión operativa para el registro de estados, evidencia fotográfica y documentación técnica de servicios técnicos.",
            "Aseguramiento de la continuidad operativa mediante despliegues, integración de cambios de código y control de versiones en entornos de producción siguiendo buenas prácticas y estándares de calidad."
          ],
          technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "AJAX", "Figma", "Git", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Proyectos Relevantes",
      subtitle: "Soluciones de ingeniería con arquitecturas modernas, inteligencia artificial y alto rendimiento.",
      categories: ["Todos", "IA & Mobile", "Web & Full Stack", "APIs & Backend"],
      items: [
        {
          id: "monia",
          title: "MonIA",
          subtitle: "Asistente Financiero Inteligente Multiplataforma",
          category: "IA & Mobile",
          badge: "Inteligencia Artificial",
          featured: true,
          description:
            "Solución integral multiplataforma (Web y Móvil) orientada a la gestión financiera personal con privacidad de datos. Incorpora un asistente conversacional contextual impulsado por Inteligencia Artificial que analiza balances de cuentas, categoriza transacciones y ofrece recomendaciones personalizadas en tiempo real.",
          techStack: ["Flutter", "Dart", "Next.js", "React", "SQLite", "API de Gemini 1.5 Flash", "Git"],
          metrics: "Análisis financiero contextual en tiempo real con Gemini AI y almacenamiento local seguro.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        },
        {
          id: "marketmap",
          title: "MarketMap",
          subtitle: "Plataforma de Comercio Geolocalizado",
          category: "Web & Full Stack",
          badge: "Geolocalización",
          featured: true,
          description:
            "Aplicación web y móvil para la comercialización de artículos de segunda mano basada en geolocalización. Implementa una arquitectura desacoplada con backend modular, endpoints seguros para autenticación y consumo de APIs de mapas.",
          techStack: ["React", "Spring Boot", "Java", "MySQL", "Kotlin", "REST APIs", "JWT"],
          metrics: "Arquitectura desacoplada, autenticación robusta JWT y consumo eficiente de APIs de mapas.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        },
        {
          id: "reseratec",
          title: "ReservaTec",
          subtitle: "Plataforma de Gestión de Reservas Deportivas",
          category: "Web & Full Stack",
          badge: "Full Stack",
          featured: true,
          description:
            "Aplicación web Full Stack diseñada para automatizar la reserva y calendarización de canchas e instalaciones en el polideportivo de TECSUP. Cuenta con control de horarios en tiempo real, autenticación de usuarios, gestión de turnos y panel administrativo para reportes de disponibilidad.",
          techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"],
          metrics: "Automatización integral de reservas en tiempo real y panel de reportería para TECSUP.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Stack tecnológico dominado a través de proyectos de producción y formación continua.",
      categories: [
        {
          name: "Frontend",
          icon: "Layout",
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Bootstrap"]
        },
        {
          name: "Backend",
          icon: "Server",
          skills: ["Node.js", "Express.js", "Java", "Spring Boot", "C#", ".NET", "PHP", "Laravel", "APIs REST", "JWT"]
        },
        {
          name: "Mobile",
          icon: "Smartphone",
          skills: ["Flutter", "Dart", "Kotlin"]
        },
        {
          name: "Bases de Datos",
          icon: "Database",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
        },
        {
          name: "Herramientas",
          icon: "Wrench",
          skills: ["Git", "GitHub", "Postman", "Figma", "Apache JMeter"]
        },
        {
          name: "Cloud & IA",
          icon: "Cpu",
          skills: ["Google Gemini API", "Vercel", "Render"]
        },
        {
          name: "Metodologías",
          icon: "Workflow",
          skills: ["Scrum", "Agile", "Git Flow", "CI/CD Básico"]
        },
        {
          name: "Idiomas",
          icon: "Globe",
          skills: ["Español (Nativo)", "Inglés (B2)"]
        }
      ]
    },
    education: {
      title: "Educación & Certificaciones",
      subtitle: "Cimientos académicos sólidos y constante actualización tecnológica.",
      degrees: [
        {
          institution: "Universidad San Ignacio de Loyola (USIL)",
          degree: "Ingeniería de Software",
          period: "2026 - Actualmente",
          location: "Lima, Perú",
          status: "En curso",
          icon: "GraduationCap"
        },
        {
          institution: "TECSUP",
          degree: "Diseño y Desarrollo de Software",
          period: "2023 - 2025",
          location: "Lima, Perú",
          status: "Egresado",
          icon: "Award"
        }
      ],
      certifications: [
        { title: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", type: "Certificación" },
        { title: "Desarrollo de Aplicaciones con IA Gemini", issuer: "PIT UNI", type: "Inteligencia Artificial" },
        { title: "Fundamentos de Ciberseguridad", issuer: "Cisco", type: "Seguridad" },
        { title: "Inglés B2", issuer: "Conversa", type: "Idioma" },
        { title: "Fundamentos de JAVA", issuer: "PIT UNI", type: "Programación" },
        { title: "JavaScript Básico", issuer: "PIT UNI", type: "Programación" },
        { title: "Fundamentos de FIGMA UX/UI", issuer: "PIT UNI", type: "Diseño UX/UI" }
      ]
    },
    contact: {
      title: "¿Hablamos de tu próximo proyecto?",
      subtitle: "Estoy disponible para roles Full Stack, Mobile o proyectos innovadores con IA.",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono / WhatsApp",
      locationLabel: "Ubicación",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sentSuccess: "¡Mensaje listo! Se abrirá tu cliente de correo.",
        placeholderName: "Ej: Carlos Mendoza",
        placeholderEmail: "carlos@empresa.com",
        placeholderMessage: "Hola Kenny, tenemos una oportunidad para ti..."
      }
    },
    cvModal: {
      title: "Currículum Vitae - Kenny Palacin Cristobal",
      printBtn: "Imprimir / Guardar como PDF",
      closeBtn: "Cerrar Vista Previa",
      downloadDone: "¡Listo para imprimir o guardar!"
    }
  },

  en: {
    personal: {
      name: "KENNY PALACIN CRISTOBAL",
      badge: "Available for projects & opportunities",
      roles: [
        "Full Stack Developer",
        "AI & Gemini Specialist",
        "Mobile App Engineer (Flutter / Kotlin)",
        "Software Engineering Student (USIL)"
      ],
      location: "Lima, Peru",
      phone: "+51 937 765 918",
      whatsapp: "https://wa.me/51937765918?text=Hello%20Kenny,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect",
      email: "kennypalacin130698@gmail.com",
      linkedin: "https://www.linkedin.com/in/kenny-palacin/",
      github: "https://github.com/Kenny2006-PE",
      githubUser: "Kenny2006-PE",
      summary:
        "Software Design & Development graduate (TECSUP) and Software Engineering student (USIL), with proven experience in Full Stack development and the construction of web, mobile, and AI-driven solutions. Specialized in designing and implementing REST APIs, relational/NoSQL databases, responsive interfaces, and integrating external services. Focused on scalable, maintainable software and business problem-solving through agile methodologies and clean code standards.",
      stats: [
        { label: "Professional Experience", value: "+1 Year", desc: "Production-grade Full Stack development" },
        { label: "Key Projects", value: "3+", desc: "AI, FinTech, Geo-commerce & Booking" },
        { label: "Elite Education", value: "TECSUP + USIL", desc: "Software Design & Software Eng." },
        { label: "Language Proficiency", value: "English B2", desc: "Certified by Conversa" }
      ]
    },
    nav: {
      hero: "Home / CV",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education & Certs",
      contact: "Contact",
      downloadCv: "Download CV",
      viewCv: "View Full CV"
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Demonstrated track record of delivering high-impact software solutions in production.",
      jobs: [
        {
          company: "QTECH EXPERIENCE",
          role: "Full Stack Developer",
          location: "Lima, Peru",
          period: "Mar 2025 - Nov 2025",
          type: "Full-Time",
          highlights: [
            "Design and implementation of user-friendly, responsive web interfaces using Figma, HTML5, CSS3, JavaScript, and PHP, enhancing multi-device user experiences.",
            "Development of a real-time communication and messaging system utilizing AJAX and JavaScript, streamlining field operations and coordination.",
            "Construction and deployment of an operational management module for state tracking, photographic evidence, and technical service documentation.",
            "Ensuring operational uptime and continuity through releases, codebase integration, and version control in production environments following rigorous quality standards."
          ],
          technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "AJAX", "Figma", "Git", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Engineering projects built with modern architectures, Artificial Intelligence, and performance.",
      categories: ["All", "AI & Mobile", "Web & Full Stack", "APIs & Backend"],
      items: [
        {
          id: "monia",
          title: "MonIA",
          subtitle: "Cross-Platform Smart Financial Assistant",
          category: "AI & Mobile",
          badge: "Artificial Intelligence",
          featured: true,
          description:
            "Comprehensive cross-platform solution (Web & Mobile) tailored for personal finance with data privacy. Features an AI-powered contextual conversational assistant that analyzes account balances, categorizes transactions, and provides real-time personalized recommendations.",
          techStack: ["Flutter", "Dart", "Next.js", "React", "SQLite", "Gemini 1.5 Flash API", "Git"],
          metrics: "Real-time contextual financial insights with Gemini AI and secure local persistence.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        },
        {
          id: "marketmap",
          title: "MarketMap",
          subtitle: "Geolocation-Based Marketplace Platform",
          category: "Web & Full Stack",
          badge: "Geolocation",
          featured: true,
          description:
            "Web and mobile application for buying and selling second-hand goods based on geographic proximity. Implements a decoupled modular backend, secure authentication endpoints, and map API integration.",
          techStack: ["React", "Spring Boot", "Java", "MySQL", "Kotlin", "REST APIs", "JWT"],
          metrics: "Decoupled architecture, robust JWT authentication, and optimized mapping APIs.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        },
        {
          id: "reseratec",
          title: "ReservaTec",
          subtitle: "Sports Facility Booking Management System",
          category: "Web & Full Stack",
          badge: "Full Stack",
          featured: true,
          description:
            "Full Stack web application designed to automate the scheduling and reservation of courts and facilities at TECSUP's sports complex. Features real-time schedule tracking, user authentication, shift management, and administrative reports.",
          techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"],
          metrics: "End-to-end booking automation in real time with an administrative reporting dashboard.",
          github: "https://github.com/Kenny2006-PE",
          demo: "#"
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies mastered through production engineering and rigorous academic training.",
      categories: [
        {
          name: "Frontend",
          icon: "Layout",
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Bootstrap"]
        },
        {
          name: "Backend",
          icon: "Server",
          skills: ["Node.js", "Express.js", "Java", "Spring Boot", "C#", ".NET", "PHP", "Laravel", "REST APIs", "JWT"]
        },
        {
          name: "Mobile",
          icon: "Smartphone",
          skills: ["Flutter", "Dart", "Kotlin"]
        },
        {
          name: "Databases",
          icon: "Database",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
        },
        {
          name: "Tools & DevOps",
          icon: "Wrench",
          skills: ["Git", "GitHub", "Postman", "Figma", "Apache JMeter"]
        },
        {
          name: "Cloud & AI",
          icon: "Cpu",
          skills: ["Google Gemini API", "Vercel", "Render"]
        },
        {
          name: "Methodologies",
          icon: "Workflow",
          skills: ["Scrum", "Agile", "Git Flow", "CI/CD Basics"]
        },
        {
          name: "Languages",
          icon: "Globe",
          skills: ["Spanish (Native)", "English (B2)"]
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Solid academic foundation backed by continuous industry certifications.",
      degrees: [
        {
          institution: "Universidad San Ignacio de Loyola (USIL)",
          degree: "Software Engineering",
          period: "2026 - Present",
          location: "Lima, Peru",
          status: "In progress",
          icon: "GraduationCap"
        },
        {
          institution: "TECSUP",
          degree: "Software Design & Development",
          period: "2023 - 2025",
          location: "Lima, Peru",
          status: "Graduate",
          icon: "Award"
        }
      ],
      certifications: [
        { title: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", type: "Certification" },
        { title: "AI Application Development with Gemini", issuer: "PIT UNI", type: "Artificial Intelligence" },
        { title: "Cybersecurity Fundamentals", issuer: "Cisco", type: "Security" },
        { title: "English B2", issuer: "Conversa", type: "Language" },
        { title: "Java Fundamentals", issuer: "PIT UNI", type: "Programming" },
        { title: "JavaScript Basics", issuer: "PIT UNI", type: "Programming" },
        { title: "Figma UX/UI Fundamentals", issuer: "PIT UNI", type: "Design UX/UI" }
      ]
    },
    contact: {
      title: "Let's build your next project together",
      subtitle: "Available for Full Stack and Mobile roles, or innovative AI-driven ventures.",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      form: {
        name: "Your Name",
        email: "Your Email Address",
        message: "Your Message",
        send: "Send Message",
        sentSuccess: "Message prepared! Your mail client will open.",
        placeholderName: "e.g. John Doe",
        placeholderEmail: "john@company.com",
        placeholderMessage: "Hi Kenny, we have an exciting opportunity for you..."
      }
    },
    cvModal: {
      title: "Curriculum Vitae - Kenny Palacin Cristobal",
      printBtn: "Print / Save as PDF",
      closeBtn: "Close Preview",
      downloadDone: "Ready to print or save as PDF!"
    }
  }
};
