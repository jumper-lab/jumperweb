# Responsive Guide — OceanX Expedition Interface System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

depth timeline becomes chapter stack with sticky coordinates

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(3rem, 8vw, 6.8rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-deep-scroll-expedition-interface { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-deep-scroll-expedition-interface { grid-template-columns: 1fr; min-height: auto; }
  .depth-marker-nav { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: mission timeline nav with depth markers continua compreensível.
- Desktop 1440px: full-bleed ocean scene with depth scale, mission chapter and interactive timeline mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- depth-marker-nav: testar foco, wrap de texto e estado vazio.
- mission-chapter-card: testar foco, wrap de texto e estado vazio.
- vessel-map-panel: testar foco, wrap de texto e estado vazio.
- discovery-log-entry: testar foco, wrap de texto e estado vazio.
- crew-signal-card: testar foco, wrap de texto e estado vazio.
- coordinate-footer: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Mission chapter

- Mobile: transformar full-bleed ocean scene with depth scale, mission chapter and interactive timeline em bloco linear sem perder depth-marker-nav.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Depth timeline

- Mobile: transformar asymmetric editorial block em bloco linear sem perder mission-chapter-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Research vessel map

- Mobile: transformar functional conversion module em bloco linear sem perder vessel-map-panel.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Crew cards

- Mobile: transformar wide proof band em bloco linear sem perder discovery-log-entry.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Discoveries log

- Mobile: transformar asymmetric editorial block em bloco linear sem perder crew-signal-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Media theatre

- Mobile: transformar functional conversion module em bloco linear sem perder coordinate-footer.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Join/support prompt

- Mobile: transformar wide proof band em bloco linear sem perder depth-marker-nav.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as expedition coordinates

- Mobile: transformar asymmetric editorial block em bloco linear sem perder mission-chapter-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### depth-marker-nav

```css
.depth-marker-nav {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .depth-marker-nav { grid-column: 1 / -1; }
}
```

- Estado mobile: Mission chapter continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### mission-chapter-card

```css
.mission-chapter-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .mission-chapter-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Depth timeline continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### vessel-map-panel

```css
.vessel-map-panel {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .vessel-map-panel { grid-column: 1 / -1; }
}
```

- Estado mobile: Research vessel map continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### discovery-log-entry

```css
.discovery-log-entry {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .discovery-log-entry { grid-column: 1 / -1; }
}
```

- Estado mobile: Crew cards continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### crew-signal-card

```css
.crew-signal-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .crew-signal-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Discoveries log continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### coordinate-footer

```css
.coordinate-footer {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .coordinate-footer { grid-column: 1 / -1; }
}
```

- Estado mobile: Media theatre continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em deep-scroll expedition interface.
- Check 02: validar altura em deep-scroll expedition interface.
- Check 03: validar wrap de texto em deep-scroll expedition interface.
- Check 04: validar foco em deep-scroll expedition interface.
- Check 05: validar imagem em deep-scroll expedition interface.
- Check 06: validar CTA em deep-scroll expedition interface.
- Check 07: validar grid em deep-scroll expedition interface.
- Check 08: validar menu em deep-scroll expedition interface.
- Check 09: validar largura em deep-scroll expedition interface.
- Check 10: validar altura em deep-scroll expedition interface.
- Check 11: validar wrap de texto em deep-scroll expedition interface.
- Check 12: validar foco em deep-scroll expedition interface.
- Check 13: validar imagem em deep-scroll expedition interface.
- Check 14: validar CTA em deep-scroll expedition interface.
- Check 15: validar grid em deep-scroll expedition interface.
- Check 16: validar menu em deep-scroll expedition interface.
- Check 17: validar largura em deep-scroll expedition interface.
- Check 18: validar altura em deep-scroll expedition interface.
- Check 19: validar wrap de texto em deep-scroll expedition interface.
- Check 20: validar foco em deep-scroll expedition interface.
- Check 21: validar imagem em deep-scroll expedition interface.
- Check 22: validar CTA em deep-scroll expedition interface.
- Check 23: validar grid em deep-scroll expedition interface.
- Check 24: validar menu em deep-scroll expedition interface.
