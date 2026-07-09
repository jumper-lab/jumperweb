# DS 04.1 — SaaS Minimalista

> **Personalidade:** 04 — Técnico e Confiável
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0
> **Mood em uma frase:** "Estes profissionais sabem o que estão fazendo" — confiança pela clareza.

---

## 1. Inspiração

**Linear** — [linear.app](https://linear.app) · San Francisco, EUA (empresa remota)

- Fundada em 2019 por **Karri Saarinen** (ex-Principal Designer do Airbnb, ex-Head of Design da Coinbase), Tuomas Artman e Jori Lallo.
- Usada por **33.000+ empresas**, incluindo OpenAI, Coinbase e Ramp.
- Referência estilística mundial: o "Linear look" virou vocabulário da indústria de produto.

**Essência capturada** (nunca layout copiado): dark mode como escolha deliberada, tipografia densa com tracking negativo, screenshot de produto como protagonista, animações que comunicam estado — nunca decoram — e a sensação de precisão calculada em cada pixel.

**O que este DS NÃO é:** não é o dark mode "tema alternativo". O escuro aqui é a identidade primária, pensada para um público que passa o dia em IDEs escuras.

---

## 2. Paleta

### Cores principais

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#5E3DD2` | Roxo elétrico — **apenas preenchimentos**: botões, gradientes, glows, barras. Nunca texto sobre dark. |
| `primary_light` | `#9D8CFF` | Derivado do primary — cor oficial de **links, texto roxo e ícones** sobre dark. |
| `secondary` | `#FFFFFF` | CTAs brancos de alto impacto, logos, máximo contraste. |
| `surface` | `#0A0A0F` | Fundo base da página. |
| `surface_alt` | `#16161D` | Cards e faixas alternadas. |
| `surface_raised` | `#1C1C25` | Estado hover de cards, kbd, elementos elevados. |
| `text_primary` | `#F7F8F8` | Texto principal (off-white — evita halation do branco puro). |
| `text_secondary` | `#B4B6C0` | Parágrafos de apoio. |
| `text_muted` | `#8A8F98` | Legendas, metadados. |
| `border` | `#26262F` | Bordas 1px — o definidor de forma no dark. |
| `error` | `#F87171` | Erros de formulário. |
| `success` | `#4ADE80` | Status positivo, dot de uptime. |
| `warning` | `#FBBF24` | Avisos. |

### ⚠️ Ajuste de contraste documentado

O brief pedia `#5E3DD2` como primária. **Verificação real: 2.89:1 sobre `#0A0A0F`** — reprovado para qualquer texto (WCAG exige 3:1 até para texto grande). Solução:

- `#5E3DD2` permanece como **cor de marca e preenchimento** (botão com texto branco = 6.83:1 ✓).
- Derivamos **`#9D8CFF`** (mesmo matiz violeta, luminância elevada) para texto/links/ícones: **7.18:1** sobre surface (AA texto normal, AAA texto grande).

### Contrastes verificados (WCAG 2.1)

| Par | Razão | Resultado |
|---|---|---|
| `#F7F8F8` sobre `#0A0A0F` | **18.56:1** | AAA |
| `#F7F8F8` sobre `#16161D` | **16.92:1** | AAA |
| `#B4B6C0` sobre `#0A0A0F` | **9.78:1** | AAA |
| `#8A8F98` sobre `#0A0A0F` | **6.08:1** | AA |
| `#9D8CFF` sobre `#0A0A0F` | **7.18:1** | AA (AAA texto grande) |
| `#9D8CFF` sobre `#16161D` | **6.54:1** | AA |
| `#FFFFFF` sobre `#5E3DD2` (botão) | **6.83:1** | AA |
| `#5E3DD2` sobre `#0A0A0F` | **2.89:1** | ✗ só preenchimento não-textual |
| `#F87171` sobre `#0A0A0F` | **7.14:1** | AA |
| `#FBBF24` sobre `#0A0A0F` | **11.83:1** | AAA |

### Escala neutra (dark-oriented)

`50 #F7F8F8 · 100 #E3E4E8 · 200 #C9CBD4 · 300 #B4B6C0 · 400 #8A8F98 · 500 #62666D · 600 #3E4046 · 700 #26262F · 800 #16161D · 900 #0A0A0F`

### Gradientes (sempre sutis, sempre sobre dark)

```css
--hero-glow: radial-gradient(ellipse 60% 45% at 50% 0%, rgba(94,61,210,.28), transparent 70%);
--card-sheen: linear-gradient(135deg, rgba(94,61,210,.12), rgba(10,10,15,0) 55%);
--text-gradient: linear-gradient(120deg, #F7F8F8 30%, #9D8CFF 100%);
--border-glow: linear-gradient(90deg, rgba(94,61,210,0), rgba(157,140,255,.5), rgba(94,61,210,0));
```

Regra: opacidade máxima de roxo em gradiente = 0.3. Gradiente sugere luz de interface, nunca vira fundo chapado.

---

## 3. Tipografia

| Papel | Fonte | Fonte da referência | Pesos |
|---|---|---|---|
| Headings | **Inter Tight** (Google Fonts) | PP Neue Montreal / grotesca comercial — **substituição documentada** | 600 / 700 / 800 |
| Body | **Inter** (Google Fonts) | — | 400 / 500 / 600 |
| Mono | **JetBrains Mono** (Google Fonts) | — | 400 / 500 |

O **JetBrains Mono é parte da identidade**: eyebrows, métricas, labels técnicos, teclas `kbd`, cargos em depoimentos. Doses pequenas, presença constante.

### Escala

| Elemento | Mobile | Desktop | Peso | Tracking |
|---|---|---|---|---|
| H1 | 38px / 1.08 | 64px / 1.05 | 800 | -0.03em |
| H2 | 28px / 1.15 | 44px / 1.1 | 700 | -0.03em |
| H3 | 20px / 1.3 | 24px / 1.3 | 600 | -0.02em |
| Body | 16px / 1.6 | 17px / 1.65 | 400 | 0 |
| Small | 14px / 1.5 | 14px / 1.5 | 400 | 0 |
| Mono label | 12px | 13px | 500 | +0.08em, UPPERCASE |

```css
h1 { font-size: clamp(2.375rem, 1.6rem + 3.4vw, 4rem); }
h2 { font-size: clamp(1.75rem, 1.3rem + 2vw, 2.75rem); }
```

O **tracking negativo forte (-0.03em)** nos headings é assinatura do estilo — sem ele, o DS perde a densidade que transmite precisão.

---

## 4. Espaçamento, bordas e sombras

- **Base:** 8px · escala `4 / 8 / 16 / 24 / 40 / 64 / 96 / 144`
- **Seções:** 72px mobile → 104px tablet → 144px desktop
- **Container:** max-width **1180px** (1360px só para faixas de screenshot), padding 20/40/64px
- **Radius:** botões e inputs **10px** · cards e imagens **14px** · containers destacados **20px** · pill só em badges
- **Bordas 1px em quase tudo** (`#26262F`): no dark mode, a borda substitui a sombra como definidor de forma.
- **Sombras:** papel pequeno. Profundidade = camadas de surface (`#0A0A0F → #16161D → #1C1C25`) + borda. O **glow roxo** (`0 0 0 1px rgba(94,61,210,.45), 0 0 24px rgba(94,61,210,.25)`) é reservado a hover/focus de CTA e à moldura do screenshot do hero. Máximo 2 glows por viewport.

Densidade: **denso dentro dos componentes, espaçado entre seções** — esse contraste é parte da assinatura.

---

## 5. Motion — animação funcional

Durations: `120 / 200 / 300 / 400 / 600ms` · Easing principal: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). **Nada de bounce.**

| Animação | Duração | Trigger | O que faz |
|---|---|---|---|
| `fade-rise` | 600ms | scroll into view | sobe 16px + fade, stagger 80ms entre irmãos |
| `btn-glow` | 300ms | hover/focus CTA | glow roxo + clareamento do fundo (sem pulo) |
| `card-lift` | 300ms | hover card | borda acende + fundo sobe uma camada — elevação por cor |
| `link-underline` | 200ms | hover link | sublinhado cresce da esquerda em `#9D8CFF` |
| `hero-glow-breathe` | 8s loop | contínuo | glow do hero respira 0.2→0.3 de opacidade |
| `counter-up` | 1200ms | scroll into view | métricas contam até o valor em mono tabular |
| `nav-blur-in` | 300ms | scroll > 24px | header ganha blur(12px) + fundo 80% + borda |

`prefers-reduced-motion`: transições → 0.01ms, loops desligados, counter mostra valor final. Hovers mantêm mudança de cor.

---

## 6. Componentes

### Botões
- **Primário:** fundo `#5E3DD2`, texto branco, radius 10px, weight 600. Hover: `#6D4BE0` + glow. Focus: outline 2px `#9D8CFF` offset 2px. Disabled: `#26262F` + `#62666D`.
- **Secundário (branco):** fundo `#FFFFFF`, texto `#0A0A0F` — alto impacto, máx. 1 por viewport.
- **Ghost:** transparente, borda `#3E4046`, hover acende borda roxa + tint 6%.
- **Link:** `#9D8CFF` com sublinhado animado.
- Alturas: 36 / 44 / 52px — mobile sempre ≥ 44px.

### Cards
Fundo `#16161D`, borda 1px `#26262F`, radius 14px, padding 28px, **sem sombra**. Hover: borda `rgba(157,140,255,.4)` + fundo `#1C1C25`. Feature card com ícone SVG 24px roxo-claro; metric card com número gigante em JetBrains Mono.

### Inputs
Fundo `#0A0A0F`, borda `#3E4046`, radius 10px, min-height 44px. Focus: borda `#9D8CFF` + anel `rgba(157,140,255,.18)`. Erro: borda `#F87171` + mensagem 13px + `aria-invalid`.

### Hero
Conteúdo à **esquerda em 7/12** (não centralizado — quebra deliberada do SaaS centrado), screenshot emoldurado sangrando à direita, glow radial roxo no topo, eyebrow em mono (`// lançamento`), CTA duplo + microcopy de fricção zero.

### Navegação
Header fixo 64px, transparente → blur escuro no scroll. Máx. 5 links. Mobile: painel full-screen com stagger.

### Depoimentos
Sem carrossel: **grid assimétrico** com 1 citação-âncora (2 colunas, 22px) + cards menores. Logos de clientes **monocromáticos** (`#62666D`).

### Badges
Tag pill com tint roxo 8% · status dot 8px · tecla `kbd` estilo IDE (fundo `#1C1C25`, mono 12px) — reforço do público dev.

### Footer
4 colunas + marca, títulos em mono label, **status do sistema com dot verde pulsante** ("Todos os sistemas operacionais").

---

## 7. Voice & tone

**Tom:** direto, técnico sem jargão vazio, confiante sem arrogância. Números no lugar de adjetivos. Ponto final, nunca exclamação.

**Headlines:**
- "Construído para times que entregam."
- "Menos reunião. Mais deploy."
- "A infraestrutura que o seu produto merece."
- "Do commit ao cliente em minutos."
- "Software sério para quem leva prazo a sério."

**CTAs:** "Comece grátis" · "Ver demonstração" · "Falar com engenharia" · "Ler a documentação" · "Agendar diagnóstico técnico"

**Microcopy:** "Grátis para começar. Sem cartão de crédito." · "Setup em menos de 5 minutos." · "Seus dados ficam no Brasil. LGPD por padrão."

**Evitar:** superlativos vazios, jargão corporativo, emojis em headline, promessas sem número, exclamações.

---

## 8. Composição

Grid de 12 colunas usado de forma **assimétrica** — a quebra do padrão centrado simétrico é a assinatura composicional:

1. **Nav** — fixa, blur no scroll
2. **Hero** — texto 7/12 à esquerda + screenshot sangrado à direita
3. **Prova social** — logos mono + 3 metric cards com counter-up
4. **Features** — grid `2fr-1fr-1fr`, segunda linha inverte `1fr-1fr-2fr`
5. **Produto em detalhe** — screenshot ↔ texto alternando lados
6. **Depoimentos** — citação-âncora + satélites
7. **CTA final** — única seção centralizada (contraste deliberado) com glow
8. **Footer** — 4 colunas + status do sistema

**Imagens:** zero banco de imagens. O retrato é o produto: screenshots emoldurados com barra de janela (3 dots), diagramas SVG 1px, blocos de código. Pessoas (se houver): P&B com overlay roxo leve.

**Whitespace:** o escuro É o whitespace.

---

## 9. Acessibilidade (resumo — ver accessibility-report.md)

- WCAG 2.1 **AA** verificado com razões reais (tabela na seção 2).
- `:focus-visible` com outline 2px `#9D8CFF` (7.18:1) em todos os interativos.
- Skip link, focus trap no menu mobile, ordem DOM = ordem visual.
- Touch targets ≥ 44px.
- Texto corrido em off-white `#F7F8F8` (não `#FFFFFF`) para reduzir halation.
- `prefers-reduced-motion` obrigatório.

---

## 10. Para quem é este DS

**Segmentos ideais:** SaaS, agência de tecnologia, software house, startup dev-tools, produtos B2B tech vendendo para CTOs.

**Fatores de conversão:** screenshot no hero (reduz incerteza do decisor técnico), microcopy de fricção zero, métricas específicas com counter-up, prova social com cargo técnico, dark mode como sinal de pertencimento à cultura dev, status do sistema como micro-sinal de maturidade.

**Diferenciação dos irmãos da personalidade 04:** único dark mode. 04.2 Fintech é light/navy/verde (IBM Plex Sans, Stripe-like); 04.3 Contabilidade é charcoal/dourado com badges de credibilidade. Nenhum hex, fonte ou composição compartilhados.

---

## Arquivos deste DS

```
json/04-1-saas-minimalista.json          ← fonte da verdade (schema 2.0.0)
previews/markdown/04-1-saas-minimalista.md
previews/html/04-1-saas-minimalista.html ← preview visual offline
docs/04-1-saas-minimalista/components.md
docs/04-1-saas-minimalista/animations.css
docs/04-1-saas-minimalista/accessibility-report.md
docs/04-1-saas-minimalista/benchmarking.md
docs/04-1-saas-minimalista/color-variations.md
docs/04-1-saas-minimalista/responsive-guide.md
```
