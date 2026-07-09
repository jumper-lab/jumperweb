# DS 03.1 — Academia CrossFit Energia

> **Categoria:** 03 — Energético e Vibrante
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## 1. Essência

Preto absoluto + amarelo neon. Tipografia GIGANTE condensada em caixa alta. Marquees deslizando sem parar. CTAs impossíveis de ignorar. Energia visual constante.

A sensação-alvo ao abrir o site: **"Quero fazer isso AGORA."**

Este DS existe para negócios que vendem transformação por intensidade: box de CrossFit, escola de luta, personal trainer, estúdio de HIIT, arena de e-sports. O visitante não deve "navegar" — deve ser **empurrado** para a primeira aula grátis.

### Inspiração base

| | |
|---|---|
| **Site** | [Gymbox](https://gymbox.com) |
| **Local** | Londres, Reino Unido |
| **Reconhecimento** | Perfil listado no Awwwards (awwwards.com/sites/gymbox); campanha "Cutting Through The Bulls**t" (2023) citada como case de disrupção da categoria fitness |
| **Por quê** | A Gymbox se posiciona como "antídoto para academias chatas": vídeos de fundo de alta energia, tipografia massiva, animações vivas, tom provocador. Capturamos a ESSÊNCIA (mood, ritmo, hierarquia, voz) — nunca o layout, os textos ou a estrutura. |

> Nota: prêmios específicos com data/nota não foram confirmados individualmente — tratar como referência estilística de alto nível.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#FFD600` | Amarelo neon — CTAs, headlines de destaque, marquees, badges, glow |
| `secondary` | `#000000` | Preto absoluto — fundo dominante e texto sobre amarelo |
| `surface` | `#000000` | Fundo de página |
| `surface_alt` | `#111111` | Cards, faixas alternadas, inputs |
| `text_primary` | `#FFFFFF` | Texto principal |
| `text_secondary` | `#B3B3B3` | Texto de apoio |
| `text_muted` | `#8A8A8A` | Legendas, metadados |
| `border` | `#2A2A2A` | Bordas padrão |
| `error` | `#FF5C51` | Erros de formulário |
| `success` | `#4ADE80` | Confirmações |
| `warning` | `#FFB020` | Avisos |

### Escala neutra

`50 #F7F7F7` · `100 #E6E6E6` · `200 #CCCCCC` · `300 #B3B3B3` · `400 #8A8A8A` · `500 #666666` · `600 #444444` · `700 #2A2A2A` · `800 #111111` · `900 #000000`

### Contraste verificado (WCAG 2.1, luminância relativa)

| Par | Razão | Resultado |
|---|---|---|
| #FFFFFF sobre #000000 | **21.00:1** | AAA |
| #FFD600 sobre #000000 | **14.87:1** | AAA |
| #000000 sobre #FFD600 | **14.87:1** | AAA |
| #B3B3B3 sobre #000000 | **10.02:1** | AAA |
| #8A8A8A sobre #000000 | **6.08:1** | AA (texto normal) |
| #FF5C51 sobre #000000 | **6.90:1** | AA |
| #4ADE80 sobre #000000 | **12.05:1** | AAA |
| #FFD600 sobre #111111 | **13.37:1** | AAA |

### ⚠️ Regra de ouro do amarelo

- Sobre **amarelo (#FFD600)**, texto é **SEMPRE preto (#000000)**. Branco sobre amarelo = 1.41:1 → **reprovado**.
- **Amarelo nunca sobre branco** (1.41:1). Amarelo só vive sobre preto/cinza-escuro.
- Blocos amarelos nunca carregam texto longo — são faixas de ação (CTA, badge, marquee, card featured).

---

## 3. Tipografia

| Papel | Fonte | Fonte | Tratamento |
|---|---|---|---|
| Headings | **Anton** | Google Fonts | SEMPRE UPPERCASE, line-height 0.9–1.0, letter-spacing +0.01em |
| Body | **Inter** | Google Fonts | 16–18px, line-height 1.6 |
| Dados/timers | **JetBrains Mono** | Google Fonts | Contadores, preços, horários, placares de WOD |

Fallbacks: `'Anton', 'Arial Narrow', Impact, sans-serif` · `'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif`

### Escala

| Nível | Mobile | Desktop |
|---|---|---|
| Display | clamp(56px, 18vw, 88px) | clamp(96px, 11vw, 176px) |
| H1 | 48px | 96px |
| H2 | 36px | 64px |
| H3 | 24px | 32px |
| Body | 16px | 18px |
| Small | 14px | 14px |
| Eyebrow | 13px / ls 0.18em | 14px / ls 0.2em |

**Princípio:** a tipografia É a imagem. Headlines ocupam até 90vw. O salto de escala mobile→desktop é dramático de propósito.

```css
h1 { font: 400 clamp(48px, 8vw, 96px)/0.92 'Anton', 'Arial Narrow', Impact, sans-serif;
     text-transform: uppercase; letter-spacing: 0.01em; }
```

---

## 4. Espaçamento e grid

- **Base:** 8px — escala `4 / 8 / 16 / 24 / 32 / 48 / 80 / 128`
- **Seções:** 64px (mobile) · 96px (tablet) · 128px (desktop)
- **Container:** max-width 1440px · padding lateral 20/40/64px
- **Grid:** 12 colunas, gutter 32px — mas headlines e marquees **quebram o grid** (full-bleed 100vw)
- **Ritmo:** denso→vazio como intervalos de treino. O "whitespace" aqui é PRETO: vazio absoluto ao redor das headlines para amplificar impacto.

## 5. Bordas e sombras

- **Radius 0 em tudo**: botões, cards, inputs, imagens — blocos retos, brutais. Única exceção: badge pill de modalidade (radius full).
- Strokes: `1px #2A2A2A` (padrão) · `2px #FFD600` (destaque) · `4px #FFD600` (heavy — sublinhados, card ativo, topo do footer).
- **Sombra = GLOW**: em fundo preto, sombra escura some. O sistema usa glow amarelo como sombra de energia:
  - `glow_primary`: `0 0 24px rgba(255,214,0,0.35)` — hover de CTA/card
  - `glow_primary_strong`: `0 0 48px rgba(255,214,0,0.5)` — card featured/ativo

---

## 6. Motion

Rápido e ousado: 120–300ms com easings de "soco".

| Animação | Duração | Trigger | Descrição |
|---|---|---|---|
| `marquee-slide` | 18s (10s urgente) | loop | Faixa de texto Anton deslizando (translateX −50%, conteúdo duplicado) |
| `cta-invert` | 200ms | hover/focus | CTA amarelo/preto inverte para preto/amarelo + glow |
| `headline-slam` | 300ms | scroll | Headline cai (translateY 40px + scale 0.96 → normal), stagger 60ms/linha |
| `card-charge` | 250ms | hover | Card sobe 6px, borda amarela, glow |
| `pulse-badge` | 1.6s | loop | Badge de urgência pulsa opacidade + scale |
| `stripe-sweep` | 300ms | hover nav | Sublinhado amarelo 4px varre da esquerda |
| `counter-up` | 1.2s | scroll (1x) | Números de prova social contam até o valor |
| `video-sim-gradient` | 8s | loop | Gradiente animado que simula vídeo de fundo no hero |

Easings: `punch: cubic-bezier(0.16,1,0.3,1)` · `snap: cubic-bezier(0.7,0,0.3,1)`

**prefers-reduced-motion:** marquees congelam, slams viram fade, pulses desligam, counters mostram valor final direto.

---

## 7. Componentes

### Botões

| Variante | Default | Hover |
|---|---|---|
| **Primary** | Fundo #FFD600, texto #000, borda 2px amarela, Anton uppercase, radius 0 | Inverte: fundo preto, texto amarelo, + glow (200ms) |
| **Secondary** | Transparente, texto branco, borda 2px branca | Fundo branco, texto preto |
| **Ghost** | Texto amarelo Inter 700 uppercase + sublinhado 4px | Stripe-sweep |

Tamanhos: sm 40px · md 48px · lg 56px · **xl_cta 72px** (hero e CTA final). Focus: outline 3px com offset 3px (branco sobre amarelo, amarelo sobre preto). Disabled: fundo #444, texto #8A8A8A.

### Cards

- **Class card:** fundo #111, borda 1px #2A2A2A, eyebrow amarelo + H3 Anton + texto #B3B3B3 + ghost link. Hover = card-charge.
- **Plan card:** preço gigante em JetBrains Mono. Featured = fundo AMARELO com todo texto PRETO + badge "MAIS ESCOLHIDO" rotacionada −3°.
- **Media card:** "foto" simulada por gradiente diagonal + faixa amarela clip-path (no produto real: foto P&B de alto contraste com overlay preto 40–60%).

### Inputs

Fundo #111, borda 1px #2A2A2A, radius 0, 48px min. Label Inter 700 uppercase 13px. Focus: borda amarela + ring rgba(255,214,0,0.25). Erro: borda e mensagem #FF5C51.

### Hero

100vh full-bleed. Vídeo simulado (gradiente animado + faixas diagonais amarelas). Headline display à ESQUERDA, ancorada na metade inferior: `SEM DESCULPAS. / COMECE HOJE.` CTA xl amarelo + ghost link. Overlay preto 55–65%. Marquee de urgência colado na base.

### Navegação

Barra fixa preta, borda inferior 1px. Links Inter 700 uppercase com stripe-sweep. **CTA "AULA GRÁTIS" sempre visível.** Ao rolar >80px, barra encolhe e ganha blur. Mobile: overlay fullscreen com links Anton 40px em stagger.

### Depoimentos

Manchete de RESULTADO, não card fofo: quote em Anton 28–40px branco, aspas amarelas gigantes, resultado em destaque amarelo ("−14kg em 5 meses"). Carousel com scroll-snap.

### Footer

Borda superior 4px amarela. Marquee lento da marca + 3 colunas + barra legal. Horários em JetBrains Mono.

### Badges

- **Urgência:** fundo amarelo, texto preto 800 uppercase, pulse. "ÚLTIMAS VAGAS"
- **Modalidade:** pill com borda #2A2A2A
- **Stat:** número gigante mono amarelo + label branco. "+500 ALUNOS"

---

## 8. Voz e tom

**Imperativo, direto, motivacional.** Frases curtas como socos. O site fala como um coach: exige, provoca e celebra.

**Headlines:**
- SEM DESCULPAS. COMECE HOJE.
- SEU ÚNICO ADVERSÁRIO É O VOCÊ DE ONTEM.
- TREINO FORTE. COMUNIDADE MAIS FORTE.
- O SOFÁ NÃO VAI SENTIR SUA FALTA.
- AQUI NINGUÉM TREINA SOZINHO.

**CTAs:**
- Sua primeira aula é grátis
- AGENDAR AULA EXPERIMENTAL
- QUERO COMEÇAR AGORA
- GARANTIR MINHA VAGA

**Evitar:** tom passivo, clichês de academia, promessas irreais, texto longo no hero, diminutivos ("treininho"), e qualquer body shaming — a provocação é pró-ação, nunca humilhação.

---

## 9. Composição (page flow)

1. **Hero** — 100vh, vídeo simulado, headline display, CTA xl
2. **Marquee de urgência** — faixa amarela: "PRIMEIRA AULA GRÁTIS ★ SEM FIDELIDADE ★"
3. **Modalidades** — grid 3 col de class cards
4. **Prova social numérica** — counters em faixa #111
5. **Metodologia** — split 50/50 em zigue-zague
6. **Depoimentos** — carousel de manchetes de resultado
7. **Planos** — 3 cards, central featured amarelo
8. **CTA final** — "COMECE HOJE." display + botão xl + badge pulse
9. **Footer** — marquee da marca + colunas

**Imagem:** fotografia de treino P&B de alto contraste, overlay preto, duotone preto/amarelo opcional. Em protótipos: gradientes animados, nunca imagem externa.

---

## 10. Acessibilidade (resumo)

- WCAG 2.1 **AA** (a maioria dos pares atinge AAA)
- Focus visível 3px em tudo; skip-link; focus trap no menu mobile
- Marquees `aria-hidden` com versão estática para leitores de tela
- Touch targets ≥ 44px
- `prefers-reduced-motion` respeitado em todas as animações
- Autoplay sempre mudo com botão de pausa

## 11. Distinção dos irmãos (personalidade 03)

| | 03.1 CrossFit | 03.2 Hamburgueria | 03.3 Sorveteria |
|---|---|---|---|
| Paleta | #FFD600 + #000000 (dark/neon) | #E63946 + #F1C232 (quente/claro) | #FF1493 + #FFD700 (candy) |
| Heading | Anton | Bebas Neue | Oswald |
| Imagem | P&B atlética + duotone | Food photography | Stickers playful |
| Assinatura | Marquees + glow + inversão | — | — |

## 12. Ideal para

Academia · Box de CrossFit · Escola de luta · Personal trainer · Estúdio funcional/HIIT · Arena de e-sports

---

*Arquivos relacionados: `../../json/03-1-academia-crossfit-energia.json` · `../html/03-1-academia-crossfit-energia.html` · `../../docs/03-1-academia-crossfit-energia/`*
