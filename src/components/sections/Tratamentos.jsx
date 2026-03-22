import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiSun,
  HiAdjustments,
  HiPlusCircle,
  HiUser,
  HiViewGrid,
  HiLocationMarker,
} from 'react-icons/hi'

const tratamentos = [
  {
    icon: HiSun,
    title: 'Clareamento Dental',
    description:
      'Devolva o brilho natural do seu sorriso com técnicas seguras e eficazes de clareamento profissional.',
  },
  {
    icon: HiAdjustments,
    title: 'Implantes Dentários',
    description:
      'Soluções modernas e duradouras para substituição de dentes perdidos, devolvendo função e estética.',
  },
  {
    icon: HiPlusCircle,
    title: 'Lentes de Contato Dental',
    description:
      'Transforme seu sorriso com lentes ultrafinas que corrigem cor, forma e pequenas imperfeições.',
  },
  {
    icon: HiUser,
    title: 'Harmonização Orofacial',
    description:
      'Procedimentos estéticos que equilibram e realçam a harmonia do seu rosto de forma natural.',
  },
  {
    icon: HiViewGrid,
    title: 'Ortodontia',
    description:
      'Alinhamento dental com aparelhos convencionais ou invisíveis para um sorriso perfeito.',
  },
  {
    icon: HiLocationMarker,
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
      {/* Decorative background element */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-gold/5"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0% 100%)' }}
      />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6"
          >
            Serviços
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Nossos{' '}
            <span className="text-terracotta">Tratamentos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Oferecemos uma gama completa de serviços odontológicos com foco em
            qualidade, conforto e resultados excepcionais.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tratamentos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-cream border border-forest/10 rounded-2xl p-8 shadow-sm
                         hover:shadow-lg hover:shadow-gold/10 hover:border-gold/30
                         transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 rounded-br-none rounded-tl-none rounded-tr-2xl" />

              {/* Icon */}
              <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-terracotta-dark" />
              </div>

              <h3 className="font-display text-xl font-semibold text-forest-dark mb-3">
                {item.title}
              </h3>
              <p className="font-body text-forest/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
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
            href="https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Debora%20Santos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agende sua Avaliação
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Tratamentos
