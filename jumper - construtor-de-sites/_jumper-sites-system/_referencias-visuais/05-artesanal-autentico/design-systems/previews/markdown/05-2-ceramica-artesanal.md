# DS 05.2 — Cerâmica Artesanal

> **Categoria:** 05 — Artesanal e Autêntico
> **ID:** 05.2 · **Schema:** 2.0.0
> **Papel:** ds-base de personalidade — repertório, nunca molde

---

## 1. Essência

**Sensação-alvo:** *"handmade é storytelling — cada peça tem alma."*

Este DS trata o site como uma **revista de galeria**: fotografia moody de mãos no barro, peças em fundo escuro, whitespace de pedestal e um ritmo editorial de proporções variadas. O produto é objeto de coleção — o cliente compra a história tanto quanto o objeto. A composição-assinatura é um **grid magazine** que quebra alinhamentos de propósito, alternado com seções escuras (smoke) que funcionam como capítulos.

- **Mood:** matérico, escultural, moody, contemplativo, bruto, um-de-cada-vez
- **Público:** colecionadores, apreciadores de artesanato, decoradores, arquitetos de interiores
- **Palavras-chave:** matérico, escultural, moody, editorial, handmade, contemplativo

### Inspiração-base

| | |
|---|---|
| **Site** | [Farmhouse Pottery](https://farmhousepottery.com) — Woodstock, Vermont, EUA |
| **Fundação** | 2012, por James Zilian (ex-Simon Pearce, Maine College of Art) |
| **Prêmios** | Nenhum prêmio de design confirmado — usada como **referência estilística** |
| **Fatos confirmados** | Começou no porão da casa em Woodstock com um forno e duas rodas; loja física em 2014; filosofia farm-to-table e slow living |

**Por que essa referência:** a Farmhouse Pottery transforma o processo manual em narrativa central — fotografia moody de mãos no barro, peças em fundo escuro, texto contemplativo e ritmo de revista. É a essência ideal para negócios em que o produto tem alma e o cliente compra a história. Capturamos o **mood matérico e escultural**, nunca o layout literal.

> **Substituição de fontes:** a referência usa grotesca comercial (estilo Söhne) no corpo → substituída por **Inter** (Google Fonts). A voz display é a **Fraunces** — atenção: o DS 01.3 também usa Fraunces, mas com rosa antigo floral e pesos altos; aqui Fraunces trabalha em pesos leves (350–500), opsz alto, tracking apertado e mood escuro/matérico.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | **#9B6B47** | Terracota crua fosca — CTAs (texto branco), display grande, overlays. **Só texto grande** sobre claro |
| `primary_dark` | **#7A5236** | Terracota escurecida — texto normal, links, eyebrows sobre claro |
| `primary_light` | **#C89A76** | Terracota clara (barro seco) — **só sobre fundos escuros** (seções smoke) |
| `secondary` | **#4A4A48** | Preto-fumaça — texto de apoio forte, ícones, botões outline |
| `smoke_deep` | **#262523** | Preto-fumaça profundo — seções moody de página inteira, footer |
| `surface` | **#F5F0E8** | Fundo principal (off-white quente) |
| `surface_alt` | **#EDE5D8** | Seções alternadas |
| `text_primary` | **#2B2A28** | Corpo de texto |
| `text_secondary` | **#5C5A55** | Texto de apoio |
| `text_muted` | **#6B675D** | Legendas e placeholders |
| `text_on_dark` | **#F5F0E8** | Texto sobre fundos escuros |
| `border` | **#D8CFC0** | Bordas e divisores |
| `error` | **#8C3B2A** | Erros (barro queimado) |
| `success` | **#4E6147** | Sucesso (verde-oliva fosco) |
| `warning` | **#7A5A14** | Avisos (ocre) |

### Escala neutra (quente)

`50 #F9F6F0 · 100 #F5F0E8 · 200 #EDE5D8 · 300 #D8CFC0 · 400 #AFA79A · 500 #8A8378 · 600 #6B675D · 700 #4A4A48 · 800 #33322F · 900 #262523`

### Contraste verificado (WCAG 2.1)

| Combinação | Razão | Resultado |
|---|---|---|
| primary #9B6B47 / surface #F5F0E8 | **4.04:1** | ⚠️ só texto grande — usar `primary_dark` |
| branco / primary (botões) | **4.58:1** | ✅ AA texto normal |
| primary_dark #7A5236 / surface | **6.00:1** | ✅ AA texto normal |
| text_primary #2B2A28 / surface | **12.64:1** | ✅ AAA |
| text_secondary #5C5A55 / surface | **6.07:1** | ✅ AA |
| text_muted #6B675D / surface | **4.97:1** | ✅ AA |
| secondary #4A4A48 / surface | **7.83:1** | ✅ AAA |
| text_on_dark / smoke_deep #262523 | **13.50:1** | ✅ AAA |
| primary_light #C89A76 / smoke_deep | **6.08:1** | ✅ AA |
| error / surface | **6.67:1** | ✅ AA |
| success / surface | **5.92:1** | ✅ AA |
| warning / surface | **5.61:1** | ✅ AA |

**Ajustes documentados:** a terracota crua #9B6B47 do brief foi mantida como `primary`, mas rende só 4.04:1 sobre off-white — seu uso textual em fundo claro fica restrito a display/headings grandes. Para links, eyebrows e texto normal criou-se `primary_dark #7A5236` (6.00:1). Para fundos escuros criou-se `primary_light #C89A76` (6.08:1 sobre #262523), porque #9B6B47 sobre escuro dá só 3.35:1. Todos os valores pela fórmula de luminância relativa WCAG 2.1.

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Fallback |
|---|---|---|---|
| Headings | **Fraunces** 350–500 (opsz alto) | Google Fonts | Georgia, 'Times New Roman', serif |
| Body | **Inter** 400–600 | Google Fonts | -apple-system, 'Segoe UI', Arial, sans-serif |

> **Guarda de unicidade:** o DS 01.3 também usa Fraunces — mas com rosa antigo floral e pesos altos. Aqui Fraunces trabalha em pesos leves (380–400), opsz 72+, tracking apertado (−0.025em em H1) e mood escuro/matérico. Itálico permitido em palavras-destaque dentro de headlines; nunca bold pesado.

### Escala

| Elemento | Mobile | Desktop | Peso / LH |
|---|---|---|---|
| H1 | 40px | 72px | 380–400 / 1.02–1.08, ls −0.025em |
| H2 | 30px | 48px | 400 / 1.1–1.15, ls −0.02em |
| H3 | 22px | 28px | 500 / 1.25, ls −0.01em |
| Body | 16px | 17px | 400 / 1.65–1.7 |
| Small | 13px | 14px | 400 / 1.5 |
| Eyebrow | 12px | 13px | 600 / uppercase, ls 0.16–0.18em (Inter) |

**Fórmula fluida:** `clamp()` entre os polos — ex.: `h1 = clamp(2.5rem, 1.5rem + 4.2vw, 4.5rem)`.

### Estilos especiais

- **Numerais editoriais:** Fraunces itálico gigante (01, 02, 03) marcam capítulos do processo — 96–160px, primary com opacidade 0.9, sobre claro ou escuro conforme contraste de texto grande.

---

## 4. Espaçamento & Grid

- **Base:** 8px · escala `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 144`
- **Entre seções:** 64px (mobile) / 96px (tablet) / **144px (desktop)**
- **Container:** máx **1360px**; padding 20/40/64px
- **Coluna de leitura contemplativa:** máx 680px
- **Gutters:** 24px mobile / 32px tablet / **40px desktop** — gutters generosos reforçam o ritmo de revista
- **Grid:** 12 colunas; imagens ocupam 5, 7 ou 12 colunas com proporções variadas (3:4, 4:5, 1:1, 16:10) e offsets verticais entre colunas vizinhas
- **Ritmo:** whitespace assimétrico intencional — o vazio é material do design

## 5. Bordas, Raios & Sombras

- **Raios:** botões **0** (retos, tipográficos, sem pílulas), cards **0** (imagem sangrada + legenda abaixo), inputs **0** (borda inferior) ou `xs 2px`, imagens **0** no grid magazine
- **Raio orgânico:** `58% 42% 55% 45% / 52% 48% 55% 45%` — reservado para 1–2 destaques por página simulando silhueta de peça torneada
- **Sombras:** raras e difusas (base #262523, nunca preto puro). `xs`/`sm` só em nav sticky e cursor-dot; `md` em imagens destacadas no hover; `lg`/`xl` em modal. Profundidade vem de cor (seções smoke), não de sombra

## 6. Motion

| Token | Valor |
|---|---|
| Durações | 120 / 240 / 480 / **900 / 1200ms** |
| Easing padrão | `cubic-bezier(0.33, 1, 0.68, 1)` |
| Easing entrada | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Easing saída | `cubic-bezier(0.7, 0, 0.84, 0)` |
| Drift | `cubic-bezier(0.45, 0.05, 0.55, 0.95)` |

**Animações do DS:**

1. **reveal-up** (1200ms) — blocos sobem 32px com fade, stagger de 120ms, um por vez
2. **reveal-clip** (1200ms) — imagens revelam com clip-path inset de baixo para cima, como peça saindo do forno
3. **parallax-drift** (scroll-driven) — imagens deslocam no máx 6–8% da altura; formas SVG orgânicas a 0.3x da velocidade
4. **cursor-dot** (240ms, só pointer:fine) — ponto de 8px terracota que segue o mouse; expande para anel de 40px com rótulo "ver" sobre imagens clicáveis
5. **underline-ink** (480ms) — sublinhado cresce da esquerda como pincelada de engobe
6. **image-breathe** (900ms) — imagem escala 1.03 no hover; legenda desliza 4px
7. **numeral-fade** (1200ms) — numerais gigantes surgem com fade + tracking fechando de 0.1em para −0.02em

**`prefers-reduced-motion`:** reveals viram fade 200ms; parallax e cursor customizado totalmente desativados; cursor volta ao nativo.

---

## 7. Componentes

### Botões
Filosofia: **tipográficos e retos** — parecem impressos, não "clicáveis de software". Sem radius, sem sombra. Inter 600, uppercase, ls 0.12em.
- **Primary:** fundo #9B6B47, texto branco (4.58:1); hover #7A5236 + translateY(−1px); foco outline 2px #7A5236 offset 3px; disabled #D8CFC0
- **Secondary:** outline 1px #4A4A48; hover preenche #2B2A28 com texto claro
- **Ghost:** #7A5236, uppercase ls 0.14em, sublinhado animado (underline-ink)
- **On-dark:** fundo #C89A76, texto #262523 (6.08:1) — seções smoke
- Tamanhos: sm 40px / md 48px / lg 56px de altura mínima

### Cards
- **Piece card:** imagem **sangrada** (sem moldura) + legenda abaixo — nome em Fraunces 22px, apoio em Inter 14px muted, preço/nota 13px. A card é a própria imagem. Proporções variadas por posição (3:4, 4:5, 1:1, 16:10). Hover: image-breathe + legenda desloca 4px
- **Process card:** numeral Fraunces itálico gigante + H3 + parágrafo curto; fundo surface_alt ou smoke_deep alternando; padding 40px
- **Editorial card:** citação em Fraunces itálico 28px + autor em eyebrow — depoimentos sobre smoke_deep

### Inputs
Estilo **editorial**: sem caixa, borda inferior 1px #4A4A48, fundo transparente, padding vertical 14px, 48px de altura mínima. Label em eyebrow (Inter 12px uppercase). Foco: borda inferior 2px #7A5236 + label muda de cor; sem glow. Erro: borda inferior 2px #8C3B2A + mensagem ligada por `aria-describedby`.

### Hero
**Split assimétrico 5/7:** coluna esquerda (5) com eyebrow + H1 Fraunces 380 (uma palavra em itálico) + parágrafo + CTA duplo; coluna direita (7) imagem moody sangrando até a borda, mais alta que a dobra. Variante interna: hero full-smoke com peça em border-radius orgânico. CTAs: "Explorar a coleção" (primário) + "Conheça o ateliê" (ghost).

### Navegação
Topbar minimalista: wordmark Fraunces à esquerda, 4–5 links Inter uppercase 13px, CTA ghost. Transparente sobre o hero → sticky com `rgba(245,240,232,0.92)` + blur 12px ao rolar. Mobile: overlay full-screen smoke_deep com links Fraunces 32px e reveal escalonado.

### Depoimentos
Editorial card: citação grande Fraunces itálico sobre smoke_deep, sem carrossel automático — navegação manual por setas com `aria-label`. Atribuição em eyebrow terracota clara #C89A76 ("colecionadora, São Paulo").

### Badges
Selo tipográfico: borda 1px, uppercase Inter 11px ls 0.16em, sem fundo — "FEITO À MÃO", "PEÇA ÚNICA", "PEQUENOS LOTES", "ESGOTADO". Esgotado em #6B675D; destaque em #7A5236.

### Footer
4 colunas sobre #262523: história curta do ateliê, navegação, visitas/endereço, newsletter editorial. Assinatura final com frase-manifesto em Fraunces itálico. Legal em Inter 12px `rgba(245,240,232,0.64)` (mínimo 4.5:1 verificado).

---

## 8. Voz & Tom

**Tom:** contemplativo e material — fala de barro, fogo, tempo e mãos; frases curtas, presente do indicativo, zero urgência artificial. A marca narra o processo em vez de vender atributos.

**Headlines:**
- "Feito à mão, um de cada vez."
- "O barro lembra de cada gesto."
- "Peças que carregam o tempo do forno."
- "Da roda para a sua mesa, sem pressa."

**CTAs:** "Explorar a coleção" · "Conheça o ateliê" · "Ver o processo" · "Reservar peça única" · "Agendar visita ao ateliê"

**Microcopy:** "Cada peça varia levemente — é assim que deve ser." · "Lote de outubro: 18 peças torneadas." · "Enviamos com dupla proteção e carinho de quem fez."

**Evitar:** urgência de e-commerce ("últimas unidades!"), jargão de marketing ("qualidade premium"), exclamações em série e emojis, linguagem industrial ("linha de produção"), diminutivos fofos — o tom é sóbrio, não meigo.

---

## 9. Composição (assinatura do DS)

**Padrão-assinatura: grid magazine de proporções variadas + capítulos escuros (smoke) + cursor customizado.**

```
[nav minimalista transparente → sticky com blur]
[HERO split 5/7 — texto esq. + imagem moody sangrada dir.]
[MANIFESTO — faixa smoke_deep, frase única Fraunces 48px creme, pausa contemplativa]
[COLEÇÃO — grid magazine 2–3 col, proporções mistas, offsets verticais, cards sem moldura]
[PROCESSO — sequência numerada 01–04, numerais gigantes, alterna claro/escuro, parallax sutil]
[ATELIÊ — 2 col: texto contemplativo (680px) + imagem 4:5 com raio orgânico]
[DEPOIMENTO — editorial card sobre smoke_deep]
[VISITA / CTA final — endereço, horários, CTA primário; tom de porta aberta, não checkout]
[FOOTER smoke_deep — 4 colunas + assinatura-manifesto]
```

**Tratamento de imagem:** fotografia moody — fundos escuros, luz lateral única, mãos trabalhando, barro cru em macro. Nos previews, simulado com gradientes profundos (smoke→terracota), grain via `feTurbulence` e silhuetas orgânicas de peças em SVG inline. Proporções sempre variadas — nunca grade uniforme de quadrados.

**Densidade:** baixa — cada peça com espaço de galeria. **Whitespace:** generoso e assimétrico; o vazio funciona como pedestal. Seções escuras criam capítulos e ritmo de revista impressa.

---

## 10. Acessibilidade (resumo)

- WCAG 2.1 **AA** verificado com razões reais (seção 2)
- Skip-link "Ir para o conteúdo", focus trap no menu mobile, Esc fecha overlays
- Foco visível: outline 2px #7A5236 (claro) / #C89A76 (escuro), offset 3px
- **Cursor customizado é decorativo** (`pointer-events: none`); nunca substitui o nativo funcionalmente
- Imagens de peça descrevem material, técnica e cor ("Vaso torneado em argila vermelha sem esmalte, 24cm"); formas SVG e grain com `aria-hidden`
- Alvos de toque ≥ 44px (botões md/lg ≥48px); `prefers-reduced-motion` implementado
- Relatório completo: `docs/05-2-ceramica-artesanal/accessibility-report.md`

## 11. Diferenciação obrigatória

| DS | Paleta | Fonte | Composição |
|---|---|---|---|
| **05.2 (este)** | #9B6B47 + #4A4A48 (terracota crua + fumaça) | Fraunces + Inter | grid magazine + capítulos smoke + cursor customizado |
| 05.1 Café | #8B5E3C + #2F5233 (café + musgo) | Cormorant Garamond | narrativa vertical em capítulos numerados |
| 05.3 Padaria | #C19A6B + #8B7355 (dourado-grão) | Newsreader | timeline educativa, hero split 5/7 |
| 01.1 Padaria acolhedora | terracota #B85C38 | Lora | aconchegante |
| 02.3 Hotel de luxo | marrom queimado #2A1F14 + ouro | — | luxo |
| 01.3 (outra personalidade) | rosa antigo floral | Fraunces (pesos altos) | floral |

Nenhum HEX compartilhado; a Fraunces reaparece apenas em mood oposto ao 01.3.

## 12. Segmentos ideais

Cerâmica e ateliês de olaria · marcenaria autoral · joalheria autoral / ourivesaria · ateliê de arte e objeto · brechó curado / garimpo de design · vidraria e sopro artesanal.

**Fatores de conversão:** ver `docs/05-2-ceramica-artesanal/benchmarking.md`.
