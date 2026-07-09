# Responsive Guide — Heva Calm Care Journal System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

mobile-first booking rail after hero with sticky call action

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-journal-masthead-with-appointment-rail { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-journal-masthead-with-appointment-rail { grid-template-columns: 1fr; min-height: auto; }
  .care-route-chip { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: quiet clinic nav plus floating appointment rail continua compreensível.
- Desktop 1440px: full-width calm portrait masthead with care route chips and appointment bar mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- care-route-chip: testar foco, wrap de texto e estado vazio.
- practitioner-profile-slab: testar foco, wrap de texto e estado vazio.
- visit-detail-row: testar foco, wrap de texto e estado vazio.
- appointment-rail: testar foco, wrap de texto e estado vazio.
- calm-faq-card: testar foco, wrap de texto e estado vazio.
- insurance-pill: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Care route finder

- Mobile: transformar full-width calm portrait masthead with care route chips and appointment bar em bloco linear sem perder care-route-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Practitioner trust panel

- Mobile: transformar asymmetric editorial block em bloco linear sem perder practitioner-profile-slab.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Treatment journal

- Mobile: transformar functional conversion module em bloco linear sem perder visit-detail-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Insurance and visit details

- Mobile: transformar wide proof band em bloco linear sem perder appointment-rail.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Calm FAQ

- Mobile: transformar asymmetric editorial block em bloco linear sem perder calm-faq-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Patient story

- Mobile: transformar functional conversion module em bloco linear sem perder insurance-pill.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Booking bar

- Mobile: transformar wide proof band em bloco linear sem perder care-route-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as clinic dossier

- Mobile: transformar asymmetric editorial block em bloco linear sem perder practitioner-profile-slab.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### care-route-chip

```css
.care-route-chip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .care-route-chip { grid-column: 1 / -1; }
}
```

- Estado mobile: Care route finder continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### practitioner-profile-slab

```css
.practitioner-profile-slab {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .practitioner-profile-slab { grid-column: 1 / -1; }
}
```

- Estado mobile: Practitioner trust panel continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### visit-detail-row

```css
.visit-detail-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .visit-detail-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Treatment journal continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### appointment-rail

```css
.appointment-rail {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .appointment-rail { grid-column: 1 / -1; }
}
```

- Estado mobile: Insurance and visit details continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### calm-faq-card

```css
.calm-faq-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .calm-faq-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Calm FAQ continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### insurance-pill

```css
.insurance-pill {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .insurance-pill { grid-column: 1 / -1; }
}
```

- Estado mobile: Patient story continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em journal masthead with appointment rail.
- Check 02: validar altura em journal masthead with appointment rail.
- Check 03: validar wrap de texto em journal masthead with appointment rail.
- Check 04: validar foco em journal masthead with appointment rail.
- Check 05: validar imagem em journal masthead with appointment rail.
- Check 06: validar CTA em journal masthead with appointment rail.
- Check 07: validar grid em journal masthead with appointment rail.
- Check 08: validar menu em journal masthead with appointment rail.
- Check 09: validar largura em journal masthead with appointment rail.
- Check 10: validar altura em journal masthead with appointment rail.
- Check 11: validar wrap de texto em journal masthead with appointment rail.
- Check 12: validar foco em journal masthead with appointment rail.
- Check 13: validar imagem em journal masthead with appointment rail.
- Check 14: validar CTA em journal masthead with appointment rail.
- Check 15: validar grid em journal masthead with appointment rail.
- Check 16: validar menu em journal masthead with appointment rail.
- Check 17: validar largura em journal masthead with appointment rail.
- Check 18: validar altura em journal masthead with appointment rail.
- Check 19: validar wrap de texto em journal masthead with appointment rail.
- Check 20: validar foco em journal masthead with appointment rail.
- Check 21: validar imagem em journal masthead with appointment rail.
- Check 22: validar CTA em journal masthead with appointment rail.
- Check 23: validar grid em journal masthead with appointment rail.
- Check 24: validar menu em journal masthead with appointment rail.
