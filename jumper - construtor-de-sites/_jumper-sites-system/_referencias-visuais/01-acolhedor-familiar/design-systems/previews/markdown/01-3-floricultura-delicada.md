# DS 01.3 — Floricultura Delicada

> **Categoria:** 01 — Acolhedor e Familiar
> **Subcategoria:** Botânico editorial delicado — boutique floral premium
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## 1. Essência

Rosa antigo + verde-jade. Fotografia natural com luz suave. Grid de produtos tratado como
galeria de arte, não como vitrine de e-commerce. Muito ar entre as seções, serifa com
personalidade (Fraunces) e movimento tão sutil que quase não se percebe — como uma flor abrindo.

**Sensação-alvo:** naturalidade como venda, beleza calma.
**Público:** mulheres em maioria; pessoas que valorizam beleza natural e delicadeza; compra
de presentes e decoração de eventos.

### Inspiração

- **Dahlia Floral & Event Design** (EUA) — Awwwards Nominee
  (https://www.awwwards.com/sites/dahlia-floral-event-design). Boutique floral de alto padrão:
  a fotografia vende, o design emoldura. Capturamos a ESSÊNCIA (ritmo editorial calmo, galeria,
  ar generoso) — nunca o layout literal.
- Referência estilística geral: sites de floristas de luxo com paleta suave, serifa
  expressiva e motion delicado.

### Como se diferencia dos irmãos da categoria 01

| DS | Paleta | Fontes | Mood | Composição |
|---|---|---|---|---|
| 01.1 | Terracota | Lora | Padaria artesanal rústica | — |
| 01.2 | Azul-céu | Nunito | Pediatria lúdica | — |
| **01.3** | **Rosa antigo + jade** | **Fraunces + Inter** | **Botânico editorial delicado** | **Grid assimétrico de galeria, arcos, reveals lentos** |

---

## 2. Cores

### Paleta funcional

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#D4A5A5` | Rosa antigo — identidade. **Decorativo apenas** (2.03:1 sobre surface): superfícies, badges com texto escuro, detalhes botânicos |
| `primary_deep` | `#9C5C5C` | Rosa profundo **derivado** — CTAs, links, texto de destaque (4.81:1) |
| `secondary` | `#8FBC8F` | Verde-jade — folhagens SVG, fundos suaves, tags (decorativo, 2.02:1) |
| `secondary_deep` | `#4E7A5A` | Jade profundo — texto verde funcional, sucesso (4.63:1) |
| `surface` | `#FBF7F4` | Off-white quente — fundo padrão |
| `surface_alt` | `#F4E9E6` | Rosa pó — seções alternadas |
| `surface_jade` | `#EEF3EC` | Jade névoa — seções de serviço |
| `text_primary` | `#33302E` | Carvão quente (12.30:1) |
| `text_secondary` | `#544A46` | (8.06:1) |
| `text_muted` | `#7A6B65` | (4.78:1) |
| `border` | `#E4D5D0` | Filetes e strokes |
| `error` | `#B4534E` | (4.60:1) |
| `success` | `#4E7A5A` | (4.63:1) |
| `warning` | `#8A5F28` | (5.26:1) |

### Escala neutra (quente-rosada)

`50 #FBF7F4 · 100 #F4EDE9 · 200 #E8DED9 · 300 #D6C9C3 · 400 #B3A49E · 500 #8E7F79 · 600 #6E615C · 700 #544A46 · 800 #3F3733 · 900 #2B2523`

### ⚠️ Decisão de contraste (documentada conforme spec)

O brief pede `#D4A5A5` como primária, mas o tom rende **apenas 2.03:1** sobre o off-white —
reprovado para qualquer texto. Solução: o rosa antigo permanece **protagonista visual**
(superfícies, arcos, badges, decoração botânica) e derivamos `#9C5C5C` — **mesmo matiz,
menos luminância** — para todo uso funcional:

- `#9C5C5C` sobre `#FBF7F4` → **4.81:1** ✅ AA texto normal
- `#FFFFFF` sobre `#9C5C5C` → **5.12:1** ✅ AA texto de botão
- O mesmo vale para o jade: `#8FBC8F` decorativo, `#4E7A5A` funcional (**4.63:1** ✅)

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Notas |
|---|---|---|---|
| Headings | **Fraunces** | Google Fonts | Serif com personalidade; pesos 300–500, nunca bold pesado; itálico em destaques poéticos |
| Body | **Inter** | Google Fonts | Neutra, legível; pesos 400/500 |

### Escala

| Papel | Mobile | Desktop | Line-height | Peso |
|---|---|---|---|---|
| H1 | 34px | 56px | 1.15 / 1.08 | 350 |
| H2 | 26px | 38px | 1.2 / 1.15 | 400 |
| H3 | 20px | 24px | 1.3 | 450 |
| Body | 16px | 17px | 1.7 / 1.75 | 400 |
| Small | 14px | 14px | 1.6 | 400 |
| Eyebrow | 12px | 13px | 1.4 | 500, uppercase, tracking 0.14–0.16em |

Tipografia fluida: `h1 { font-size: clamp(2.125rem, 1.4rem + 2.6vw, 3.5rem); }`

---

## 4. Espaçamento e ar

- Base: **8px** · Escala: 4 / 8 / 16 / 24 / 40 / 64 / 104 / 160
- **Seções: 72px mobile → 104px tablet → 160px desktop.** O ar é identidade — mais respiro
  que o padrão da categoria.
- Container: **1240px** máx · padding lateral 20/40/64px · gutter 16/24/32px
- Blocos de leitura limitados a **640px** de largura.

## 5. Bordas, raios e sombras

- Botões: **pill** (full) · Cards: 20px · Inputs: 12px · Faixas: 32px
- **Assinatura do DS:** imagens-destaque em **arco botânico** — `border-radius: 999px 999px 0 0`
- Sombras quase imperceptíveis, sempre com tinta rosada:
  `md: 0 6px 24px rgba(156,92,92,.08)` · `lg: 0 14px 40px rgba(156,92,92,.10)`
- Profundidade vem do ar, não do drop-shadow.

---

## 6. Motion — muito sutil, lento, delicado

| Token | Valor |
|---|---|
| Durações | 150 / 300 / 500 / **700** / **900ms** |
| `petal` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `breeze` | `cubic-bezier(0.33, 0, 0.15, 1)` |

| Animação | Duração | Trigger | Descrição |
|---|---|---|---|
| **bloom-reveal** | 900ms | scroll (20% na viewport) | fade + translateY(24→0) + scale(0.985→1) — lento como flor abrindo |
| **parallax-delicado** | contínuo | scroll | camadas SVG a 12% da velocidade; deslocamento total ≤ 40px |
| **petal-hover** | 700ms | hover no card | imagem scale 1.03 em máscara fixa; card sobe 4px |
| **stem-underline** | 500ms | hover/focus em link | sublinhado jade cresce da esquerda |
| **button-bloom** | 300ms | hover/focus em botão | escurece p/ #7E4949 + eleva 2px |
| **gallery-stagger** | 900ms + 120ms/item | scroll na galeria | cascata lenta coluna a coluna |

`prefers-reduced-motion: reduce` → reveals viram opacity-only 150ms, parallax desligado,
carrossel sem autoplay.

---

## 7. Componentes

### Botões
- **Primary:** fundo `#9C5C5C`, texto branco, pill. Hover `#7E4949` + sobe 2px.
  Focus: anel 2px offset 3px. Disabled: `#E8DED9`/`#8E7F79`.
- **Secondary:** outline 1.5px `#9C5C5C`, hover preenche com rosa pó.
- **Ghost:** texto jade `#4E7A5A` com stem-underline.
- Tamanhos: 40 / 48 / 56px de altura. Inter 500, **nunca uppercase**.

### Cards
- **Produto/galeria:** branco, 20px, borda fina; imagem sangrada no topo (itens-destaque em
  arco); eyebrow + H3 Fraunces + preço Inter 500 + link ghost. Hover = petal-hover.
- **Editorial:** rosa pó `#F4E9E6`, raio 32px, padding 40px, sem sombra.
- **Serviço:** jade névoa `#EEF3EC`, ícone botânico linha fina 40px.

### Inputs
Label acima (Inter 500 14px) · campo branco, borda `#D6C9C3` 1.5px, raio 12px, padding 14×18.
Focus: borda `#9C5C5C` + ring `rgba(212,165,165,.35)` 3px. Erro: borda/mensagem `#B4534E` +
`aria-invalid` + `aria-describedby`.

### Hero
Assimétrico **7/5**: texto à esquerda (eyebrow + H1 poético + CTA duplo), composição em arco à
direita com parallax delicado. Mobile: imagem em arco vem **acima** do texto. Fundo `#FBF7F4`
com radial rosa sutilíssimo. Sem foto raster obrigatória → LCP é o H1.

### Navegação
Header fixo translúcido `rgba(251,247,244,.88)` + blur 12px, 76px de altura. Wordmark Fraunces.
Links com stem-underline. Mobile: painel deslizante rosa pó, links Fraunces 24px, 500ms.

### Depoimentos
1 por vez, centrado, fundo rosa pó. Aspas gigantes Fraunces itálico `#D4A5A5`, depoimento em
Fraunces 22px, autor Inter 14px. Carrossel 8s com pausa no hover e controles reais.

### Footer
Fundo `#2B2523`, texto `#E8DED9` (10.9:1), títulos Fraunces itálico `#D4A5A5` (6.7:1 ✅ sobre
o escuro). Filete superior 3px em gradiente rosa→jade. 4 colunas → 1 no mobile.

### Badges
Pill. Rosa `#D4A5A5` com **texto escuro** `#33302E` (6.05:1 ✅) ou jade névoa com `#4E7A5A`.
Ex.: "Colheita da semana", "Entrega hoje".

---

## 8. Voice & tone

**Tom:** poético mas direto. Imagem sensorial curta + instrução clara. Nunca meloso, nunca técnico.

**Headlines:**
- "Flores que contam a sua história."
- "Colhidas de manhã, entregues com carinho."
- "Cada buquê é um pedaço de jardim."
- "A natureza já fez o mais bonito. Nós arrumamos o laço."

**CTAs:** "Monte seu buquê" · "Quero presentear" · "Ver flores da semana" · "Falar com o ateliê"

**Microcopy:**
- "Entregamos hoje em toda a cidade — pedidos até 15h."
- "Escreva seu cartão. A gente caprichar na letra é por nossa conta."

**Evitar:** urgência de e-commerce (COMPRE JÁ), adjetivos vazios empilhados, diminutivos
infantis, "premium experience", caps lock.

---

## 9. Composição

**Grid:** 12 colunas / 1240px / gutter 32px. **Assinatura: galeria assimétrica** — itens pares
descem 56px no desktop, alternando cards em arco e retos, como jardim plantado à mão.

**Page flow:**
1. **Hero** — assimétrico 7/5, arco + parallax delicado
2. **Manifesto curto** — 1 coluna 640px, Fraunces itálico, 160px de ar
3. **Galeria de flores** — grid assimétrico 3/2/1 colunas com stagger lento
4. **Como funciona** — 3 passos, numeração Fraunces 96px em rosa antigo
5. **Serviços** — 2 cards grandes (eventos / assinatura), fundo jade
6. **Depoimento** — 1 por vez, fundo rosa pó
7. **CTA final** — headline poética + botão lg + filete botânico
8. **Footer** — escuro, 4 colunas

**Densidade:** baixa — máx. 3 informações por dobra. **Whitespace:** o vazio é material de design.

---

## 10. Acessibilidade (resumo — ver accessibility-report.md)

- WCAG 2.1 **AA** com corpo de texto em nível AAA (12.30:1)
- Rosa e jade claros **nunca** carregam informação sozinhos
- Focus ring 2px sempre visível · skip-link · focus trap no menu mobile
- Touch targets ≥ 44px · `prefers-reduced-motion` em 100% das animações
- SVGs decorativos com `aria-hidden="true"`

## 11. Benchmarking (resumo — ver benchmarking.md)

**Ideal para:** floricultura premium, ateliê floral, decoração de eventos, presentes
artesanais, paisagismo residencial, assinatura de flores.

**Fatores de conversão-chave:** CTA duplo no hero, preço visível na galeria, prova de frescor
("colhidas de manhã"), 3 passos que desarmam a complexidade, contato direto por WhatsApp.

**Performance:** hero sem raster (LCP = H1), animações só transform/opacity, um único
IntersectionObserver, zero libs. Metas: LCP < 2.5s · INP < 200ms · CLS < 0.1.

---

## 12. Arquivos do DS

| Arquivo | Conteúdo |
|---|---|
| `json/01-3-floricultura-delicada.json` | Tokens completos (schema 2.0.0) |
| `previews/html/01-3-floricultura-delicada.html` | Preview visual interativo offline |
| `docs/01-3-floricultura-delicada/components.md` | Code samples HTML+CSS |
| `docs/01-3-floricultura-delicada/animations.css` | CSS de animações completo |
| `docs/01-3-floricultura-delicada/accessibility-report.md` | Auditoria WCAG 2.1 AA |
| `docs/01-3-floricultura-delicada/benchmarking.md` | Conversão + Core Web Vitals |
| `docs/01-3-floricultura-delicada/color-variations.md` | 5 variações de paleta |
| `docs/01-3-floricultura-delicada/responsive-guide.md` | Breakpoints + CSS fluido |

## 13. Tokens CSS prontos (copiar e colar)

```css
:root{
  /* Cores de identidade */
  --primary:#D4A5A5;        /* rosa antigo — DECORATIVO apenas */
  --primary-deep:#9C5C5C;   /* rosa profundo — CTAs, links, texto */
  --primary-deeper:#7E4949; /* hover */
  --secondary:#8FBC8F;      /* jade — decorativo */
  --secondary-deep:#4E7A5A; /* jade funcional */

  /* Superfícies e texto */
  --surface:#FBF7F4; --surface-alt:#F4E9E6; --surface-jade:#EEF3EC;
  --text:#33302E; --text-2:#544A46; --text-muted:#7A6B65;
  --border:#E4D5D0; --error:#B4534E; --success:#4E7A5A; --warning:#8A5F28;

  /* Raios e sombras */
  --r-md:12px; --r-lg:20px; --r-xl:32px;
  --r-arch:999px 999px 0 0; --r-full:9999px;
  --sh-sm:0 2px 8px rgba(51,48,46,.05);
  --sh-md:0 6px 24px rgba(156,92,92,.08);
  --sh-lg:0 14px 40px rgba(156,92,92,.10);

  /* Motion */
  --motion-fast:300ms; --motion-base:500ms;
  --motion-slow:700ms; --motion-slower:900ms;
  --ease-petal:cubic-bezier(.22,1,.36,1);
  --ease-breeze:cubic-bezier(.33,0,.15,1);

  /* Tipografia */
  --font-h:'Fraunces',Georgia,serif;
  --font-b:'Inter',-apple-system,'Segoe UI',Arial,sans-serif;

  /* Espaçamento responsivo */
  --section-y:72px; --container-x:20px; --gutter:16px;
}
@media(min-width:480px){:root{--section-y:104px;--container-x:40px;--gutter:24px}}
@media(min-width:1024px){:root{--section-y:160px;--container-x:64px;--gutter:32px}}
```

## 14. Regras de ouro (resumo executivo)

1. **Rosa claro e jade claro nunca carregam texto** — só decoram. Função é dos tons profundos.
2. **O ar é identidade** — não comprima seções para caber mais conteúdo.
3. **Arco botânico** é a assinatura visual; use com parcimônia (hero + destaques da galeria).
4. **Motion lento e reto** — 700–900ms, sem bounce, sem rotação, `prefers-reduced-motion` sempre.
5. **Poético mas direto** — headline emociona, microcopy instrui.
6. **Curadoria > catálogo** — 6 a 9 produtos por página, bem apresentados.

---

> **Lembrete de uso:** este DS é repertório de personalidade. Ao aplicá-lo a um cliente real,
> troque fotografia, microcopy e composição de seções — mantenha tokens e essência.
