import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Logo from '../../assets/images/LogoForestDark.svg'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Avaliações', href: '#depoimentos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Consultório', href: '#clinica' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <img
              src={Logo}
              alt="Dra. Debora Santos"
              className="h-12 md:h-14 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-forest-dark font-body text-sm tracking-wide uppercase
                           transition-colors duration-300
                           relative after:absolute after:bottom-0 after:left-0 after:w-0
                           after:h-0.5 after:transition-all after:duration-300
                           hover:after:w-full
                           ${isScrolled
                             ? 'hover:text-terracotta after:bg-terracotta'
                             : 'hover:text-cream after:bg-cream'
                           }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* CTA Desktop — link de texto editorial */}
          <motion.a
            href="https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20D%C3%A9bora%20Santos."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`hidden lg:inline-flex items-center gap-2 text-forest-dark font-body text-sm tracking-widest uppercase
                       border-b border-forest-dark/40 pb-1
                       transition-colors duration-300
                       ${isScrolled
                         ? 'hover:text-terracotta-dark hover:border-terracotta-dark'
                         : 'hover:text-cream hover:border-cream'
                       }`}
          >
            Agendar avaliação
            <span aria-hidden="true">→</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden relative z-10 p-2 text-forest-dark"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-forest-dark overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-8">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream font-display text-2xl font-light hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/5548991979007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20D%C3%A9bora%20Santos."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 inline-flex items-center gap-3 bg-terracotta-dark text-cream px-8 py-4 rounded-soft font-body font-medium tracking-wider uppercase text-sm hover:bg-terracotta transition-colors"
              >
                Agendar avaliação
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
