# DS 02.1 — Advocacia Sofisticada

> **Categoria:** 02 — Premium e Sofisticado
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Sensação-alvo:** "aqui é sério, é caro, e vale cada centavo"

---

## 1. Inspiração

**Kauff McGuire & Margolis LLP** — kaufflaw.com (domínio institucional kmm.com), Nova York / Los Angeles.
Site desenhado pela PaperStreet, vencedor do **AVA Digital Gold Award**.

Escritório de labor & employment com mais de 50 anos de história que resolve o dilema central do segmento: parecer grande firma **e** boutique ao mesmo tempo. A resposta visual deles — e a essência que este DS captura — é a **restrição**: quase-preto profundo, dourado usado como fio (nunca como tinta), serif editorial em corpos generosos e espaço em branco que comunica que ninguém ali tem pressa de vender.

**Nota tipográfica:** a referência usa a Söhne (comercial, Klim Type). Este DS adota **Inter** como substituta oficial de corpo e **Playfair Display** como display serif — ambas Google Fonts.

O que capturamos (essência, não cópia):

- Gravidade cromática: massas de quase-preto e azul-noite com um único acento metálico
- Ritmo editorial: seções longas, respiradas, com hierarquia de revista
- Fotografia B&W como assinatura — pessoas e arquitetura, nunca banco de imagem genérico
- Prova social discreta mas onipresente: logos, rankings, números
- Movimento quase imperceptível: o site se comporta como um bom mordomo

---

## 2. Paleta

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#1A1A1A` | Quase-preto de tinta. Headings, texto, botões, massas escuras |
| `secondary` | `#C9A961` | Dourado champagne — **só acento**: filetes, números, detalhes, texto sobre escuro |
| `gold_ink` | `#83672B` | Dourado "tinta" para texto sobre claro (5.07:1 AA) |
| `surface` | `#FAF9F7` | Off-white quente, papel de algodão |
| `surface_alt` | `#F2F0EB` | Faixa alternada, depoimentos |
| `surface_dark` | `#14161C` | Azul-noite — hero, prova social, footer |
| `text_primary` | `#1A1A1A` | 16.54:1 sobre surface — AAA |
| `text_secondary` | `#454440` | 9.27:1 — AAA |
| `text_muted` | `#66645E` | 4.99:1 — AA |
| `border` | `#E3E0D8` | Divisores e bordas de card |
| `error` | `#9B2C2C` | 7.15:1 |
| `success` | `#2F6B4F` | 5.98:1 |
| `warning` | `#8F5B13` | 5.43:1 |

**Escala neutra:** `#FAF9F7 → #F2F0EB → #E3E0D8 → #CFCBC1 → #A8A49A → #7E7B73 → #5C5A54 → #3F3E3A → #26262A → #14161C`
(quente nos claros, esfria para azul-noite nos escuros — é isso que dá profundidade às camadas dark)

### A regra de ouro (literal)

`#C9A961` sobre fundo claro tem contraste **2.14:1 — reprovado para texto**. Por isso:

- Sobre claro: dourado apenas **decorativo** (filetes, ornamentos) OU texto em `gold_ink #83672B`
- Sobre escuro: dourado liberado — 7.73:1 sobre `#1A1A1A`, 8.04:1 sobre `#14161C`

---

## 3. Tipografia

| Papel | Fonte | Fonte da referência | Observação |
|---|---|---|---|
| Headings | **Playfair Display** (Google Fonts) | serif editorial proprietária | pesos 500/600, itálico para 1 palavra de ênfase |
| Corpo | **Inter** (Google Fonts) | Söhne (comercial) | substituição documentada; pesos 400/500/600 |

### Escala

| Elemento | Mobile | Desktop | Detalhe |
|---|---|---|---|
| H1 | 36px / 1.15 | 60px / 1.08 | Playfair 500, tracking -0.015em |
| H2 | 28px / 1.2 | 40px / 1.15 | Playfair 500 |
| H3 | 20px / 1.3 | 24px / 1.3 | Playfair 600 |
| Body | 16px / 1.65 | 17px / 1.7 | Inter 400 |
| Small | 14px / 1.5 | 14px / 1.5 | Inter 400 |
| Eyebrow | 12px | 13px | Inter 600, uppercase, tracking 0.14–0.16em, gold_ink |

Fluida: `h1 { font-size: clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem); }`

O **eyebrow dourado + hairline de 48px** acima de cada headline é a assinatura tipográfica do DS.

---

## 4. Espaçamento e grid

- Base 8px · escala 8 / 16 / 24 / 40 / 64 / 96 / 128 / 160
- Seções: **72px mobile → 104px tablet → 144px desktop**
- Container 1240px · gutter 32px · texto corrido max 68ch
- Grid 12 colunas com **assimetria editorial**: texto em 5–6 colunas + 1 coluna de respiro antes da imagem

> Filosofia: o espaço em branco É o luxo. Corta-se conteúdo antes de cortar espaço.

---

## 5. Formas, bordas e sombras

- **Radius 0 em tudo** — cantos retos comunicam rigor e tradição
- Detalhe-assinatura: **hairline dourado 48px × 2px** abrindo cada seção
- Inputs sem caixa: apenas `border-bottom` (estilo editorial)
- Sombras quase ausentes: profundidade vem das camadas de cor; `sm` só em hover de card

---

## 6. Movimento

Duração 300–500ms, easing `cubic-bezier(0.25, 0.1, 0.25, 1)`. **Sem bounce, sem overshoot, sem parallax.**

| Animação | Duração | Gatilho |
|---|---|---|
| `fade-rise` | 500ms | scroll (IntersectionObserver) — único reveal do sistema |
| `hairline-draw` | 500ms | scroll, delay 120ms — filete cresce 0→48px |
| `link-underline` | 300ms | hover — sublinhado dourado desliza da esquerda |
| `button-shift` | 300ms | hover — fundo escurece, seta desloca 4px |
| `card-lift` | 400ms | hover — -4px + filete expande para 100% |
| `image-reveal` | 500ms | scroll — cortina azul-noite recolhe revelando foto B&W |
| `stagger-cases` | 500ms +100ms/item | scroll — cascata discreta, máx. 4 itens |

`prefers-reduced-motion`: tudo vira estado final imediato.

---

## 7. Componentes-chave

### Botões
- **Primary:** fundo `#1A1A1A`, texto off-white, uppercase Inter 600 tracking 0.08em, radius 0, 16/40px
- **Secondary:** outline 1px quase-preto, preenche no hover
- **Gold on dark:** outline dourado, só em seções escuras
- Focus: outline 2px `gold_ink` offset 3px · Touch target ≥ 48px

### Hero split-screen (assinatura do DS)
55/45 — texto sobre off-white à esquerda (hairline + eyebrow + H1 Playfair + CTA duplo), bloco fotográfico B&W full-bleed à direita entrando com cortina. Mobile empilha, texto primeiro.

### Cards de case
Filete superior dourado de 48px que expande no hover, numeração serif dourada (01, 02…), resultado com número concreto, link "Ver o caso".

### Depoimento
Uma citação por vez, Playfair itálico 28px centralizado sobre `surface_alt`, aspas douradas ornamentais, atribuição em eyebrow. Sem auto-rotate.

### Prova social
Faixa azul-noite com logos monocromáticos `#A8A49A` (hover revela branco) + um stat gigante dourado: "R$ 2,3 bi recuperados".

### Footer
4 colunas sobre `#14161C`, hairline dourado antes da barra de copyright, OAB e selos na última coluna.

---

## 8. Voice & tone

**Formal elegante, autoridade calma.** Fala-se de décadas e resultados, nunca de "paixão". O leitor é um par: COO, CFO, fundador.

Headlines:
- "Décadas defendendo o que importa."
- "Questões complexas exigem aconselhamento sereno."
- "O contencioso que sua diretoria não precisa acompanhar de perto."
- "Precisão jurídica para decisões que não admitem erro."

CTAs:
- "Agende uma consulta confidencial"
- "Fale com um sócio"
- "Conheça nossos casos"
- "Solicite uma análise preliminar"

Evitar: exclamações, urgência artificial, diminutivos, superlativos sem lastro, emojis e — importante — **promessas de resultado (vedadas pelo Código de Ética da OAB)**.

---

## 9. Composição da página

1. **Hero** — split-screen 55/45, texto + foto B&W
2. **Prova social** — faixa azul-noite, logos + stat dourado
3. **Áreas de atuação** — lista editorial numerada 01–05 em duas colunas com divisores
4. **Cases** — grade assimétrica, primeiro card em largura dupla
5. **Depoimento** — citação única centralizada
6. **Equipe** — 3 colunas de retratos B&W
7. **CTA final** — faixa escura, headline branca, botão dourado
8. **Footer** — 4 colunas azul-noite

**Fotografia:** sempre B&W (`grayscale(100%) contrast(1.05)`), luz lateral, arquitetura e retratos reais. Proibido: aperto de mãos, martelo de juiz, sorriso de banco de imagem.

**Densidade:** baixa — máximo 2 blocos de informação por viewport.

---

## 10. Acessibilidade (resumo)

- Corpo 16.54:1 (AAA) · secundário 9.27:1 · muted 4.99:1 (AA)
- Dourado nunca como texto sobre claro; `gold_ink` 5.07:1 no lugar
- Skip-link, focus trap no menu mobile, Esc fecha, carrossel operável por teclado
- Focus visível 2px em todas as superfícies · touch targets ≥ 44px
- Relatório completo: `docs/02-1-advocacia-sofisticada/accessibility-report.md`

---

## 11. Para quem é este DS

Advocacia empresarial · consultoria executiva · family office · auditoria boutique · pareceristas de alto valor.

**Público:** profissionais de alta renda, decisores corporativos, COOs/CFOs — gente que compra confiança, não desconto.

### Fatores de conversão
1. Prova social por pares (logos + números) logo após o hero
2. CTA de sigilo: "consulta confidencial" desarma o decisor
3. Cases com valores concretos, não adjetivos
4. Retratos reais em B&W — humaniza sem quebrar a gravidade
5. Um CTA por seção, formulário mínimo

---

## 12. Irmãos nesta personalidade

| DS | Diferença |
|---|---|
| **02.2 Clínica Dental Premium** | sage green + Cormorant Garamond — orgânico e sereno, sem dourado |
| **02.3 Hotel Boutique** | marrom queimado + serif luxury — sensorial e quente, sem split-screen |

O 02.1 é o **mais grave e formal** dos três: preto+dourado, cantos retos, B&W.

---

## Arquivos deste DS

- `json/02-1-advocacia-sofisticada.json` — fonte da verdade
- `previews/html/02-1-advocacia-sofisticada.html` — preview interativo offline
- `docs/02-1-advocacia-sofisticada/` — components, animations.css, accessibility, benchmarking, color-variations, responsive-guide
