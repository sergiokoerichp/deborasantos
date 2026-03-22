import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLocationMarker, HiClock, HiPhone, HiHeart, HiEye, HiStar } from 'react-icons/hi'

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5685!3d-27.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273856e8d5b5a7%3A0x0!2sR.%20Dr.%20Heitor%20Blum%2C%20310%20-%20Estreito%2C%20Florian%C3%B3polis%20-%20SC%2C%2088075-110!5e0!3m2!1spt-BR!2sbr'

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Endereço',
    lines: ['R. Dr. Heitor Blum, 310', 'Estreito - Florianópolis/SC', 'CEP: 88075-110'],
  },
  {
    icon: HiClock,
    title: 'Horário de Funcionamento',
    lines: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 13h', 'Domingo: Fechado'],
  },
  {
    icon: HiPhone,
    title: 'Telefone / WhatsApp',
    lines: ['(48) 9 9197-9007'],
  },
]

const placeholders = [0, 1, 2]

function Clinica() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clinica" className="py-24 lg:py-32 bg-forest/5 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #273617 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">

        {/* ── Parte 1: Header ── */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6"
          >
            Sobre o Consultório
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6"
          >
            Um Consultório pensado para que você se sinta{' '}
            <span className="text-terracotta">seguro(a)</span> em cada etapa.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Criamos um ambiente confortável e acolhedor para que você tenha uma experiência
            tranquila — com atenção aos detalhes, tecnologia a favor do cuidado e um atendimento
            que respeita o seu tempo.
          </motion.p>
        </div>

        {/* ── Parte 2: Galeria de fotos ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="aspect-[4/3] rounded-2xl bg-gold/20 border border-gold/20
                         hover:border-gold/50 transition-all duration-500
                         hover:shadow-xl hover:shadow-gold/10 hover:scale-[1.02]"
            />
          ))}
        </div>

        {/* ── Parte 3: Mapa + Informações ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <p className="font-display text-lg font-semibold text-forest-dark">
                  Consultório Dra. Debora Santos
                </p>
                <p className="text-sm text-forest/70">
                  R. Dr. Heitor Blum, 310 - Estreito, Florianópolis
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex gap-4 p-6 bg-cream rounded-2xl shadow-md"
              >
                <div className="w-14 h-14 flex-shrink-0 bg-gold/20 rounded-xl flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-terracotta-dark" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-forest-dark mb-2">
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-forest/70 font-body text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>

        {/* ── Parte 4: Missão / Visão / Valores ── */}
        <div className="mt-24">

          {/* Header da seção */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6"
            >
              Nossos Pilares
            </motion.span>
          </div>

          {/* Cards Missão / Visão / Valores — grid simétrico */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-cream rounded-2xl shadow-md p-8 flex flex-col"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <HiHeart className="w-7 h-7 text-terracotta-dark" />
              </div>
              <h4 className="font-display text-xl font-semibold text-forest-dark mb-3">
                Missão
              </h4>
              <p className="font-body text-forest/80 leading-relaxed flex-1">
                Unir saúde bucal e estética com planejamento visível, cuidado gentil e precisão — para um sorriso saudável, funcional, natural e duradouro.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-cream rounded-2xl shadow-md p-8 flex flex-col"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <HiEye className="w-7 h-7 text-terracotta-dark" />
              </div>
              <h4 className="font-display text-xl font-semibold text-forest-dark mb-3">
                Visão
              </h4>
              <p className="font-body text-forest/80 leading-relaxed flex-1">
                Ser referência em odontologia que combina ciência, tecnologia e sensibilidade, com resultados naturais que respeitam saúde, função e individualidade.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-cream rounded-2xl shadow-md p-8 flex flex-col"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <HiStar className="w-7 h-7 text-terracotta-dark" />
              </div>
              <h4 className="font-display text-xl font-semibold text-forest-dark mb-3">
                Valores
              </h4>
              <ul className="space-y-3 flex-1">
                {[
                  'Saúde em primeiro lugar',
                  'Planejamento e previsibilidade',
                  'Função e naturalidade',
                  'Cuidado humano',
                  'Excelência no detalhe',
                  'Transparência e confiança',
                ].map((valor) => (
                  <li key={valor} className="flex items-center gap-3 font-body text-forest/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    {valor}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Clinica
