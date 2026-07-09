# DS 01.2 — Clínica Pediátrica Friendly

> **Categoria:** 01 — Acolhedor e Familiar
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Schema:** 2.0.0

---

## 1. Essência

Um DS que faz o trabalho emocional de uma boa recepção pediátrica: **reduz a ansiedade dos pais antes de qualquer argumento de venda**. Azul-céu suave como identidade dominante, amarelo-manteiga como calor, ilustração hand-drawn (simulada em SVG inline) como linguagem visual, e uma composição que apresenta rostos humanos e provas de confiança cedo na página.

A sensação-alvo é dupla e simultânea: **segurança** (competência médica, CRM visível, informação clara) + **empatia** (tom gentil, ilustração lúdica, micro-bounces suaves). O site deve parecer um lugar onde uma criança entra sorrindo — e onde um adulto confia.

### Inspiração

Referência estilística composta de clínicas/hospitais pediátricos premium internacionais — em especial o equilíbrio "autoridade + leveza" de **Boston Children's Hospital** e a navegação descomplicada de **Lurie Children's (Chicago)**. Nenhum prêmio de web design específico foi confirmado em pesquisa, portanto citamos apenas como referência estilística. Nada de layout copiado: capturamos o mood de "hospital que sorri".

### Diferença radical vs. DS 01.1 (Padaria Artesanal Warm)

| | DS 01.1 | DS 01.2 (este) |
|---|---|---|
| Cor | Terracota / tons de forno | Azul-céu #87CEEB + amarelo-manteiga #FFE4B5 |
| Tipografia | Lora (serif) | Nunito + Karla (rounded sans) |
| Imagem | Fotografia quente | Ilustração SVG hand-drawn |
| Mood | Padaria, artesanal | Céu, lúdico, clínico-acolhedor |
| Composição | — | Hero split com cena SVG, trust strip, equipe com avatares, depoimentos em balão de fala |

---

## 2. Cores

### Decisão crítica de contraste (documentada)

O brief pede `#87CEEB` como primária, mas ela rende **1.74:1 sobre branco** — reprovada para texto/CTA (WCAG exige ≥ 4.5:1). Solução:

- `#87CEEB` vira **cor de superfície e decoração**: faixas de céu, blobs, bordas de avatar, fundos de badge.
- Derivamos `#1E6E96` (**primary_deep**, mesmo matiz ~197°, luminosidade reduzida) como cor **funcional**: CTAs, links, ícones. Contraste **5.64:1** sobre branco.
- Idem para o amarelo: `#FFE4B5` (1.23:1) é só superfície; `#8F6400` (**secondary_deep**, 5.26:1) assume texto âmbar pequeno.

### Paleta

| Token | HEX | Uso |
|---|---|---|
| primary | `#87CEEB` | Superfícies de céu, decoração, bordas ilustradas |
| primary_deep | `#1E6E96` | CTAs, links, ícones, headings de destaque |
| primary_deep_hover | `#17587A` | Hover de CTA |
| secondary | `#FFE4B5` | Cards de depoimento, marca-texto, sol das ilustrações |
| secondary_deep | `#8F6400` | Texto âmbar (labels, estrelas), warning |
| surface | `#F7FCFF` | Fundo base |
| surface_alt | `#EAF6FC` | Faixas alternadas |
| text_primary | `#1F3B4D` | Texto principal (navy — o "céu à noite") |
| text_secondary | `#35536A` | Subtítulos, parágrafos secundários |
| text_muted | `#5B7181` | Legendas, metadados |
| border | `#D2E4EE` | Bordas e divisores |
| error / success / warning | `#B3372E` / `#1F7A45` / `#8F6400` | Estados |

**Escala neutra (azulada):** 50 `#F4F9FC` · 100 `#E6F1F7` · 200 `#D2E4EE` · 300 `#B4CFDD` · 400 `#8FB2C4` · 500 `#6E93A6` · 600 `#557489` · 700 `#3F5A6C` · 800 `#2C4252` · 900 `#1F3B4D`

### Contrastes verificados (WCAG 2.1)

| Par | Razão | Resultado |
|---|---|---|
| #1F3B4D sobre #F7FCFF | 11.35:1 | AAA ✔ |
| #35536A sobre #F7FCFF | 7.83:1 | AAA ✔ |
| #5B7181 sobre #F7FCFF | 4.93:1 | AA ✔ |
| #FFFFFF sobre #1E6E96 | 5.64:1 | AA ✔ |
| #1E6E96 sobre #F7FCFF | 5.45:1 | AA ✔ |
| #1F3B4D sobre #87CEEB | 6.73:1 | AA ✔ |
| #1F3B4D sobre #FFE4B5 | 9.50:1 | AAA ✔ |
| #8F6400 sobre #FFFFFF | 5.26:1 | AA ✔ |
| #87CEEB sobre #FFFFFF | 1.74:1 | ✘ proibido para texto |
| #FFE4B5 sobre #FFFFFF | 1.23:1 | ✘ proibido para texto |

---

## 3. Tipografia

- **Headings: Nunito** (Google Fonts) — 700/800. Terminais totalmente arredondados: a fonte "de pelúcia" das sans, amigável sem ser infantil.
- **Body: Karla** (Google Fonts) — 400/500/700. Humanista, larga, calorosa e muito legível no mobile.
- Fallbacks: `'Nunito', 'Trebuchet MS', 'Segoe UI', system-ui, sans-serif` / `'Karla', 'Helvetica Neue', Arial, sans-serif`.

| Elemento | Mobile | Desktop |
|---|---|---|
| H1 | 34px / 1.15 / 800 | 56px / 1.1 / 800 |
| H2 | 26px / 1.2 / 800 | 40px / 1.15 / 800 |
| H3 | 20px / 1.3 / 700 | 26px / 1.25 / 700 |
| Body | 16px / 1.65 | 18px / 1.7 |
| Small | 14px / 1.5 | 15px / 1.5 |
| Eyebrow | 13px caps ls .12em | 14px caps ls .14em |

---

## 4. Espaçamento, bordas e sombras

- **Base 8px**; escala xs 4 · sm 8 · md 16 · lg 24 · xl 32 · xxl 48 · xxxl 72 · xxxxl 104.
- **Seções:** 56px mobile / 80px tablet / 104px desktop. Whitespace generoso = mensagem de calma.
- **Container:** max 1160px; padding 20/32/48px.
- **Radius:** botões `999px` (pílula), cards `24px`, inputs `16px`, imagens `32px` com canto assimétrico opcional (`32px 32px 32px 8px`) para o toque hand-drawn.
- **Strokes:** 1.5px `#D2E4EE` (padrão) e 2.5px `#87CEEB` ("borda desenhada").
- **Sombras azuladas** (base `rgba(31,59,77,…)`), nunca preto puro: sm `0 2px 6px .06` · md `0 6px 18px .08` · lg `0 14px 34px .11` · focus ring `0 0 0 4px rgba(30,110,150,.28)`.

---

## 5. Motion

Filosofia: **uma criança calma, não uma criança com açúcar.**

- Durações: 300 / 400 / 500ms; loops ambientais de 6s só em decoração.
- Easing assinatura: `cubic-bezier(0.34, 1.56, 0.64, 1)` — overshoot gentil ("quique de bola macia").
- Animações: `fade-rise` (entrada de seção), `gentle-bounce-in` (cards/badges), `balloon-float` (nuvens do hero, loop 6s), `wiggle-hover` (ícones, uma vez só), `button-pop` (hover de CTA), `avatar-hello` (hover de equipe).
- `prefers-reduced-motion`: loops desligados, entradas viram fade de 150ms.

---

## 6. Componentes

- **Botão primário:** pílula `#1E6E96`, texto branco Nunito 700, sombra azulada; hover `#17587A` + pop; disabled `#B4CFDD`.
- **Botão secundário:** pílula outline 2.5px `#87CEEB`, texto `#1E6E96`; hover preenche `#EAF6FC`.
- **Ghost/link:** underline **wavy** `#87CEEB` — assinatura hand-drawn do DS.
- **Service card:** branco, radius 24, ícone em círculo 64px alternando fundo azul/amarelo, wiggle no hover.
- **Team card:** avatar circular 96px com borda 3px azul-céu, nome + especialidade + **CRM visível**; hover "diz oi".
- **Testimonial card:** fundo `#FFF4DE`/`#FFE4B5`, radius assimétrico `24 24 24 8` (balão de fala), aspas gigantes, autor com vínculo ("mãe do Theo, 4 anos"), estrelas `#8F6400`.
- **Inputs:** radius 16, label sempre visível acima, focus azul, erro com ícone + `aria-describedby`.
- **Nav:** topbar clara 72px, links Karla 500 com hover wavy, CTA-pílula à direita; drawer mobile com focus trap.
- **Badges de confiança:** pílulas brancas com ícone azul ("Pediatras com RQE", "Sala de espera lúdica"); variante destaque amarela.
- **Footer:** navy `#1F3B4D` ("céu à noite"), onda SVG no topo, 4 colunas, CNPJ + responsável técnico + CRM na linha legal.

---

## 7. Composição (page_flow próprio)

1. **Nav** clara com CTA-pílula
2. **Hero split 55/45** — texto (H1 com marca-texto amarelo + 2 CTAs + mini-badges) | cena SVG ilustrada (criança + pediatra, nuvens flutuando); wave divider na base
3. **Trust strip** — 4 badges sobre `#EAF6FC`, *antes* de qualquer venda
4. **Serviços** — grid 3×2 de cards ilustrados
5. **Equipe** — 4 avatares grandes e humanos (competência antes da prova social)
6. **Depoimentos de pais** — 3 balões de fala, o central destacado em amarelo
7. **Como funciona** — 3 passos com linha tracejada hand-drawn
8. **CTA final** — faixa `#87CEEB` com texto navy e botão branco
9. **Footer navy** com onda e dados médicos legais

Tratamento de imagem: ilustração SVG hand-drawn como linguagem principal; fotos reais (se houver) em molduras arredondadas assimétricas — nunca banco de imagem genérico.

---

## 8. Voice & Tone

Gentil, confiante, empático. Fala com o adulto responsável; acolhe sem infantilizar.

**Headlines:**
- "Cuidamos do seu pequeno como se fosse nosso"
- "Consulta sem choro? Aqui a gente tenta todo dia — e quase sempre consegue"
- "Pediatria que acolhe a criança e tranquiliza a família"
- "Do primeiro resfriado à primeira bicicleta: estamos junto em cada fase"

**CTAs:** "Agende uma consulta sem estresse" · "Conheça nossa equipe" · "Falar com a recepção pelo WhatsApp" · "Ver convênios aceitos"

**Evitar:** jargão médico sem tradução; alarmismo; infantilização do adulto; promessas clínicas absolutas (ética médica); humor que minimize a preocupação dos pais.

---

## 9. Acessibilidade (AA)

- Contrastes calculados e aprovados (tabela na seção 2); azul-céu e amarelo proibidos como texto.
- Skip-link, ordem de tab lógica, drawer com focus trap e Esc.
- Focus ring 4px sempre visível; touch targets ≥ 44px.
- SVGs decorativos `aria-hidden`; informativos com alt; um h1 único; blockquote para depoimentos.
- `prefers-reduced-motion` obrigatório.

---

## 10. Benchmarking

**Ideal para:** pediatria, odontopediatria, escola infantil, berçário, fonoaudiologia infantil, psicologia infantil, vacinação.

**Fatores de conversão:** CTA persistente na nav; trust strip pós-hero (ansiedade respondida antes do pitch); equipe com rosto e CRM antes dos depoimentos; depoimentos com vínculo específico; WhatsApp de baixa fricção; "como funciona" em 3 passos.

**Core Web Vitals:** hero 100% SVG inline (LCP < 2.0s), fonts com preconnect + `font-display: swap`, animações só transform/opacity (CLS < 0.1), zero JS obrigatório (INP saudável).
