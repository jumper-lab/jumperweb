# Responsive Guide — Bernice Counter Ritual System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

single-column bakery board with sticky pickup button

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-counter-story-vertical { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-counter-story-vertical { grid-template-columns: 1fr; min-height: auto; }
  .bake-shelf-card { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: painted window sign nav with daily bake ticker continua compreensível.
- Desktop 1440px: low counter hero with pastry close-up, human hands, and opening-hours ribbon mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- bake-shelf-card: testar foco, wrap de texto e estado vazio.
- daily-batch-ticker: testar foco, wrap de texto e estado vazio.
- crumb-trail-link: testar foco, wrap de texto e estado vazio.
- pickup-window-form: testar foco, wrap de texto e estado vazio.
- neighbor-quote-strip: testar foco, wrap de texto e estado vazio.
- receipt-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Daily bake counter

- Mobile: transformar low counter hero with pastry close-up, human hands, and opening-hours ribbon em bloco linear sem perder bake-shelf-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Neighbourhood welcome

- Mobile: transformar asymmetric editorial block em bloco linear sem perder daily-batch-ticker.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Signature pastries shelf

- Mobile: transformar functional conversion module em bloco linear sem perder crumb-trail-link.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Pre-order and pickup flow

- Mobile: transformar wide proof band em bloco linear sem perder pickup-window-form.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Baker notes

- Mobile: transformar asymmetric editorial block em bloco linear sem perder neighbor-quote-strip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Community praise

- Mobile: transformar functional conversion module em bloco linear sem perder receipt-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Visit card

- Mobile: transformar wide proof band em bloco linear sem perder bake-shelf-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as receipt

- Mobile: transformar asymmetric editorial block em bloco linear sem perder daily-batch-ticker.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### bake-shelf-card

```css
.bake-shelf-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .bake-shelf-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Daily bake counter continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### daily-batch-ticker

```css
.daily-batch-ticker {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .daily-batch-ticker { grid-column: 1 / -1; }
}
```

- Estado mobile: Neighbourhood welcome continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### crumb-trail-link

```css
.crumb-trail-link {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .crumb-trail-link { grid-column: 1 / -1; }
}
```

- Estado mobile: Signature pastries shelf continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### pickup-window-form

```css
.pickup-window-form {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .pickup-window-form { grid-column: 1 / -1; }
}
```

- Estado mobile: Pre-order and pickup flow continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### neighbor-quote-strip

```css
.neighbor-quote-strip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .neighbor-quote-strip { grid-column: 1 / -1; }
}
```

- Estado mobile: Baker notes continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### receipt-footer

```css
.receipt-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .receipt-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Community praise continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em counter-story vertical.
- Check 02: validar altura em counter-story vertical.
- Check 03: validar wrap de texto em counter-story vertical.
- Check 04: validar foco em counter-story vertical.
- Check 05: validar imagem em counter-story vertical.
- Check 06: validar CTA em counter-story vertical.
- Check 07: validar grid em counter-story vertical.
- Check 08: validar menu em counter-story vertical.
- Check 09: validar largura em counter-story vertical.
- Check 10: validar altura em counter-story vertical.
- Check 11: validar wrap de texto em counter-story vertical.
- Check 12: validar foco em counter-story vertical.
- Check 13: validar imagem em counter-story vertical.
- Check 14: validar CTA em counter-story vertical.
- Check 15: validar grid em counter-story vertical.
- Check 16: validar menu em counter-story vertical.
- Check 17: validar largura em counter-story vertical.
- Check 18: validar altura em counter-story vertical.
- Check 19: validar wrap de texto em counter-story vertical.
- Check 20: validar foco em counter-story vertical.
- Check 21: validar imagem em counter-story vertical.
- Check 22: validar CTA em counter-story vertical.
- Check 23: validar grid em counter-story vertical.
- Check 24: validar menu em counter-story vertical.
