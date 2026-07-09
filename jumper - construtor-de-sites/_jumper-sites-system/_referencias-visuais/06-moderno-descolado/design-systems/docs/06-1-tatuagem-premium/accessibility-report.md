# Auditoria de Acessibilidade — DS 06.1 Estúdio de Tatuagem Premium

WCAG 2.1 nível **AA** (várias combinações atingem AAA). Razões calculadas pela fórmula de luminância relativa WCAG 2.1:

```
L = 0.2126·R + 0.7152·G + 0.0722·B   (canais linearizados)
razão = (L_claro + 0.05) / (L_escuro + 0.05)
```

Sistema **dark-first**: fundo `#0A0A0A`, texto `#FFFFFF`. A folga de contraste é enorme — a única armadilha é o dourado sobre claro.

---

## 1. Contraste de cor

### Texto sobre superfícies escuras

| Combinação | Uso | Razão | Nível |
|---|---|---|---|
| `#FFFFFF` sobre `#0A0A0A` | Texto principal | **19.80:1** | AAA |
| `#B3B3B3` sobre `#0A0A0A` | Texto secundário | **9.44:1** | AAA |
| `#8C8C8C` sobre `#0A0A0A` | Texto muted (legendas/meta) | **5.89:1** | AA (texto normal) |
| `#FFE600` sobre `#0A0A0A` | Acento dourado / overline | **15.62:1** | AAA |
| `#FFFFFF` sobre `#141414` | Texto sobre surface_alt | **18.43:1** | AAA |
| `#FFE600` sobre `#141414` | Acento sobre surface_alt | **14.54:1** | AAA |
| `#FF6B6B` sobre `#0A0A0A` | Erro | **7.13:1** | AA / AAA grande |
| `#3EE07F` sobre `#0A0A0A` | Sucesso | **11.48:1** | AAA |

### Texto sobre o CTA dourado

| Combinação | Uso | Razão | Nível |
|---|---|---|---|
| `#0A0A0A` sobre `#FFE600` | Texto do botão primário | **15.62:1** | AAA |

### ⚠ Combinações PROIBIDAS / apenas decorativas

| Combinação | Razão | Veredito |
|---|---|---|
| `#FFE600` sobre `#FFFFFF` | **1.27:1** | ❌ REPROVADO — dourado jamais como texto/ícone informativo sobre claro |

**Regra dura:** o dourado só vive no escuro. Em raros blocos brancos invertidos (ex.: cartão editorial), o acento informativo vira `#0A0A0A` ou o dourado escurecido `#8A7A00` (**5.02:1** sobre branco — AA texto normal). O `#FFE600` puro só pode aparecer sobre claro como **elemento decorativo não-textual** (blocos, formas gráficas), nunca carregando informação.

### Tokens marcados como decorativos

- **`#FFE600` (dourado)** — informativo apenas sobre fundos escuros. Sobre claro: decorativo.
- **`warning #FFC94D`** — validar caso a caso; sobre `#0A0A0A` rende ~13:1 (AAA), mas nunca sobre branco.
- **Molduras hairline `#2B2B2B`** — puramente decorativas (não carregam texto); não precisam atingir 3:1 de UI pois a informação está no conteúdo emoldurado.

---

## 2. Navegação por teclado

- **Skip-link** "Pular para o conteúdo" visível ao receber foco (position:absolute fora da tela → volta em `:focus`).
- Ordem de **Tab lógica**, seguindo o DOM (header → main → footer).
- **Menu mobile** com focus-trap e fechamento por **Esc**; foco retorna ao botão hambúrguer ao fechar.
- **Galeria** navegável por Tab; cada peça é `<article>` com legenda lida em ordem.
- Setas de navegação do depoimento focáveis e operáveis por Enter/Espaço.

```js
// focus trap + Esc no menu mobile
menu.addEventListener('keydown', function(e){
  if(e.key==='Escape'){closeMenu(); hamburger.focus();}
});
```

---

## 3. Estados de foco

- `outline: 2px solid #FFE600; outline-offset: 3px` em todos os interativos, via `:focus-visible` (não polui o clique de mouse).
- Em **inputs** o foco dobra a borda inferior para 2px dourada; para teclado, manter também `outline` via `:focus-visible` para não depender só da cor.
- **Nunca** `outline:none` sem substituto visível.

---

## 4. Alt text (portfolio É conteúdo)

Toda peça da galeria exige alt descritivo real — **nunca** alt vazio, porque as peças são o conteúdo:

```html
<img src="peca-04.avif" alt="Tatuagem blackwork de serpente enrolada no antebraço, traço fino e sombreado denso">
<img src="retrato.avif" alt="Retrato B&W da tatuadora Vera Lux em meio-corpo">
```

Imagens puramente decorativas (peça sangrada do hero usada só como textura) recebem `alt=""` + `aria-hidden="true"`.

---

## 5. HTML semântico

- `header` / `nav` / `main` / `section` / `article` / `figure`+`figcaption` para as peças / `footer`.
- Hierarquia de headings estrita (h1 único no hero → h2 por seção → h3 em cards). Sem saltos.
- Depoimentos em `<blockquote>` com `<cite>`.
- Formulário com `<label for>` associado a cada campo; erros ligados por `aria-describedby`.

---

## 6. Touch targets

- Botões: altura 40 / 52 / 60px → todos ≥ 44px (o `sm` de 40px deve ganhar padding vertical para atingir 44px de área tocável em contexto touch).
- Links de menu mobile: 56px de altura.
- Inputs: 56px de altura.

---

## 7. Movimento seguro

- `prefers-reduced-motion: reduce` implementado em **100%** das animações (ver `animations.css`). Glitch e cortina são os primeiros a cair; scale e flash desativados.
- Nenhuma animação pisca mais de 3×/segundo. O `flash-blink` é disparo **único** de 120ms — bem abaixo do limiar de fotossensibilidade (WCAG 2.3.1).
- `scroll-behavior` volta a `auto` em reduced-motion.

---

## 8. Responsividade e zoom

- Layout fluido de 320px a 2560px sem scroll horizontal.
- Tipografia com `clamp()` — sem quebra em zoom de 200%.
- `container_max_width: 1440px` com padding responsivo (20/40/64px).

---

## Resumo de conformidade

| Critério WCAG 2.1 AA | Status |
|---|---|
| 1.4.3 Contraste mínimo | ✅ (dourado sobre claro documentado como proibido/decorativo) |
| 1.4.11 Contraste não-textual | ✅ foco dourado 15.62:1; bordas decorativas isentas |
| 2.1.1 Teclado | ✅ |
| 2.4.1 Skip-link | ✅ |
| 2.4.7 Foco visível | ✅ `:focus-visible` dourado |
| 2.3.1 Três flashes | ✅ flash único 120ms |
| 2.3.3 Movimento por interação | ✅ prefers-reduced-motion |
| 1.3.1 Info e relações (semântica) | ✅ |
| 1.1.1 Conteúdo não-textual (alt) | ✅ alt descritivo obrigatório |
| 2.5.5 Tamanho do alvo | ✅ ≥ 44px |
