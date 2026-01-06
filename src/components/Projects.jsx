import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Projects() {
  const projects = [
    {
      title: "CrypticOnline",
      subtitle: "E-commerce con backend profesional",
      problem: "Necesidad de plataforma de compras online con procesamiento de pagos, inventario y notificaciones en tiempo real.",
      solution: [
        "API REST escalable: Node.js + Express + PostgreSQL",
        "Autenticación JWT con roles (admin, cliente)",
        "Sistema de órdenes: creación, estados, historial",
        "Procesamiento de pagos: integración con MercadoPago",
        "Notificaciones en tiempo real",
        "Frontend: React Native + Expo (iOS/Android)"
      ],
      responsibility: [
        "Diseño e implementación de base de datos relacional",
        "Arquitectura de API REST con middleware personalizado",
        "Sistema de autenticación y autorización",
        "Lógica de pagos y validación de órdenes",
        "Integración con servicios de terceros"
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "MercadoPago", "React Native"],
      status: "En producción"
    },
    {
      title: "Sistema de Torneos",
      subtitle: "App de competencias sin conexión",
      problem: "Necesidad de sistema confiable para torneos de taekwondo sin dependencia de internet, con validación en tiempo real entre múltiples jueces.",
      solution: [
        "Servidor local embebido en app de escritorio",
        "Apps móviles para jueces conectadas por QR",
        "Validación de puntos por coincidencia automática",
        "Sincronización local y en red",
        "Sistema robusto sin latencia"
      ],
      responsibility: [
        "Arquitectura de servidor local para tiempo real",
        "Lógica de validación y coincidencia de puntos",
        "Sistema de comunicación entre dispositivos",
        "Manejo de desconexiones y recuperación",
        "Base de datos embebida con sincronización"
      ],
      tech: ["Node.js", "Express", "React Native", "SQLite", "WebSockets", "QR"],
      status: "Completado"
    },
    {
      title: "Proyectos Académicos",
      subtitle: "APIs, CRUDs y sistemas de autenticación",
      problem: "Ejercicios de desarrollo enfocados en consolidar fundamentos de arquitectura backend profesional.",
      solution: [
        "APIs REST desde cero: GET, POST, PUT, DELETE",
        "CRUDs completos con validación de datos",
        "Autenticación y autorización con JWT",
        "Middleware personalizado (logging, error handling)",
        "Relaciones complejas en base de datos",
        "Documentación y versionado con Git"
      ],
      responsibility: [
        "Implementación de rutas y controladores",
        "Validación de entrada y manejo de errores",
        "Testing básico de funcionalidad",
        "Documentación clara del código",
        "Buenas prácticas de estructura de proyectos"
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Git", "Postman"],
      status: "Referencia"
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 w-full overflow-x-hidden bg-gradient-to-b from-primary to-primary/80">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-2 rounded-full">
              // Proyectos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 mt-4">
              Productos técnicos reales
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Proyectos que resolvieron problemas específicos. Cada uno enseñó lecciones de arquitectura y escalabilidad.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={0.1 * idx}>
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-700/50 rounded-lg p-8 hover:border-gray-600/80 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 group"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-100 mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{project.subtitle}</p>
                  </div>
                  <span className="px-4 py-2 bg-accent/20 text-accent text-xs font-mono rounded-full border border-accent/40 whitespace-nowrap">
                    {project.status}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-800/40 rounded p-5 border border-gray-700/30">
                    <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Problema
                    </h4>
                    <p className="text-gray-200 text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/40 rounded p-5 border border-gray-700/30">
                    <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Solución
                    </h4>
                    <ul className="space-y-1.5">
                      {project.solution.map((item, i) => (
                        <li key={i} className="text-gray-200 text-base flex gap-2">
                          <span className="text-accent flex-shrink-0">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/5 rounded p-5 mb-6 border border-accent/20">
                  <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Responsabilidad técnica
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.responsibility.map((item, i) => (
                      <li key={i} className="text-gray-200 text-base flex gap-2">
                        <span className="text-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/15 text-accent text-xs font-mono rounded-full border border-accent/40 hover:bg-accent/25 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
