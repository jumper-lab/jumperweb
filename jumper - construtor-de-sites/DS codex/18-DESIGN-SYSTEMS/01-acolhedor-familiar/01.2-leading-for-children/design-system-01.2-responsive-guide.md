# Responsive Guide — Leading Learning Pathways System

## Breakpoints

- Mobile: 320-479px
- Tablet: 480-1023px
- Desktop: 1024-1919px
- Wide: 1920px+

## Estratégia Principal

accordion pathway map and bottom resource shortcut

## Tipografia Responsiva

```css
h1 { font-family: var(--heading); font-size: clamp(2.35rem, 8vw, 4.6rem); line-height: .94; }
body { font-family: var(--body); font-size: clamp(1rem, 1.1vw, 1.08rem); }
```

## Layout Responsivo

```css
.page-flow { display: grid; gap: clamp(24px, 5vw, 72px); }
.hero-pathway-map-modular { min-height: 78vh; }
@media (max-width: 820px) {
  .hero-pathway-map-modular { grid-template-columns: 1fr; min-height: auto; }
  .pathway-step-card { width: 100%; }
}
```

## Testes Obrigatórios

- iPhone SE 375px: ação principal visível e sem scroll horizontal.
- iPad 768px: rounded topic tabs with parent resource shortcut continua compreensível.
- Desktop 1440px: paper-collage mission hero with pathway cards and caregiver proof mantém foco.
- Wide 1920px+: conteúdo não estica sem limite.

## Componentes Sensíveis

- pathway-step-card: testar foco, wrap de texto e estado vazio.
- caregiver-note: testar foco, wrap de texto e estado vazio.
- resource-filter-chip: testar foco, wrap de texto e estado vazio.
- impact-meter: testar foco, wrap de texto e estado vazio.
- download-card: testar foco, wrap de texto e estado vazio.
- training-module-row: testar foco, wrap de texto e estado vazio.


## Comportamento por Seção

### Mission path

- Mobile: transformar paper-collage mission hero with pathway cards and caregiver proof em bloco linear sem perder pathway-step-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Age-group pathways

- Mobile: transformar asymmetric editorial block em bloco linear sem perder caregiver-note.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Family resource finder

- Mobile: transformar functional conversion module em bloco linear sem perder resource-filter-chip.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Educator training modules

- Mobile: transformar wide proof band em bloco linear sem perder impact-meter.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Impact story cards

- Mobile: transformar asymmetric editorial block em bloco linear sem perder download-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Download library

- Mobile: transformar functional conversion module em bloco linear sem perder training-module-row.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Donation/support prompt

- Mobile: transformar wide proof band em bloco linear sem perder pathway-step-card.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

### Footer as resource map

- Mobile: transformar asymmetric editorial block em bloco linear sem perder caregiver-note.
- Tablet: preservar hierarquia entre título, prova e ação.
- Desktop: usar largura máxima para evitar composição esticada.
- Wide: inserir respiro lateral ou mídia funcional; nunca preencher com decoração vazia.

## Comportamento por Componente

### pathway-step-card

```css
.pathway-step-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .pathway-step-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Mission path continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### caregiver-note

```css
.caregiver-note {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .caregiver-note { grid-column: 1 / -1; }
}
```

- Estado mobile: Age-group pathways continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### resource-filter-chip

```css
.resource-filter-chip {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .resource-filter-chip { grid-column: 1 / -1; }
}
```

- Estado mobile: Family resource finder continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### impact-meter

```css
.impact-meter {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .impact-meter { grid-column: 1 / -1; }
}
```

- Estado mobile: Educator training modules continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### download-card

```css
.download-card {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .download-card { grid-column: 1 / -1; }
}
```

- Estado mobile: Impact story cards continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

### training-module-row

```css
.training-module-row {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 820px) {
  .training-module-row { grid-column: 1 / -1; }
}
```

- Estado mobile: Download library continua explícito.
- Estado tablet: foco e hover não deslocam layout.
- Estado desktop: componente mantém proporção e leitura.

## Checklist de QA Responsivo

- Check 01: validar largura em pathway map modular.
- Check 02: validar altura em pathway map modular.
- Check 03: validar wrap de texto em pathway map modular.
- Check 04: validar foco em pathway map modular.
- Check 05: validar imagem em pathway map modular.
- Check 06: validar CTA em pathway map modular.
- Check 07: validar grid em pathway map modular.
- Check 08: validar menu em pathway map modular.
- Check 09: validar largura em pathway map modular.
- Check 10: validar altura em pathway map modular.
- Check 11: validar wrap de texto em pathway map modular.
- Check 12: validar foco em pathway map modular.
- Check 13: validar imagem em pathway map modular.
- Check 14: validar CTA em pathway map modular.
- Check 15: validar grid em pathway map modular.
- Check 16: validar menu em pathway map modular.
- Check 17: validar largura em pathway map modular.
- Check 18: validar altura em pathway map modular.
- Check 19: validar wrap de texto em pathway map modular.
- Check 20: validar foco em pathway map modular.
- Check 21: validar imagem em pathway map modular.
- Check 22: validar CTA em pathway map modular.
- Check 23: validar grid em pathway map modular.
- Check 24: validar menu em pathway map modular.
