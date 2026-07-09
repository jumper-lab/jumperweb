# DS 02.2 — Clínica Dental Premium (Sage & Champagne)

> **Categoria:** 02 — Premium e Sofisticado
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## 1. Essência

Uma clínica dental que se apresenta como um **estúdio boutique**, não como um consultório genérico. Sage green e champagne suave sobre off-white quente, tipografia serifada de ateliê (Cormorant Garamond) equilibrada por um corpo neutro e preciso (Inter), fotografia tonal e espaço em branco generoso.

A sensação-alvo é **refinamento e calma clínica**: confiança silenciosa, no polo oposto da agressividade comercial ("promoção de clareamento!!!") que domina o segmento.

**Público:** pacientes que valorizam refinamento, estética dental, profissionais liberais dispostos a pagar por atendimento particular de alto padrão.

### Inspiração-base

- **Site:** Grind Dentistry — https://grinddentistry.com
- **Por quê:** estética Webflow minimalista aplicada a odontologia; vibe boutique-studio; whitespace como material de design; a competência comunicada pela calma, não pelo grito.
- **Status:** referência **estilística** — não foram verificados prêmios, estúdio ou dados de projeto em pesquisa; nada aqui deve ser citado como case premiado.
- **Nota tipográfica:** a referência usa grotesca comercial no estilo **Söhne** (Klim Type, não disponível no Google Fonts). Substituição oficial deste DS: **Inter**. Cormorant Garamond entra nos headings para reforçar o eixo "sorriso tratado como arte".

### Diferença em relação aos irmãos da personalidade 02

| DS | Mood | Paleta | Fontes | Composição |
|---|---|---|---|---|
| 02.1 Advocacia | Dark editorial | #1A1A1A + #C9A961 | Playfair Display | Split-screen B&W |
| **02.2 Dental (este)** | **Claro, tonal, spa** | **#6B8E6F + #E8D5B7** | **Cormorant Garamond + Inter** | **Hero split claro 55/45, ritmo centrado, moldura champagne deslocada** |
| 02.3 Hotel Boutique | Dark quente luxury | #2A1F14 + #D4A574 | Serif luxury | Grid magazine assimétrico |

O 02.2 é o **único claro e tonal** da família — leveza, não dark luxury.

---

## 2. Cores

### Paleta principal

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#6B8E6F` | Sage green — atmosfera: superfícies, ícones, headings grandes. **Não usar como texto normal** (3.48:1) |
| `primary_dark` | `#4A6B4F` | Derivado escurecido — **texto verde, links, CTAs sólidos** (5.69:1 sobre surface) |
| `secondary` | `#E8D5B7` | Champagne suave — decorativo puro: fundos, badges, molduras, sublinhados |
| `surface` | `#FAF9F6` | Off-white quente base |
| `surface_alt` | `#EEF2EC` | Tint sage para seções alternadas |
| `surface_champagne` | `#F5EEE0` | Tint champagne para depoimentos/CTA final |
| `text_primary` | `#2C332E` | Verde-grafite (12.31:1 — AAA) |
| `text_secondary` | `#5A625C` | 5.98:1 |
| `text_muted` | `#656C67` | 5.12:1 |
| `border` | `#DDE2DC` | Hairlines e cards |
| `error` | `#B5482F` | 5.07:1 |
| `success` | `#3F6B4A` | 5.84:1 |
| `warning` | `#8A6D1F` | 4.65:1 |

### Escala neutra (verde-acinzentada quente)

`50 #FAF9F6 · 100 #F1F0EB · 200 #E3E4DE · 300 #CDD1CB · 400 #AAB0AB · 500 #878E89 · 600 #6E7570 · 700 #5A625C · 800 #404742 · 900 #2C332E`

### ⚠️ Decisão de contraste (documentada)

O sage `#6B8E6F` do brief rende **3.48:1** sobre `#FAF9F6` — aprovado só para **texto grande** (≥24px / ≥18.66px bold). Para texto normal e CTAs foi derivado **`#4A6B4F`** (mesmo hue, mais escuro): **5.69:1** sobre surface e **5.99:1** com texto branco sobre ele. O champagne `#E8D5B7` (1.36:1) é estritamente decorativo; sobre champagne o texto é sempre `#2C332E` (9.03:1).

---

## 3. Tipografia

| Papel | Fonte | Fonte real da referência | Pesos |
|---|---|---|---|
| Headings | **Cormorant Garamond** (Google Fonts) | — (escolha autoral do DS) | 500, 600, itálico 500 |
| Body/UI | **Inter** (Google Fonts) | Söhne (comercial → substituída) | 400, 500 |

**Fallbacks:** `'Cormorant Garamond', 'Times New Roman', Georgia, serif` · `'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`

### Escala

| Nível | Mobile | Desktop | Fonte / peso |
|---|---|---|---|
| H1 | 38px / 1.12 | 64px / 1.06 | Cormorant 500 |
| H2 | 30px / 1.18 | 44px / 1.12 | Cormorant 500 |
| H3 | 23px / 1.25 | 28px / 1.25 | Cormorant 600 |
| Body | 16px / 1.65 | 17px / 1.7 | Inter 400 |
| Small | 13px / 1.5 | 14px / 1.5 | Inter 400 |

**Fluida:** `h1: clamp(38px, 3vw + 28px, 64px)` · `h2: clamp(30px, 2vw + 22px, 44px)` · `h3: clamp(23px, 1vw + 19px, 28px)`

**Gestos tipográficos:** eyebrows em Inter 500 12px uppercase +0.14em na cor `#4A6B4F`; uma palavra do H1 em itálico como gesto editorial; citações em Cormorant itálico 26px.

---

## 4. Espaçamento e grid

- **Base:** 8px — escala `4 / 8 / 16 / 24 / 40 / 64 / 96 / 144`
- **Seções:** 72px mobile · 104px tablet · **144px desktop**
- **Container:** 1140px máx., padding 20/40/64px
- **Texto corrido:** máx. **680px** (medida editorial)
- **Grid:** 12 colunas, gutter 24/32px
- **Filosofia:** o vazio é estrutural — comunica o mesmo refinamento de uma sala de espera silenciosa. Não "otimizar" a densidade.

## 5. Bordas e sombras

- **Radius:** botões `999px` (pílula) · cards `20px` · inputs `12px` · imagens `20px` (hero com canto sup. `32px`)
- **Strokes:** hairline `1px #DDE2DC`; interativo `1.5px #6B8E6F`
- **Sombras:** sempre difusas, tingidas de `rgba(44,51,46,…)` — nunca preto puro.
  - `sm: 0 2px 8px 6%` (cards em repouso)
  - `md: 0 6px 20px 8%`
  - `lg: 0 14px 40px 12%` (cards no hover — **assinatura "shadow-lift"**)
  - `xl: 0 24px 64px 14%` (hero image / modal)

## 6. Motion

**Filosofia:** sutil e funcional. A calma É a marca. Zero parallax pesado, zero loops decorativos.

| Animação | Duração / easing | Gatilho |
|---|---|---|
| `fade-in-up` | 800ms `cubic-bezier(0.16,1,0.3,1)` | scroll reveal, 24px, stagger 90ms |
| `hero-reveal` | 1000ms out-soft | load, cascata 120ms |
| `shadow-lift` | 320ms standard | hover em card: sombra sm→lg + translateY(-4px) |
| `button-soften` | 200ms standard | hover: `#4A6B4F`→`#3E5A42` |
| `underline-grow` | 320ms out-soft | hover em link de nav: sublinhado champagne cresce |
| `image-tone-shift` | 600ms in-out-calm | hover em imagem: overlay sage 12%→0 |

`prefers-reduced-motion: reduce` desliga tudo — conteúdo aparece imediatamente.

## 7. Componentes (resumo)

- **Botão primary:** pílula `#4A6B4F` + texto branco, 48px de altura; hover escurece + sombra sm. **Nunca usar o sage claro como fundo de botão com texto branco** (3.67:1 — reprova).
- **Botão secondary:** outline `1.5px #6B8E6F`, texto `#4A6B4F`, hover com fundo `#EEF2EC`.
- **Ghost:** texto verde + seta → com micro-deslocamento.
- **Cards:** branco, borda hairline, radius 20px, shadow-lift no hover; variantes tratamento / profissional / resultado.
- **Inputs:** 48px, radius 12px, focus com anel `rgba(107,142,111,0.18)`; erro com borda + texto `#B5482F` (nunca só cor).
- **Hero:** split 55/45 — texto à esquerda, foto tonal à direita com **moldura champagne deslocada 12px** (gesto-assinatura do DS); trust row discreta sob os CTAs.
- **Nav:** clara translúcida com blur, sticky 76px→64px, wordmark em Cormorant.
- **Depoimentos:** fundo `#F5EEE0`, uma citação por vez, Cormorant itálico 26px, centrada em 680px.
- **Footer:** `#2C332E` com assinatura em Cormorant itálico e links hover champagne (9.03:1).

## 8. Voice & tone

**Tom:** sereno, preciso, elegante. Curadoria, não promoção.

**Headlines:**
- "Seu sorriso, tratado como arte."
- "Odontologia com a precisão de um ateliê."
- "A estética do seu sorriso, no seu tempo."
- "Cada detalhe do seu sorriso merece atenção de especialista."

**CTAs:** "Agende sua avaliação" · "Conheça os tratamentos" · "Converse com a nossa equipe" · "Visite o espaço"

**Evitar:** urgência artificial, promoções gritadas, superlativos vazios ("nº 1"), jargão sem tradução, tom de medo, excesso de exclamações.

## 9. Composição / page flow

1. **Hero** — split 55/45, foto tonal com moldura champagne deslocada, trust row
2. **Tratamentos** — intro centrada + grid de 3 cards em stagger
3. **Filosofia / o espaço** — fundo `#EEF2EC`, imagem esquerda + manifesto direita
4. **Equipe** — retratos tonais 4:5, nome + CRO, sem biografias longas
5. **Depoimento** — fundo `#F5EEE0`, citação única centrada
6. **Como funciona** — 3 passos com números em Cormorant 44px sage
7. **CTA final** — centrado, um único botão
8. **Footer** — 4 colunas sobre `#2C332E`

**Imagem:** fotografia tonal com luz natural puxada ao sage (overlay 8–12%); **proibido** o azul-frio clínico genérico e dentes flutuando em fundo estourado.

## 10. Acessibilidade (AA)

- Todos os pares de texto ≥ 4.5:1 (números reais no JSON e no accessibility-report)
- Sage claro restrito a texto grande; champagne nunca carrega texto
- Focus visível `2px #4A6B4F offset 3px` em tudo; skip-link; focus trap no menu mobile
- Touch targets ≥ 44px (botões 48px)
- HTML semântico, um h1, labels explícitos, erros com texto + aria-describedby
- `prefers-reduced-motion` respeitado

## 11. Benchmarking

**Ideal para:** odontologia estética · dermatologia/harmonização · spa premium · clínica de estética avançada · consultórios liberais premium.

**Fatores de conversão:** CTA única repetida ("Agende sua avaliação"); trust row discreta; fotografia do espaço real reduz ansiedade; depoimento único > grade de estrelas; "como funciona" em 3 passos reduz fricção; estética premium qualifica o lead particular.

**Core Web Vitals:** hero texto-primeiro (LCP), imagens com dimensões + AVIF/WebP, 2 famílias/5 pesos com `font-display: swap`, JS mínimo (IntersectionObserver, sem frameworks de animação).

---

*Arquivos-irmãos: JSON completo em `../../json/02-2-clinica-dental-premium.json`, preview visual em `../html/02-2-clinica-dental-premium.html`, docs em `../../docs/02-2-clinica-dental-premium/`.*
