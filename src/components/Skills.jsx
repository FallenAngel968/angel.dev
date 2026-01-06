import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import {
  BackendIcon,
  FrontendIcon,
  ToolsIcon,
  ArchitectureIcon,
  CommunicationIcon,
  ThinkingIcon,
  ResponsibilityIcon,
  LearningIcon,
  DebuggingIcon,
  EmpathyIcon
} from './Icons'

export default function Skills() {
  const skillSections = [
    {
      category: "Backend (Especialidad)",
      icon: BackendIcon,
      description: "Core de mi stack técnico",
      skills: [
        { name: "Node.js", level: "Avanzado" },
        { name: "Express.js", level: "Avanzado" },
        { name: "Prisma ORM", level: "Avanzado" },
        { name: "PostgreSQL", level: "Avanzado" },
        { name: "JWT Auth", level: "Intermedio-Avanzado" },
        { name: "REST APIs", level: "Avanzado" },
        { name: "Middleware", level: "Intermedio-Avanzado" },
        { name: "Validación de datos", level: "Avanzado" }
      ]
    },
    {
      category: "Frontend",
      icon: FrontendIcon,
      description: "Funcional, limpio y con criterio",
      skills: [
        { name: "React", level: "Intermedio" },
        { name: "React Native", level: "Intermedio" },
        { name: "Expo", level: "Intermedio" },
        { name: "HTML/CSS", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Avanzado" },
        { name: "JavaScript ES6+", level: "Avanzado" }
      ]
    },
    {
      category: "DevOps & Herramientas",
      icon: ToolsIcon,
      description: "Infraestructura y flujo de trabajo",
      skills: [
        { name: "Git & GitHub", level: "Intermedio-Avanzado" },
        { name: "npm/yarn", level: "Intermedio" },
        { name: "Postman", level: "Intermedio" },
        { name: "CLI", level: "Intermedio" },
        { name: "SQLite", level: "Intermedio" },
        { name: "Debugging", level: "Avanzado" }
      ]
    },
    {
      category: "Arquitectura & Conceptos",
      icon: ArchitectureIcon,
      description: "Fundamentos de diseño sólido",
      skills: [
        { name: "Diseño de BD", level: "Intermedio-Avanzado" },
        { name: "Arquitectura REST", level: "Intermedio-Avanzado" },
        { name: "CRUD", level: "Avanzado" },
        { name: "Roles y permisos", level: "Intermedio" },
        { name: "Manejo de errores", level: "Intermedio-Avanzado" },
        { name: "Tiempo real", level: "Intermedio" }
      ]
    }
  ]

  const softSkills = [
    { 
      title: "Comunicación asertiva",
      desc: "Explico decisiones técnicas con claridad, sin jerga innecesaria",
      icon: CommunicationIcon
    },
    { 
      title: "Pensamiento crítico",
      desc: "Analizo problemas profundamente antes de codear",
      icon: ThinkingIcon
    },
    { 
      title: "Responsabilidad técnica",
      desc: "Cada línea de código tiene propósito y es mantenible",
      icon: ResponsibilityIcon
    },
    { 
      title: "Aprendizaje continuo",
      desc: "Investigación activa de nuevas tecnologías y patrones",
      icon: LearningIcon
    },
    { 
      title: "Debugging metódico",
      desc: "Sigo pasos lógicos para encontrar y resolver problemas",
      icon: DebuggingIcon
    },
    { 
      title: "Empatía técnica",
      desc: "Considero necesidades del usuario y del equipo",
      icon: EmpathyIcon
    }
  ]

  return (
    <section id="skills" className="py-24 px-4 w-full overflow-x-hidden bg-primary">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-2 rounded-full">
              // Habilidades
            </p>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-rose-400 via-accent to-cyan-400 bg-clip-text text-transparent mt-4">
              Stack técnico & capacidades
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-6 mb-20">
          {skillSections.map((section, idx) => (
            <AnimatedSection key={idx} delay={0.1 * idx}>
              <motion.div 
                className="bg-secondary/30 border border-secondary/50 rounded-lg p-6 hover:border-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3 mb-5">
                  <section.icon className="w-7 h-7 text-textSecondary group-hover:text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-black text-textPrimary group-hover:text-accent transition-colors">{section.category}</h3>
                    <p className="text-textTertiary text-sm mt-1">{section.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2.5 bg-secondary/20 rounded p-4">
                  {section.skills.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center text-base">
                      <span className="text-textPrimary font-medium">{skill.name}</span>
                      <span className="text-textTertiary text-sm font-mono px-2 py-1 bg-secondary/40 rounded">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="border-t border-secondary/30 pt-16">
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 via-accent to-orange-400 bg-clip-text text-transparent mb-12 text-center">
              Habilidades blandas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-secondary/30 border border-secondary/50 rounded-lg p-6 hover:border-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex gap-4 items-start">
                    <skill.icon className="w-6 h-6 text-textSecondary group-hover:text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h4 className="font-black text-textPrimary mb-1 group-hover:text-accent transition-colors">{skill.title}</h4>
                      <p className="text-textTertiary text-base leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
