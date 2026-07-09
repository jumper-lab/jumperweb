# Responsive Guide — Lando Velocity Fan System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

race status stays sticky, merch drops become swipe lane

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-telemetry-commerce-grid { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-telemetry-commerce-grid { grid-template-columns: 1fr; min-height: auto; }
  .race-status-strip { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: race-week nav with merch/drop ticker continua compreensível.
- Desktop 1440px: speed-line editorial grid with race status, merch drop and fan CTA mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- race-status-strip: testar foco, wrap de texto e estado vazio.
- merch-drop-card: testar foco, wrap de texto e estado vazio.
- telemetry-stat-tile: testar foco, wrap de texto e estado vazio.
- fan-club-panel: testar foco, wrap de texto e estado vazio.
- calendar-race-row: testar foco, wrap de texto e estado vazio.
- paddock-pass-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Race week status

- Mobile: transformar speed-line editorial grid with race status, merch drop and fan CTA em bloco linear sem perder race-status-strip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Merch drop wall

- Mobile: transformar asymmetric editorial block em bloco linear sem perder merch-drop-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Content feed

- Mobile: transformar functional conversion module em bloco linear sem perder telemetry-stat-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Fan club prompt

- Mobile: transformar wide proof band em bloco linear sem perder fan-club-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Calendar strip

- Mobile: transformar asymmetric editorial block em bloco linear sem perder calendar-race-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Partner proof

- Mobile: transformar functional conversion module em bloco linear sem perder paddock-pass-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Shop conversion

- Mobile: transformar wide proof band em bloco linear sem perder race-status-strip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as paddock pass

- Mobile: transformar asymmetric editorial block em bloco linear sem perder merch-drop-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### race-status-strip

```css
.race-status-strip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .race-status-strip { grid-column: 1 / -1; }
}
```

- Estado mobile: Race week status continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### merch-drop-card

```css
.merch-drop-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .merch-drop-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Merch drop wall continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### telemetry-stat-tile

```css
.telemetry-stat-tile {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .telemetry-stat-tile { grid-column: 1 / -1; }
}
```

- Estado mobile: Content feed continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### fan-club-panel

```css
.fan-club-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .fan-club-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Fan club prompt continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### calendar-race-row

```css
.calendar-race-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .calendar-race-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Calendar strip continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### paddock-pass-footer

```css
.paddock-pass-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .paddock-pass-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Partner proof continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em telemetry commerce grid.
- Check 02: validar altura em telemetry commerce grid.
- Check 03: validar wrap de texto em telemetry commerce grid.
- Check 04: validar foco em telemetry commerce grid.
- Check 05: validar imagem em telemetry commerce grid.
- Check 06: validar CTA em telemetry commerce grid.
- Check 07: validar grid em telemetry commerce grid.
- Check 08: validar menu em telemetry commerce grid.
- Check 09: validar largura em telemetry commerce grid.
- Check 10: validar altura em telemetry commerce grid.
- Check 11: validar wrap de texto em telemetry commerce grid.
- Check 12: validar foco em telemetry commerce grid.
- Check 13: validar imagem em telemetry commerce grid.
- Check 14: validar CTA em telemetry commerce grid.
- Check 15: validar grid em telemetry commerce grid.
- Check 16: validar menu em telemetry commerce grid.
- Check 17: validar largura em telemetry commerce grid.
- Check 18: validar altura em telemetry commerce grid.
- Check 19: validar wrap de texto em telemetry commerce grid.
- Check 20: validar foco em telemetry commerce grid.
- Check 21: validar imagem em telemetry commerce grid.
- Check 22: validar CTA em telemetry commerce grid.
- Check 23: validar grid em telemetry commerce grid.
- Check 24: validar menu em telemetry commerce grid.
