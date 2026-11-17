/** Logo oficial da Cervejaria Congõi (extraída do arquivo original, sem alterações). */
export default function Logo({ className = '', size = 'sm' }: { className?: string; size?: 'sm' | 'lg' }) {
  const src = size === 'lg' ? '/brand/logo-congoi-800.webp' : '/brand/logo-congoi-480.webp'
  return <img src={src} alt="Congõi Cerveja Artesanal – Congonhal, Sul de Minas" width={1600} height={803} decoding="async" className={`h-auto ${className}`} />
}
