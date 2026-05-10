import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
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
        <div ref={ref} className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Avaliações
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6 mt-6"
          >
            O que pacientes dizem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Depoimentos reais de nossos pacientes.
          </motion.p>
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
