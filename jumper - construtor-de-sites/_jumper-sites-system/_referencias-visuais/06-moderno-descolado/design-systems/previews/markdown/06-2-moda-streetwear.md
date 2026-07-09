# DS 06.2 — Moda Streetwear

> **Categoria:** 06 — Moderno e Descolado
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## Essência

Preto absoluto + lime neon. Tipografia display gigante que se recusa a alinhar. Corpo inteiro em monospace, como etiqueta técnica de produto. Marquees correndo, grid quebrado de propósito, energia de drop: escassez, número de tiragem, contador.

Aqui a **estética É o produto**. O site tem a mesma atitude da roupa: se a interface parecer "site de loja", falhou. A quebra de padrões é a identidade.

**Sensação-alvo:** estética >> convenção. Hype comercial, não contemplação.

---

## Inspiração base

| Campo | Valor |
|---|---|
| Site | Nueno — digital fashion brand |
| URL | https://nueno.shop |
| Origem | Polônia — primeira digital fashion house polonesa |
| Prêmio | Awwwards Site of the Day (SOTD), nota 7.46/10 |
| Referência complementar | FRDV® Streetwear Shop — Awwwards Nominee (referência estilística) |

**Por que foi escolhido:** a Nueno trata o site como peça de moda — display gigante, preto dominante, acento único, grid desalinhado. Somamos a camada comercial do streetwear premium: drops numerados, marquee, urgência honesta.

**Substituição de fonte:** a referência usa **Druk** (comercial, Commercial Type). Substituição oficial Google Fonts: **Archivo Black** (display) + **Archivo Expanded 700–900** (subtítulos/labels).

**O que capturar:** mood, ritmo, hierarquia, atitude.
**O que NUNCA fazer:** copiar layout pixel-a-pixel, textos ou estrutura exata.

---

## Diferenciação dos irmãos (crítico)

| DS | Acento | Tipografia | Mood |
|---|---|---|---|
| 06.1 Tatuagem | Dourado vintage #FFE600 | Playfair (serif dramática) | Galeria B&W contemplativa |
| **06.2 Streetwear** | **Lime neon #00FF41** | **Archivo Black + JetBrains Mono** | **Hype comercial, drop, caos controlado** |
| 06.3 Agência Criativa | Roxo #9D4EDD | DM Serif Display | Narrativa full-screen |

Todos são dark. O 06.2 se separa por: mono type no corpo, grid quebrado EXTREMO, scroll horizontal, marquees e energia de venda — nada de dourado, roxo, serifas ou contemplação.

---

## Paleta

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#000000` | Fundo dominante — o preto é a identidade, não "dark mode" |
| `secondary` | `#00FF41` | Lime neon — display, CTAs, marquees, tags. SÓ no escuro |
| `accent_ink` | `#007A29` | Derivado escuro do lime p/ texto pequeno em fundo claro |
| `surface` | `#000000` | Base |
| `surface_alt` | `#0D0D0D` | Cards, blocos |
| `surface_inverted` | `#F2F2F2` | Seções invertidas raras |
| `text_primary` | `#FFFFFF` | Texto principal |
| `text_secondary` | `#B8B8B8` | Texto de apoio |
| `text_muted` | `#8A8A8A` | Meta, legal |
| `border` | `#2A2A2A` | Divisores, cards |
| `error` | `#FF3B3B` | Erros ("ERR //") |
| `success` | `#00FF41` | Sucesso |
| `warning` | `#FFD60A` | Avisos |

### Escala neutra

`#F5F5F5 · #E6E6E6 · #CCCCCC · #B8B8B8 · #8A8A8A · #5C5C5C · #3D3D3D · #2A2A2A · #141414 · #0D0D0D`

### Contraste verificado (WCAG 2.1)

| Par | Razão | Veredito |
|---|---|---|
| #00FF41 sobre #000000 | **15.38:1** | AAA — ok até texto pequeno |
| #FFFFFF sobre #000000 | **21.00:1** | AAA |
| #B8B8B8 sobre #000000 | **10.58:1** | AAA |
| #8A8A8A sobre #000000 | **6.08:1** | AA texto normal |
| #000000 sobre #00FF41 | **15.38:1** | AAA — botões lime sempre com texto preto |
| #007A29 sobre #FFFFFF | **5.50:1** | AA texto normal |
| #00FF41 sobre #FFFFFF | 1.37:1 | **REPROVADO — proibido** |
| #FF3B3B sobre #000000 | 5.94:1 | AA |
| #FFD60A sobre #000000 | 14.87:1 | AAA |

**Regra de ouro:** o lime vive no escuro. Em superfície clara, lime só como bloco gráfico (não-textual) ou vira `#007A29` quando carrega texto. Ajuste documentado conforme spec.

---

## Tipografia

| Papel | Fonte | Fonte |
|---|---|---|
| Display / H1 / H2 | **Archivo Black** | Google Fonts |
| H3 / labels expandidos / nav | **Archivo** (width expanded, 700–900) | Google Fonts |
| Body / meta / preços | **JetBrains Mono** | Google Fonts |

O corpo em monospace é assinatura do DS — estética de spec técnica, etiqueta de produto, terminal.

### Escala desktop

| Nível | Tamanho | Fonte | Tratamento |
|---|---|---|---|
| H1 | clamp(80px, 11vw, 176px) | Archivo Black | UPPERCASE, lh 0.88, ls -0.02em |
| H2 | clamp(48px, 6vw, 88px) | Archivo Black | UPPERCASE, lh 0.92 |
| H3 | 28px | Archivo 800 expanded | UPPERCASE, ls 0.03em |
| Body | 16px | JetBrains Mono | lh 1.7 |
| Small | 13px | JetBrains Mono 500 | UPPERCASE, ls 0.14em |

### Escala mobile

| Nível | Tamanho |
|---|---|
| H1 | clamp(44px, 13vw, 64px) |
| H2 | 34px |
| H3 | 20px |
| Body | 15px |
| Small | 12px |

### Tratamentos especiais

- **Outline display:** `-webkit-text-stroke: 1.5px #00FF41` com fill transparente — marquees e números de drop.
- **Glitch:** RGB split + clip-path jitter no H1 (hover/entrada). Desliga em reduced-motion.
- **Mono labels:** `REF 004 / ALGODÃO 240G / UNISSEX` — 12px uppercase, tracking 0.12em.
- **Regra de caps:** display e labels em caps; body em sentence case. O caps é estratégico, nunca gratuito.

---

## Espaçamento

- **Base:** 8px — escala `4 / 8 / 16 / 24 / 40 / 64 / 104 / 160`
- **Seções:** 64px mobile · 104px tablet · 160px desktop
- **Container:** máx 1680px (wide); leitura limitada a 68ch
- **Padding:** 16px mobile · 32px tablet · 48px desktop
- **Ritmo:** irregular DE PROPÓSITO — offsets verticais de 40–120px entre vizinhos do grid quebrado, sempre múltiplos de 8.

## Bordas e sombras

- **Radius 0px em TUDO** — exceto badges pill (999px), único elemento redondo, contraste proposital.
- **Sem sombras difusas.** Flat total. As únicas exceções:
  - `hard_offset`: `8px 8px 0 #00FF41` (estilo print/xerox) no card de drop
  - `glow`: `0 0 24px rgba(0,255,65,0.35)` em CTA hover
- Strokes: 1px `#2A2A2A` (divisores) · 2px `#00FF41` (foco/destaque).

---

## Motion

| Animação | Duração | Trigger |
|---|---|---|
| marquee-loop | 18s linear ∞ | autoplay (pausa em hover e reduced-motion) |
| glitch-burst | 320ms steps(2) | hover no display / entrada de seção |
| card-tilt-3d | 300ms out-expo | hover em card — perspective(800px), até 6deg |
| horizontal-drag-scroll | contínuo | galerias com scroll-snap nativo |
| slide-up-reveal | 600ms out-expo | entrada no viewport, stagger 80ms |
| btn-shift | 180ms snap | hover de botão — translate(-4px,-4px) |
| flicker-in | 450ms steps(4) | título lime "liga" como neon |

**Easings:** `snap cubic-bezier(0.85,0,0.15,1)` · `out-expo cubic-bezier(0.16,1,0.3,1)` · linear · steps.

**Reduced motion:** marquees pausam, glitch/flicker viram fade, tilt desliga. Scroll horizontal permanece (é navegação). Flashes do glitch < 3/s (WCAG 2.3.1).

---

## Componentes

### Botões
- **Primary:** bg lime, texto preto, Archivo 800 caps. Hover: desloca -4px/-4px revelando hard offset. Focus: outline branco 2px offset 3px. Disabled: cinza #2A2A2A.
- **Secondary:** outline lime 2px, texto lime. Hover: preenche lime + glow.
- **Ghost:** texto branco com underline lime 2px offset 6px.
- Alturas ≥ 44px sempre.

### Card de produto
`#0D0D0D`, borda 1px `#2A2A2A`, radius 0. Estrutura: imagem 4:5 full-bleed → meta mono → nome Archivo caps → preço mono + badge. Hover: tilt 3D + borda lime + imagem scale 1.06. No grid: larguras irregulares (5/4/3 colunas) e offsets verticais alternados.

### Card de drop (destaque)
Borda 2px lime + hard offset `8px 8px 0 #00FF41` + contador + CTA. Único card com sombra.

### Inputs
Estilo terminal: fundo preto, borda-base 2px, mono 15px, label mono caps acima. Focus: base lime + caret lime. Erro: base vermelha + mensagem `ERR // e-mail inválido`.

### Hero
Full viewport. H1 gigante com linhas desalinhadas (indent negativo alternado). Bloco editorial assimétrico atrás/entre as linhas. Tag de drop no topo, marquee lime na base. CTA no canto inferior esquerdo — **nada centralizado**.

### Navegação
Fixa, preta com blur, borda 1px. Links mono 13px caps tracking 0.14em, hover lime com prefixo `/`. Mobile: menu full-screen com links Archivo Black 44px, stagger.

### Depoimentos
Prints/tweets colados: cards com rotação alternada (-1.5deg/1deg), aspas lime 64px, autor `@handle` mono. Scroll horizontal com snap.

### Footer
Marquee gigante outline no topo → 4 colunas (nav, contato, social, newsletter) → linha legal mono 12px + coordenadas da cidade como assinatura.

### Badges
Pills mono 11px caps: lime sólido (`DROP 004`, `NOVO`), outline lime (`ÚLTIMAS UNIDADES`), cinza (`ESGOTADO`). Máx. 2 por card.

---

## Voz e tom

**Tom:** curto. Direto. Atitude de rua com precisão técnica. Caps estratégico. Zero corporativês.

**Headlines:**
- "DROP 004 — DISPONÍVEL AGORA"
- "FEITO PRA RUA. NUMERADO PRA POUCOS."
- "VOCÊ NÃO PRECISA. VOCÊ QUER."
- "ALGODÃO 240G. TIRAGEM DE 80. SEM REPOSIÇÃO."
- "O PRÓXIMO DROP NÃO ESPERA."

**CTAs:**
- "Garanta o seu"
- "COMPRAR AGORA"
- "Entrar na lista do drop"
- "Ver o drop completo"
- "Avise-me — DROP 005"

**Evitar:** frases explicativas longas, tom de liquidação ("IMPERDÍVEL!!"), diminutivos, caps em tudo, emojis em headline.

---

## Composição

**Grid:** 12 colunas feitas para serem quebradas — spans irregulares, sangria na viewport, sobreposição com z-index, desalinhamento vertical sistemático (múltiplos de 8px).

**Fluxo de página:**
1. Nav fixa mínima
2. Hero full viewport — display desalinhado + bloco editorial + marquee
3. Drop atual — card hard-offset deslocado à direita (8/12 col)
4. Galeria horizontal — scroll com snap, título vertical fixo à esquerda
5. Manifesto — fundo LIME invertido com texto preto (única seção ácida, quebra de ritmo)
6. Grid quebrado de produtos — spans 5/4/3 + offsets
7. Depoimentos — prints rotacionados em scroll horizontal
8. Newsletter — "005" gigante outline + form inline
9. Footer — marquee + colunas + coordenadas

**Imagem:** editorial de alta resolução, duotone preto/cinza com overlay lime. Sem radius, sempre sangrando ou desalinhada. Em mockups: gradientes duros + ruído SVG + formas de alto contraste.

**Densidade:** alta contrastada com vazios brutais. **O preto É o whitespace.**

---

## Acessibilidade (resumo — ver accessibility-report.md)

- WCAG 2.1 AA verificado com razões reais (tabela acima)
- DOM linear mesmo com caos visual — ordem de tab lógica
- Focus visível sempre: outline 2px (branco no lime, lime no preto)
- Marquees `aria-hidden` com conteúdo acessível duplicado
- `prefers-reduced-motion` obrigatório; glitch < 3 flashes/s
- Touch targets ≥ 44px

## Benchmarking (resumo — ver benchmarking.md)

**Ideal para:** streetwear, sneaker store, marca de skate, cosmético jovem, club/selo de música.

**Fatores de conversão:** escassez honesta (tiragem numerada), CTA de saliência máxima, meta técnica que constrói percepção premium, newsletter como "lista do drop".

**Performance:** LCP textual < 1s (H1 é texto com preload), CLS ~0 (offsets em CSS estático), animações só no compositor.
