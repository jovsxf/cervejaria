import { ArrowUpRight } from 'lucide-react'
import { brand, instagramPhotos } from '../data/content'
import Photo from './Photo'
import { InstagramIcon } from './icons'

export default function Instagram() {
  const [wide, square] = instagramPhotos

  return (
    <section id="instagram" aria-labelledby="instagram-title" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow text-amber-600" data-reveal>
            {brand.instagramHandle}
          </p>
          <h2 id="instagram-title" className="display mt-4 text-[2.4rem] leading-[1.02] font-semibold text-navy-900 sm:text-5xl lg:text-[3.6rem]" data-reveal>
            Acompanhe nossa <em className="text-amber-600">jornada.</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft" data-reveal>
            Veja bastidores, eventos, novidades e experiências reais acontecendo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[wide, square].map((p, i) => (
            <a
              key={p.src}
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-[1.75rem] ${i === 0 ? 'col-span-2' : 'col-span-1'}`}
              aria-label={`Ver mais fotos no Instagram ${brand.instagramHandle}`}
              data-reveal
              style={{ ['--d' as string]: `${i * 90}ms` }}
            >
              <Photo src={p.src} alt={p.alt} className="h-56 sm:h-80" imgClassName="duration-[1.2s] group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-navy-900/0 text-cream-50 opacity-0 transition-all duration-300 group-hover:bg-navy-900/45 group-hover:opacity-100">
                <InstagramIcon size={34} />
              </span>
            </a>
          ))}

          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-56 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy-800 p-6 text-cream-50 transition-colors duration-300 hover:bg-navy-900 sm:h-80 sm:p-8"
            data-reveal
            style={{ ['--d' as string]: '180ms' }}
          >
            <div className="flex items-start justify-between">
              <InstagramIcon size={30} className="text-gold-400" />
              <ArrowUpRight size={26} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream-200/70">Siga no Instagram</p>
              <p className="display mt-1 text-xl font-semibold break-all sm:text-2xl">{brand.instagramHandle}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
