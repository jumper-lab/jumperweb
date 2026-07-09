# Responsive Guide — Monolith Ink Portfolio System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

portfolio wall becomes vertical artist archive

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-portfolio-monolith-wall { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-portfolio-monolith-wall { grid-template-columns: 1fr; min-height: auto; }
  .artist-index-rail { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: artist index rail with booking rules continua compreensível.
- Desktop 1440px: near-black immersive mark, massive type and rotating artist index mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- artist-index-rail: testar foco, wrap de texto e estado vazio.
- portfolio-wall-tile: testar foco, wrap de texto e estado vazio.
- flash-sheet-card: testar foco, wrap de texto e estado vazio.
- booking-rule-panel: testar foco, wrap de texto e estado vazio.
- aftercare-accordion: testar foco, wrap de texto e estado vazio.
- archive-stamp-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Artist index

- Mobile: transformar near-black immersive mark, massive type and rotating artist index em bloco linear sem perder artist-index-rail.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Portfolio wall

- Mobile: transformar asymmetric editorial block em bloco linear sem perder portfolio-wall-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Flash availability

- Mobile: transformar functional conversion module em bloco linear sem perder flash-sheet-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Booking rules

- Mobile: transformar wide proof band em bloco linear sem perder booking-rule-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Studio ethos

- Mobile: transformar asymmetric editorial block em bloco linear sem perder aftercare-accordion.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Aftercare guide

- Mobile: transformar functional conversion module em bloco linear sem perder archive-stamp-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Consultation form

- Mobile: transformar wide proof band em bloco linear sem perder artist-index-rail.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as archive stamp

- Mobile: transformar asymmetric editorial block em bloco linear sem perder portfolio-wall-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### artist-index-rail

```css
.artist-index-rail {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .artist-index-rail { grid-column: 1 / -1; }
}
```

- Estado mobile: Artist index continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### portfolio-wall-tile

```css
.portfolio-wall-tile {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .portfolio-wall-tile { grid-column: 1 / -1; }
}
```

- Estado mobile: Portfolio wall continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### flash-sheet-card

```css
.flash-sheet-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .flash-sheet-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Flash availability continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### booking-rule-panel

```css
.booking-rule-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .booking-rule-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Booking rules continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### aftercare-accordion

```css
.aftercare-accordion {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .aftercare-accordion { grid-column: 1 / -1; }
}
```

- Estado mobile: Studio ethos continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### archive-stamp-footer

```css
.archive-stamp-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .archive-stamp-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Aftercare guide continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em portfolio monolith wall.
- Check 02: validar altura em portfolio monolith wall.
- Check 03: validar wrap de texto em portfolio monolith wall.
- Check 04: validar foco em portfolio monolith wall.
- Check 05: validar imagem em portfolio monolith wall.
- Check 06: validar CTA em portfolio monolith wall.
- Check 07: validar grid em portfolio monolith wall.
- Check 08: validar menu em portfolio monolith wall.
- Check 09: validar largura em portfolio monolith wall.
- Check 10: validar altura em portfolio monolith wall.
- Check 11: validar wrap de texto em portfolio monolith wall.
- Check 12: validar foco em portfolio monolith wall.
- Check 13: validar imagem em portfolio monolith wall.
- Check 14: validar CTA em portfolio monolith wall.
- Check 15: validar grid em portfolio monolith wall.
- Check 16: validar menu em portfolio monolith wall.
- Check 17: validar largura em portfolio monolith wall.
- Check 18: validar altura em portfolio monolith wall.
- Check 19: validar wrap de texto em portfolio monolith wall.
- Check 20: validar foco em portfolio monolith wall.
- Check 21: validar imagem em portfolio monolith wall.
- Check 22: validar CTA em portfolio monolith wall.
- Check 23: validar grid em portfolio monolith wall.
- Check 24: validar menu em portfolio monolith wall.
