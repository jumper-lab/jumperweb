# Benchmarking — Cerâmica Artesanal (DS 05.2)

**Personalidade:** 05 — Artesanal e Autêntico
**Site de inspiração:** [Farmhouse Pottery](https://farmhousepottery.com) — Woodstock, Vermont, EUA. Fundada em 2012 por James Zilian (ex-Simon Pearce, formado em cerâmica pela Maine College of Art); começou no porão de casa com um forno e duas rodas, loja física em 2014, filosofia farm-to-table e slow living.

> *Nota de prêmios:* nenhum prêmio específico confirmado em pesquisa — referência usada por seu **mood** matérico e escultural, nunca pelo layout literal. Tipografia de corpo comercial estilo Söhne substituída por **Inter** (Google Fonts); display em **Fraunces**.

---

## 1. Fatores de conversão

Derivados de `benchmarking.conversion_factors` do JSON.

| Fator | Mecanismo | Impacto |
|---|---|---|
| Storytelling de processo (seção 01–04) | Constrói valor percebido **antes** do preço | Essencial para tíquete alto artesanal — o cliente compra a história |
| Badges "peça única" / "pequenos lotes" | Escassez **legítima**, sem urgência artificial | Aumenta desejo sem quebrar o tom sóbrio |
| Fotografia moody + whitespace de galeria | Posiciona o objeto como peça de coleção | Sustenta margem; reduz comparação por preço |
| CTA "Agendar visita ao ateliê" | Gera **lead qualificado offline** | Decoradores/colecionadores compram após visita — ótimo para B2B |
| Depoimentos com contexto profissional ("decoradora, São Paulo") | Prova social B2B | Aumenta confiança de compradores profissionais |
| Newsletter editorial ("lotes do mês") | Recorrência de audiência para drops limitados | Cria demanda antecipada para produção limitada |

**Padrão de CTA recomendado:** primário `Explorar a coleção` + ghost `Conheça o ateliê`. Tom de "porta aberta", nunca de checkout. Evitar toda urgência de e-commerce (ver `voice_and_tone.avoid`).

---

## 2. Performance — Core Web Vitals

Metas do JSON: **LCP < 2.5s · INP < 200ms · CLS < 0.1** (FID < 100ms no legado).

| Métrica | Meta | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.5s (mira < 1.5s) | Hero sem imagem raster obrigatória: gradiente + SVG inline → LCP **tipográfico**. Em produção, `preload` da imagem hero e AVIF/WebP com `width`/`height` explícitos |
| **CLS** | < 0.1 | `aspect-ratio` reservado em toda mídia do grid magazine; fontes com `font-display: swap` + fallback metric-compatible (`size-adjust`) |
| **INP** | < 200ms | Cursor customizado via `transform` + `requestAnimationFrame` (sem layout); `IntersectionObserver` único para todos os reveals; parallax só via `transform` no compositor |

**Riscos de performance a vigiar:**
- Fraunces é variable font — subir só os eixos usados (`opsz`, `wght`) e `unicode-range` para latino.
- Grain via `feTurbulence` pode ser caro: renderizar uma vez em baixa resolução e reutilizar como textura.
- Parallax e image-breathe: manter em propriedades compostas (`transform`, `opacity`) — nunca animar `top`/`width`.

---

## 3. SEO

- **HTML semântico** (header/nav/main/section/article/footer, um `<h1>`) já favorece indexação.
- Headlines em Fraunces são **texto real**, não imagem → indexáveis e acessíveis.
- Alt text descritivo de peças (material/técnica/cor) alimenta busca por imagens.
- LCP tipográfico rápido melhora sinal de experiência de página.
- Conteúdo editorial (processo, ateliê, newsletter) gera páginas com profundidade de texto — bom para long-tail ("cerâmica torneada à mão", "peça única esmaltada").
- Recomendado: dados estruturados `Product` + `Offer` nas peças e `LocalBusiness` no bloco de visita ao ateliê.

---

## 4. Casos ideais

Derivados de `benchmarking.ideal_for`.

| Segmento | Por que encaixa |
|---|---|
| Cerâmica e ateliês de olaria | Encaixe direto — é o DNA do DS |
| Marcenaria autoral | Mesmo storytelling de processo e material bruto |
| Joalheria autoral / ourivesaria | Tíquete alto + peça única + fotografia moody sustentam margem |
| Ateliê de arte e objeto | Grid magazine e whitespace de galeria valorizam obra autoral |
| Brechó curado / garimpo de design | Cada item é único; narrativa de proveniência funciona bem |
| Vidraria e sopro artesanal | Processo com fogo e mãos casa com o mood matérico/escuro |

## 5. NÃO use para

- E-commerce de alto volume/preço baixo (o ritmo lento e a baixa densidade prejudicam conversão de massa).
- Produtos onde velocidade/urgência é o valor (o DS proíbe contadores e "compre já").
- Catálogos enormes com milhares de SKUs uniformes (o grid magazine pressupõe curadoria e proporções variadas).
- Marcas industriais/tech que precisam transmitir escala e padronização.

---

## 6. Diferenciação dentro da família 05 / vizinhos

Do `essence.differentiation_note`:

- **05.2 (este)** — terracota **crua fosca #9B6B47** + preto-fumaça #4A4A48, mood escuro/matérico, grid magazine com proporções variadas, cursor customizado, Fraunces leve + Inter.
- 05.1 — #8B5E3C + verde-musgo + Cormorant (café de origem).
- 05.3 — #C19A6B + #8B7355 + Newsreader (padaria de fermentação, luz natural).
- 01.1 — terracota **quente** #B85C38 + Lora (padaria aconchegante).
- 01.3 — Fraunces com rosa antigo floral, pesos altos.
- 02.3 — marrom queimado #2A1F14 + ouro (hotel de luxo).

O que torna o 05.2 único: **terracota fosca + preto-fumaça**, mood moody/escultural, e o uso de **Fraunces em pesos leves (350–500), opsz alto e tracking apertado** — o oposto do Fraunces bold-floral do 01.3.
