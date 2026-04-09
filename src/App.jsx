import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Clinica from './components/sections/Clinica'
import Tratamentos from './components/sections/Tratamentos'
import Resultados from './components/sections/Resultados'
import Avaliacoes from './components/sections/Avaliacoes'
import Contato from './components/sections/Contato'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Clinica />
        <Tratamentos />
        <Resultados />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
