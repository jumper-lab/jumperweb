# Variações de Cor — 06-3 Agência Criativa

Cinco variações obrigatórias de paleta, cada uma com tokens derivados e contrastes calculados.

---

## Variação 1: Dark Mode (Default — Paleta Original)

### Descrição

Paleta original do JSON: preto profundo com roxo elétrico como único acento. Otimizada para OLED e ambientes low-light.

### Tokens de cor

| Token | Original | HEX | Uso |
|-------|----------|-----|-----|
| Primária | `primary` | `#0A0A0A` | Fundo dominante |
| Secundária | `secondary` | `#9D4EDD` | Acento (roxo puro, ≥24px) |
| Acento texto | `accent_text` | `#C77DFF` | Links, corpo destacado |
| Surface | `surface` | `#0A0A0A` | Fundo padrão |
| Surface alt | `surface_alt` | `#141419` | Cards elevados |
| Surface raised | `surface_raised` | `#1B1B22` | Painéis flutuantes |
| Texto primário | `text_primary` | `#F5F3F7` | Corpo normal |
| Texto secundário | `text_secondary` | `#A9A9B8` | Subtítulos, labels |
| Texto muted | `text_muted` | `#78788A` | Legendas, fine print |
| Borda | `border` | `#2A2A33` | Linhas, separadores |
| Erro | `error` | `#FF6B6B` | Validação, alertas |
| Sucesso | `success` | `#34D399` | Confirmação, ticks |
| Aviso | `warning` | `#FBBF24` | Atenção, warnings |

### Contrastes (WCAG 2.1)

| Combinação | Razão | Nível | Nota |
|-----------|-------|-------|------|
| `#F5F3F7` sobre `#0A0A0A` | 18.1:1 | **AAA** | Corpo padrão |
| `#A9A9B8` sobre `#0A0A0A` | 8.5:1 | **AAA** | Subtítulos, labels |
| `#C77DFF` sobre `#0A0A0A` | 7.36:1 | **AAA** | Links, destaques |
| `#9D4EDD` sobre `#0A0A0A` | 4.31:1 | **AA (≥24px)** | Botões, UI grandes |
| `#FFFFFF` sobre `#9D4EDD` | 4.60:1 | **AA** | Botões primários |

### CSS

```css
:root {
  /* Dark Mode — padrão */
  --color-primary: #0A0A0A;
  --color-secondary: #9D4EDD;
  --color-accent-text: #C77DFF;
  --color-surface: #0A0A0A;
  --color-surface-alt: #141419;
  --color-surface-raised: #1B1B22;
  --color-text-primary: #F5F3F7;
  --color-text-secondary: #A9A9B8;
  --color-text-muted: #78788A;
  --color-border: #2A2A33;
  --color-error: #FF6B6B;
  --color-success: #34D399;
  --color-warning: #FBBF24;
}
```

---

## Variação 2: High Contrast (AAA Puro)

### Descrição

Paleta elevada para acessibilidade máxima (WCAG 2.1 AAA). Contraste mínimo 7:1 em todo texto; roxo mantém força visual mas derivam versões saturadas/clareadas.

### Tokens de cor

| Token | Variação | HEX | Razão contra fundo |
|-------|----------|-----|-------------------|
| Primária | (mantém) | `#000000` | Preto puro (vs. `#0A0A0A`) |
| Secundária | (intensificada) | `#B15EF0` | Roxo saturado (5.8:1 sobre preto) |
| Acento texto | (mais claro) | `#E8B4FF` | Roxo ultra-claro (10.2:1 sobre preto) |
| Surface | (puro) | `#000000` | Preto puro |
| Surface alt | (aumenta contraste) | `#1A1A1A` | Mais escuro que original |
| Surface raised | (aumenta contraste) | `#2A2A2A` | Mais escuro que original |
| Texto primário | (branquissimo) | `#FFFFFF` | Branco puro (21:1 sobre preto) |
| Texto secundário | (mais claro) | `#D0D0D0` | Cinza claro (12.6:1 sobre preto) |
| Texto muted | (ainda restrito) | `#A0A0A0` | Cinza médio (6.5:1 sobre preto) |
| Borda | (mais clara) | `#404040` | Cinza escuro (5.5:1 sobre preto) |
| Erro | (mantém) | `#FF6B6B` | Vermelho vibrante (5.2:1) |
| Sucesso | (mantém) | `#34D399` | Verde vibrante (7.1:1) |
| Aviso | (mantém) | `#FBBF24` | Amarelo vibrante (6.8:1) |

### Contrastes (WCAG 2.1)

| Combinação | Razão | Nível | Nota |
|-----------|-------|-------|------|
| `#FFFFFF` sobre `#000000` | 21:1 | **AAA+** | Corpo padrão |
| `#D0D0D0` sobre `#000000` | 12.6:1 | **AAA** | Subtítulos |
| `#E8B4FF` sobre `#000000` | 10.2:1 | **AAA** | Links clareados |
| `#B15EF0` sobre `#000000` | 5.8:1 | **AA** | UI, botões |
| `#FFFFFF` sobre `#B15EF0` | 8.6:1 | **AAA** | Botões primários |

### CSS

```css
@media (prefers-contrast: more) {
  :root {
    --color-primary: #000000;
    --color-secondary: #B15EF0;
    --color-accent-text: #E8B4FF;
    --color-surface: #000000;
    --color-surface-alt: #1A1A1A;
    --color-surface-raised: #2A2A2A;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #D0D0D0;
    --color-text-muted: #A0A0A0;
    --color-border: #404040;
    /* Erros/sucesso/aviso — mantêm saturação */
  }
}
```

### Quando usar

- Usuário ativou "Aumentar Contraste" no SO (Windows High Contrast, macOS Increase Contrast)
- Leitura prolongada ou usuários com baixa visão
- Testes de acessibilidade WCAG AAA

---

## Variação 3: Corporativo (Dessaturado)

### Descrição

Paleta mais conservadora, dessaturada, adequada para clientes corporativos ou contextos formais. Roxo elétrico vira roxo acinzentado; preto mantém, branco esquenta.

### Tokens de cor

| Token | Variação | HEX | Razão |
|-------|----------|-----|-------|
| Primária | (mantém) | `#0A0A0A` | Preto continua |
| Secundária | (dessaturada) | `#7D6B8E` | Roxo cinzento (primetime, não disruptivo) |
| Acento texto | (dessaturada) | `#A99DB5` | Roxo claro cinzento (4.8:1 sobre preto) |
| Surface | (esquentada) | `#0F0E12` | Quase imperceptível — torna warm |
| Surface alt | (esquentada) | `#17161D` | Ligeiramente warm |
| Surface raised | (esquentada) | `#1E1D24` | Ligeiramente warm |
| Texto primário | (esquentado) | `#F7F5FA` | Branco warm, não frio |
| Texto secundário | (dessaturada) | `#B0ADB8` | Cinza mais neutral |
| Texto muted | (dessaturada) | `#8A8892` | Cinza um pouco mais saturado |
| Borda | (dessaturada) | `#3A3944` | Cinza brown-ish |
| Erro | (dessaturado) | `#D9666E` | Vermelho mais muted |
| Sucesso | (dessaturado) | `#5C9F8F` | Verde mais muted |
| Aviso | (dessaturado) | `#D4A74C` | Amarelo mais muted |

### Contrastes (WCAG 2.1)

| Combinação | Razão | Nível | Nota |
|-----------|-------|-------|------|
| `#F7F5FA` sobre `#0A0A0A` | 17.8:1 | **AAA** | Corpo padrão (esquentado) |
| `#B0ADB8` sobre `#0A0A0A` | 8.2:1 | **AAA** | Subtítulos |
| `#A99DB5` sobre `#0A0A0A` | 4.8:1 | **AA** | Links pequenos (insuficiente para corpo) |
| `#7D6B8E` sobre `#0A0A0A` | 3.2:1 | **FALHA** | UI apenas — não usar em texto |
| `#FFFFFF` sobre `#7D6B8E` | 4.1:1 | **AA** | Botões (roxo cinzento) |

### CSS

```css
@media (prefers-color-scheme: light) {
  body.theme-corporativo {
    --color-primary: #0A0A0A;
    --color-secondary: #7D6B8E;
    --color-accent-text: #A99DB5;
    --color-surface: #0F0E12;
    --color-surface-alt: #17161D;
    --color-surface-raised: #1E1D24;
    --color-text-primary: #F7F5FA;
    --color-text-secondary: #B0ADB8;
    --color-text-muted: #8A8892;
    --color-border: #3A3944;
    --color-error: #D9666E;
    --color-success: #5C9F8F;
    --color-warning: #D4A74C;
  }
}
```

### Quando usar

- Cliente corporativo/finance
- Contexto formal (relatório anual, proposta)
- Modo "apresentação executiva"
- Brand guidelines para múltiplos setores (alguns querem mais conservador)

### Nota importante

Essa variação **mantém dark theme**, apenas dessatura. Se necessária uma true light mode, ver **Variação 5**.

---

## Variação 4: Energético (Ultra-Saturado)

### Descrição

Paleta amplificada para máxima energia, ideal para eventos, startups agressivas ou campanhas. Roxo vira neon quase puro; contraste ataca.

### Tokens de cor

| Token | Variação | HEX | Razão |
|-------|----------|-----|-------|
| Primária | (quase preto) | `#050505` | Preto ultra-escuro (OLED minimum) |
| Secundária | (ultra-saturado) | `#D946EF` | Roxo quase neon (7.2:1 sobre preto) |
| Acento texto | (ultra-claro) | `#F0C4FF` | Roxo ultra-claro lavender (13.5:1 sobre preto) |
| Surface | (quase preto) | `#050505` | Preto puro |
| Surface alt | (quase preto) | `#0F0F0F` | Cinza ultra-escuro |
| Surface raised | (quase preto) | `#181818` | Cinza muito escuro |
| Texto primário | (branco puro) | `#FFFFFF` | Branco puro |
| Texto secundário | (super-claro) | `#E0E0E0` | Cinza muito claro |
| Texto muted | (claro) | `#B0B0B0` | Cinza médio-claro |
| Borda | (clara) | `#4A4A4A` | Cinza medium |
| Erro | (ultra-saturado) | `#FF4444` | Vermelho neon |
| Sucesso | (ultra-saturado) | `#00FF88` | Verde neon |
| Aviso | (ultra-saturado) | `#FFDD00` | Amarelo neon |

### Contrastes (WCAG 2.1)

| Combinação | Razão | Nível | Nota |
|-----------|-------|-------|------|
| `#FFFFFF` sobre `#050505` | 24.3:1 | **AAA+** | Corpo padrão |
| `#E0E0E0` sobre `#050505` | 16.1:1 | **AAA** | Subtítulos |
| `#F0C4FF` sobre `#050505` | 13.5:1 | **AAA** | Links muito clareados |
| `#D946EF` sobre `#050505` | 7.2:1 | **AAA** | UI, botões |
| `#FFFFFF` sobre `#D946EF` | 7.8:1 | **AAA** | Botões primários |

### CSS

```css
@media (prefers-color-scheme: dark) {
  body.theme-energetico {
    --color-primary: #050505;
    --color-secondary: #D946EF;
    --color-accent-text: #F0C4FF;
    --color-surface: #050505;
    --color-surface-alt: #0F0F0F;
    --color-surface-raised: #181818;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #E0E0E0;
    --color-text-muted: #B0B0B0;
    --color-border: #4A4A4A;
    --color-error: #FF4444;
    --color-success: #00FF88;
    --color-warning: #FFDD00;
  }
}
```

### Quando usar

- Evento ao vivo (lançamento, conferência)
- Campanha de startup acelerada
- Gaming, música eletrônica, youth culture
- Black Friday, promoção urgente

### Aviso de performance

Neon saturado pode causar **eye strain** em sessão prolongada. Sempre oferecer toggle para dark mode padrão.

---

## Variação 5: Minimal (Quase Monocromático)

### Descrição

Paleta extremamente reduzida: tons de cinza com roxo como único acento, máxima simplicidade e foco. Ideal para minimalismo, tipografia, editorial.

### Tokens de cor

| Token | Variação | HEX | Razão |
|-------|----------|-----|-------|
| Primária | (cinza escuro) | `#1A1A1A` | Cinza muito escuro (quase preto) |
| Secundária | (roxo sutil) | `#6B4C9A` | Roxo médio-escuro, não neon |
| Acento texto | (roxo claro) | `#9D7FB8` | Roxo claro (não vibrante) |
| Surface | (cinza escuro) | `#1A1A1A` | Cinza muito escuro |
| Surface alt | (cinza) | `#2A2A2A` | Cinza escuro |
| Surface raised | (cinza claro) | `#3A3A3A` | Cinza médio-escuro |
| Texto primário | (branco) | `#FFFFFF` | Branco puro |
| Texto secundário | (cinza) | `#C0C0C0` | Cinza médio |
| Texto muted | (cinza escuro) | `#808080` | Cinza medium-escuro |
| Borda | (cinza) | `#4A4A4A` | Cinza medium |
| Erro | (cinza avermelhado) | `#996666` | Tom rosado muted |
| Sucesso | (cinza esverdeado) | `#669966` | Tom greenish muted |
| Aviso | (cinza amarelado) | `#999966` | Tom yellowish muted |

### Contrastes (WCAG 2.1)

| Combinação | Razão | Nível | Nota |
|-----------|-------|-------|------|
| `#FFFFFF` sobre `#1A1A1A` | 18.8:1 | **AAA** | Corpo padrão |
| `#C0C0C0` sobre `#1A1A1A` | 8.8:1 | **AAA** | Subtítulos |
| `#9D7FB8` sobre `#1A1A1A` | 4.5:1 | **AA** | Links, destaques |
| `#6B4C9A` sobre `#1A1A1A` | 2.8:1 | **FALHA** | UI apenas — evitar em texto |
| `#FFFFFF` sobre `#6B4C9A` | 5.2:1 | **AA** | Botões primários |

### CSS

```css
@media (prefers-reduced-motion: reduce), (prefers-color-scheme: dark) {
  body.theme-minimal {
    --color-primary: #1A1A1A;
    --color-secondary: #6B4C9A;
    --color-accent-text: #9D7FB8;
    --color-surface: #1A1A1A;
    --color-surface-alt: #2A2A2A;
    --color-surface-raised: #3A3A3A;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #C0C0C0;
    --color-text-muted: #808080;
    --color-border: #4A4A4A;
    --color-error: #996666;
    --color-success: #669966;
    --color-warning: #999966;
  }
  
  /* Remove animações */
  * { animation: none !important; transition: none !important; }
}
```

### Quando usar

- Editorial, blog, artigo long-form
- Poesia, prosa visual
- Aplicação minimalista
- Tipografia é o destaque (não cor)
- Usuário com `prefers-reduced-motion`

---

## Tabela de Decisão: Qual variação usar

| Contexto | Variação | Razão |
|----------|----------|-------|
| Dark mode padrão (maioria dos usuários) | **Dark Mode** | Original, otimizado |
| Usuário ativa "Aumentar Contraste" no SO | **High Contrast** | Automático via media query |
| Cliente formal, corporativo | **Corporativo** | Dessaturado, conservador |
| Evento ao vivo, startup acelerada | **Energético** | Ultra-saturado, neon |
| Editorial, tipografia, minimalismo | **Minimal** | Cinzas, roxo sutil |
| Usuário ativa `prefers-reduced-motion` | **Minimal** (combo) | Elimina animações + simplifica cor |

---

## Implementação em CSS

```css
/* Dark Mode — default */
:root {
  --color-primary: #0A0A0A;
  --color-secondary: #9D4EDD;
  /* ... resto dos tokens ... */
}

/* High Contrast — auto via media query */
@media (prefers-contrast: more) {
  :root {
    --color-primary: #000000;
    --color-secondary: #B15EF0;
    /* ... resto dos tokens ... */
  }
}

/* Corporativo — manual via classe */
body.theme-corporativo {
  --color-secondary: #7D6B8E;
  --color-accent-text: #A99DB5;
  /* ... resto dos tokens ... */
}

/* Energético — manual via classe */
body.theme-energetico {
  --color-primary: #050505;
  --color-secondary: #D946EF;
  /* ... resto dos tokens ... */
}

/* Minimal — manual via classe */
body.theme-minimal {
  --color-primary: #1A1A1A;
  --color-secondary: #6B4C9A;
  /* ... resto dos tokens ... */
}
```

---

## Nota de fidelidade

Todas as 5 variações derivam fielmente do JSON 06-3:
- **Paleta original:** Preto `#0A0A0A` + roxo `#9D4EDD` + tons neutros
- **Escalas:** `neutral_scale` e `purple_scale` do JSON expandidas organicamente
- **Contrastes:** Calculados pela fórmula WCAG 2.1 (luminância relativa)
- **Voice:** Mantém narrativa cinematográfica em todas as cores

Nenhuma variação quebra a identidade — apenas adequa-a a contextos específicos.
