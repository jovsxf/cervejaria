import { eventPhotos, eventTypes } from '../data/content'
import SectionHeading from './SectionHeading'
import Photo from './Photo'

export default function Events() {
  const [first, second] = eventPhotos

  return (
    <section id="eventos" aria-labelledby="eventos-title" className="grain relative bg-cream-100 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="eventos-title"
          eyebrow="Eventos e experiências"
          title={
            <>
              Onde tem encontro, <em className="text-amber-600">tem Congõi.</em>
            </>
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          <figure className="group lg:col-span-4" data-reveal>
            <Photo
              src={first.src}
              alt={first.alt}
              className="aspect-[3/4] rounded-[2rem] lg:aspect-auto lg:h-[36rem]"
              imgClassName="duration-[1.2s] group-hover:scale-105"
            />
          </figure>

          {/* tipos de evento atendidos */}
          <div
            className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-navy-800 p-8 text-cream-50 sm:col-span-2 sm:p-10 lg:order-none lg:col-span-4 lg:h-[36rem]"
            data-reveal
            style={{ ['--d' as string]: '100ms' }}
          >
            <div aria-hidden="true" className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-kombi-400/20" />
            <p className="eyebrow relative text-gold-400">Atendemos</p>
            <ul className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-1 lg:grid-cols-1" aria-label="Tipos de eventos atendidos">
              {eventTypes.map((t) => (
                <li key={t} className="display border-b border-cream-50/10 py-2 text-xl leading-tight font-medium transition-colors duration-300 hover:text-gold-400 sm:text-2xl lg:text-[1.65rem]">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <figure className="group sm:row-start-1 sm:col-start-2 lg:col-span-4 lg:col-start-auto lg:row-start-auto" data-reveal style={{ ['--d' as string]: '200ms' }}>
            <Photo
              src={second.src}
              alt={second.alt}
              className="aspect-[3/4] rounded-[2rem] lg:aspect-auto lg:h-[36rem]"
              imgClassName="duration-[1.2s] group-hover:scale-105"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
