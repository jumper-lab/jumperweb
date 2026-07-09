# DS 03.2 — Hamburgueria Vibrante · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (appetite-appeal quente, Bebas Neue, sombra dura, grid desordenado) mudando o registro. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary `#E63946` (textual `#C1121F`) · secondary `#F1C232` · surface `#FFF8F0` / `#FFEDD8` · surface_dark `#221510` · text `#221510`

> Regra estrutural da marca, válida em todas as variações: **branco sobre vermelho só em texto grande**; vermelho pequeno usa o tom escuro; **mostarda nunca é texto** — sempre fundo/decoração com texto carvão por cima.

---

## 1. Dark Mode — inversão real (cardápio noturno)

Inverte a base clara para carvão profundo (bar/delivery à noite). O vermelho de marca clareia para `#FF6B75` (o `#E63946` fica escuro demais sobre carvão); mostarda e creme viram os destaques.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FF6B75` | vermelho claro — links, headlines de destaque, acentos (6.04:1) |
| secondary | `#F1C232` | mostarda — badges de preço, títulos (9.92:1) |
| surface | `#2B1A14` | fundo principal (carvão levemente elevado) |
| surface_alt | `#3D2820` | cards e seções alternadas |
| text_primary | `#FFF8F0` | texto principal (creme) |
| text_secondary | `#DDC3AE` | texto de apoio |
| border | `#4A342A` | bordas e divisores |

**Contraste:** `#FFF8F0` sobre `#2B1A14` = **15.82:1** (AAA) · `#F1C232` sobre `#2B1A14` = **9.92:1** (AAA) · `#FF6B75` sobre `#2B1A14` = **6.04:1** (AA) · `#DDC3AE` sobre `#2B1A14` = **9.91:1** (AAA) · carvão `#221510` sobre `#F1C232` = **10.57:1** (AAA — mantém a regra de badge mostarda com texto carvão).
**Nota:** a sombra dura carvão-sobre-claro perde contraste no dark; troque por sombra dura **creme** (`6px 6px 0 #FFF8F0`) ou por `glow_red` para os cards manterem a assinatura de sticker.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para `prefers-contrast: more` e baixa visão. Elimina o vermelho de marca como texto e escurece tudo ao máximo. Fundo branco puro.

| Token | HEX | Uso |
|---|---|---|
| primary | `#A00C17` | vermelho profundo — texto, links, bordas (8.20:1) |
| primary_display | `#E63946` | reservado a blocos/headlines gigantes ≥24px (fundo, não texto pequeno) |
| secondary | `#F1C232` | mostarda — fundo de badge com texto carvão (10.57:1) |
| surface | `#FFFFFF` | fundo principal |
| surface_alt | `#FFF8F0` | alternância mínima |
| text_primary | `#221510` | texto principal (17.76:1) |
| text_secondary | `#3D2E26` | apoio (12.99:1) |
| border | `#221510` | bordas reforçadas 2–3px |

**Contraste:** `#221510` sobre `#FFFFFF` = **17.76:1** (AAA) · `#A00C17` sobre `#FFFFFF` = **8.20:1** (AAA) · `#3D2E26` sobre `#FFFFFF` = **12.99:1** (AAA) · branco sobre `#A00C17` = passa AA qualquer tamanho.
**Nota:** `text_muted #7A6558` é **abolido** (5.21:1 < 7:1) — usar `#3D2E26`. Sombra dura vira borda 3px carvão sólida (indicador mais confiável que sombra em alto contraste). Sublinhado obrigatório em todos os links.

---

## 3. Corporativo — dessaturado e conservador

Para franquias, redes de shopping e marcas que precisam da energia com sobriedade. Vermelho vira bordô técnico; mostarda vira ocre discreto; superfície esfria para off-white.

| Token | HEX | Uso |
|---|---|---|
| primary | `#7A1F27` | bordô — CTAs, links, texto de destaque (9.59:1) |
| accent | `#8A6A20` | ocre — sublinhados e detalhes; como texto grande apenas (4.73:1) |
| secondary | `#EBD9A8` | mostarda dessaturada — fundos de bloco suaves (texto carvão) |
| surface | `#FBF7F2` | fundo principal off-white |
| surface_alt | `#FFFFFF` | cards |
| text_primary | `#221510` | texto principal (16.65:1) |
| text_secondary | `#5C4A42` | apoio (7.83:1) |
| border | `#E3D6C8` | bordas |

**Contraste:** `#221510` sobre `#FBF7F2` = **16.65:1** (AAA) · `#7A1F27` sobre `#FBF7F2` = **9.59:1** (AAA) · branco sobre `#7A1F27` = **10.23:1** (AAA) · `#5C4A42` sobre `#FBF7F2` = **7.83:1** (AAA) · `#8A6A20` sobre `#FBF7F2` = **4.73:1** (AA — evitar em texto <18px).
**Nota:** rotações dos cards caem para ±0.5° (quase alinhado); sombra dura vira `shadow md` suave; Bebas mantém, mas 1 grau menor. A energia fica no vocabulário, não no visual gritante.

---

## 4. Energético — saturação elevada

Para lançamentos, combos e campanhas ("Semana do Duplo"). Vermelho e mostarda esquentam ao máximo; a página vira um grito de balcão.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FF2D3E` | vermelho-fogo — blocos e headlines grandes (3.62:1 → só ≥24px) |
| primary_dark | `#D91525` | vermelho textual e botão sólido pequeno (5.05:1) |
| secondary | `#FFC800` | mostarda-elétrica — badges, faixas, highlights (fundo, texto carvão) |
| surface | `#FFFDF7` | fundo principal quase-branco quente |
| surface_alt | `#FFE9C7` | seções de destaque |
| text_primary | `#221510` | texto principal |
| border | `#F0D9B0` | bordas |

**Contraste:** carvão `#221510` sobre `#FFC800` = **11.43:1** (AAA — badge mostarda) · `#D91525` sobre `#FFFDF7` = **5.05:1** (AA texto normal) · branco sobre `#D91525` = **5.14:1** (AA qualquer tamanho) · `#FF2D3E` sobre `#FFFDF7` = **3.62:1** (só texto grande) · branco sobre `#FF2D3E` = **3.69:1** (só Bebas ≥24px).
**Nota:** `#FFC800` sobre branco = **1.53:1** — decorativo/fundo apenas, jamais texto. Durações de motion caem para o limite (`instant` 100ms em tudo); `scale-punch` ganha overshoot maior. A regra branco-sobre-vermelho-só-grande fica ainda mais crítica aqui.

---

## 5. Minimal — quase monocromático

Um único vermelho como acento (regra: 1 bloco vermelho por viewport), sem mostarda. Para hamburguerias premium/autorais que querem sofisticação com apetite.

| Token | HEX | Uso |
|---|---|---|
| primary | `#9C2A32` | vermelho dessaturado — único acento (CTA + 1 highlight) (7.01:1) |
| secondary | `#EFE6DB` | bege neutro — fundos de bloco (substitui a mostarda) |
| surface | `#FBF6F1` | fundo principal quase-creme |
| surface_alt | `#FFFFFF` | cards |
| text_primary | `#221510` | texto principal (16.53:1) |
| text_secondary | `#5C4A42` | apoio (7.78:1) |
| border | `#E7DACD` | bordas |

**Contraste:** `#221510` sobre `#FBF6F1` = **16.53:1** (AAA) · `#9C2A32` sobre `#FBF6F1` = **7.01:1** (AAA) · branco sobre `#9C2A32` = **7.52:1** (AAA) · `#5C4A42` sobre `#FBF6F1` = **7.78:1** (AAA).
**Nota:** blobs, sombra dura e rotações desligados; sobra a foto de comida (agora o único elemento saturado) e a tipografia Bebas. O vermelho raro vale mais. Sem mostarda: preço vai em pill bege com texto carvão.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. **Branco sobre vermelho só em texto grande** (Bebas ≥24px / Manrope bold ≥18.66px). Vermelho pequeno usa sempre o tom escuro da variação.
3. **Mostarda (ou seu substituto) nunca é texto** — só fundo/decoração, com texto carvão por cima.
4. Botão sólido pequeno sempre com razão ≥ 4.5:1 entre texto e fundo (aqui todos ≥ 5:1 via tom escuro).
5. A personalidade (radius pílula/lg, Bebas uppercase, sombra dura deslocada, cards rotacionados, motion 100–300ms com snap/punch) não muda entre variações — só o registro de cor.
