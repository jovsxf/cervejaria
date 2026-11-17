import { ArrowUpRight } from 'lucide-react'
import { customProducts, formatBRL } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'

export default function CustomProducts() {
  return (
    <section id="personalizados" aria-labelledby="personalizados-title" className="grain relative bg-cream-100 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-amber-600" data-reveal>
              Produtos personalizados
            </p>
            <h2 id="personalizados-title" className="display mt-4 text-[2.4rem] leading-[1.02] font-semibold text-navy-900 sm:text-5xl" data-reveal>
              Leve a Congõi <em className="text-amber-600">com você.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft" data-reveal>
              Itens personalizados Congõi e caixas de cerveja para levar para casa.
            </p>
          </div>
        </div>

        <ul className="border-t border-navy-900/15 lg:col-span-8">
          {customProducts.map((p, i) => (
            <li key={p.id} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <a
                href={whatsappLink(`Olá, Congõi! Tenho interesse no produto: ${p.name}${p.detail ? ` (${p.detail})` : ''} – ${formatBRL(p.price)}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-navy-900/15 py-6 transition-colors duration-300 hover:bg-cream-50/70 sm:grid-cols-[3rem_1fr_auto_auto] sm:gap-6 sm:px-4"
                aria-label={`${p.name}${p.detail ? `, ${p.detail}` : ''}, ${formatBRL(p.price)}. Pedir pelo WhatsApp`}
              >
                <span className="hidden text-sm font-bold text-amber-600 sm:block">0{i + 1}</span>
                <span>
                  <span className="display block text-2xl font-semibold text-navy-900 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                    {p.name}
                  </span>
                  {p.detail && <span className="mt-0.5 block text-sm text-ink-soft">{p.detail}</span>}
                </span>
                <span className="price text-2xl font-semibold text-navy-900 sm:text-3xl">{formatBRL(p.price)}</span>
                <span className="hidden h-11 w-11 place-items-center rounded-full border border-navy-900/20 text-navy-900 transition-all duration-300 group-hover:rotate-45 group-hover:border-navy-800 group-hover:bg-navy-800 group-hover:text-gold-400 sm:grid">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
