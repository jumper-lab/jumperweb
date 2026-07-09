# Responsive Guide — Real Hotels Editorial Stay System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

image-first hero with compact booking drawer

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-magazine-stay-ledger { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-magazine-stay-ledger { grid-template-columns: 1fr; min-height: auto; }
  .booking-ledger { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: thin editorial nav with booking ledger dock continua compreensível.
- Desktop 1440px: full-bleed destination image with oversized serif title and low booking ledger mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- booking-ledger: testar foco, wrap de texto e estado vazio.
- room-index-tile: testar foco, wrap de texto e estado vazio.
- itinerary-strip: testar foco, wrap de texto e estado vazio.
- folio-link: testar foco, wrap de texto e estado vazio.
- destination-caption: testar foco, wrap de texto e estado vazio.
- availability-chip: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Destination opener

- Mobile: transformar full-bleed destination image with oversized serif title and low booking ledger em bloco linear sem perder booking-ledger.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Room editorial index

- Mobile: transformar asymmetric editorial block em bloco linear sem perder room-index-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Experience itinerary

- Mobile: transformar functional conversion module em bloco linear sem perder itinerary-strip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Availability ledger

- Mobile: transformar wide proof band em bloco linear sem perder folio-link.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Local guide

- Mobile: transformar asymmetric editorial block em bloco linear sem perder destination-caption.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Guest notes

- Mobile: transformar functional conversion module em bloco linear sem perder availability-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Press marks

- Mobile: transformar wide proof band em bloco linear sem perder booking-ledger.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as travel folio

- Mobile: transformar asymmetric editorial block em bloco linear sem perder room-index-tile.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### booking-ledger

```css
.booking-ledger {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .booking-ledger { grid-column: 1 / -1; }
}
```

- Estado mobile: Destination opener continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### room-index-tile

```css
.room-index-tile {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .room-index-tile { grid-column: 1 / -1; }
}
```

- Estado mobile: Room editorial index continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### itinerary-strip

```css
.itinerary-strip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .itinerary-strip { grid-column: 1 / -1; }
}
```

- Estado mobile: Experience itinerary continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### folio-link

```css
.folio-link {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .folio-link { grid-column: 1 / -1; }
}
```

- Estado mobile: Availability ledger continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### destination-caption

```css
.destination-caption {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .destination-caption { grid-column: 1 / -1; }
}
```

- Estado mobile: Local guide continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### availability-chip

```css
.availability-chip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .availability-chip { grid-column: 1 / -1; }
}
```

- Estado mobile: Guest notes continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em magazine stay ledger.
- Check 02: validar altura em magazine stay ledger.
- Check 03: validar wrap de texto em magazine stay ledger.
- Check 04: validar foco em magazine stay ledger.
- Check 05: validar imagem em magazine stay ledger.
- Check 06: validar CTA em magazine stay ledger.
- Check 07: validar grid em magazine stay ledger.
- Check 08: validar menu em magazine stay ledger.
- Check 09: validar largura em magazine stay ledger.
- Check 10: validar altura em magazine stay ledger.
- Check 11: validar wrap de texto em magazine stay ledger.
- Check 12: validar foco em magazine stay ledger.
- Check 13: validar imagem em magazine stay ledger.
- Check 14: validar CTA em magazine stay ledger.
- Check 15: validar grid em magazine stay ledger.
- Check 16: validar menu em magazine stay ledger.
- Check 17: validar largura em magazine stay ledger.
- Check 18: validar altura em magazine stay ledger.
- Check 19: validar wrap de texto em magazine stay ledger.
- Check 20: validar foco em magazine stay ledger.
- Check 21: validar imagem em magazine stay ledger.
- Check 22: validar CTA em magazine stay ledger.
- Check 23: validar grid em magazine stay ledger.
- Check 24: validar menu em magazine stay ledger.
