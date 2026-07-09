# DS 05.3 — Padaria Fermentação Natural

> **Categoria:** 05 — Artesanal e Autêntico
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

Dourado-grão sobre creme, seções escuras moody como o interior de uma padaria ao amanhecer, copy concentrado e uma tese central: **educar sobre fermentação natural É converter**. Quem entende as 48 horas aceita o preço — e reserva o pão antes da fornada sair.

---

## 1. Inspiração

**Debaere Bakery** — debaere.co.uk (Reino Unido)

Padaria artesanal de herança belga fundada por Ric De Baere (campeão mundial de panificação), com reconhecimento em **Great Taste Awards** — prêmios de produto, não de web design. O site é citado como referência estilística em curadorias de design para padarias: fotografia moody sobre fundos escuros e quentes, tipografia de influência vintage-editorial e copy de pouquíssimas palavras ("Pure Joy, Baked In"). **Poppy Roastery** entra como referência estilística secundária de atmosfera artesanal dourada.

O que capturamos: mood, ritmo, hierarquia e o uso do **processo como argumento de venda**. Nada de layout copiado.

**Nota tipográfica:** a referência usa tipografia no espírito de **Editorial New** (comercial). Substituída oficialmente por **Newsreader** (Google Fonts) — serif editorial de eixo inclinado, a alternativa aberta mais próxima.

---

## 2. Paleta

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#C19A6B` | Dourado-grão — **apenas accent/superfície/display sobre escuro** (2.30:1 sobre creme reprova para texto) |
| `primary_deep` | `#7A5C2E` | Derivado funcional: CTAs, links, texto de destaque (5.49:1 AA) |
| `secondary` | `#8B7355` | Marrom-pão — texto grande e elementos gráficos (3.99:1, AA large) |
| `secondary_deep` | `#6B573F` | Marrom-pão para texto normal (6.10:1 AA) |
| `surface` | `#F7F1E5` | Creme base |
| `surface_alt` | `#EFE6D2` | Creme profundo (seções alternadas) |
| `surface_dark` | `#2A2117` | Marrom-café — seções moody, footer |
| `text_primary` | `#33291C` | 12.66:1 AAA |
| `text_secondary` | `#5C4E3A` | 7.16:1 AAA |
| `text_muted` | `#7C6B54` | 4.57:1 AA |
| `border` | `#D9CBB0` | Filetes, bordas de card e input |
| `error` / `success` / `warning` | `#B0413E` / `#3F6B3F` / `#8A5A1B` | 5.08 / 5.51 / 5.25:1 — todos AA |

**Escala neutra (quente):** 50 `#FBF7EE` · 100 `#F7F1E5` · 200 `#EFE6D2` · 300 `#D9CBB0` · 400 `#BCA37E` · 500 `#9C825E` · 600 `#7C6547` · 700 `#5E4B34` · 800 `#423424` · 900 `#2A2117`

### A decisão central da paleta

O dourado-grão `#C19A6B` do brief tem **2.30:1** sobre creme — reprovado para qualquer texto. Solução: ele permanece a **alma visual** (filetes, badges escuros, display numbers sobre `#2A2117`, onde atinge 6.10:1), e o derivado `#7A5C2E` — mesmo matiz, luminância reduzida, como grão tostado — assume **toda a função de texto e CTA**. Botão primário: creme `#FBF5E9` sobre `#7A5C2E` = **5.69:1 AA**.

---

## 3. Tipografia

| Papel | Fonte | Fonte da fonte |
|---|---|---|
| Headings | **Newsreader** (opsz + itálico) | Google Fonts — substitui Editorial New |
| Body | **Lato** 400/700 | Google Fonts |
| Display numbers | Newsreader **itálico** | recurso expressivo: `48h`, `100%`, `1889` |

### Escala

| Elemento | Mobile | Desktop | Peso |
|---|---|---|---|
| H1 | 36px / 1.12 | 60px / 1.06 | 500, ls -0.015em |
| H2 | 28px / 1.18 | 42px / 1.12 | 500 |
| H3 | 21px / 1.3 | 26px / 1.25 | 500 |
| Body | 16px / 1.65 | 17px / 1.7 | 400 |
| Small | 13px | 14px | 400 |
| Eyebrow | 12px | 13px | 700, uppercase, tracking 0.18–0.2em |
| Display number | 48px | 88px | 400 itálico |

Fluida: `h1: clamp(2.25rem, 1.55rem + 3vw, 3.75rem)`.

---

## 4. Espaçamento, bordas e sombras

- **Base 8px** — xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 144
- **Seções:** 64px mobile → 96px tablet → **144px desktop**. Seções escuras podem colar (0px) na anterior para efeito de mergulho.
- **Containers:** 1200px geral, **720px para texto educativo** (~65ch). Padding 20/40/64px.
- **Radius:** quase tudo reto — botões e inputs **2px**, cards 4px, **imagens 0px** (moldura reta ou sangrada). Única exceção: badges pill 999px.
- **Sombras:** mínimas e quentes (base `rgba(42,33,23,…)`, nunca preto puro). `glow_warm 0 0 48px rgba(193,154,107,0.25)` simula a luz lateral nos blocos fotográficos escuros.
- **Filete editorial:** linha 1px `#C19A6B` de 48–96px acima de eyebrows — assinatura visual do DS.

---

## 5. Motion — atmosfera moody (400–700ms)

| Animação | Duração | Trigger | Descrição |
|---|---|---|---|
| `fade-in` | 550ms | scroll (15% viewport) | opacidade + translateY 16px→0 |
| `reveal-lento` | 700ms | scroll | clip-path revelando a imagem de cima para baixo, como luz |
| `amanhecer` | 700ms | load do hero | gradiente anima background-position — luz da manhã entrando |
| `stagger-processo` | 550ms + 120ms/item | scroll na timeline | etapas surgem em sequência — **o ritmo lento É a mensagem** |
| `hover-card` | 400ms | hover/focus | -4px, sombra, filete dourado expande 48px→100% |
| `hover-botao` | 400ms | hover/focus | fundo escurece `#7A5C2E`→`#5E4623`, como crosta assando |

Easings: entrance `cubic-bezier(0.16,1,0.3,1)`, standard `(0.25,0.1,0.25,1)`. **prefers-reduced-motion:** tudo vira opacidade 150ms; amanhecer e badge giratório desativados.

---

## 6. Componentes

### Botões
- **Primário:** fundo `#7A5C2E`, texto creme, radius 2px, uppercase Lato 700 tracking 0.06em, min 48px. Hover escurece. Disabled `#D9CBB0`/`#7C6B54`.
- **Secundário:** outline 1.5px `#7A5C2E`, hover véu dourado `rgba(193,154,107,0.14)`.
- **Ghost dark:** sobre `#2A2117`, borda e texto `#C19A6B` (6.10:1).

### Cards
- **Produto:** imagem 4:5 sangrada (radius 0) → filete dourado 48px → nome Newsreader → **nota de fermentação em itálico** ("levain, 48h") → preço + CTA texto. Educação dentro do card.
- **Processo:** display number itálico dourado + título + máx 2 linhas. Sobre escuro: fundo `#423424`, número `#C19A6B`.

### Inputs
Fundo `#FBF7EE`, borda `#D9CBB0`, radius 2px, 48px de altura. Label sempre visível (Lato 700 13px uppercase). Focus: borda `#7A5C2E` + halo `rgba(122,92,46,0.18)`. Erro: `#B0413E` com ícone + texto + `aria-describedby`.

### Hero
Split assimétrico **5/7**: copy concentrado à esquerda (eyebrow + H1 de máx. 6 palavras + 1 linha de apoio + CTA duplo — **máximo 14 palavras no total**), bloco fotográfico moody full-height à direita (gradiente `#2A2117 → #5E4B34 → #C19A6B`, luz lateral). Selo redondo "Fermentação natural · 48h" na junção. Mobile: foto 55vh no topo, texto em faixa creme na base.

### Navegação
Topbar 72px creme translúcida com blur ao rolar, logo Newsreader, máx. 4 links uppercase + CTA "Reserve seu pão". Announcement bar opcional escura: *"Fornada de sábado: reservas até sexta 18h"*. Mobile: painel full-screen `#2A2117`, links Newsreader 32px creme com stagger.

### Depoimentos
Citação editorial única (sem carrossel automático): aspas Newsreader itálico 28–36px sobre `surface_alt`, autor em eyebrow. Prioridade a depoimentos sobre **saúde/digestão** — reforçam a tese do DS.

### Footer
`#2A2117`, filete dourado no topo, 4 colunas: manifesto em itálico, **horários de fornada**, contato, newsletter "Receba o calendário de fornadas". Assinatura: *"Feito à mão, fermentado com tempo."*

### Badges
Pill 999px, borda 1px, texto 12px uppercase: **Levain próprio · 48h de fermentação · Sem aditivos · Farinha orgânica moída na pedra**.

---

## 7. Voice & Tone — educativo caloroso

Autoridade calma de quem domina o ofício. Frases curtas, números concretos, zero exagero.

**Headlines:**
- "48 horas de fermentação, zero pressa."
- "Pão de verdade leva tempo. O nosso leva dois dias."
- "Levain de 9 anos, farinha de moinho de pedra, mais nada."
- "Seu estômago sabe a diferença da fermentação natural."

**CTAs:** Reserve seu pão · Ver calendário de fornadas · Conheça nosso processo · Garanta a fornada de sábado

**Microcopy:** "Fornadas limitadas: fermentação lenta não aceita atalhos." · "Retirada a partir das 9h — o pão sai do forno às 8h30."

**Evitar:** tom fofinho/infantil (território do 01.1), jargão sem tradução, urgência artificial em caps, superlativos vazios, emojis em headlines.

---

## 8. Composição (page_flow)

1. **Announcement bar** escura — escassez real como primeira mensagem
2. **Hero** split 5/7 — copy concentrado + foto moody
3. **Manifesto** — 720px centrado, 3 frases, muito respiro
4. **Processo de fermentação** — seção escura full-bleed colada no manifesto; timeline de 4 etapas com display numbers dourados. **O coração do site.**
5. **Produtos** — grid 3 col, nota de fermentação em cada card
6. **Depoimento** editorial único (saúde/digestão)
7. **Reserva** — calendário de fornadas + formulário curto: a conversão ancorada em tudo que foi ensinado
8. **Footer** escuro

**Imagem:** fotografia moody vintage — fundo escuro, luz lateral única de janela, grão sutil, tons quentes. Em placeholders: gradientes 135° `#2A2117 → #5E4B34 → #C19A6B` + vinheta radial. Sempre reta, nunca arredondada.

**Densidade:** baixa no claro (uma ideia por seção), imersiva no escuro.

---

## 9. Acessibilidade (WCAG 2.1 AA)

- Todos os pares de texto verificados com números reais (ver JSON `contrast_verification`)
- `#C19A6B` proibido como texto sobre claro — política documentada
- Focus visível 2px `#7A5C2E` offset 3px (dourado `#C19A6B` sobre escuro); skip-link; focus-trap no menu mobile; Esc fecha
- Timeline como `<ol>`; uma `h1`; landmarks completos
- Touch targets ≥ 44px (botões 48–56px)
- Erros de formulário: cor + ícone + texto + `aria-live="polite"`
- `prefers-reduced-motion` implementado em todas as animações

---

## 10. Unicidade — por que este DS não se confunde

| | **05.3 (este)** | 01.1 Padaria Acolhedora | 05.1 Café | 05.2 Cerâmica |
|---|---|---|---|---|
| Mood | artesanal **editorial** moody | acolhedor **familiar** | café de especialidade | ateliê mineral |
| Primária | `#C19A6B` dourado-grão (+`#7A5C2E`) | `#B85C38` terracota | `#8B5E3C` + verde-musgo | `#9B6B47` + preto-fumaça |
| Heading | **Newsreader** | Lora | Cormorant | Fraunces |
| Body | **Lato** | Inter | — | — |
| Copy | concentrado, processo/educação | recepção calorosa | — | — |
| Assinatura | seções escuras moody + timeline de fermentação + display numbers itálicos | calor doméstico | — | — |

---

## 11. Benchmarking

**Ideal para:** padaria de fermentação natural com pré-venda, confeitaria artesanal, queijaria (maturação como narrativa), cervejaria artesanal, cafeteria com torra própria, fermentados em geral.

**Fatores de conversão:**
1. Educação = conversão: a timeline transforma preço premium em valor compreendido
2. Escassez real narrada com calma (calendário de fornadas)
3. Reserva antecipada cria compromisso e reduz perda de fornada
4. Argumento de saúde captura quem pesquisa antes de comprar
5. Números concretos acima da dobra geram credibilidade
6. Fotografia moody sinaliza premium antes de qualquer texto

**Performance:** LCP < 2.0s (hero em gradiente CSS ou WebP ≤ 120KB), CLS < 0.05 (aspect-ratio fixo + fallback métrico de fontes), INP < 200ms (sem frameworks pesados). Orçamento: ≤ 900KB com fotos.
