# Variações de Cor — Cerâmica Artesanal (DS 05.2)

**Personalidade:** 05 — Artesanal e Autêntico
**Paleta-base:** terracota crua fosca `#9B6B47` (primary) + preto-fumaça `#4A4A48` (secondary), sobre off-white `#F5F0E8`, seções moody `#262523`.

Todos os contrastes abaixo foram **calculados** com a fórmula de luminância relativa WCAG 2.1. Cada variação preserva a alma matérica/escultural do DS — muda a temperatura, não a personalidade.

---

## 0. Referência — paleta base

| Papel | HEX | Contraste (uso principal) |
|---|---|---|
| primary | `#9B6B47` | 4.04:1 sobre surface (só display/CTA) |
| secondary | `#4A4A48` | 7.83:1 sobre surface (AAA) |
| surface | `#F5F0E8` | — |
| text | `#2B2A28` | 12.64:1 sobre surface (AAA) |

---

## 1. Dark mode — inversão real

Seção smoke vira o palco. Terracota migra para a versão clara (`primary_light`), texto para off-white. Botões mantêm `#9B6B47` com texto branco (4.58:1 continua válido em qualquer contexto).

| Papel | HEX | Contraste calculado |
|---|---|---|
| primary (display/destaque) | `#C89A76` | **6.83:1** sobre `#1C1B19` — AA ✓ |
| secondary (texto de apoio) | `#AFA79A` | **7.23:1** sobre `#1C1B19` — AAA ✓ |
| surface | `#1C1B19` | — (fundo base escuro) |
| surface_alt | `#262523` | — |
| text | `#EDE5D8` | **13.77:1** sobre `#1C1B19` — AAA ✓ |
| botão primário (texto branco) | `#9B6B47` | **4.58:1** (`#FFFFFF` sobre primary) — AA ✓ |

**Nota:** invertemos a hierarquia de superfícies (smoke_deep passa de "acento" a "base"); a terracota crua `#9B6B47` como texto sobre `#1C1B19` daria só ~3.1:1, por isso texto/destaque usam `#C89A76`.

---

## 2. High contrast — AAA

Máxima legibilidade sobre branco puro. Terracota escurecida para leitura confortável; mantém a família de tons de barro.

| Papel | HEX | Contraste calculado |
|---|---|---|
| primary | `#5E3F26` | **9.48:1** sobre `#FFFFFF` — AAA ✓ |
| secondary | `#2E2E2C` | **13.61:1** sobre `#FFFFFF` — AAA ✓ |
| surface | `#FFFFFF` | — |
| text | `#1A1917` | **17.57:1** sobre `#FFFFFF` — AAA ✓ |

**Nota:** todos os textos ≥ 7:1 (AAA para texto normal). Ideal para modo de alto contraste do sistema operacional.

---

## 3. Corporativo — dessaturado / conservador

Terracota puxada para o cinza-terroso, menos "artesanal cru", mais institucional. Bom para páginas jurídicas, sobre a empresa, B2B sóbrio.

| Papel | HEX | Contraste calculado |
|---|---|---|
| primary | `#6E5A49` | **5.79:1** sobre `#F4F1EC` — AA ✓ |
| secondary | `#55534E` | **6.82:1** sobre `#F4F1EC` — AA ✓ |
| surface | `#F4F1EC` | — |
| text | `#2E2C29` | **12.36:1** sobre `#F4F1EC` — AAA ✓ |

**Nota:** saturação reduzida ~40% na terracota; o tom vira "argila lavada". Mantém temperatura quente sem chamar atenção.

---

## 4. Energético — saturação elevada

Terracota mais viva e alaranjada, off-white mais quente. Para campanhas e drops de coleção, sem trair o mood.

| Papel | HEX | Contraste calculado |
|---|---|---|
| primary (display/CTA) | `#B15A25` | **4.38:1** sobre `#FBF3E9` — AA texto grande ✓ (usar em display/CTA) |
| botão primário (texto branco) | `#B15A25` | **4.82:1** (`#FFFFFF` sobre primary) — AA ✓ |
| secondary | (reaproveitar `#4A4A48`) | 7.83:1 sobre surface — AAA ✓ |
| surface | `#FBF3E9` | — |
| text | `#2B2A28` | **13.04:1** sobre `#FBF3E9` — AAA ✓ |

**Nota:** a primary saturada `#B15A25` rende 4.38:1 — como a base, é token de **display/CTA**, não de texto normal. Para texto em terracota use a `primary_dark` da base (`#7A5236`).

---

## 5. Minimal — quase monocromático

Tons próximos de barro seco, contraste tonal suave. Para editorial silencioso, portfólio de peça única, páginas de leitura longa.

| Papel | HEX | Contraste calculado |
|---|---|---|
| primary | `#7A6B5C` | **4.45:1** sobre `#F2EEE7` — AA texto grande ✓ / limite para texto normal |
| secondary | `#6B655C` | **4.99:1** sobre `#F2EEE7` — AA ✓ |
| surface | `#F2EEE7` | — |
| text | `#3A3733` | **10.24:1** sobre `#F2EEE7` — AAA ✓ |

**Nota:** paleta deliberadamente próxima (quase mono). `primary #7A6B5C` fica no limiar — reservar para display/eyebrows; leitura sempre no `text #3A3733`. Hierarquia sustentada por **tamanho e peso**, não por cor.

---

## Regras que valem em todas as variações

1. A cor primária terracota, em qualquer variação, é **cor de superfície/display/CTA** — nunca a fonte de leitura em texto normal (exceto quando explicitamente ≥ 4.5:1).
2. Botões primários sempre com **texto branco** (o par branco-sobre-terracota se mantém ≥ 4.5:1 nas variações testadas).
3. Foco visível obrigatório: outline terracota escura em fundo claro, terracota clara em fundo escuro.
4. Movimento respeita `prefers-reduced-motion` independentemente da paleta.
