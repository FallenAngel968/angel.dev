import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'

export default function Contact() {
  const contactOptions = [
    {
      title: "GitHub",
      description: "Ver mi código y proyectos",
      url: "https://github.com/FallenAngel968",
      icon: GitHubIcon
    },
    {
      title: "LinkedIn",
      description: "Conexión profesional",
      url: "https://linkedin.com/in/angel-flores-eduardo",
      icon: LinkedInIcon
    },
    {
      title: "Email",
      description: "Contacto directo",
      url: "mailto:angel_eduardo4@icloud.com",
      icon: EmailIcon
    }
  ]

  return (
    <section id="contact" className="py-24 px-4 w-full overflow-x-hidden bg-primary">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-2 rounded-full">
              // Contacto
            </p>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 via-accent to-blue-400 bg-clip-text text-transparent mb-6 mt-4">
              ¿Hablamos?
            </h2>
            <p className="text-textSecondary text-xl leading-relaxed max-w-2xl mx-auto">
              Estoy abierto a oportunidades, colaboraciones y conversaciones sobre arquitectura backend, 
              problemas técnicos interesantes o cualquier cosa relacionada con <span className="text-accent">desarrollo serio</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 md:max-w-xl md:mx-auto">
          {contactOptions.map((option, idx) => (
            <AnimatedSection key={idx} delay={0.1 * idx}>
              <motion.a
                href={option.url}
                target={option.url.startsWith('mailto') ? undefined : "_blank"}
                rel={option.url.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="block bg-secondary/30 border border-secondary/50 rounded-lg p-6 hover:border-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                whileHover={{ x: 6, borderColor: '#3B82F6' }}
              >
                <div className="flex items-center gap-4">
                  <option.icon className="w-8 h-8 text-textSecondary group-hover:text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-black text-textPrimary group-hover:text-accent transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-textTertiary text-base">{option.description}</p>
                  </div>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                    →
                  </span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 pt-8 border-t border-secondary/30 text-center">
            <p className="text-textSecondary text-base mb-3">
              Siempre interesado en:
            </p>
            <p className="text-textPrimary text-lg leading-relaxed">
              Proyectos backend desafiantes • Equipo técnico serio • Problemas de escalabilidad • Arquitectura de sistemas
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
