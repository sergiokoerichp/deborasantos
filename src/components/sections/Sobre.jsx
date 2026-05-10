import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaInstagram } from 'react-icons/fa'
import DraDebora from '../../assets/images/FotoDaDraDebora.webp'

const highlights = [
  {
    numeral: '01',
    title: 'Formação',
    description: 'Graduada pela UFSC e especialização em Prótese e Dentística, com foco em reabilitação oral.',
  },
  {
    numeral: '02',
    title: 'Dedicação',
    description: 'Escuta atenta, cuidado genuíno e um atendimento pensado para as necessidades de cada paciente.',
  },
  {
    numeral: '03',
    title: 'Critério',
    description: 'Planejamento preciso, técnicas atuais e foco em resultados estéticos e funcionais.',
  },
]

const pilares = [
  {
    numeral: '01',
    title: 'Missão',
    text: 'Unir saúde bucal e estética com planejamento visível, cuidado gentil e precisão — para um sorriso saudável, funcional, natural e duradouro.',
  },
  {
    numeral: '02',
    title: 'Visão',
    text: 'Ser referência em odontologia que combina ciência, tecnologia e sensibilidade, com resultados naturais que respeitam saúde, função e individualidade.',
  },
  {
    numeral: '03',
    title: 'Valores',
    items: [
      'Saúde em primeiro lugar',
      'Planejamento e previsibilidade',
      'Função e naturalidade',
      'Cuidado humano',
      'Critério no detalhe',
      'Transparência e confiança',
    ],
  },
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            {/* Moldura impressa: retângulo de gold/8% deslocado */}
            <div
              className="absolute inset-0 bg-gold/10 translate-x-6 translate-y-6"
              aria-hidden="true"
            />

            {/* Image — retângulo vertical, canto reto */}
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={DraDebora}
                alt="Retrato editorial da Dra. Débora Santos em consultório"
                className="w-full h-full object-cover"
              />
              {/* Filete dourado lateral como assinatura */}
              <div className="absolute top-0 left-0 w-px h-full bg-gold" aria-hidden="true" />
            </div>

            {/* Instagram link discreto, monocromático forest-dark */}
            <a
              href="https://www.instagram.com/dra.deboracsantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-forest-dark hover:text-terracotta-dark transition-colors duration-300 font-body text-sm tracking-widest uppercase"
              aria-label="Instagram da Dra. Débora Santos"
            >
              <FaInstagram className="w-4 h-4" />
              <span>@dra.deboracsantos</span>
            </a>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="eyebrow mb-8">Sobre</span>

            <h2 className="section-title mb-8 mt-4">
              Quem cuida<br />
              de você
            </h2>

            <div className="space-y-4 text-forest font-body leading-relaxed mb-12">
              <p>
                Sou cirurgiã-dentista formada pela Universidade Federal de Santa Catarina (UFSC) e especializanda em <strong>Prótese e Dentística com ênfase em Reabilitação Oral</strong>. Atuo também como clínica geral, porque um sorriso bonito precisa, antes de tudo, ser saudável e funcional.
              </p>
              <p>
                Meu trabalho é guiado por um princípio simples: entender você, planejar com cuidado e executar com precisão. Cada tratamento é pensado de forma personalizada, com atenção aos detalhes e foco em resultados naturais, confortáveis e duradouros.
              </p>
              <p>
                Aqui, saúde e estética caminham juntas — com atendimento acolhedor e um planejamento que traz segurança em cada etapa.
              </p>
            </div>

            {/* Highlights — numerais editoriais, sem ícone, sem caixa */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-forest/10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <p className="editorial-numeral text-4xl mb-3">{item.numeral}</p>
                  <h4 className="font-display text-xl text-forest-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-forest/80 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pilares — tipografia editorial, sem cards */}
        <div className="mt-24 pt-16 border-t border-forest/15">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="eyebrow mb-12"
          >
            Pilares
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mt-12">
            {pilares.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <p className="editorial-numeral text-4xl mb-4">{p.numeral}</p>
                <h4 className="font-display text-2xl text-forest-dark mb-4">
                  {p.title}
                </h4>
                {p.text && (
                  <p className="font-body text-forest/80 leading-relaxed">
                    {p.text}
                  </p>
                )}
                {p.items && (
                  <ul className="space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-forest/80 leading-relaxed">
                        <span className="text-gold font-display text-lg leading-none mt-1" aria-hidden="true">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
