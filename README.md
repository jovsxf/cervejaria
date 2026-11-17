# Cervejaria Congõi — site

React + TypeScript + Vite + Tailwind CSS v4 + Lucide.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em /dist
npm run preview  # testa a versão de produção
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (Netlify, Vercel, Hostinger, etc.).

## Atualizar produtos, preços e textos

Tudo fica em **`src/data/content.ts`**: chopps, estruturas para eventos, kits, produtos
personalizados, growlers, etapas do atendimento, tipos de evento, WhatsApp e Instagram.

## Fotos

- **Originais:** `imagens/` (como recebidos).
- **Versões para o site:** `public/photos/`. Todas recebem o mesmo tratamento leve de
  exposição, contraste, cor e nitidez, gerado por `scripts/tratar-fotos.py`.

Para adicionar ou trocar uma foto:

1. Coloque o original em `imagens/`.
2. Registre-o em `PHOTOS` dentro de `scripts/tratar-fotos.py`.
3. Rode `python scripts/tratar-fotos.py` (precisa do Pillow: `pip install pillow`).
4. Aponte o caminho `/photos/<nome>.webp` em `src/data/content.ts` ou no componente da seção.

Os originais atuais têm no máximo 680 px. Versões em alta resolução (≥ 1600 px)
deixariam o hero, a Kombi e a História mais nítidos em telas grandes. Basta
substituir os arquivos e rodar o script de novo.

## Logo

A logo oficial foi extraída de `imagens/logo (1).pdf`, sem alterações, e salva em
`public/brand/`. O ícone da guia (favicon) é o cocar da marca espelhado (`imagens/cocar.png`). Em fundos escuros,
a logo fica sobre uma placa clara para manter legíveis os textos finos.

## Testes visuais

Adicione `?noanim` à URL para desligar as animações de entrada (útil para capturas de tela).
