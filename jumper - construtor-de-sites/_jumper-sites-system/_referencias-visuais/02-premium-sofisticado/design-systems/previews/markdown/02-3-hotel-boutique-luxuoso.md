# DS 02.3 — Hotel Boutique Luxuoso

> **Categoria:** 02 — Premium e Sofisticado
> **Papel no sistema:** ds-base de personalidade — repertório, nunca molde
> **Sensação-alvo:** exclusividade silenciosa
> **Mood em uma frase:** marrom queimado profundo, ouro escasso e espaço absoluto — o luxo que não precisa se anunciar.

---

## 1. Inspiração

**Referência estilística:** Aman Resorts (aman.com) e Soho House.

O site da Aman vende silêncio e espaço: fotografia imersiva de ambientes (sem pessoas em close), copy escassa, transições lentas e um ritmo deliberadamente desacelerado que espelha a experiência do hóspede. Soho House adiciona o calor dos materiais escuros e a diagramação editorial de clube privado.

> Nota de honestidade: não confirmamos prêmios específicos de web design (Awwwards SOTD etc.) para esses sites em pesquisa — por isso são citados como **referência estilística**, sem premiações inventadas. Aman aparece recorrentemente em curadorias de melhores sites de hotelaria de luxo (Mediaboom, Wix, Colorlib).

**O que capturamos (essência, não cópia):**

- Exclusividade através de **espaço**, não de decoração
- Fotografia de arquitetura como protagonista (simulada com gradientes ricos + SVG no preview)
- Grid assimétrico estilo magazine — nada de fileiras uniformes
- Booking bar persistente que converte sem quebrar a atmosfera
- Ritmo lento: reveals de 1200ms, parallax de no máximo 6%

**Substituição tipográfica documentada:** a referência usa **GT Sectra** (comercial) para display e Fraunces para body. Aqui, **Fraunces (Google Fonts)** assume os headings — a substituta oficial de GT Sectra — e **Lora (Google Fonts)** assume o body, mantendo a temperatura serifada sem duplicar a mesma família em papéis distintos.

---

## 2. Paleta

Este é um DS **dark warm**: o marrom queimado é a superfície dominante, não um acento.

| Token | HEX | Uso |
|---|---|---|
| `primary` / `surface` | `#2A1F14` | Marrom queimado profundo — fundo de tudo: hero, seções, navegação |
| `secondary` | `#D4A574` | Ouro sutil — CTAs, filetes 1px, numerais, links. Escasso de propósito |
| `surface_alt` | `#382B1C` | Seções elevadas, booking bar, cards destacados |
| `text_primary` | `#F5EDE1` | Títulos e corpo principal |
| `text_secondary` | `#CBB89F` | Apoio, colunas de footer |
| `text_muted` | `#9A8568` | Captions e legais — **apenas sobre surface base** |
| `border` | `#4A3A28` | Filetes estruturais e border-bottom de inputs |
| `error` | `#E08D7C` | Estados de erro |
| `success` | `#A3C29B` | Confirmações |
| `warning` | `#E2B564` | Avisos |

### Escala neutra (warm browns)

| Step | HEX |
|---|---|
| 50 | `#FBF7F1` |
| 100 | `#F5EDE1` |
| 200 | `#E6D8C3` |
| 300 | `#CBB89F` |
| 400 | `#AE9878` |
| 500 | `#9A8568` |
| 600 | `#6E5B41` |
| 700 | `#4A3A28` |
| 800 | `#382B1C` |
| 900 | `#241A10` |

### Contraste verificado (WCAG 2.1)

| Par | Razão | Veredito |
|---|---|---|
| `#F5EDE1` sobre `#2A1F14` | **13.87:1** | AAA |
| `#CBB89F` sobre `#2A1F14` | **8.36:1** | AAA |
| `#9A8568` sobre `#2A1F14` | **4.55:1** | AA texto normal |
| `#D4A574` sobre `#2A1F14` | **7.23:1** | AAA — ouro é seguro como texto |
| `#2A1F14` sobre `#D4A574` (botão) | **7.23:1** | AAA |
| `#F5EDE1` sobre `#382B1C` | **11.82:1** | AAA |
| `#D4A574` sobre `#382B1C` | **6.17:1** | AA/AAA |
| `#E08D7C` sobre `#2A1F14` | **6.34:1** | AA |

**Regras práticas:**
1. `text_muted` nunca sobre `surface_alt` (cai para 3.88:1 — reprova).
2. Ouro nunca como texto sobre neutros claros (50–200); em contexto claro, escurecer para `#8A6A3F`.
3. Texto sobre imagem sempre com véu marrom `rgba(26,18,10,0.35–0.5)`.

---

## 3. Tipografia

| Papel | Fonte | Fonte da referência | Pesos |
|---|---|---|---|
| Headings | **Fraunces** (Google Fonts) | GT Sectra (comercial) | 300, 400 + itálico 300 |
| Body | **Lora** (Google Fonts) | Fraunces | 400, 500 + itálico |
| Mono | — | — | não aplicável |

Fraunces com **optical size alto** (`opsz` 72–144) nos títulos grandes para o desenho calligráfico-editorial. Itálico soft em citações e manifesto.

### Escala

| Papel | Mobile | Desktop | Peso | Notas |
|---|---|---|---|---|
| H1 | 40px / 1.1 | 76px / 1.05 | 300 | letter-spacing −0.015em |
| H2 | 30px / 1.15 | 48px / 1.1 | 300 | |
| H3 | 22px / 1.25 | 28px / 1.25 | 400 | |
| Quote | 22px / 1.5 | 28px / 1.5 | 300 itálico | manifesto e depoimentos |
| Body | 16px / 1.75 | 18px / 1.8 | 400 | Lora |
| Small | 13px / 1.6 | 13px / 1.6 | 400 | uppercase, tracking 0.14–0.18em |
| Caption | 12px / 1.5 | 12px / 1.5 | 400 | `#9A8568`, só sobre surface base |

**Receita fluida:**

```css
h1   { font-size: clamp(2.5rem, 1.2rem + 5.2vw, 4.75rem); }
h2   { font-size: clamp(1.875rem, 1rem + 3vw, 3rem); }
body { font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); }
```

**Stacks com fallback:**

```css
--font-heading: 'Fraunces', 'Iowan Old Style', Georgia, serif;
--font-body: 'Lora', Georgia, 'Times New Roman', serif;
```

---

## 4. Espaçamento

Base de 8px, mas com teto **muito** acima da média do sistema — o espaço vazio é o principal significante de luxo deste DS.

| Token | Valor |
|---|---|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 40px |
| xl | 64px |
| xxl | 96px |
| xxxl | 144px |
| xxxxl | 200px |

- **Section spacing:** 96px mobile / 144px tablet / **200px desktop**
- **Container:** max-width 1440px; padding 24/48/80px
- **Grid:** 12 colunas, gutter 32px (20px mobile)

---

## 5. Bordas, raios e sombras

- **Radius: 0 em tudo.** Botões, cards, inputs e imagens são retos, arquiteturais. O luxo aqui é anguloso e sóbrio.
- Inputs usam apenas `border-bottom` (estética de formulário editorial).
- Filetes dourados de 1px (`rgba(212,165,116,0.4)`) são o ornamento estrutural do DS.
- **Sombras quase inexistentes:** em fundo escuro, elevação = `surface_alt` + filete dourado (`glow_gold`), não sombra. `md`/`lg` reservadas a overlays e lightbox.

---

## 6. Motion — reveals lentos, parallax muito sutil

| Duração | Valor | Uso |
|---|---|---|
| instant | 120ms | micro-feedback |
| fast | 300ms | hover, links |
| base | 600ms | transições de seção |
| slow | 900ms | reveal-line, hover de imagem |
| reveal | **1200ms** | reveals assinatura |

Easing assinatura: `luxe_out — cubic-bezier(0.16, 1, 0.3, 1)`.

| Animação | O que faz |
|---|---|
| `reveal-up` | fade + translateY(32px)→0 em 1200ms — lenta, inevitável, silenciosa |
| `reveal-line` | filete dourado cresce 0→64px antes de títulos |
| `parallax-soft` | fundo desloca no máx. **6%** da altura — nunca vertiginoso |
| `image-scale-settle` | imagem assenta de scale(1.06)→1 em 1200ms |
| `btn-fill-gold` | outline preenche de ouro, esquerda→direita |
| `link-underline-grow` | underline dourado cresce do centro |
| `stagger-cascade` | cards revelam com delays 0/150/300ms |

**`prefers-reduced-motion`:** reveals viram fade 200ms sem translate/scale; parallax desligado por completo.

---

## 7. Componentes

### Botões
- **Primary:** fundo `#D4A574`, texto `#2A1F14` (7.23:1), reto, uppercase 13px tracking 0.18em. *Um por tela.*
- **Secondary:** outline dourado 50%, texto creme; hover preenche de ouro esquerda→direita.
- **Ghost:** link editorial dourado com underline que cresce + seta →.
- Estados completos: hover / focus (outline 2px dourado, offset 3px) / active / disabled (`#4A3A28` + `#9A8568`).
- Alturas 48–56px (touch target ≥ 44px garantido).

### Cards
Sem caixa: imagem 4:5 sangrada + numeral editorial dourado ("Nº 01") + título Fraunces + apoio Lora + ghost link. Hover: imagem escala 1.03 em 900ms; título doura. **Nada de sombra nem borda** — elevação por espaço.

### Inputs
Campo editorial: só `border-bottom 1px #4A3A28`, fundo transparente, label uppercase sempre visível. Focus: border-bottom 2px dourado + label acende. Error: border `#E08D7C` + mensagem com `aria-describedby`.

### Hero
Full-bleed 100svh, véu marrom, conteúdo no **terço inferior-esquerdo** (quebra a centralização clássica de hotelaria). Eyebrow dourado + H1 de 2 linhas + um CTA. **Booking bar** fixa na base do hero: check-in / check-out / hóspedes / botão dourado, em `surface_alt` translúcido com blur.

### Navegação
Header transparente → ganha fundo `#2A1F14` + filete dourado após 80px de scroll. Wordmark Fraunces centralizado no desktop. Mobile: overlay fullscreen `#241A10` com links Fraunces 32px em cascata, focus-trap e Esc.

### Depoimentos
Uma citação por vez, **nunca carrossel automático**. Aspas ornamentais Fraunces 96px a 30%, citação itálico 28px, contador "01 / 04", setas navegáveis por teclado.

### Footer
`#241A10`, padding-top 144px: wordmark grande, filete dourado full-width, 3 colunas (contato / navegação / redes), coordenadas geográficas como ornamento, newsletter "Receber convites".

### Badges
Selo de distinção: moldura 1px dourada sem preenchimento, uppercase 11px tracking 0.2em. Máximo 2 por página. Nunca promocional.

---

## 8. Voice & tone — minimalista evocativo

Frases curtas que sugerem em vez de descrever. Silêncio como recurso. Nunca exclamações, urgência ou superlativos.

**Headlines:**
- "Um refúgio para poucos."
- "O tempo passa diferente aqui."
- "Onde a serra encontra o silêncio."
- "Doze suítes. Nenhuma pressa."

**CTAs:**
- "Reserve sua estadia"
- "Conheça as suítes"
- "Solicite um convite"
- "Ver disponibilidade"

**Evitar:** urgência promocional ("Últimas vagas!"), superlativos genéricos, exclamações/emojis, jargão de OTA ("50% off"), descrever demais — o luxo se mostra, não se explica.

---

## 9. Composição — grid magazine

12 colunas / 1440px / gutter 32px, usado **assimetricamente**: blocos 7/12 + 5/12, offsets verticais de 64–96px, texto no máximo em 6/12.

**Fluxo da página:**

1. **Hero** — full-bleed 100svh, conteúdo inferior-esquerdo, booking bar
2. **Manifesto** — 6/12 centrado, 200px de respiro vertical (a seção mais "vazia", de propósito)
3. **Suítes (grid magazine)** — 7/12 + 5/12 com offsets, numerais Nº 01–04
4. **Experiência imersiva** — full-bleed com parallax, uma frase itálica, sem CTA
5. **Gastronomia** — split invertido 5/12 texto + 7/12 imagem sangrada à direita
6. **Depoimento** — citação única 8/12 com offset à direita
7. **CTA de reserva** — surface_alt, um botão dourado + rota de concierge
8. **Footer** — wordmark grande + 3 colunas

**Imagem:** arquitetura e ambientes em tons quentes escuros, sem pessoas em close (privacidade como valor). **Densidade:** uma ideia por viewport, máximo 2 CTAs visíveis.

---

## 10. Acessibilidade (resumo — ver accessibility-report.md)

- WCAG 2.1 **AA** com folga (maioria dos pares em AAA)
- Foco visível: outline 2px `#D4A574` offset 3px em tudo
- Skip-link, focus-trap no menu mobile, Esc fecha overlay
- Touch targets ≥ 44px (botões 48–56px)
- `prefers-reduced-motion` real
- Depoimentos sem autoplay; `aria-live="polite"`

---

## 11. Diferenciação dos irmãos da personalidade 02

| | 02.1 Advocacia | 02.2 Clínica Dental | **02.3 Hotel Boutique** |
|---|---|---|---|
| Mood | preto corporativo | sage claro, leveza tonal | **marrom queimado imersivo** |
| Paleta | `#1A1A1A` + `#C9A961` | sage green claro | **`#2A1F14` + `#D4A574`** |
| Heading | Playfair Display | Cormorant Garamond | **Fraunces** |
| Composição | split-screen corporativo | leveza tonal | **grid magazine assimétrico** |
| Luxo por | autoridade | delicadeza | **espaço e silêncio** |

Nenhum hex, fonte ou composição compartilhados.

---

## 12. Segmentos ideais

Hotel boutique · Pousada de luxo · Restaurante fine dining · Vinícola premium · Arquitetura de alto padrão

**Público:** viajantes de alto padrão, CEOs, tomadores de decisão — pessoas que pagam por privacidade e reconhecem luxo pela contenção, não pelo excesso.

---

## 13. Arquivos deste DS

| Arquivo | Conteúdo |
|---|---|
| `json/02-3-hotel-boutique-luxuoso.json` | DS completo (schema 2.0.0) |
| `previews/html/02-3-hotel-boutique-luxuoso.html` | preview visual interativo |
| `docs/02-3-hotel-boutique-luxuoso/components.md` | code samples HTML+CSS |
| `docs/02-3-hotel-boutique-luxuoso/animations.css` | CSS de animações completo |
| `docs/02-3-hotel-boutique-luxuoso/accessibility-report.md` | auditoria WCAG 2.1 AA |
| `docs/02-3-hotel-boutique-luxuoso/benchmarking.md` | conversão + performance |
| `docs/02-3-hotel-boutique-luxuoso/color-variations.md` | 5 variações de paleta |
| `docs/02-3-hotel-boutique-luxuoso/responsive-guide.md` | breakpoints e receitas |
