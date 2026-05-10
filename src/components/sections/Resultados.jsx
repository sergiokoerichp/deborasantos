import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import antes1 from '../../assets/images/antesxdepoiscliente1.webp'
import antes2 from '../../assets/images/antesxdepoiscliente2.webp'
import antes3 from '../../assets/images/antesxdepoiscliente3.webp'

const WHATSAPP_URL = 'https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20D%C3%A9bora%20Santos.'

const casos = [
  {
    numeral: '01',
    label: 'Caso 01',
    image: antes1,
    alt: 'Caso 01 — comparativo antes e depois de tratamento odontológico',
    title: 'Reabilitação estética',
    description:
      'Planejamento digital com mock-up funcional, restauração da harmonia do sorriso e ajuste de proporções dentárias. Resultado natural conduzido em etapas controladas.',
  },
  {
    numeral: '02',
    label: 'Caso 02',
    image: antes2,
    alt: 'Caso 02 — comparativo antes e depois de tratamento odontológico',
    title: 'Lentes de contato dental',
    description:
      'Aplicação de lentes ultrafinas após avaliação criteriosa de indicação clínica. Foco em preservação de estrutura dental e durabilidade do trabalho.',
  },
  {
    numeral: '03',
    label: 'Caso 03',
    image: antes3,
    alt: 'Caso 03 — comparativo antes e depois de tratamento odontológico',
    title: 'Clareamento profissional',
    description:
      'Protocolo clínico de clareamento com acompanhamento individual, atenção à sensibilidade e estabilidade do tom ao longo do tempo.',
  },
]

function CasoArticle({ caso, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const isReversed = index % 2 === 1
  const headingId = `caso-${caso.numeral}-titulo`

  return (
    <article
      ref={ref}
      aria-labelledby={headingId}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
    >
      {/* Imagem */}
      <motion.figure
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`lg:col-span-5 overflow-hidden bg-forest-dark/5 max-w-sm lg:max-w-none mx-auto ${
          isReversed ? 'lg:col-start-8 lg:order-2' : 'lg:col-start-1'
        }`}
      >
        <img
          src={caso.image}
          alt={caso.alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          className="w-full h-full object-cover aspect-[3/4] hover:scale-[1.02] transition-transform duration-700"
        />
      </motion.figure>

      {/* Texto */}
      <div
        className={`lg:col-span-6 flex flex-col gap-6 lg:gap-8 max-w-lg ${
          isReversed
            ? 'lg:col-start-1 lg:order-1 lg:pr-8 xl:pr-16 lg:items-end lg:text-right lg:ml-auto'
            : 'lg:col-start-7 lg:pl-8 xl:pl-16'
        }`}
      >
        {/* Numeral + filete */}
        <div className={`flex flex-col gap-4 ${isReversed ? 'lg:items-end' : ''}`}>
          <motion.p
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="editorial-numeral text-7xl lg:text-8xl leading-none"
          >
            {caso.numeral}
          </motion.p>
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="h-px bg-gold"
            aria-hidden="true"
          />
        </div>

        {/* Título + descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h3
            id={headingId}
            className="font-display text-3xl lg:text-4xl font-light text-forest-dark"
            style={{ letterSpacing: '-0.02em' }}
          >
            {caso.title}
          </h3>
          <p className="font-body text-base lg:text-lg text-forest leading-relaxed">
            {caso.description}
          </p>
        </motion.div>

        {/* Tag rodapé "caso 01" */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`font-body text-xs tracking-[0.3em] uppercase text-forest/60 inline-flex items-center gap-3 ${
            isReversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <span className="w-10 h-px bg-gold" aria-hidden="true" />
          {caso.label}
        </motion.span>
      </div>
    </article>
  )
}

function Resultados() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="resultados" className="py-24 lg:py-32 bg-forest/5 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative">

        {/* Header */}
        <header ref={headerRef} className="mb-20 lg:mb-28 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Resultados
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6 mt-6"
          >
            Casos planejados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Cada caso é conduzido com planejamento criterioso, técnica apurada e
            atenção aos detalhes que sustentam o resultado ao longo do tempo.
          </motion.p>
        </header>

        {/* Lista de casos — zigue-zague editorial */}
        <div role="list" className="space-y-20 lg:space-y-32">
          {casos.map((caso, index) => (
            <div key={caso.numeral} role="listitem">
              <CasoArticle caso={caso} index={index} />
              {index < casos.length - 1 && (
                <hr className="mt-20 lg:mt-32 border-t border-forest/10" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <footer className="mt-24 lg:mt-32 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar avaliação
          </a>
        </footer>

      </div>
    </section>
  )
}

export default Resultados
