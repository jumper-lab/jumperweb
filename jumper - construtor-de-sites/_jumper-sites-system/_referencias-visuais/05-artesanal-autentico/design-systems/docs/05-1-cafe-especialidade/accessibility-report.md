# Relatório de Acessibilidade — Café de Especialidade (05.1)

**Design System:** Café de Especialidade — Origem & Torra (`05.1`)
**Nível-alvo:** WCAG 2.1 AA
**Data da auditoria:** 2026-07-06

Todos os contrastes abaixo foram **calculados** pela fórmula de luminância relativa da WCAG 2.1:

```
L = 0.2126·R + 0.7152·G + 0.0722·B   (após linearização sRGB de cada canal)
Contraste = (L_claro + 0.05) / (L_escuro + 0.05)
```

Limiares: texto normal ≥ 4.5:1 (AA) / ≥ 7:1 (AAA); texto grande (≥24px, ou ≥18.66px bold) e componentes de UI ≥ 3:1 (AA).

---

## 1. Contrastes de texto sobre superfícies claras

| Par (texto / fundo) | HEX | Razão | Uso | Veredito |
|---|---|---|---|---|
| text_primary / surface | #2B211A / #F7F2EA | **14.11:1** | corpo, títulos | AAA |
| text_secondary / surface | #5C4A3A / #F7F2EA | **7.55:1** | corpo secundário, notas | AAA |
| text_muted / surface | #7A6A5B / #F7F2EA | **4.66:1** | só legendas/metadados | AA (uso restrito) |
| secondary / surface | #2F5233 / #F7F2EA | **7.93:1** | eyebrows, links, selos | AAA |
| primary / surface | #8B5E3C / #F7F2EA | **5.01:1** | CTAs, links, numeração | AA |
| primary_deep / surface | #6E4A2F / #F7F2EA | **7.02:1** | hover, ênfase narrativa | AAA |
| error / surface | #9E3B2B / #F7F2EA | **6.05:1** | mensagens de erro | AA |
| success / surface | #2E5D36 / #F7F2EA | **6.89:1** | confirmações | AA |
| warning / surface | #756019 / #F7F2EA | **5.47:1** | alertas | AA |

### 1.1 Ponto de atenção — surface_alt (#EFE5D6)

| Par | HEX | Razão | Veredito |
|---|---|---|---|
| primary / surface_alt | #8B5E3C / #EFE5D6 | **4.48:1** | Reprovado para texto normal (0.02 abaixo de 4.5) — **só texto grande** |
| primary_deep / surface_alt | #6E4A2F / #EFE5D6 | **6.28:1** | AA — usar esta variante para texto normal |
| secondary / surface_alt | #2F5233 / #EFE5D6 | **7.09:1** | AAA |
| text_muted / surface_alt | #7A6A5B / #EFE5D6 | **4.17:1** | Reprovado — **não usar text_muted sobre surface_alt** |

**Regra:** no fundo `surface_alt` (depoimentos, capítulo 04), texto normal em marrom-café deve usar `primary_deep` (#6E4A2F). O `text_muted` fica abaixo de 4.5:1 nesse fundo — substituir por `text_secondary`.

---

## 2. Contrastes em botões e superfícies escuras

| Par | HEX | Razão | Uso | Veredito |
|---|---|---|---|---|
| branco / primary | #FFFFFF / #8B5E3C | **5.58:1** | texto de botão sólido | AA |
| branco / secondary | #FFFFFF / #2F5233 | **8.84:1** | badge de processo | AAA |
| text_on_dark / surface_dark | #F7F2EA / #221A13 | **15.38:1** | capítulos escuros, footer | AAA |
| n-300 / surface_dark | #CBBBA4 / #221A13 | **9.13:1** | crédito de origem no footer | AAA |

---

## 3. Tokens decorativos — NÃO usar como texto

Estes tokens existem para composição, textura e profundidade. Nunca aplicar como cor de texto sobre fundos onde o contraste não é garantido:

- **Numeração de capítulo** (`primary` @ opacity 0.25): puramente decorativa. Marcar `aria-hidden="true"`. Não transmite conteúdo (o título real está no `<h2>`).
- **Aspas gigantes do depoimento** (`primary` @ opacity 0.3): decorativas, `aria-hidden="true"`.
- **Grão de filme** (SVG feTurbulence) e **gradientes de imagem simulada**: decorativos, `aria-hidden="true"` / `alt=""`.
- **Régua de prova de torra** (linha 48px): decorativa.
- **Neutros claros n-100 a n-300**: uso em fundos/bordas, nunca como texto sobre creme.

---

## 4. Navegação por teclado

| Requisito | Implementação |
|---|---|
| Tudo operável por Tab / Shift+Tab | Ordem de foco segue a ordem do DOM; nenhum `tabindex` positivo |
| Skip-link | "Pular para o conteúdo" é o **primeiro elemento focável**; visível ao receber foco |
| Menu mobile | Painel full-screen com **focus trap**; fecha com **Esc**; devolve foco ao botão que o abriu |
| Depoimentos | Navegação por **botões reais** (`<button>`) e setas; sem carrossel automático (`autoplay` inexistente) |
| Links e botões | Elementos semânticos nativos (`<a>`, `<button>`) — recebem foco e ativam por Enter/Espaço |

---

## 5. Estados de foco

Nenhum `outline: none` sem substituto visível.

- **Fundos claros:** `outline: 2px solid #2F5233` (verde-musgo) + `outline-offset: 3px`.
- **Fundos escuros:** `outline: 2px solid #F7F2EA` + `outline-offset: 3px`.
- **Inputs:** foco indicado por `border-color: #8B5E3C` + `box-shadow: 0 0 0 3px rgba(139,94,60,0.15)` (o `outline: none` é compensado por border + anel).

O anel de foco verde-musgo tem contraste 7.93:1 sobre creme — largamente visível.

---

## 6. Alt text — exemplos

Imagens narrativas descrevem o **processo**, não a estética genérica:

- `alt="Mãos de produtora selecionando cerejas maduras de café"`
- `alt="Vapor subindo de grãos recém-torrados no ateliê"`
- `alt="Cafezal ao amanhecer na Mantiqueira de Minas, a 1.250m"`
- `alt="Retrato de Dona Marta, produtora parceira, no terreiro de secagem"`

Decorativos (texturas, gradientes, grão): `alt=""` + `aria-hidden="true"`.

Quando um bloco de cor simula foto (`role="img"`), fornecer `aria-label` descritivo do processo.

---

## 7. HTML semântico

- Estrutura: `<header>` / `<nav>` / `<main>` / `<section>` / `<article>` / `<footer>` — landmarks únicos.
- Cada capítulo é uma `<section>` com `aria-labelledby` apontando ao `<h2>` do capítulo.
- Numeração decorativa dos capítulos: `aria-hidden="true"`.
- Hierarquia de headings sem saltos: um único `<h1>` (título do hero), `<h2>` por capítulo/seção, `<h3>` em cards.
- Formulários: todo input com `<label>` associado (ou `sr-only`); erros com `aria-invalid="true"` + `aria-describedby`.

---

## 8. Touch targets (mínimo 44×44px)

| Elemento | Garantia |
|---|---|
| Botões md/lg | `min-height: 44px` |
| Pontos do carrossel de depoimentos | área clicável de 44×44px (marcador de 10px centralizado dentro) |
| Links de navegação mobile | padding ampliado atinge 44px |
| Ícone de hambúrguer | 44×44px |

---

## 9. Segurança de movimento

- `prefers-reduced-motion: reduce` desativa parallax (`transform: none`), congela o grain-drift (textura estática mantida), converte reveals em fade simples de ~150ms e reduz transições a ~100ms.
- Nenhuma animação pisca acima de 3Hz (sem risco de convulsão).
- Nenhum autoplay: depoimentos avançam só por ação do usuário.

Detalhes em `animations.css`.

---

## 10. Responsividade e zoom

- Layout fluido de 320px a 2560px sem scroll horizontal.
- Inputs com `font-size: 16px` evitam zoom automático no iOS.
- Texto redimensionável até 200% sem perda de conteúdo (unidades relativas na tipografia fluida — ver `responsive-guide.md`).

---

## Resumo do veredito

| Critério WCAG 2.1 AA | Status |
|---|---|
| 1.4.3 Contraste (mínimo) | Aprovado (com regra de `primary_deep` em surface_alt) |
| 1.4.11 Contraste de não-texto | Aprovado (bordas/foco ≥ 3:1) |
| 2.1.1 Teclado | Aprovado |
| 2.4.1 Ignorar blocos (skip-link) | Aprovado |
| 2.4.7 Foco visível | Aprovado |
| 1.1.1 Conteúdo não textual (alt) | Aprovado |
| 1.3.1 Info e relações (semântica) | Aprovado |
| 2.5.5 Tamanho do alvo | Aprovado (44px) |
| 2.3.3 / prefers-reduced-motion | Aprovado |

**Conclusão:** o DS 05.1 atende WCAG 2.1 AA em todos os pares de uso previstos, desde que respeitadas duas regras documentadas: (1) usar `primary_deep` para texto normal sobre `surface_alt`; (2) não usar `text_muted` sobre `surface_alt`.
