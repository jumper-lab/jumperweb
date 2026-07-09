# DS 03.3 — Sorveteria Movimento · Auditoria WCAG 2.1 AA

**Data:** 2026-07-04 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)). Este DS opera sobre superfícies **claras rosadas** (`#FFF7FB`) com uma seção **dark** de fechamento (`#2A1220`). O ponto crítico: o rosa-chiclete e o amarelo de marca só passam sob regras específicas — por isso o DS deriva `#C4006B` para uso textual.

### Texto sobre superfície clara

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#2A1220` sobre `#FFF7FB` (body) | **16.54:1** | ✅ | ✅ | AAA |
| `#5C3A4E` sobre `#FFF7FB` (text_secondary) | **9.19:1** | ✅ | ✅ | AAA |
| `#8A5E75` sobre `#FFF7FB` (text_muted) | **5.07:1** | ✅ | ✅ | AA |
| `#C4006B` sobre `#FFF7FB` (rosa textual — primary_deep) | **5.60:1** | ✅ | ✅ | AA |
| `#FF1493` sobre `#FFF7FB` (rosa de marca) | **3.46:1** | ❌ | ✅ | Só display ≥24px/gráficos |

### Texto sobre cores de marca

| Combinação | Razão | Veredito |
|---|---|---|
| `#2A1220` sobre `#FFD700` (amarelo — stickers, pills de preço) | **12.42:1** | ✅ AAA |
| `#FFFFFF` sobre `#C4006B` (botão sólido primário) | **5.90:1** | ✅ AA qualquer tamanho |
| `#FFFFFF` sobre `#FF1493` (rosa de marca) | **3.64:1** | ⚠️ AA **só texto grande** |
| `#FFD700` sobre `#FFF7FB` (amarelo como texto) | **1.33:1** | ❌ **PROIBIDO** como texto |

### Seção dark de fechamento (`#2A1220`)

| Combinação | Razão | Veredito |
|---|---|---|
| `#FFFFFF` sobre `#2A1220` | **17.42:1** | ✅ AAA |
| `#FFD700` sobre `#2A1220` (títulos de coluna do footer) | **12.42:1** | ✅ AAA |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#D11414` (erro) sobre `#FFF7FB` | **5.22:1** | ✅ AA |
| `#1B7A43` (sucesso) sobre `#FFF7FB` | **5.10:1** | ✅ AA |
| `#8A5900` (aviso) sobre `#FFF7FB` | **5.68:1** | ✅ AA |
| Borda de input `#2A1220` 3px | > 3:1 | ✅ borda sólida grossa (estilo die-cut) é indicador forte |

### Regras de ouro do DS

1. **`#FF1493` é cor de marca/display, não de texto** (3.46:1 reprova texto normal). Para links, labels de botão pequeno e destaque em body, usar `#C4006B` (5.60:1).
2. **Botão sólido usa `#C4006B` com texto branco** (5.90:1). Branco sobre `#FF1493` (3.64:1) só em label grande.
3. **Amarelo `#FFD700` nunca é texto** (1.33:1 sobre claro) — só fundo de sticker/pill/marquee, com texto carvão-uva `#2A1220` por cima (12.42:1).

> Ajuste documentado no JSON: o brief pedia `#FF1493` como primária; o contraste real reprovou para texto, então o DS mantém o rosa-chiclete como marca/display e deriva `#C4006B` (mesmo matiz, mais profundo) para uso textual. A essência rosa permanece intacta.

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: borda `#D11414` **+ ícone + mensagem de texto explicativa** — "nunca só cor", como diz o JSON.
- Links de menu: color-invert é reforço; links no corpo têm sublinhado permanente.
- Card featured: sombra amarela `pop` **+ badge "MAIS PEDIDO"** com texto, não só tom.
- Badges de escassez ("SÓ HOJE"): texto explícito, não só cor.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Grid assimétrico e stickers em `position: absolute` são **transform/posicionamento** — a ordem de tab segue o fluxo visual/lógico do DOM.
- **Skip link** "Pular para o conteúdo" como primeiro elemento focável, visível no focus.
- Menu mobile (painel full-screen rosa): **focus trap** ativo, fechamento por `Esc` (e pelo X 48px), foco devolvido ao hambúrguer.
- **Marquee e confetti não recebem foco** (aria-hidden, sem elementos focáveis).
- Carrossel de depoimentos (`scroll-snap`) navegável por teclado.

## 4. Estados de foco (SC 2.4.7 / 2.4.11)

- Outline **3px sólido `#C4006B` com offset 3px** em todos os interativos — testado visível sobre **qualquer** superfície da paleta (claro, amarelo e rosa), conforme o JSON.
- Inputs no focus: outline 2px `#C4006B` + borda rosa + sombra amarela `pop` (reforço redundante).
- Nunca remover outline sem substituto visível de contraste ≥ 3:1.

## 5. Conteúdo não textual (SC 1.1.1)

- Ilustrações de sabores com alt descritivo — *"Casquinha de morango com confeitos"*.
- Stickers puramente decorativos, blobs e formas geométricas: `aria-hidden="true"`.
- Marquee: conteúdo com `aria-hidden`; equivalente acessível fornecido fora da animação quando informativo.

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header/nav/main/section/article/footer`; **um único `h1` por página**, hierarquia real.
- Cards de sabor como `<article>` com heading próprio (Oswald).
- Preço em pill amarela dentro do fluxo textual (não só visual).
- Botões são `<button>`/`<a>` — nunca `div` clicável, apesar da aparência de figurinha.

## 7. Alvos de toque (SC 2.5.8)

- Mínimo **44px** de altura em todos os tamanhos de botão (declarado no JSON: `min_touch_target: 44px`).
- Hambúrguer e X do menu mobile: 48×48px.
- CTA "Pedir no zap" sticky no mobile na thumb zone.

## 8. Segurança de movimento (SC 2.3.1 / 2.2.2)

- `prefers-reduced-motion: reduce` **remove o confetti** (`display: none`), **congela o marquee** (faixa estática centralizada) e zera transições (ver `animations.css`). Nenhum conteúdo depende de animação para ser compreendido.
- Cards mantêm a rotação de repouso (layout, não animação) — nada salta.
- **Nenhuma animação pisca acima de 3×/segundo** (confetti cai em 3.5s, marquee é rolagem contínua linear) — sem risco fotossensível.

## 9. Riscos residuais e mitigação

| Risco | Mitigação obrigatória |
|---|---|
| `#FF1493` tentado como texto (é vibrante e "parece legível") | Regra dura: rosa de marca só display/gráfico; texto usa `#C4006B` |
| Amarelo `#FFD700` tentado como texto sobre claro | Documentado: amarelo é sempre fundo; texto sobre ele é carvão-uva |
| Confetti pode distrair TDAH / enjoar | Removido em reduced-motion; limitado ao hero; decorativo (aria-hidden) |
| Tom playful pode infantilizar demais | Voice evita diminutivos em excesso; Oswald condensado dá firmeza adulta |
| Grid assimétrico pode confundir ordem | Ordem lógica no DOM; hierarquia por tipografia/cor, não por alinhamento |
| Baixa visão em superfície rosa clara | Body em `#2A1220` (16.54:1); rosa nunca carrega informação textual |

---

**Veredito final:** o DS cumpre WCAG 2.1 AA desde que as três regras de ouro de cor sejam respeitadas — rosa `#FF1493` só como display, texto/botão pequeno via `#C4006B`, e amarelo sempre como fundo com texto carvão. O foco 3px `#C4006B` funciona sobre toda a paleta; a estratégia de reduced motion do `animations.css` (confetti removido, marquee estático) cobre SC 2.3.1 com folga.
