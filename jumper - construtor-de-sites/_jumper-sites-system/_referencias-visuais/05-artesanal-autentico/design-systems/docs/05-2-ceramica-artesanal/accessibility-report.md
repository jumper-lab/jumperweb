# Relatório de Acessibilidade — Cerâmica Artesanal (DS 05.2)

**Personalidade:** 05 — Artesanal e Autêntico
**Nível-alvo:** WCAG 2.1 AA (vários pares atingem AAA)
**Método de cálculo:** fórmula de luminância relativa WCAG 2.1 (sRGB → linear → L; contraste = (L_claro + 0.05) / (L_escuro + 0.05)). Todos os números abaixo foram calculados, não estimados.

---

## 1. Contraste de cor — texto sobre superfícies claras

Superfície base: `surface #F5F0E8`.

| Token | Uso | Contraste | Resultado |
|---|---|---|---|
| `text_primary #2B2A28` | corpo, títulos | **12.64:1** | AAA ✓ |
| `secondary #4A4A48` | texto forte, ícones, botão outline | **7.83:1** | AAA ✓ |
| `text_secondary #5C5A55` | texto de apoio | **6.07:1** | AA ✓ |
| `primary_dark #7A5236` | links, eyebrows, labels (texto normal) | **6.00:1** | AA ✓ |
| `text_muted #6B675D` | legendas, placeholders | **4.97:1** | AA ✓ |
| `error #8C3B2A` | mensagens de erro | **6.67:1** | AA ✓ |
| `success #4E6147` | mensagens de sucesso | **5.92:1** | AA ✓ |
| `warning #7A5A14` | avisos | **5.61:1** | AA ✓ |
| `primary #9B6B47` | terracota crua — SÓ texto grande (≥24px ou 18.66px bold) | **4.04:1** | AA texto grande ✓ / reprovado texto normal ✗ |

## 2. Contraste de cor — botões e fundos escuros

| Par | Uso | Contraste | Resultado |
|---|---|---|---|
| `#FFFFFF` sobre `primary #9B6B47` | texto de botão primário | **4.58:1** | AA ✓ |
| `text_on_dark #F5F0E8` sobre `smoke_deep #262523` | texto em seções moody | **13.50:1** | AAA ✓ |
| `primary_light #C89A76` sobre `smoke_deep #262523` | destaques/botão on_dark | **6.08:1** | AA ✓ |
| `#262523` sobre `primary_light #C89A76` | texto do botão on_dark | — inverso do acima | usar peso/tamanho normal ✓ |

## 3. Tokens decorativos — NÃO usar como texto

- **`primary #9B6B47` sobre `surface`** (4.04:1): reservado a **display/headings grandes**, numerais editoriais (96–160px), CTAs (com texto branco), overlays e elementos gráficos. **Nunca** em texto normal sobre fundo claro — para isso existe `primary_dark #7A5236`.
- **`primary #9B6B47` sobre `smoke_deep #262523`** (3.35:1): passa apenas como texto grande; para fundo escuro usar sempre `primary_light #C89A76` (6.08:1).
- **`primary_light #C89A76` sobre `surface` claro**: proibido (contraste insuficiente) — este token é exclusivo de fundos escuros.
- **Formas SVG orgânicas, grain (feTurbulence), gradientes de mood**: puramente decorativos → `aria-hidden="true"`.

> Regra de ouro do DS: a terracota crua é cor de *superfície e display*, não de *leitura*. Os tokens `_dark` e `_light` existem justamente para resolver leitura em cada fundo.

---

## 4. Navegação por teclado

- **Ordem de tab** segue o fluxo visual (hero → manifesto → coleção → processo → ateliê → depoimento → visita → footer).
- **Skip-link** "Ir para o conteúdo" oculto por padrão e **visível ao receber foco**, como primeiro elemento focável.
- **Menu mobile** (overlay full-screen smoke_deep): **focus-trap** enquanto aberto e fechamento por **Esc**; foco retorna ao botão hambúrguer ao fechar.
- **Carrossel de depoimentos**: sem autoplay; navegação por **setas do teclado** e botões com `aria-label` ("Depoimento anterior" / "Próximo depoimento").
- Cursor customizado (`cursor-dot`) é **overlay decorativo** com `pointer-events: none` — nunca interfere no foco nem substitui o cursor nativo funcionalmente.

## 5. Estados de foco

- Fundo claro: `outline: 2px solid #7A5236; outline-offset: 3px`.
- Fundo escuro (seções smoke): `outline: 2px solid #C89A76; outline-offset: 3px`.
- **Nunca** remover `outline` sem substituto visível equivalente. Botões e links dependem de foco visível, não só de mudança de cor.

## 6. Exemplos de alt text

Toda imagem de peça descreve **material, técnica e cor/dimensão**:

```html
<img src="vaso.avif" width="800" height="1000"
     alt="Vaso torneado em argila vermelha sem esmalte, 24 cm, superfície fosca com marcas dos dedos" />

<img src="tigela.avif" width="800" height="640"
     alt="Tigela rasa esmaltada em bege-areia, borda irregular feita à mão" />
```

Decorativas (SVG orgânico, grain, gradiente de mood):

```html
<svg aria-hidden="true" focusable="false"> ... </svg>
<div class="grain-overlay" aria-hidden="true"></div>
```

## 7. Semântica HTML

- Estrutura: `<header> <nav> <main> <section> <article> <footer>`.
- **Um `<h1>` por página**; hierarquia de headings sem saltar níveis.
- Landmarks com `aria-label` quando houver mais de um do mesmo tipo (ex.: `<nav aria-label="Principal">`).
- Depoimentos e frases do artesão em `<blockquote>` com `<cite>`.
- Numerais editoriais (01–04) são decorativos: marcar com `aria-hidden="true"` e manter o título real do capítulo como texto acessível.

## 8. Touch targets

- Mínimo **44×44px**. Botões `md`/`lg` têm `min-height` 48px/56px ✓.
- Links de navegação recebem **padding expandido** para atingir a área de toque mesmo com texto pequeno (13px uppercase).
- Setas do carrossel e o botão hambúrguer dimensionados ≥48px.

## 9. Responsividade e movimento

- Layout responsivo 320–2560px sem scroll horizontal (ver `responsive-guide.md`).
- `prefers-reduced-motion: reduce` → reveals viram fade de 200ms; **parallax e cursor customizado desativados**; cursor volta ao nativo (ver `animations.css`).
- `aspect-ratio` reservado em todas as mídias do grid magazine → CLS baixo, sem "pulos" de layout que afetam também usuários com deficiências cognitivas.

---

## 10. Resumo de conformidade

| Critério WCAG 2.1 AA | Status |
|---|---|
| 1.4.3 Contraste (mínimo) | ✓ (com regra de uso dos tokens `_dark`/`_light`) |
| 1.4.11 Contraste de não-texto | ✓ (bordas/foco #7A5236 e #4A4A48) |
| 2.1.1 / 2.1.2 Teclado / sem armadilha | ✓ (focus-trap com escape no overlay) |
| 2.4.1 Skip-link | ✓ |
| 2.4.7 Foco visível | ✓ |
| 2.5.5 Tamanho do alvo | ✓ (≥44px) |
| 1.1.1 Conteúdo não textual (alt) | ✓ |
| 1.3.1 Info e relações (semântica) | ✓ |
| 2.3.3 / 2.2.2 Animação e movimento | ✓ (prefers-reduced-motion) |

**Veredito:** o DS 05.2 atende WCAG 2.1 AA desde que respeitada a regra dos tokens de terracota — `primary #9B6B47` é decorativo/display, `primary_dark #7A5236` para texto claro, `primary_light #C89A76` para texto escuro.
