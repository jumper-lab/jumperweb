# Benchmarking — 06-3 Agência Criativa

Análise de conversão, performance e casos ideais derivados do JSON.

---

## 1. Casos ideais (Ideal For)

### ✓ Agência criativa e estúdio de design

**Descrição:** Agências que vendem criatividade, inovação visual e pensamento estratégico.

**Por que funciona:**
- **Hero sem CTA cria curiosidade** — o visitante é puxado a scrollar para entender a proposta
- **Narrativa cinematográfica é prova de criatividade** — se você consegue contar uma história em video/scroll, você consegue contar a história do cliente
- **Voice de manifesto atrai decisores** — não vende preço ou "soluções"; vende **visão**
- **Painéis de trabalho com tilt 3D** aumentam exploração (proxy de intenção/comprometimento)
- **Um depoimento cinematográfico em tela cheia** vale mais que uma grade de dez — autoridade por seleção, não por volume

**Casos de sucesso:**
- Agência que trabalha com startups ou marcas criativas
- Estúdio que foca em direção de arte, branding ou design thinking
- Agência que quer se diferenciar por qualidade, não por catálogo

**Conversão esperada:** 3–8% (leads qualificados)

---

### ✓ Gravadora e selo musical independente

**Descrição:** Labels que querem comunicar identidade artística, conectar com artistas e diferenciar-se de majors.

**Por que funciona:**
- **Full-screen storytelling** é natural em música — cada capítulo é uma faixa, cada seção um clipe
- **Numerais de capítulo em parallax** lembram album covers animados ou visuais de concert
- **Marquee "Vamos criar juntos"** funciona como um hook musical repetido
- **Voice de manifesto** communica valores artísticos: "Não seguimos tendência. A gente grava a próxima."
- **Paleta roxo + preto** é icônica em cena indie/experimental (referência: Obys Agency, estúdios de tipografia experimental)

**Casos de sucesso:**
- Label focado em artistas emergentes que quer um site além de Spotify
- Coletivo de produtores que precisa de espaço para storytelling
- Selo que usa web como extension do projeto artístico, não como catálogo

**Conversão esperada:** 2–5% (artistas em contato, pitches, partnerships)

---

### ✓ Produtora audiovisual

**Descrição:** Empresas de vídeo, cinema, animação ou efeitos visuais.

**Por que funciona:**
- **Narrativa cinematográfica é linguagem nativa** — storyboard visual já está no DNA
- **Page transitions épicas (1200ms)** mimetizam transições de cena
- **Glitch e distorção são pontuação, não ruído** — comunica "somos editores, entendemos montagem"
- **Full-screen work panels alternados** parecem um reel em movimento
- **Depoimentos com aspas gigantes** lembram legendas de filme
- **Manifesto com scroll-reveal** é um storyboard interativo

**Casos de sucesso:**
- Produtora que quer mostrar motion design, animation ou vfx
- Estúdio de pós-produção que precisa comunicar expertise técnica via arte
- Coletivo de cineastas freelance que usa web como galeria de curtas

**Conversão esperada:** 4–10% (projetos comerciais, diretos de clientes criativos)

---

### ✓ Coletivo de arte, design/tipografia experimental

**Descrição:** Grupos ou solo artists que trabalham em tipografia, arte digital, install ou curation.

**Por que funciona:**
- **DM Serif Display gigante é a imagem** — tipografia como protagonista (referência: Migra, Helvetica Now)
- **Preto profundo com roxo elétrico** é paleta premium de experimentação
- **Zero catálogo: narrativa em vez de grid** comunica "somos processo, não produto"
- **Foco em mood/vibe** em vez de "buy now" atrai público colecionador, museus, festivals
- **Manifesto é a coleção** — em vez de descrever peças, você describe filosofia

**Casos de sucesso:**
- Typografia que quer sair do Behance e ter presença own-media
- Coletivo de visual artists que trabalha em exposições, não clientes comerciais
- Studio de design que vende consultoria/direção de arte, não produtos

**Conversão esperada:** 1–3% (convites para exposições, palestras, residências)

---

### ✓ Marcas criativas (freelancer DAs, criativos independentes)

**Descrição:** Direção de arte freelance, creative director solo, art director em transição.

**Por que funciona:**
- **Voice pessoal é vantagem** — manifesto em primeira pessoa comunica expertise sem ego
- **Narrativa ao invés de grid** diferencia de portfolios padrão (Dribbble, Behance)
- **Depoimento único e honesto** é mais potente que dez resenhas genéricas
- **Paleta roxo + preto** é "signature" — clientes lembram, buscam por "aquela agência roxa"
- **CTA final "Vamos criar juntos"** posiciona como parceiro, não freelancer

**Casos de sucesso:**
- DA que quer sair de agências grandes e attrair startups direto
- Criativo que tem clientes recorrentes e quer consolidar brand pessoal
- Freelancer que quer elevar precificação comunicando expertise via narrativa

**Conversão esperada:** 5–12% (leads com orçamento, projetos maiores)

---

## 2. Fatores de conversão (Conversion Factors)

### Fator 1: Hero sem CTA cria curiosidade e empurra para o scroll

**Hipótese:** Visitante chega, vê headline gigante em preto/roxo, **não tem botão**, precisa scrollar para entender a proposta.

**Impacto:**
- ✓ Aumenta tempo na página (proxy de engajamento)
- ✓ Força o encontro com manifesto e case studies (prova de trabalho)
- ✓ Cria "conversão por narrativa" em vez de "clique imediato"
- ✗ Risco: bounce alto em mobile se UX for confusa

**Implementação:**
```html
<section class="hero">
  <h1>Fazemos marcas inesquecíveis.</h1>
  <!-- Indicador de scroll, SEM botão -->
  <p class="hero__indicator">role para começar</p>
</section>

<!-- Primeiro CTA só no clímax (CTA final) -->
<section class="cta-final">
  <h2>Vamos criar juntos</h2>
  <button class="btn btn-primary btn-lg">Comece um projeto</button>
</section>
```

**Métrica:** Razão cliques no CTA final / cliques no navegação = 0.7–0.9 (70–90% das conversões vêm no final)

---

### Fator 2: Um depoimento cinematográfico em tela cheia vale mais que uma grade de dez

**Hipótese:** Qualidade > quantidade. Uma citação bem escolhida, tipografia gigante, sem contexto de "review site" (Trustpilot, G2), comunica mais credibilidade.

**Impacto:**
- ✓ Depoimento ocupa 100vh inteiro — saliência, impacto visual
- ✓ Sem "5⭐ de 127 reviews" — foca em voz, não em número
- ✓ Citação cinematográfica (aspas outline gigantes) é memorável
- ✗ Risco: parecer "fake" se muito curado; sempre cite nomes reais

**Implementação:**
```html
<section class="testimonial">
  <blockquote class="testimonial__quote">
    <p>Não é só uma agência. É parceira de verdade que entende sua visão.</p>
  </blockquote>
  <cite>— Diretor de marca, gravadora independente</cite>
</section>
```

**Métrica:** Taxa de clique para contato APÓS seção de depoimento = 2–3× mais alta que média

---

### Fator 3: Painéis de trabalho com hover 3D aumentam exploração de cases

**Hipótese:** Tilt 3D no hover é raro em portfolios. Usuários exploram mais cards quando há feedback visual (perspectiva, sombra, borda roxa).

**Impacto:**
- ✓ Aumenta tempo médio por card (explora hover, lê descrição)
- ✓ Tilt 3D sinaliza "elemento interativo" (affordance)
- ✓ Case studies com imagem + hover são 40% mais explorados
- ✗ Risco: parallax em mobile pode confundir; desativar em touch

**Implementação:**
```html
<div class="work-panel">
  <div class="work-panel__image"></div>
  <h3>Projeto 1</h3>
  <p>Metadados...</p>
</div>

<script>
document.querySelectorAll('.work-panel').forEach(panel => {
  panel.addEventListener('mousemove', (e) => {
    const rect = panel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * 4;
    const rotateY = ((x / rect.width) - 0.5) * -4;
    
    panel.style.transform = 
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  panel.addEventListener('mouseleave', () => {
    panel.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  });
});
</script>
```

**Métrica:** Cliques em "Ver projeto" / painéis vistos = 15–25% (vs. 5–10% em cards estáticos)

---

### Fator 4: Marquee de contato mantém a ação seguinte sempre visível

**Hipótese:** Faixa "Vamos criar juntos —" rolando acima do footer é um call-to-action constante, não invasivo.

**Impacto:**
- ✓ Usuário vê CTA secondary sem deixar o site (vs. popup intrusivo)
- ✓ Repetição de "criar juntos" reforça voice (marca cognitiva)
- ✓ Clicável → leva direto para contato (conversão rápida)
- ✗ Risco: parecer spam se muito rápido ou agressivo; respeitar reduced-motion

**Implementação:**
```html
<div class="pre-footer">
  <a href="#contato" class="marquee">
    <p class="marquee__text">Vamos criar juntos — Vamos criar juntos —</p>
  </a>
</div>

<style>
  .marquee__text {
    animation: marquee-scroll 18s linear infinite;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .marquee__text {
      animation: none;
      text-align: center;
    }
  }
</style>
```

**Métrica:** Cliques em marquee / cliques totais em CTAs = 8–12%

---

### Fator 5: Voice de manifesto filtra leads — atrai decisores que compram visão, não preço

**Hipótese:** Tom afirmativo, primeira pessoa, vocabulário de cinema não atrai todo mundo — atrai os certos.

**Exemplos:**
- ✓ "Fazemos marcas inesquecíveis." — afirmação, risco, visão
- ✓ "Toda marca tem um filme dentro dela. A gente dirige." — proprietária, clara
- ✓ "Não seguimos tendência. A gente grava a próxima." — valor, diferença
- ✗ "Soluções integradas de branding" — corporativo, genérico

**Impacto:**
- ✓ Leads que entram já compram a filosofia, reduz sales friction
- ✓ Menos RFQs genéricos ("quanto custa uma logo?")
- ✓ Clientes qualificados = projeto melhor, reputação melhor
- ✗ Risco: alguns visitantes se afastam por tom não amigável

**Implementação:**
```html
<section class="manifesto">
  <h2>Nossa filosofia</h2>
  <p class="manifesto__text">
    Não fazemos <span class="manifesto-word highlight">soluções genéricas</span>.
    Cada marca tem <span class="manifesto-word highlight">uma história</span> que a gente grava.
  </p>
</section>
```

**Métrica:**
- RFQ %: 30–40% (vs. 70% em site corporativo)
- Lead quality score (1–10): 7.5–9 (vs. 4–5)
- Close rate: 25–40% (vs. 10–15%)

---

## 3. Core Web Vitals — Performance

### LCP (Largest Contentful Paint) < 2.5s ✓

**Estratégia:** H1 como hero é texto puro (sem imagem, sem JavaScript bloqueante).

```html
<!-- Good: H1 é apenas texto -->
<h1 class="hero__title">Fazemos marcas inesquecíveis</h1>

<!-- Fonts preload -->
<link rel="preload" as="font" href="/fonts/dm-serif-display.woff2" type="font/woff2" crossorigin>
<link rel="preload" as="font" href="/fonts/space-grotesk.woff2" type="font/woff2" crossorigin>

<!-- font-display: swap (não bloqueia texto) -->
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet">
```

**Resultado esperado:** LCP = 1.2–1.8s (texto puro carrega instantaneamente)

---

### INP (Interaction to Next Paint) < 100ms ✓

**Estratégia:** Listeners de scroll passivos; tilt 3D com requestAnimationFrame (não JavaScript bloqueante).

```javascript
// ✓ Passivo (não bloqueia scroll)
window.addEventListener('scroll', updateProgressBar, { passive: true });

// ✓ RequestAnimationFrame (alinha com refresh rate)
function updateTilt() {
  requestAnimationFrame(updateTilt);
  // Cálculo de rotação...
}

// ✗ Evitar: event listeners síncronos pesados
// window.addEventListener('scroll', () => {
//   recalculateLayout(); // BLOQUEIA SCROLL
// });
```

**Resultado esperado:** INP = 40–80ms (smooth interactions, especialmente em tilt 3D)

---

### CLS (Cumulative Layout Shift) < 0.1 ✓

**Estratégia:** `aspect-ratio` fixo em todo painel de imagem; fontes com `size-adjust` para fallbacks métricos.

```css
/* ✓ Aspect ratio fixo — sem shift quando imagem carrega -->
.work-panel__image {
  aspect-ratio: 16 / 10;
}

/* ✓ Fallback métrico — height estável mesmo antes font carregar -->
h1 {
  font-family: 'DM Serif Display', Georgia, serif;
  font-size-adjust: 0.5; /* Compensa size-adjust de fallback */
}
```

**Resultado esperado:** CLS = 0.05–0.08 (praticamente nenhum shift)

---

## 4. SEO e Descoberta

### Meta tags obrigatórias

```html
<head>
  <title>Agência Criativa — Design e Audiovisual</title>
  
  <meta name="description" content="Agência criativa focada em narrativa cinematográfica. Marcas, audiovisual, tipografia experimental. Vamos criar juntos.">
  
  <meta property="og:title" content="Agência Criativa">
  <meta property="og:description" content="Design, audiovisual e narrativa cinematográfica.">
  <meta property="og:image" content="/hero-og.jpg">
  <meta property="og:url" content="https://suaagencia.com">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Agência Criativa">
  <meta name="twitter:description" content="Design, audiovisual e narrativa cinematográfica.">
  <meta name="twitter:image" content="/hero-twitter.jpg">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0A0A0A">
  
  <link rel="canonical" href="https://suaagencia.com">
</head>
```

### Schema markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agência Criativa",
  "url": "https://suaagencia.com",
  "logo": "https://suaagencia.com/logo.svg",
  "description": "Agência criativa focada em narrativa cinematográfica",
  "sameAs": ["https://instagram.com/suaagencia", "https://linkedin.com/company/suaagencia"],
  "areaServed": ["BR", "LATAM"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "ola@suaagencia.com.br"
  }
}
```

### Palavras-chave estratégicas

- **Primárias:** "agência criativa", "estúdio de design", "produtora audiovisual"
- **Secundárias:** "branding", "identidade visual", "design narrativo", "tipografia experimental"
- **Long-tail:** "agência criativa São Paulo" (se local), "design de audiovisual independente"

**Estratégia:** Incorporar em:
- H1, H2, H3 (natural)
- Meta description
- Primeira linha de cada seção
- Alt text de imagens

---

## 5. Casos de uso PROIBIDOS (Don't Use)

### ✗ Lojas de comércio eletrônico

Motivo: Paleta escura, narrativa de "um por tela", fullscreen sections = difícil para browsing de catálogo. Usuários esperam grid de produtos, filtros, comparação rápida.

**Melhor:** DS 02 (acolhedor-familiar) ou DS 04 (minimalista-corporativo)

---

### ✗ SaaS ou plataformas com muitos CTAs

Motivo: Voice de manifesto é "nos" (agência), não "você" (usuário). Funcionalidades da app precisam de botões em múltiplos lugares; narrativa linear desorienata.

**Melhor:** DS 01 (startup-assumido) ou DS 04 (minimalista-corporativo)

---

### ✗ Conteúdo corporativo/finance/legal

Motivo: Roxo elétrico, glitch, page transitions épicas = desconexo. Clientes de corporate law ou fintech esperam confiança, estabilidade, clareza.

**Melhor:** DS 04 (minimalista-corporativo) ou DS 05 (premium-clássico)

---

### ✗ Blog ou publicação de notícias

Motivo: Fullscreen storytelling quebra lógica de "ler mais de um artigo por página". Usuários scrollam para ver múltiplos headlines, não para enterrar-se em narrativa única.

**Melhor:** DS 01 (startup-assumido) ou esquema padrão Wordpress

---

### ✗ Suporte/help center ou FAQ

Motivo: Voice narrativo + full-screen sections = lógica invertida. Usuários com problema querem buscar/filtrar FAQ rápido, não ler manifesto.

**Melhor:** Documentação linear, searchable, flat structure

---

## 6. Tabela resumida: Quando usar 06-3

| Caso | Encaixa? | Razão |
|------|----------|-------|
| Agência criativa | ✅ **SIM** | Narrativa = prova de criatividade |
| Gravadora indie | ✅ **SIM** | Full-screen = álbum animado |
| Produtor audiovisual | ✅ **SIM** | Cinematografia é linguagem nativa |
| Artista/coletivo | ✅ **SIM** | Manifesto + voice pessoal |
| Freelancer DA | ✅ **SIM** | Diferencia de portfolio padrão |
| Loja e-commerce | ❌ **NÃO** | Grid de produtos não cabe em fullscreen |
| SaaS B2B | ❌ **NÃO** | Muitos CTAs e features; voice não é "você" |
| Fintech/Legal | ❌ **NÃO** | Paleta/tone = risco em contexto conservador |
| Blog/Notícias | ❌ **NÃO** | Linearidade quebra UX de múltiplas histórias |
| Help Center | ❌ **NÃO** | Searchability > narrativa |

---

## 7. Recomendações de implementação

1. **Teste A/B o hero:** "Com CTA" vs. "Sem CTA" — medir taxa de scroll até manifesto
2. **Rastreie cliques em glitch:** Máximo 2 glitch por página; se mais de 30% clicam, expanda
3. **Monitor marquee:** Se > 15% clicam, aumentar duração/visibilidade
4. **Depoimento selecionado:** Trocar trimestral; sempre com nome real + contexto
5. **Analytics:** Goal 1 = clique no CTA final; Goal 2 = visualização de 3+ trabalhos; Goal 3 = contato

---

## 8. Métricas de sucesso

| Métrica | Target | Ferramenta |
|---------|--------|-----------|
| LCP | < 2.5s | Lighthouse, CrUX |
| INP | < 100ms | Chrome UX Report |
| CLS | < 0.1 | Web Vitals JS |
| Bounce rate | 30–40% | Google Analytics |
| Avg. session duration | 2–3 min | Google Analytics |
| Scroll depth (páginas) | 70% atingem 50% da página | Hotjar, Microsoft Clarity |
| Conversion (contato) | 3–8% | UTM params, CRM |
| Return visitor rate | 8–15% | Google Analytics |
