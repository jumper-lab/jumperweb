# Aurora Pilates & Movimento — Site

Site one page (M1) do studio boutique de pilates e movimento consciente em Batel, Curitiba.

## Como rodar

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

## Como fazer build

```bash
npm run build
```

Build estático em `dist/`.

## Estrutura

```
src/
├── layouts/Layout.astro    — Layout base com meta tags e skip-link
├── pages/index.astro       — Página principal (one page)
└── styles/global.css       — Design system em CSS custom properties
```

## Mídia provisória

As imagens atuais são placeholders SVG. Para substituir:

1. **Imagens geradas por IA** (primeira opção): seguir direção em `data/final-design-system.json` → `media_direction.ai_images`
2. **Fotos reais do cliente** (ideal): fachada, retratos da equipe, vídeo de aula
3. **Pexels** (segunda opção): buscar "pilates studio warm light", "boutique wellness space"

Colocar imagens em `public/images/` e atualizar referências em `src/pages/index.astro`.

## Dados pendentes do cliente

- [ ] Confirmar domínio (aurorapilatesmovimento.com.br)
- [ ] Enviar fotos finais do espaço (fachada, equipe, vídeo de aula)
- [ ] Validar se endereço completo deve aparecer publicamente
- [ ] Enviar CNPJ
- [ ] Confirmar se deseja Google Analytics / Meta Pixel

## Contato do cliente

- **Responsável:** Helena Duarte
- **WhatsApp:** +55 41 99999-1201
- **E-mail:** contato@aurorapilatesmovimento.com.br
- **Instagram:** @aurorapilates.movimento

## Stack

- **Framework:** Astro 5.x (static output)
- **CSS:** Custom properties (design system inline)
- **JS:** Vanilla (menu, IntersectionObserver, testimonial dots)
- **Fontes:** Fraunces + Inter (Google Fonts)

## Prazo

Até 15 dias a partir de 06/07/2026.
