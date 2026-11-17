import { formatBRL, growlers } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import { GrowlerIllustration } from './illustrations'
import { WhatsappIcon } from './icons'

export default function Growlers() {
  return (
    <section id="growlers" aria-labelledby="growlers-title" className="relative overflow-hidden bg-gold-400 py-24 text-navy-950 sm:py-32">
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border-[3rem] border-amber-600/20" />
      <div aria-hidden="true" className="absolute -top-20 right-[10%] h-56 w-56 rounded-full bg-cream-50/25" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-navy-800" data-reveal>
            Growlers
          </p>
          <h2 id="growlers-title" className="display mt-4 text-[2.6rem] leading-[1] font-semibold sm:text-6xl lg:text-7xl" data-reveal>
            Direto da fonte <em>para sua casa.</em>
          </h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-navy-900/80" data-reveal>
            Leve seu chopp favorito fresquinho.
          </p>
          <a
            href={whatsappLink('Olá, Congõi! Gostaria de pedir growler de chopp (Pilsen ou Vinho, 1 litro).')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy mt-10"
            data-reveal
          >
            <WhatsappIcon size={18} /> Pedir growler
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-8">
          {growlers.map((g, i) => (
            <li
              key={g.id}
              className="group relative flex flex-col items-center rounded-[2rem] bg-cream-50 px-4 pt-8 pb-6 text-center shadow-[0_30px_60px_-35px_rgba(8,26,51,0.6)] transition-transform duration-500 hover:-translate-y-2 sm:px-6"
              data-reveal
              style={{ ['--d' as string]: `${i * 120}ms` }}
            >
              <GrowlerIllustration color={g.color} className="h-44 transition-transform duration-500 group-hover:-rotate-6 sm:h-60" />
              <h3 className="display mt-4 text-xl font-semibold sm:text-2xl">{g.name}</h3>
              <p className="text-sm font-semibold text-ink-soft">{g.detail}</p>
              <p className="price mt-3 text-4xl font-bold text-navy-800 sm:text-5xl">{formatBRL(g.price)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
