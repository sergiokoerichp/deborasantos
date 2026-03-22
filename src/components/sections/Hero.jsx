import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#sobre')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-cream" />

      {/* Decorative organic shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right leaf shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.08, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-forest"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        />

        {/* Bottom left leaf shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-terracotta"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />

        {/* Center decorative circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-forest-dark"
        />
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-forest-dark/10 rounded-full text-forest text-sm font-body tracking-widest uppercase">
            Odontologia estética e Reabilitação Oral
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-forest-dark mb-6 leading-tight"
        >
          Débora Santos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-forest max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Planejamento que você vê. Resultado que você sente.
          <span className="block mt-2 text-terracotta font-medium">
            Um sorriso natural que permanece.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Debora%20Santos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Consulta
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            Nossos Serviços
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator — filho direto da section para o absolute funcionar corretamente */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-forest-dark/50 hover:text-forest-dark transition-colors"
        aria-label="Scroll para baixo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
