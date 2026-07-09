# DS 02.3 — Hotel Boutique Luxuoso · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (Fraunces + Lora, cantos retos, ouro escasso, grid magazine assimétrico, reveals lentos) mudando apenas o registro de cor. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary/surface `#2A1F14` (marrom queimado) · surface_alt `#382B1C` · secondary `#D4A574` (ouro) · text `#F5EDE1` · text_secondary `#CBB89F` · text_muted `#9A8568` (só sobre surface base)

> Observação estrutural: **a base já é dark.** Por isso a "variação 1" não é um dark mode (seria idêntica), e sim a inversão inversa — um **modo claro editorial**. As demais variações permanecem no eixo escuro/quente da personalidade.

---

## 1. Light Editorial — "A casa de dia" (inversão da base)

O oposto natural do DS: o marrom vira tinta sobre off-white quente. O ouro precisa escurecer para virar tinta legível sobre claro (regra explícita do JSON: em contexto claro, escurecer para `#8A6A3F`).

| Token | HEX | Uso |
|---|---|---|
| primary | `#2A1F14` | marrom — agora é texto e botões |
| secondary | `#D4A574` | ouro — decorativo sobre claro (filetes, molduras) |
| gold_ink | `#8A6A3F` | tinta do ouro — links, eyebrows, numerais sobre claro (4.67:1) |
| surface | `#FBF7F1` | off-white quente (neutral-50 da base) |
| surface_alt | `#F5EDE1` | seções alternadas (neutral-100) |
| surface_deep | `#2A1F14` | faixa escura única (CTA imersivo / footer) |
| text_primary | `#2A1F14` | texto principal |
| text_secondary | `#5A4A38` | apoio |
| border | `#E6D8C3` | bordas |

**Contraste:** `#2A1F14` sobre `#FBF7F1` = **15.08:1** (AAA) · `#8A6A3F` sobre `#FBF7F1` = **4.67:1** (AA) · branco sobre `#8A6A3F` = **4.98:1** (AA, botão sólido dourado escuro) · `#5A4A38` sobre `#FBF7F1` = **7.96:1** (AAA) · `#D4A574`: decorativo apenas sobre claro (~1.9:1).
**Nota:** o véu sobre imagens some (não há mais fundo escuro dominante); botão primário vira marrom sólido com texto marfim, ou `gold_ink` sólido com texto branco. A fotografia perde a exigência de véu, mas mantém tons quentes. Ouro claro **nunca** como texto — sempre `gold_ink`.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para usuários com baixa visão ou `prefers-contrast: more`, no eixo escuro. Fundo mais profundo, ouro e textos empurrados para ≥ 10:1.

| Token | HEX | Uso |
|---|---|---|
| primary/surface | `#1A130B` | marrom quase-preto (fundo) |
| surface_alt | `#241A10` | alternância mínima |
| secondary | `#E7C48A` | ouro clareado — links, CTA, filetes (11.09:1) |
| text_primary | `#F7F1E8` | marfim reforçado (16.38:1) |
| text_secondary | `#D8C4A8` | apoio (10.84:1) |
| text_muted | `#D8C4A8` | muted eliminado — usa-se o secondary reforçado |
| border | `#6E5B41` | bordas reforçadas (≥3:1 contra surface) |

**Contraste:** `#F7F1E8` sobre `#1A130B` = **16.38:1** (AAA) · `#E7C48A` sobre `#1A130B` = **11.09:1** (AAA) · `#D8C4A8` sobre `#1A130B` = **10.84:1** (AAA) · texto `#1A130B` sobre botão `#E7C48A` = **11.09:1** (AAA).
**Nota:** o `text_muted` de baixo contraste da base sai do tema (nada abaixo de ~10:1). Filetes dourados sobem de 1px para 2px; foco com outline sólido `#E7C48A` 3px sem transparência; underline obrigatório em todos os links. O véu sobre imagens sobe para `rgba(12,8,4,0.6)`.

---

## 3. Corporativo — dessaturado e sóbrio

Para hotelaria de negócios, arquitetura corporativa ou fine dining institucional que quer gravidade sem o brilho do ouro. O marrom esfria para um taupe-grafite; o ouro vira bronze acinzentado.

| Token | HEX | Uso |
|---|---|---|
| primary/surface | `#22201A` | taupe-grafite escuro (fundo) |
| surface_alt | `#2E2B23` | seções alternadas |
| secondary | `#A99C86` | bronze acinzentado — decorativo (filetes, molduras) |
| accent_gold | `#BEA98A` | acento textual sóbrio — links, numerais (7.16:1) |
| text_primary | `#EDE7DD` | marfim neutro |
| text_secondary | `#CFC7B8` | apoio |
| text_muted | `#A99C86` | metadados sobre surface base apenas |
| border | `#463F32` | bordas |

**Contraste:** `#EDE7DD` sobre `#22201A` = **13.24:1** (AAA) · `#BEA98A` sobre `#22201A` = **7.16:1** (AAA) · `#A99C86` sobre `#22201A` = **6.04:1** (AA/AAA) · botão `accent_gold` `#BEA98A` com texto `#22201A` = **7.16:1** (AAA).
**Nota:** mantém cantos retos, filetes e motion; itálico de Fraunces cai para 0–1 uso por página. Fotografia com tons mais neutros (menos saturação âmbar). O ouro vibrante da base sai — o acento é bronze contido.

---

## 4. Energético — ouro vivo

Para casas que querem presença e calor sem perder a base escura. O ouro sutil vira ouro vivo; a superfície aquece um passo em direção ao âmbar.

| Token | HEX | Uso |
|---|---|---|
| primary/surface | `#2A1B0C` | marrom mais quente e profundo |
| surface_alt | `#3A2712` | seções alternadas |
| secondary | `#E8B461` | ouro vivo — CTAs, filetes, numerais, links (8.83:1) |
| gold_hover | `#F0C67E` | hover do ouro vivo |
| text_primary | `#F7ECDA` | marfim quente (14.25:1) |
| text_secondary | `#D9C2A0` | apoio |
| text_muted | `#B39872` | metadados sobre surface base |
| border | `#54401F` | bordas |

**Contraste:** `#F7ECDA` sobre `#2A1B0C` = **14.25:1** (AAA) · `#E8B461` sobre `#2A1B0C` = **8.83:1** (AAA) · texto `#2A1B0C` sobre botão `#E8B461` = **8.83:1** (AAA).
**Nota:** durações de motion podem cair para 400–800ms (mais presença sem perder a calma); o véu sobre imagens pode clarear para `rgba(42,27,12,0.35)`. O ouro vivo agora aparece em blocos um pouco maiores, mas a regra de escassez segue como norte estético.

---

## 5. Minimal — quase sem ouro

O ouro quase desaparece; a hierarquia vem de tipografia, espaço e escuro. Para a expressão mais austera do DS — arquitetura de altíssimo padrão ou refúgio monástico.

| Token | HEX | Uso |
|---|---|---|
| primary/surface | `#231C13` | marrom neutro profundo |
| surface_alt | `#2F2618` | alternância sutil |
| secondary | `#B8A88C` | único acento — filetes finíssimos (decorativo/texto discreto 7.23:1) |
| text_primary | `#F2EBDF` | marfim principal (14.21:1) |
| text_secondary | `#CBB89F` | apoio (8.74:1) |
| text_muted | `#9A8568` | metadados sobre surface base |
| border | `#3E3223` | bordas quase invisíveis |

**Contraste:** `#F2EBDF` sobre `#231C13` = **14.21:1** (AAA) · `#CBB89F` sobre `#231C13` = **8.74:1** (AAA) · `#B8A88C` sobre `#231C13` = **7.23:1** (AAA — usado com muita parcimônia como texto/filete).
**Nota:** nesta variação o único momento de cor é o filete `reveal-line`; os CTAs viram outline neutro (borda `#B8A88C`) preenchendo com bege muito discreto no hover; o `image-scale-settle` mantém-se, mas o hover dos cards perde o realce dourado do título (só sutil clareamento). Fraunces segura a personalidade sozinha.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. Ouros claros (`#D4A574`, `#E8B461`, `#A99C86`, `#B8A88C`) **nunca** são cor de texto sobre superfícies claras — em contexto claro, usar a versão "ink" (`#8A6A3F` na variação Light).
3. `text_muted` só sobre a surface base de cada variação; sobre `surface_alt` usar `text_secondary` ou superior.
4. Botão sólido sempre com razão ≥ 4.5:1 entre texto e fundo.
5. Texto sobre imagem sempre com véu escuro garantindo ≥ 4.5:1 (véu mais forte no High Contrast).
6. A personalidade (cantos retos, filete de 64px, Fraunces+Lora, grid magazine assimétrico, reveals ≤ 1200ms, parallax ≤ 6%) não muda entre variações — só o registro de cor.
