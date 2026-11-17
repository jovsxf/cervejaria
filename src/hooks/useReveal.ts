import { useEffect } from 'react'

/** Observa todos os elementos com [data-reveal] e adiciona .is-visible ao entrarem na tela. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // ?noanim desativa as animações de entrada (útil para testes e capturas de tela)
    const noAnim = new URLSearchParams(window.location.search).has('noanim')
    if (noAnim) document.documentElement.classList.add('no-anim')
    if (reduce || noAnim || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
