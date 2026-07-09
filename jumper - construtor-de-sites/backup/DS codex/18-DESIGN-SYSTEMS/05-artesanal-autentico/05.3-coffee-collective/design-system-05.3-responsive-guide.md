# Responsive Guide — Coffee Collective Farmline System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

producer timeline becomes swipeable story sequence

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-producer-timeline-grid { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-producer-timeline-grid { grid-template-columns: 1fr; min-height: auto; }
  .producer-story-card { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: store / cafes / producers segmented nav continua compreensível.
- Desktop 1440px: Nordic calm hero with producer timeline and product detail close-up mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- producer-story-card: testar foco, wrap de texto e estado vazio.
- farmline-timeline: testar foco, wrap de texto e estado vazio.
- coffee-catalogue-tile: testar foco, wrap de texto e estado vazio.
- direct-trade-metric: testar foco, wrap de texto e estado vazio.
- cafe-location-row: testar foco, wrap de texto e estado vazio.
- supply-chain-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Producer timeline

- Mobile: transformar Nordic calm hero with producer timeline and product detail close-up em bloco linear sem perder producer-story-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Coffee catalogue

- Mobile: transformar asymmetric editorial block em bloco linear sem perder farmline-timeline.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Direct trade explanation

- Mobile: transformar functional conversion module em bloco linear sem perder coffee-catalogue-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Cafe locations

- Mobile: transformar wide proof band em bloco linear sem perder direct-trade-metric.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Education journal

- Mobile: transformar asymmetric editorial block em bloco linear sem perder cafe-location-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Subscription path

- Mobile: transformar functional conversion module em bloco linear sem perder supply-chain-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Producer stories

- Mobile: transformar wide proof band em bloco linear sem perder producer-story-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as supply-chain map

- Mobile: transformar asymmetric editorial block em bloco linear sem perder farmline-timeline.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### producer-story-card

```css
.producer-story-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .producer-story-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Producer timeline continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### farmline-timeline

```css
.farmline-timeline {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .farmline-timeline { grid-column: 1 / -1; }
}
```

- Estado mobile: Coffee catalogue continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### coffee-catalogue-tile

```css
.coffee-catalogue-tile {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .coffee-catalogue-tile { grid-column: 1 / -1; }
}
```

- Estado mobile: Direct trade explanation continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### direct-trade-metric

```css
.direct-trade-metric {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .direct-trade-metric { grid-column: 1 / -1; }
}
```

- Estado mobile: Cafe locations continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### cafe-location-row

```css
.cafe-location-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .cafe-location-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Education journal continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### supply-chain-footer

```css
.supply-chain-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .supply-chain-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Subscription path continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em producer timeline grid.
- Check 02: validar altura em producer timeline grid.
- Check 03: validar wrap de texto em producer timeline grid.
- Check 04: validar foco em producer timeline grid.
- Check 05: validar imagem em producer timeline grid.
- Check 06: validar CTA em producer timeline grid.
- Check 07: validar grid em producer timeline grid.
- Check 08: validar menu em producer timeline grid.
- Check 09: validar largura em producer timeline grid.
- Check 10: validar altura em producer timeline grid.
- Check 11: validar wrap de texto em producer timeline grid.
- Check 12: validar foco em producer timeline grid.
- Check 13: validar imagem em producer timeline grid.
- Check 14: validar CTA em producer timeline grid.
- Check 15: validar grid em producer timeline grid.
- Check 16: validar menu em producer timeline grid.
- Check 17: validar largura em producer timeline grid.
- Check 18: validar altura em producer timeline grid.
- Check 19: validar wrap de texto em producer timeline grid.
- Check 20: validar foco em producer timeline grid.
- Check 21: validar imagem em producer timeline grid.
- Check 22: validar CTA em producer timeline grid.
- Check 23: validar grid em producer timeline grid.
- Check 24: validar menu em producer timeline grid.
