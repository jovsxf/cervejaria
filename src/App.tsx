import Header from './components/Header'
import Hero from './components/Hero'
import History from './components/History'
import Chopps from './components/Chopps'
import Experiences from './components/Experiences'
import GiftKits from './components/GiftKits'
import CustomProducts from './components/CustomProducts'
import Growlers from './components/Growlers'
import HowItWorks from './components/HowItWorks'
import Events from './components/Events'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import AgeNotice from './components/AgeNotice'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <History />
        <Chopps />
        <Experiences />
        <GiftKits />
        <CustomProducts />
        <Growlers />
        <HowItWorks />
        <Events />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AgeNotice />
    </>
  )
}
