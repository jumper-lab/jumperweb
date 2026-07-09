# DS 02.3 — Hotel Boutique Luxuoso · Auditoria WCAG 2.1 AA

**Data:** 2026-07-06 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

DS **dark warm imersivo**: a superfície dominante é escura (`#2A1F14`), então a maioria das combinações parte de texto claro sobre marrom. A atenção de acessibilidade concentra-se em texto sobre imagem (véu) e no uso restrito do `text_muted`.

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)).

### Texto sobre a surface base (#2A1F14)

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#F5EDE1` (text_primary) sobre `#2A1F14` | **13.87:1** | ✅ | ✅ | AAA |
| `#CBB89F` (text_secondary) sobre `#2A1F14` | **8.36:1** | ✅ | ✅ | AAA |
| `#9A8568` (text_muted) sobre `#2A1F14` | **4.55:1** | ✅ | ✅ | AA — **restrito à surface base** |
| `#D4A574` (ouro/secondary) sobre `#2A1F14` | **7.23:1** | ✅ | ✅ | AAA — ouro é seguro como texto/link |

### Texto sobre surface_alt (#382B1C)

| Combinação | Razão | Veredito |
|---|---|---|
| `#F5EDE1` sobre `#382B1C` | **11.82:1** | ✅ AAA |
| `#D4A574` sobre `#382B1C` | **6.17:1** | ✅ AA/AAA |
| `#9A8568` (muted) sobre `#382B1C` | **3.88:1** | ❌ **REPROVADO para texto normal — usar text_secondary sobre surface_alt** |

### Botões e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#2A1F14` sobre `#D4A574` (botão primário dourado) | **7.23:1** | ✅ AAA — texto marrom em botão ouro |
| `#E08D7C` (erro) sobre `#2A1F14` | **6.34:1** | ✅ AA |
| `#A3C29B` (sucesso) sobre `#2A1F14` | **8.24:1** | ✅ AAA |
| `#E2B564` (aviso) sobre `#2A1F14` | **8.46:1** | ✅ AAA |

### Regra documentada na paleta

- `text_muted` (`#9A8568`) **só sobre a surface base** (4.55:1). Sobre `surface_alt` (#382B1C) cai para **3.88:1** — reprovado; ali usar `text_secondary` (11.82:1) ou superior.
- O ouro (`#D4A574`) **nunca como texto sobre neutros claros** (escala 50–200) — em contexto claro (ver `color-variations.md`), escurecer para `#8A6A3F`.
- **Texto sobre imagem**: sempre com véu escuro `rgba(26,18,10,0.35–0.5)` garantindo ≥4.5:1 medido no ponto mais claro da área de texto.

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: border-bottom `#E08D7C` **+ ícone de alerta (traço fino) + mensagem de texto 13px** + `aria-invalid` + `aria-describedby`.
- Links: cor **+ underline dourado** que cresce (`link-underline-grow`); estado ativo com underline 2px persistente **+** `color #D4A574`.
- Numerais editoriais ("Nº 01") repetem a ordem do DOM — ornamento, não portador único de sentido.
- Estado de foco de input: border-bottom 2px dourado **+ mudança de cor do label** (não só a borda).

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Toda interação alcançável por Tab, na ordem visual do documento.
- **Skip link** "Ir para o conteúdo" visível no focus (fundo dourado, texto marrom), como primeiro elemento focável.
- Overlay mobile fullscreen (`#241A10`): **focus trap** enquanto aberto; **Esc fecha** e devolve o foco ao hambúrguer; `aria-expanded` sincronizado; **scroll lock** no body.
- Booking bar: campos `date`/`select` nativos, operáveis por teclado; `role="region"` com `aria-label="Reserva"`.
- Depoimentos: setas ← → focáveis com `aria-label` ("Depoimento anterior/próximo"), região com `aria-live="polite"`, contador "01 / 04"; **sem autoplay**.
- Nenhuma armadilha de teclado.

## 4. Foco visível (SC 2.4.7)

- Todos os interativos: `outline: 2px solid #D4A574; outline-offset: 3px` — o ouro a **7.23:1** sobre a surface garante foco visível.
- Inputs: o indicador é o border-bottom 2px dourado + cor do label; para AA, os dois juntos.
- Proibido `outline: none` sem substituto visível equivalente.

## 5. Alvos de toque (SC 2.5.5 — melhor prática AA)

| Elemento | Tamanho | Veredito |
|---|---|---|
| Botões (md 48px / lg 56px) | ≥48px de altura | ✅ |
| Hambúrguer | área de toque 48px | ✅ |
| Setas do depoimento | 48px | ✅ |
| Links de navegação mobile | padding vertical 16px (≥44px) | ✅ |
| Campos da booking bar | 48px de área útil | ✅ |

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header / nav / main / section / article / footer` estruturais.
- **H1 único** (hero); hierarquia h1→h2→h3 sem saltos.
- Landmarks nomeados: `aria-label="Reserva"` na booking bar, `aria-label="Rodapé"` na nav do footer.
- Botões são `<button>`, links são `<a>`; card inteiro clicável via pseudo-elemento no `<a>` principal (um único link semântico).
- Depoimentos em `figure > blockquote + figcaption`.

## 7. Imagens e mídia (SC 1.1.1)

- Ambientes: `alt` descritivo do espaço e da luz em PT-BR — "Suíte com vista para o vale ao entardecer".
- Fotografia sem pessoas em close é decisão editorial (privacidade), não de acessibilidade — não afeta `alt`.
- Imagens puramente decorativas (gradientes, filetes, aspas ornamentais Fraunces): `alt=""` + `aria-hidden="true"`.
- Imagens com `width`/`height`/`aspect-ratio` explícitos (também previne CLS).

## 8. Movimento (SC 2.3.3)

- `@media (prefers-reduced-motion: reduce)` implementado em `animations.css`: reveals colapsam para **fade de 200ms sem translate/scale** e o **parallax é desligado por completo** — exatamente como o JSON pede.
- Nenhuma animação essencial para compreender o conteúdo (progressive enhancement: sem JS, tudo visível de imediato).
- Parallax limitado a 6% e nunca vertiginoso; nenhum conteúdo pisca mais de 3×/segundo (SC 2.3.1). ✅

## 9. Formulários (SC 3.3.1 / 3.3.2 / 1.3.5)

- Label uppercase 12px **sempre visível** acima do campo (nunca placeholder-only), associada por `for`/`id`.
- Fonte **16px** em inputs (nunca menor — evita zoom forçado no iOS).
- Placeholder `#9A8568` apenas como exemplo de formato, nunca instrução.
- `autocomplete` e `inputmode` corretos (`email`, `tel`) — público executivo preenche no celular.
- Mensagens de erro específicas e sóbrias, com `aria-describedby` ligado ao campo.

## 10. Responsivo e zoom (SC 1.4.4 / 1.4.10)

- Zoom de texto até 200% sem perda de conteúdo (rem/clamp na tipografia fluida).
- Reflow em 320px sem scroll horizontal (hero full-bleed adapta; booking bar colapsa para botão único "Reservar"; grid magazine vira coluna única).
- Hero usa `min-height: 100svh` (unidade small viewport) — evita corte pela barra de UI móvel; orientação livre (SC 1.3.4). ✅

---

## Checklist de conformidade

| Critério | Status |
|---|---|
| 1.1.1 Conteúdo não textual | ✅ |
| 1.3.1 Informações e relações | ✅ |
| 1.4.1 Uso de cor | ✅ |
| 1.4.3 Contraste mínimo | ✅ (com regras de uso) |
| 1.4.4 Redimensionar texto | ✅ |
| 1.4.10 Reflow | ✅ |
| 1.4.11 Contraste não textual | ✅ |
| 2.1.1 / 2.1.2 Teclado | ✅ |
| 2.4.3 Ordem de foco | ✅ |
| 2.4.7 Foco visível | ✅ |
| 2.5.5 / 2.5.8 Alvo de toque | ✅ |
| 2.3.3 Animações | ✅ |
| 3.3.1 / 3.3.2 Formulários | ✅ |

**Regras de ouro para implementadores:**
1. `#9A8568` (muted) **só sobre `#2A1F14`** (surface base). Sobre `#382B1C` (surface_alt), usar `#CBB89F` (text_secondary).
2. Ouro `#D4A574` é texto seguro sobre escuro (7.23:1), mas **nunca sobre neutros claros** — em variação clara, usar `#8A6A3F`.
3. Todo texto sobre imagem exige véu escuro `rgba(26,18,10,0.35–0.5)` garantindo ≥4.5:1.
4. Foco sempre visível: outline 2px dourado (7.23:1) ou border-bottom 2px + cor do label nos inputs.
5. Com reduced-motion: reveals viram fade 200ms e parallax desliga — nunca esconder conteúdo.
6. Um único botão primary (dourado) por viewport.
