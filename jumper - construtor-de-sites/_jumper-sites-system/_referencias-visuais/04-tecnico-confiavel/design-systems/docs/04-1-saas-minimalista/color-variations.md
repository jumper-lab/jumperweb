# Variações de Cor — SaaS Minimalista (04.1)

**Base:** dark mode dev-first · roxo elétrico `#5E3DD2` (marca / preenchimento) + roxo funcional `#9D8CFF` (texto/link) · surface `#0A0A0F`.

> Todas as razões de contraste abaixo foram **calculadas de verdade** com a fórmula de luminância relativa WCAG 2.1.
> Lembre a regra da base: o roxo de marca (`#5E3DD2`) reprova como texto sobre dark (2.89:1) — por isso, em toda variação, texto/link roxo usa um tom clareado do mesmo matiz.

---

## 0. Paleta base (referência)

| Papel | HEX | Sobre `#0A0A0F` | Nível |
|-------|-----|:---:|-------|
| primary (preenchimento) | `#5E3DD2` | 2.89:1 | só preenchimento |
| primary_light (texto/link) | `#9D8CFF` | 7.18:1 | AA / AAA grande |
| secondary | `#FFFFFF` | 19.75:1 | AAA |
| surface | `#0A0A0F` | — | — |
| text_primary | `#F7F8F8` | 18.56:1 | AAA |
| botão primário: `#FFFFFF` sobre `#5E3DD2` | — | 6.83:1 | AA |

---

## 1. Dark mode (inversão real com contraste recalculado)

Esta é a base do DS — o "dark" **não** é um tema alternativo, é a identidade. A "inversão" aqui documenta a camada de profundidade por surfaces (não por sombra), que é como o dark real ganha hierarquia.

| Papel | HEX | Fundo | Contraste real | Nível |
|-------|-----|-------|:---:|-------|
| primary (preenchimento) | `#5E3DD2` | `#0A0A0F` | 2.89:1 | preenchimento |
| secondary / text | `#F7F8F8` | `#0A0A0F` | **18.56:1** | AAA |
| surface (base) | `#0A0A0F` | — | — | — |
| surface_alt (camada 1) | `#16161D` | texto `#F7F8F8` = **16.92:1** | AAA |
| surface_raised (camada 2) | `#1C1C25` | texto `#F7F8F8` = **15.89:1** | AAA |
| text | `#F7F8F8` | `#16161D` | 16.92:1 | AAA |
| link | `#9D8CFF` | `#0A0A0F` | **7.18:1** | AA / AAA grande |

**Nota de contraste:** profundidade por camadas de cor (`#0A0A0F → #16161D → #1C1C25`) + bordas 1px `#26262F`, não por sombra. Todos os textos ficam ≥ 15:1 sobre qualquer surface.

---

## 2. High contrast (AAA)

Fundo preto absoluto e roxo funcional mais claro para maximizar a razão. Alvo: texto normal ≥ 7:1 (AAA).

| Papel | HEX | Fundo | Contraste real | Nível |
|-------|-----|-------|:---:|-------|
| primary (preenchimento) | `#5E3DD2` | `#000000` | (mantido só como fundo de botão) | — |
| primary/link (texto) | `#B9AAFF` | `#000000` | **10.26:1** | AAA |
| link sobre surface_alt | `#B9AAFF` | `#14141C` | **8.95:1** | AAA |
| secondary / text | `#FFFFFF` | `#000000` | **21.00:1** | AAA |
| surface | `#000000` | — | — | — |
| surface_alt | `#14141C` | texto `#FFFFFF` = **18.32:1** | AAA |
| text | `#FFFFFF` | `#000000` | 21.00:1 | AAA |

**Nota de contraste:** clareando o roxo funcional para `#B9AAFF` sobre preto puro alcançamos 10.26:1 (AAA para texto normal). Todos os textos ≥ 7:1.

---

## 3. Corporativo (dessaturado / conservador)

Roxo mais acinzentado e sóbrio, off-white levemente mais frio. Mantém dark, mas reduz o "elétrico".

| Papel | HEX | Fundo | Contraste real | Nível |
|-------|-----|-------|:---:|-------|
| primary (preenchimento) | `#5A4FA3` | branco em cima = **6.81:1** | AA (botão) |
| primary/link (texto) | `#8E86C4` | `#0E0E14` | **5.82:1** | AA |
| secondary / text | `#ECEDF0` | `#0E0E14` | **16.43:1** | AAA |
| surface | `#0E0E14` | — | — | — |
| surface_alt | `#191922` | texto `#ECEDF0` ≈ 15:1 | AAA |
| text | `#ECEDF0` | `#0E0E14` | 16.43:1 | AAA |

**Nota de contraste:** roxo dessaturado `#5A4FA3` mantém 6.81:1 com texto branco no botão; o link `#8E86C4` dá 5.82:1 (AA normal). Paleta mais séria, menos "produto de startup", ideal para consultoria/enterprise.

---

## 4. Energético (saturação elevada)

Roxo mais saturado e vívido, para lançamentos e páginas de campanha. Continua dark.

| Papel | HEX | Fundo | Contraste real | Nível |
|-------|-----|-------|:---:|-------|
| primary (preenchimento) | `#6B2BEA` | branco em cima = **6.65:1** | AA (botão) |
| primary/link (texto) | `#B199FF` | `#0A0A0F` | **8.34:1** | AAA |
| secondary / text | `#F7F8F8` | `#0A0A0F` | **18.56:1** | AAA |
| surface | `#0A0A0F` | — | — | — |
| surface_alt | `#16161D` | texto `#F7F8F8` = 16.92:1 | AAA |
| text | `#F7F8F8` | `#0A0A0F` | 18.56:1 | AAA |

**Nota de contraste:** roxo saturado `#6B2BEA` mantém o botão em 6.65:1 (AA); link clareado `#B199FF` sobe para 8.34:1 (AAA). Mais glow e mais vibração sem sacrificar acessibilidade.

---

## 5. Minimal (tons próximos, quase monocromático)

Roxo quase apagado, tudo em cinza-violeta muito discreto. O contraste vem da luminosidade, não da cor.

| Papel | HEX | Fundo | Contraste real | Nível |
|-------|-----|-------|:---:|-------|
| primary (preenchimento) | `#4B4460` | branco em cima = **9.15:1** | AAA (botão) |
| primary/link (texto) | `#A7A2B8` | `#101015` | **7.68:1** | AA / AAA grande |
| secondary / text | `#EDEDF0` | `#101015` | **16.24:1** | AAA |
| surface | `#101015` | — | — | — |
| surface_alt | `#17171E` | texto `#EDEDF0` = **15.26:1** | AAA |
| text | `#EDEDF0` | `#101015` | 16.24:1 | AAA |

**Nota de contraste:** roxo dessaturadíssimo `#4B4460` funciona como quase-neutro; ainda assim o botão dá 9.15:1 (AAA) e o link `#A7A2B8` fica em 7.68:1. Estética "tudo cinza-violeta" com acessibilidade total — hierarquia por luminância.

---

## Resumo comparativo

| Variação | Primary (preench.) | Texto/link roxo | Contraste link | Surface |
|----------|:---:|:---:|:---:|:---:|
| Base / Dark mode | `#5E3DD2` | `#9D8CFF` | 7.18:1 | `#0A0A0F` |
| High contrast | `#5E3DD2` | `#B9AAFF` | 10.26:1 | `#000000` |
| Corporativo | `#5A4FA3` | `#8E86C4` | 5.82:1 | `#0E0E14` |
| Energético | `#6B2BEA` | `#B199FF` | 8.34:1 | `#0A0A0F` |
| Minimal | `#4B4460` | `#A7A2B8` | 7.68:1 | `#101015` |

> Em toda variação a regra permanece: **roxo de marca = preenchimento; roxo clareado = texto/link.** Nenhuma variação usa o roxo-preenchimento como cor de texto sobre dark.
