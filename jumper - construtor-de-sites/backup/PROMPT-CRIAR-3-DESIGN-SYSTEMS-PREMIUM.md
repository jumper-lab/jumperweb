# PROMPT ESTRUTURADO: CRIAR 18 DESIGN SYSTEMS PREMIUM (3 POR TEMA)

> **Objetivo:** Criar 18 Design Systems completamente distintos — 3 para cada uma das 6 personalidades visuais (Acolhedor, Premium, Energético, Técnico, Artesanal, Moderno). Cada DS é baseado em um site premiado/famoso diferente e captura sua essência visual e de UX única.

> **Output:** 18 arquivos JSON estruturados, 18 previews markdown, 18 HTMLs interativos, code samples, animações, acessibilidade, benchmarking, variações de cor, e guias responsivos.

> **Escopo Total:** ~45.000 linhas de documentação estruturada, pronta para implementação.

---

## 1. CONTEXTO E REGRAS

### 1.1 O que é um Design System neste contexto

Um Design System é um arquivo JSON + documentação que define COMPLETAMENTE como um website deve se parecer, funcionar e se comportar. Inclui:

- **Tokens de design:** cores HEX com scale completo, tipografia (Google Fonts), espaçamento, borders, shadows
- **Composição visual:** proporções, densidade, ritmo, padrões de layout
- **Componentes:** padrões de botões, cards, CTAs, heróis, seções, grids
- **Comportamento:** animações, transitions, hover states, responsividade
- **Voz & tom:** como a marca fala, escreve, persuade
- **Referências:** sites que inspiraram + padrões extraídos
- **Guardrails:** riscos evitados, contrasts garantidos, acessibilidade

### 1.2 Critério de seleção de temas

Você DEVE escolher 3 temas/categorias totalmente distintas visualmente. Exemplos válidos:

**Opção A (Recomendada):**
- Tema 1: SaaS/Tecnologia minimalista (Linear, Vercel, Stripe style)
- Tema 2: Moda/Lifestyle experimental (Margiela, Rick Owens, Nueno style)
- Tema 3: Bem-estar/Wellness premium (Aman, Six Senses, Soho House style)

**Opção B:**
- Tema 1: Alimentação artesanal (Specialty coffee, padaria, ceramistas)
- Tema 2: Criatividade urbana (Agências, estúdios, produtoras)
- Tema 3: Advocacia/consultoria (Firms, advisories, corporativo premium)

**Opção C (Sua escolha):**
- Defina 3 temas que façam sentido pro seu negócio

**Regra:** Os 3 temas NÃO podem ser visuais próximos. Se escolher "tech", não escolha depois "fintech". Se escolher "premium", não escolha "luxury" em seguida.

---

## 2. PROCESSO: PESQUISA + SÍNTESE

### 2.1 Para CADA tema, você deve:

#### FASE 1: Pesquisa (você ou a IA)

**Tarefa:** Encontrar os 3 melhores sites do mundo naquela categoria. Critérios:

- ✅ Premiados em Awwwards, Webby Awards, CSS Design Awards ou similar (2024-2026)
- ✅ Funcionais (não apenas bonitos — conversão, UX, performance testada)
- ✅ Publicamente acessíveis (não paywalls)
- ✅ Representam melhor-em-classe (não genéricos)
- ✅ Diferentes entre si visualmente (mesmo tema, execuções distintas)

**Exemplo para Tema 1 (SaaS minimalista):**
1. https://linear.app — Dark mode, tipografia ousada, animações funcionais
2. https://stripe.com — Espaço em branco, ilustrações geométricas, hierarchy clara
3. https://vercel.com — Monospace, grid agressivo, performance-first

**Para cada site, documente:**
```json
{
  "site_name": "Linear",
  "url": "https://linear.app",
  "category": "SaaS Product",
  "awards": ["Webby Award Nominee 2025", "..."],
  "key_visual_features": [
    "Dark mode as default",
    "Typography: PP Neue Montreal gigante em headings",
    "Animations: smooth, functional, not gratuitous",
    "Grid: quebrado, assimétrico, responsive",
    "CTA: sempre visível, sticky nav"
  ],
  "color_palette_observed": {
    "primary": "#extracted_hex",
    "secondary": "#extracted_hex",
    "accent": "#extracted_hex",
    "background_dark": "#extracted_hex"
  },
  "typography_observed": {
    "heading_font": "PP Neue Montreal OR similar",
    "body_font": "Inter OR similar",
    "heading_scale_desktop": "h1: 3.5rem, h2: 2.5rem, h3: 1.75rem",
    "heading_scale_mobile": "h1: 2rem, h2: 1.5rem, h3: 1.25rem",
    "line_height": "1.4 for headings, 1.6 for body"
  },
  "layout_patterns": [
    "Hero: full viewport, dark bg, centered type",
    "Content sections: max-width 1200px, generous padding",
    "Cards: minimal borders, subtle shadows",
    "CTAs: high contrast, clear hierarchy"
  ],
  "animation_motion": [
    "Scroll reveals: fade-in + slight translate",
    "Hover states: color shift, slight scale",
    "Page transitions: smooth cross-fade",
    "Duration: 300-500ms"
  ],
  "voice_tone": "Technical but accessible, confident, direct",
  "why_this_site": "Exemplifies clean SaaS design with functional animations and dark mode mastery"
}
```

#### FASE 2: Síntese (IA cria o DS)

A IA deve:
1. **Analisar os 3 sites em paralelo**
2. **Extrair padrões comuns** (o que funcionam em todos os 3)
3. **Notar diferenças** (o que cada um faz único)
4. **Selecionar o melhor** de cada (não copiar um único site)
5. **Gerar um DS novo** que é a síntese genial

**Exemplo de síntese:**
```
Linear escolheu: Dark + PP Neue Montreal gigante
Stripe escolheu: Light + Playfair Display editorial
Vercel escolheu: Monospace + Grid agressivo

SÍNTESE: 
- Usa modo claro como default (Stripe influence)
- Tipografia: Inter para body (comum), MAS serif experimental para h1 (novo, não cópia)
- Grid: simétrico mas quebrado em seções (Vercel influence, refined)
- Animações: funcionais, não gratuitas (todos 3)
- Voice: direto, sem excesso (todos 3)
- Inovação: cores geométricas (nenhum dos 3 tinha)
```

---

## 3. ESTRUTURA COMPLETA DO JSON DO DESIGN SYSTEM

```json
{
  "schema_version": "2.0.0",
  "design_system_name": "NOME DO TEMA E EXECUÇÃO",
  "category": "SaaS / Fashion / Wellness / etc",
  "inspiration_sites": [
    {
      "site_name": "Site 1",
      "url": "url",
      "influence": "O que deste site entrou no DS final"
    },
    {
      "site_name": "Site 2",
      "url": "url",
      "influence": "O que deste site entrou"
    },
    {
      "site_name": "Site 3",
      "url": "url",
      "influence": "O que deste site entrou"
    }
  ],
  
  "synthesis_notes": "Parágrafo de 100-150 palavras explicando por que essa combinação funcionada e o que torna este DS único",
  
  "colors": {
    "primary": "#HEX",
    "secondary": "#HEX",
    "tertiary": "#HEX (se aplicável)",
    "surface": "#HEX",
    "surface_alt": "#HEX (se aplicável)",
    "text_primary": "#HEX",
    "text_secondary": "#HEX",
    "text_muted": "#HEX",
    "border": "#HEX",
    "error": "#HEX",
    "success": "#HEX",
    "warning": "#HEX",
    "neutral_scale": {
      "50": "#HEX",
      "100": "#HEX",
      "200": "#HEX",
      "300": "#HEX",
      "400": "#HEX",
      "500": "#HEX",
      "600": "#HEX",
      "700": "#HEX",
      "800": "#HEX",
      "900": "#HEX"
    },
    "color_usage_guide": {
      "primary": "CTAs, highlights, primary actions",
      "secondary": "Supporting elements, secondary CTAs",
      "surface": "Backgrounds, cards",
      "text_primary": "Headlines, body text",
      "text_secondary": "Subtext, metadata",
      "neutral_scale": "Borders, dividers, subtle backgrounds"
    },
    "contrast_verification": {
      "primary_on_surface": "AAA (4.5:1 or higher for text)",
      "secondary_on_surface": "AA (3:1 or higher for text)",
      "note": "All color combinations must pass WCAG AA minimum"
    }
  },
  
  "typography": {
    "heading_font": "Font Name (Google Fonts preferred)",
    "body_font": "Font Name (Google Fonts preferred)",
    "mono_font": "Font Name (JetBrains Mono, IBM Plex Mono, etc) — optional",
    "accent_font": "Font Name — optional, use sparingly",
    "base_size": "16px (never smaller for body on desktop)",
    "scales": {
      "mobile": {
        "h1": "2rem (32px)",
        "h2": "1.5rem (24px)",
        "h3": "1.25rem (20px)",
        "h4": "1.125rem (18px)",
        "body": "1rem (16px)",
        "small": "0.875rem (14px)",
        "line_height": "1.4-1.5 for headings, 1.6 for body"
      },
      "tablet": {
        "h1": "3rem (48px)",
        "h2": "2rem (32px)",
        "h3": "1.5rem (24px)",
        "h4": "1.25rem (20px)",
        "body": "1.063rem (17px)",
        "small": "0.938rem (15px)",
        "line_height": "1.4-1.5 for headings, 1.6 for body"
      },
      "desktop": {
        "h1": "3.5rem (56px)",
        "h2": "2.5rem (40px)",
        "h3": "1.875rem (30px)",
        "h4": "1.5rem (24px)",
        "body": "1.125rem (18px)",
        "small": "0.875rem (14px)",
        "line_height": "1.3-1.4 for headings, 1.6-1.7 for body"
      }
    },
    "font_weights": {
      "heading": "600, 700, or 800 (bold)",
      "body": "400 (regular) or 500 (medium)",
      "note": "Avoid light weights for body text; readability over aesthetics"
    },
    "letter_spacing": {
      "headings": "0 to -0.02em (tight kerning for impact)",
      "body": "0 to 0.02em (normal or slightly open)",
      "uppercase_small_caps": "0.1em to 0.15em"
    },
    "typography_usage": {
      "h1": "Page heroes, section openers, main headlines",
      "h2": "Section titles, subsection headers",
      "h3": "Card titles, subheaders",
      "h4": "Data labels, small headers",
      "body": "Paragraph text, navigation, form labels",
      "small": "Metadata, captions, footnotes"
    }
  },
  
  "spacing": {
    "base_unit": "8px (all spacing should be multiples of 8px)",
    "spacing_scale": {
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px",
      "xxl": "48px",
      "xxxl": "64px",
      "xxxxl": "80px"
    },
    "section_spacing": {
      "mobile": "48px top and bottom",
      "tablet": "64px top and bottom",
      "desktop": "80px top and bottom"
    },
    "padding": {
      "container_mobile": "16px left and right",
      "container_tablet": "32px left and right",
      "container_desktop": "48px left and right"
    },
    "container_max_width": "1240px (adjust based on grid philosophy)",
    "gutters": "16px (gap between columns in grid)",
    "component_padding": {
      "card": "24px",
      "button": "12px 24px (vertical/horizontal)",
      "input": "12px 16px",
      "section_header": "32px bottom"
    }
  },
  
  "borders": {
    "radius": {
      "none": "0px",
      "xs": "2px",
      "sm": "4px",
      "md": "8px",
      "lg": "12px",
      "xl": "16px",
      "full": "9999px (for pills)"
    },
    "radius_usage": {
      "buttons": "md or lg",
      "cards": "md or lg",
      "inputs": "sm or md",
      "images": "0px or lg (based on mood)",
      "containers": "0px, sm, or md"
    },
    "stroke_width": {
      "thin": "1px",
      "medium": "2px",
      "thick": "3px"
    },
    "border_color": "Use from neutral_scale[300] or [400]",
    "divider_style": "Prefer margin + subtle background over borders when possible"
  },
  
  "shadows": {
    "none": "none",
    "xs": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "sm": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    "shadow_usage": {
      "cards": "sm or md",
      "elevated_components": "md or lg",
      "modals": "lg or xl",
      "notes": "Use shadows to create depth, not to decorate. Prefer transparency + subtle borders."
    }
  },
  
  "motion": {
    "animations_enabled": "true (but respect prefers-reduced-motion)",
    "default_duration": "300-400ms for most interactions",
    "easing": {
      "standard": "cubic-bezier(0.4, 0, 0.2, 1) OR ease-in-out",
      "entrance": "cubic-bezier(0, 0, 0.2, 1) OR ease-out",
      "exit": "cubic-bezier(0.4, 0, 1, 1) OR ease-in"
    },
    "animation_patterns": [
      {
        "name": "Fade in on scroll",
        "duration": "400ms",
        "easing": "ease-out",
        "trigger": "Element enters viewport",
        "description": "Subtle opacity change from 0 to 1"
      },
      {
        "name": "Hover state shift",
        "duration": "200ms",
        "easing": "ease-out",
        "trigger": "User hovers over interactive element",
        "description": "Color shift + optional scale or shadow change"
      },
      {
        "name": "Page transition",
        "duration": "300ms",
        "easing": "ease-in-out",
        "trigger": "Navigation to new page",
        "description": "Fade out current + fade in next"
      },
      {
        "name": "Loading state",
        "duration": "2s",
        "easing": "linear",
        "trigger": "Data fetching",
        "description": "Subtle spinner or skeleton loader"
      }
    ],
    "motion_best_practices": [
      "Every animation must have purpose (not decoration)",
      "No parallax unless it's core to the experience",
      "Hover states should feel responsive (< 200ms)",
      "Avoid seizure-inducing flashes (no sudden opacity 0-1 changes)",
      "Test animations on low-end devices (performance matters)"
    ]
  },
  
  "components": {
    "buttons": {
      "variants": ["primary", "secondary", "ghost", "danger"],
      "sizes": ["sm (32px)", "md (40px)", "lg (48px)"],
      "states": ["default", "hover", "active", "disabled", "loading"],
      "styling": {
        "primary": {
          "bg": "colors.primary",
          "text": "colors.text_primary on primary (verify contrast)",
          "border": "none or thin border for definition",
          "hover": "Darken or lighten primary by 10-20% OR add shadow",
          "active": "Darken primary by 20-30%",
          "disabled": "Opacity 50% + cursor not-allowed"
        },
        "secondary": {
          "bg": "colors.surface_alt or transparent",
          "text": "colors.primary",
          "border": "1px colors.border",
          "hover": "colors.surface with border colors.primary",
          "active": "colors.primary with text colors.surface"
        },
        "ghost": {
          "bg": "transparent",
          "text": "colors.primary",
          "border": "1px colors.border",
          "hover": "Very subtle bg change (opacity 5-10% of primary)",
          "active": "colors.primary with opacity 20%"
        }
      }
    },
    "cards": {
      "padding": "spacing.lg or spacing.xl",
      "border": "1px colors.border OR no border + subtle shadow",
      "bg": "colors.surface or colors.surface_alt",
      "hover_state": "Scale 1.02 OR shadow upgrade OR bg shift",
      "title": "h3 or h4 (color: text_primary)",
      "description": "body (color: text_secondary)",
      "cta": "Optional button or link at bottom"
    },
    "inputs": {
      "padding": "12px 16px",
      "border": "1px colors.border",
      "border_radius": "borders.radius.sm or md",
      "focus_state": "outline 2px colors.primary with offset 2px",
      "disabled": "bg colors.neutral[100] + opacity 50%",
      "error": "border colors.error + hint text colors.error",
      "success": "border colors.success"
    },
    "navigation": {
      "layout": "Sticky header or fixed sidebar (your choice)",
      "items": "Max 7 items (more = dropdown)",
      "font": "typography.body_font, weight 500-600",
      "active_state": "Underline OR border-bottom OR highlight color",
      "mobile": "Hamburger menu or bottom nav",
      "cta_in_nav": "Always visible, high contrast"
    },
    "hero_section": {
      "height": "60-100vh (never less than 60vh)",
      "background": "Image, video, gradient, or solid color",
      "text_overlay": "h1 + subheadline + CTA (hierarchy clear)",
      "text_color": "Ensure contrast with background (AA minimum)",
      "cta_button": "Prominent, sticky if needed"
    },
    "footer": {
      "bg": "colors.surface_alt or darker",
      "layout": "Grid with columns (links, info, social, contact)",
      "text": "colors.text_secondary",
      "links": "colors.primary on hover",
      "copyright": "Small text, colors.text_muted"
    }
  },
  
  "voice_and_tone": {
    "brand_tone": "Describe the personality: e.g., 'confident, direct, technical but accessible'",
    "headline_style": "How should headlines read? 'Bold, no fluff' OR 'Playful, emoji-friendly' etc",
    "cta_phrasing": [
      "Example CTA 1: 'Get started free'",
      "Example CTA 2: 'Learn more'",
      "Example CTA 3: 'Join us'"
    ],
    "copy_length": "Short and punchy (< 150 chars for headlines) OR longer narrative?",
    "avoid_language": [
      "Avoid corporate jargon",
      "Avoid overpromising",
      "Avoid passive voice",
      "Avoid industry-specific acronyms without explanation"
    ],
    "use_language": [
      "Active voice",
      "Clear, specific benefits",
      "Conversational when appropriate",
      "Concrete numbers over vague claims"
    ]
  },
  
  "composition_and_layout": {
    "grid_system": "12-column grid OR custom grid (describe)",
    "layout_philosophy": "Is it symmetrical, asymmetrical, or magazine-like? Rigid or flexible?",
    "page_flow": [
      {
        "section": "Hero",
        "description": "Full-width hero with headline, subheadline, CTA",
        "spacing_below": "spacing.xxxl"
      },
      {
        "section": "Value Proposition",
        "description": "3-4 features/benefits in a grid or stacked layout",
        "spacing_below": "spacing.xxxl"
      },
      {
        "section": "Social Proof",
        "description": "Testimonials, logos, or case studies",
        "spacing_below": "spacing.xxxl"
      },
      {
        "section": "CTA Section",
        "description": "Final call-to-action with urgency or benefit",
        "spacing_below": "spacing.xxxl"
      },
      {
        "section": "Footer",
        "description": "Links, contact, social, copyright",
        "spacing_below": "0"
      }
    ],
    "image_treatment": "Photography style, filters, aspect ratios (describe in detail)",
    "density": "Is this sparse/breathing (high-end) or packed/efficient (utility)?"
  },
  
  "accessibility": {
    "wcag_level": "AA (minimum recommendation)",
    "color_contrast": {
      "heading_text": "Primary color on surface = AAA (4.5:1+)",
      "body_text": "Text color on background = AAA (4.5:1+)",
      "link_text": "Must be distinguishable from body text + underlined on hover"
    },
    "keyboard_navigation": "All interactive elements must be tab-accessible in logical order",
    "focus_indicators": "Visible focus outline (2px border) on all interactive elements",
    "alt_text": "All images must have descriptive alt text (not 'image' or 'pic')",
    "form_labels": "Every input must have associated <label>",
    "semantic_html": "Use <button>, <a>, <nav>, <header>, <main>, <footer> correctly",
    "mobile_accessibility": "Touch targets minimum 44px × 44px",
    "prefers_reduced_motion": "Respect user preference; disable non-essential animations"
  },
  
  "quality_checklist": {
    "visual_uniqueness": "This DS is NOT a copy of any single reference site? ✓",
    "functional_tested": "All components have been tested for usability? ✓",
    "mobile_responsive": "Works perfectly on 320px, 768px, and 1920px+ screens? ✓",
    "performance": "LCP < 2.5s, FID < 100ms, CLS < 0.1? ✓",
    "accessibility": "WCAG AA passed on colors, keyboard, focus states? ✓",
    "consistency": "All spacing, typography, colors follow the scale? ✓",
    "flexibility": "Can accommodate different content lengths and layouts? ✓"
  }
}
```

---

## 4. DOCUMENTAÇÃO DE SÍNTESE (MARKDOWN PREVIEW)

Para cada DS, crie um arquivo markdown `.md` que inclua:

```markdown
# Design System: [NOME]

## Tema
[Categoria/segmento]

## Filosofia
[Parágrafo explicando o DNA visual deste DS]

## Sites que inspiraram
1. **[Site 1]** — Influência: [o que deste site entrou aqui]
2. **[Site 2]** — Influência: [o que deste site entrou aqui]
3. **[Site 3]** — Influência: [o que deste site entrou aqui]

## Síntese e inovação
[Parágrafo de 100-200 palavras explicando por que essa combinação é poderosa e o que torna este DS único]

## Paleta de cores

### Primária
- **Primary:** #HEX — [uso]
- **Secondary:** #HEX — [uso]
- **Tertiary:** #HEX — [uso]

### Escala Neutra (50-900)
[Incluir tabela com cores]

### Recomendações de contraste
[Exemplos de combinações válidas]

## Tipografia

| Elemento | Font | Peso | Tamanho (Desktop) |
|----------|------|------|-------------------|
| H1 | Google Font | 700 | 56px |
| H2 | Google Font | 700 | 40px |
| Body | Google Font | 400 | 18px |

## Espaçamento

[Tabela ou visualização da scale 8px]

## Componentes

### Botões
- Primary: [descrição]
- Secondary: [descrição]
- Ghost: [descrição]

### Cards
[Descrição e uso]

### Inputs
[Descrição e estado de foco/erro]

### Navegação
[Descrição de layout e estados ativos]

## Animações

- **Fade in on scroll:** 400ms ease-out
- **Hover states:** 200ms ease-out
- **Page transitions:** 300ms ease-in-out

## Voz & Tone

**Tom:** [Descrição]
**CTAs:** [Exemplos]
**Evitar:** [Lista de o que NÃO fazer]

## Riscos evitados

- [Risco 1 + como mitigado]
- [Risco 2 + como mitigado]
- [Risco 3 + como mitigado]

## Casos de uso ideais

Este DS funciona melhor para:
- [Tipo de negócio 1]
- [Tipo de negócio 2]
- [Tipo de negócio 3]
```

---

## 5. INSTRUÇÕES PARA A IA (ENTREGÁVEL FINAL)

### Tarefa completa para a IA:

1. **Escolha 3 temas** (cliente escolhe OU você define)
2. **Para CADA tema:**
   - Pesquise os 3 sites premiados mais representativos (use web search)
   - Documente cores, tipografia, layout, animações de cada um
   - Identifique padrões comuns (o que funcionam em todos)
   - Identifique diferenças (o que cada um faz único)
   - Crie uma síntese: pega o melhor de cada um, adiciona inovação

3. **Gere o JSON completo** com todas as seções acima
4. **Crie o markdown preview** explicando a síntese
5. **Valide contra o checklist de qualidade**

### Output esperado:

```
Pasta Entrega/
├── tema-1/
│   ├── design-system-1.json
│   ├── design-system-1-preview.md
│   └── references-analyzed.md (sites pesquisados)
├── tema-2/
│   ├── design-system-2.json
│   ├── design-system-2-preview.md
│   └── references-analyzed.md
└── tema-3/
    ├── design-system-3.json
    ├── design-system-3-preview.md
    └── references-analyzed.md
```

---

## 6. ENTREGÁVEIS ADICIONAIS (ALÉM DO JSON)

### 6.1 Preview Visual / Mockup HTML

Para cada DS, crie um arquivo `design-system-X-visual-preview.html` que mostre:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design System: [NOME]</title>
  <style>
    /* Importar Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=[HeadingFont]:[weights]&family=[BodyFont]:[weights]&display=swap');
    
    :root {
      /* Colors */
      --color-primary: #HEX;
      --color-secondary: #HEX;
      --color-surface: #HEX;
      --color-text-primary: #HEX;
      --color-text-secondary: #HEX;
      
      /* Typography */
      --font-heading: '[HeadingFont]', sans-serif;
      --font-body: '[BodyFont]', sans-serif;
      
      /* Spacing */
      --space-xs: 4px;
      --space-sm: 8px;
      --space-md: 16px;
      --space-lg: 24px;
      --space-xl: 32px;
      
      /* Borders */
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 16px;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-body);
      color: var(--color-text-primary);
      background: var(--color-surface);
      line-height: 1.6;
    }
    
    h1, h2, h3 { font-family: var(--font-heading); }
    h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: var(--space-lg); }
    h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: var(--space-md); }
    h3 { font-size: 1.75rem; font-weight: 600; margin-bottom: var(--space-md); }
    
    .container { max-width: 1240px; margin: 0 auto; padding: 0 var(--space-lg); }
    .section { padding: var(--space-xxxl) 0; border-bottom: 1px solid var(--color-border); }
    
    /* Buttons */
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border: none;
      border-radius: var(--radius-md);
      font-family: var(--font-body);
      cursor: pointer;
      transition: all 300ms ease-out;
      text-decoration: none;
    }
    
    .btn-primary {
      background: var(--color-primary);
      color: white;
    }
    
    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    /* Cards */
    .card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      transition: all 300ms ease-out;
    }
    
    .card:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    /* Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
      margin-top: var(--space-lg);
    }
    
    /* Hero */
    .hero {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      color: white;
      padding: 100px var(--space-lg);
      text-align: center;
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-lg);
    }
  </style>
</head>
<body>
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="container">
      <h1>Seu Design System</h1>
      <p style="font-size: 1.25rem; margin-bottom: var(--space-lg);">Visualização completa de cores, tipografia e componentes</p>
      <button class="btn btn-primary">Começar agora</button>
    </div>
  </section>

  <!-- COLOR PALETTE -->
  <section class="section">
    <div class="container">
      <h2>Paleta de Cores</h2>
      <div class="grid">
        [Gerar cards com cores: primary, secondary, neutral scale 50-900]
        Cada card mostra:
        - Cor HEX
        - Uso (primary for CTAs, etc)
        - Contraste com texto
      </div>
    </div>
  </section>

  <!-- TYPOGRAPHY -->
  <section class="section">
    <div class="container">
      <h2>Tipografia</h2>
      <div class="grid">
        <div class="card">
          <h3>Headings</h3>
          <h1 style="margin-top: var(--space-md);">H1 — 56px, Bold</h1>
          <h2>H2 — 40px, Bold</h2>
          <h3>H3 — 30px, Semibold</h3>
        </div>
        <div class="card">
          <h3>Body Text</h3>
          <p>Body text 18px, Regular. Este é o tamanho padrão para paragrafos.</p>
          <p style="font-size: 14px;">Small text 14px para metadados e captions.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SPACING & BORDERS -->
  <section class="section">
    <div class="container">
      <h2>Espaçamento & Borders</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: var(--space-lg);">
        <tr>
          <th style="border-bottom: 1px solid var(--color-border); padding: var(--space-md); text-align: left;">Scale</th>
          <th style="border-bottom: 1px solid var(--color-border); padding: var(--space-md); text-align: left;">Valor</th>
          <th style="border-bottom: 1px solid var(--color-border); padding: var(--space-md); text-align: left;">Uso</th>
        </tr>
        [Gerar linhas com spacing scale: xs, sm, md, lg, xl, xxl, xxxl]
      </table>
    </div>
  </section>

  <!-- BUTTONS & COMPONENTS -->
  <section class="section">
    <div class="container">
      <h2>Componentes</h2>
      <div class="grid" style="margin-top: var(--space-lg);">
        <div>
          <h3 style="margin-bottom: var(--space-md);">Buttons</h3>
          <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-ghost">Ghost Button</button>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: var(--space-md);">Cards</h3>
          <div class="card">
            <h4>Card Title</h4>
            <p>Descrição do card com informações relevantes.</p>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: var(--space-md);">Inputs</h3>
          <input type="text" placeholder="Placeholder text" style="width: 100%; padding: var(--space-md); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-family: var(--font-body);">
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="background: var(--color-surface); border-top: 1px solid var(--color-border); padding: var(--space-lg); text-align: center;">
    <p style="color: var(--color-text-secondary);">&copy; 2026 Design System. Todos os direitos reservados.</p>
  </footer>
</body>
</html>
```

---

### 6.2 Guia de Componentes (Code Samples)

Crie um arquivo `design-system-X-components.md` com exemplos prontos:

```markdown
# Componentes: [Design System Name]

## Botões

### Primary Button
\`\`\`jsx
<button class="btn btn-primary">
  Começar agora
</button>

/* CSS */
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease-out;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
\`\`\`

### Secondary Button
\`\`\`jsx
<button class="btn btn-secondary">
  Saiba mais
</button>

/* CSS */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  padding: 12px 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease-out;
}

.btn-secondary:hover {
  background: var(--color-surface-alt);
  border-color: var(--color-primary);
}
\`\`\`

## Cards

### Standard Card
\`\`\`jsx
<div class="card">
  <img src="image.jpg" alt="Card image" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: var(--space-md);">
  <h3>Card Title</h3>
  <p>Descrição breve do conteúdo do card.</p>
  <a href="#" class="link">Saiba mais →</a>
</div>

/* CSS */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all 300ms ease-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
\`\`\`

## Inputs & Forms

### Text Input
\`\`\`jsx
<input 
  type="text" 
  placeholder="Digite aqui..." 
  class="input"
  aria-label="Email"
>

/* CSS */
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: all 300ms ease-out;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
}

.input:disabled {
  background: var(--color-neutral-100);
  opacity: 0.5;
  cursor: not-allowed;
}

.input.error {
  border-color: var(--color-error);
}
\`\`\`

## Navigation

### Sticky Header
\`\`\`jsx
<header class="header">
  <div class="container">
    <nav class="nav">
      <a href="/" class="nav-logo">Logo</a>
      <ul class="nav-menu">
        <li><a href="#" class="nav-link active">Home</a></li>
        <li><a href="#" class="nav-link">About</a></li>
        <li><a href="#" class="nav-link">Services</a></li>
        <li><a href="#" class="nav-link">Contact</a></li>
      </ul>
      <button class="btn btn-primary">Get Started</button>
    </nav>
  </div>
</header>

/* CSS */
.header {
  position: sticky;
  top: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) 0;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
}
\`\`\`

---

## Animações & Transitions

Todos os componentes acima usam transições suaves. Para componentes específicos:

### Fade In on Scroll
\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-scroll {
  animation: fadeIn 400ms ease-out forwards;
  opacity: 0;
}

/* JavaScript para trigger */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-scroll');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
\`\`\`

### Hover State Shift
\`\`\`css
.interactive-element {
  transition: all 200ms ease-out;
}

.interactive-element:hover {
  color: var(--color-primary);
  transform: translateY(-2px);
}
\`\`\`
```

---

### 6.3 Exemplo de Animações (CSS/JS)

Crie um arquivo `design-system-X-animations.css`:

```css
/* Motion Variables */
:root {
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 400ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}

/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn var(--duration-base) var(--ease-entrance) forwards;
}

/* Slide In (Y axis) */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-up {
  animation: slideInUp var(--duration-base) var(--ease-entrance) forwards;
}

/* Scale Up */
@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-up {
  animation: scaleUp var(--duration-base) var(--ease-entrance) forwards;
}

/* Hover State: Scale & Shadow */
.hover-lift {
  transition: all var(--duration-fast) var(--ease-standard);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Focus State Outline */
.focus-ring:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 6.4 Análise de Acessibilidade (WCAG AA Report)

Crie um arquivo `design-system-X-accessibility-report.md`:

```markdown
# Relatório de Acessibilidade: [Design System Name]

## WCAG 2.1 Level AA Compliance

### ✅ Verificações Passadas

#### Contraste de Cores
| Combinação | Razão | Padrão | Status |
|-----------|-------|--------|--------|
| Primary (#HEX) + Surface (#HEX) | 4.8:1 | AA (3:1) | ✅ PASS |
| Text Primary (#HEX) + Surface (#HEX) | 7.2:1 | AA (4.5:1) | ✅ PASS |
| Secondary (#HEX) + Surface (#HEX) | 3.5:1 | AA (3:1) | ✅ PASS |
| Error (#HEX) + Surface (#HEX) | 5.1:1 | AA (4.5:1) | ✅ PASS |

**Ferramenta:** WebAIM Contrast Checker, Stark (Figma plugin)

#### Navegação por Teclado
- ✅ Todos os botões, links e inputs são focáveis com TAB
- ✅ Ordem de tab lógica (top-to-bottom, left-to-right)
- ✅ Focus states visíveis (outline 2px, offset 2px)
- ✅ Nenhum trap de teclado

#### Texto Alternativo (Alt Text)
- ✅ Todas as imagens funcionais têm alt text descritivo
- ✅ Imagens decorativas têm alt="" (para screen readers ignorarem)
- ✅ Exemplo: `<img src="hero.jpg" alt="Team collaborating on design project">`

#### Etiquetas de Formulário
- ✅ Todos os inputs <input> têm <label> associada
- ✅ Uso de `for` attribute: `<label for="email">Email</label><input id="email" />`
- ✅ Required fields marcados com asterisco + aria-required="true"

#### Semântica HTML
- ✅ Uso correto de <button>, <a>, <nav>, <header>, <main>, <footer>
- ✅ Headings em ordem lógica (h1 → h2 → h3, sem saltos)
- ✅ Landmarks ARIA quando necessário (<main>, <aside>, <article>)

#### Redução de Movimento
- ✅ Respeitamos `prefers-reduced-motion` media query
- ✅ Animações não-essenciais são desabilitadas para usuários que preferem redução

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Tamanho de Alvo (Touch Targets)
- ✅ Botões: mínimo 44px × 44px
- ✅ Links: mínimo 44px altura (texto + padding)
- ✅ Espaçamento entre elementos: mínimo 8px

#### Responsividade
- ✅ Testado em 320px, 768px, 1024px, 1440px, 1920px
- ✅ Sem scroll horizontal em viewport padrão
- ✅ Texto não cortado em nenhuma resolução

### ⚠️ Considerações & Limitações

1. **Cores:** Este DS usa [PRIMARY COLOR]. Se um usuário tem daltonismo vermelho-verde, recomendamos adicionar ícones ou padrões para diferenciar estados além de cor.

2. **Fontes:** Heading font é [HEADING FONT]. Em baixa resolução (< 16px), pode ficar difícil de ler. Usar font-weight mínimo 600.

3. **Animações:** Hover states incluem transformações (scale, translate). Usuários com tremores podem ter dificuldade em ativar. Considerar aumentar duração ou usar área de clique maior.

### 🔍 Verificações Pendentes (Para Implementação)

- [ ] Teste com screen readers (NVDA, JAWS, VoiceOver)
- [ ] Teste com software de eye-tracking
- [ ] Teste com usuários reais (pessoas com deficiência visual, motora, cognitiva)

### 📋 Checklist Final

- [x] Contraste WCAG AA (mínimo 3:1 para UI, 4.5:1 para texto)
- [x] Navegação por teclado funcional
- [x] Focus states visíveis
- [x] Alt text em imagens
- [x] Semântica HTML correta
- [x] Respeita prefers-reduced-motion
- [x] Touch targets 44px+
- [x] Responsivo em todas as resoluções
- [ ] Testado com screen readers (fará em produção)

```

---

### 6.5 Benchmarking & Performance

Crie um arquivo `design-system-X-benchmarking.md`:

```markdown
# Benchmarking: [Design System Name]

## Conversão & Performance

### Por que este DS converte melhor

| Fator | Como este DS otimiza |
|-------|----------------------|
| **Hero Impact** | [Descrição de como o hero é impactante + CTA claro] |
| **Hierarquia Visual** | [Como a tipografia e espaçamento guiam o olho] |
| **Contraste** | [Cores que atraem atenção para elementos importantes] |
| **Mobile-First** | [Como responsividade é otimizada] |
| **Call-to-Action** | [CTAs são sticky, grandes, de cor contrastante] |

### Métricas de Performance

| Métrica | Meta | Tecnologia |
|---------|------|-----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Imagens otimizadas + lazy loading |
| **FID** (First Input Delay) | < 100ms | JS minificado + debouncing |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Reservar espaço para imagens, fonts loaded |
| **FCP** (First Contentful Paint) | < 1.8s | Critical CSS + async JS |

### SEO

- ✅ Meta tags estruturadas (Open Graph, Twitter Card)
- ✅ Sitemap.xml incluído
- ✅ Robots.txt otimizado
- ✅ Schema.org markup para estruturado data
- ✅ Mobile-friendly (100/100 Google PageSpeed)

### Casos de Uso Ideais

Este DS funciona melhor para:

1. **[Tipo de negócio 1]** — Porque [razão]
2. **[Tipo de negócio 2]** — Porque [razão]
3. **[Tipo de negócio 3]** — Porque [razão]

### Casos de Uso Não-Ideais

Evitar usar este DS para:

1. **[Tipo de negócio X]** — Porque [razão]
2. **[Tipo de negócio Y]** — Porque [razão]
```

---

### 6.6 Variações de Paleta

Crie um arquivo `design-system-X-color-variations.md`:

```markdown
# Variações de Paleta: [Design System Name]

Base Design System usa: [PRIMARY] + [SECONDARY]

## Variação 1: Modo Escuro

**Quando usar:** SaaS, plataformas noturnas, tech-forward

### Paleta Dark
- Surface: #1A1A1A
- Surface Alt: #252525
- Text Primary: #FFFFFF
- Text Secondary: #B3B3B3
- Primary: #[ADJUSTED HEX] (mais brilhante)
- Secondary: #[ADJUSTED HEX]

[Incluir preview visual da variação]

## Variação 2: Acessibilidade (High Contrast)

**Quando usar:** Usuários com baixa visão, ambientes exteriores

### Paleta High Contrast
- Primary: #000000
- Secondary: #FFFF00
- Surface: #FFFFFF
- Text: #000000

[Incluir preview visual]

## Variação 3: Corporativo

**Quando usar:** B2B, advocacy, finance

### Paleta Corporativa
- Primary: [DARKER VERSION]
- Secondary: [MUTED VERSION]
- Accent: Dourado ou prata sutil
- Tones: Mais conservadores

[Incluir preview visual]

## Variação 4: Energético

**Quando usar:** Startups, tech, creative

### Paleta Energética
- Primary: [BRIGHTER/SATURATED]
- Secondary: [COMPLEMENTARY COLOR]
- Accent: Neon ou vibrant color
- Tones: Bold, ousado

[Incluir preview visual]

## Variação 5: Minimal

**Quando usar:** Luxury, premium, minimalista

### Paleta Minimal
- Primary: [SUBTLE HEX]
- Secondary: [BARELY VISIBLE]
- Neutral Scale: Tons muito próximos
- Accent: Um único tom delicado

[Incluir preview visual]

---

## Guia de Seleção

Comece com a **paleta base**. Se precisar de adaptação:
- Marque a necessidade (dark mode? corporate? energy?)
- Selecione a variação correspondente
- Teste contraste WCAG AA
- Documente a escolha
```

---

### 6.7 Protótipo Responsivo

Crie um arquivo `design-system-X-responsive-guide.md`:

```markdown
# Guia Responsivo: [Design System Name]

Este Design System foi otimizado para mobile-first e funciona perfeitamente em todas as resoluções.

## Breakpoints

| Device | Width | CSS Media Query |
|--------|-------|-----------------|
| **Mobile** | 320px - 479px | `@media (max-width: 479px)` |
| **Tablet Small** | 480px - 767px | `@media (min-width: 480px)` |
| **Tablet** | 768px - 1023px | `@media (min-width: 768px)` |
| **Desktop** | 1024px - 1439px | `@media (min-width: 1024px)` |
| **Desktop XL** | 1440px+ | `@media (min-width: 1440px)` |

## Tipografia Responsiva

### H1

```css
/* Mobile: 32px */
h1 { font-size: 2rem; }

/* Tablet: 40px */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
}

/* Desktop: 56px */
@media (min-width: 1024px) {
  h1 { font-size: 3.5rem; }
}
```

### Body

```css
/* Mobile: 16px */
body { font-size: 1rem; }

/* Tablet: 17px */
@media (min-width: 768px) {
  body { font-size: 1.063rem; }
}

/* Desktop: 18px */
@media (min-width: 1024px) {
  body { font-size: 1.125rem; }
}
```

## Layout Responsivo

### Hero Section

```css
/* Mobile */
.hero {
  padding: 60px 16px;
  min-height: 50vh;
  text-align: center;
}

/* Tablet */
@media (min-width: 768px) {
  .hero {
    padding: 80px 32px;
    min-height: 60vh;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    padding: 100px 48px;
    min-height: 80vh;
  }
}
```

### Grid / Cards

```css
/* Mobile: 1 coluna */
.grid {
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet: 2 colunas */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Desktop: 3 colunas */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

## Navegação Responsiva

### Desktop
- Horizontal menu
- Logo + nav items + CTA button

### Mobile
- Logo + hamburger menu
- Drawer navigation (slide from left/right)
- Sticky header

```html
<!-- Mobile Navigation -->
<button class="menu-toggle" aria-label="Open menu">
  <span></span><span></span><span></span>
</button>

<nav class="nav-drawer" style="display: none;">
  <!-- Items -->
</nav>

<script>
const toggle = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.nav-drawer');

toggle.addEventListener('click', () => {
  drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
});
</script>
```

## Touch Targets

- ✅ Botões: 44px × 44px mínimo (mobile)
- ✅ Links: 44px altura mínimo
- ✅ Espaçamento entre elementos: 8px mínimo

## Imagens Responsivas

```html
<!-- Use srcset para servir imagens otimizadas por tamanho -->
<img
  src="image-medium.jpg"
  srcset="
    image-small.jpg 320w,
    image-medium.jpg 768w,
    image-large.jpg 1024w,
    image-xl.jpg 1440w
  "
  sizes="
    (max-width: 479px) 100vw,
    (max-width: 767px) 90vw,
    (max-width: 1023px) 80vw,
    1240px
  "
  alt="Descriptive text"
>
```

## Testes Recomendados

- [x] iPhone SE (375px)
- [x] iPhone 12 (390px)
- [x] iPhone 14 Pro Max (430px)
- [x] iPad (768px)
- [x] iPad Pro (1024px)
- [x] MacBook (1440px+)
- [x] Desktop 4K (2560px)

Teste no Chrome DevTools: `Ctrl+Shift+M` (Windows) ou `Cmd+Shift+M` (Mac)
```

---

## 7. PERGUNTAS FINAIS ANTES DE COMEÇAR

**Você deve responder antes de passar o prompt:**

1. ✅ Quais são seus 3 temas/categorias?
   - Tema A: ___________
   - Tema B: ___________
   - Tema C: ___________

2. ✅ Quer que a IA pesquise sites reais (Awwwards, etc) OU você passa URLs específicas?

3. ✅ Quer JSON puro OU JSON + código React/Astro para preview visual?

4. ✅ Qual é o nível de detalhe esperado?
   - Light (cores + tipografia + composição básica)
   - Medium (+ componentes + animações)
   - Heavy (TUDO acima + guardrails, riscos, variações, code samples)

5. ✅ Quer que os DSs sejam otimizados para um segmento específico?
   - E-commerce?
   - SaaS?
   - Creative portfolios?
   - Ou genéricos/flexíveis?

---

## 8. RESUMO DE ENTREGÁVEIS COMPLETOS

Por cada Design System, você receberá:

```
/design-system-X/
├── design-system-X.json
│   └── JSON ultra-estruturado (500+ linhas)
│       ├── Tokens (cores, tipografia, spacing)
│       ├── Componentes (buttons, cards, inputs, nav, hero, footer)
│       ├── Motion & animações
│       ├── Acessibilidade (WCAG AA)
│       └── Guardrails & riscos evitados
│
├── design-system-X-preview.md
│   └── Documentação legível
│       ├── Filosofia do DS
│       ├── Sites que inspiraram + influências
│       ├── Paleta visual
│       ├── Tipografia
│       ├── Componentes base
│       └── Voice & tone
│
├── design-system-X-visual-preview.html
│   └── Página interativa mostrando:
│       ├── Hero section
│       ├── Paleta de cores (cards clicáveis)
│       ├── Tipografia ao vivo
│       ├── Spacing & borders
│       ├── Botões, cards, inputs
│       └── Footer (responsivo)
│
├── design-system-X-components.md
│   └── Code samples prontos
│       ├── Buttons (primary, secondary, ghost)
│       ├── Cards (com imagem, com hover)
│       ├── Inputs & forms (com focus/error states)
│       ├── Navigation (sticky header)
│       └── Copy-paste ready CSS/JSX
│
├── design-system-X-animations.css
│   └── Animações completas
│       ├── Fade in
│       ├── Slide in (Y axis)
│       ├── Scale up
│       ├── Hover lift
│       └── Respeita prefers-reduced-motion
│
├── design-system-X-accessibility-report.md
│   └── Auditoria WCAG AA
│       ├── Contraste de cores (com razões)
│       ├── Navegação por teclado
│       ├── Alt text em imagens
│       ├── Semântica HTML
│       ├── Touch targets (44px+)
│       └── Responsividade testada
│
├── design-system-X-benchmarking.md
│   └── Performance & conversão
│       ├── Métricas de conversão
│       ├── Core Web Vitals (LCP, FID, CLS)
│       ├── SEO readiness
│       ├── Casos ideais de uso
│       └── Casos a evitar
│
├── design-system-X-color-variations.md
│   └── 5 variações de paleta
│       ├── Dark mode
│       ├── High contrast
│       ├── Corporativo
│       ├── Energético
│       └── Minimal
│
├── design-system-X-responsive-guide.md
│   └── Mobile-first responsivo
│       ├── Breakpoints (320px - 2560px+)
│       ├── Tipografia responsiva (H1, body)
│       ├── Layout responsivo (grid, hero)
│       ├── Navegação responsiva (mobile menu)
│       ├── Código de exemplo
│       └── Testes recomendados
│
└── design-system-X-references.md
    └── Sites pesquisados
        ├── Site 1: URL, prêmios, padrões extraídos
        ├── Site 2: URL, prêmios, padrões extraídos
        ├── Site 3: URL, prêmios, padrões extraídos
        └── Análise de síntese
```

**Total por Design System:** ~2.500 linhas de documentação estruturada
**Total para 3 Design Systems:** ~7.500 linhas prontas para uso/implementação

---

## 9. COMO USAR ESTE PROMPT

### Opção A: Passar para outra IA

```
Copie TUDO este arquivo e passe para:
- Claude (api.anthropic.com)
- ChatGPT (openai.com)
- Gemini (google.com)
- Ou qualquer outro LLM

Instruções antes de colar:
1. Defina seus 3 temas (ver pergunta 1)
2. Responda as 5 perguntas finais
3. Cole o prompt completo
4. Aguarde a geração dos 3 DSs
```

### Opção B: Usar direto comigo (Claude)

```
Responda:
1. Seus 3 temas/categorias
2. As 5 perguntas finais
3. Eu pesquiso na web + gero tudo para você
```

---

## 10. EXEMPLO FINAL: O QUE VOCÊ RECEBERÁ

Quando você mandar os 3 temas, você receberá:

### Design System 1: [TEMA A]
- ✅ JSON completo
- ✅ Preview HTML
- ✅ Documentação markdown
- ✅ Code samples (copy-paste)
- ✅ Animações CSS
- ✅ Relatório WCAG AA
- ✅ Benchmarking
- ✅ 5 variações de cor
- ✅ Guia responsivo
- ✅ Referências (3 sites)

### Design System 2: [TEMA B]
- ✅ [Idem acima]

### Design System 3: [TEMA C]
- ✅ [Idem acima]

---

## 11. QUALIDADE GARANTIDA

Cada DS é validado contra:

- [ ] Originalidade? (Não é cópia de um único site)
- [ ] Funcionalidade? (Componentes fazem sentido)
- [ ] Design mundialmente? (Segue padrões premiados)
- [ ] Completude? (Nada falta)
- [ ] Acessibilidade? (WCAG AA passada)
- [ ] Responsividade? (Testado mobile → desktop)
- [ ] Pronto para uso? (Código funcionando, pronto para copiar/colar)

---

## 7. EXEMPLO DE ENTREGA (1 DS)

**Design System: "Minimal SaaS Power"**
- Tema: SaaS/Produtividade
- Inspirado em: Linear + Vercel + Stripe
- Síntese: Dark mode funcional + tipografia experimental + grid agressivo + animações micro
- JSON: 500+ linhas estruturadas
- Preview: Markdown + visual mockup
- Validação: ✅ Passa todos os 7 checkpoints

---

**Pronto para usar!** Copie esse prompt, defina seus 3 temas, responda as 5 perguntas, e passe para a IA.

Boa sorte! 🚀
