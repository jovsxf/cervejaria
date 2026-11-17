import { CalendarHeart, Gauge, PackageCheck, Truck, Wrench } from 'lucide-react'
import { serviceSteps, shippingNote } from '../data/content'
import SectionHeading from './SectionHeading'

const stepIcons = [CalendarHeart, Gauge, Truck, Wrench, PackageCheck]

export default function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="como-funciona-title"
          eyebrow="Como funciona nosso atendimento"
          title={
            <>
              Você aproveita. <em className="text-amber-600">A gente cuida do chopp.</em>
            </>
          }
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {/* linha do percurso */}
          <span aria-hidden="true" className="absolute top-8 right-[10%] left-[10%] hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-navy-800)_0_10px,transparent_10px_18px)] opacity-30 md:block" />
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-8 w-0.5 bg-[repeating-linear-gradient(180deg,var(--color-navy-800)_0_10px,transparent_10px_18px)] opacity-30 md:hidden" />

          {serviceSteps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <li
                key={step}
                className="group relative flex items-center gap-6 md:flex-col md:items-start md:gap-5"
                data-reveal
                style={{ ['--d' as string]: `${i * 110}ms` }}
              >
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy-800 text-gold-400 ring-8 ring-cream-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Etapa {i + 1}</span>
                  <p className="display mt-1 text-2xl leading-tight font-semibold text-navy-900">{step}</p>
                </div>
              </li>
            )
          })}
        </ol>

        <p
          className="mt-16 inline-flex items-center gap-3 rounded-full border border-navy-900/15 bg-cream-100 px-5 py-3 text-sm font-semibold text-navy-900"
          data-reveal
        >
          <Truck size={18} className="text-amber-600" aria-hidden="true" />
          {shippingNote}
        </p>
      </div>
    </section>
  )
}
