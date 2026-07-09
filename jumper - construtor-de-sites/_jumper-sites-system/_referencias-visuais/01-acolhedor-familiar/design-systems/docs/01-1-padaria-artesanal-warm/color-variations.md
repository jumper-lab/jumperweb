# DS 01.1 — Padaria Artesanal Warm · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (terracota + warm) mudando o registro. Razões de contraste calculadas pela fórmula WCAG 2.1; valores marcados com ≈ são arredondados.

**Paleta-base (referência):** primary `#B85C38` · secondary `#E8B696` · surface `#FDF8F3` · text `#3E2A20`

---

## 1. Dark Mode — "Padaria à noite"

Inversão real da base: marrom-café profundo como superfície, terracota clareado para manter AA sobre escuro. Mood de café aceso depois do pôr do sol.

| Token | HEX | Uso |
|---|---|---|
| primary | `#E08B5F` | destaques, links, texto de marca sobre escuro |
| primary_button | `#B85C38` | botões (texto branco, 4.54:1 preservado) |
| secondary | `#E8B696` | acentos, assinaturas, ícones |
| surface | `#221610` | fundo principal (marrom-café profundo) |
| surface_alt | `#2E1F17` | cards e seções alternadas |
| text_primary | `#F5E9DD` | texto principal |
| text_secondary | `#D9BFA9` | texto de apoio |
| border | `#4A362A` | bordas e divisores |

**Contraste:** `#F5E9DD` sobre `#221610` = **14.8:1** (AAA) · `#E08B5F` sobre `#221610` = **6.7:1** (AA) · `#E8B696` sobre `#221610` = **9.7:1** (AAA) · `#D9BFA9` sobre `#221610` ≈ **9.5:1** (AAA).
**Nota:** sombras substituídas por bordas `#4A362A` + elevação por clareamento de surface (sombra não funciona sobre escuro). Blobs em `#2E1F17`.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para usuários com baixa visão ou preferência de contraste elevado (`prefers-contrast: more`). Todos os textos ≥ 7:1.

| Token | HEX | Uso |
|---|---|---|
| primary | `#7A3418` | terracota profundo — texto E botões (branco sobre ele: 9.0:1) |
| secondary | `#B85C38` | acentos grandes e decorativos |
| surface | `#FFFFFF` | fundo branco puro |
| surface_alt | `#F5EDE6` | alternância mínima |
| text_primary | `#1F120C` | quase-preto warm |
| text_secondary | `#4A3226` | apoio |
| border | `#7A5F50` | bordas reforçadas (≥3:1 contra surface) |

**Contraste:** `#1F120C` sobre `#FFFFFF` ≈ **17.9:1** (AAA) · `#7A3418` sobre `#FFFFFF` = **9.0:1** (AAA) · branco sobre `#7A3418` = **9.0:1** (AAA) · `#4A3226` sobre `#FFFFFF` ≈ **10.9:1** (AAA).
**Nota:** foco com outline sólido `#7A3418` 3px (sem transparência). Sublinhado obrigatório em todos os links. Sombras trocadas por bordas 2px.

---

## 3. Corporativo — dessaturado e conservador

Para clínicas de família e consultórios que precisam do calor com mais sobriedade. Terracota vira marrom-cobre discreto, bege quase neutro.

| Token | HEX | Uso |
|---|---|---|
| primary | `#8C5B44` | marca, botões (texto branco) |
| primary_dark | `#6E4634` | links e hover |
| secondary | `#D9C4B0` | fundos suaves, tags |
| surface | `#FAF8F6` | fundo principal (off-white neutro-quente) |
| surface_alt | `#F0EAE4` | seções alternadas |
| text_primary | `#332620` | texto principal |
| text_secondary | `#5C4C41` | apoio |
| border | `#DDD2C8` | bordas |

**Contraste:** `#8C5B44` sobre `#FAF8F6` = **5.4:1** (AA) · `#332620` sobre `#FAF8F6` ≈ **13.4:1** (AAA) · branco sobre `#8C5B44` ≈ **5.8:1** (AA) · `#5C4C41` sobre `#FAF8F6` ≈ **7.9:1** (AAA).
**Nota:** manter raios e motion do DS; reduzir itálicos de Lora a 1 uso por página. Fotografia mais serena, menos farinha no ar.

---

## 4. Energético — saturação elevada

Para confeitarias jovens, cafeterias de especialidade com público mais quente. Terracota mais vivo, bege puxado para pêssego.

| Token | HEX | Uso |
|---|---|---|
| primary | `#C24E1F` | marca e botões (texto branco: 4.8:1) |
| primary_dark | `#9E3E14` | links e texto normal (≈5.9:1 sobre surface) |
| secondary | `#FFB784` | pêssego vibrante — fundos e blobs |
| accent | `#E9A13B` | detalhe pontual (badges, sublinhados decorativos) |
| surface | `#FFF6EE` | creme mais quente |
| surface_alt | `#FFE9D6` | seções alternadas |
| text_primary | `#38220F` | texto principal |
| text_secondary | `#6B4A2E` | apoio |

**Contraste:** branco sobre `#C24E1F` = **4.8:1** (AA) · `#9E3E14` sobre `#FFF6EE` ≈ **5.9:1** (AA) · `#38220F` sobre `#FFF6EE` ≈ **13.5:1** (AAA) · `#FFB784` e `#E9A13B`: decorativos apenas (< 3:1).
**Nota:** durações de motion podem cair para 300–450ms nesta variação; hover-lift pode subir para -6px. Continua sem uppercase.

---

## 5. Minimal — quase monocromático

Tons terrosos próximos, contraste tonal baixo entre superfícies, tipografia carrega a hierarquia. Para marcas que querem o calor no mínimo volume.

| Token | HEX | Uso |
|---|---|---|
| primary | `#A0714F` | único acento — botões (texto branco via tom escuro) e detalhes |
| primary_dark | `#7D5539` | links e texto de destaque (≈6.1:1 sobre surface) |
| secondary | `#EFE3D6` | única superfície de apoio |
| surface | `#FBF7F2` | fundo |
| surface_alt | `#F4EDE4` | alternância sutil |
| text_primary | `#3B2E24` | texto principal |
| text_secondary | `#6E5D4F` | apoio |
| border | `#E7DCCE` | bordas quase invisíveis |

**Contraste:** `#3B2E24` sobre `#FBF7F2` ≈ **12.3:1** (AAA) · `#7D5539` sobre `#FBF7F2` ≈ **6.1:1** (AA) · `#A0714F` sobre `#FBF7F2` ≈ **3.9:1** — apenas texto grande; botões usam `#7D5539` com branco (**≈6.1:1**, AA).
**Nota:** nesta variação as sombras caem para xs/sm apenas, blobs somem, e a hierarquia vem de tamanho tipográfico + espaço. O itálico da Lora vira o único "tempero".

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. Bege/pêssego claros (`#E8B696`, `#FFB784`, `#D9C4B0`, `#EFE3D6`) **nunca** são cor de texto sobre superfícies claras.
3. Botão primário sempre com razão ≥ 4.5:1 entre texto e fundo.
4. A personalidade (pill buttons, raios 24px, Lora + Inter, motion 400–600ms) não muda entre variações — só o registro de cor.
