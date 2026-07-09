# DS 05.1 — Café de Especialidade (Origem & Torra)

> **Categoria:** 05 — Artesanal e Autêntico
> **ID:** 05.1 · **Schema:** 2.0.0
> **Papel:** ds-base de personalidade — repertório, nunca molde

---

## 1. Essência

**Sensação-alvo:** *"aqui tem alma, tem história, vale o preço diferenciado — o processo é a venda."*

Este DS trata o site como um **ensaio fotográfico em capítulos**. Em vez de uma vitrine de produtos, a home é uma narrativa vertical de origem: **01 A Origem → 02 A Colheita → 03 A Torra → 04 A Xícara**. O visitante desce a página como quem lê uma reportagem de revista — e chega ao produto já convencido pelo processo.

- **Mood:** terroso, escuro, editorial, luz de fim de tarde
- **Público:** consumidores conscientes, coffee lovers, anti-massificação
- **Palavras-chave:** origem, torra, grão de filme, capítulos numerados, farm-to-cup

### Inspiração-base

| | |
|---|---|
| **Site** | [Ceremony Coffee Roasters](https://ceremonycoffee.com) — Annapolis, MD, EUA |
| **Prêmios** | Awwwards **Site of the Day (08/05/2018)**; indicado a **Ecommerce of the Year 2018** |
| **Estúdio** | Drexler (Baltimore) — case público: +400% em vendas online pós-redesign |
| **Referência secundária** | Verve Coffee Roasters — Awwwards Honorable Mention |

**Por que essa referência:** o Ceremony rompeu a convenção da categoria ao vender café por narrativa sensorial (notas de sabor, jornada do grão) em vez de fotos de sacas. Capturamos a **essência** — ritmo editorial, serifa expressiva, processo como argumento de venda — sem copiar layout, texto ou estrutura.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | **#8B5E3C** | Marrom-café — CTAs, links, numeração de capítulos |
| `primary_deep` | **#6E4A2F** | Texto normal sobre surface_alt; hover de botões |
| `secondary` | **#2F5233** | Verde-musgo — selos de origem, tags de processo, focos |
| `surface` | **#F7F2EA** | Fundo principal (creme quente) |
| `surface_alt` | **#EFE5D6** | Seções alternadas (areia) |
| `surface_dark` | **#221A13** | Capítulos escuros e footer |
| `text_primary` | **#2B211A** | Corpo de texto |
| `text_secondary` | **#5C4A3A** | Texto de apoio |
| `text_muted` | **#7A6A5B** | Legendas e metadados |
| `text_on_dark` | **#F7F2EA** | Texto sobre fundos escuros |
| `border` | **#D9CCB8** | Bordas e divisores |
| `error` | **#9E3B2B** | Erros (terra queimada) |
| `success` | **#2E5D36** | Sucesso |
| `warning` | **#756019** | Avisos (ocre torrado) |

### Escala neutra (quente)

`50 #FAF6EF · 100 #F0E8DB · 200 #E2D6C3 · 300 #CBBBA4 · 400 #A99680 · 500 #857260 · 600 #6B5A49 · 700 #524437 · 800 #382E25 · 900 #221A13`

### Contraste verificado (WCAG 2.1)

| Combinação | Razão | Resultado |
|---|---|---|
| primary #8B5E3C / surface #F7F2EA | **5.01:1** | ✅ AA texto normal |
| primary / surface_alt #EFE5D6 | **4.48:1** | ⚠️ só texto grande — usar `primary_deep` |
| primary_deep #6E4A2F / surface | **7.02:1** | ✅ AAA |
| text_primary / surface | **14.12:1** | ✅ AAA |
| text_secondary / surface | **7.55:1** | ✅ AAA |
| text_muted / surface | **4.66:1** | ✅ AA (só legendas) |
| secondary #2F5233 / surface | **7.94:1** | ✅ AAA |
| branco / primary (botões) | **5.58:1** | ✅ AA |
| branco / secondary | **8.84:1** | ✅ AAA |
| text_on_dark / surface_dark | **15.38:1** | ✅ AAA |
| error / surface | **6.05:1** | ✅ AA |
| success / surface | **6.89:1** | ✅ AA |
| warning / surface | **5.47:1** | ✅ AA |

**Ajustes documentados:** a paleta do brief (#8B5E3C / #2F5233) foi mantida. Único ajuste: criação do token `primary_deep #6E4A2F` porque o primary fica 0.02 abaixo do mínimo AA sobre `surface_alt`. O `warning` foi calibrado em #756019 (âmbares mais claros falhavam 4.5:1).

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Fallback |
|---|---|---|---|
| Headings | **Cormorant Garamond** 500–600 | Google Fonts | 'Times New Roman', Georgia, serif |
| Body | **Inter** 400–600 | Google Fonts | -apple-system, 'Segoe UI', Arial, sans-serif |

> **Guarda de unicidade:** o DS 02.2 também usa Cormorant Garamond — mas com sage claro e mood leve. Aqui a mesma serifa aparece em corpo gigante, itálicos narrativos e paleta terrosa escura com grão de filme: resultado radicalmente distinto.

### Escala

| Elemento | Mobile | Desktop | Peso / LH |
|---|---|---|---|
| H1 | 40px | 68px | 600 / 1.05–1.1, ls −0.015em |
| H2 | 30px | 44px | 600 / 1.1–1.15 |
| H3 | 23px | 28px | 600 / 1.2–1.25 |
| Body | 16px | 17px | 400 / 1.7–1.75 |
| Small (eyebrow) | 13px | 13px | 500 / uppercase, ls 0.12–0.14em |

### Estilos especiais

- **Número de capítulo:** Cormorant 500 itálico, 96–140px, primary com opacidade 0.25, atrás do título
- **Eyebrow:** Inter 500 caps espaçadas em verde-musgo ("DA FAZENDA", "NA TORRA")
- **Ênfase narrativa:** trechos-chave em Cormorant itálico 1.35em, primary_deep

---

## 4. Espaçamento & Grid

- **Base:** 8px · escala `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 144`
- **Entre capítulos:** 72px (mobile) / 104px (tablet) / **144px (desktop)** — respiro editorial
- **Container:** máx 1200px; padding 20/40/64px
- **Coluna narrativa:** máx 720px (~68ch)
- **Grid:** 12 colunas; texto em 6–7 colunas centrais; imagens de capítulo full-bleed

## 5. Bordas, Raios & Sombras

- **Raios:** botões e inputs **3px** (quase reto, artesanal-sério), cards e imagens **6px**, containers **0** (capítulos sangram)
- **Régua decorativa:** linha 48×2px em primary sob eyebrows — lembra régua de prova de torra
- **Sombras:** quentes (base #221A13, nunca preto puro), discretas: `sm` em cards, `md` no hover, `lg` em modais. Profundidade vem de camadas de cor + textura, não de sombra

## 6. Motion

| Token | Valor |
|---|---|
| Durações | 150 / 300 / 500 / **700 / 900ms** |
| Easing entrada | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Easing padrão | `cubic-bezier(0.4, 0, 0.2, 1)` |

**Animações do DS:**

1. **reveal-lento** (900ms) — fade + translateY(28px), via IntersectionObserver
2. **parallax-sutil** (lerp 700–900ms) — imagens deslocam no máx 6–8% da altura; quase subliminar
3. **grain-drift** (loop 8s) — textura de grão de filme (feTurbulence) com drift de posição
4. **chapter-number-fade** (900ms, delay 120ms) — número gigante sobe para opacidade 0.25
5. **hover-card-lift** (300ms) — card sobe 4px, imagem zoom 1.03
6. **button-fill** (300ms) — outline preenche de baixo para cima
7. **underline-grow** (300ms) — sublinhado cresce em verde-musgo

**`prefers-reduced-motion`:** parallax e grain-drift desativados, reveals viram fade 150ms.

---

## 7. Componentes

### Botões
- **Primary:** fundo #8B5E3C, texto branco (5.58:1); hover #6E4A2F; foco anel verde-musgo 2px offset 3px; disabled #CBBBA4
- **Secondary:** outline 1.5px marrom-café, preenche no hover (button-fill)
- **Ghost:** verde-musgo com underline-grow — "Conheça nossos produtores →"
- **On-dark:** outline creme para os capítulos escuros
- Tamanhos: sm 10×20 / md 14×30 / lg 18×40 — md e lg ≥ 44px de altura

### Cards
- **Product card:** imagem 4:5 texturizada + eyebrow de origem + nome em Cormorant 24px + notas de sabor + preço; badge de processo ("LAVADO") verde-musgo no canto
- **Origin card:** retrato circular 72px do produtor + fazenda + altitude + varietal
- **Chapter block:** número translúcido + eyebrow + H2 + narrativa + imagem full-bleed com parallax e grão

### Inputs
Fundo branco, borda #D9CCB8, radius 3px, 48px de altura mínima. Foco: borda primary + anel rgba(139,94,60,.15). Erro: #9E3B2B com mensagem ligada por `aria-describedby`.

### Hero
Editorial tipo **capa de revista**: eyebrow + H1 Cormorant 68px + subtítulo + 2 CTAs. A imagem fica **abaixo** do bloco de texto (full-bleed com grão), com scroll cue "role para conhecer a origem ↓". LCP é o H1 tipográfico — performance por design.

### Navegação
Topbar transparente sobre o hero → sólida com blur ao rolar. Mobile: painel de tela cheia em surface_dark com links Cormorant 32px creme, focus trap e Esc.

### Depoimentos
Uma citação por vez, centralizada, Cormorant itálico 24–28px, aspas gigantes translúcidas. Sem autoplay — curadoria, não volume.

### Footer
4 colunas sobre #221A13: marca + assinatura narrativa, navegação, contato, newsletter "Cartas da torra".

---

## 8. Voz & Tom

**Tom:** narrativo, de origem, caloroso mas preciso — voz de quem conhece o produtor pelo nome e a curva de torra de cor. Primeira pessoa do plural.

**Headlines:**
- "Da fazenda à sua xícara, cada etapa tem nome e sobrenome."
- "Torramos pouco, torramos devagar, torramos com propósito."
- "O café que você bebe começou a ser escrito na florada."
- "Conheça a altitude, o solo e as mãos por trás deste grão."

**CTAs:** "Conheça nossos produtores" · "Descubra a safra atual" · "Assine o clube da torra" · "Role para conhecer a origem"

**Evitar:** linguagem de commodity ("melhor preço"), urgência artificial, jargão esnobe sem tradução, superlativos vazios.

---

## 9. Composição (assinatura do DS)

**Padrão-assinatura: narrativa vertical de origem em capítulos numerados.**

```
[nav transparente]
[HERO editorial — texto de capa + imagem full-bleed com grão + scroll cue]
[CAP. 01 A ORIGEM   — claro  | número gigante + texto esq. + imagem parallax dir.]
[CAP. 02 A COLHEITA — ESCURO | imagem full-bleed + texto creme]
[CAP. 03 A TORRA    — claro  | espelhado do 01 + curva de torra em SVG]
[CAP. 04 A XÍCARA   — areia  | grade de produtos com badges]
[PRODUTORES — retratos circulares]
[DEPOIMENTO — citação única editorial]
[CLUBE — faixa escura "Cartas da torra"]
[FOOTER escuro]
```

**Tratamento de imagem:** fotografia com grão de filme analógico — no preview, simulado com gradientes quentes multicamada + `feTurbulence` (fractalNoise) em opacidade 0.25–0.4 + vinheta radial. Fotos reais: mãos, ferramentas, colheita, vapor. Nunca banco de imagem genérico.

**Densidade:** baixa. **Whitespace:** generoso e assimétrico — o vazio faz parte da leitura.

---

## 10. Acessibilidade (resumo)

- WCAG 2.1 **AA** verificado com razões reais (seção 2)
- Skip-link, focus trap no menu mobile, Esc fecha overlays
- Foco visível: anel 2px verde-musgo (claro) / creme (escuro), offset 3px
- Numeração decorativa e texturas com `aria-hidden`
- Alvos de toque ≥ 44px; `prefers-reduced-motion` implementado
- Relatório completo: `docs/05-1-cafe-especialidade/accessibility-report.md`

## 11. Diferenciação obrigatória

| DS | Paleta | Fonte | Composição |
|---|---|---|---|
| **05.1 (este)** | #8B5E3C + #2F5233 (café + musgo) | Cormorant Garamond + Inter | narrativa vertical em capítulos numerados, grão de filme |
| 05.2 Cerâmica | #9B6B47 + #4A4A48 (terracota crua) | Fraunces | moody magazine |
| 05.3 Padaria | #C19A6B + #8B7355 (dourado-grão) | Newsreader | luz natural |
| 02.2 (outra personalidade) | sage green claro | Cormorant Garamond | mood leve e claro |

Nenhum HEX compartilhado; composição própria; a Cormorant reaparece apenas em mood oposto ao 02.2.

## 12. Segmentos ideais

Café de especialidade · torrefação artesanal · empório de procedência · vinícola pequena · chocolataria bean-to-bar · queijaria de fazenda.

**Fatores de conversão:** ver `docs/05-1-cafe-especialidade/benchmarking.md`.
