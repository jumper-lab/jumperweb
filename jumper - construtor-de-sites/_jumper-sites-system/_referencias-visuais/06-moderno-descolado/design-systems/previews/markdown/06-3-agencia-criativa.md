# DS 06.3 — Agência Criativa / Gravadora

> **Categoria:** 06 — Moderno e Descolado
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0
> **Mood em uma frase:** narrativa cinematográfica — preto profundo como palco, tipografia serifada gigante como imagem, um único raio de luz roxo elétrico que conduz a história pelo scroll.

---

## Essência

O site é um **filme**. O scroll é a montagem. O preto `#0A0A0A` é o palco escuro; a narrativa acontece por luz (roxo elétrico) e por tipografia serifada gigante usada como imagem. Cada seção é um **capítulo full-screen** — uma ideia por tela, nunca duas mensagens competindo. O glitch entra como pontuação rara, jamais como ruído constante.

Aqui a agência **não pede, afirma**. O hero não tem CTA: a história pede o scroll, e a conversão acontece no clímax (CTA final), quando o visitante já viu a prova de trabalho.

**Sensação-alvo:** autoridade por seleção e visão. Storytelling cênico, não catálogo.

---

## 1. Inspiração

| Campo | Valor |
|---|---|
| Referência estilística | Cena de agências criativas experimentais Awwwards (ex.: Obys Agency e estúdios de tipografia experimental) |
| URL | [obys.agency](https://obys.agency) — referência estilística |
| Origem | Cena internacional (Europa/EUA) |
| Reconhecimento | Estúdios desse circuito são recorrentemente destacados na Awwwards (SOTD / coleções de tipografia experimental); **nenhum prêmio específico com data/nota é reivindicado** |
| Fonte da referência | Migra (comercial) → substituída por **DM Serif Display** (Google Fonts) |

**Por que foi escolhida:** a cena de agências criativas premium comunica criatividade quebrando padrões — tipografia serifada gigante usada como imagem, seções full-screen em que o scroll conta uma história, e glitch/distorção como pontuação, nunca como ruído constante. A essência capturada é a **narrativa** e o **preto profundo com um único acento cromático** (aqui, roxo elétrico).

**O que NÃO copiamos:** layout pixel-a-pixel, textos, estrutura de nenhum site. Capturamos mood narrativo, ritmo cênico e hierarquia.

**Substituição de fonte:** a referência usa **Migra** (comercial). Substituição oficial Google Fonts: **DM Serif Display** — serifada display de alto contraste, dramática em corpos gigantes.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#0A0A0A` | Preto profundo — fundo dominante do site inteiro (dark-first). O preto é o palco |
| `secondary` | `#9D4EDD` | Roxo elétrico — o ÚNICO acento; CTAs, palavras destacadas, linha de progresso, glitch |
| `accent_text` | `#C77DFF` | Tint do roxo para texto normal e links sobre preto (7.36:1) |
| `surface` | `#0A0A0A` | Base |
| `surface_alt` | `#141419` | Painéis de trabalho, cards |
| `surface_raised` | `#1B1B22` | Cards elevados sobre surface_alt |
| `text_primary` | `#F5F3F7` | Texto principal (branco levemente lavanda) |
| `text_secondary` | `#A9A9B8` | Texto de apoio |
| `text_muted` | `#78788A` | Legendas, metadados |
| `border` | `#2A2A33` | Divisores, molduras 1px, numerais outline |
| `error` | `#FF6B6B` | Erros de formulário |
| `success` | `#34D399` | Confirmações |
| `warning` | `#FBBF24` | Avisos |

### Escala neutra

`50 #F5F3F7 · 100 #E4E2EA · 200 #C6C4D0 · 300 #A9A9B8 · 400 #8D8D9E · 500 #78788A · 600 #55555F · 700 #2A2A33 · 800 #141419 · 900 #0A0A0A`

### Escala roxa (purple_scale)

`100 #EBD9FB · 200 #DDBDF8 · 300 #C77DFF · 400 #B15EF0 · 500 #9D4EDD · 600 #7B2CBF · 700 #5A189A · 800 #3C0E68 · 900 #240046`

### Contraste verificado (WCAG 2.1)

| Combinação | Razão | Resultado |
|---|---|---|
| #F5F3F7 sobre #0A0A0A | **18.1:1** | AAA (qualquer tamanho) |
| #A9A9B8 sobre #0A0A0A | **8.5:1** | AAA texto normal |
| #78788A sobre #0A0A0A | **4.6:1** | AA texto normal (só legendas/meta) |
| #C77DFF sobre #0A0A0A | **7.36:1** | AA/AAA texto normal — roxo oficial de links |
| #9D4EDD sobre #0A0A0A | **4.31:1** | AA só texto grande (≥24px / ≥18.66px bold) e UI |
| #FFFFFF sobre #9D4EDD | **4.60:1** | AA — texto de botão primário |
| #0A0A0A sobre #9D4EDD | **4.31:1** | Apenas texto grande |

**Regra dura do roxo:** `#9D4EDD` puro **NÃO** entra em texto corrido (4.31:1 falha AA para texto normal). Para links e corpo destacado use o tint `#C77DFF` (7.36:1). O `#9D4EDD` fica reservado a superfícies, texto grande (≥24px), componentes de UI e o flash de glitch. Botões roxos usam **texto branco** (4.60:1), nunca preto em tamanhos pequenos.

**Regras de proporção:** ~90% preto, ~7% texto claro, ~3% roxo. O roxo aparece como luz pontual — aura atrás do hero, linha de progresso do scroll, palavra destacada, hover, glow do CTA final.

---

## 3. Tipografia

| Papel | Fonte | Fonte da referência | Peso |
|---|---|---|---|
| Headings | **DM Serif Display** (Google Fonts) | Migra (comercial — substituída) | 400 |
| Body / meta | **Space Grotesk** (Google Fonts) | — | 400 / 500 |

DM Serif Display é serifada de alto contraste, dramática em corpos gigantes — a tipografia É a imagem. O body Space Grotesk repete o do DS 06.1 por decisão de brief; a diferenciação vem do heading serifado gigante, da paleta roxa e da composição full-screen narrativa. Metadados/eyebrows usam Space Grotesk em caps com `letter-spacing`. Sem monospace.

**Assinatura tipográfica:** headline de hero em 3 linhas quebradas intencionalmente, com **uma palavra-chave em roxo itálico**; numerais gigantes de capítulo (`01`, `02`, `03`) como grafismo de fundo em outline (`-webkit-text-stroke 1px #2A2A33`).

### Escala

| Elemento | Mobile | Desktop | Detalhes |
|---|---|---|---|
| H1 | clamp(3rem, 14vw, 4.5rem) / 0.95 | clamp(4.5rem, 10vw, 10rem) / 0.9 | DM Serif Display · ls -0.02/-0.03em · tipografia como imagem |
| H2 | 2.25rem / 1.05 | clamp(2.5rem, 5vw, 4.5rem) / 1.0 | DM Serif Display |
| H3 | 1.5rem / 1.15 | 1.875rem / 1.1 | DM Serif Display |
| Body | 1rem / 1.6 | 1.125rem / 1.65 | Space Grotesk 400 |
| Small | 0.8125rem / 1.5 | 0.875rem / 1.5 | Space Grotesk 500 · uppercase · ls 0.08–0.1em |

**Especiais:**
- **Manifesto:** `clamp(1.75rem, 4vw, 3.25rem)` / 1.25 — texto em tela cheia; palavras acendem em roxo conforme o scroll.
- **Chapter number:** `clamp(5rem, 12vw, 12rem)` / 1 — numerais 01/02/03 transparentes com `-webkit-text-stroke 1px #2A2A33`, elemento gráfico de fundo.

Fallbacks: `'DM Serif Display', 'Didot', Georgia, serif` · `'Space Grotesk', 'Helvetica Neue', Arial, sans-serif`.

---

## 4. Espaçamento e grid

- **Base:** 8px · Escala: xs 8 / sm 16 / md 24 / lg 40 / xl 64 / xxl 96 / xxxl 144 / xxxxl 192
- **Entre seções:** 96px mobile · 128px tablet · **160px desktop** — mas as seções-capítulo são full-screen (`min-height: 100vh`) e o espaçamento vive DENTRO delas
- **Container:** max 1440px · padding 20/48/80px · headlines gigantes podem escapar para 100vw
- **Gutters:** 24px mobile / 32px desktop
- **Grid:** 12 colunas fluidas até 1440px — as seções-capítulo **ignoram o grid de propósito**: headlines sangram, numerais vazam da margem. Assimetria controlada — cada capítulo alterna o lado do conteúdo (esquerda, direita, centro).

---

## 5. Bordas, molduras e sombras

- **Radius:** none 0 / sm 2px / md 4px / lg 8px / **full 9999px**
- **Botões = pílulas full (9999px)** — pílulas cinematográficas que contrastam com a dureza do grid. **Cards, inputs e imagens = 0px** (frames de filme, sem moldura).
- **Strokes:** thin 1px `#2A2A33` · medium 2px `#9D4EDD`.
- **Sombras:** em site dark, sombra pura quase não lê — a elevação usa **GLOW roxo**:
  - `glow_sm`: `0 0 16px rgba(157,78,221,0.35)` — hover de botões
  - `glow_md`: `0 0 40px rgba(157,78,221,0.45)` — CTA final
  - `glow_lg`: `0 0 80px rgba(157,78,221,0.35)` — aura atmosférica atrás das headlines do hero
  - Sombras pretas (sm/md/lg) só para cards elevados sobre `#141419`.

---

## 6. Motion (cinematográfico, ousado)

| Animação | Duração | Trigger | Descrição |
|---|---|---|---|
| `hero-line-reveal` | 1200ms | load | Cada linha da headline sobe de uma máscara (overflow hidden + translateY 110%), stagger 120ms |
| `scroll-progress` | contínua | scroll | Linha roxa 2px no topo indica progresso da narrativa |
| `manifesto-ink` | por palavra | scroll | Palavras passam de muted para claro/roxo ao entrar no centro do viewport |
| `chapter-parallax` | contínua | scroll | Numerais gigantes movem-se 20% mais lentos que o conteúdo |
| `panel-tilt-3d` | 480ms | hover | Painéis inclinam em perspective(900px) rotateX/rotateY até 4deg seguindo o cursor |
| `glitch-flash` | 480ms | hover em link de projeto / CTA final | Distorção pontual — clip-path fatiado + RGB split roxo/branco por 2 frames. Máx. 2 elementos/página |
| `page-transition` | 800ms | navegação | Cortina `#9D4EDD` sobe (scaleY 0→1 origem base), troca de rota, revela (origem topo) |
| `marquee-contact` | 18s | sempre no pré-footer | "Vamos criar juntos —" rolando; pausa em hover e em reduced-motion |
| `button-magnet` | 240ms | hover | Botão-pílula desloca até 6px em direção ao cursor + glow_sm |

**Durações:** instant 120ms · fast 240ms · base 480ms · slow 800ms · cinematic 1200ms · epic 1600ms
**Easings:** `standard cubic-bezier(0.4,0,0.2,1)` · `dramatic cubic-bezier(0.76,0,0.24,1)` · `reveal cubic-bezier(0.16,1,0.3,1)` · `snap cubic-bezier(0.87,0,0.13,1)`

**`prefers-reduced-motion`:** bloco completo — todas as animações e transições viram 0.01ms; parallax e tilt 3D desativados; marquee vira texto estático centrado; page transition vira crossfade de 150ms; reveals aparecem já no estado final. **O conteúdo NUNCA depende de animação para existir.**

---

## 7. Componentes (resumo)

- **Botão primário:** pílula full, fundo `#9D4EDD`, texto **branco**, Space Grotesk 500. Hover: `#B15EF0` + glow_sm + deslocamento magnético até 6px. Focus: outline 2px `#C77DFF` offset 3px. Active: `#7B2CBF` scale(0.98). Disabled: `#2A2A33`/`#78788A`.
- **Botão secundário:** pílula transparente, borda 1px `#2A2A33`, texto `#F5F3F7`. Hover: borda `#9D4EDD`, texto `#C77DFF`.
- **Ghost arrow:** link `#C77DFF` com seta → que desliza 8px e underline roxo animado (scaleX 0→1).
- **Work panel:** `#141419`, radius 0, borda 1px `#2A2A33`, imagem duotone preto→roxo 16:10, eyebrow small caps, título H3 serif, metadados muted. Hover: tilt 3D até 4deg, imagem scale 1.04, borda roxa, glitch-flash pontual no título. `focus-within`: borda 2px `#C77DFF`.
- **Chapter block:** numeral gigante outline ao fundo + H2 + parágrafo máx 60ch; `min-height 100vh` centrado verticalmente.
- **Input editorial:** transparente, apenas `border-bottom 1px #2A2A33`, label small caps sempre visível acima (nunca placeholder-only). Focus: base 2px `#9D4EDD` + label vira `#C77DFF`. Erro: base 2px `#FF6B6B` + mensagem com `aria-describedby`.
- **Hero:** full-screen, headline serif em 3 linhas, uma palavra em roxo itálico, aura radial roxa (glow_lg) desfocada atrás. Eyebrow acima, indicador de scroll abaixo. **SEM botão** — a história pede o scroll.
- **Nav:** barra fixa transparente que ganha `rgba(10,10,10,0.85)` + backdrop-blur após 80px de scroll. Wordmark DM Serif. Mobile: hambúrguer 48×48 abre overlay full-screen com links DM Serif 2.5rem em stagger, focus trap, Esc fecha.
- **Depoimento:** UM por tela — citação DM Serif `clamp(1.75rem,3.5vw,3rem)` centrada, aspas gigantes outline roxo, autor small caps. Sem grade de cards.
- **Footer:** pré-footer com marquee "Vamos criar juntos —" clicável; grid 3 colunas (wordmark + manifesto | navegação | social/e-mail). E-mail em H3 serif como CTA secundário.
- **Badge (tag chip):** small caps 0.75rem, borda 1px, pílula full, `#A9A9B8`; hover borda roxa — disciplinas (Branding, Filme, Digital). Sem selos de prêmio genéricos.

Código pronto em [`docs/06-3-agencia-criativa/components.md`](../../docs/06-3-agencia-criativa/components.md).

---

## 8. Composição (page flow)

1. **Hero** — full-screen, headline gigante centrada-esquerda, aura roxa, indicador de scroll; **sem CTA**
2. **Manifesto** — full-screen, texto grande centrado com palavras que acendem no scroll (a "sinopse do filme")
3. **Trabalhos (capítulo 01)** — painéis em coluna com alturas alternadas (um sangrado à esquerda, o próximo à direita), ~80vh cada, tilt 3D no hover
4. **Processo (capítulo 02)** — três chapter_blocks full-screen sequenciais, numerais 01/02/03 outline em parallax, texto máx 60ch
5. **Depoimento (capítulo 03)** — uma citação por tela, cinematográfica, centrada
6. **CTA final** — full-screen: "Vamos criar juntos" em DM Serif gigante com glitch-flash no hover + botão primário lg; aura glow_md
7. **Footer** — marquee de contato + grid 3 colunas

**Tratamento de imagem:** duotone preto→roxo em todas as imagens de projeto (overlay gradiente ou `grayscale` + `mix-blend-mode: screen` roxo). Fotos nunca aparecem cruas — passam pela "grade de cor" da marca, como um filme com fotografia própria. Em previews sem foto: gradientes radiais roxos, formas SVG e blocos duotone.

**Densidade:** baixíssima — uma ideia por tela. **Whitespace extremo e vertical:** o vazio preto É o recurso dramático; respiros de 100vh entre atos são aceitáveis.

---

## 9. Voice & Tone (PT-BR)

**Tom:** manifesto. Primeira pessoa do plural, frases curtas e afirmativas, vocabulário de cinema e música. Confiante sem arrogância explicativa — a agência não pede, afirma. Zero jargão corporativo.

**Headlines:**
- "Fazemos marcas inesquecíveis."
- "Toda marca tem um filme dentro dela. A gente dirige."
- "Não seguimos tendência. A gente grava a próxima."
- "Ideias que não cabem no feed."

**CTAs:** "Vamos criar juntos" · "Comece um projeto" · "Veja o que a gente fez" · "Conta sua história pra gente"

**Microcopy:** "role para começar" · "capítulo 02 — processo" · "prefere e-mail? ola@suaagencia.com.br"

**Evitar:** jargão corporativo ("soluções integradas", "sinergia", "excelência"), tom de vendedor insistente/urgência artificial, diminutivos e tom fofo (território da personalidade 01), terceira pessoa distante ("a empresa oferece..."), exclamações em série e emojis no corpo.

---

## 10. Diferenciação dos irmãos (crítico — todos são dark)

| | 06.1 Tatuagem | 06.2 Streetwear | **06.3 Agência** (este) |
|---|---|---|---|
| Mood | Galeria B&W contemplativa | Ruído urbano / hype | **Narrativa cinematográfica** |
| Acento | Dourado vintage `#FFE600` | Lime neon `#00FF41` | **Roxo elétrico `#9D4EDD`** |
| Heading | Playfair Display 900/italic | Archivo Black gigante | **DM Serif Display experimental** |
| Body | Space Grotesk | JetBrains Mono | Space Grotesk |
| Grid | Assimetria curatorial + molduras | Grid quebrado + scroll horizontal | **Capítulos full-screen** |
| Ritmo | Contemplativo, 160px de respiro | Frenético | **Cênico, uma ideia por tela** |
| Botões | Retos 0px | Retos 0px + hard offset | **Pílulas full 9999px + glow** |

Nenhum hex, fonte ou composição compartilhados (exceto o body Space Grotesk, comum ao 06.1 por brief).

---

## 11. Acessibilidade e qualidade

- WCAG 2.1 **AA** verificado com razões reais (ver tabela de contraste)
- Foco visível roxo `#C77DFF` 2px offset 3px em TODO interativo — visível sobre preto e sobre roxo
- Regra dura: `#9D4EDD` puro nunca em texto corrido; texto usa `#C77DFF`
- Skip-link, focus-trap no menu overlay, Esc fecha; `aria-expanded` no hambúrguer
- **Sem scroll-jacking horizontal** — painéis rolam verticalmente nativo
- Alt text descritivo nas imagens de projeto; numerais/auras com `aria-hidden`
- Touch targets ≥ 44px (botões-pílula ≥ 48px; links de menu 56px)
- `prefers-reduced-motion` em 100% das animações
- Performance: LCP < 2.5s (hero é texto puro, LCP instantâneo), CLS < 0.1 (aspect-ratio fixo), INP < 200ms (só transform/opacity/clip-path; auras via radial-gradient, não imagens)

**Segmentos ideais:** agência criativa e estúdio de design, gravadora/selo musical independente, produtora audiovisual, coletivo de arte, direção de arte freelance.

**Não use para:** e-commerce de alto volume/catálogo denso, sites institucionais que exigem densidade informacional imediata, públicos que buscam preço acima de visão — a voz de manifesto filtra leads.

---

## 12. Arquivos deste DS

- `json/06-3-agencia-criativa.json` — fonte da verdade
- `previews/html/06-3-agencia-criativa.html` — preview interativo offline
- `docs/06-3-agencia-criativa/components.md` — code samples
- `docs/06-3-agencia-criativa/animations.css` — CSS de motion completo
- `docs/06-3-agencia-criativa/accessibility-report.md` — auditoria WCAG
- `docs/06-3-agencia-criativa/benchmarking.md` — conversão + performance
- `docs/06-3-agencia-criativa/color-variations.md` — 5 variações de paleta
- `docs/06-3-agencia-criativa/responsive-guide.md` — breakpoints e CSS fluido
