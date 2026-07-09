# DS 03.2 — Hamburgueria Vibrante

> **Categoria:** 03 — Energético e Vibrante
> **Subcategoria:** Appetite-appeal quente — food brand ousada com grid desordenado
> **Papel no sistema:** ds-base de personalidade — repertório, nunca molde

---

## 1. Essência

**"A comida em primeiro plano, o design desaparece, só a fome importa."**

Este DS captura a energia de food brands premium ousadas — a referência estilística central é o **Shake Shack**, cuja identidade (desenvolvida pela Pentagram, de Paula Scher) provou que fast food pode ter design de nível mundial sem perder o apetite visual. Não há prêmio específico de website confirmado; a citação é estritamente estilística.

O que este DS pega emprestado dessa linhagem:

- **Cores de condimento** em blocos maciços: vermelho-tomate e amarelo-mostarda
- **Tipografia condensada gritante** em caixa alta — o headline é um grito de balcão
- **A comida como protagonista absoluta** — closes dramáticos, queijo derretendo, chapa fumegando
- **Grid desordenado proposital** — cards rotacionados, imagens que estouram o container, offsets verticais — a energia de uma cozinha em pleno serviço
- **CTAs gigantes** — botões-pílula que parecem mordíveis

### O que este DS NÃO é

- Não é a Academia CrossFit (03.1): nada de preto + neon, nada de Anton, nada de marquees atléticos
- Não é a Sorveteria (03.3): nada de rosa-chiclete, nada de Oswald, nada de stickers com confetti
- O mood aqui é **calor de chapa**: saturado, quente, com fome

---

## 2. Paleta de cores

### Cores principais

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#E63946` | Vermelho-tomate — blocos maciços, CTAs, headlines grandes |
| `primary_dark` | `#C1121F` | Vermelho escuro — texto vermelho pequeno, estados :active |
| `secondary` | `#F1C232` | Amarelo-mostarda — fundos de destaque, badges, sublinhados |
| `surface` | `#FFF8F0` | Creme quente — fundo padrão |
| `surface_alt` | `#FFEDD8` | Creme mais quente — seções alternadas |
| `surface_dark` | `#221510` | Marrom-carvão — footer e seções invertidas |
| `text_primary` | `#221510` | Texto principal |
| `text_secondary` | `#5C4A42` | Texto de apoio |
| `text_muted` | `#7A6558` | Legendas, placeholders |
| `border` | `#EFDCCB` | Bordas suaves |
| `error` | `#7F1D1D` | Erro (distinto do vermelho de marca) |
| `success` | `#2E7D32` | Sucesso |
| `warning` | `#B45309` | Aviso |

### Escala neutra (quente)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#FFF8F0` | `#FAEDE2` | `#EFDCCB` | `#DDC3AE` | `#B99B87` | `#97796A` | `#7A6558` | `#5C4A42` | `#3D2E26` | `#221510` |

### Contraste verificado (WCAG 2.1)

| Combinação | Razão | Veredito |
|---|---|---|
| Branco sobre `#E63946` | **4.17:1** | AA **só texto grande** (≥24px / ≥18.66px bold) — CTAs gigantes passam |
| Branco sobre `#C1121F` | **6.22:1** | AA qualquer tamanho |
| `#E63946` sobre `#FFF8F0` | **3.96:1** | Só headlines grandes |
| `#C1121F` sobre `#FFF8F0` | **5.91:1** | AA texto normal — use este para vermelho pequeno |
| `#221510` sobre `#F1C232` | **10.57:1** | AAA — mostarda SEMPRE com texto escuro |
| `#221510` sobre `#FFF8F0` | **16.85:1** | AAA |
| `#5C4A42` sobre `#FFF8F0` | **7.93:1** | AAA |
| `#7A6558` sobre `#FFF8F0` | **5.21:1** | AA |
| `#FFF8F0` sobre `#221510` | **16.85:1** | AAA |
| `#F1C232` sobre `#221510` | **9.74:1** | AAA — mostarda como destaque em seções escuras |
| `#F1C232` sobre `#FFF8F0` | **1.73:1** | ✗ NUNCA como texto — só bloco/decoração |

**Regras de ouro da paleta:**
1. Branco sobre vermelho → só texto grande/bold (os CTAs do DS são gigantes por definição)
2. Mostarda sempre recebe texto carvão por cima
3. Mostarda nunca vira texto sobre fundo claro
4. Vermelho em texto corrido → usar `#C1121F`

---

## 3. Tipografia

| Papel | Fonte | Origem | Notas |
|---|---|---|---|
| Headings | **Bebas Neue** | Google Fonts | Só peso 400, mas condensada e naturalmente uppercase — o "BOLD" vem do tamanho gigante. Sempre `text-transform: uppercase` |
| Body | **Manrope** | Google Fonts | Variável 200–800; corpo 400/500, labels 700/800 |

### Escala tipográfica

| Elemento | Mobile | Desktop | Line-height |
|---|---|---|---|
| H1 | `clamp(3rem, 14vw, 4.5rem)` | `clamp(5rem, 9vw, 9rem)` | 0.88–0.92 |
| H2 | `clamp(2.25rem, 9vw, 3rem)` | `clamp(3.5rem, 5.5vw, 5.5rem)` | 0.92–0.95 |
| H3 | `1.75rem` | `2.25rem` | ~1.0 |
| Body | `1rem` | `1.125rem` | 1.6–1.65 |
| Small | `0.875rem` | `0.9375rem` | 1.5 |
| Eyebrow | `0.8125rem` 800 tracking 0.14em | `0.875rem` 800 tracking 0.16em | 1.2 |

O H1 de 9rem no desktop é intencional: o headline É a imagem quando a foto ainda não carregou. Line-height abaixo de 1.0 só funciona porque Bebas Neue não tem descendentes longas em caixa alta.

---

## 4. Espaçamento e grid

- **Base:** 8px | **Escala:** 4 / 8 / 16 / 24 / 40 / 64 / 96 / 144
- **Seções:** 64px mobile → 96px tablet → 128px desktop
- **Container:** max 1360px, padding 20/40/64px
- **Grid:** 12 colunas **propositalmente quebrado** — imagens em bleed parcial, cards rotacionados ±1-2°, offsets verticais alternados. Regra de sanidade: **uma âncora alinhada por seção** (headline ou CTA) para o olho descansar.

## 5. Bordas, raios e sombras

- **Botões:** pílula total (`9999px`) — CTAs "mordíveis"
- **Cards:** 20px | **Inputs:** 12px | **Imagens de comida:** 32px ou blob orgânico
- **Stroke medium:** 3px carvão — estética de rótulo de molho em badges e outline buttons
- **Sombra assinatura:** `6px 6px 0 #221510` (dura, deslocada, estilo sticker) → `10px 10px 0` no hover
- **Glow vermelho** (`0 12px 40px rgba(230,57,70,.35)`) reservado ao CTA do hero

## 6. Motion

| Animação | Duração | Trigger |
|---|---|---|
| `flip-invert` | 200ms | Hover em botões — inversão total de cor (vermelho↔mostarda) |
| `scale-punch` | 250ms snap | Hover em cards — `scale(1.06) rotate(0)` com overshoot |
| `chomp` | 150ms | Press em CTAs — `scale(0.94)`, sensação de mordida |
| `sizzle-rise` | 500ms | Scroll-reveal — sobe 32px + gira até o ângulo final |
| `drip-underline` | 300ms | Hover em nav-links — sublinhado mostarda 4px escorre |
| `float-ingredient` | 6s loop | Blobs SVG decorativos flutuam no hero |

Todas com fallback completo para `prefers-reduced-motion: reduce`.

---

## 7. Componentes

### Botões
- **Primário:** vermelho + texto branco Bebas ≥22px → hover inverte para mostarda + carvão
- **Secundário:** mostarda + carvão → hover inverte para carvão + mostarda
- **Outline:** borda 3px carvão → hover preenche
- **Tamanho hero:** 22px 56px de padding, fonte 1.75rem — o CTA GIGANTE assinatura
- Botões pequenos são **proibidos** neste DS (regra de contraste + regra de fome)

### Cards de menu
Imagem em bleed no topo, nome em Bebas 1.75rem, descrição Manrope, **preço em badge mostarda** sempre visível. Rotação alternada -2° / +1.5° / -1°. Hover endireita o card e cresce a sombra dura.

### Hero
Headline gigante sobrepondo parcialmente o close da comida (blob que estoura o viewport à direita). Eyebrow mostarda + H1 de 2-4 palavras + CTA hero + nota iFood/Google. Mobile empilha com CTA full-width.

### Navegação
Barra creme sticky, links Manrope 700 uppercase, CTA-pílula sempre visível. Mobile: ícone hambúrguer (literal) abre overlay vermelho full-screen com links em Bebas 3rem.

### Depoimentos
Cards brancos rotacionados com sombra dura, aspas gigantes vermelhas em Bebas, estrelas mostarda. Desktop desordenado, mobile em scroll-snap.

### Footer
Carvão `#221510`, títulos de coluna em mostarda, faixa final "BATEU A FOME?" com botão de delivery.

### Badges
- Preço: pílula mostarda + Bebas carvão
- Destaque: sticker rotacionado -6°, vermelho, borda 3px carvão — "MAIS PEDIDO"
- Delivery: outline 3px + ícone moto — "30-45 MIN"

---

## 8. Voice & Tone

**Tom:** apetite e atitude. Frases curtas, afirmativas, sem rodeio — como um pedido no balcão. Humor seco permitido, formalidade proibida.

**Headlines:**
- "O melhor burger da cidade. Ponto."
- "Queijo escorrendo. Pão na chapa. Você aqui."
- "A fome bateu. A gente resolve."
- "Smash de verdade não tem frescura."
- "180g de motivo pra sair de casa."

**CTAs:**
- "Peça agora no delivery"
- "Ver o cardápio completo"
- "Quero esse burger"
- "Reservar mesa pra hoje"
- "Chama no WhatsApp"

**Evitar:** gourmetês pomposo, diminutivos, frases longas, tom institucional, superlativos sem prova.

---

## 9. Composição / Page flow

1. **Hero** — full-bleed, headline gigante à esquerda sobrepondo imagem-blob à direita
2. **Destaques do cardápio** — 3 menu-cards rotacionados com offsets verticais, badge "MAIS PEDIDO" no central
3. **Faixa de apetite** — bloco mostarda full-bleed com headline atravessando + close circular invadindo a próxima seção
4. **Diferenciais** — 2 colunas assimétricas (7/5) com pilha de feature-cards coloridos
5. **Depoimentos** — 3 cards desordenados sobre creme com blobs decorativos
6. **Delivery/CTA final** — bloco vermelho, headline branca gigante, CTA mostarda hero-size
7. **Footer** — carvão, 4 colunas, faixa de fome

**Tratamento de imagem:** close-up dramático SEMPRE — queijo derretendo, chapa fumegando, mãos segurando o burger. Recortes orgânicos (blob/círculo). Saturação alta. No preview, simulado com gradientes radiais saturados + SVG.

**Ritmo:** denso nos blocos de impacto, respirado entre seções — "gritos" e "pausas".

---

## 10. Acessibilidade (WCAG 2.1 AA)

- Contraste verificado com números reais (tabela na seção 2)
- Ordem de tabulação lógica mesmo com grid desordenado (rotação é só `transform`)
- Focus visible: outline 3px de alto contraste, nunca removido sem substituto
- Overlay mobile com focus-trap + Esc
- Alt text apetitoso e descritivo; decorações com `aria-hidden`
- Touch targets ≥44px (CTAs têm ≥56px por design)
- `prefers-reduced-motion` respeitado em todas as animações

## 11. Benchmarking

**Ideal para:** hamburgueria artesanal, food truck, pizzaria artesanal, sports bar, churrascaria jovem.

**Fatores de conversão:**
1. CTA de delivery visível em 100% do scroll
2. Foto appetite-appeal antes do texto em toda dobra
3. Preço sempre visível (badge) — remove fricção
4. Prova social colada no CTA
5. Botão WhatsApp fixo no mobile (thumb zone)
6. 3 heróis do cardápio antes do cardápio completo (paradoxo da escolha)

**Core Web Vitals:** LCP < 2.5s (preload da imagem hero, `fetchpriority=high`, gradiente como placeholder), CLS < 0.1 (aspect-ratio fixo, rotações via transform), INP < 200ms (só transform/opacity, IntersectionObserver).

---

## 12. Arquivos deste DS

- `json/03-2-hamburgueria-vibrante.json` — fonte da verdade
- `previews/html/03-2-hamburgueria-vibrante.html` — preview visual interativo
- `docs/03-2-hamburgueria-vibrante/components.md` — code samples
- `docs/03-2-hamburgueria-vibrante/animations.css` — animações completas
- `docs/03-2-hamburgueria-vibrante/accessibility-report.md` — auditoria WCAG
- `docs/03-2-hamburgueria-vibrante/benchmarking.md` — conversão + performance
- `docs/03-2-hamburgueria-vibrante/color-variations.md` — 5 variações de paleta
- `docs/03-2-hamburgueria-vibrante/responsive-guide.md` — breakpoints e exemplos
