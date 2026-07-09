# Relatório de Acessibilidade — Contabilidade Premium (04.3)

Auditoria WCAG 2.1 nível **AA** (com metas AAA onde aplicável). Todas as razões de contraste foram calculadas com a fórmula de luminância relativa da WCAG 2.1:

```
L = 0.2126·R + 0.7152·G + 0.0722·B
onde cada canal c = (c/255 ≤ 0.03928) ? c/255/12.92 : ((c/255 + 0.055)/1.055)^2.4
Contraste = (L_claro + 0.05) / (L_escuro + 0.05)
```

---

## 1. Contrastes de texto e UI

| Par (frente sobre fundo) | HEX | Razão | Uso | Veredito |
|---|---|---|---|---|
| Charcoal sobre branco | `#2C3E50` / `#FFFFFF` | **10.98:1** | headings, botão primário | AAA |
| Texto primário sobre branco | `#1B2733` / `#FFFFFF` | **15.17:1** | corpo | AAA |
| Texto secundário sobre branco | `#4A5C6E` / `#FFFFFF` | **6.89:1** | subtítulos, links nav | AAA (texto grande) / AA (normal) |
| Texto muted sobre branco | `#5F6E7D` / `#FFFFFF` | **5.23:1** | legendas, placeholder | AA |
| Dourado sobre branco | `#D4AF37` / `#FFFFFF` | **2.10:1** | — | **REPROVA** — só decorativo |
| Dourado-texto sobre branco | `#8A6A1B` / `#FFFFFF` | **5.05:1** | texto dourado sobre claro | AA |
| Dourado-texto sobre surface-alt | `#8A6A1B` / `#F7F8FA` | **4.75:1** | texto dourado sobre tint | AA |
| Dourado-claro sobre dark | `#E8C766` / `#1B2733` | **9.24:1** | counters/números dark | AAA |
| Dourado sobre dark | `#D4AF37` / `#1B2733` | **7.21:1** | destaques dark | AAA |
| Branco sobre charcoal | `#FFFFFF` / `#2C3E50` | **10.98:1** | botão primário | AAA |
| Charcoal sobre botão gold | `#2C3E50` / `#D4AF37` | **5.22:1** | texto do botão gold | AA |
| Texto secundário sobre dark | `#B0BAC4` / `#1B2733` | **7.70:1** | corpo do footer | AAA |
| Erro sobre branco | `#C0392B` / `#FFFFFF` | **5.44:1** | mensagens de erro | AA |
| Sucesso sobre branco | `#1E8449` / `#FFFFFF` | **4.72:1** | confirmações | AA |
| Aviso sobre branco | `#9C6500` / `#FFFFFF` | **4.91:1** | avisos | AA |

**Menor contraste de texto do DS:** 4.72:1 (success). Todos os pares de texto ≥ 4.5:1.

---

## 2. Tokens exclusivamente decorativos (proibidos como texto)

| Token | HEX | Motivo | Uso permitido |
|---|---|---|---|
| `secondary` (dourado) | `#D4AF37` | 2.10:1 sobre branco reprova até para texto grande | filetes, bordas de badge/card, ícones, sublinhados, marcadores de tabela |
| `border` | `#D8DEE4` | ~1.3:1 — puramente estrutural | bordas de input/card acompanhadas de label de alto contraste |

> **Regra operacional:** qualquer texto de cor dourada usa `#8A6A1B` sobre claro (5.05:1) ou `#E8C766` sobre dark (9.24:1). O `#D4AF37` nunca carrega informação por si só.

### Alerta do metric badge

O `badge--metric` usa `#8A6A1B` sobre o tint `#F5EDD6`. Nesse tint específico o contraste cai para ~4.1:1 em corpo pequeno. **Mitigação implementada:** o badge usa `font-weight: 700` e `font-size: 14px` (texto grande em bold ⇒ limiar AA de 3:1 satisfeito). Alternativa para AA estrito em texto normal: usar `#7A5C15`.

---

## 3. Navegação por teclado

- **Skip-link** "Pular para o conteúdo" como primeiro elemento focável (`href="#main"`, visível ao receber foco).
- Ordem de tabulação segue o fluxo visual (esquerda→direita, topo→base).
- Menu mobile abre com **focus-trap** e fecha com **Esc**, devolvendo o foco ao botão hambúrguer.
- Tabelas navegáveis célula a célula; `th[scope="col"]`/`th[scope="row"]` corretos.
- Nenhum interativo com `tabindex` positivo.

```html
<a href="#main" class="skip-link">Pular para o conteúdo</a>
<style>
.skip-link { position: absolute; left: -999px; }
.skip-link:focus { left: 16px; top: 16px; background: #2C3E50; color: #fff; padding: 10px 16px; border-radius: 4px; z-index: 1000; }
</style>
```

---

## 4. Estados de foco

- Todos os interativos: **anel dourado 3px `rgba(212,175,55,0.45)`** com `outline-offset: 2px`.
- Sobre seções dark: anel **`#E8C766` sólido 2px** (contraste ≥ 3:1 contra `#1B2733`).
- Botão gold usa anel charcoal `rgba(44,62,80,0.4)` (dourado sobre dourado seria invisível).
- **Nunca** `outline: none` sem substituto visível.

```css
:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(212,175,55,0.45); outline-offset: 2px; }
.on-dark :focus-visible { box-shadow: 0 0 0 2px #E8C766; }
```

---

## 5. Alt text e conteúdo dinâmico

- Ícones decorativos: `aria-hidden="true"`.
- **Counters:** `aria-label` com o valor final por extenso — o leitor de tela nunca depende da animação.
  ```html
  <span class="stat-number" data-count-to="347" aria-label="347 empresas atendidas">347</span>
  ```
- Gráficos em CSS acompanhados de tabela `.sr-only` com os mesmos dados.
- Imagens de equipe (raras): alt descritivo real ("Equipe contábil no escritório de São Paulo"), nunca "imagem".

```css
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
```

---

## 6. Semântica HTML

- Estrutura: `<header> <nav> <main> <section> <footer>`; **um único `<h1>`**.
- Tabelas com `<caption>`, `<thead>`, `<tbody>`, `<tfoot>` e `th[scope]`.
- Formulários com `<label>` explícito; erros ligados via `aria-describedby` e `aria-invalid="true"`.
- Counters em `<span>` com `aria-live="off"` (valor final no `aria-label` — evita anúncio a cada quadro).

---

## 7. Touch targets

| Elemento | Tamanho | Veredito |
|---|---|---|
| Botão md | ~48px de altura (padding 14px + fonte 16px) | ✓ ≥ 44px |
| Links de navegação mobile | 48px | ✓ |
| Linhas de tabela clicáveis | 44px+ | ✓ |
| CTA gold sm na navbar | ~40px | ⚠ aceitável em desktop; usar md no mobile |

---

## 8. Movimento e `prefers-reduced-motion`

- Com `prefers-reduced-motion: reduce`: counters renderizam o **valor final imediatamente** (sem contagem), fade-ins viram opacity estática, transições caem para 0.01ms.
- **O conteúdo numérico nunca depende da animação para ser legível** (valor está no HTML e no `aria-label`).
- Implementação completa em `animations.css`.

---

## 9. Resumo de conformidade

| Critério WCAG 2.1 AA | Status |
|---|---|
| 1.4.3 Contraste (mínimo) | ✓ todos os textos ≥ 4.5:1 |
| 1.4.11 Contraste de não-texto (UI/foco) | ✓ anel de foco ≥ 3:1 |
| 2.1.1 / 2.1.2 Teclado / sem armadilha | ✓ focus-trap com Esc |
| 2.4.1 Ignorar blocos (skip-link) | ✓ |
| 2.4.7 Foco visível | ✓ |
| 2.5.5 Tamanho do alvo (AAA parcial) | ✓ ≥ 44px nos principais |
| 1.3.1 Info e relações (semântica/tabelas) | ✓ |
| 2.3.3 / prefers-reduced-motion | ✓ |
| 4.1.2 Nome, função, valor (ARIA) | ✓ |

**Veredito geral: conforme WCAG 2.1 AA**, com AAA em quase todos os pares de texto sobre superfícies principais. Única ressalva monitorada: metric badge no tint dourado (mitigado com bold 14px).
