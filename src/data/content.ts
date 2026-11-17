/**
 * CONTEÚDO OFICIAL DA CERVEJARIA CONGÕI
 * ------------------------------------------------------------
 * Todos os textos, produtos e preços do site ficam centralizados aqui.
 * Para atualizar um preço ou descrição, altere apenas este arquivo.
 *
 * Fotos: os originais ficam em /imagens e as versões tratadas para a web
 * em /public/photos (gere de novo com `python scripts/tratar-fotos.py`).
 * Para adicionar a foto de um produto, preencha o campo `photo`.
 */

export const brand = {
  name: 'Cervejaria Congõi',
  shortName: 'Congõi',
  slogan: 'Mais do que cerveja. Criamos experiências.',
  location: 'Congonhal – Sul de Minas',
  city: 'Congonhal',
  region: 'Sul de Minas Gerais',
  instagramHandle: '@cervejariacongoi',
  instagramUrl: 'https://www.instagram.com/cervejariacongoi/',
  whatsappDisplay: '(35) 99131-8090',
  /** Número no formato internacional, sem símbolos, usado nos links wa.me */
  whatsappNumber: '5535991318090',
  foundedAt: '16 de agosto de 2015',
  foundedYear: 2015,
  founder: 'Wagner',
}

export const formatBRL = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })

/* ---------------------------------- CHOPPS --------------------------------- */

export type ChoppSize = { liters: number; price: number }

export type Chopp = {
  id: string
  name: string
  description: string
  sizes: ChoppSize[]
  /** Cor do líquido usada na ilustração do copo */
  color: string
  /** Cor de destaque do card */
  accent: string
  photo?: string
}

export const chopps: Chopp[] = [
  {
    id: 'pilsen',
    name: 'Pilsen',
    description: 'Leve, refrescante e perfeita para qualquer ocasião.',
    sizes: [
      { liters: 30, price: 370 },
      { liters: 50, price: 570 },
    ],
    color: '#f2b631',
    accent: '#f2b631',
  },
  {
    id: 'vinho',
    name: 'Vinho',
    description: 'O queridinho das festas.',
    sizes: [
      { liters: 30, price: 420 },
      { liters: 50, price: 670 },
    ],
    color: '#7a1f3d',
    accent: '#b23a5e',
  },
  {
    id: 'neipa',
    name: 'NEIPA',
    description: 'Mais intensa, aromática e marcante.',
    sizes: [{ liters: 30, price: 550 }],
    color: '#e8962e',
    accent: '#e8962e',
  },
  {
    id: 'black',
    name: 'Black',
    description: 'Encorpada e cheia de personalidade.',
    sizes: [{ liters: 30, price: 380 }],
    color: '#2a1810',
    accent: '#8a5a3c',
  },
  {
    id: 'ice-limao',
    name: 'Ice Limão',
    description: 'Refrescante e surpreendente.',
    sizes: [{ liters: 30, price: 400 }],
    color: '#d9e27a',
    accent: '#a9c23f',
  },
]

/* ------------------------------ EXPERIÊNCIAS ------------------------------ */

export type EventService = {
  id: string
  name: string
  kicker: string
  price?: number
  priceLabel?: string
  minimum?: string
  highlights: string[]
  photo?: string
  photoAlt?: string
}

export const eventServices: EventService[] = [
  {
    id: 'kombi',
    name: 'Beer Truck Congõi',
    kicker: 'A Kombi azul',
    price: 400,
    priceLabel: 'Locação',
    minimum: 'Mínimo de 200 litros de chopp',
    highlights: ['A Kombi azul é uma atração visual para o evento.'],
    photo: '/photos/kombi-rua.webp',
    photoAlt: 'Kombi azul da Congõi com a logo da cervejaria e torneiras de chopp na lateral',
  },
  {
    id: 'painel',
    name: 'Painel',
    kicker: 'Identidade Congõi',
    price: 200,
    priceLabel: 'Locação',
    minimum: 'Mínimo de 150 litros de chopp',
    highlights: ['Painel personalizado com identidade visual Congõi.'],

  },
  {
    id: 'chopeiras',
    name: 'Chopeiras',
    kicker: 'Estrutura profissional',
    highlights: [
      'Equipamentos profissionais.',
      'Chopp gelado e pronto para servir.',
      'Estrutura adequada para diferentes eventos.',
    ],
    photo: '/photos/torneiras-kombi.webp',
    photoAlt: 'Torneiras de chopp instaladas na lateral da Kombi da Congõi',
  },
]

/* ---------------------------------- KITS ---------------------------------- */

export type SimpleProduct = {
  id: string
  name: string
  detail?: string
  price: number
  photo?: string
}

export const giftKits: SimpleProduct[] = [
  { id: 'kit-pilsen', name: 'Kit Pilsen', detail: '2 cervejas + copo', price: 45 },
  { id: 'kit-pilsen-neipa', name: 'Kit Pilsen + NEIPA', detail: '2 cervejas + copo', price: 48 },
  { id: 'kit-neipa', name: 'Kit NEIPA', detail: '2 cervejas + copo', price: 50 },
]

/* ------------------------- PRODUTOS PERSONALIZADOS ------------------------ */

export const customProducts: SimpleProduct[] = [
  { id: 'bone', name: 'Boné personalizado', price: 37 },
  { id: 'balde', name: 'Balde personalizado', price: 37 },
  { id: 'caixa-pilsen', name: 'Caixa Pilsen', detail: '473 ml · 6 unidades', price: 65 },
  { id: 'caixa-neipa', name: 'Caixa NEIPA', detail: '473 ml · 6 unidades', price: 80 },
]

/* --------------------------------- GROWLERS -------------------------------- */

export const growlers: (SimpleProduct & { color: string })[] = [
  { id: 'growler-pilsen', name: 'Growler Pilsen', detail: '1 litro', price: 14, color: '#f2b631' },
  { id: 'growler-vinho', name: 'Growler Vinho', detail: '1 litro', price: 16, color: '#7a1f3d' },
]

/* ------------------------------ COMO FUNCIONA ----------------------------- */

export const serviceSteps = [
  'Você escolhe o evento.',
  'Definimos a quantidade ideal.',
  'Levamos tudo.',
  'Instalamos no local.',
  'Retiramos após o evento.',
]

export const shippingNote = 'Frete fora de Congonhal: a combinar.'

/* -------------------------------- EVENTOS -------------------------------- */

export const eventTypes = [
  'Casamentos',
  'Aniversários',
  'Quermesses',
  'Rodeios',
  'Eventos corporativos',
  'Igrejas e comunidades',
  'Festivais',
  'Eventos privados',
]

/** Fotos reais da galeria de eventos (tratadas por scripts/tratar-fotos.py) */
export const eventPhotos = [
  { src: '/photos/torneiras-evento.webp', alt: 'Kombi da Congõi com as torneiras de chopp prontas para servir em um evento' },
  { src: '/photos/kit-festa-igreja.webp', alt: 'Kit Congõi em uma festa ao ar livre, com a igreja iluminada ao fundo' },
]

/** Fotos da marca exibidas na seção do Instagram (todas levam ao perfil oficial) */
export const instagramPhotos = [
  { src: '/photos/kits-detalhe.webp', alt: 'Kits Congõi com cervejas e copo em uma festa' },
  { src: '/photos/kit-embalagem-junina.webp', alt: 'Embalagens dos kits Congõi com estampa festiva' },
]

/* ------------------------- OPÇÕES DO FORMULÁRIO ------------------------- */

export const quoteInterests = [
  ...chopps.map((c) => `Chopp ${c.name}`),
  'Beer Truck (Kombi)',
  'Painel',
  'Chopeiras',
  'Growlers',
  'Kits para presente',
  'Produtos personalizados',
]
