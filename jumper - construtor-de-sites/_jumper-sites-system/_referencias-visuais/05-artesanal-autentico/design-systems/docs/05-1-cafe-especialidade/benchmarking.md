# Benchmarking — Café de Especialidade (05.1)

**Design System:** Café de Especialidade — Origem & Torra (`05.1`)
**Personalidade:** 05 — Artesanal e Autêntico
**Site de inspiração:** Ceremony Coffee Roasters (ceremonycoffee.com) — Awwwards Site of the Day (8 mai 2018), indicado a Ecommerce of the Year 2018; case Drexler: +400% em vendas online após redesign. Referência secundária: Verve Coffee Roasters (Awwwards Honorable Mention).

---

## 1. Por que este DS converte

O argumento central: **o processo É a página de vendas**. Em vez de tratar café como commodity (sacas, preço, promoção), a narrativa vertical em capítulos numerados transforma a procedência em razão de compra — justificando ticket alto sem apelar para urgência artificial.

### Fatores de conversão (derivados do JSON)

| Fator | Mecanismo | Impacto |
|---|---|---|
| Storytelling de processo | O capítulo "A Torra" funciona como página de vendas: quem lê a jornada aceita pagar mais | Sustenta ticket premium |
| Rosto e nome do produtor | Origin cards com retrato + fazenda + altitude geram prova social de procedência | Confiança de origem |
| Badges técnicos | Pontuação SCA, processo (lavado/natural/honey), altitude — racionalizam a compra emocional | Reduz atrito de decisão |
| Clube de assinatura ("Cartas da torra") | Converte compra única em receita recorrente | Aumenta LTV |
| Hero curto com scroll cue | Hero de 70–80vh com "role para conhecer a origem ↓" puxa para a narrativa | Aumenta profundidade de rolagem e engajamento |
| Depoimento único e editorial | Uma citação curada, sem carrossel frenético | Transmite curadoria, não volume |

---

## 2. Casos ideais (com justificativa)

| Segmento | Por que encaixa |
|---|---|
| Café de especialidade e coffee shops de origem | Match direto: narrativa farm-to-cup é o próprio DNA da categoria |
| Torrefação artesanal com venda direta | O capítulo da torra vende o diferencial; badge SCA racionaliza o preço |
| Empório artesanal de produtos de procedência | Estrutura de capítulos e origin cards funciona para qualquer produto com história de origem |
| Vinícola pequena / vinho natural | Terroir, safra e produtor traduzem perfeitamente para o padrão de capítulos |
| Chocolataria bean-to-bar e queijaria de fazenda | Mesma lógica de origem, processo e curadoria; paleta terrosa combina |

### Não use para

- Marketplaces de volume / commodity com foco em preço baixo (o DS evita linguagem de "promoção imperdível").
- Marcas que dependem de urgência artificial e contadores de escassez.
- Catálogos densos com muitos SKUs por dobra (a densidade aqui é baixa, de propósito).
- Tom esnobe/excludente — o DS convida iniciantes, não intimida.

---

## 3. Performance — Core Web Vitals

Metas do DS: **LCP < 2.5s · INP < 200ms · CLS < 0.1**.

| Métrica | Alvo | Estratégia |
|---|---|---|
| LCP | < 2.5s | Hero **sem imagem** acima da dobra de texto — o LCP é o H1 tipográfico. Fontes com `preconnect` + `font-display: swap`. Imagem do hero com `loading="eager"` mas abaixo do texto. |
| CLS | < 0.1 | `aspect-ratio` fixo em todas as imagens e cards; dimensões reservadas para a numeração de capítulo; fontes com fallback métrico próximo (Georgia p/ Cormorant, system p/ Inter). |
| INP | < 200ms | Parallax via `transform` + `requestAnimationFrame` com lerp (nunca scroll handler síncrono pesado); `IntersectionObserver` para reveals; grão em SVG data-URI (zero requests extras). |

### Checklist de performance

- Grão de filme como SVG `feTurbulence` inline / data-URI — sem requisição de imagem.
- Imagens simuladas por gradiente CSS no preview (sem peso de download).
- Duas famílias Google Fonts, subsets latinos, pesos mínimos necessários (Cormorant 500/600 + itálico; Inter 400/500/600).
- Animações lentas (700–900ms) são de opacidade/transform — compostas na GPU, não forçam reflow.

---

## 4. SEO

- HTML semântico com landmarks (`header/nav/main/section/article/footer`) e um único `<h1>`.
- Hierarquia de headings sem saltos favorece a indexação da narrativa.
- Alt text descritivo do processo alimenta busca por imagem e acessibilidade ao mesmo tempo.
- Conteúdo editorial longo (capítulos de origem) gera palavras-chave de cauda longa naturais: "café natural Mantiqueira", "torra artesanal", "produtor de café de especialidade".
- Metadados de produto (altitude, varietal, processo, pontuação SCA) são candidatos a dados estruturados (schema.org/Product).

---

## 5. Diferenciação frente aos DS irmãos

| DS | Paleta | Fonte | Mood |
|---|---|---|---|
| **05.1 (este)** | marrom-café #8B5E3C + verde-musgo #2F5233 | Cormorant Garamond + Inter | terroso escuro, capítulos numerados verticais, grão de filme |
| 05.2 | terracota #9B6B47 + #4A4A48 | Fraunces | moody magazine |
| 05.3 | dourado-grão #C19A6B + #8B7355 | Newsreader | luz natural |
| 02.2 | sage claro | Cormorant Garamond | leve, arejado |

A assinatura composicional exclusiva — **narrativa vertical de origem em 4 capítulos numerados** (01 A Origem · 02 A Colheita · 03 A Torra · 04 A Xícara) alternando fundos claro/escuro com numeração gigante translúcida e grão de filme — não é replicada por nenhum irmão. Mesmo compartilhando Cormorant com o 02.2, o mood terroso escuro produz resultado visual radicalmente distinto.
