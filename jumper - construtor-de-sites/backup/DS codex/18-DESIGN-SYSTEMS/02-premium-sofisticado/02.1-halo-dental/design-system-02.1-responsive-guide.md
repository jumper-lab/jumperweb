# Responsive Guide — Halo Precision Theatre System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

dark single stage with drawer CTA below fold

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-center-stage-product-theatre { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-center-stage-product-theatre { grid-template-columns: 1fr; min-height: auto; }
  .halo-focus-button { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: minimal command bar with consultation drawer continua compreensível.
- Desktop 1440px: black stage with centered treatment object, orange halo cue and consultation drawer mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- halo-focus-button: testar foco, wrap de texto e estado vazio.
- treatment-timeline: testar foco, wrap de texto e estado vazio.
- before-after-slider: testar foco, wrap de texto e estado vazio.
- doctor-authority-card: testar foco, wrap de texto e estado vazio.
- concierge-drawer: testar foco, wrap de texto e estado vazio.
- pricing-confidence-row: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Signature treatment theatre

- Mobile: transformar black stage with centered treatment object, orange halo cue and consultation drawer em bloco linear sem perder halo-focus-button.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Before-after evidence

- Mobile: transformar asymmetric editorial block em bloco linear sem perder treatment-timeline.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Doctor authority

- Mobile: transformar functional conversion module em bloco linear sem perder before-after-slider.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Treatment timeline

- Mobile: transformar wide proof band em bloco linear sem perder doctor-authority-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Financing confidence

- Mobile: transformar asymmetric editorial block em bloco linear sem perder concierge-drawer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Consultation drawer

- Mobile: transformar functional conversion module em bloco linear sem perder pricing-confidence-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Press/proof strip

- Mobile: transformar wide proof band em bloco linear sem perder halo-focus-button.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as concierge

- Mobile: transformar asymmetric editorial block em bloco linear sem perder treatment-timeline.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### halo-focus-button

```css
.halo-focus-button {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .halo-focus-button { grid-column: 1 / -1; }
}
```

- Estado mobile: Signature treatment theatre continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### treatment-timeline

```css
.treatment-timeline {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .treatment-timeline { grid-column: 1 / -1; }
}
```

- Estado mobile: Before-after evidence continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### before-after-slider

```css
.before-after-slider {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .before-after-slider { grid-column: 1 / -1; }
}
```

- Estado mobile: Doctor authority continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### doctor-authority-card

```css
.doctor-authority-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .doctor-authority-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Treatment timeline continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### concierge-drawer

```css
.concierge-drawer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .concierge-drawer { grid-column: 1 / -1; }
}
```

- Estado mobile: Financing confidence continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### pricing-confidence-row

```css
.pricing-confidence-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .pricing-confidence-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Consultation drawer continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em center-stage product theatre.
- Check 02: validar altura em center-stage product theatre.
- Check 03: validar wrap de texto em center-stage product theatre.
- Check 04: validar foco em center-stage product theatre.
- Check 05: validar imagem em center-stage product theatre.
- Check 06: validar CTA em center-stage product theatre.
- Check 07: validar grid em center-stage product theatre.
- Check 08: validar menu em center-stage product theatre.
- Check 09: validar largura em center-stage product theatre.
- Check 10: validar altura em center-stage product theatre.
- Check 11: validar wrap de texto em center-stage product theatre.
- Check 12: validar foco em center-stage product theatre.
- Check 13: validar imagem em center-stage product theatre.
- Check 14: validar CTA em center-stage product theatre.
- Check 15: validar grid em center-stage product theatre.
- Check 16: validar menu em center-stage product theatre.
- Check 17: validar largura em center-stage product theatre.
- Check 18: validar altura em center-stage product theatre.
- Check 19: validar wrap de texto em center-stage product theatre.
- Check 20: validar foco em center-stage product theatre.
- Check 21: validar imagem em center-stage product theatre.
- Check 22: validar CTA em center-stage product theatre.
- Check 23: validar grid em center-stage product theatre.
- Check 24: validar menu em center-stage product theatre.
