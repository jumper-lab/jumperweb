# Responsive Guide — Crav Red Order Board System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

thumb-first category rail and cart summary

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-menu-board-commerce { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-menu-board-commerce { grid-template-columns: 1fr; min-height: auto; }
  .menu-price-chip { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: sticky order rail with category buttons continua compreensível.
- Desktop 1440px: menu board hero with burger stack, price chips and immediate order action mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- menu-price-chip: testar foco, wrap de texto e estado vazio.
- combo-builder-card: testar foco, wrap de texto e estado vazio.
- sauce-selector: testar foco, wrap de texto e estado vazio.
- limited-drop-badge: testar foco, wrap de texto e estado vazio.
- delivery-toggle: testar foco, wrap de texto e estado vazio.
- receipt-summary: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Hero order board

- Mobile: transformar menu board hero with burger stack, price chips and immediate order action em bloco linear sem perder menu-price-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Best sellers

- Mobile: transformar asymmetric editorial block em bloco linear sem perder combo-builder-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Build your combo

- Mobile: transformar functional conversion module em bloco linear sem perder sauce-selector.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Limited drop

- Mobile: transformar wide proof band em bloco linear sem perder limited-drop-badge.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Pickup/delivery choice

- Mobile: transformar asymmetric editorial block em bloco linear sem perder delivery-toggle.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Sauce selector

- Mobile: transformar functional conversion module em bloco linear sem perder receipt-summary.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Social proof wall

- Mobile: transformar wide proof band em bloco linear sem perder menu-price-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as receipt

- Mobile: transformar asymmetric editorial block em bloco linear sem perder combo-builder-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### menu-price-chip

```css
.menu-price-chip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .menu-price-chip { grid-column: 1 / -1; }
}
```

- Estado mobile: Hero order board continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### combo-builder-card

```css
.combo-builder-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .combo-builder-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Best sellers continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### sauce-selector

```css
.sauce-selector {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .sauce-selector { grid-column: 1 / -1; }
}
```

- Estado mobile: Build your combo continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### limited-drop-badge

```css
.limited-drop-badge {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .limited-drop-badge { grid-column: 1 / -1; }
}
```

- Estado mobile: Limited drop continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### delivery-toggle

```css
.delivery-toggle {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .delivery-toggle { grid-column: 1 / -1; }
}
```

- Estado mobile: Pickup/delivery choice continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### receipt-summary

```css
.receipt-summary {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .receipt-summary { grid-column: 1 / -1; }
}
```

- Estado mobile: Sauce selector continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em menu-board commerce.
- Check 02: validar altura em menu-board commerce.
- Check 03: validar wrap de texto em menu-board commerce.
- Check 04: validar foco em menu-board commerce.
- Check 05: validar imagem em menu-board commerce.
- Check 06: validar CTA em menu-board commerce.
- Check 07: validar grid em menu-board commerce.
- Check 08: validar menu em menu-board commerce.
- Check 09: validar largura em menu-board commerce.
- Check 10: validar altura em menu-board commerce.
- Check 11: validar wrap de texto em menu-board commerce.
- Check 12: validar foco em menu-board commerce.
- Check 13: validar imagem em menu-board commerce.
- Check 14: validar CTA em menu-board commerce.
- Check 15: validar grid em menu-board commerce.
- Check 16: validar menu em menu-board commerce.
- Check 17: validar largura em menu-board commerce.
- Check 18: validar altura em menu-board commerce.
- Check 19: validar wrap de texto em menu-board commerce.
- Check 20: validar foco em menu-board commerce.
- Check 21: validar imagem em menu-board commerce.
- Check 22: validar CTA em menu-board commerce.
- Check 23: validar grid em menu-board commerce.
- Check 24: validar menu em menu-board commerce.
