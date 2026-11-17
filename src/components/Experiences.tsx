import { ArrowUpRight, Check } from 'lucide-react'
import { eventServices, formatBRL, type EventService } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import SectionHeading from './SectionHeading'
import Photo from './Photo'
import Logo from './Logo'
import { WhatsappIcon } from './icons'

function ServiceInfo({ s, big }: { s: EventService; big?: boolean }) {
  return (
    <div>
      <p className="eyebrow text-gold-400">{s.kicker}</p>
      <h3 className={`display mt-3 font-semibold text-cream-50 ${big ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-4xl'}`}>{s.name}</h3>

      {s.price !== undefined && (
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cream-200/70">{s.priceLabel}</dt>
            <dd className="price mt-1 text-4xl font-semibold text-gold-400 sm:text-5xl">{formatBRL(s.price)}</dd>
          </div>
          {s.minimum && (
            <div className="border-l border-cream-100/15 pl-6">
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cream-200/70">Condição</dt>
              <dd className="mt-2 max-w-[12rem] font-semibold leading-snug text-cream-50">{s.minimum}</dd>
            </div>
          )}
        </dl>
      )}

      <ul className="mt-6 space-y-3">
        {s.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-cream-100/90">
            <Check size={20} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
            <span className={big ? 'text-lg' : ''}>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experiences() {
  const [kombi, painel, chopeiras] = eventServices
  const cta = whatsappLink('Olá, Congõi! Quero levar a Congõi para o meu evento. Podemos conversar sobre Beer Truck, painel e chopeiras?')

  return (
    <section id="experiencias" aria-labelledby="experiencias-title" className="relative overflow-hidden bg-navy-900 py-24 text-cream-50 sm:py-32">
      <div aria-hidden="true" className="absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="container-x">
        <SectionHeading
          id="experiencias-title"
          invert
          eyebrow="Experiências para eventos"
          title={
            <>
              A Congõi vai <em className="text-gold-400">até a sua festa.</em>
            </>
          }
          text="Locação de estrutura para eventos: a Kombi azul, o painel personalizado e chopeiras profissionais para o seu chopp chegar gelado e pronto para servir."
        />

        {/* KOMBI – destaque principal */}
        <article className="mt-16 grid overflow-hidden rounded-[2.5rem] bg-navy-800 ring-1 ring-cream-50/10 lg:grid-cols-12" aria-label={kombi.name}>
          <div className="group relative overflow-hidden lg:col-span-7" data-reveal="fade">
            <Photo
              src={kombi.photo}
              alt={kombi.photoAlt ?? kombi.name}
              className="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[32rem]"
              imgClassName="duration-[1.2s] group-hover:scale-[1.04]"
            />
            <span className="absolute top-5 left-5 rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy-950">
              Beer Truck
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5" data-reveal="right">
            <ServiceInfo s={kombi} big />
          </div>
        </article>

        {/* PAINEL + CHOPEIRAS */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <article className="flex flex-col overflow-hidden rounded-[2.5rem] bg-navy-800 ring-1 ring-cream-50/10 lg:col-span-5" aria-label={painel.name} data-reveal>
            {/* placa com a logo oficial: referência à identidade visual aplicada no painel */}
            <div className="relative grid min-h-[15rem] place-items-center bg-kombi-100 p-10 sm:min-h-[17rem]">
              <div aria-hidden="true" className="absolute inset-4 rounded-[1.75rem] border-2 border-dashed border-navy-800/20" />
              <Logo size="lg" className="relative w-full max-w-[17rem]" />
            </div>
            <div className="p-8 sm:p-10">
              <ServiceInfo s={painel} />
            </div>
          </article>

          <article
            className="group grid overflow-hidden rounded-[2.5rem] bg-cream-100 text-navy-900 sm:grid-cols-2 lg:col-span-7"
            aria-label={chopeiras.name}
            data-reveal
            style={{ ['--d' as string]: '120ms' }}
          >
            <Photo
              src={chopeiras.photo}
              alt={chopeiras.photoAlt ?? chopeiras.name}
              className="aspect-[4/5] sm:aspect-auto sm:h-full sm:min-h-[26rem]"
              imgClassName="duration-[1.2s] group-hover:scale-105"
            />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="eyebrow text-amber-600">{chopeiras.kicker}</p>
              <h3 className="display mt-3 text-3xl font-semibold sm:text-4xl">{chopeiras.name}</h3>
              <ul className="mt-6 space-y-3">
                {chopeiras.highlights.map((h) => (
                  <li key={h} className="flex gap-3 border-b border-navy-900/10 pb-3 text-ink-soft last:border-0">
                    <Check size={20} className="mt-0.5 shrink-0 text-amber-600" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center" data-reveal>
          <a href={cta} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-14 !px-8 !text-base">
            <WhatsappIcon /> Quero levar a Congõi para meu evento
          </a>
          <a href="#contato" className="inline-flex items-center gap-1 text-sm font-semibold text-cream-200/80 underline-offset-4 hover:text-gold-400 hover:underline">
            ou preencha o formulário de orçamento <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
