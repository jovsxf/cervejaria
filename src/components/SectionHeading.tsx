import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  invert?: boolean
  id?: string
}

export default function SectionHeading({ eyebrow, title, text, align = 'left', invert, id }: Props) {
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`} data-reveal>
      <p className={`eyebrow ${invert ? 'text-gold-400' : 'text-amber-600'} ${center ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`display mt-4 text-[2.4rem] leading-[1.02] font-semibold sm:text-5xl lg:text-[3.6rem] ${invert ? 'text-cream-50' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${invert ? 'text-cream-200/85' : 'text-ink-soft'}`}>{text}</p>}
    </div>
  )
}
