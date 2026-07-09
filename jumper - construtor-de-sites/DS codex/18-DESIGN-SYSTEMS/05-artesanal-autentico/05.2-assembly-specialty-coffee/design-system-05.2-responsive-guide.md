# Responsive Guide — Assembly Traceable Roast System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

ledger rows become stacked provenance cards

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-sourcing-ledger-minimal { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-sourcing-ledger-minimal { grid-template-columns: 1fr; min-height: auto; }
  .origin-ledger-row { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: thin text nav with roast archive access continua compreensível.
- Desktop 1440px: quiet product hero with origin ledger and sustainability proof table mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- origin-ledger-row: testar foco, wrap de texto e estado vazio.
- minimal-product-card: testar foco, wrap de texto e estado vazio.
- sourcing-principle-note: testar foco, wrap de texto e estado vazio.
- roast-archive-table: testar foco, wrap de texto e estado vazio.
- wholesale-enquiry-panel: testar foco, wrap de texto e estado vazio.
- provenance-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Origin ledger

- Mobile: transformar quiet product hero with origin ledger and sustainability proof table em bloco linear sem perder origin-ledger-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Roast archive

- Mobile: transformar asymmetric editorial block em bloco linear sem perder minimal-product-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Sourcing principles

- Mobile: transformar functional conversion module em bloco linear sem perder sourcing-principle-note.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Product education

- Mobile: transformar wide proof band em bloco linear sem perder roast-archive-table.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Subscription logic

- Mobile: transformar asymmetric editorial block em bloco linear sem perder wholesale-enquiry-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Wholesale enquiry

- Mobile: transformar functional conversion module em bloco linear sem perder provenance-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Journal index

- Mobile: transformar wide proof band em bloco linear sem perder origin-ledger-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as provenance record

- Mobile: transformar asymmetric editorial block em bloco linear sem perder minimal-product-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### origin-ledger-row

```css
.origin-ledger-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .origin-ledger-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Origin ledger continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### minimal-product-card

```css
.minimal-product-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .minimal-product-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Roast archive continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### sourcing-principle-note

```css
.sourcing-principle-note {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .sourcing-principle-note { grid-column: 1 / -1; }
}
```

- Estado mobile: Sourcing principles continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### roast-archive-table

```css
.roast-archive-table {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .roast-archive-table { grid-column: 1 / -1; }
}
```

- Estado mobile: Product education continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### wholesale-enquiry-panel

```css
.wholesale-enquiry-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .wholesale-enquiry-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Subscription logic continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### provenance-footer

```css
.provenance-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .provenance-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Wholesale enquiry continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em sourcing ledger minimal.
- Check 02: validar altura em sourcing ledger minimal.
- Check 03: validar wrap de texto em sourcing ledger minimal.
- Check 04: validar foco em sourcing ledger minimal.
- Check 05: validar imagem em sourcing ledger minimal.
- Check 06: validar CTA em sourcing ledger minimal.
- Check 07: validar grid em sourcing ledger minimal.
- Check 08: validar menu em sourcing ledger minimal.
- Check 09: validar largura em sourcing ledger minimal.
- Check 10: validar altura em sourcing ledger minimal.
- Check 11: validar wrap de texto em sourcing ledger minimal.
- Check 12: validar foco em sourcing ledger minimal.
- Check 13: validar imagem em sourcing ledger minimal.
- Check 14: validar CTA em sourcing ledger minimal.
- Check 15: validar grid em sourcing ledger minimal.
- Check 16: validar menu em sourcing ledger minimal.
- Check 17: validar largura em sourcing ledger minimal.
- Check 18: validar altura em sourcing ledger minimal.
- Check 19: validar wrap de texto em sourcing ledger minimal.
- Check 20: validar foco em sourcing ledger minimal.
- Check 21: validar imagem em sourcing ledger minimal.
- Check 22: validar CTA em sourcing ledger minimal.
- Check 23: validar grid em sourcing ledger minimal.
- Check 24: validar menu em sourcing ledger minimal.
