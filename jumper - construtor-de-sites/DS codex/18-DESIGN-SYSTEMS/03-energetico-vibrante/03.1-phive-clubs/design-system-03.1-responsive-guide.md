# Responsive Guide — Phive Kinetic Membership System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

horizontal class scroller and sticky join button

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-scoreboard-plus-class-grid { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-scoreboard-plus-class-grid { grid-template-columns: 1fr; min-height: auto; }
  .class-timetable-grid { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: training-mode nav with sticky join timer continua compreensível.
- Desktop 1440px: oversized condensed type over training motion, class chips and membership timer mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- class-timetable-grid: testar foco, wrap de texto e estado vazio.
- membership-scorecard: testar foco, wrap de texto e estado vazio.
- trainer-action-card: testar foco, wrap de texto e estado vazio.
- challenge-marquee: testar foco, wrap de texto e estado vazio.
- zone-map: testar foco, wrap de texto e estado vazio.
- join-timer-button: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Membership scoreboard

- Mobile: transformar oversized condensed type over training motion, class chips and membership timer em bloco linear sem perder class-timetable-grid.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Class timetable

- Mobile: transformar asymmetric editorial block em bloco linear sem perder membership-scorecard.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Trainer cards

- Mobile: transformar functional conversion module em bloco linear sem perder trainer-action-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Facility zones

- Mobile: transformar wide proof band em bloco linear sem perder challenge-marquee.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Challenge strip

- Mobile: transformar asymmetric editorial block em bloco linear sem perder zone-map.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Plan comparison

- Mobile: transformar functional conversion module em bloco linear sem perder join-timer-button.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Join form

- Mobile: transformar wide proof band em bloco linear sem perder class-timetable-grid.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as club board

- Mobile: transformar asymmetric editorial block em bloco linear sem perder membership-scorecard.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### class-timetable-grid

```css
.class-timetable-grid {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .class-timetable-grid { grid-column: 1 / -1; }
}
```

- Estado mobile: Membership scoreboard continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### membership-scorecard

```css
.membership-scorecard {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .membership-scorecard { grid-column: 1 / -1; }
}
```

- Estado mobile: Class timetable continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### trainer-action-card

```css
.trainer-action-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .trainer-action-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Trainer cards continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### challenge-marquee

```css
.challenge-marquee {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .challenge-marquee { grid-column: 1 / -1; }
}
```

- Estado mobile: Facility zones continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### zone-map

```css
.zone-map {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .zone-map { grid-column: 1 / -1; }
}
```

- Estado mobile: Challenge strip continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### join-timer-button

```css
.join-timer-button {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .join-timer-button { grid-column: 1 / -1; }
}
```

- Estado mobile: Plan comparison continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em scoreboard plus class grid.
- Check 02: validar altura em scoreboard plus class grid.
- Check 03: validar wrap de texto em scoreboard plus class grid.
- Check 04: validar foco em scoreboard plus class grid.
- Check 05: validar imagem em scoreboard plus class grid.
- Check 06: validar CTA em scoreboard plus class grid.
- Check 07: validar grid em scoreboard plus class grid.
- Check 08: validar menu em scoreboard plus class grid.
- Check 09: validar largura em scoreboard plus class grid.
- Check 10: validar altura em scoreboard plus class grid.
- Check 11: validar wrap de texto em scoreboard plus class grid.
- Check 12: validar foco em scoreboard plus class grid.
- Check 13: validar imagem em scoreboard plus class grid.
- Check 14: validar CTA em scoreboard plus class grid.
- Check 15: validar grid em scoreboard plus class grid.
- Check 16: validar menu em scoreboard plus class grid.
- Check 17: validar largura em scoreboard plus class grid.
- Check 18: validar altura em scoreboard plus class grid.
- Check 19: validar wrap de texto em scoreboard plus class grid.
- Check 20: validar foco em scoreboard plus class grid.
- Check 21: validar imagem em scoreboard plus class grid.
- Check 22: validar CTA em scoreboard plus class grid.
- Check 23: validar grid em scoreboard plus class grid.
- Check 24: validar menu em scoreboard plus class grid.
