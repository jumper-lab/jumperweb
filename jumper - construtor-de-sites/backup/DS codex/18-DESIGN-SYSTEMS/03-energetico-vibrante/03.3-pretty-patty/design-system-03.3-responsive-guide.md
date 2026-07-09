# Responsive Guide — Pretty Patty Sticker Pop System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

stacked stickers with bottom order badge

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-sticker-poster-grid { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-sticker-poster-grid { grid-template-columns: 1fr; min-height: auto; }
  .sticker-menu-card { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: badge nav orbiting menu categories continua compreensível.
- Desktop 1440px: poster-like hero with badge headline, mascot/sticker field and menu CTA mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- sticker-menu-card: testar foco, wrap de texto e estado vazio.
- badge-cta: testar foco, wrap de texto e estado vazio.
- loyalty-stamp-row: testar foco, wrap de texto e estado vazio.
- photo-booth-tile: testar foco, wrap de texto e estado vazio.
- mascot-callout: testar foco, wrap de texto e estado vazio.
- party-order-form: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Patty legend

- Mobile: transformar poster-like hero with badge headline, mascot/sticker field and menu CTA em bloco linear sem perder sticker-menu-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Menu stickers

- Mobile: transformar asymmetric editorial block em bloco linear sem perder badge-cta.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Combo stories

- Mobile: transformar functional conversion module em bloco linear sem perder loyalty-stamp-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Loyalty club

- Mobile: transformar wide proof band em bloco linear sem perder photo-booth-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Photo booth grid

- Mobile: transformar asymmetric editorial block em bloco linear sem perder mascot-callout.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Event/catering prompt

- Mobile: transformar functional conversion module em bloco linear sem perder party-order-form.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Order panel

- Mobile: transformar wide proof band em bloco linear sem perder sticker-menu-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as sticker sheet

- Mobile: transformar asymmetric editorial block em bloco linear sem perder badge-cta.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### sticker-menu-card

```css
.sticker-menu-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .sticker-menu-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Patty legend continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### badge-cta

```css
.badge-cta {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .badge-cta { grid-column: 1 / -1; }
}
```

- Estado mobile: Menu stickers continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### loyalty-stamp-row

```css
.loyalty-stamp-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .loyalty-stamp-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Combo stories continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### photo-booth-tile

```css
.photo-booth-tile {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .photo-booth-tile { grid-column: 1 / -1; }
}
```

- Estado mobile: Loyalty club continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### mascot-callout

```css
.mascot-callout {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .mascot-callout { grid-column: 1 / -1; }
}
```

- Estado mobile: Photo booth grid continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### party-order-form

```css
.party-order-form {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .party-order-form { grid-column: 1 / -1; }
}
```

- Estado mobile: Event/catering prompt continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em sticker-poster grid.
- Check 02: validar altura em sticker-poster grid.
- Check 03: validar wrap de texto em sticker-poster grid.
- Check 04: validar foco em sticker-poster grid.
- Check 05: validar imagem em sticker-poster grid.
- Check 06: validar CTA em sticker-poster grid.
- Check 07: validar grid em sticker-poster grid.
- Check 08: validar menu em sticker-poster grid.
- Check 09: validar largura em sticker-poster grid.
- Check 10: validar altura em sticker-poster grid.
- Check 11: validar wrap de texto em sticker-poster grid.
- Check 12: validar foco em sticker-poster grid.
- Check 13: validar imagem em sticker-poster grid.
- Check 14: validar CTA em sticker-poster grid.
- Check 15: validar grid em sticker-poster grid.
- Check 16: validar menu em sticker-poster grid.
- Check 17: validar largura em sticker-poster grid.
- Check 18: validar altura em sticker-poster grid.
- Check 19: validar wrap de texto em sticker-poster grid.
- Check 20: validar foco em sticker-poster grid.
- Check 21: validar imagem em sticker-poster grid.
- Check 22: validar CTA em sticker-poster grid.
- Check 23: validar grid em sticker-poster grid.
- Check 24: validar menu em sticker-poster grid.
