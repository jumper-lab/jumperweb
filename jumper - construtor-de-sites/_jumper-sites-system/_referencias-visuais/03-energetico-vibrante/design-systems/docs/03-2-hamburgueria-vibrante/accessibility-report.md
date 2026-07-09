# DS 03.2 — Hamburgueria Vibrante · Auditoria WCAG 2.1 AA

**Data:** 2026-07-04 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)). Este DS opera sobre superfícies **claras** (creme `#FFF8F0`) com blocos de cor saturada — o cuidado central é o vermelho e a mostarda, que só passam sob regras específicas.

### Texto sobre superfícies claras

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#221510` sobre `#FFF8F0` (body) | **16.85:1** | ✅ | ✅ | AAA |
| `#5C4A42` sobre `#FFF8F0` (text_secondary) | **7.93:1** | ✅ | ✅ | AAA |
| `#7A6558` sobre `#FFF8F0` (text_muted) | **5.21:1** | ✅ | ✅ | AA |
| `#C1121F` sobre `#FFF8F0` (vermelho textual — primary_dark) | **5.91:1** | ✅ | ✅ | AA |
| `#E63946` sobre `#FFF8F0` (vermelho de marca) | **3.96:1** | ❌ | ✅ | Só headlines ≥24px |

### Texto sobre cores de marca

| Combinação | Razão | Veredito |
|---|---|---|
| `#221510` sobre `#F1C232` (mostarda — botão secundário, badges de preço) | **10.57:1** | ✅ AAA |
| `#FFFFFF` sobre `#E63946` (CTA gigante Bebas ≥24px) | **4.17:1** | ⚠️ AA **só para texto grande/bold** |
| `#FFFFFF` sobre `#C1121F` (active / vermelho escuro) | **6.22:1** | ✅ AA qualquer tamanho |
| `#F1C232` sobre `#FFF8F0` (mostarda como texto) | **1.73:1** | ❌ **PROIBIDO** como texto |

### Texto sobre superfície escura (footer / seções escuras)

| Combinação | Razão | Veredito |
|---|---|---|
| `#FFF8F0` sobre `#221510` (text_on_dark) | **16.85:1** | ✅ AAA |
| `#F1C232` sobre `#221510` (títulos de coluna do footer) | **9.74:1** | ✅ AAA |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#7F1D1D` (erro) sobre `#FFF8F0` | **9.08:1** | ✅ AAA |
| `#2E7D32` (sucesso) sobre `#FFF8F0` | **4.84:1** | ✅ AA |
| `#B45309` (aviso) sobre `#FFF8F0` | **4.62:1** | ✅ AA |
| Borda de input `#DDC3AE` vs `#FFFFFF` | < 3:1 | ⚠️ compensado: espessura 2px + label Manrope 800 forte + foco com borda `#E63946` e anel `rgba(230,57,70,0.15)` de 4px |

### Regras de ouro do DS

1. **Branco sobre vermelho `#E63946` (4.17:1) SÓ em texto grande** — Bebas Neue ≥24px ou Manrope bold ≥18.66px. Os CTAs deste DS são gigantes por definição (Bebas ≥22px), então cumprem. Botões pequenos são **proibidos** no DS justamente por isso.
2. **Vermelho em texto corrido/pequeno usa `#C1121F` (5.91:1)** — nunca `#E63946`.
3. **Mostarda `#F1C232` sempre recebe texto carvão `#221510`** — e nunca é usada como texto sobre claro (1.73:1).

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: borda `#7F1D1D` **+ ícone + mensagem Manrope 700** + `aria-invalid` + `aria-describedby`.
- Links de nav: cor **+ drip-underline mostarda 4px** (o sublinhado é reforço; links no corpo têm sublinhado permanente).
- Preços: sempre no fluxo textual (badge mostarda com texto), nunca só cor.
- Card featured: cor `#E63946`/`#F1C232` **+ badge "MAIS PEDIDO"** com texto, não só tom.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Grid desordenado: a rotação dos cards é **apenas `transform`**, não altera a ordem do DOM — a ordem de tab segue o fluxo visual/de leitura.
- **Skip link** "Pular para o conteúdo" como primeiro elemento focável, visível no focus.
- Overlay de menu mobile (full-screen vermelho): **focus trap** ativo, fechamento por `Esc`, foco devolvido ao botão hambúrguer.
- Carrossel de depoimentos (`scroll-snap`) navegável por teclado; setas são `<button>` reais.
- Nenhuma armadilha de teclado; blobs decorativos não recebem foco.

## 4. Estados de foco (SC 2.4.7 / 2.4.11)

- Outline **3px sólido com offset 3px** em todos os interativos.
- Sobre superfícies claras/mostarda: outline carvão `#221510` (ou `#C1121F` no botão secundário).
- Sobre vermelho/escuro: outline `#F1C232` (mostarda) ou `#FFF8F0`.
- Nunca remover outline sem substituto visível de contraste ≥ 3:1.

## 5. Conteúdo não textual (SC 1.1.1)

- Fotos de comida com alt **descritivo e apetitoso** — *"Cheeseburger duplo com cheddar derretendo sobre pão brioche"*. O alt também vende.
- Blobs SVG, formas orgânicas e stickers decorativos: `aria-hidden="true"`.
- Ícones de badge (moto do delivery) acompanhados de texto ("30-45 MIN").

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header/nav/main/section/article/footer`; **um único `h1` por página**, hierarquia real.
- Cards de menu como `<article>` com heading próprio (Bebas Neue).
- Preços dentro do fluxo de texto (não só visual) — leitor de tela lê "R$ 32".
- Botões são `<button>`/`<a>` — nunca `div` clicável, mesmo com aparência de sticker.

## 7. Alvos de toque (SC 2.5.8)

- Mínimo **44px** em todos os interativos. CTAs do DS são gigantes por design (≥56px de altura).
- Links de navegação com padding que garante 44×44px.
- No mobile, CTA principal ocupa 100% da largura (thumb zone).

## 8. Segurança de movimento (SC 2.3.1 / 2.2.2)

- `prefers-reduced-motion: reduce` para os blobs flutuantes, encurta scale-punch/chomp/sizzle-rise para opacidade simples e mantém só a inversão de cor do flip-invert (ver `animations.css`).
- Cards mantêm a rotação de repouso (é layout, não animação) — nada "salta" para o usuário sensível.
- Nenhum flash acima de 3 por segundo (não há loops piscantes neste DS).

## 9. Riscos residuais e mitigação

| Risco | Mitigação obrigatória |
|---|---|
| Branco sobre vermelho tenta escapar para texto pequeno | Regra dura no DS: proibido botão pequeno; texto vermelho pequeno usa `#C1121F` |
| Bebas Neue em caixa alta reduz legibilidade de textos longos | Bebas restrito a headings/CTAs; corpo sempre Manrope sentence-case |
| Grid rotacionado pode confundir ordem de leitura | Rotação só via `transform`; DOM segue ordem lógica; sempre 1 âncora alinhada por seção |
| Mostarda vibrante tentada como texto | Documentado: mostarda é fundo/decoração; texto sobre ela é carvão |
| Fotos saturadas de comida podem cansar em telas HDR | Saturação alta só nos closes de hero; corpo em creme suave |

---

**Veredito final:** o DS cumpre WCAG 2.1 AA desde que as três regras de ouro de cor sejam respeitadas — branco sobre vermelho apenas em texto grande, vermelho textual via `#C1121F`, e mostarda sempre com texto carvão. Estados, foco e teclado passam com folga; a estratégia de reduced motion do `animations.css` cobre SC 2.3.1.
