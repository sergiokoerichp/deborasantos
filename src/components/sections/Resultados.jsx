import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import antes1 from '../../assets/images/antesxdepoiscliente1.webp'
import antes2 from '../../assets/images/antesxdepoiscliente2.webp'
import antes3 from '../../assets/images/antesxdepoiscliente3.webp'

const casos = [
  { antes: antes1, label: 'Caso 01' },
  { antes: antes2, label: 'Caso 02' },
  { antes: antes3, label: 'Caso 03' },
]

function Resultados() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resultados" className="py-24 lg:py-32 bg-forest/5 relative overflow-hidden">
      {/* Background dot pattern — igual ao Clinica */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #273617 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6"
          >
            Resultados
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Transformações{' '}
            <span className="text-terracotta">reais</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Cada sorriso conta uma história. Veja os resultados alcançados com planejamento
            criterioso, técnica apurada e atenção aos mínimos detalhes.
          </motion.p>
        </div>

        {/* Cards antes × depois */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="bg-cream rounded-2xl shadow-md overflow-hidden
                         hover:shadow-xl hover:shadow-gold/10 hover:scale-[1.02]
                         transition-all duration-500 relative group"
            >
              {/* Decorative corner accent — igual ao Tratamentos */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl z-10" />

              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={caso.antes}
                  alt={`Antes e depois — ${caso.label}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>


            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Debora%20Santos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero transformar meu sorriso
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Resultados
