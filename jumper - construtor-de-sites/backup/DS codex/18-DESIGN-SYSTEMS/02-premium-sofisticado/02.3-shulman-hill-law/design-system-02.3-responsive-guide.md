# Responsive Guide — Shulman Case Authority System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

claim types become thumb-friendly docket tabs

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-legal-dossier-grid { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-legal-dossier-grid { grid-template-columns: 1fr; min-height: auto; }
  .case-docket-tab { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: case-type docket nav with urgent contact slot continua compreensível.
- Desktop 1440px: authority headline with verdict/stat docket and immediate case evaluation lane mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- case-docket-tab: testar foco, wrap de texto e estado vazio.
- result-verdict-card: testar foco, wrap de texto e estado vazio.
- attorney-brief-card: testar foco, wrap de texto e estado vazio.
- rights-callout: testar foco, wrap de texto e estado vazio.
- claim-intake-form: testar foco, wrap de texto e estado vazio.
- legal-proof-band: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Case type docket

- Mobile: transformar authority headline with verdict/stat docket and immediate case evaluation lane em bloco linear sem perder case-docket-tab.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Results evidence

- Mobile: transformar asymmetric editorial block em bloco linear sem perder result-verdict-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Attorney profiles

- Mobile: transformar functional conversion module em bloco linear sem perder attorney-brief-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Process timeline

- Mobile: transformar wide proof band em bloco linear sem perder rights-callout.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Client rights explainer

- Mobile: transformar asymmetric editorial block em bloco linear sem perder claim-intake-form.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Case evaluation form

- Mobile: transformar functional conversion module em bloco linear sem perder legal-proof-band.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### FAQ by claim type

- Mobile: transformar wide proof band em bloco linear sem perder case-docket-tab.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as legal brief

- Mobile: transformar asymmetric editorial block em bloco linear sem perder result-verdict-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### case-docket-tab

```css
.case-docket-tab {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .case-docket-tab { grid-column: 1 / -1; }
}
```

- Estado mobile: Case type docket continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### result-verdict-card

```css
.result-verdict-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .result-verdict-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Results evidence continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### attorney-brief-card

```css
.attorney-brief-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .attorney-brief-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Attorney profiles continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### rights-callout

```css
.rights-callout {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .rights-callout { grid-column: 1 / -1; }
}
```

- Estado mobile: Process timeline continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### claim-intake-form

```css
.claim-intake-form {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .claim-intake-form { grid-column: 1 / -1; }
}
```

- Estado mobile: Client rights explainer continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### legal-proof-band

```css
.legal-proof-band {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .legal-proof-band { grid-column: 1 / -1; }
}
```

- Estado mobile: Case evaluation form continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em legal dossier grid.
- Check 02: validar altura em legal dossier grid.
- Check 03: validar wrap de texto em legal dossier grid.
- Check 04: validar foco em legal dossier grid.
- Check 05: validar imagem em legal dossier grid.
- Check 06: validar CTA em legal dossier grid.
- Check 07: validar grid em legal dossier grid.
- Check 08: validar menu em legal dossier grid.
- Check 09: validar largura em legal dossier grid.
- Check 10: validar altura em legal dossier grid.
- Check 11: validar wrap de texto em legal dossier grid.
- Check 12: validar foco em legal dossier grid.
- Check 13: validar imagem em legal dossier grid.
- Check 14: validar CTA em legal dossier grid.
- Check 15: validar grid em legal dossier grid.
- Check 16: validar menu em legal dossier grid.
- Check 17: validar largura em legal dossier grid.
- Check 18: validar altura em legal dossier grid.
- Check 19: validar wrap de texto em legal dossier grid.
- Check 20: validar foco em legal dossier grid.
- Check 21: validar imagem em legal dossier grid.
- Check 22: validar CTA em legal dossier grid.
- Check 23: validar grid em legal dossier grid.
- Check 24: validar menu em legal dossier grid.
