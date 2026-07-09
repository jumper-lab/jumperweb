# Variações de Cor — Fintech Confiança (04.2)

**Design System:** Fintech Confiança (`04.2`)
**Base:** light mode, navy `#0F3460` (primary) + verde-estabilidade `#16A085` (secondary), estilo Stripe.
**Regra herdada da base:** o verde-marca `#16A085` (3.28:1 sobre branco) é **decorativo/large text**; para texto normal use a variante segura `#0E7A65` (5.26:1). Toda variação abaixo mantém essa disciplina.

> Todas as razões de contraste foram **calculadas de verdade** pela fórmula de luminância relativa da WCAG 2.1 (mesma metodologia do `accessibility-report.md`). Limiares: texto normal AA ≥ 4.5:1, AAA ≥ 7:1; large text/UI ≥ 3:1.

---

## Paleta base (referência)

| Papel | HEX | Contraste sobre surface | Nível |
|---|---|---|---|
| Primary (navy) | `#0F3460` | 12.50:1 | AAA |
| Secondary (verde-marca) | `#16A085` | 3.28:1 | Só large/gráfico |
| Verde-texto seguro | `#0E7A65` | 5.26:1 | AA |
| Surface | `#FFFFFF` | — | — |
| Surface alt | `#F6F9FC` | — | — |
| Texto primário | `#0F1F35` | 16.57:1 | AAA |

---

## 1. Dark Mode — inversão real com contraste recalculado

Fundo navy profundo, superfície elevada mais clara, texto quase-branco frio. O verde e o navy **clareiam** para ganhar luminância suficiente sobre fundo escuro.

| Papel | HEX | Sobre | Razão | Nível |
|---|---|---|---|---|
| Background | `#0B1B2E` | — | — | — |
| Surface (card) | `#12263F` | — | — | — |
| **Primary** (navy claro, ação/links) | `#6AA3E0` | `#0B1B2E` | **6.55:1** | AA |
| **Secondary** (verde claro) | `#2ECFA8` | `#0B1B2E` | **8.76:1** | AAA |
| Secondary sobre surface | `#2ECFA8` | `#12263F` | **7.72:1** | AAA |
| **Texto primário** | `#E8EEF6` | `#0B1B2E` | **14.86:1** | AAA |
| Texto primário sobre surface | `#E8EEF6` | `#12263F` | **13.09:1** | AAA |
| **Texto secundário** | `#A9B8CE` | `#0B1B2E` | **8.62:1** | AAA |
| Texto de botão primário | `#0B1B2E` | `#6AA3E0` | **6.55:1** | AA (large ok; use navy escuro como label) |
| Borda | `#22344D` | — | — | UI |

**Notas de contraste:** no dark mode o verde volta a poder ser **texto** (`#2ECFA8` = 8.76:1) porque o fundo é escuro — a restrição do `#16A085` era específica de fundo branco. Botões primários usam label navy escuro sobre azul claro (`#6AA3E0`); para label branco, use um azul mais escuro como fundo.

---

## 2. High Contrast — AAA

Empurra todos os pares para ≥ 7:1 (texto normal AAA). Navy mais escuro, verde-texto mais escuro, texto quase preto.

| Papel | HEX | Sobre `#FFFFFF` | Nível |
|---|---|---|---|
| **Primary** | `#0A2647` | **15.20:1** | AAA |
| **Secondary / verde-texto** | `#0A5F4E` | **7.61:1** | AAA |
| **Texto primário** | `#0A1626` | **18.17:1** | AAA |
| **Texto secundário / muted** | `#3E4C63` | **8.68:1** | AAA |
| Branco sobre primary (botão) | `#FFFFFF` / `#0A2647` | **15.20:1** | AAA |
| Surface | `#FFFFFF` | — | — |
| Surface alt | `#EEF3F8` | — | — |
| Borda | `#94A3B8` | 2.72:1 (borda mais forte, UI ok) | UI |

**Notas de contraste:** nesta variação **até o "muted" atinge AAA** (8.68:1) e não há mais token verde reprovado — o verde vira `#0A5F4E` (7.61:1), texto normal AAA. Ideal para setores regulados e usuários com baixa visão.

---

## 3. Corporativo — dessaturado / conservador

Mesma estrutura, saturação reduzida. Navy vira ardósia, verde vira verde-cinza sóbrio. Sensação institucional, menos "tech".

| Papel | HEX | Sobre `#FFFFFF` | Nível |
|---|---|---|---|
| **Primary** (navy ardósia) | `#24425F` | **10.40:1** | AAA |
| **Secondary** (verde-cinza) | `#3F7A6C` | **4.99:1** | AA (texto normal) |
| **Texto primário** | `#1E2A3A` | **14.51:1** | AAA |
| **Texto secundário** | `#42526E` | 7.89:1 | AAA |
| Branco sobre primary (botão) | `#FFFFFF` / `#24425F` | **10.40:1** | AAA |
| Surface | `#FFFFFF` | — | — |
| Surface alt | `#F2F5F8` | 1.09:1 (fundo) | — |
| Borda | `#D5DCE4` | — | UI |

**Notas de contraste:** o verde dessaturado `#3F7A6C` já passa 4.99:1 como **texto normal** — nesta variação o verde pode ser texto sem precisar de variante extra. Tom mais frio e institucional, mantendo AAA no navy e no texto.

---

## 4. Energético — saturação elevada

Azul mais vívido e saturado, verde-marca puro e brilhante. Mantém seriedade fintech, mas com mais vibração para campanhas e lançamentos.

| Papel | HEX | Sobre `#FFFFFF` | Nível |
|---|---|---|---|
| **Primary** (azul vívido) | `#0B3D91` | **10.04:1** | AAA |
| **Secondary** (verde brilhante — decorativo) | `#00B894` | **2.54:1** | ⚠️ só gráfico/large |
| **Verde-texto seguro** | `#057A61` | **5.30:1** | AA |
| **Texto primário** | `#0A1A2F` | **17.48:1** | AAA |
| Branco sobre primary (botão) | `#FFFFFF` / `#0B3D91` | **10.04:1** | AAA |
| Surface | `#FFFFFF` | — | — |
| Surface alt | `#EFF4FB` | — | — |
| Borda | `#D8E1F0` | — | UI |

**Notas de contraste:** aqui a regra do verde é ainda mais crítica — o verde brilhante `#00B894` cai para **2.54:1** e é **estritamente decorativo** (grafismo, ícone, large text). Para qualquer texto verde use `#057A61` (5.30:1, AA). O azul saturado mantém AAA.

---

## 5. Minimal — quase monocromático

Um único navy como cor de tudo (texto, ação, acentos), variando só a luminância. Verde é abandonado ou reduzido a um acento raríssimo. Máxima sobriedade.

| Papel | HEX | Sobre `#FFFFFF` | Nível |
|---|---|---|---|
| **Primary = Texto** (navy único) | `#16324F` | **13.10:1** | AAA |
| **Acento** (navy mais claro) | `#2F5C74` | **7.23:1** | AAA |
| **Texto secundário / muted** | `#5B6B7E` | **5.46:1** | AA |
| Branco sobre primary (botão) | `#FFFFFF` / `#16324F` | **13.10:1** | AAA |
| Surface | `#FFFFFF` | — | — |
| Surface alt | `#F4F6F8` | 1.08:1 (fundo) | — |
| Borda | `#E1E6EC` | — | UI |

**Notas de contraste:** paleta de tons próximos derivados de um só matiz navy — o "acento" `#2F5C74` é apenas um navy mais claro (7.23:1, AAA), não uma cor nova. Sem verde no texto; se um toque de verde for necessário, restrinja a um único grafismo com `#0E7A65`.

---

## Resumo comparativo

| Variação | Primary | Secondary/verde | Texto | Fundo | Melhor uso |
|---|---|---|---|---|---|
| **Base** | `#0F3460` (12.50) | `#16A085` graf. / `#0E7A65` texto (5.26) | `#0F1F35` (16.57) | `#FFFFFF` | Padrão fintech B2B |
| **Dark** | `#6AA3E0` (6.55) | `#2ECFA8` (8.76) | `#E8EEF6` (14.86) | `#0B1B2E` | Produto/app, uso noturno |
| **High Contrast** | `#0A2647` (15.20) | `#0A5F4E` (7.61) | `#0A1626` (18.17) | `#FFFFFF` | Setor regulado, baixa visão |
| **Corporativo** | `#24425F` (10.40) | `#3F7A6C` (4.99) | `#1E2A3A` (14.51) | `#FFFFFF` | Instituições, seguros |
| **Energético** | `#0B3D91` (10.04) | `#00B894` graf. / `#057A61` texto (5.30) | `#0A1A2F` (17.48) | `#FFFFFF` | Campanhas, lançamentos |
| **Minimal** | `#16324F` (13.10) | — / acento `#2F5C74` (7.23) | `#16324F` (13.10) | `#FFFFFF` | Marca ultra-sóbria |

**Regra de ouro comum a todas as variações:** onde o verde for **texto sobre fundo claro**, use sempre a variante escurecida (AA ≥ 4.5:1). O verde saturado é cor de **marca e grafismo**, nunca de leitura.
