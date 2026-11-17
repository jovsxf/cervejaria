import { Gift } from 'lucide-react'
import { formatBRL, giftKits } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import Photo from './Photo'
import { WhatsappIcon } from './icons'

export default function GiftKits() {
  return (
    <section id="presentes" aria-labelledby="presentes-title" className="relative overflow-hidden bg-kombi-100 py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* fotografia */}
        <div className="relative lg:col-span-5" data-reveal="left">
          <div aria-hidden="true" className="absolute -inset-4 -rotate-2 rounded-[2.75rem] bg-kombi-200" />
          <Photo
            src="/photos/kit-festa-mao.webp"
            alt="Mão segurando um kit Congõi com duas cervejas e um copo, em uma festa com a igreja iluminada ao fundo"
            className="relative mx-auto aspect-[3/4] max-w-[26rem] rounded-[2.5rem] shadow-[0_40px_80px_-35px_rgba(8,26,51,0.55)] lg:max-w-none"
          />
        </div>

        {/* conteúdo */}
        <div className="lg:col-span-7">
          <p className="eyebrow text-amber-600" data-reveal>
            Kits para presente
          </p>
          <h2 id="presentes-title" className="display mt-4 text-[2.4rem] leading-[1.02] font-semibold text-navy-900 sm:text-5xl lg:text-[3.6rem]" data-reveal>
            Um presente com <em className="text-amber-600">sabor de Congõi.</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft" data-reveal>
            Cada kit vem com 2 cervejas e um copo — para presentear alguém especial (ou a si mesmo).
          </p>

          <ul className="mt-10 grid gap-4">
            {giftKits.map((kit, i) => (
              <li key={kit.id} data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
                <div className="group flex items-center gap-4 rounded-3xl bg-cream-50 p-4 pr-4 shadow-[0_1px_0_rgba(12,38,71,0.06)] ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_rgba(8,26,51,0.4)] sm:gap-6 sm:p-5">
                  <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kombi-200 text-navy-800 transition-transform duration-500 group-hover:-rotate-6 sm:grid">
                    <Gift size={24} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="display text-xl font-semibold text-navy-900 sm:text-2xl">
                      {kit.name.split(' + ').map((part, j) => (
                        <span key={part}>
                          {j > 0 && <span className="px-1 font-sans font-bold text-amber-600">+</span>}
                          {part}
                        </span>
                      ))}
                    </h3>
                    <p className="text-sm text-ink-soft">{kit.detail}</p>
                  </div>
                  {/* etiqueta de preço */}
                  <span className="relative rotate-3 rounded-xl bg-gold-400 px-3.5 pt-4 pb-1.5 text-navy-950 transition-transform duration-300 group-hover:rotate-0 sm:px-4">
                    <span aria-hidden="true" className="absolute top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cream-50" />
                    <span className="price text-2xl font-bold sm:text-3xl">{formatBRL(kit.price)}</span>
                  </span>
                  <a
                    href={whatsappLink(`Olá, Congõi! Gostaria de encomendar o ${kit.name} (${kit.detail}) – ${formatBRL(kit.price)}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-800 text-cream-50 transition hover:scale-110 hover:bg-navy-900"
                    aria-label={`Encomendar ${kit.name} pelo WhatsApp`}
                  >
                    <WhatsappIcon size={20} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
