import { Award, Beer, MapPin } from 'lucide-react'
import { brand } from '../data/content'
import Photo from './Photo'

const milestones = [
  {
    icon: Beer,
    title: 'Primeira brassagem',
    text: `A primeira cerveja artesanal da Congõi foi produzida em ${brand.foundedAt}.`,
  },
  {
    icon: Award,
    title: 'Mestre Cervejeiro',
    text: `${brand.founder}, fundador da cervejaria, é formado como Mestre Cervejeiro pelo Instituto Brasileiro da Cerveja (ICB).`,
  },
  {
    icon: MapPin,
    title: 'Raízes no Sul de Minas',
    text: 'A marca cresceu e se tornou conhecida em Congonhal e região.',
  },
]

export default function History() {
  return (
    <section id="historia" aria-labelledby="historia-title" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* coluna de imagens */}
        <div className="relative self-start lg:col-span-6">
          <figure data-reveal="left">
            <Photo
              src="/photos/fundadores-fabrica.webp"
              alt="Os fundadores da Congõi, de jaleco, entre os tanques de produção da cervejaria"
              className="aspect-[3/2] rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(8,26,51,0.45)]"
            />
            <figcaption className="mt-3 max-w-[50%] text-xs sm:max-w-[55%] font-semibold uppercase tracking-[0.18em] text-ink-soft">Na produção da Congõi</figcaption>
          </figure>
          <figure className="relative -mt-16 ml-auto w-[48%] sm:-mt-24 sm:w-[42%]" data-reveal style={{ ['--d' as string]: '150ms' }}>
            <Photo
              src="/photos/fundadores-kombi.webp"
              alt="Os fundadores da Congõi sorrindo, com camisetas da marca, em frente à Kombi azul"
              className="aspect-[4/5] rounded-[1.75rem] ring-8 ring-cream-50"
            />
          </figure>
          <div
            className="absolute bottom-6 left-0 -rotate-3 rounded-2xl bg-gold-400 px-5 py-4 text-navy-950 shadow-lg sm:bottom-12 sm:left-6"
            data-reveal="fade"
          >
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em]">Primeira brassagem</p>
            <p className="display text-3xl font-bold leading-none">16.08.2015</p>
          </div>
        </div>

        {/* texto editorial */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pl-6">
          <p className="eyebrow text-amber-600" data-reveal>
            Nossa história
          </p>
          <h2 id="historia-title" className="display mt-4 text-[2.4rem] leading-[1.02] font-semibold text-navy-900 sm:text-5xl lg:text-[3.6rem]" data-reveal>
            Nascemos da paixão pela <em className="text-amber-600">cerveja artesanal.</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft" data-reveal>
            <p>
              <span className="display float-left mt-1 mr-3 text-7xl leading-[0.8] font-semibold text-navy-800">A</span>
              Congõi nasceu da paixão pela cerveja artesanal e da vontade de produzir receitas próprias, diferentes das cervejas comerciais
              tradicionais.
            </p>
            <p>
              Desde a primeira brassagem, cada receita carrega a mesma ideia: fazer cerveja com autenticidade, qualidade e criatividade — e
              compartilhar isso de perto com quem brinda com a gente.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-navy-900/10 bg-navy-900/10">
            {milestones.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="group flex gap-5 bg-cream-50 p-6 transition-colors duration-300 hover:bg-cream-100 sm:p-7"
                data-reveal
                style={{ ['--d' as string]: `${i * 90}ms` }}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-800 text-gold-400 transition-transform duration-500 group-hover:rotate-[-10deg]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
