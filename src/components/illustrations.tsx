/* Ilustrações vetoriais próprias da marca, usadas enquanto as fotos reais
   não forem adicionadas e como elementos gráficos de apoio. */

export function BeerGlass({ color, className = '', foam = true }: { color: string; className?: string; foam?: boolean }) {
  const id = `g-${color.replace('#', '')}`
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <path d="M22 26 L98 26 L88 186 Q87 192 80 192 H40 Q33 192 32 186 Z" />
        </clipPath>
        <linearGradient id={`${id}-shine`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset=".3" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect x="0" y="0" width="120" height="200" fill="#ffffff" opacity=".35" />
        <rect x="0" y="44" width="120" height="160" fill={color} />
        {[38, 56, 72, 84].map((x, i) => (
          <circle key={x} className="bubble" style={{ animationDelay: `${i * 0.7}s` }} cx={x} cy="186" r={1.6 + (i % 2)} fill="#fff" opacity=".7" />
        ))}
        <rect x="0" y="0" width="120" height="200" fill={`url(#${id}-shine)`} />
      </g>
      {foam && (
        <path
          d="M18 46 Q14 30 28 28 Q30 14 46 18 Q56 6 70 16 Q84 10 90 24 Q106 24 102 40 Q104 50 92 50 H28 Q16 52 18 46 Z"
          fill="#fbf7ef"
        />
      )}
      <path d="M22 26 L98 26 L88 186 Q87 192 80 192 H40 Q33 192 32 186 Z" fill="none" stroke="currentColor" strokeOpacity=".22" strokeWidth="2" />
    </svg>
  )
}

export function GrowlerIllustration({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 160 240" className={className} aria-hidden="true">
      <ellipse cx="80" cy="232" rx="56" ry="6" fill="#000" opacity=".15" />
      <path d="M118 96 Q150 98 148 136 Q146 172 116 172" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" opacity=".85" />
      <rect x="60" y="14" width="40" height="16" rx="4" fill="#0c2647" />
      <path d="M64 30 H96 V58 Q124 72 124 108 V214 Q124 228 110 228 H50 Q36 228 36 214 V108 Q36 72 64 58 Z" fill={color} />
      <path d="M48 104 Q48 82 64 72" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="6" strokeLinecap="round" />
      <rect x="36" y="126" width="88" height="62" fill="#f4ecdd" />
      <text x="80" y="154" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="17" fill="#0c2647">Congõi</text>
      <text x="80" y="174" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="9" letterSpacing="2" fill="#c97a1c">1 LITRO</text>
    </svg>
  )
}
