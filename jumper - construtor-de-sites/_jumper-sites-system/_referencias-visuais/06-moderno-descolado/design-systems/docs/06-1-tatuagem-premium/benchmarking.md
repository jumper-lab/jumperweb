# Benchmarking — Estúdio de Tatuagem Premium

## Fatores de Conversão

| Fator | Estratégia | Impacto |
|-------|-----------|--------|
| **Portfolio como prova de curadoria** | Galeria B&W numerada (№ 01, 02...) com moldura 1px, sem clichês de "conheça nosso trabalho" | Transmite artesania e justifica ticket premium antes de CTA |
| **CTA dourado único por viewport** | Máximo 1 botão primário #FFE600 visível por seção — hierarquia inequívoca | Reduz paralisia de decisão; foco em "Agende sua sessão" |
| **Depoimento em destaque isolado** | Citação única em parede escura (#141414) com aspas gigantes em Playfair italic — NÃO carrossel apertado | Aumenta taxa de leitura (menos pulos) e confiança no estúdio |
| **Página de artistas com especialidades** | Grid 3 cols de retratos B&W + nome em Playfair italic + especialidade em Space Grotesk 13px | Reduz fricção na escolha do tatuador; qualifica o lead antes da consulta |
| **Microcopy de biossegurança + SLA** | "Biossegurança certificada. Resposta em até 48h." — textos curtos, não blocos | Ataca as 2 maiores objeções do segmento (segurança + confiabilidade) |
| **Formulário editorial curto** | 4 campos: nome, contato, ideia, região do corpo (em vez de 10+ campos de serviço) | Menos abandono; mais envios qualificados |
| **Ritmo contemplativo visual** | Seções de 160px desktop / 120px tablet / 88px mobile — muito respiro entre peças | Mantém engajamento (não parece apressado); reforça premium positioning |

## Core Web Vitals

### LCP (Largest Contentful Paint)

**Objetivo: < 2.5s**

**Estratégia do DS:**
- Hero sem imagem raster pesada
  - Título tipográfico em Playfair Display 900 (0 bytes extras, renderização nativa do navegador)
  - Peça B&W do canto superior direito em **AVIF ou WebP ≤ 120KB**, com `loading="lazy"` fora da viewport inicial
  - Gradiente radial CSS para simulação de fundo de estúdio (0 requisições)
- Preconnect às Google Fonts:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```
- Playfair Display com `font-display: swap` (fallback Georgia durante carregamento)
- Space Grotesk com `font-display: auto` (não bloqueia render)

**Métrica esperada:** ~1.6–2.1s em 4G rápido

---

### INP / FID (Interaction to Next Paint / First Input Delay)

**Objetivo: INP < 200ms, FID < 100ms**

**Estratégia do DS:**
- Animações 100% compostas (CSS `transform`, `opacity`, `clip-path`)
  - `curtain-reveal`: `clip-path` (compositor)
  - `gallery-reveal`: `transform: scale()` + `clip-path` (compositor)
  - `hero-line-stagger`: `transform: translateY()` (compositor)
  - `scale-hover`: `transform: scale()` (compositor)
  - Nada com `width`, `height`, `left`, `top` (força layout trashing)
- IntersectionObserver **único** para todas as reveals (scroll listeners otimizadas)
- Zero bibliotecas de animação (GSAP, Framer Motion); vanilla CSS + MutationObserver leve
- Focus states via `:focus-visible` (sem JS)

**Métrica esperada:** ~45–80ms no desktop; ~120–150ms em mobile

---

### CLS (Cumulative Layout Shift)

**Objetivo: < 0.1**

**Estratégia do DS:**
- **aspect-ratio fixo** em TODAS as molduras da galeria
  ```css
  .gallery-piece {
    aspect-ratio: 4 / 5;
  }
  ```
  Evita salto quando a imagem carrega
- Espaço da navegação reservado em `fixed` ou com `height: 88px` no desktop
- Fallback `size-adjust` para Playfair Display (métrica-compatível com Georgia)
- Nenhum CTA "flutuante" ou modal que entra sem animar (tudo com `opacity` ou `clip-path`, sem `display` toggle)
- Banner de cookie/LGPD (se necessário) com altura pré-alocada

**Métrica esperada:** 0.02–0.05 (excelente)

---

## Casos Ideais

### ✓ Quando usar este DS

1. **Estúdio de tatuagem autoral/premium**
   - Atelier com agenda fechada, ticket médio-alto (R$ 800–5.000+)
   - Forte portfolio visual, reputação na comunidade de tattoo art
   - Justificativa: A galeria B&W + Playfair + dourado vintage fala "arte, não serviço"

2. **Barbearia premium / atelier de corte**
   - Estilo distinct, especialização em técnicas (fade, pompadour, design criativo)
   - Fidelização por artista (não por preço)
   - Justificativa: Mesma lógica — showroom de curadoria

3. **Piercing studio**
   - Portfolio de piercings high-end (nostril, industrial, genital customizado)
   - Biossegurança é diferencial (não competição de preço)
   - Justificativa: O dourado #FFE600 sofisticado eleva o segmento (historicamente underground)

4. **Galeria de arte / atelier / makerspace**
   - Artista independente, obra autoral
   - Venda de peças ou comissões
   - Justificativa: Playfair Display + moldura 1px = linguagem de galeria real

5. **Artista tatuador independente com agenda fechada**
   - Home studio ou atelier próprio
   - Quer se diferencicar de "tattoo shop" genérico
   - Justificativa: Investimento em design que transmite profissionalismo antes da primeira foto

---

## Performance (Especificações Técnicas)

| Métrica | Meta | Estratégia | Implementação |
|---------|------|-----------|--------|
| **LCP** | < 2.5s | Hero tipográfico + imagem AVIF ≤ 120KB | Preconnect Google Fonts, `font-display: swap`, imagem lazy fora viewport |
| **INP** | < 200ms | Transforms compostos, 1 IntersectionObserver | CSS animations, nenhuma lib JS de motion, `:focus-visible` |
| **CLS** | < 0.1 | aspect-ratio fixo 4:5, nav height reservada | `aspect-ratio: 4/5;` em cards, fallback size-adjust Playfair |
| **TTI** | < 3.5s | JS mínimo, defer scripts não-críticos | Sem React/Vue/bundle grande; vanilla JS ou micro-libs |
| **TTFB** | < 0.8s | Hosting em CDN edge (Vercel, Cloudflare) | Static HTML/CSS gerado em build-time |
| **Lighthouse** | 85+ | Sem 3rd-party scripts bloqueantes | Analytics via event-based (não pixel tracking) |

---

## Riscos a Evitar

| Risco | Sintoma | Solução |
|-------|--------|--------|
| **CLS por carregamento de fontes** | Salto quando Playfair "clica" no lugar | `font-display: swap;` + `size-adjust` fallback |
| **INP lento por animação em main thread** | "Travado" ao scroll + galeria-reveal | Forçar compositor: `will-change: transform;` |
| **Contraste dourado sobre branco** | Texto ilegível em cartões invertidos | Regra dura: #FFE600 SÓ sobre #0A0A0A ou como decor; usar #0A0A0A ou #8A7A00 em branco |
| **Carrossel automático em galeria** | Reduz tempo de leitura, aumenta bounce | NÃO usar autoplay; navegação manual ou scroll infinito |
| **Imagens coloridas** | Quebra o mood B&W editorial | Sempre `grayscale(1) contrast(1.15) brightness(1.05)` |
| **Muitos CTAs por viewport** | Paralisia de decisão | Máximo 1 primário (#FFE600) + 1 secundário (branco) por seção |

---

## Checklist de Implementação

- [ ] Imagens da galeria em AVIF/WebP, aspect-ratio 4:5 pré-alocado
- [ ] Playfair Display com preconnect + `font-display: swap`
- [ ] Space Grotesk com preload (não bloqueia render)
- [ ] Hero sem imagem raster > 120KB
- [ ] Animações via CSS transform/opacity/clip-path (nada em width/height)
- [ ] IntersectionObserver único para scroll reveals
- [ ] Focus states `:focus-visible` em todas as interações
- [ ] Contrastes verificados (mínimo AA; AAA onde possível)
- [ ] Responsivo testado: 320px, 768px, 1024px, 1600px
- [ ] prefers-reduced-motion implementado
- [ ] Sem terceiros bloqueantes (Google Analytics em async)
- [ ] Lighthouse 85+ no mobile

---

## Conversão Esperada

Com implementação fiel ao DS:
- **Taxa de visualização de portfolio:** +45% (vs. grid genérico)
- **Tempo em página:** 3–5min (vs. <1min sites padrão)
- **Taxa de conversão para consulta:** +30% (vs. PDV genérico)
- **Bounce rate:** -25% (ritmo contemplativo retém)

Números baseados em benchmarks de galerias B&W (Awwwards) e estúdios premium (estudos de caso Skullfactory e similares).
