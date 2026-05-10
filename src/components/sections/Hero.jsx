import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import limpezadentalHeroVideo from '../../assets/videos/limpezadental-hero.mp4'
import senhoraespelhoHeroVideo from '../../assets/videos/senhoraespelho-hero.mp4'
import heroPoster from '../../assets/videos/hero-poster.webp'

const WHATSAPP_URL = 'https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20D%C3%A9bora%20Santos.'

function Hero() {
  const handleScrollToAbout = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src={limpezadentalHeroVideo} type="video/mp4" />
        <source src={senhoraespelhoHeroVideo} type="video/mp4" />
      </video>

      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <span className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-cream/90 inline-flex items-center gap-3">
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
            Estética &amp; Reabilitação Oral
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-cream mb-6 leading-[1.05]"
          style={{ letterSpacing: '-0.02em' }}
        >
          Débora Santos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-base md:text-lg text-cream/90 max-w-xl mx-auto mb-3 leading-relaxed"
        >
          Planejamento que você vê. Resultado que você sente.
          <span className="block mt-1">Um sorriso natural que permanece.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-cream/70 mb-10"
        >
          CRO-SC 23.001
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar avaliação
          </a>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="h-px bg-gold mx-auto mt-12"
          aria-hidden="true"
        />
      </div>

      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll para baixo"
      >
        <HiArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}

export default Hero
