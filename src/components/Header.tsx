import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsappIcon } from './icons'
import Logo from './Logo'

const links = [
  { href: '#historia', label: 'História' },
  { href: '#chopps', label: 'Chopps' },
  { href: '#experiencias', label: 'Eventos' },
  { href: '#presentes', label: 'Presentes' },
  { href: '#growlers', label: 'Growlers' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-cream-50/90 shadow-[0_1px_0_rgba(12,38,71,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <a href="#topo" className="block shrink-0" aria-label={`${brand.name} – voltar ao início`} onClick={() => setOpen(false)}>
          <Logo className={`transition-all duration-500 ${scrolled ? 'w-[104px]' : 'w-[124px] sm:w-[148px]'}`} />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-navy-700 ${
                    active === l.href ? 'text-navy-900' : 'text-ink-soft'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold-500 transition-transform duration-300 ${
                      active === l.href ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-navy hidden !min-h-11 !px-5 !text-sm sm:inline-flex">
            <WhatsappIcon size={18} /> Orçamento
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-navy-900 transition hover:bg-cream-200 lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile (fora do header: backdrop-filter criaria um novo contexto para position: fixed) */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-0 z-40 h-[100dvh] bg-cream-50 pt-24 transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Menu mobile" className="container-x flex h-full flex-col pb-10">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="border-b border-navy-900/10 transition-all duration-500"
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms', transform: open ? 'none' : 'translateY(12px)', opacity: open ? 1 : 0 }}
              >
                <a href={l.href} onClick={() => setOpen(false)} className="display flex items-center justify-between py-4 text-3xl font-semibold text-navy-900">
                  {l.label}
                  <span className="text-sm font-sans font-bold text-amber-600">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              <WhatsappIcon /> Falar no WhatsApp
            </a>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full text-navy-900">
              <InstagramIcon /> {brand.instagramHandle}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
