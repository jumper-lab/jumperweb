# DS 03.3 — Sorveteria Movimento

**Categoria:** 03 — Energético e Vibrante
**Subcategoria:** Candy playful — rosa-chiclete + amarelo, stickers, confetti e grid assimétrico
**Papel no sistema:** ds-base de personalidade — repertório, nunca molde

---

## 1. Essência

Diversão é o produto. Este DS traduz para web a energia de uma sorveteria jovem em dia de sol: rosa-chiclete gritante, amarelo de festa, tipografia condensada aos berros, adesivos colados por cima de tudo e confetti caindo no hero. A composição parece caótica — grid assimétrico extremo, cards tortos, elementos sangrando o container — mas por baixo há um sistema rígido de contraste, espaçamento e hierarquia.

Enquanto o 03.1 (Academia CrossFit) é dark atlético e o 03.2 (Hamburgueria) é appetite appeal quente, o 03.3 é **candy claro**: superfícies rosadas quase brancas, hard shadows de sticker e humor exclamativo.

### Inspiração

- **Boba Ice Cream** — Awwwards Site of the Day (projeto de Zhenya Rynzhuk / Synchronized): marca de sorvete artesanal cheia de personalidade, cores doces saturadas e tipografia display gigante.
- **Sheetal Ice Cream** — Awwwards Nominee (estúdio Eight Petals): "fun, clean and colorful" — organização impecável sob a aparência lúdica.

Ambas entram como **referência estilística de mood e ritmo**. Nenhum layout, texto ou estrutura foi copiado.

---

## 2. Paleta

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#FF1493` | Marca, display, fundos de impacto, stickers, bordas |
| `primary_deep` | `#C4006B` | Derivado para TEXTO: links, labels, botões sólidos |
| `secondary` | `#FFD700` | Amarelo de festa: badges, marquee, highlights (nunca como texto) |
| `surface` | `#FFF7FB` | Fundo base rosado quase branco |
| `surface_alt` | `#FFE3F1` | Seções alternadas rosa-claro |
| `surface_dark` | `#2A1220` | Seção dark de fechamento + footer |
| `text_primary` | `#2A1220` | Texto principal (plum quase preto) |
| `text_secondary` | `#5C3A4E` | Texto de apoio |
| `text_muted` | `#8A5E75` | Legendas, placeholders |
| `border` | `#F5C9E0` | Divisores suaves |
| `error` / `success` / `warning` | `#D11414` / `#1B7A43` / `#8A5900` | Estados |

### Escala neutra (com temperatura rosa)

`50 #FFF7FB · 100 #FFE3F1 · 200 #F5C9E0 · 300 #E3A8C6 · 400 #C687A8 · 500 #A66A8B · 600 #8A5E75 · 700 #5C3A4E · 800 #3F2334 · 900 #2A1220`

### Contraste verificado (WCAG 2.1)

| Par | Razão | Veredito |
|---|---|---|
| `#2A1220` sobre `#FFF7FB` | **16.54:1** | AAA |
| `#5C3A4E` sobre `#FFF7FB` | **9.19:1** | AAA |
| `#8A5E75` sobre `#FFF7FB` | **5.07:1** | AA |
| `#C4006B` sobre `#FFF7FB` | **5.60:1** | AA texto normal |
| `#FF1493` sobre `#FFF7FB` | **3.46:1** | Só texto grande / gráficos (≥3:1) |
| Branco sobre `#C4006B` | **5.90:1** | AA — botão sólido oficial |
| Branco sobre `#FF1493` | **3.64:1** | Só texto grande |
| `#2A1220` sobre `#FFD700` | **12.42:1** | AAA — sticker oficial |
| `#FFD700` sobre `#FFF7FB` | **1.33:1** | REPROVADO — amarelo nunca é texto em fundo claro |
| `#FFD700` sobre `#2A1220` | **12.42:1** | AAA — seção dark |
| Branco sobre `#2A1220` | **17.42:1** | AAA |

> **Ajuste documentado:** o brief pedia `#FF1493` como primária. Com 3.46:1 sobre a superfície, ela reprova para texto normal. O DS mantém `#FF1493` como cor de marca/display e deriva `#C4006B` (mesmo matiz, mais profundo) para links, texto de destaque e botões pequenos. Essência preservada, AA garantido.

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Tratamento |
|---|---|---|---|
| Headings | **Oswald** 500/600/700 | Google Fonts | Bold, UPPERCASE, condensada, rotações de -2° a 2°, highlights amarelos |
| Body | **Space Grotesk** 400/500/700 | Google Fonts | 16-17px, line-height 1.6 |

### Escala

| Nível | Mobile | Desktop | Peso |
|---|---|---|---|
| H1 | 40px / 1.05 | 76px / 0.98 | 700 uppercase |
| H2 | 30px / 1.1 | 48px / 1.05 | 700 uppercase |
| H3 | 22px / 1.2 | 28px / 1.15 | 600 uppercase |
| Body | 16px / 1.6 | 17px / 1.65 | 400 |
| Small | 13px | 14px | 500, ls 0.04em |

Receita fluida: `h1 { font-size: clamp(2.5rem, 1.4rem + 5.5vw, 4.75rem); }`

---

## 4. Espaçamento, bordas e sombras

- **Base:** 8px. Escala xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 128.
- **Seções:** 64px mobile / 88px tablet / 120px desktop. Container 1240px.
- **Radius:** botões sempre pílula (`9999px`); cards 24px; inputs 16px; imagens 24px ou **blob orgânico** (`58% 42% 55% 45% / 52% 48% 55% 45%`).
- **Strokes grossos:** 3px sólidos em `#2A1220` ou `#FF1493` — estética die-cut de adesivo.
- **Sombras:** a assinatura é a **hard shadow** sem blur: `4px 4px 0 #2A1220` (sticker), crescendo para `6px 6px 0` no hover; `8px 8px 0 #FFD700` marca o card destaque. Sombras difusas só em overlay.

---

## 5. Motion

| Animação | Duração | Easing | Gatilho |
|---|---|---|---|
| sticker-pop | 300ms | pop (overshoot) | entrada no viewport, stagger 80ms |
| btn-pop-hover | 200ms | pop | hover/focus — translate + sombra cresce |
| color-invert | 250ms | standard | hover em cards/links — inversão de cores |
| marquee-scroll | 18s | linear | contínuo, pausa em hover |
| confetti-fall | 3.5s | linear | contínuo no hero (12-16 partículas CSS) |
| wiggle | 400ms | standard | hover em stickers (-3°/3°) |
| scoop-bounce | 400ms | bounce | entrada do H1 |

**`prefers-reduced-motion: reduce`** remove confetti, congela o marquee (texto estático) e zera transições. Sem exceção.

---

## 6. Componentes

### Botões (sempre pílula, 3px de borda, hard shadow)

- **Primary:** fundo `#C4006B`, texto branco (5.90:1), borda `#2A1220`. Hover: sobe 2px, sombra cresce, fundo `#FF1493`.
- **Secondary:** fundo `#FFD700`, texto `#2A1220` (12.42:1). Hover: **inversão total** — fundo escuro, texto amarelo.
- **Ghost:** transparente com borda `#FF1493`, label `#C4006B`. Hover: preenche de rosa.
- Estados de foco: outline 3px `#C4006B` offset 3px. Disabled: dessaturado, sem sombra. Altura mínima 44px.

### Cards

Borda 3px, radius 24px, hard shadow, **rotação individual** (-2°, 0°, 1.5°) — o grid parece uma mesa de adesivos. No hover o card "se endireita" (rotação zera) e sobe. Card destaque leva sombra amarela `8px 8px 0 #FFD700` e badge "MAIS PEDIDO" rotacionado.

### Badges/Stickers (assinatura do DS)

- **Pills:** fundo amarelo, texto escuro 700 uppercase, borda 2px, rotação -6° a 6°.
- **Stickers orgânicos:** blob SVG rosa com contorno branco duplo (die-cut) e texto branco grande.
- Exemplos: `NOVO!` · `MAIS PEDIDO` · `SEM LACTOSE` · `AÇAÍ TURBINADO` · `SÓ HOJE`.

### Hero

Assimétrico 65/35: H1 gigante com palavra em highlight amarelo e leve rotação; blob rosa com casquinha SVG sangrando para fora; stickers por cima; confetti atrás; marquee full-bleed fechando a dobra.

### Navegação

Sticky, borda inferior 3px. Links uppercase com highlight amarelo deslizando no hover. Mobile: painel full-screen rosa `#FF1493` com links brancos gigantes em Oswald.

### Depoimentos

Polaroids rotacionados com scroll-snap horizontal no mobile, grid desalinhado no desktop. Nome em pill amarela, estrelas SVG rosa.

### Footer

Dark `#2A1220`, títulos `#FFD700` (12.42:1), marquee decorativo rosa-claro no topo.

---

## 7. Composição / page flow

1. **Header** sticky com CTA pill
2. **Hero** assimétrico com confetti + stickers
3. **Marquee** amarelo full-bleed ("SORVETE ✦ AÇAÍ ✦ MILKSHAKE ✦")
4. **Sabores** — grid torto de cards com destaque 2-colunas
5. **Monte seu açaí** — split invertido em surface_alt, passos em pills
6. **Depoimentos** — polaroids em faixa horizontal
7. **Unidades + horários** — seção dark de alto contraste
8. **CTA final** — bloco rosa com H2 branco gigante e botão amarelo
9. **Footer** dark

Densidade alta nos momentos de festa, respiro generoso entre seções — o contraste denso/vazio é o ritmo do DS.

---

## 8. Voice & tone

**Tom:** divertido, exclamativo, jovem e direto — um amigo animado chamando para tomar sorvete. Frases curtas, zero formalidade, sem infantilizar demais.

**Headlines:**
- "Felicidade em forma de casquinha!"
- "Vem se refrescar: 32 sabores esperando por você"
- "O açaí mais turbinado do bairro chegou"
- "Dia quente? A gente resolve em duas bolas"
- "Sorvete bom é sorvete agora!"

**CTAs:** "Vem se refrescar!" · "Quero meu sorvete" · "Ver sabores" · "Montar meu açaí" · "Pedir no zap"

**Evitar:** tom institucional, jargão gourmet pretensioso, textão, diminutivos em excesso, promessas fit/"zero culpa".

---

## 9. Acessibilidade (resumo)

- Texto corrente sempre `#2A1220`/`#5C3A4E` sobre superfícies claras (AAA).
- `#FF1493` restrito a display ≥ 24px (ou 18.66px bold) e elementos gráficos.
- Amarelo jamais como texto sobre claro; sempre fundo com texto escuro.
- Foco visível 3px `#C4006B` em tudo; touch targets ≥ 44px.
- Stickers decorativos com `aria-hidden`; marquee com equivalente estático.
- `prefers-reduced-motion` implementado em todas as animações.

---

## 10. Ideal para

Sorveteria/gelateria jovem · açaíteria · bubble tea · doceria criativa · buffet infantil.

**Fatores de conversão:** CTA "Pedir no zap" sticky, cardápio visual com preço em pill, badges de urgência lúdica, seção "monte seu açaí" em passos, endereço/horário em seção de altíssimo contraste, depoimentos-polaroid como prova social.

**Distinção dos irmãos 03.x:** nada de preto+neon (03.1) nem vermelho+appetite (03.2) — aqui a base é clara, doce e adesivada; a energia vem de saturação pontual, rotações e movimento, não de peso ou sombra.
