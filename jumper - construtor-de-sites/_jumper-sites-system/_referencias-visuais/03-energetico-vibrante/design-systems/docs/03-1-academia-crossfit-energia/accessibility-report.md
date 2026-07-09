# DS 03.1 — Academia CrossFit Energia · Auditoria WCAG 2.1 AA

**Data:** 2026-07-04 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)). Base dark: o sistema opera quase inteiro sobre `#000000` e `#111111`, o que rende contrastes muito acima do mínimo.

### Texto sobre superfícies escuras

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#FFFFFF` sobre `#000000` (body) | **21.00:1** | ✅ | ✅ | AAA — máximo possível |
| `#FFD600` sobre `#000000` (headlines/CTA ghost) | **14.87:1** | ✅ | ✅ | AAA |
| `#B3B3B3` sobre `#000000` (text_secondary) | **10.02:1** | ✅ | ✅ | AAA |
| `#8A8A8A` sobre `#000000` (text_muted) | **6.08:1** | ✅ | ✅ | AA |
| `#FFD600` sobre `#111111` (surface_alt) | **13.37:1** | ✅ | ✅ | AAA |
| `#FFFFFF` sobre `#111111` | **18.88:1** | ✅ | ✅ | AAA |

### Texto sobre cores de marca

| Combinação | Razão | Veredito |
|---|---|---|
| `#000000` sobre `#FFD600` (botão primário, badges, marquee amarelo, plan_card featured) | **14.87:1** | ✅ AAA |
| `#FFFFFF` sobre `#FFD600` | **1.41:1** | ❌ **PROIBIDO** |
| `#FFD600` sobre `#FFFFFF` | **1.41:1** | ❌ **PROIBIDO** |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#FF5C51` (erro) sobre `#000000` | **6.90:1** | ✅ AA |
| `#4ADE80` (sucesso) sobre `#000000` | **12.05:1** | ✅ AAA |
| `#FFB020` (aviso) sobre `#000000` | **11.48:1** | ✅ AAA |
| Borda de input `#2A2A2A` vs `#111111` | < 3:1 | ⚠️ compensado: altura 48px + label forte + foco com borda `#FFD600` 2px e anel `rgba(255,214,0,0.25)` de 3px |

### Regra de ouro do DS

Sobre amarelo (`#FFD600`), o texto é **SEMPRE** preto (`#000000`). Sobre preto, texto branco ou amarelo. Amarelo **nunca** sobre branco. Não há exceções — qualquer combinação amarelo+branco reprova (1.41:1).

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: borda `#FF5C51` **+ ícone + mensagem de texto** + `aria-invalid` + `aria-describedby`.
- Links ghost: cor amarela **+ sublinhado 4px** (stripe-sweep é reforço, não o único indicador — o sublinhado base permanece).
- Card ativo: borda esquerda 4px + glow, nunca só mudança de tom.
- Estados de sucesso/erro de input sempre acompanhados de texto.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Ordem de tab lógica: nav → CTA do hero → conteúdo → footer. A ordem do DOM segue a visual.
- **Skip link** "Pular para o conteúdo" como primeiro elemento focável, visível no focus.
- Menu mobile (overlay fullscreen): **focus trap** ativo, fechamento por `Esc`, foco devolvido ao botão hamburger ao fechar.
- Carousel de depoimentos navegável pelas setas do teclado; setas quadradas 48px são `<button>` reais.
- Nenhuma armadilha de teclado; marquees e gradientes decorativos não recebem foco.

## 4. Estados de foco (SC 2.4.7 / 2.4.11)

- Outline **3px sólido com offset 3px** em todos os interativos.
- Sobre elementos amarelos: outline `#FFFFFF` (branco sobre amarelo como anel externo, contornando o fundo preto adjacente).
- Sobre elementos pretos/brancos: outline `#FFD600`.
- Nunca remover outline sem substituto visível de contraste ≥ 3:1.

## 5. Conteúdo não textual (SC 1.1.1)

- Mídia de treino com alt descritivo em PT-BR: *"Atleta executando levantamento terra durante aula de CrossFit"*.
- Gradientes de simulação de vídeo, marquees e faixas decorativas: `aria-hidden="true"`.
- Marquee: conteúdo textual duplicado recebe `aria-hidden`; versão para leitor de tela fica fora da animação (um único texto estático acessível).

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header/nav/main/section/article/footer`; **um único `h1` por página**, hierarquia real de headings.
- Botões são `<button>`/`<a>` — nunca `div` clicável.
- Números de prova social (counter-up) presentes no HTML como valor final (o JS anima por cima); leitores de tela leem o valor correto.
- Preços dos planos dentro do fluxo textual, não apenas visual.

## 7. Alvos de toque (SC 2.5.8)

- Mínimo **44px** em todos os interativos. Botão `sm` tem 40px visuais mas a área de toque é completada a 44px via padding externo.
- CTA `xl` do hero: 72px de altura. Hamburger e setas de carousel: 48px.

## 8. Segurança de movimento (SC 2.3.1 / 2.2.2)

- `prefers-reduced-motion: reduce` desliga marquees (viram texto estático com fade lateral), pulses e slams; counter mostra o valor final direto. Ver `animations.css`.
- Nenhum flash acima de 3 por segundo — o pulse-badge oscila opacidade a 0.625Hz, muito abaixo do limite.
- Autoplay de vídeo de fundo: sempre **mudo**, com **botão de pausa acessível** (SC 2.2.2 — conteúdo em movimento com mais de 5s precisa de controle).

## 9. Riscos residuais e mitigação

| Risco | Mitigação obrigatória |
|---|---|
| Glow amarelo intenso pode incomodar fotossensíveis | Glow só em hover/estado ativo, nunca em loop; intensidade máx. 0.5 de alpha |
| Anton em caixa alta reduz legibilidade de textos longos | Anton restrito a headlines ≤ 3 linhas; corpo sempre Inter sentence-case |
| Marquee em loop pode distrair usuários com TDAH | Pausa via `prefers-reduced-motion` + conteúdo do marquee nunca é informação exclusiva |
| Dark total dificulta leitura em ambientes muito claros | Contraste 21:1 e tipografia ≥16px compensam; testar sob luz solar em QA |

---

**Veredito final:** o DS cumpre WCAG 2.1 AA (e supera para AAA em praticamente todos os pares de texto) desde que as regras de uso acima sejam respeitadas — em especial a proibição absoluta de amarelo+branco e a estratégia de reduced motion do `animations.css`.
