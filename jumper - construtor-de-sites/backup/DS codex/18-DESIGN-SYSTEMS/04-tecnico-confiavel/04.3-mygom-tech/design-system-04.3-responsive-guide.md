# Responsive Guide — Mygom Product Cockpit System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

dashboard screenshot crops into annotated cards

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-dashboard-cockpit { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-dashboard-cockpit { grid-template-columns: 1fr; min-height: auto; }
  .dashboard-frame { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: workspace nav with product tour anchor continua compreensível.
- Desktop 1440px: dashboard frame hero with task layers, proof pills and tour CTA mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- dashboard-frame: testar foco, wrap de texto e estado vazio.
- feature-stack-row: testar foco, wrap de texto e estado vazio.
- workflow-node-card: testar foco, wrap de texto e estado vazio.
- comparison-ledger: testar foco, wrap de texto e estado vazio.
- security-proof-pill: testar foco, wrap de texto e estado vazio.
- trial-start-form: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Product cockpit

- Mobile: transformar dashboard frame hero with task layers, proof pills and tour CTA em bloco linear sem perder dashboard-frame.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Feature stack

- Mobile: transformar asymmetric editorial block em bloco linear sem perder feature-stack-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Workflow automation

- Mobile: transformar functional conversion module em bloco linear sem perder workflow-node-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Comparison table

- Mobile: transformar wide proof band em bloco linear sem perder comparison-ledger.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Security proof

- Mobile: transformar asymmetric editorial block em bloco linear sem perder security-proof-pill.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Customer scenarios

- Mobile: transformar functional conversion module em bloco linear sem perder trial-start-form.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Trial form

- Mobile: transformar wide proof band em bloco linear sem perder dashboard-frame.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as workspace map

- Mobile: transformar asymmetric editorial block em bloco linear sem perder feature-stack-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### dashboard-frame

```css
.dashboard-frame {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .dashboard-frame { grid-column: 1 / -1; }
}
```

- Estado mobile: Product cockpit continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### feature-stack-row

```css
.feature-stack-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .feature-stack-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Feature stack continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### workflow-node-card

```css
.workflow-node-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .workflow-node-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Workflow automation continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### comparison-ledger

```css
.comparison-ledger {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .comparison-ledger { grid-column: 1 / -1; }
}
```

- Estado mobile: Comparison table continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### security-proof-pill

```css
.security-proof-pill {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .security-proof-pill { grid-column: 1 / -1; }
}
```

- Estado mobile: Security proof continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### trial-start-form

```css
.trial-start-form {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .trial-start-form { grid-column: 1 / -1; }
}
```

- Estado mobile: Customer scenarios continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em dashboard cockpit.
- Check 02: validar altura em dashboard cockpit.
- Check 03: validar wrap de texto em dashboard cockpit.
- Check 04: validar foco em dashboard cockpit.
- Check 05: validar imagem em dashboard cockpit.
- Check 06: validar CTA em dashboard cockpit.
- Check 07: validar grid em dashboard cockpit.
- Check 08: validar menu em dashboard cockpit.
- Check 09: validar largura em dashboard cockpit.
- Check 10: validar altura em dashboard cockpit.
- Check 11: validar wrap de texto em dashboard cockpit.
- Check 12: validar foco em dashboard cockpit.
- Check 13: validar imagem em dashboard cockpit.
- Check 14: validar CTA em dashboard cockpit.
- Check 15: validar grid em dashboard cockpit.
- Check 16: validar menu em dashboard cockpit.
- Check 17: validar largura em dashboard cockpit.
- Check 18: validar altura em dashboard cockpit.
- Check 19: validar wrap de texto em dashboard cockpit.
- Check 20: validar foco em dashboard cockpit.
- Check 21: validar imagem em dashboard cockpit.
- Check 22: validar CTA em dashboard cockpit.
- Check 23: validar grid em dashboard cockpit.
- Check 24: validar menu em dashboard cockpit.
