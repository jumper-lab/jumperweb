# Responsive Guide — Ceremony Cupping Journal System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

roast finder first, tasting cards become carousel

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-cupping-journal-commerce { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-cupping-journal-commerce { grid-template-columns: 1fr; min-height: auto; }
  .flavor-note-card { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: roast finder nav with subscription shortcut continua compreensível.
- Desktop 1440px: journal hero with tasting cards, bag detail and roast finder action mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- flavor-note-card: testar foco, wrap de texto e estado vazio.
- roast-finder-filter: testar foco, wrap de texto e estado vazio.
- origin-story-slab: testar foco, wrap de texto e estado vazio.
- subscription-builder: testar foco, wrap de texto e estado vazio.
- brew-method-step: testar foco, wrap de texto e estado vazio.
- tasting-ledger-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Roast finder

- Mobile: transformar journal hero with tasting cards, bag detail and roast finder action em bloco linear sem perder flavor-note-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Flavor note cards

- Mobile: transformar asymmetric editorial block em bloco linear sem perder roast-finder-filter.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Origin story

- Mobile: transformar functional conversion module em bloco linear sem perder origin-story-slab.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Subscription builder

- Mobile: transformar wide proof band em bloco linear sem perder subscription-builder.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Brew guide

- Mobile: transformar asymmetric editorial block em bloco linear sem perder brew-method-step.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Seasonal release

- Mobile: transformar functional conversion module em bloco linear sem perder tasting-ledger-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Wholesale path

- Mobile: transformar wide proof band em bloco linear sem perder flavor-note-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as tasting ledger

- Mobile: transformar asymmetric editorial block em bloco linear sem perder roast-finder-filter.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### flavor-note-card

```css
.flavor-note-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .flavor-note-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Roast finder continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### roast-finder-filter

```css
.roast-finder-filter {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .roast-finder-filter { grid-column: 1 / -1; }
}
```

- Estado mobile: Flavor note cards continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### origin-story-slab

```css
.origin-story-slab {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .origin-story-slab { grid-column: 1 / -1; }
}
```

- Estado mobile: Origin story continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### subscription-builder

```css
.subscription-builder {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .subscription-builder { grid-column: 1 / -1; }
}
```

- Estado mobile: Subscription builder continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### brew-method-step

```css
.brew-method-step {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .brew-method-step { grid-column: 1 / -1; }
}
```

- Estado mobile: Brew guide continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### tasting-ledger-footer

```css
.tasting-ledger-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .tasting-ledger-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Seasonal release continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em cupping journal commerce.
- Check 02: validar altura em cupping journal commerce.
- Check 03: validar wrap de texto em cupping journal commerce.
- Check 04: validar foco em cupping journal commerce.
- Check 05: validar imagem em cupping journal commerce.
- Check 06: validar CTA em cupping journal commerce.
- Check 07: validar grid em cupping journal commerce.
- Check 08: validar menu em cupping journal commerce.
- Check 09: validar largura em cupping journal commerce.
- Check 10: validar altura em cupping journal commerce.
- Check 11: validar wrap de texto em cupping journal commerce.
- Check 12: validar foco em cupping journal commerce.
- Check 13: validar imagem em cupping journal commerce.
- Check 14: validar CTA em cupping journal commerce.
- Check 15: validar grid em cupping journal commerce.
- Check 16: validar menu em cupping journal commerce.
- Check 17: validar largura em cupping journal commerce.
- Check 18: validar altura em cupping journal commerce.
- Check 19: validar wrap de texto em cupping journal commerce.
- Check 20: validar foco em cupping journal commerce.
- Check 21: validar imagem em cupping journal commerce.
- Check 22: validar CTA em cupping journal commerce.
- Check 23: validar grid em cupping journal commerce.
- Check 24: validar menu em cupping journal commerce.
