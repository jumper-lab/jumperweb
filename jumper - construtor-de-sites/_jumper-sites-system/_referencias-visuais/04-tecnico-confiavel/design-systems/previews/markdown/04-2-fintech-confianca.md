# DS 04.2 — Fintech Confiança

> **Categoria:** 04 — Técnico e Confiável
> **Subcategoria:** Fintech B2B — clareza, dados e espaço em branco
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## 1. Essência

Confiabilidade por **clareza + dados + espaço**. Este DS traduz a linguagem das grandes
infraestruturas financeiras — hierarquia impecável, grids simétricos, números como
protagonistas — para negócios B2B brasileiros: fintechs, contabilidades digitais,
seguradoras, meios de pagamento e consultorias financeiras.

**Light mode absoluto.** Navy (#0F3460) ancora a autoridade; o verde-estabilidade
(#16A085) sinaliza crescimento e saúde financeira. Nenhuma fotografia: toda imagem é
**ilustração geométrica SVG inline** ou **dashboard/diagrama desenhado** — o que garante
unicidade visual e performance.

### Inspiração de base

| Campo | Valor |
|---|---|
| Site | **Stripe** — https://stripe.com |
| Local | San Francisco (EUA) / Dublin (Irlanda) |
| Status | Referência estilística mundial em clareza e hierarquia de produto financeiro |
| O que capturamos | Hierarquia tipográfica, espaço em branco generoso, dados como protagonistas, grids simétricos |
| O que NÃO copiamos | Gradiente vibrante do hero, layout pixel-a-pixel, textos |
| Nota tipográfica | Stripe usa **Söhne** (comercial, Klim Type Foundry) → substituída por **Inter** (Google Fonts) |

### Diferenciação dos irmãos da personalidade 04

| DS | Modo | Paleta | Linguagem |
|---|---|---|---|
| 04.1 SaaS | Dark | Roxo #5E3DD2 | Dev-first |
| **04.2 Fintech Confiança** | **Light** | **Navy #0F3460 + Verde #16A085** | **Geométrico, dados, espaço** |
| 04.3 Contabilidade | Light escuro | Charcoal #2C3E50 + Dourado #D4AF37 | Badges e counters |

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#0F3460` | Navy de autoridade: botões, headings de destaque, footer, ilustrações |
| `secondary` | `#16A085` | Verde-estabilidade: grafismos, ícones, números grandes (≥ 24px) |
| `secondary_text_safe` | `#0E7A65` | Verde para TEXTO normal (links, labels, deltas) |
| `surface` | `#FFFFFF` | Fundo padrão |
| `surface_alt` | `#F6F9FC` | Faixas alternadas, cards de dados |
| `text_primary` | `#0F1F35` | Títulos e corpo principal |
| `text_secondary` | `#42526E` | Subtítulos, apoio |
| `text_muted` | `#64748B` | Legendas, placeholders |
| `border` | `#E3E8EF` | Bordas hairline 1px |
| `error` | `#B42318` | Erros de formulário |
| `success` | `#0E7A65` | Confirmações |
| `warning` | `#B45309` | Avisos |

### Escala neutra (fria, base navy)

`50 #F6F9FC · 100 #EDF2F7 · 200 #E3E8EF · 300 #CBD5E1 · 400 #94A3B8 · 500 #64748B · 600 #42526E · 700 #2C3E5C · 800 #1B2C4A · 900 #0F1F35`

### Verificação de contraste (WCAG 2.1 — números reais)

| Par | Razão | Veredito |
|---|---|---|
| #0F3460 sobre #FFFFFF | **12.50:1** | AAA |
| #0F1F35 sobre #FFFFFF | **16.57:1** | AAA |
| #42526E sobre #FFFFFF | **7.89:1** | AAA |
| #64748B sobre #FFFFFF | **4.76:1** | AA (texto normal) |
| #16A085 sobre #FFFFFF | **3.28:1** | ⚠️ REPROVADO texto normal / ✅ texto grande e grafismos |
| #0E7A65 sobre #FFFFFF | **5.26:1** | AA (texto normal) |
| #FFFFFF sobre #0F3460 | **12.50:1** | AAA (botão primário) |
| #FFFFFF sobre #0E7A65 | **5.26:1** | AA (botão verde) |

> **Decisão documentada:** o verde briefado #16A085 falha para texto normal sobre branco.
> Foi mantido como cor de MARCA (grafismos, ícones, large text) e ganhou a variante
> escurecida **#0E7A65** para qualquer uso tipográfico. Nenhum texto do DS usa
> #16A085 abaixo de 24px.

---

## 3. Tipografia

| Papel | Fonte | Fonte da fonte | Pesos |
|---|---|---|---|
| Headings | **IBM Plex Sans** | Google Fonts | 500 / 600 / 700 |
| Body | **Inter** | Google Fonts (substitui Söhne, comercial) | 400 / 500 / 600 |
| Mono (números/dados) | **IBM Plex Mono** | Google Fonts | 400 / 500 |

- Base: **16px** · letter-spacing negativo nos headings (−0.02em)
- Números financeiros SEMPRE em IBM Plex Mono com `font-variant-numeric: tabular-nums`

### Escala

| Nível | Mobile | Desktop |
|---|---|---|
| H1 | 34px / 1.15 / 700 | 56px / 1.08 / 700 |
| H2 | 26px / 1.2 / 600 | 38px / 1.15 / 600 |
| H3 | 20px / 1.3 / 600 | 24px / 1.3 / 600 |
| Body | 16px / 1.65 | 17px / 1.7 |
| Small | 14px / 1.55 | 14px / 1.55 |
| Número-dado (mono) | 28px | 44px |

Receita fluida: `h1 { font-size: clamp(2.125rem, 1.4rem + 2.6vw, 3.5rem); }`

---

## 4. Espaçamento e grid

- **Base:** 8px · Escala: 4 / 8 / 16 / 24 / 40 / 64 / 96 / 128
- **Entre seções:** 64px (mobile) → 96px (tablet) → **128px (desktop)**
- **Container:** max-width **1160px** · texto corrido max **720px**
- **Grid:** 12 colunas **simétricas** (6/6, 4/4/4, 3/3/3/3). Única assimetria permitida: hero 55/45.

> Espaço em branco é ativo de marca: cortar conteúdo antes de cortar espaço.

## 5. Bordas, raios e sombras

- Raios: botões/inputs **8px** · cards **12px** · containers **16px** · badges **pill**
- Bordas hairline `1px #E3E8EF` substituem sombras pesadas (estética de extrato limpo)
- Sombras frias (base #0F1F35), de `0 1px 2px / 5%` a `0 16px 40px / 10%`
- Anel de foco: `0 0 0 3px rgba(22,160,133,.35)` — verde, visível em todos os interativos

## 6. Motion

Filosofia: **mínimo e determinístico** — a animação confirma ações e ordena a leitura.

| Animação | Duração | Trigger |
|---|---|---|
| fade-in-up | 300ms | reveal on scroll (12px + opacity, stagger 60ms) |
| fade-in | 300ms | carga do hero |
| button-hover | 200ms | hover/focus (escurece + seta desliza 2px) |
| card-lift | 200ms | hover (−2px + sombra) |
| number-settle | 450ms | reveal de métricas (sem counters longos) |
| underline-grow | 200ms | hover em links de nav |

`prefers-reduced-motion: reduce` desliga tudo — conteúdo aparece imediatamente.

---

## 7. Componentes

### Botões
- **Primário:** fundo navy #0F3460, texto branco (12.50:1), hover #1B2C4A, radius 8px, min 44px
- **Secundário:** outline 1.5px navy, hover #F6F9FC
- **Ghost/link:** verde-texto #0E7A65 com seta →, sublinhado cresce no hover
- Estados: default / hover / focus (anel verde) / active / disabled (#CBD5E1 + #64748B)

### Cards
- **Default:** branco, borda 1px, radius 12px, padding 32px, hover eleva −2px
- **Data card (assinatura do DS):** fundo #F6F9FC, label uppercase pequeno + número grande em IBM Plex Mono navy + delta verde #0E7A65
- **Feature card:** ícone geométrico SVG 40px + H3 + parágrafo + link ghost

### Inputs
- 48px de altura, borda #CBD5E1, radius 8px, label SEMPRE visível acima (nunca placeholder-como-label)
- Focus: borda navy + anel verde · Erro: borda #B42318 + mensagem 14px com ícone

### Hero
- Split **55/45**: texto (H1 + subhead + 2 CTAs + trust row de logos monocromáticos) à esquerda; ilustração geométrica SVG com card de dashboard flutuante à direita, sobre grid de linhas 1px #EDF2F7

### Navegação
- Navbar fixa branca 72px, borda inferior 1px aparece ao rolar
- Links Inter 500 15px #42526E → hover navy com sublinhado crescendo
- Mobile: painel branco de tela cheia, links grandes, CTA no rodapé do painel

### Depoimentos
- **Citação única em destaque** (não carrossel): aspas geométricas verdes, texto 22–24px, autor + cargo, e **métrica de resultado em mono ao lado** — prova social + prova numérica

### Footer
- Navy #0F3460, 4 colunas, links #B8C7DC (≈8.2:1), faixa legal com CNPJ e selos em IBM Plex Mono 12px

### Badges
- Pills discretas: fundo #F6F9FC borda 1px, texto 13px; variante verde #E6F5F1 / #0E7A65
- Uso: selos LGPD / PCI-DSS, status de integração

---

## 8. Composição (page flow)

1. **Navbar** fixa branca
2. **Hero** split 55/45 com ilustração geométrica + 2 CTAs + trust row
3. **Faixa de métricas** — 4 data cards em mono sobre #F6F9FC (prova imediata)
4. **Features** — 3 cards simétricos com ícones geométricos
5. **Como funciona** — diagrama horizontal SVG de 3 passos (nós e linhas navy/verde)
6. **Depoimento** único + métrica
7. **Planos/taxas** — 2-3 cards simétricos, números em mono, sem tabelão
8. **CTA final** — bloco navy de canto a canto + nota de compliance
9. **Footer** navy

**Imagem:** zero fotografia. Ilustração geométrica SVG, dashboards em CSS/SVG, diagramas.
**Densidade:** baixa — cada seção defende UMA ideia.

---

## 9. Voice & tone

**Tom:** claro, preciso, orientado a benefício. Fala com decisores B2B; cada frase entrega
informação verificável ou um próximo passo. Números sempre que possível.

**Headlines:**
- "Sua operação financeira, simplificada."
- "Receba em 1 dia útil. Concilie em 1 clique."
- "A infraestrutura de pagamentos que cresce com a sua empresa."
- "Menos planilha, mais decisão: seus números em tempo real."

**CTAs:**
- "Fale com um especialista"
- "Comece a integrar"
- "Ver taxas e prazos"
- "Agendar demonstração"

**Evitar:** superlativos vagos, urgência artificial, jargão sem tradução, tom brincalhão/emojis, promessa sem número.

---

## 10. Acessibilidade (resumo — ver accessibility-report.md)

- WCAG 2.1 **AA** verificado com razões reais (tabela na seção 2)
- Skip-link, foco visível verde 3px, tab na ordem visual, menu mobile com Escape + focus trap
- Ilustrações decorativas `aria-hidden`; diagramas informativos com descrição textual
- HTML semântico, um H1 por página, `<table>` real para taxas
- Alvos de toque ≥ 44px · `prefers-reduced-motion` respeitado

## 11. Benchmarking (resumo — ver benchmarking.md)

**Ideal para:** fintech, contabilidade digital, seguros, meios de pagamento, consultoria financeira.

**Fatores de conversão:** prova quantitativa logo após o hero; dois CTAs (decisor + integrador);
trust row + selos de compliance cedo; depoimento pareado com métrica; transparência de taxas;
baixa carga cognitiva.

**Core Web Vitals:** hero 100% texto+SVG (LCP < 1.8s alvo), viewBox fixo + fallback de fonte
(CLS < 0.05), JS mínimo (INP < 100ms).

---

## 12. Arquivos deste DS

```
04-tecnico-confiavel/design-systems/
├── json/04-2-fintech-confianca.json
├── previews/markdown/04-2-fintech-confianca.md   ← este arquivo
├── previews/html/04-2-fintech-confianca.html
└── docs/04-2-fintech-confianca/
    ├── components.md
    ├── animations.css
    ├── accessibility-report.md
    ├── benchmarking.md
    ├── color-variations.md
    └── responsive-guide.md
```

> **Lembrete de uso:** este DS é repertório de personalidade. Ao aplicar em um cliente real,
> derive a paleta e as ilustrações geométricas para a marca do cliente — nunca replique
> hex, headlines ou composição literalmente.
