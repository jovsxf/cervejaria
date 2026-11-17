import { useState, type ReactNode } from 'react'
import { Camera } from 'lucide-react'

type Tone = 'navy' | 'cream' | 'amber' | 'dark'

const tones: Record<Tone, string> = {
  navy: 'bg-navy-800 text-cream-100',
  cream: 'bg-cream-200 text-navy-800',
  amber: 'bg-amber-600 text-cream-50',
  dark: 'bg-navy-950 text-cream-200',
}

type Props = {
  src?: string
  alt: string
  className?: string
  imgClassName?: string
  /** Conteúdo exibido enquanto a foto real não existir (ex.: ilustração). */
  fallback?: ReactNode
  /** Legenda do espaço reservado para foto. */
  label?: string
  tone?: Tone
  priority?: boolean
}

/**
 * Imagem com carregamento otimizado (lazy + async decoding) e espaço
 * reservado elegante caso o arquivo ainda não tenha sido adicionado.
 */
export default function Photo({ src, alt, className = '', imgClassName = '', fallback, label, tone = 'cream', priority }: Props) {
  const [failed, setFailed] = useState(!src)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${tones[tone]} ${className}`}>
      {failed ? (
        fallback ?? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{ backgroundImage: 'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)' }}
            />
            <Camera size={22} strokeWidth={1.5} className="relative opacity-70" aria-hidden="true" />
            {label && <span className="relative text-[0.68rem] font-bold uppercase tracking-[0.2em] opacity-80">{label}</span>}
            <span className="sr-only">{alt}</span>
          </div>
        )
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          // @ts-expect-error atributo válido em navegadores modernos
          fetchpriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  )
}
