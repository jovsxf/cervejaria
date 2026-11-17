import { brand } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsappIcon } from './icons'
import Logo from './Logo'

const nav = [
  { href: '#historia', label: 'Nossa história' },
  { href: '#chopps', label: 'Chopps' },
  { href: '#experiencias', label: 'Experiências para eventos' },
  { href: '#presentes', label: 'Kits para presente' },
  { href: '#personalizados', label: 'Personalizados' },
  { href: '#growlers', label: 'Growlers' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-20 pb-28 text-cream-200 sm:pb-12">
      <div className="container-x">
        <p className="display max-w-5xl text-[2.6rem] leading-[0.95] font-semibold text-cream-50 sm:text-7xl lg:text-8xl" aria-hidden="true">
          Mais do que cerveja. <em className="text-gold-400">Criamos experiências.</em>
        </p>

        <div className="mt-14 grid gap-12 border-t border-cream-50/10 pt-12 md:grid-cols-3">
          <div>
            <div className="inline-block rounded-3xl bg-cream-50 px-6 py-5">
              <Logo size="lg" className="w-[190px]" />
            </div>
            <p className="mt-5 text-cream-200/70">{brand.location}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Navegue</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-gold-400">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Fale com a gente</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-colors hover:text-gold-400">
                  <WhatsappIcon size={18} /> {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-colors hover:text-gold-400">
                  <InstagramIcon size={18} /> {brand.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-200/60 md:flex-row md:items-center md:justify-between">
          <p>
            <strong className="font-bold text-cream-200/90">Beba com moderação.</strong> Venda e consumo de bebidas alcoólicas proibidos para menores de 18
            anos. Se for dirigir, não beba.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
