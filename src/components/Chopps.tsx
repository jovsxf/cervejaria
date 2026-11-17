import { useState } from 'react'
import { chopps, formatBRL, type Chopp } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import SectionHeading from './SectionHeading'
import Photo from './Photo'
import { BeerGlass } from './illustrations'
import { WhatsappIcon } from './icons'

function ChoppCard({ chopp, featured, index }: { chopp: Chopp; featured: boolean; index: number }) {
  const [size, setSize] = useState(chopp.sizes[0])
  const message = `Olá, Congõi! Tenho interesse no chopp ${chopp.name} – ${size.liters} litros (${formatBRL(size.price)}). Pode me passar mais informações?`

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] bg-cream-50 ring-1 ring-navy-900/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(8,26,51,0.35)] ${
        featured ? 'lg:col-span-3' : 'lg:col-span-2'
      }`}
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      aria-labelledby={`chopp-${chopp.id}`}
    >
      {/* visual */}
      <div className="relative overflow-hidden" style={{ backgroundColor: `${chopp.accent}22` }}>
        <Photo
          src={chopp.photo}
          alt={`Copo de chopp ${chopp.name} da Cervejaria Congõi`}
          className={`${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'} !bg-transparent`}
          imgClassName="group-hover:scale-105"
          fallback={
            <div className="absolute inset-0 flex items-end justify-center">
              <span
                aria-hidden="true"
                className="display absolute top-4 left-6 text-[5.5rem] leading-none font-bold opacity-[0.12] transition-transform duration-700 group-hover:translate-x-2 sm:text-[7rem]"
                style={{ color: chopp.accent === '#f2b631' ? '#a35d12' : chopp.accent }}
              >
                {chopp.name}
              </span>
              <BeerGlass color={chopp.color} className="relative h-[82%] text-navy-900 transition-transform duration-700 group-hover:-translate-y-2 group-hover:-rotate-3" />
            </div>
          }
        />
        <span className="absolute top-4 right-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-navy-900 backdrop-blur">
          Chopp
        </span>
      </div>

      {/* conteúdo */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 id={`chopp-${chopp.id}`} className="display text-3xl font-semibold text-navy-900 sm:text-4xl">
          {chopp.name}
        </h3>
        <p className="mt-2 text-ink-soft">{chopp.description}</p>

        <fieldset className="mt-6">
          <legend className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-soft">
            {chopp.sizes.length > 1 ? 'Escolha o volume' : 'Volume disponível'}
          </legend>
          <ul className="divide-y divide-dashed divide-navy-900/15 border-y border-dashed border-navy-900/15">
            {chopp.sizes.map((s) => {
              const selected = s.liters === size.liters
              return (
                <li key={s.liters}>
                  <label className="flex cursor-pointer items-center gap-3 py-3">
                    <input
                      type="radio"
                      name={`size-${chopp.id}`}
                      className="peer sr-only"
                      checked={selected}
                      onChange={() => setSize(s)}
                    />
                    <span
                      aria-hidden="true"
                      className={`grid h-5 w-5 place-items-center rounded-full border-2 transition peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500 ${
                        selected ? 'border-navy-800' : 'border-navy-900/25'
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full bg-navy-800 transition-transform ${selected ? 'scale-100' : 'scale-0'}`} />
                    </span>
                    <span className="font-semibold text-navy-900">{s.liters} litros</span>
                    <span className="flex-1 border-b border-dotted border-navy-900/20" aria-hidden="true" />
                    <span className="price text-2xl font-semibold text-navy-900">{formatBRL(s.price)}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </fieldset>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-navy mt-6 w-full sm:mt-auto sm:translate-y-0"
          aria-label={`Solicitar chopp ${chopp.name} de ${size.liters} litros pelo WhatsApp`}
        >
          <WhatsappIcon size={18} /> Solicitar pelo WhatsApp
        </a>
      </div>
    </article>
  )
}

export default function Chopps() {
  return (
    <section id="chopps" aria-labelledby="chopps-title" className="grain relative bg-cream-100 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="chopps-title"
            eyebrow="Nossos chopps"
            title={
              <>
                Receitas próprias, <em className="text-amber-600">servidas geladas.</em>
              </>
            }
          />
          <p className="max-w-sm text-ink-soft lg:text-right" data-reveal>
            Escolha o volume e fale direto com a gente pelo WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {chopps.map((c, i) => (
            <ChoppCard key={c.id} chopp={c} featured={i < 2} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
