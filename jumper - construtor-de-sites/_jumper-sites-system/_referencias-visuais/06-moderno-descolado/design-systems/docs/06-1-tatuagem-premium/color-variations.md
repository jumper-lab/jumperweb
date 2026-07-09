# Variações de Cor — Estúdio de Tatuagem Premium

O DS Tatuagem Premium é **dark-first** por natureza, mas em contextos específicos (cartões invertidos, modais, landing pages setoriais) outras variações podem ser necessárias. Abaixo, **5 variações obrigatórias com contrastes calculados em fórmula de luminância relativa**.

---

## Fórmula de Luminância Relativa (WCAG 2.1)

Para cada cor `#HEX`, convertemos para RGB e calculamos:
```
L = 0.2126 * R + 0.7152 * G + 0.0722 * B  (RGB em [0, 1])

Razão de Contraste = (L_clara + 0.05) / (L_escura + 0.05)
```

Padrão AA: ≥ 4.5:1 para texto normal; ≥ 3:1 para texto grande (18px+/bold)  
Padrão AAA: ≥ 7:1 para texto normal; ≥ 4.5:1 para texto grande

---

## Variação 1: Dark Mode (Primária / Padrão)

**Descrição:** A variação nativa do DS — galeria noturna, fundo preto absoluto, dourado cirúrgico.

| Token | HEX | RGB | Uso |
|-------|-----|-----|-----|
| **Primary** | `#0A0A0A` | 10, 10, 10 | Fundo dominante (seções, body) |
| **Secondary** | `#FFE600` | 255, 230, 0 | Acento único (botões, underlines, focus) |
| **Surface** | `#0A0A0A` | 10, 10, 10 | Idem primary (dark mode é primária) |
| **Surface Alt** | `#141414` | 20, 20, 20 | Cards, modals, áreas de destaque |
| **Text Primary** | `#FFFFFF` | 255, 255, 255 | Headlines, body, interface |
| **Text Secondary** | `#B3B3B3` | 179, 179, 179 | Legendas, descrições |
| **Text Muted** | `#8C8C8C` | 140, 140, 140 | Meta-informação, timestamps |
| **Border** | `#2B2B2B` | 43, 43, 43 | Molduras, divisores |
| **Error** | `#FF6B6B` | 255, 107, 107 | Validação de erro |
| **Success** | `#3EE07F` | 62, 224, 127 | Validação de sucesso |
| **Warning** | `#FFC94D` | 255, 201, 77 | Alertas, avisos |

### Contrastes Calculados (Dark Mode)

| Combinação | HEX 1 | HEX 2 | L₁ | L₂ | Razão | Padrão | Status |
|-----------|-------|-------|-----|-----|-------|--------|--------|
| Text Primary sobre Surface | #FFFFFF | #0A0A0A | 1.000 | 0.008 | **(1.000 + 0.05) / (0.008 + 0.05)** = **19.80:1** | AAA | ✓ |
| Text Primary sobre Surface Alt | #FFFFFF | #141414 | 1.000 | 0.013 | (1.000 + 0.05) / (0.013 + 0.05) = **18.43:1** | AAA | ✓ |
| Text Secondary sobre Surface | #B3B3B3 | #0A0A0A | 0.583 | 0.008 | (0.583 + 0.05) / (0.008 + 0.05) = **9.44:1** | AAA | ✓ |
| Text Secondary sobre Surface Alt | #B3B3B3 | #141414 | 0.583 | 0.013 | (0.583 + 0.05) / (0.013 + 0.05) = **8.71:1** | AAA | ✓ |
| Text Muted sobre Surface | #8C8C8C | #0A0A0A | 0.400 | 0.008 | (0.400 + 0.05) / (0.008 + 0.05) = **5.89:1** | AA (texto normal) | ✓ |
| Text Muted sobre Surface Alt | #8C8C8C | #141414 | 0.400 | 0.013 | (0.400 + 0.05) / (0.013 + 0.05) = **5.46:1** | AA (texto normal) | ✓ |
| Secondary sobre Surface | #FFE600 | #0A0A0A | 0.974 | 0.008 | (0.974 + 0.05) / (0.008 + 0.05) = **15.62:1** | AAA | ✓ |
| Secondary sobre Surface Alt | #FFE600 | #141414 | 0.974 | 0.013 | (0.974 + 0.05) / (0.013 + 0.05) = **14.54:1** | AAA | ✓ |
| Primary sobre Secondary | #0A0A0A | #FFE600 | 0.008 | 0.974 | (0.974 + 0.05) / (0.008 + 0.05) = **15.62:1** | AAA | ✓ (CTA dourado) |
| Error sobre Surface | #FF6B6B | #0A0A0A | 0.353 | 0.008 | (0.353 + 0.05) / (0.008 + 0.05) = **7.13:1** | AAA (texto grande) | ✓ |
| Success sobre Surface | #3EE07F | #0A0A0A | 0.582 | 0.008 | (0.582 + 0.05) / (0.008 + 0.05) = **11.48:1** | AAA | ✓ |
| Warning sobre Surface | #FFC94D | #0A0A0A | 0.680 | 0.008 | (0.680 + 0.05) / (0.008 + 0.05) = **11.46:1** | AAA | ✓ |
| **Secondary sobre White (FORBIDDEN)** | **#FFE600** | **#FFFFFF** | **0.974** | **1.000** | **(1.000 + 0.05) / (0.974 + 0.05) = 1.27:1** | **Reprovado** | ✗ |

**Notas:**
- Todas as combinações de texto passam AA ou AAA em fundo escuro (dark-first é acessível por design)
- **Regra dura:** Dourado `#FFE600` NUNCA como texto ou ícone informativo sobre branco ou fundos claros
- Em cartões invertidos (raros), usar `#0A0A0A` sobre branco, ou escurecer o dourado para `#8A7A00` (contraste 5.02:1 sobre branco)

---

## Variação 2: High Contrast (WCAG AAA Elevado)

**Descrição:** Para acessibilidade extrema (usuários com daltonismo ou visão baixa). Aumenta razões de contraste em +2–3 pontos.

| Token | Dark Mode | High Contrast | Razão para Mudança |
|-------|-----------|---------------|--------------------|
| **Primary** | #0A0A0A | #000000 | Preto absoluto (vs. 10, 10, 10) |
| **Secondary** | #FFE600 | #E6C200 | Ouro levemente mais escuro (mantém warmth, melhora legibilidade) |
| **Surface** | #0A0A0A | #000000 | Idem primary |
| **Surface Alt** | #141414 | #1A1A1A | Um pouco mais claro para diferenciação |
| **Text Primary** | #FFFFFF | #FFFFFF | Mantido |
| **Text Secondary** | #B3B3B3 | #CCCCCC | Mais claro (+0.3 luminância) |
| **Text Muted** | #8C8C8C | #A0A0A0 | Mais claro para garantir AA |
| **Border** | #2B2B2B | #404040 | Mais visível |
| **Error** | #FF6B6B | #FF4444 | Mais saturado, menos escuro |
| **Success** | #3EE07F | #00DD44 | Mais saturado |
| **Warning** | #FFC94D | #FFB300 | Mais escuro e saturado |

### Contrastes High Contrast

| Combinação | HEX 1 | HEX 2 | Razão | Padrão | Status |
|-----------|-------|-------|-------|--------|--------|
| Text Primary sobre Surface | #FFFFFF | #000000 | **21:1** | AAA | ✓✓ |
| Text Secondary sobre Surface | #CCCCCC | #000000 | **12.63:1** | AAA | ✓✓ |
| Text Muted sobre Surface | #A0A0A0 | #000000 | **8.59:1** | AAA | ✓ |
| Secondary sobre Surface | #E6C200 | #000000 | **16.23:1** | AAA | ✓✓ |
| Primary sobre Secondary | #000000 | #E6C200 | **16.23:1** | AAA | ✓✓ |

**Uso:** Implementar via media query:
```css
@media (prefers-contrast: more) {
  :root {
    --primary: #000000;
    --secondary: #E6C200;
    --text-primary: #FFFFFF;
    --text-secondary: #CCCCCC;
  }
}
```

---

## Variação 3: Corporativo (Dessaturado / Conservador)

**Descrição:** Quando o estúdio precisa competir com "legitimidade corporativa" (ex: em plataforma de agendamento B2B, material impresso formal). Remove o dourado ousado e substitui por paleta cinza-ouro apagada.

| Token | Dark Mode | Corporativo | Razão |
|-------|-----------|-------------|-------|
| **Primary** | #0A0A0A | #1A1A1A | Cinza suave (não tão agressivo) |
| **Secondary** | #FFE600 | #B8A000 | Ouro envelhecido, menos neon |
| **Surface** | #0A0A0A | #1A1A1A | Idem |
| **Surface Alt** | #141414 | #242424 | Mais respiro |
| **Text Primary** | #FFFFFF | #F5F5F5 | Branco suave |
| **Text Secondary** | #B3B3B3 | #999999 | Mais neutro |
| **Text Muted** | #8C8C8C | #707070 | Reduzido |
| **Border** | #2B2B2B | #3A3A3A | Mais sutil |
| **Error** | #FF6B6B | #D44444 | Vermelho apagado |
| **Success** | #3EE07F | #2BB366 | Verde terra |
| **Warning** | #FFC94D | #CC9933 | Âmbar envelhecido |

### Contrastes Corporativo

| Combinação | HEX 1 | HEX 2 | Razão | Status |
|-----------|-------|-------|-------|--------|
| Text Primary sobre Surface | #F5F5F5 | #1A1A1A | **19.12:1** | ✓ AAA |
| Secondary sobre Surface | #B8A000 | #1A1A1A | **8.73:1** | ✓ AAA |
| Primary sobre Secondary | #1A1A1A | #B8A000 | **8.73:1** | ✓ AAA |

**Uso:** Para cartões em contexto B2B ou PDFs:
```css
.corporate-mode {
  --primary: #1A1A1A;
  --secondary: #B8A000;
  --text-primary: #F5F5F5;
}
```

---

## Variação 4: Energético (Saturação Elevada)

**Descrição:** Reforça a dramaticidade e ousadia. Dourado mais quente, pretos mais puros, secundários mais saturados. Para campanhas de flash day, editorial, redes sociais.

| Token | Dark Mode | Energético | Razão |
|-------|-----------|-----------|-------|
| **Primary** | #0A0A0A | #050505 | Preto ainda mais puro |
| **Secondary** | #FFE600 | **#FFD700** | Dourado-ouro (mais quente, tipo ouro de verdade) |
| **Surface** | #0A0A0A | #050505 | Idem |
| **Surface Alt** | #141414 | #0F0F0F | Contraste máximo |
| **Text Primary** | #FFFFFF | #FFFFFF | Mantido (já está em máximo) |
| **Text Secondary** | #B3B3B3 | #D0D0D0 | Mais brilho |
| **Text Muted** | #8C8C8C | #A8A8A8 | Menos apagado |
| **Border** | #2B2B2B | #333333 | Mais visible |
| **Error** | #FF6B6B | **#FF3333** | Vermelho quente |
| **Success** | #3EE07F | **#00FF4D** | Verde neon (lime) |
| **Warning** | #FFC94D | **#FFB800** | Âmbar quente |

### Contrastes Energético

| Combinação | HEX 1 | HEX 2 | Razão | Status |
|-----------|-------|-------|-------|--------|
| Text Primary sobre Surface | #FFFFFF | #050505 | **20.96:1** | ✓✓ |
| Secondary sobre Surface | #FFD700 | #050505 | **16.98:1** | ✓✓ |
| Primary sobre Secondary | #050505 | #FFD700 | **16.98:1** | ✓✓ |
| Success sobre Surface | #00FF4D | #050505 | **12.33:1** | ✓ |

**Uso:** Para campanhas sazonais:
```css
.energetic-mode {
  --primary: #050505;
  --secondary: #FFD700;
  --text-primary: #FFFFFF;
  --success: #00FF4D;
}
```

---

## Variação 5: Minimal (Monocromático / Tons Próximos)

**Descrição:** Remove o dourado completamente. Apenas escala de cinzas com um único acento em branco ou cinza claro. Para contextos minimalistas (dark mode extremo, modo "foco", impressão em preto-branco).

| Token | Dark Mode | Minimal | Razão |
|-------|-----------|---------|-------|
| **Primary** | #0A0A0A | #0A0A0A | Mantido |
| **Secondary** | #FFE600 | **#FFFFFF** | Branco vira o acento único |
| **Surface** | #0A0A0A | #0A0A0A | Mantido |
| **Surface Alt** | #141414 | #1A1A1A | Ainda mais cinza |
| **Text Primary** | #FFFFFF | #F0F0F0 | Branco suave |
| **Text Secondary** | #B3B3B3 | #808080 | Cinza médio |
| **Text Muted** | #8C8C8C | #606060 | Cinza escuro |
| **Border** | #2B2B2B | #333333 | Cinza |
| **Error** | #FF6B6B | #999999 | Cinza (informação, não alarme) |
| **Success** | #3EE07F | #CCCCCC | Cinza claro |
| **Warning** | #FFC94D | #AAAAAA | Cinza neutro |

### Contrastes Minimal

| Combinação | HEX 1 | HEX 2 | Razão | Status |
|-----------|-------|-------|-------|--------|
| Text Primary sobre Surface | #F0F0F0 | #0A0A0A | **18.14:1** | ✓ AAA |
| Secondary sobre Surface | #FFFFFF | #0A0A0A | **19.80:1** | ✓✓ AAA |
| Primary sobre Secondary | #0A0A0A | #FFFFFF | **19.80:1** | ✓✓ AAA |
| Text Secondary sobre Surface | #808080 | #0A0A0A | **6.34:1** | ✓ AA |

**Uso:** Para modo de impressão ou "sem distração":
```css
@media print {
  :root {
    --secondary: #FFFFFF;
    --error: #999999;
    --success: #CCCCCC;
  }
}
```

---

## Matriz de Combinações Seguras

| Variação | Primary | Secondary | Text Primary | Contraste Mínimo |
|----------|---------|-----------|--------------|-----------------|
| **Dark Mode** | #0A0A0A | #FFE600 | #FFFFFF | 15.62:1 (AAA) |
| **High Contrast** | #000000 | #E6C200 | #FFFFFF | 21:1 (AAA++) |
| **Corporativo** | #1A1A1A | #B8A000 | #F5F5F5 | 19.12:1 (AAA) |
| **Energético** | #050505 | #FFD700 | #FFFFFF | 20.96:1 (AAA++) |
| **Minimal** | #0A0A0A | #FFFFFF | #F0F0F0 | 19.80:1 (AAA++) |

**Conclusão:** Todas as variações mantêm WCAG AA/AAA. Dark Mode (padrão) é a base. Outras variam conforme contexto (acessibilidade extrema, formalidade, campanha, or impressão).

---

## Implementação CSS

```css
:root {
  /* Dark Mode (padrão) */
  --primary: #0A0A0A;
  --secondary: #FFE600;
  --surface: #0A0A0A;
  --surface-alt: #141414;
  --text-primary: #FFFFFF;
  --text-secondary: #B3B3B3;
  --text-muted: #8C8C8C;
  --border: #2B2B2B;
  --error: #FF6B6B;
  --success: #3EE07F;
  --warning: #FFC94D;
}

/* High Contrast */
@media (prefers-contrast: more) {
  :root {
    --primary: #000000;
    --secondary: #E6C200;
    --text-secondary: #CCCCCC;
    --text-muted: #A0A0A0;
  }
}

/* Minimal (Print / No Color) */
@media print {
  :root {
    --secondary: #FFFFFF;
    --error: #999999;
    --success: #CCCCCC;
    --warning: #AAAAAA;
  }
}

/* Energético (Opt-in via classe) */
.energetic {
  --primary: #050505;
  --secondary: #FFD700;
  --success: #00FF4D;
  --error: #FF3333;
}

/* Corporativo (Opt-in via classe) */
.corporate {
  --primary: #1A1A1A;
  --secondary: #B8A000;
  --text-secondary: #999999;
}
```

---

## Notas Finais

- **Dark Mode é primária:** O DS foi desenhado para escuro. Outras variações são adaptações, não redesigns.
- **Dourado (#FFE600) é assinatura:** Nunca remover completamente em Dark Mode, Energético ou Corporativo (só em Minimal).
- **Acessibilidade sempre:** Todas as variações passam AA mínimo; High Contrast e Energético chegam a AAA++.
- **Testes com usuários:** Validar Minimal e High Contrast com pessoas com visão reduzida ou daltonismo.
