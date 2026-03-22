import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiHeart, HiSparkles } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import DraDebora from '../../assets/images/FotoDaDraDebora.svg'

const highlights = [
  {
    icon: HiAcademicCap,
    title: 'Formação',
    description: 'Graduada pela UFSC e especialização em Prótese e Dentística, com foco em reabilitação oral.',
  },
  {
    icon: HiHeart,
    title: 'Dedicação',
    description: 'Escuta atenta, cuidado genuíno e um atendimento pensado para as necessidades de cada paciente.',
  },
  {
    icon: HiSparkles,
    title: 'Excelência',
    description: 'Planejamento preciso, técnicas atuais e foco em resultados estéticos e funcionais.',
  },
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gold/5"
        style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Blob background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-gold/30 -rotate-6 scale-105"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
            />

            {/* Image container with organic shape */}
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
            >
              <img
                src={DraDebora}
                alt="Dra. Debora Santos"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Instagram badge */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-cream/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg">
              <span className="text-forest/70 text-base font-body"><strong>Acompanhe no insta:</strong></span>
              <a
                href="https://www.instagram.com/dra.deboracsantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
                           rounded-xl flex items-center justify-center text-white
                           hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-terracotta/10 rounded-full text-terracotta text-sm font-body tracking-widest uppercase mb-6">
              Sobre
            </span>

            <h2 className="section-title mb-6">
              Conheça<br />
              <span className="text-terracotta">Débora Santos</span>
            </h2>

            <div className="space-y-4 text-forest font-body leading-relaxed mb-10">
              <p>
                <strong>Oi! Eu sou a Dra. Débora Santos.</strong><br></br>
                Sou cirurgiã-dentista formada pela <strong>Universidade Federal de Santa Catarina (UFSC)</strong> e especializanda 
                em <strong>Prótese e Dentística, com ênfase em Reabilitação Oral.</strong> Também atuo como clínica geral, porque 
                acredito que um sorriso bonito precisa, antes de tudo, ser <strong>saudável e funcional.</strong>
              </p>
              <p>
                Meu trabalho é guiado por um princípio simples: <strong>entender você, planejar com cuidado e executar com 
                precisão.</strong> Cada tratamento é pensado de forma personalizada, com atenção aos detalhes e foco em 
                resultados <strong>naturais, confortáveis e duradouros.</strong>
              </p>
              <p>
                Seja bem-vindo(a) ao meu espaço. Aqui, <strong>saúde e estética caminham juntas</strong>, com um atendimento acolhedor 
                e um planejamento que traz segurança em cada etapa.
              </p>
              <p>
                <strong>Planejamento que você vê. Resultado que você sente. Naturalidade que permanece.</strong>
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-terracotta-dark" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-forest-dark mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-forest/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
