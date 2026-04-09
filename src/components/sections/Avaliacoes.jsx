import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { HiEmojiHappy, HiClock, HiAcademicCap } from 'react-icons/hi'

const stats = [
  {
    icon: HiEmojiHappy,
    value: '250+',
    label: 'Sorrisos Transformados',
  },
  {
    icon: HiClock,
    value: '4+',
    label: 'Anos de Experiência',
  },
  {
    icon: HiAcademicCap,
    value: 'Pós-Graduanda',
    label: 'Prótese e Dentística',
  },
]

function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Carrega o script do Elfsight apenas uma vez
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove o script quando o componente desmontar
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6"
          >
            Avaliações
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-4"
          >
            O que nossos <span className="text-terracotta">pacientes</span> dizem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            A satisfação dos nossos pacientes é nossa maior conquista.
            Confira alguns depoimentos de quem já transformou o sorriso conosco.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-cream border border-forest/10 rounded-2xl p-8 shadow-sm
                         hover:shadow-lg hover:shadow-gold/10 hover:border-gold/30
                         transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl" />
              <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-5">
                <stat.icon className="w-7 h-7 text-terracotta-dark" />
              </div>
              <p className="font-display text-3xl font-bold text-forest-dark mb-2">
                {stat.value}
              </p>
              <p className="font-body text-forest/70 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="elfsight-app-4d8b0c0f-9b45-4130-acde-0877b97e2b39"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
