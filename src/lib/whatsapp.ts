import { brand } from '../data/content'

export const DEFAULT_WA_MESSAGE = 'Olá, Congõi! Vim pelo site e gostaria de mais informações.'

export function whatsappLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export type QuoteData = {
  name: string
  eventType: string
  date: string
  place: string
  guests: string
  interests: string[]
  message: string
}

function formatDate(iso: string) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function buildQuoteMessage(q: QuoteData) {
  const lines = [
    'Olá, Congõi! Gostaria de solicitar um orçamento. 🍺',
    '',
    `*Nome:* ${q.name.trim()}`,
    `*Tipo de evento:* ${q.eventType}`,
    `*Data do evento:* ${formatDate(q.date)}`,
    `*Local:* ${q.place.trim() || 'A definir'}`,
    `*Convidados (estimativa):* ${q.guests.trim() || 'A definir'}`,
    `*Interesse:* ${q.interests.length ? q.interests.join(', ') : 'Gostaria de uma sugestão'}`,
  ]
  if (q.message.trim()) lines.push('', `*Mensagem:* ${q.message.trim()}`)
  return lines.join('\n')
}
