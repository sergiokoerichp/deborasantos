import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

// Dados de contato reais
const WHATSAPP_NUMBER = '5548991979007'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma avaliação com a Dra. Débora Santos.'

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full
                 flex items-center justify-center shadow-lg shadow-[#25D366]/30
                 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />

      {/* Pulse Animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}

export default WhatsAppButton
