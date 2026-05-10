import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLocationMarker, HiClock, HiPhone } from 'react-icons/hi'
import foto1 from '../../assets/images/fotoconsultorio1.webp'
import foto2 from '../../assets/images/fotoconsultorio2.webp'
import foto3 from '../../assets/images/fotoconsultorio3.webp'
import foto4 from '../../assets/images/fotoconsultorio4.webp'

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=R.+Dr.+Heitor+Blum,+310+-+Sala+907+-+Estreito,+Florian%C3%B3polis+-+SC,+88075-110&output=embed'

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Endereço',
    lines: [
      'Rua Dr. Heitor Blum, 310 — sala 907',
      'Centro Empresarial Vitória Office, 9º andar',
      'Estreito, Florianópolis/SC · CEP 88075-110',
    ],
  },
  {
    icon: HiClock,
    title: 'Horário de Funcionamento',
    lines: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 13h', 'Domingo: Fechado'],
  },
  {
    icon: HiPhone,
    title: 'Telefone / WhatsApp',
    lines: ['(48) 99197-9007'],
  },
]

const fotos = [foto1, foto2, foto3, foto4]

function Clinica() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clinica" className="py-24 lg:py-32 bg-forest/5 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">

        {/* ── Parte 1: Header ── */}
        <div className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Consultório
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mb-6 mt-6"
          >
            Um espaço pensado<br />
            para cada etapa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Ambiente confortável, tecnologia a favor do cuidado e atendimento que respeita
            o seu tempo.
          </motion.p>
        </div>

        {/* ── Parte 2: Galeria de fotos — gap-8, sem raio, sem borda ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {fotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="aspect-[4/3] overflow-hidden hover:scale-[1.01] transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Recepção e ambientes do consultório, foto ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* ── Parte 3: Mapa retangular + Card abaixo ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          {/* Mapa retangular — sem raio, sem card sobreposto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="overflow-hidden">
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

            <div className="mt-6 pl-6 border-l border-gold">
              <p className="font-display text-xl text-forest-dark">
                Consultório Dra. Débora Santos
              </p>
              <p className="text-sm text-forest/80 font-body mt-1">
                Rua Dr. Heitor Blum, 310 — sala 907 · Vitória Office · Estreito, Florianópolis/SC
              </p>
            </div>
          </motion.div>

          {/* Informações de contato — layout horizontal com filete dourado */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-10"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex gap-6 pl-6 border-l border-gold"
              >
                <info.icon className="w-6 h-6 text-terracotta-dark flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-xl text-forest-dark mb-3">
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-forest/80 font-body text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Clinica
