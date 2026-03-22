import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Logo from '../../assets/images/LogoCream.svg'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Consultório', href: '#clinica' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Avaliações', href: '#depoimentos' },
]

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/dra.deboracsantos/' },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/5548991979007' },
]

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-forest-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={Logo}
              alt="Dra. Debora Santos"
              className="h-14 w-auto mb-6"
            />
            <p className="text-cream/80 font-body leading-relaxed max-w-md">
              Cuidando do seu sorriso com dedicação e excelência.
              Transformando sorrisos e devolvendo a confiança aos nossos pacientes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xl text-gold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-cream/70 hover:text-cream transition-colors font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-gold mb-6">Contato</h4>
            <div className="space-y-4 text-cream/80 font-body text-sm">
              <p>
                <span className="text-gold">Endereço:</span><br />
                R. Dr. Heitor Blum, 310<br />
                Estreito - Florianópolis/SC
              </p>
              <p>
                <span className="text-gold">Horário:</span><br />
                Seg - Sex: 8h às 18h<br />
                Sábado: 8h às 13h
              </p>
              <p>
                <span className="text-gold">WhatsApp:</span><br />
                (48) 9 9197-9007
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-forest flex items-center justify-center
                           text-cream/70 hover:text-cream hover:bg-terracotta transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm font-body">
              © {new Date().getFullYear()} Dra. Debora Santos. Todos os direitos reservados.
            </p>
            <p className="text-cream/50 text-sm font-body">
              CRO-SC: 23.001
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
