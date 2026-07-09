# Aurora Pilates & Movimento 2

Site one page M1 para cliente fictício Aurora Pilates & Movimento.

## Status

- Cliente criado em pasta isolada: `aurora-pilates-2`
- Modelo: M1 One Page
- Personalidade: B — Premium sofisticado
- Framework: Astro
- Build: aprovado
- Auditoria visual: `data/visual-quality-audit.json`

## Como Rodar

```bash
npm install
npm run dev
npm run build
npm run preview
```

Preview local usado na revisão:

```txt
http://127.0.0.1:4325/
```

Arquivo estático gerado:

```txt
dist/index.html
```

## Arquivos Principais

- `briefing/briefing-normalizado.md`
- `data/design-system.json`
- `data/final-design-system.json`
- `data/final-site-build-prompt.md`
- `data/content.json`
- `data/visual-quality-audit.json`
- `src/pages/index.astro`
- `src/styles/global.css`

## Mídia

Imagens provisórias geradas por IA:

```txt
public/assets/aurora-hero-studio.png
src/assets/aurora-hero-studio.png
public/assets/aurora-method-detail.png
src/assets/aurora-method-detail.png
public/assets/aurora-space-corner.png
src/assets/aurora-space-corner.png
```

Prompt usado:

```txt
photorealistic boutique pilates studio in Curitiba, premium calm interior, wooden reformer equipment, soft morning natural light, olive and warm off-white palette, linen textures, subtle plants, no visible logos, no exaggerated smiles, editorial luxury wellness photography, wide angle, cinematic but realistic
```

Pexels não foi usado nesta versão. Vídeo não foi usado porque o briefing informa que o vídeo real será enviado em até 5 dias.

## Redesign

A primeira versão foi reprovada visualmente e substituída por uma direção mais editorial:

- hero sem faixa pesada de estatísticas;
- primeira dobra travada em `height: 100vh/100svh/100dvh`, cobrindo 100% da altura e largura do navegador sem a próxima seção visível antes do scroll;
- seção de método com imagem de ajuste técnico;
- bloco escuro de serviços;
- seção imersiva do espaço;
- depoimentos em grid editorial;
- CTA final redesenhado como faixa editorial full-width, sem card escuro centralizado;
- Astro Dev Toolbar desativada no preview local.

## Motion E Hover

Refinamento aplicado apenas neste cliente:

- entrada mais suave do header, hero, imagem e nota editorial;
- revelação de seções por scroll com fallback e suporte a `prefers-reduced-motion`;
- hover em botões com elevação curta e sombra mais premium;
- hover em imagens com zoom lento e ajuste sutil de saturação;
- hover em serviços, depoimentos, cards e bloco de localização sem mudar layout.

Capturas novas da revisão:

```txt
data/visual-review/motion-final-desktop-settled.png
data/visual-review/motion-final-mobile-settled.png
data/visual-review/motion-final-desktop-scrolled-review.png
data/visual-review/motion-final-mobile-scrolled-review.png
```

## Pendências Antes De Publicar

- Confirmar domínio.
- Confirmar se o endereço completo deve aparecer publicamente.
- Receber CNPJ.
- Trocar mídia IA por fotos reais da fachada, equipe e vídeo curto quando chegarem.
- Revisar vulnerabilidades transitivas do `npm audit` antes de produção, sem usar `audit fix --force` automaticamente.

## Revisão Visual

Foram revisados:

- 320px
- 390px
- 768px
- 1024px
- 1440px

Resultado final:

- zero overflow horizontal;
- sem erros de console;
- imagens carregadas;
- CTA principal funcional;
- menu mobile com `aria-expanded`;
- build Astro aprovado.
