import { useMemo, useState, type FormEvent } from 'react'
import { Check, MapPin, Send } from 'lucide-react'
import { brand, eventTypes, quoteInterests } from '../data/content'
import { buildQuoteMessage, whatsappLink, type QuoteData } from '../lib/whatsapp'
import { InstagramIcon, WhatsappIcon } from './icons'

const empty: QuoteData = { name: '', eventType: '', date: '', place: '', guests: '', interests: [], message: '' }

type Errors = Partial<Record<keyof QuoteData, string>>

function validate(d: QuoteData): Errors {
  const e: Errors = {}
  if (d.name.trim().length < 2) e.name = 'Informe seu nome.'
  if (!d.eventType) e.eventType = 'Selecione o tipo de evento.'
  if (!d.date) e.date = 'Informe a data do evento.'
  if (d.guests && Number(d.guests) < 1) e.guests = 'Informe um número válido.'
  return e
}

const inputBase =
  'mt-2 block w-full rounded-2xl border bg-cream-50 px-4 py-3.5 text-base text-navy-950 placeholder:text-ink-soft/60 transition focus:border-navy-700 focus:ring-4 focus:ring-gold-400/40 focus:outline-none'

export default function Contact() {
  const [data, setData] = useState<QuoteData>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sentUrl, setSentUrl] = useState<string | null>(null)
  const today = useMemo(() => {
    const d = new Date()
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 10)
  }, [])

  const set = <K extends keyof QuoteData>(key: K, value: QuoteData[K]) => {
    setData((d) => ({ ...d, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const toggleInterest = (item: string) =>
    set('interests', data.interests.includes(item) ? data.interests.filter((i) => i !== item) : [...data.interests, item])

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const errs = validate(data)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) {
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const url = whatsappLink(buildQuoteMessage(data))
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else window.location.href = url
    setSentUrl(url)
  }

  const fieldClass = (k: keyof QuoteData) => `${inputBase} ${errors[k] ? 'border-red-500' : 'border-navy-900/15'}`
  const label = 'text-sm font-bold text-navy-900'

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-navy-800 py-24 text-cream-50 sm:py-32">
      <div aria-hidden="true" className="absolute -top-48 -right-48 h-[36rem] w-[36rem] rounded-full bg-navy-700/60 blur-2xl" />
      <div aria-hidden="true" className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* texto e canais */}
        <div className="lg:col-span-5">
          <p className="eyebrow text-gold-400" data-reveal>
            Contato e reservas
          </p>
          <h2 id="contato-title" className="display mt-4 text-[2.6rem] leading-[1] font-semibold sm:text-6xl" data-reveal>
            Seu evento merece ser <em className="text-gold-400">inesquecível.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-200/85" data-reveal>
            Transformamos encontros em experiências. Entre em contato e leve a Congõi para sua comemoração.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start" data-reveal>
            <a
              href={whatsappLink('Olá, Congõi! Gostaria de solicitar um orçamento para o meu evento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon size={19} /> Solicitar orçamento pelo WhatsApp
            </a>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-cream-50 hover:bg-cream-50 hover:text-navy-900">
              <InstagramIcon size={18} /> Conhecer nosso Instagram
            </a>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-cream-50/10" data-reveal>
            {[
              { icon: <WhatsappIcon size={20} />, term: 'WhatsApp', value: brand.whatsappDisplay, href: whatsappLink() },
              { icon: <InstagramIcon size={20} />, term: 'Instagram', value: brand.instagramHandle, href: brand.instagramUrl },
              { icon: <MapPin size={20} />, term: 'Localização', value: brand.location },
            ].map((item) => (
              <div key={item.term} className="flex items-center gap-4 bg-navy-800 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-50/10 text-gold-400">{item.icon}</span>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cream-200/60">{item.term}</dt>
                  <dd className="mt-0.5 text-lg font-semibold">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-gold-400 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* formulário */}
        <div className="lg:col-span-7" data-reveal="right">
          <form
            id="orcamento"
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] bg-cream-100 p-6 text-navy-900 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-10"
            aria-labelledby="form-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="form-title" className="display text-3xl font-semibold">
                  Faça seu orçamento
                </h3>
                <p className="mt-1 text-sm text-ink-soft">Preencha e enviaremos sua mensagem organizada pelo WhatsApp.</p>
              </div>
              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-800 text-gold-400 sm:grid">
                <WhatsappIcon size={22} />
              </span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="f-name" className={label}>
                  Nome <span className="text-amber-600">*</span>
                </label>
                <input
                  id="f-name"
                  type="text"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => set('name', e.target.value)}
                  className={fieldClass('name')}
                  placeholder="Seu nome"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'e-name' : undefined}
                />
                {errors.name && <p id="e-name" className="mt-1.5 text-sm font-semibold text-red-700">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="f-eventType" className={label}>
                  Tipo de evento <span className="text-amber-600">*</span>
                </label>
                <select
                  id="f-eventType"
                  value={data.eventType}
                  onChange={(e) => set('eventType', e.target.value)}
                  className={`${fieldClass('eventType')} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23123a6b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-11`}
                  aria-invalid={!!errors.eventType}
                  aria-describedby={errors.eventType ? 'e-eventType' : undefined}
                >
                  <option value="">Selecione</option>
                  {eventTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                  <option>Outro</option>
                </select>
                {errors.eventType && <p id="e-eventType" className="mt-1.5 text-sm font-semibold text-red-700">{errors.eventType}</p>}
              </div>

              <div>
                <label htmlFor="f-date" className={label}>
                  Data do evento <span className="text-amber-600">*</span>
                </label>
                <input
                  id="f-date"
                  type="date"
                  min={today}
                  value={data.date}
                  onChange={(e) => set('date', e.target.value)}
                  className={fieldClass('date')}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? 'e-date' : undefined}
                />
                {errors.date && <p id="e-date" className="mt-1.5 text-sm font-semibold text-red-700">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="f-place" className={label}>
                  Local
                </label>
                <input
                  id="f-place"
                  type="text"
                  value={data.place}
                  onChange={(e) => set('place', e.target.value)}
                  className={fieldClass('place')}
                  placeholder="Cidade / espaço do evento"
                />
              </div>

              <div>
                <label htmlFor="f-guests" className={label}>
                  Convidados (estimativa)
                </label>
                <input
                  id="f-guests"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  value={data.guests}
                  onChange={(e) => set('guests', e.target.value)}
                  className={fieldClass('guests')}
                  placeholder="Ex.: 120"
                  aria-invalid={!!errors.guests}
                  aria-describedby={errors.guests ? 'e-guests' : undefined}
                />
                {errors.guests && <p id="e-guests" className="mt-1.5 text-sm font-semibold text-red-700">{errors.guests}</p>}
              </div>

              <fieldset className="sm:col-span-2">
                <legend className={label}>Produtos ou estruturas de interesse</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {quoteInterests.map((item) => {
                    const on = data.interests.includes(item)
                    return (
                      <label
                        key={item}
                        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition-all duration-200 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold-400/50 ${
                          on ? 'border-navy-800 bg-navy-800 text-cream-50' : 'border-navy-900/20 bg-cream-50 text-navy-900 hover:border-navy-800'
                        }`}
                      >
                        <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleInterest(item)} />
                        <Check size={14} className={`transition-all ${on ? 'w-3.5 opacity-100' : 'w-0 opacity-0'}`} aria-hidden="true" />
                        {item}
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <label htmlFor="f-message" className={label}>
                  Mensagem adicional
                </label>
                <textarea
                  id="f-message"
                  rows={4}
                  value={data.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${fieldClass('message')} resize-y`}
                  placeholder="Conte mais sobre o seu evento"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-8 w-full !min-h-14 !text-base">
              <Send size={18} aria-hidden="true" /> Enviar pedido pelo WhatsApp
            </button>

            <div aria-live="polite">
              {sentUrl && (
                <p className="mt-4 rounded-2xl bg-navy-800/5 p-4 text-sm text-navy-900">
                  Abrimos o WhatsApp com a sua mensagem pronta. Se a conversa não abriu,{' '}
                  <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
                    clique aqui
                  </a>
                  .
                </p>
              )}
            </div>
            <p className="mt-4 text-center text-xs text-ink-soft">* Campos obrigatórios. Nenhum dado é armazenado pelo site.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
