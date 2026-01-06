import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-40 pb-32 px-4 w-full overflow-x-hidden bg-primary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4 inline-block bg-accent/10 px-4 py-2 rounded-full">
              // Backend Developer
            </p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-accent to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-lg"
          >
            Arquitecto de sistemas backend
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-2xl text-textPrimary max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Especializado en construir APIs robustas, autenticación segura y lógica de negocio escalable. 
            Node.js, Express, PostgreSQL. Arquitectura limpia y responsabilidad técnica en cada decisión.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed"
          >
            Junior avanzado con experiencia en e-commerce completo, sistemas en tiempo real y aplicaciones full-stack. 
            Cada línea de código tiene propósito y mantiene el código limpio para el futuro.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 pt-8 flex-wrap justify-center"
          >
            <motion.a 
              href="#projects"
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver proyectos
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-8 py-3 border border-accent/50 text-accent rounded-lg hover:border-accent hover:bg-accent/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactar
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-12 grid grid-cols-3 gap-8 border-t border-secondary/30 text-center"
          >
            <div>
              <p className="text-3xl font-bold text-accent">3+</p>
              <p className="text-sm text-textSecondary mt-1">Proyectos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">Backend</p>
              <p className="text-sm text-textSecondary mt-1">Especialidad</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">Full-stack</p>
              <p className="text-sm text-textSecondary mt-1">Capacidad</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
