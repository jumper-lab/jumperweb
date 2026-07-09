# DS 02.1 — Advocacia Sofisticada · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (quase-preto + dourado como fio condutor, Playfair Display + Inter, cantos retos, hairlines) mudando apenas o registro de cor. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary `#1A1A1A` · secondary `#C9A961` (decorativo sobre claro) · gold_ink `#83672B` · surface `#FAF9F7` · surface_dark `#14161C` · text `#1A1A1A`

---

## 1. Dark Mode — "A firma à noite"

Inversão real da base: o azul-noite `surface_dark` do DS vira a superfície principal. Aqui o dourado champagne finalmente é liberado como texto — sobre escuro ele passa com folga.

| Token | HEX | Uso |
|---|---|---|
| primary | `#C9A961` | acento de marca, links, numeração, stats — agora como tinta |
| primary_button | `#C9A961` | botão primário (texto `#14161C`, 8.04:1) |
| secondary | `#83672B` | hairlines e filetes de menor destaque |
| surface | `#14161C` | fundo principal (azul-noite da base) |
| surface_alt | `#1D2027` | cards e seções alternadas |
| text_primary | `#FAF9F7` | texto principal |
| text_secondary | `#C5C2BA` | texto de apoio |
| text_muted | `#A8A49A` | legendas e metadados |
| border | `#3F3E3A` | bordas e divisores |

**Contraste:** `#FAF9F7` sobre `#14161C` = **17.19:1** (AAA) · `#C9A961` sobre `#14161C` = **8.04:1** (AAA) · `#C5C2BA` sobre `#14161C` = **10.16:1** (AAA) · `#A8A49A` sobre `#14161C` = **7.27:1** (AAA) · `#C9A961` sobre `#1D2027` = **7.24:1** (AAA) · texto `#14161C` sobre botão `#C9A961` = **8.04:1** (AAA).
**Nota:** sombras (já quase ausentes na base) substituídas por elevação via `surface_alt` + hairlines dourados. Fotografia B&W ganha `brightness(0.9)` para não estourar sobre o fundo escuro. O token `gold_ink` perde a função (era exclusivo para claro) — documentar no tema.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para usuários com baixa visão ou `prefers-contrast: more`. Todos os textos ≥ 7:1.

| Token | HEX | Uso |
|---|---|---|
| primary | `#000000` | texto principal e botões (branco sobre ele: 21:1) |
| gold_ink | `#6B531F` | dourado-tinta reforçado — links, eyebrows (7.29:1) |
| secondary | `#83672B` | apenas decorativo e texto grande (5.33:1) |
| surface | `#FFFFFF` | fundo branco puro |
| surface_alt | `#F2F0EB` | alternância mínima |
| text_primary | `#000000` | preto puro |
| text_secondary | `#57534A` | apoio (7.66:1) |
| border | `#5C5A54` | bordas reforçadas (≥3:1 contra surface) |

**Contraste:** `#000000` sobre `#FFFFFF` = **21:1** (AAA) · `#6B531F` sobre `#FFFFFF` = **7.29:1** (AAA) · `#57534A` sobre `#FFFFFF` = **7.66:1** (AAA) · branco sobre `#000000` = **21:1** (AAA).
**Nota:** hairlines dourados sobem de 2px para 3px; foco com outline sólido `#6B531F` 3px sem transparência; sublinhado obrigatório em todos os links; `#C9A961` sai completamente do tema (1.92:1 sobre branco — nem decorativo, para não sugerir interatividade ilegível).

---

## 3. Corporativo — dessaturado e conservador

Para bancas full-service, auditorias e consultorias que preferem gravidade sem o brilho do ouro. O dourado vira bronze-acinzentado; o quase-preto esfria um passo.

| Token | HEX | Uso |
|---|---|---|
| primary | `#22262C` | grafite-azulado — headings, botões (texto branco) |
| secondary | `#A9A28E` | acento decorativo (hairlines, ornamentos) |
| accent_ink | `#625B44` | versão tinta do acento — eyebrows, links (6.32:1) |
| surface | `#F7F7F5` | fundo principal (off-white neutro) |
| surface_alt | `#ECECE8` | seções alternadas |
| surface_dark | `#191C21` | faixas escuras e footer |
| text_primary | `#22262C` | texto principal |
| text_secondary | `#4A4A46` | apoio |
| border | `#DDDDD7` | bordas |

**Contraste:** `#22262C` sobre `#F7F7F5` = **14.17:1** (AAA) · branco sobre `#22262C` = **15.20:1** (AAA) · `#625B44` sobre `#F7F7F5` = **6.32:1** (AA/AAA) · `#4A4A46` sobre `#F7F7F5` = **8.30:1** (AAA) · `#A9A28E`: decorativo apenas (<3:1).
**Nota:** manter cantos retos, hairlines e motion intactos; itálico de Playfair cai para 0–1 uso por página. Fotografia B&W com contraste um ponto menor (`contrast(1.0)`).

---

## 4. Energético — saturação elevada

Para bancas jovens de contencioso agressivo ou consultorias que querem presença. O champagne vira ouro vivo; a superfície aquece para marfim.

| Token | HEX | Uso |
|---|---|---|
| primary | `#1A1A1A` | mantido — a âncora não muda |
| secondary | `#D9A73E` | ouro vivo — hairlines, numeração, stats (decorativo sobre claro) |
| gold_ink | `#7A5C10` | tinta do ouro vivo — links e eyebrows (5.79:1) |
| surface | `#FBF6EC` | marfim quente |
| surface_alt | `#F4EBD8` | seções alternadas |
| surface_dark | `#14161C` | mantido para faixas escuras |
| text_primary | `#171310` | quase-preto aquecido |
| text_secondary | `#4A4238` | apoio |
| border | `#E8DFC9` | bordas |

**Contraste:** `#171310` sobre `#FBF6EC` = **17.15:1** (AAA) · `#7A5C10` sobre `#FBF6EC` = **5.79:1** (AA) · `#1A1A1A` sobre `#FBF6EC` = **16.16:1** (AAA) · `#D9A73E` sobre `#FBF6EC` = **2.04:1** — decorativo apenas; sobre `#14161C` = ~9:1, liberado como texto em faixas escuras.
**Nota:** durações de motion podem cair para 250–400ms; hairline-draw pode crescer até 64px. A regra de ouro continua: ouro vivo **nunca** como texto sobre claro — sempre via `gold_ink`.

---

## 5. Minimal — quase monocromático

O dourado quase desaparece; a hierarquia vem de tipografia e espaço. Para pareceristas e boutiques de um sócio só, onde até o acento é discrição.

| Token | HEX | Uso |
|---|---|---|
| primary | `#2B2A27` | tinta principal — headings, botões |
| secondary | `#B5AD9C` | único acento — hairlines finíssimos (decorativo) |
| accent_ink | `#6E6A5E` | links e eyebrows (5.14:1) |
| surface | `#FAF9F7` | fundo (mantido da base) |
| surface_alt | `#F4F3F0` | alternância sutil |
| surface_dark | `#26262A` | faixa escura única (CTA final) |
| text_primary | `#2B2A27` | texto principal |
| text_secondary | `#55534C` | apoio |
| border | `#E7E5DF` | bordas quase invisíveis |

**Contraste:** `#2B2A27` sobre `#FAF9F7` = **13.64:1** (AAA) · `#6E6A5E` sobre `#FAF9F7` = **5.14:1** (AA) · `#B5AD9C`: decorativo apenas · tom `#8A857A` testado para muted mede **3.49:1** — reprovado para texto normal, permitido só ≥24px.
**Nota:** nesta variação o card-lift perde a sombra (só o filete expande), a barra de prova social vira texto corrido e o único momento de cor é o hairline. Playfair segura a personalidade sozinha.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. Dourados claros (`#C9A961`, `#D9A73E`, `#A9A28E`, `#B5AD9C`) **nunca** são cor de texto sobre superfícies claras — todo texto dourado usa a versão "ink" da variação.
3. Botão primário sempre com razão ≥ 4.5:1 entre texto e fundo.
4. A personalidade (cantos retos, hairline de 48px, Playfair + Inter, motion ≤ 500ms, B&W na fotografia) não muda entre variações — só o registro de cor.
