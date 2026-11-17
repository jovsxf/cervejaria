import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const KEY = 'congoi-aviso-18'

/** Aviso discreto de consumo responsável (pode ser dispensado). */
export default function AgeNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = localStorage.getItem(KEY) === '1'
    } catch {
      /* armazenamento indisponível */
    }
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const close = () => {
    setVisible(false)
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* ignora */
    }
  }

  return (
    <div
      role="note"
      aria-label="Aviso de consumo responsável"
      className={`fixed bottom-4 left-4 z-40 flex max-w-[calc(100vw-7rem)] items-center gap-3 rounded-2xl bg-navy-950/95 py-2.5 pr-2 pl-4 text-xs text-cream-100 shadow-xl backdrop-blur transition-all duration-500 sm:bottom-6 sm:left-6 sm:max-w-sm ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-400 text-[0.7rem] font-extrabold text-navy-950">18+</span>
      <p className="leading-snug">Produtos alcoólicos destinados exclusivamente a maiores de 18 anos. Beba com moderação.</p>
      <button type="button" onClick={close} className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition hover:bg-cream-50/10" aria-label="Fechar aviso">
        <X size={16} />
      </button>
    </div>
  )
}
