import { ArrowDown, MapPin } from 'lucide-react'
import { brand, chopps, eventTypes } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import Photo from './Photo'
import { WhatsappIcon } from './icons'

export default function Hero() {
  const ticker = [...chopps.map((c) => `Chopp ${c.name}`), 'Beer Truck Kombi', ...eventTypes]

  return (
    <section id="topo" aria-labelledby="hero-title" className="grain relative overflow-hidden bg-cream-100 pt-28 sm:pt-32 lg:pt-36">
      {/* formas decorativas nas cores da Kombi e do âmbar */}
      <div aria-hidden="true" className="absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-kombi-200/80 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/2 -left-48 h-96 w-96 rounded-full bg-gold-400/15 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="eyebrow text-amber-600" data-reveal>
            Cervejaria artesanal · desde {brand.foundedYear}
          </p>
          <h1 id="hero-title" className="display mt-6 text-[3.1rem] leading-[0.95] font-semibold text-navy-900 sm:text-7xl lg:text-[5.6rem]">
            <span className="block" data-reveal style={{ ['--d' as string]: '80ms' }}>
              Mais do que cerveja.
            </span>
            <span className="block" data-reveal style={{ ['--d' as string]: '200ms' }}>
              Criamos{' '}
              <em className="relative whitespace-nowrap text-amber-600">
                experiências.
                <svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-gold-400">
                  <path d="M3 14 Q80 2 150 10 T297 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </em>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl" data-reveal style={{ ['--d' as string]: '320ms' }}>
            Cervejas artesanais, sabores autorais e experiências que transformam encontros em momentos inesquecíveis.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal style={{ ['--d' as string]: '420ms' }}>
            <a href="#chopps" className="btn btn-navy">
              Conheça nossos produtos <ArrowDown size={18} />
            </a>
            <a
              href={whatsappLink('Olá, Congõi! Vim pelo site e gostaria de fazer um orçamento para o meu evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon size={19} /> Faça seu orçamento
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-navy-800/80" data-reveal style={{ ['--d' as string]: '500ms' }}>
            <MapPin size={16} className="text-amber-600" /> {brand.location}
          </p>
        </div>

        <div className="relative lg:col-span-5" data-reveal="right" style={{ ['--d' as string]: '250ms' }}>
          <div className="relative mx-auto max-w-[26rem] lg:mr-0">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-kombi-400/50 sm:translate-x-6 sm:translate-y-6" />
            <Photo
              src="/photos/kombi-parque.webp"
              alt="A Kombi azul da Congõi estacionada no gramado, com um barril decorado ao lado"
              priority
              className="aspect-[3/4] rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(8,26,51,0.5)]"
            />
            <p className="absolute -top-3 right-6 rotate-3 rounded-full bg-cream-50 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy-900 shadow-md">
              Beer Truck Congõi
            </p>
            {/* selo giratório */}
            <div className="absolute -bottom-8 -left-5 grid h-32 w-32 place-items-center rounded-full bg-navy-800 text-cream-50 shadow-xl sm:-left-12 sm:h-36 sm:w-36">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
                <defs>
                  <path id="circle-txt" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="8.4" fontWeight="700" letterSpacing="2.6" fill="currentColor">
                  <textPath href="#circle-txt">CERVEJARIA CONGÕI • SUL DE MINAS • </textPath>
                </text>
              </svg>
              <span className="text-center leading-none">
                <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-gold-400">desde</span>
                <span className="display block text-3xl font-semibold">2015</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* faixa corrida */}
      <div className="relative border-y border-navy-900/10 bg-navy-800 py-4 text-cream-100" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="display flex items-center gap-10 text-xl font-medium italic sm:text-2xl">
              {t}
              <span className="h-2 w-2 rounded-full bg-gold-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
