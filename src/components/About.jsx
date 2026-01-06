import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 w-full overflow-x-hidden bg-primary">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-2 rounded-full">
              // Quién soy
            </p>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-accent to-purple-400 bg-clip-text text-transparent mt-6">
              Backend developer con <br /> responsabilidad técnica
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="space-y-5 text-center md:text-left">
              <p className="text-textPrimary leading-relaxed text-xl">
                Mi especialidad es construir la "capa invisible" que hace que las aplicaciones funcionen. 
                APIs robustas, autenticación segura, bases de datos bien diseñadas y lógica de negocio confiable.
              </p>
              <p className="text-textSecondary leading-relaxed text-lg">
                He trabajado en proyectos complejos: e-commerce con pagos, sistemas en tiempo real, aplicaciones sin conexión. 
                Cada proyecto me enseñó sobre escalabilidad, seguridad y experiencia del usuario.
              </p>
              <p className="text-textSecondary leading-relaxed text-lg">
                No genero código solo por generar. Cada función, middleware y relación de base de datos tiene propósito. 
                Creo en arquitectura limpia y en que el código backend bien hecho es invisible para el usuario, pero crucial para el negocio.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 p-7 rounded-lg border border-secondary/50 hover:border-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="text-accent font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> Stack principal
                </h3>
                <div className="space-y-2">
                  <p className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">›</span> Node.js</p>
                  <p className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">›</span> Express</p>
                  <p className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">›</span> PostgreSQL</p>
                  <p className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">›</span> Prisma ORM</p>
                  <p className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">›</span> JWT Auth</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 p-7 rounded-lg border border-secondary/50 hover:border-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="text-accent font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> Enfoque
                </h3>
                <ul className="space-y-2">
                  <li className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">✓</span> Arquitectura escalable</li>
                  <li className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">✓</span> Seguridad first</li>
                  <li className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">✓</span> Código mantenible</li>
                  <li className="text-textSecondary text-sm flex justify-center md:justify-start"><span className="text-accent mr-2">✓</span> Debugging metódico</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
