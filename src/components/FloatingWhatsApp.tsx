import { useEffect, useState } from 'react'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsappIcon } from './icons'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Congõi pelo WhatsApp"
      className={`group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#1fa855] p-4 text-white shadow-[0_14px_30px_-10px_rgba(0,0,0,0.45)] transition-all duration-500 hover:bg-[#178c46] sm:right-6 sm:bottom-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#1fa855] opacity-25 motion-reduce:hidden" />
      <WhatsappIcon size={28} className="relative" />
      <span className="relative hidden max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-all duration-500 group-hover:max-w-40 sm:inline">
        Fale conosco
      </span>
    </a>
  )
}
