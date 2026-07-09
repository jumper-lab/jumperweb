# DS 01.1 — Padaria Artesanal Warm

> **Categoria:** 01 — Acolhedor e Familiar
> **Papel no sistema:** ds-base de personalidade — repertório, nunca molde
> **Sensação-alvo:** *"sou bem-vindo, este lugar me trata como pessoa"*

---

## 1. Inspiração-base

| Campo | Valor |
|---|---|
| Site | [Pinchman's Café & Artisan Bakery](https://pinchmans.ca) |
| Local | Sudbury, Ontario, Canadá |
| Design | Studio123 (studio123.ca) |
| Reconhecimento | Awwwards Nominee (2022) |

**Por que este site?** O Pinchman's traduz artesania de padaria em linguagem digital: paleta terrosa quente, serif elegante, fotografia real de pessoas e produto, e um ritmo de página calmo que transmite confiança e craft. A Studio123 desenhou a marca para comunicar "confiança, artesania e personalidade" em um mercado saturado de cafés de rede — exatamente a essência que negócios locais brasileiros de proximidade precisam.

**O que capturamos (e o que não):** capturamos o *mood* — terracota, serif warm, espaço generoso, storytelling de origem. **Não** copiamos layout, textos ou estrutura. Este DS é repertório de personalidade, nunca molde.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#B85C38` | Terracota de marca — botões (texto branco), destaques, texto grande |
| `primary_dark` | `#9A4A2B` | Links e texto de destaque em corpo (versão AA do terracota) |
| `secondary` | `#E8B696` | Bege quente — fundos, blobs, tags. **Nunca texto sobre claro** |
| `surface` | `#FDF8F3` | Fundo principal (creme quente) |
| `surface_alt` | `#F5E9DD` | Fundo de seções alternadas |
| `text_primary` | `#3E2A20` | Texto principal (marrom café) |
| `text_secondary` | `#6B4F41` | Texto de apoio |
| `text_muted` | `#7A5F50` | Legendas, metadados |
| `border` | `#E3D3C3` | Bordas e divisores |
| `error` | `#A63D2B` | Erros de formulário |
| `success` | `#4A7C59` | Confirmações |
| `warning` | `#8F6420` | Avisos |

### Escala neutra (warm)

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#FDF8F3` | `#F5E9DD` | `#EAD8C6` | `#D9BFA9` | `#BC9A81` | `#9C7A63` | `#7A5F50` | `#5C463A` | `#3E2A20` | `#2A1B14` |

### Contraste verificado (WCAG 2.1)

| Par | Razão | Veredito |
|---|---|---|
| `#3E2A20` sobre `#FDF8F3` | **12.77:1** | AAA |
| `#6B4F41` sobre `#FDF8F3` | **7.06:1** | AAA |
| `#7A5F50` sobre `#FDF8F3` | **5.56:1** | AA |
| `#9A4A2B` sobre `#FDF8F3` | **5.87:1** | AA (links/texto normal) |
| `#FFFFFF` sobre `#B85C38` | **4.54:1** | AA (botões) |
| `#B85C38` sobre `#FDF8F3` | **4.30:1** | Apenas texto grande (≥ 3:1) |
| `#E8B696` sobre `#FDF8F3` | **1.72:1** | Decorativo apenas |
| `#3E2A20` sobre `#E8B696` | **7.42:1** | AAA (texto sobre bege ok) |

> **Ajuste documentado:** o terracota do brief (`#B85C38`) fica em 4.30:1 sobre o creme e falharia AA em texto normal. Mantivemos como cor de marca (botões, texto grande) e criamos `primary_dark #9A4A2B` para links e texto corrido — mesma família, essência preservada.

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Fallback |
|---|---|---|---|
| Headings | **Lora** 500/600 (+ itálico) | Google Fonts | Georgia, serif |
| Body | **Inter** 400/500/600 | Google Fonts | -apple-system, Helvetica, sans-serif |

### Escala

| Nível | Mobile | Desktop | Line-height | Fonte |
|---|---|---|---|---|
| H1 | 34px | 56px | 1.1–1.15 | Lora 600 |
| H2 | 26px | 38px | 1.15–1.2 | Lora 600 |
| H3 | 20px | 26px | 1.25–1.3 | Lora 500 |
| Body | 16px | 17px | 1.65–1.7 | Inter 400 |
| Small | 14px | 14px | 1.5 | Inter 400 |
| Eyebrow | 13px | 13px | uppercase, tracking 0.12em | Inter 600 |

**Fluida:** `h1: clamp(2.125rem, 1.5rem + 2.5vw, 3.5rem)` — ver responsive-guide.md.

**Assinatura tipográfica do DS:** uma palavra em *Lora itálico terracota* por headline — "feito com *carinho* desde 1985". Sem uppercase em títulos ou CTAs.

---

## 4. Espaçamento e grid

- **Base:** 8px | Escala: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96
- **Entre seções:** 64px mobile → 88px tablet → **120px desktop** (o respiro é parte da personalidade)
- **Container:** máx 1200px | Texto corrido: máx 680px
- **Grid:** 12 colunas, gutter 24–32px, com assimetria proposital (blocos deslocados do centro)

## 5. Bordas e raios

| Elemento | Raio |
|---|---|
| Botões | `9999px` (pill) |
| Cards | `24px` |
| Inputs | `16px` |
| Imagens | `24–32px` ou blob orgânico (`48% 52% 50% 50% / 55% 48% 52% 45%`) |
| Footer (topo) | `32px 32px 0 0` — o footer "abraça" a página |

## 6. Sombras

Sempre em **marrom quente** (`rgba(62,42,32,…)`), nunca preto puro.

| Token | Valor | Uso |
|---|---|---|
| sm | `0 2px 8px rgba(62,42,32,0.07)` | cards default |
| md | `0 6px 20px rgba(62,42,32,0.09)` | cards hover |
| botão hover | `0 4px 14px rgba(184,92,56,0.25)` | glow terracota suave |

---

## 7. Motion

**Princípio:** movimento lento e caloroso (400–600ms). Nada pisca, nada salta — tudo se acomoda como massa descansando.

| Animação | Duração | Easing | Gatilho |
|---|---|---|---|
| fade-in-up | 600ms | soft-out `(0.16,1,0.3,1)` | entrada na viewport |
| hero-stagger | 600ms + delay 120ms/item | soft-out | page load |
| hover-lift | 400ms | standard | hover em cards (`-4px` + sombra) |
| button-warm | 400ms | standard | hover em botões (cor + glow, sem scale) |
| image-soft-zoom | 600ms | gentle | hover em imagem de card (scale 1.04) |
| underline-grow | 400ms | soft-out | hover em links de nav |

`prefers-reduced-motion: reduce` → tudo em 0.01ms, estado final aplicado. Stagger máximo: 4 itens.

---

## 8. Componentes

### Botões
- **Primário:** pill, `#B85C38` + texto branco, Inter 600. Hover: `#9A4A2B` + glow. Foco: outline 3px `rgba(184,92,56,0.4)`. Alturas: 40/48/56px.
- **Secundário:** outline 2px terracota, texto `#9A4A2B`.
- **Ghost:** link com sublinhado que cresce ("Conheça nossa história →").
- Texto em sentence case — botões falam como gente: "Vem tomar um café", não "SAIBA MAIS".

### Cards
Fundo branco, raio 24px, borda `#E3D3C3`, sombra sm, padding 28–32px. Hover-lift discreto. Variantes: **product** (foto 4/3 + título Lora + preço), **story** (fundo bege, sem sombra), **highlight** (fundo `#E8B696`).

### Inputs
Raio 16px, fonte 16px (nunca menor — evita zoom iOS), label sempre visível acima, foco com anel terracota, erro com borda + mensagem + ícone (nunca só cor). Altura mínima 48px.

### Hero
Split assimétrico 55/45 (texto / foto com blob bege atrás). Eyebrow "Desde 1985" + H1 com palavra em itálico + CTA primário + link ghost. Foto **real** de pessoas. Nunca 100vh forçado.

### Navegação
Header 72px, fundo creme com blur ao rolar. Links Inter 500 com underline-grow. CTA pill à direita. Mobile: hambúrguer 44px → painel fullscreen com links Lora 26px.

### Footer
Fundo `#3E2A20`, texto `#F5E9DD`, links hover `#E8B696`, cantos superiores 32px. Assinatura em Lora itálico: *"Feito com carinho, todos os dias."*

### Depoimentos
Citação Lora itálico 20–22px, aspas decorativas bege, foto redonda 48px + nome + contexto ("cliente há 12 anos").

### Badges
Pill bege claro, texto `#6B4F41` 13px. Variantes: destaque (`#E8B696`) e success verde suave.

---

## 9. Voice & tone

**Tom:** acolhedor, próximo, conversa de família. Primeira pessoa do plural, convites diretos, memória afetiva sem pieguice.

**Headlines:**
- "Feito com carinho desde 1985."
- "O pão que a sua família merece, do jeito que a nossa faz."
- "Aqui, todo mundo é recebido pelo nome."
- "Fornada fresquinha, três vezes ao dia. Todos os dias."

**CTAs:**
- "Vem tomar um café conosco"
- "Faça sua encomenda"
- "Conheça nossa história"
- "Fale com a gente no WhatsApp"

**Evitar:** jargão corporativo, urgência agressiva ("SÓ HOJE"), uppercase gritado, terceira pessoa impessoal, superlativos vazios.

---

## 10. Composição (page flow)

1. **Hero** — split 55/45, texto + foto com blob, CTA de visita/encomenda
2. **Promessa** — faixa bege com 3 cards (fornada fresca / ingredientes locais / receita de família)
3. **Produtos** — grid 3→2→1 colunas com preços transparentes
4. **História** — foto à esquerda + storytelling de origem (coração do DS)
5. **Depoimentos** — 2 citações com nome e rosto
6. **Visita** — card centralizado com mapa/horários + CTA WhatsApp
7. **Footer** — 3 colunas escuras, cantos arredondados

**Densidade:** baixa — 1 ideia por seção, máx 3 cards por linha.
**Imagens:** fotografia real, luz natural quente, pessoas em primeiro plano, cantos generosos. Sem filtros frios.

---

## 11. Acessibilidade (resumo)

- WCAG 2.1 **AA** verificado com razões reais (ver tabela de contraste acima)
- Foco visível: outline 3px terracota translúcido em todos os interativos
- Navegação completa por teclado + skip link + focus trap no menu mobile
- Alvos de toque ≥ 44px
- `prefers-reduced-motion` respeitado
- HTML semântico, h1 único, blockquote para depoimentos, alt em PT-BR

Auditoria completa: `docs/01-1-padaria-artesanal-warm/accessibility-report.md`

---

## 12. Para quem é este DS

**Segmentos ideais:** padaria artesanal, cafeteria de bairro, confeitaria, clínica de família, consultório pediátrico, pet shop, empório local, restaurante familiar.

**Público:** famílias e pessoas que valorizam proximidade e calor humano.

**Fatores de conversão:** CTA WhatsApp recorrente, preços transparentes, storytelling de origem com datas reais, prova social com rosto e nome, horários/mapa em destaque.

**Adaptação para outros segmentos:** manter paleta, tipografia e motion; trocar vocabulário e metáfora fotográfica. *A essência é o calor, não o pão.*

---

## 13. Direção de fotografia

**Estilo:** documental afetivo — pessoas reais do negócio em momentos genuínos.

| Aspecto | Direção |
|---|---|
| Sujeitos | Mãos na massa, dono sorrindo no balcão, cliente na mesa, produto em close com textura |
| Luz | Natural, quente, lateral suave (janela); golden hour para externas |
| Color grading | Temperatura quente (+200K a +400K), sombras amarronzadas, saturação natural |
| Enquadramento | Altura de olhar humana; ao menos 1 foto com contato visual direto |
| Proibido | Stock genérico, filtros frios, P&B dramático, gastronomia moody de fine dining |

**Fallback sem foto:** gradientes `135deg, #B85C38 → #E8B696`, blobs SVG bege e ilustrações lineares traço `#9A4A2B`.

## 14. Iconografia e formas

- Ícones em linha, stroke 1.75px, cantos arredondados, grid 24×24 (Lucide/Feather ajustados)
- Cor: `#9A4A2B` sobre claro, `#E8B696` sobre escuro
- Ícone nunca sozinho — sempre acompanhado de texto
- Formas decorativas: blobs orgânicos, meia-lua, arcos de forno — sempre `aria-hidden`

## 15. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Lora itálico em 1 palavra emocional por headline | Usar `#B85C38` como texto corrido (falha AA) |
| CTA WhatsApp no header, meio e fim | Usar `#E8B696` como texto sobre claro (1.72:1) |
| História de origem com datas e nomes reais | Hero 100vh forçado empurrando conteúdo |
| 120px de respiro entre seções no desktop | Stagger com mais de 4 elementos |
| Sombras marrons quentes | Uppercase em CTAs ou headlines |
| Botões pill em sentence case | Mais de 2 famílias tipográficas |
| 1 ideia por seção | Mais de 3 cards por linha |

## 16. Estados obrigatórios por componente

| Componente | Estados |
|---|---|
| Botão primário | default · hover · focus-visible · active · disabled · loading |
| Botão secundário | default · hover · focus-visible · active · disabled |
| Link de nav | default · hover (underline-grow) · focus-visible · current |
| Card | default · hover (lift) · focus-within |
| Input | default · focus · filled · error · disabled · success |
| Header | topo · rolado (blur + sombra) · menu aberto (focus trap) |

## 17. Implementação — notas rápidas

- **Fonts:** preconnect + `Lora:ital,wght@0,500;0,600;1,500` e `Inter:wght@400;500;600` com `display=swap`
- **JS mínimo:** menu mobile + IntersectionObserver + carrossel opcional (< 15KB, zero frameworks)
- **SEO local:** Schema.org `Bakery`/`LocalBusiness` com horários, geo e telefone
- **WhatsApp:** `wa.me` com mensagem pré-preenchida acolhedora
- **Budget:** CSS < 40KB, LCP < 2.5s, CLS < 0.1 (detalhes em `benchmarking.md`)

## 18. Arquivos do DS

| Arquivo | Conteúdo |
|---|---|
| `json/01-1-padaria-artesanal-warm.json` | DS completo (schema 2.0.0) |
| `previews/html/01-1-padaria-artesanal-warm.html` | Preview visual interativo |
| `docs/…/components.md` | Code samples HTML+CSS prontos |
| `docs/…/animations.css` | CSS de animações completo |
| `docs/…/accessibility-report.md` | Auditoria WCAG 2.1 AA |
| `docs/…/benchmarking.md` | Conversão + Core Web Vitals |
| `docs/…/color-variations.md` | 5 variações de paleta |
| `docs/…/responsive-guide.md` | Breakpoints + CSS fluido |

---

*DS 01.1 — Padaria Artesanal Warm · Jumper Site Factory · criado em 2026-07-03*
