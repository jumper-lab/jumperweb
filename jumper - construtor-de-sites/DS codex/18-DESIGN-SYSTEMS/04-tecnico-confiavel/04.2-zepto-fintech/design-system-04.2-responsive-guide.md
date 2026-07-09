# Responsive Guide — Zepto Payment Flow System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

flow map becomes numbered transfer sequence

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-transaction-flow-map { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-transaction-flow-map { grid-template-columns: 1fr; min-height: auto; }
  .transaction-flow-line { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: product nav with trust and developer branches continua compreensível.
- Desktop 1440px: transaction stream hero showing money movement, risk checks and API proof mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- transaction-flow-line: testar foco, wrap de texto e estado vazio.
- risk-control-card: testar foco, wrap de texto e estado vazio.
- api-snippet-panel: testar foco, wrap de texto e estado vazio.
- compliance-badge-row: testar foco, wrap de texto e estado vazio.
- use-case-route-card: testar foco, wrap de texto e estado vazio.
- demo-request-form: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Payment flow explainer

- Mobile: transformar transaction stream hero showing money movement, risk checks and API proof em bloco linear sem perder transaction-flow-line.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Trust and compliance panel

- Mobile: transformar asymmetric editorial block em bloco linear sem perder risk-control-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Developer integration

- Mobile: transformar functional conversion module em bloco linear sem perder api-snippet-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Use-case routes

- Mobile: transformar wide proof band em bloco linear sem perder compliance-badge-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Risk controls

- Mobile: transformar asymmetric editorial block em bloco linear sem perder use-case-route-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Customer proof

- Mobile: transformar functional conversion module em bloco linear sem perder demo-request-form.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Demo request

- Mobile: transformar wide proof band em bloco linear sem perder transaction-flow-line.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as compliance ledger

- Mobile: transformar asymmetric editorial block em bloco linear sem perder risk-control-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### transaction-flow-line

```css
.transaction-flow-line {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .transaction-flow-line { grid-column: 1 / -1; }
}
```

- Estado mobile: Payment flow explainer continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### risk-control-card

```css
.risk-control-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .risk-control-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Trust and compliance panel continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### api-snippet-panel

```css
.api-snippet-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .api-snippet-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Developer integration continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### compliance-badge-row

```css
.compliance-badge-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .compliance-badge-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Use-case routes continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### use-case-route-card

```css
.use-case-route-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .use-case-route-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Risk controls continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### demo-request-form

```css
.demo-request-form {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .demo-request-form { grid-column: 1 / -1; }
}
```

- Estado mobile: Customer proof continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em transaction-flow map.
- Check 02: validar altura em transaction-flow map.
- Check 03: validar wrap de texto em transaction-flow map.
- Check 04: validar foco em transaction-flow map.
- Check 05: validar imagem em transaction-flow map.
- Check 06: validar CTA em transaction-flow map.
- Check 07: validar grid em transaction-flow map.
- Check 08: validar menu em transaction-flow map.
- Check 09: validar largura em transaction-flow map.
- Check 10: validar altura em transaction-flow map.
- Check 11: validar wrap de texto em transaction-flow map.
- Check 12: validar foco em transaction-flow map.
- Check 13: validar imagem em transaction-flow map.
- Check 14: validar CTA em transaction-flow map.
- Check 15: validar grid em transaction-flow map.
- Check 16: validar menu em transaction-flow map.
- Check 17: validar largura em transaction-flow map.
- Check 18: validar altura em transaction-flow map.
- Check 19: validar wrap de texto em transaction-flow map.
- Check 20: validar foco em transaction-flow map.
- Check 21: validar imagem em transaction-flow map.
- Check 22: validar CTA em transaction-flow map.
- Check 23: validar grid em transaction-flow map.
- Check 24: validar menu em transaction-flow map.
