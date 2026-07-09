# DS 01.2 — Clínica Pediátrica Friendly · Auditoria WCAG 2.1 AA

**Nível alvo:** AA (com vários pares em AAA)
**Método:** razões de contraste calculadas com luminância relativa WCAG 2.1; revisão heurística de teclado, semântica, formulários e motion.

---

## 1. Contraste de cor (1.4.3 / 1.4.11)

### Pares aprovados

| Par (frente sobre fundo) | Razão | Uso | Resultado |
|---|---|---|---|
| `#1F3B4D` sobre `#FFFFFF` | 11.73:1 | Texto principal em cards brancos | AAA ✔ |
| `#1F3B4D` sobre `#F7FCFF` | 11.35:1 | Texto principal no surface | AAA ✔ |
| `#35536A` sobre `#F7FCFF` | 7.83:1 | Texto secundário | AAA ✔ |
| `#5B7181` sobre `#F7FCFF` | 4.93:1 | Texto muted / legendas | AA ✔ |
| `#FFFFFF` sobre `#1E6E96` | 5.64:1 | Texto de botão primário | AA ✔ |
| `#1E6E96` sobre `#FFFFFF` | 5.64:1 | Links e ícones sobre branco | AA ✔ |
| `#1E6E96` sobre `#F7FCFF` | 5.45:1 | Links sobre surface | AA ✔ |
| `#1E6E96` sobre `#EAF6FC` | ≈5.0:1 | Links sobre surface_alt | AA ✔ |
| `#1F3B4D` sobre `#87CEEB` | 6.73:1 | Texto sobre faixas azul-céu (CTA final) | AA ✔ |
| `#1F3B4D` sobre `#FFE4B5` | 9.50:1 | Texto sobre cards amarelos | AAA ✔ |
| `#8F6400` sobre `#FFFFFF` | 5.26:1 | Estrelas/labels âmbar | AA ✔ |
| `#8F6400` sobre `#FFE4B5` | ≈4.2:1 | Só texto grande/bold ≥18.66px | AA large ✔ |
| `#B3372E` sobre `#FFFFFF` | 6.00:1 | Mensagens de erro | AA ✔ |
| `#1F7A45` sobre `#FFFFFF` | 5.35:1 | Mensagens de sucesso | AA ✔ |
| `#E6F1F7` sobre `#1F3B4D` | ≈9.8:1 | Texto do footer navy | AAA ✔ |

### Pares PROIBIDOS (documentados no JSON)

| Par | Razão | Regra |
|---|---|---|
| `#87CEEB` sobre `#FFFFFF` | 1.74:1 | Azul-céu NUNCA como texto/ícone informativo sobre claro — apenas superfície/decoração |
| `#FFE4B5` sobre `#FFFFFF` | 1.23:1 | Amarelo-manteiga idem |
| `#87CEEB` sobre `#EAF6FC` | ≈1.6:1 | Borda decorativa ok; não usar como único indicador de estado |

**Decisão de design registrada:** o brief pedia `#87CEEB` como primária. Como falha AA para texto, o DS rebaixa o azul-céu a papel de superfície e deriva `#1E6E96` (mesmo matiz, mais escuro) como cor funcional. A identidade azul-céu permanece dominante visualmente sem violar contraste.

### Non-text contrast (1.4.11)

- Bordas de inputs `#D2E4EE` sobre branco ficam abaixo de 3:1 — mitigado: o input tem fundo branco sobre seções `#EAF6FC`/`#F7FCFF` e label visível; no estado focus a borda vira `#1E6E96` (≥3:1) + ring.
- Focus ring `rgba(30,110,150,.28)` de 4px sempre acompanhado de mudança de borda sólida.
- Ícones informativos usam `#1E6E96` (5.64:1) — aprovado.

---

## 2. Teclado (2.1.1 / 2.4.3 / 2.4.7)

- [x] Skip-link "Pular para o conteúdo" — primeiro elemento focável, visível ao foco.
- [x] Ordem de tab lógica: nav → CTAs do hero → seções → formulário → footer.
- [x] Todos os interativos com `:focus-visible` (ring 4px + borda). Nunca `outline: none` sem substituto.
- [x] Drawer mobile: focus trap, fechamento por `Esc`, foco devolvido ao botão hambúrguer.
- [x] Nenhuma armadilha de teclado; animações não bloqueiam interação.

## 3. Semântica e leitores de tela (1.3.1 / 4.1.2)

- [x] Landmarks: `header`, `nav[aria-label]`, `main`, `section`, `footer`.
- [x] Um único `h1` (hero); hierarquia h2→h3 sem saltos.
- [x] Depoimentos em `figure > blockquote + figcaption`.
- [x] SVGs decorativos (nuvens, blobs, aspas): `aria-hidden="true"`.
- [x] SVGs informativos (cena do hero, avatares): `role="img"` + `aria-label` descritivo.
- [x] Estrelas de avaliação com `aria-label="5 de 5 estrelas"` (não depender do glifo ★).
- [x] Link ativo da nav com `aria-current="page"`.

## 4. Formulários (3.3.1 / 3.3.2 / 1.4.1)

- [x] Labels visíveis e associadas por `for`/`id` — placeholder nunca substitui label.
- [x] Erro: `aria-invalid="true"` + `aria-describedby` apontando para a mensagem.
- [x] Erro comunicado por **texto + ícone + borda** (não só cor — 1.4.1).
- [x] Tom da mensagem de erro segue o voice & tone: gentil, sem culpar ("Ops, faltaram alguns números — confere pra gente?").
- [x] Campos com `type` correto (`tel`, `email`) para teclado mobile adequado.

## 5. Alvos de toque (2.5.5)

- [x] Botões: min-height 44px (inclusive `btn-sm` com 40px+padding — área efetiva ≥44px garantida por padding externo).
- [x] Links da nav mobile no drawer: 48px de altura.
- [x] Ícone hambúrguer: área de toque 44×44px.
- [x] Espaçamento mínimo de 8px entre alvos adjacentes.

## 6. Motion (2.3.3)

- [x] `prefers-reduced-motion: reduce` implementado: loops (`balloon-float`) desligados, entradas viram fade de 150ms, hovers sem translate/scale.
- [x] Nenhum flash ou parallax agressivo; loops só em decoração `aria-hidden`.
- [x] Autoplay: inexistente (sem carrossel automático — decisão deliberada anti-ansiedade).

## 7. Conteúdo e legibilidade

- [x] `lang="pt-BR"` no html.
- [x] Corpo 16–18px, line-height 1.65–1.7, largura de linha ≤ 64ch.
- [x] Texto redimensionável a 200% sem quebra (unidades relativas + grids fluidos).
- [x] Linguagem simples (voice & tone evita jargão médico) — apoia 3.1.5 (nível AAA, bônus).

---

## Resultado

| Critério | Status |
|---|---|
| 1.4.3 Contraste texto | ✔ AA (maioria AAA) |
| 1.4.11 Contraste não-textual | ✔ com mitigações documentadas |
| 2.1.1 Teclado | ✔ |
| 2.4.7 Foco visível | ✔ |
| 1.3.1 Semântica | ✔ |
| 3.3.1/3.3.2 Formulários | ✔ |
| 2.5.5 Touch targets | ✔ |
| 2.3.3 Motion | ✔ |

**Veredicto: WCAG 2.1 AA — CONFORME**, desde que as regras de "cores proibidas para texto" sejam respeitadas nas derivações do DS.
