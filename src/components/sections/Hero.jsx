import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import limpezadentalHeroVideo from '../../assets/videos/limpezadental-hero.mp4'
import senhoraespelhoHeroVideo from '../../assets/videos/senhoraespelho-hero.mp4'
import heroPoster from '../../assets/videos/hero-poster.webp'

function Hero() {
  const [enableVideoBackground, setEnableVideoBackground] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const heroVideoSequence = [
    { src: limpezadentalHeroVideo, objectPosition: '50% center' },
    { src: senhoraespelhoHeroVideo, objectPosition: '72% center' },
  ]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    const updateVideoPolicy = () => {
      const prefersReducedMotion = mediaQuery.matches
      const savesData = Boolean(connection?.saveData)
      setEnableVideoBackground(!prefersReducedMotion && !savesData)
    }

    updateVideoPolicy()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateVideoPolicy)
    } else {
      mediaQuery.addListener(updateVideoPolicy)
    }

    if (connection?.addEventListener) {
      connection.addEventListener('change', updateVideoPolicy)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateVideoPolicy)
      } else {
        mediaQuery.removeListener(updateVideoPolicy)
      }

      if (connection?.removeEventListener) {
        connection.removeEventListener('change', updateVideoPolicy)
      }
    }
  }, [])

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
      <div className="absolute inset-0 pointer-events-none">
        {/* Base background */}
        <div className="absolute inset-0 gradient-cream z-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 z-0"
          style={{ backgroundImage: `url(${heroPoster})` }}
          aria-hidden="true"
        />

        {/* Responsive hero video */}
        {enableVideoBackground && (
          <video
            key={heroVideoSequence[currentVideoIndex].src}
            className="absolute inset-0 h-full w-full object-cover z-0"
            style={{ objectPosition: heroVideoSequence[currentVideoIndex].objectPosition }}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-hidden="true"
            onEnded={() => {
              setCurrentVideoIndex((previousIndex) => (previousIndex + 1) % heroVideoSequence.length)
            }}
          >
            <source src={heroVideoSequence[currentVideoIndex].src} type="video/mp4" />
          </video>
        )}

        {/* Readability overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-forest-dark/30 via-cream/75 to-forest-dark/30" />
      </div>

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
