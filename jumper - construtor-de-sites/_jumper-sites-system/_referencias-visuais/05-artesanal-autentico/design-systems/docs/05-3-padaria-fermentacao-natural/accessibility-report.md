# Relatório de Acessibilidade — 05.3 Padaria Fermentação Natural

**Nível-alvo:** WCAG 2.1 AA
**Método de contraste:** fórmula de luminância relativa WCAG 2.1
`L = 0.2126·R + 0.7152·G + 0.0722·B` (canais linearizados) → razão `(L_claro + 0.05) / (L_escuro + 0.05)`.

Todas as razões abaixo foram calculadas com essa fórmula e batem com `colors.contrast_verification` do JSON.

---

## 1. A decisão central de acessibilidade

O brief pede **dourado-grão `#C19A6B`** como cor de marca. Sobre o creme `#F7F1E5` esse dourado rende apenas **2.30:1** — reprovado para qualquer texto (mínimo AA é 4.5:1 para texto normal e 3:1 para texto grande).

Solução aplicada pelo DS, preservando a alma visual:

| Papel | Cor | Justificativa |
|---|---|---|
| Alma visual (accents, filetes, superfícies, display sobre escuro) | `#C19A6B` | Mantido como identidade — nunca como texto sobre claro |
| Função textual e de CTA sobre claro | `#7A5C2E` (`primary_deep`) | Mesmo matiz, luminância reduzida → 5.49:1 AA |

**Regra dura:** `#C19A6B` é decorativo sobre fundos claros. Só vira texto quando o fundo é escuro (`#2A2117`), onde rende 6.10:1.

---

## 2. Tabela de contrastes (razões reais calculadas)

### Sobre creme `#F7F1E5` (surface)

| Par | Razão | Texto normal (4.5) | Texto grande (3.0) | Uso |
|---|---|---|---|---|
| `#33291C` text_primary | **12.66:1** | AAA ✓ | AAA ✓ | corpo, títulos |
| `#5C4E3A` text_secondary | **7.16:1** | AAA ✓ | AAA ✓ | leads, labels |
| `#7C6B54` text_muted | **4.57:1** | AA ✓ | AA ✓ | metadados, placeholder |
| `#7A5C2E` primary_deep | **5.49:1** | AA ✓ | AA ✓ | links, CTA texto |
| `#6B573F` secondary_deep | **6.10:1** | AA ✓ | AA ✓ | notas de fermentação |
| `#8B7355` secondary | **3.99:1** | ✗ reprovado | AA ✓ | **só** texto grande (≥24px ou ≥18.66px bold) |
| `#C19A6B` primary | **2.30:1** | ✗ | ✗ | **DECORATIVO — nunca texto** |
| `#B0413E` error | **5.08:1** | AA ✓ | AA ✓ | mensagens de erro |
| `#3F6B3F` success | **5.51:1** | AA ✓ | AA ✓ | confirmação |
| `#8A5A1B` warning | **5.25:1** | AA ✓ | AA ✓ | avisos |

### Sobre creme-alternativo `#EFE6D2` (surface_alt)

| Par | Razão | Resultado |
|---|---|---|
| `#33291C` text_primary | **11.47:1** | AAA ✓ |
| `#7A5C2E` primary_deep | **4.98:1** | AA ✓ |

### Sobre marrom-café `#2A2117` (surface_dark)

| Par | Razão | Resultado | Uso |
|---|---|---|---|
| `#F7F1E5` creme | **12.66:1** | AAA ✓ | texto de seções escuras, footer |
| `#C19A6B` dourado | **6.10:1** | AA ✓ | display numbers, títulos de coluna, botão ghost |

### Botões sólidos

| Par | Razão | Resultado |
|---|---|---|
| `#FBF5E9` creme sobre `#7A5C2E` (primary) | **5.69:1** | AA ✓ |

---

## 3. Tokens exclusivamente decorativos (nunca usar como texto)

- **`#C19A6B` sobre claro** — 2.30:1. Uso permitido: filetes 1px, marcadores editoriais, ícones grandes decorativos, faixas/tags sobre fundo escuro, display ≥ 32px bold **somente** sobre `#2A2117`.
- **`#8B7355` sobre claro** — 3.99:1. Só texto grande. Para texto normal usar `#6B573F`.
- **Gradientes moody** dos blocos fotográficos — sempre `aria-hidden="true"` ou `role="img"` com `aria-label` descritivo; nunca carregam texto sem verificação de contraste local.

---

## 4. Navegação por teclado

- Toda navegação operável por teclado (Tab / Shift+Tab / Enter / Espaço).
- **Skip-link** "Pular para o conteúdo" visível ao receber foco:
  ```css
  .skip-link { position:absolute; left:-9999px; }
  .skip-link:focus { left:16px; top:16px; z-index:100;
    background:#7A5C2E; color:#FBF5E9; padding:12px 20px; border-radius:2px; }
  ```
- Painel mobile full-screen `#2A2117` com **focus-trap** e fechamento por **Esc**.
- Timeline de processo navegável por Tab em ordem lógica (marcada como `<ol>`).

---

## 5. Estados de foco

- Sobre claro: `outline: 2px solid #7A5C2E; outline-offset: 3px;`
- Sobre escuro: `outline: 2px solid #C19A6B; outline-offset: 3px;`
- Nunca remover outline sem substituto visível equivalente.
- Inputs no foco adicionam `box-shadow: 0 0 0 3px rgba(122,92,46,0.18)` além da borda.

---

## 6. Alt text (exemplos)

| Contexto | Alt sugerido |
|---|---|
| Foto do hero | `Pão rústico sobre bancada de madeira, luz lateral de janela` |
| Etapa da timeline | `Massa em fermentação em cesto de vime, pela manhã` |
| Gradiente decorativo | `aria-hidden="true"` (sem alt — puramente decorativo) |
| Product card sem foto real | bloco com `aria-hidden` + nome do pão no texto |

Regra: fotografias moody descritas incluindo a atmosfera quando ela é relevante ao conteúdo.

---

## 7. Semântica HTML

- Landmarks: `<header> <nav> <main> <footer>`.
- Uma única `<h1>` por página (headline do hero).
- Timeline de fermentação como `<ol>` (sequência ordenada).
- Preços com `aria-label` completo: `<span aria-label="32 reais">R$ 32</span>`.
- Formulário: `<label>` explícita para cada campo; erros ligados por `aria-describedby`.
- Depoimento como `<figure>` + `<blockquote>` + `<figcaption>`.

---

## 8. Alvos de toque

- Mínimo **44×44px** garantido.
- Botões: `min-height` 48px (md) / 56px (lg).
- Links de nav com `padding: 8px 0` para estender a área vertical de toque.

---

## 9. Formulários acessíveis

- Erros anunciados via `aria-live="polite"`.
- Validação **nunca só por cor** — sempre ícone + texto.
- `aria-invalid="true"` no campo com erro + `aria-describedby` apontando à mensagem.
- Label sempre visível acima do campo; placeholder é apoio, não substituto.

---

## 10. Movimento

- `prefers-reduced-motion: reduce` reduz todas as animações a opacidade de 150ms ou estado final.
- **Desativados** em reduced-motion: `amanhecer`, `stagger-processo`, selo giratório do hero.
- Nenhuma animação essencial ao entendimento do conteúdo — todas são realce.

---

## 11. Responsividade

- Sem scroll horizontal de 320px a 2560px.
- Tipografia fluida com `clamp()` (ver `fluid_recipe` do JSON).
- Layout reflui: hero split 5/7 → empilhado; footer 4 colunas → 1 coluna.
- Zoom até 200% sem perda de conteúdo ou função.

---

## Veredito

**Conforme WCAG 2.1 AA**, com vários pares atingindo AAA. O único risco de acessibilidade do brief (dourado sobre creme, 2.30:1) foi resolvido pela delegação da função textual a `#7A5C2E`, mantendo o dourado como identidade puramente decorativa. Nenhuma informação depende exclusivamente de cor.
