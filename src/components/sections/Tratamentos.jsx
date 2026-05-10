import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WHATSAPP_URL = 'https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20D%C3%A9bora%20Santos.'

const tratamentos = [
  {
    numeral: '01',
    title: 'Clareamento Dental',
    description:
      'Devolva o brilho natural do seu sorriso com técnicas seguras e eficazes de clareamento profissional.',
  },
  {
    numeral: '02',
    title: 'Implantes Dentários',
    description:
      'Soluções modernas e duradouras para substituição de dentes perdidos, devolvendo função e estética.',
  },
  {
    numeral: '03',
    title: 'Lentes de Contato Dental',
    description:
      'Transforme seu sorriso com lentes ultrafinas que corrigem cor, forma e pequenas imperfeições.',
  },
  {
    numeral: '04',
    title: 'Harmonização Orofacial',
    description:
      'Procedimentos estéticos que equilibram e realçam a harmonia do seu rosto de forma natural.',
  },
  {
    numeral: '05',
    title: 'Ortodontia',
    description:
      'Alinhamento dental com aparelhos convencionais ou invisíveis para um sorriso perfeito.',
  },
  {
    numeral: '06',
    title: 'Próteses Dentárias',
    description:
      'Próteses personalizadas com acabamento natural para restaurar a funcionalidade e beleza do seu sorriso.',
  },
]

function Tratamentos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Serviços
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6 mt-6"
          >
            Tratamentos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Cada procedimento é avaliado caso a caso, com critério clínico e foco
            em saúde, função e naturalidade.
          </motion.p>
        </div>

        {/* Lista editorial — filete inferior, sem card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16">
          {tratamentos.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="flex gap-6 py-8 border-b border-forest/15 group"
            >
              <p className="editorial-numeral text-3xl md:text-4xl flex-shrink-0 w-16 group-hover:text-terracotta-dark transition-colors duration-300">
                {item.numeral}
              </p>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-light text-forest-dark mb-2 group-hover:text-terracotta-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-forest/80 leading-relaxed text-sm md:text-base max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
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

      </div>
    </section>
  )
}

export default Tratamentos
