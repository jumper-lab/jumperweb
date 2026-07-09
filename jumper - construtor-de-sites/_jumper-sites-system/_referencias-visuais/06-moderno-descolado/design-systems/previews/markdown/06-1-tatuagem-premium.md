# DS 06.1 — Estúdio de Tatuagem Premium

> **Categoria:** 06 — Moderno e Descolado
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Mood em uma frase:** galeria de fine art noturna — preto absoluto, fotografia B&W de flash duro, um único brilho dourado.

---

## 1. Inspiração

| Campo | Valor |
|---|---|
| Site base | [Skullfactory Tattoo](https://skullfactory.de) — Schriesheim, Alemanha |
| Reconhecimento | Awwwards **Nominee** (site desenvolvido por ELBKOPF) |
| Referência secundária | [La Tatuajería](https://latatuajeria.com) — referência estilística (ritmo contemplativo, portfolio editorial); sem prêmios confirmados |
| Fonte da referência | PP Editorial New (comercial) → substituída por **Playfair Display** (Google Fonts) |

**Por que foi escolhida:** a Skullfactory trata tatuagem como fine art — fundo preto total, fotografia B&W de altíssimo contraste, portfolio como galeria e não como grid de serviços. A La Tatuajería soma o respiro editorial entre as peças. A essência capturada: **"tatuagem é arte"** — o site se comporta como uma galeria noturna onde cada trabalho recebe moldura, silêncio e um único destaque dourado.

**O que NÃO copiamos:** layout pixel-a-pixel, textos, estrutura exata de navegação. Capturamos mood, ritmo e hierarquia.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#0A0A0A` | Preto absoluto — fundo dominante de TODAS as seções (dark é o modo primário) |
| `secondary` | `#FFE600` | Dourado vintage — o ÚNICO acento; uso cirúrgico |
| `surface` | `#0A0A0A` | Fundo base |
| `surface_alt` | `#141414` | Seções alternadas, cards, depoimento |
| `text_primary` | `#FFFFFF` | Texto principal |
| `text_secondary` | `#B3B3B3` | Texto de apoio |
| `text_muted` | `#8C8C8C` | Legendas, metadados |
| `border` | `#2B2B2B` | Molduras hairline 1px |
| `error` | `#FF6B6B` | Erros de formulário |
| `success` | `#3EE07F` | Confirmações |
| `warning` | `#FFC94D` | Avisos |

### Escala neutra

`50 #FAFAFA · 100 #F0F0F0 · 200 #D9D9D9 · 300 #B3B3B3 · 400 #8C8C8C · 500 #666666 · 600 #404040 · 700 #2B2B2B · 800 #141414 · 900 #0A0A0A`

### Contraste verificado (WCAG 2.1)

| Combinação | Razão | Resultado |
|---|---|---|
| #FFFFFF sobre #0A0A0A | **19.80:1** | AAA |
| #FFE600 sobre #0A0A0A | **15.62:1** | AAA |
| #0A0A0A sobre #FFE600 (CTA) | **15.62:1** | AAA |
| #B3B3B3 sobre #0A0A0A | **9.44:1** | AAA |
| #8C8C8C sobre #0A0A0A | **5.89:1** | AA |
| #FF6B6B sobre #0A0A0A | **7.13:1** | AA |
| #3EE07F sobre #0A0A0A | **11.48:1** | AAA |
| #FFE600 sobre #FFFFFF | **1.27:1** | ❌ REPROVADO |

**Regra dura do dourado:** `#FFE600` só vive no escuro. Jamais como texto/ícone informativo sobre fundo claro. Em blocos brancos invertidos, o acento informativo vira `#0A0A0A` ou o dourado escurecido `#8A7A00` (5.02:1 sobre branco).

**Regras de proporção:** ~92% preto, ~6% branco (texto), ~2% dourado. O dourado aparece em: sublinhados de headline, numeração `№` da galeria, foco de teclado, CTA primário e micro-detalhes. Nunca em blocos grandes ou fundos de seção.

---

## 3. Tipografia

| Papel | Fonte | Fonte da referência | Pesos |
|---|---|---|---|
| Headings | **Playfair Display** (Google Fonts) | PP Editorial New (comercial — substituída) | 700 / 800 / 900 / **900 italic** |
| Body | **Space Grotesk** (Google Fonts) | — | 300 / 400 / 500 / 700 |

**Assinatura tipográfica:** uma palavra do headline em *itálico* com sublinhado dourado SVG desenhado à mão. Etiquetas de galeria em Space Grotesk 500, 12px, uppercase, `letter-spacing: 0.24em`.

### Escala

| Elemento | Mobile | Desktop | Detalhes |
|---|---|---|---|
| H1 | 44px / 1.02 | 96px / 0.98 | Playfair 900 · `clamp(44px, 11vw, 96px)` · até 120px em 1600px+ |
| H2 | 32px / 1.08 | 56px / 1.05 | Playfair 800 |
| H3 | 22px / 1.2 | 30px / 1.15 | Playfair 700 |
| Body | 16px / 1.7 | 17px / 1.75 | Space Grotesk 400 |
| Small | 13px / 1.5 | 13px / 1.5 | Space Grotesk 400 |

Fallbacks: `'Playfair Display', Georgia, 'Times New Roman', serif` · `'Space Grotesk', 'Helvetica Neue', Arial, sans-serif`.

---

## 4. Espaçamento e grid

- **Base:** 8px · Escala: xs 4 / sm 8 / md 16 / lg 24 / xl 40 / xxl 64 / xxxl 104 / xxxxl 160
- **Entre seções:** 88px mobile · 120px tablet · **160px desktop** (ritmo contemplativo é personalidade — nunca comprimir)
- **Container:** max 1440px · padding 20/40/64px
- **Grid:** 12 colunas assimétricas controladas — galeria alterna peças em 5, 6 e 7 colunas com offsets verticais de 80–120px (desalinhamento *curatorial*, não caótico — caos extremo é do 06.2)

---

## 5. Bordas, molduras e sombras

- **Radius 0px em tudo** (botões, cards, inputs, imagens) — a suavidade vem do motion, não do raio. Única exceção: badge pill (999px).
- **Detalhe-assinatura:** moldura dupla de quadro — borda externa 1px `#2B2B2B` + offset interno 12px; no hover a moldura interna vira dourada.
- **Sombras:** quase invisíveis sobre preto; profundidade vem de `#141414` e das molduras. `glow_gold` (`0 0 0 1px rgba(255,230,0,.4), 0 0 32px rgba(255,230,0,.12)`) reservado para foco e hover do CTA.

---

## 6. Motion (ousado, cinematográfico)

| Animação | Duração | Trigger | Descrição |
|---|---|---|---|
| `curtain-reveal` | 1200ms | troca de página | Cortina preta sobe revelando a nova página — assinatura do DS |
| `gallery-reveal` | 950ms | scroll | Peça entra com clip-path de baixo pra cima + scale 1.06→1 |
| `hero-line-stagger` | 950ms | load | Linhas do H1 sobem uma a uma (stagger 120ms) |
| `scale-hover` | 650ms | hover na peça | Imagem escala 1.05 dentro da moldura fixa |
| `glitch-subtle` | 350ms | hover em nav | Micro-deslocamento 1–2px, 1 disparo, nunca loop |
| `gold-underline` | 350ms | hover/focus em link | Sublinhado dourado cresce da esquerda |
| `flash-blink` | 120ms | clique no CTA | Flash branco — referência ao flash duro de estúdio |

**Easings:** `out_expo cubic-bezier(0.16,1,0.3,1)` · `in_out_cine cubic-bezier(0.83,0,0.17,1)` · `sharp cubic-bezier(0.4,0,0.2,1)`

**`prefers-reduced-motion`:** tudo cai para fade 200ms; glitch, scale e cortina desativados.

---

## 7. Componentes (resumo)

- **Botão primário:** fundo `#FFE600`, texto `#0A0A0A`, reto, uppercase tracking 0.14em; hover vira branco + glow dourado; disabled `#2B2B2B`/`#666`.
- **Botão secundário:** outline branco 1px; hover borda e texto dourados.
- **Ghost:** seta → + gold-underline (usado em "ver obra").
- **Card de galeria:** moldura dupla, imagem B&W 4:5 `grayscale(1) contrast(1.15)`, numeração `№ 04` dourada, legenda serif + metadados muted.
- **Input editorial:** underline only — fundo transparente, `border-bottom 1px #404040`; foco = 2px dourado; erro = 2px `#FF6B6B`; altura 56px.
- **Nav desktop:** topbar transparente 88px sobre o hero; ao rolar ganha `rgba(10,10,10,.9)` + blur + hairline.
- **Nav mobile:** menu fullscreen com links Playfair 40px numerados em dourado, entrada com stagger.
- **Depoimento:** citação única full-bleed em `#141414`, aspas Playfair italic 120px douradas, sem carrossel apertado.
- **Footer:** headline-convite serif gigante + colunas de contato + barra legal; asterisco SVG dourado como assinatura.
- **Badge:** pill outline dourado, máx. 1 por seção ("agenda aberta", "flash day").

Código pronto em [`docs/06-1-tatuagem-premium/components.md`](../../docs/06-1-tatuagem-premium/components.md).

---

## 8. Composição (page flow)

1. **Hero** — full-viewport, título na base à esquerda, peça B&W sangrada à direita
2. **Manifesto** — parágrafo grande centralizado (720px), itálicos com sublinhado dourado
3. **Galeria** — peças em colunas alternadas com offsets verticais, numeração `№`, 160px entre grupos
4. **Artistas** — grid 3 colunas de retratos B&W sobre `#141414`
5. **Processo** — 4 passos em linha do tempo horizontal, números Playfair italic gigantes
6. **Depoimento** — citação única full-bleed
7. **Estúdio** — faixa de blocos B&W + endereço/mapa escuro
8. **CTA final** — headline gigante + botão dourado + muito espaço negativo
9. **Footer**

**Tratamento de imagem:** B&W de alto contraste simulando flash duro — `grayscale(1) contrast(1.15) brightness(1.05)`, pretos esmagados fundindo com o fundo. Nunca cor, nunca filtro quente.

---

## 9. Voice & Tone (PT-BR)

**Tom:** confiante, artístico, direto. Fala como curador de galeria, não como vendedor. Vocabulário de arte: peça, traço, composição, sessão, acervo.

**Headlines:**
- "Sua pele, nossa tela."
- "Cada traço é uma decisão. Cada peça, um original."
- "Arte que você não pendura. Você veste."
- "O estúdio onde a tinta vira acervo."

**CTAs:** "Agende sua sessão" · "Ver portfolio completo" · "Conhecer os artistas" · "Reservar horário de consulta"

**Microcopy:** "Orçamento sem compromisso — resposta em até 48h." · "Biossegurança certificada. Materiais descartáveis, sempre." · "Traga sua ideia. A composição a gente constrói junto."

**Evitar:** urgência clichê ("últimas vagas!"), estética caveira-e-fogo anos 2000, diminutivos, excesso de exclamação/emoji, jargão sem tradução.

---

## 10. Diferenciação dos irmãos (crítico — todos são dark)

| | **06.1 Tatuagem** (este) | 06.2 Streetwear | 06.3 Agência Criativa |
|---|---|---|---|
| Mood | **Galeria B&W editorial** | Ruído urbano | Narrativa cênica |
| Acento | Dourado vintage `#FFE600` | Lime neon `#00FF41` | Roxo elétrico `#9D4EDD` |
| Heading | Playfair Display 900/italic (serif drama) | Archivo Black gigante | DM Serif Display experimental |
| Body | Space Grotesk | JetBrains Mono | — |
| Grid | Assimetria curatorial + molduras | Grid quebrado extremo + scroll horizontal | Full-screen storytelling |
| Ritmo | Contemplativo, 160px de respiro | Frenético | Cênico por capítulos |

---

## 11. Acessibilidade e qualidade

- WCAG 2.1 **AA** verificado com razões reais (ver tabela de contraste)
- Foco visível dourado 2px em todos os interativos (`:focus-visible`)
- Skip-link, focus-trap no menu mobile, Esc fecha overlay
- Alt text descritivo obrigatório nas peças (portfolio É o conteúdo)
- Touch targets ≥ 44px (botões 52–60px)
- `prefers-reduced-motion` em 100% das animações
- Performance: LCP < 2.5s (hero tipográfico sem raster pesado), CLS < 0.1 (aspect-ratio fixo), INP < 200ms (animações compositor-only)

**Segmentos ideais:** estúdio de tatuagem premium, barbearia premium, piercing studio, galeria de arte/atelier, tatuador independente.

---

## 12. Arquivos deste DS

- `json/06-1-tatuagem-premium.json` — fonte da verdade
- `previews/html/06-1-tatuagem-premium.html` — preview interativo offline
- `docs/06-1-tatuagem-premium/components.md` — code samples
- `docs/06-1-tatuagem-premium/animations.css` — CSS de motion completo
- `docs/06-1-tatuagem-premium/accessibility-report.md` — auditoria WCAG
- `docs/06-1-tatuagem-premium/benchmarking.md` — conversão + performance
- `docs/06-1-tatuagem-premium/color-variations.md` — 5 variações de paleta
- `docs/06-1-tatuagem-premium/responsive-guide.md` — breakpoints e CSS fluido
