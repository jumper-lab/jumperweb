# Responsive Guide — Noomo Lab Console System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

console cards collapse into ordered status feed

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-operational-console { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-operational-console { grid-template-columns: 1fr; min-height: auto; }
  .console-command-bar { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: command-line nav with capability filters continua compreensível.
- Desktop 1440px: console hero with live metrics, system cards and capability command prompt mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- console-command-bar: testar foco, wrap de texto e estado vazio.
- metric-proof-card: testar foco, wrap de texto e estado vazio.
- stack-diagram-node: testar foco, wrap de texto e estado vazio.
- sprint-stepper: testar foco, wrap de texto e estado vazio.
- case-terminal-panel: testar foco, wrap de texto e estado vazio.
- system-status-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Capability console

- Mobile: transformar console hero with live metrics, system cards and capability command prompt em bloco linear sem perder console-command-bar.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Prototype lab cards

- Mobile: transformar asymmetric editorial block em bloco linear sem perder metric-proof-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Technical proof matrix

- Mobile: transformar functional conversion module em bloco linear sem perder stack-diagram-node.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Stack diagram

- Mobile: transformar wide proof band em bloco linear sem perder sprint-stepper.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Process sprints

- Mobile: transformar asymmetric editorial block em bloco linear sem perder case-terminal-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Case-study terminal

- Mobile: transformar functional conversion module em bloco linear sem perder system-status-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Contact command

- Mobile: transformar wide proof band em bloco linear sem perder console-command-bar.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as system status

- Mobile: transformar asymmetric editorial block em bloco linear sem perder metric-proof-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### console-command-bar

```css
.console-command-bar {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .console-command-bar { grid-column: 1 / -1; }
}
```

- Estado mobile: Capability console continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### metric-proof-card

```css
.metric-proof-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .metric-proof-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Prototype lab cards continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### stack-diagram-node

```css
.stack-diagram-node {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .stack-diagram-node { grid-column: 1 / -1; }
}
```

- Estado mobile: Technical proof matrix continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### sprint-stepper

```css
.sprint-stepper {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .sprint-stepper { grid-column: 1 / -1; }
}
```

- Estado mobile: Stack diagram continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### case-terminal-panel

```css
.case-terminal-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .case-terminal-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Process sprints continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### system-status-footer

```css
.system-status-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .system-status-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Case-study terminal continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em operational console.
- Check 02: validar altura em operational console.
- Check 03: validar wrap de texto em operational console.
- Check 04: validar foco em operational console.
- Check 05: validar imagem em operational console.
- Check 06: validar CTA em operational console.
- Check 07: validar grid em operational console.
- Check 08: validar menu em operational console.
- Check 09: validar largura em operational console.
- Check 10: validar altura em operational console.
- Check 11: validar wrap de texto em operational console.
- Check 12: validar foco em operational console.
- Check 13: validar imagem em operational console.
- Check 14: validar CTA em operational console.
- Check 15: validar grid em operational console.
- Check 16: validar menu em operational console.
- Check 17: validar largura em operational console.
- Check 18: validar altura em operational console.
- Check 19: validar wrap de texto em operational console.
- Check 20: validar foco em operational console.
- Check 21: validar imagem em operational console.
- Check 22: validar CTA em operational console.
- Check 23: validar grid em operational console.
- Check 24: validar menu em operational console.
