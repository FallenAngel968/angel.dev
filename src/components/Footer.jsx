import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-secondary/30 py-12 px-4 w-full overflow-x-hidden backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-1 text-accent text-sm font-mono">
            <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
            <span>angello.dev</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
          </div>
          <p className="text-textSecondary text-sm">
            Backend Developer • Node.js • PostgreSQL • Express
          </p>
          <p className="text-textTertiary text-xs pt-2 border-t border-secondary/30">
            Construido con React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
