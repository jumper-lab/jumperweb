# DS 02.2 — Clínica Dental Premium · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (leveza tonal, Cormorant Garamond + Inter, botões pílula, sombras difusas, ritmo de spa) mudando apenas o registro de cor. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary `#6B8E6F` (sage, atmosfera) · primary_dark `#4A6B4F` (texto/CTA, 5.69:1) · secondary `#E8D5B7` (champagne, decorativo) · surface `#FAF9F6` · surface_alt `#EEF2EC` · surface_champagne `#F5EEE0` · text `#2C332E`

> Regra que atravessa todas as variações: **sage claro e champagne são cores de atmosfera; toda informação textual usa a versão "ink" (escurecida) da variação.**

---

## 1. Dark Mode — "A clínica ao anoitecer"

Inversão real da base: o verde-grafite do texto (`#2C332E`, hue sage) vira a superfície principal. O sage é clareado para funcionar como acento/texto sobre escuro.

| Token | HEX | Uso |
|---|---|---|
| primary | `#8FB396` | sage clareado — headings grandes, ícones, acento |
| primary_dark | `#8FB396` | agora é o verde de texto/link sobre escuro (6.82:1) |
| secondary | `#E8D5B7` | champagne — sublinhados, molduras, ornamentos (liberado como texto: 11.02:1) |
| surface | `#1E241F` | verde-grafite profundo (fundo principal) |
| surface_alt | `#28302A` | cards e seções alternadas |
| surface_champagne | `#2E2A22` | seção de destaque suave |
| text_primary | `#F5EEE0` | texto principal (marfim quente) |
| text_secondary | `#C7CBC4` | texto de apoio |
| border | `#3A423C` | bordas e divisores |

**Contraste:** `#F5EEE0` sobre `#1E241F` = **13.70:1** (AAA) · `#8FB396` sobre `#1E241F` = **6.82:1** (AA/AAA) · `#E8D5B7` sobre `#1E241F` = **11.02:1** (AAA) · `#C7CBC4` sobre `#1E241F` = **9.62:1** (AAA) · texto `#2C332E` sobre botão `#8FB396` = **5.59:1** (AA).
**Nota:** botão sólido usa `#8FB396` de fundo com texto `#2C332E` (5.59:1). As sombras (difusas na base) dão lugar à elevação por `surface_alt`. Fotografia tonal ganha `brightness(0.9)` para não estourar. O par oficial de seção champagne muda para texto marfim sobre `surface_champagne` escuro.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para usuários com baixa visão ou `prefers-contrast: more`. Todos os textos ≥ 7:1; o sage escurece bastante para virar tinta legível.

| Token | HEX | Uso |
|---|---|---|
| primary_dark | `#2E4A34` | verde-tinta reforçado — links, CTA, texto verde (9.79:1) |
| secondary | `#8A6D1F` | champagne substituído por âmbar-tinta para qualquer sinal informativo (5.43:1) |
| surface | `#FFFFFF` | branco puro |
| surface_alt | `#EEF2EC` | alternância mínima |
| text_primary | `#1A2A1E` | quase-preto esverdeado (15.07:1) |
| text_secondary | `#4A524B` | apoio (8.08:1) |
| border | `#5A625C` | bordas reforçadas (≥3:1 contra surface) |

**Contraste:** `#1A2A1E` sobre `#FFFFFF` = **15.07:1** (AAA) · `#2E4A34` sobre `#FFFFFF` = **9.79:1** (AAA) · branco sobre `#2E4A34` = **9.79:1** (AAA) · `#4A524B` sobre `#FFFFFF` = **8.08:1** (AAA).
**Nota:** `#E8D5B7` (champagne) e `#6B8E6F` (sage claro) saem completamente como portadores de sinal — champagne (1.36:1 sobre branco) nem decorativo com função. Sublinhado obrigatório em todos os links; foco com outline sólido `#2E4A34` 3px sem transparência; halo dos inputs vira borda cheia 2px.

---

## 3. Corporativo — dessaturado e conservador

Para clínicas e consultórios que preferem sobriedade institucional ao verde-spa. O sage esfria para um verde-grafite quase neutro; o champagne vira um bege acinzentado.

| Token | HEX | Uso |
|---|---|---|
| primary | `#4B5C4F` | verde-grafite dessaturado — headings grandes, ícones |
| primary_dark | `#33403A` | texto/link/CTA (10.03:1) |
| secondary | `#C9C3B4` | bege acinzentado — decorativo (molduras, sublinhados) |
| accent_ink | `#5C6560` | versão tinta do acento — eyebrows, labels (5.57:1) |
| surface | `#F6F6F4` | off-white neutro |
| surface_alt | `#ECECE9` | seções alternadas |
| footer_bg | `#22282A` | faixa escura e footer |
| text_primary | `#22282A` | texto principal |
| text_secondary | `#4B524D` | apoio |
| border | `#DBDBD5` | bordas |

**Contraste:** `#33403A` sobre `#F6F6F4` = **10.03:1** (AAA) · branco sobre `#33403A` = **10.85:1** (AAA) · `#5C6560` sobre `#F6F6F4` = **5.57:1** (AA) · `#C9C3B4`: decorativo apenas (<3:1).
**Nota:** mantém pílulas, sombras difusas e motion intactos; itálico de Cormorant cai para 0–1 uso por página. Fotografia tonal com overlay neutro (não sage) para reforçar a sobriedade.

---

## 4. Energético — saturação elevada

Para clínicas jovens que querem presença e vitalidade sem perder a base premium. O sage vira um verde-esmeralda vivo; a superfície aquece levemente.

| Token | HEX | Uso |
|---|---|---|
| primary | `#3E9E63` | verde vivo — headings grandes, ícones, faixas |
| primary_dark | `#2C7A4E` | texto/link/CTA (4.99:1) |
| secondary | `#E8D5B7` | champagne mantido — decorativo |
| gold_ink | `#8A6D1F` | tinta do champagne para eyebrows/labels sobre claro (4.65:1) |
| surface | `#FFFDF7` | marfim quente |
| surface_alt | `#EDF5EC` | tint de verde para seções alternadas |
| surface_champagne | `#F5EEE0` | mantido |
| text_primary | `#20261F` | quase-preto esverdeado |
| text_secondary | `#4E564E` | apoio |
| border | `#DDE7DC` | bordas |

**Contraste:** `#2C7A4E` sobre `#FAF9F6` = **4.99:1** (AA) · branco sobre `#2C7A4E` = **5.25:1** (AA, botão sólido) · `#217A46` sobre `#FFFDF7` = **5.24:1** (AA, alternativa mais escura para textos longos) · `#E8D5B7`: decorativo apenas sobre claro.
**Nota:** durações de motion podem cair para 160–280ms (mais vivo); o overlay tonal das imagens fica em 8% (menos velado). A regra continua: verde vivo só como texto via `primary_dark`; champagne nunca como texto sobre claro.

---

## 5. Minimal — quase monocromático

O verde e o champagne quase desaparecem; a hierarquia vem de tipografia e espaço. Para consultórios de um profissional só, onde até o acento é discrição.

| Token | HEX | Uso |
|---|---|---|
| primary | `#5C6B5F` | verde-neutro suave — headings grandes apenas |
| primary_dark | `#3A423C` | texto/link/CTA (10.01:1) |
| secondary | `#D9D3C6` | único acento — molduras finíssimas (decorativo) |
| accent_ink | `#5F6862` | eyebrows e labels (5.56:1) |
| surface | `#FBFBF9` | off-white quase neutro |
| surface_alt | `#F3F3F0` | alternância sutil |
| surface_champagne | `#F5EEE0` | mantido, usado com muita parcimônia |
| text_primary | `#2A302B` | texto principal |
| text_secondary | `#565C57` | apoio |
| border | `#E6E6E1` | bordas quase invisíveis |

**Contraste:** `#3A423C` sobre `#FBFBF9` = **10.01:1** (AAA) · `#5F6862` sobre `#FBFBF9` = **5.56:1** (AA) · `#D9D3C6`: decorativo apenas · tom `#7E837D` testado para muted mede ~4.1:1 — permitido só como texto ≥18.66px.
**Nota:** nesta variação o shadow-lift perde a sombra maior (só translateY(-2px) sutil); a seção de depoimento vira fundo `surface_alt` em vez de champagne; o único momento de cor é o ícone linear dos cards. Cormorant segura a personalidade sozinho.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. Sages claros (`#6B8E6F`, `#8FB396`, `#3E9E63`, `#4B5C4F`, `#5C6B5F`) e champagnes (`#E8D5B7`, `#C9C3B4`, `#D9D3C6`) **nunca** são cor de texto normal sobre superfícies claras — todo texto usa a versão "dark/ink" da variação.
3. Botão sólido sempre com razão ≥ 4.5:1 entre texto e fundo.
4. Champagne (ou seu equivalente) só carrega texto quando o fundo é escuro (ver Dark Mode: 11.02:1).
5. A personalidade (pílulas, cards com radius lg, sombras difusas tingidas do texto, motion sereno ≤ 800ms, fotografia tonal) não muda entre variações — só o registro de cor.
