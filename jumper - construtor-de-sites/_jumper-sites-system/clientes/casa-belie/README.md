# Casa Beliê — Site M4

Site Astro multipágina da Casa Beliê, construído a partir do briefing, conteúdo e Design System autoral do cliente.

## Direção visual atual

A versão de apresentação combina fotografia real do Instagram oficial com uma linguagem editorial mais calorosa e brincante. O hero continua imersivo e responsivo, agora com uma luz quente translúcida em vez de overlay escuro, preservando mais saturação da imagem; botões usam setas, microinterações e contorno desenhado progressivamente no hover; a Home alterna papel, manteiga, verde e lavanda; o mural fotográfico, as notas manuscritas e as linhas interativas de festa formam a assinatura visual sem copiar a estrutura de outro cliente. Cada grande capítulo da Home ocupa uma dobra de `100svh`; menu e heróis internos seguem o padrão claro/saturado da Home, com altura padronizada e crops específicos por imagem; em telas menores, trilhos horizontais preservam esse ritmo sem cortar o conteúdo.

## Rodar localmente

```bash
npm install
npm run dev
```

O servidor local informa a URL de preview. Para validar a estrutura e gerar a versão de produção:

```bash
npm run doctor
npm run build
```

O projeto usa Astro em modo `server` com adapter Node porque o blog possui painel administrativo, APIs e upload.

## Rotas públicas

- `/` — Home
- `/sobre/` — História e princípios
- `/festas/` — Oferta principal e formatos
- `/espaco/` — Casa, quintal e galeria
- `/blog/` e `/blog/[slug]/` — Novidades
- `/novidades/` — Redirecionamento para o blog
- `/contato/` — Formulário que prepara uma conversa no WhatsApp
- `/politica-de-privacidade/`
- `/404/`

## Blog Autônomo Jumper

- Painel: `/admin/`
- API de posts: `/api/blog-posts`
- API de upload: `/api/blog-upload`
- Dados: `data/blog-posts.json`
- Imagens enviadas: `public/uploads/blog/`

A senha real deve ser configurada na variável `BLOG_ADMIN_PASSWORD`. Em `npm run dev`, existe somente para preview local o fallback:

```txt
belie-preview-2026
```

Esse fallback não funciona no build de produção. Não usar a senha de preview em publicação.

No painel, o cliente pode criar, editar, publicar, salvar rascunho, arquivar, excluir e subir imagem. Posts `draft` e `archived` não aparecem no blog público.

Para produção, a hospedagem precisa oferecer filesystem persistente para `data/blog-posts.json` e `public/uploads/blog/`. Em plataformas com filesystem efêmero, migrar o armazenamento para banco e object storage antes do deploy.

## Mídia provisória

O site não usa imagens do WordPress atual. A ordem aprovada é Instagram oficial → geração autoral → Pexels.

Assets utilizados no preview:

- Hero: reel oficial `DWH5_7pEcK4`, com versão horizontal restaurada/expandida por IA e versão vertical preservada.
- Fachada/quintal: post oficial `DL3WB2mPjeI`.
- Ambiente de brincar: reel oficial `DQEcyQnjQck`.
- Celebração: post oficial `DQxSLgckU84`.
- Portas e ambientes: post oficial `DRxyZIOEbbK`.
- Criança em atividade: reel oficial `DXNQLK5FMIw`.
- Tour/apresentação: reel oficial `DZicOtSPKkM`.

Os crops removem somente áreas com textos incorporados. Não alteram o conteúdo da cena. Solicitar arquivos originais em alta e autorização de uso, especialmente para imagens com crianças, antes da publicação.

## Dados pendentes antes de publicar

- Confirmar WhatsApp comercial `+55 21 96015-4917`.
- Confirmar e-mail comercial.
- Confirmar CEP e forma oficial de grafar o endereço. Fontes públicas consultadas apontam para Rua Glicério/General Glicério, 131 — Laranjeiras.
- Confirmar horário oficial.
- Confirmar pacotes, cardápios, itens e extras atuais.
- Receber logo vetorial e manual da marca.
- Receber política de privacidade aprovada pelo cliente.
- Receber autorização das imagens e depoimentos.
- Confirmar Google Business antes de publicar nota, link ou volume de avaliações.
- Configurar Analytics, Meta Pixel e Google Ads somente com IDs reais.

Enquanto esses dados não forem confirmados, o site evita preços, promoções, depoimentos e alegações não verificadas. Valores vistos em material público de apresentação não foram publicados no site.

## Trocar imagens

- Hero responsivo: `public/images/hero-family-desktop.webp` e `public/images/hero-family-mobile.webp`.
- Cartão de compartilhamento: `public/og.png`.
- Imagens editoriais: `src/assets/`.
- Imagens do blog: painel `/admin/` ou `public/uploads/blog/`.

Ao trocar arquivos de `src/assets/`, mantenha o import correspondente nas páginas. O Astro gera dimensões e formatos responsivos no build.

## Publicação

O build é Node standalone. Execute `npm run build` e inicie com `npm start`. A publicação definitiva deve ocorrer somente depois da confirmação dos dados pendentes e da escolha de uma hospedagem com persistência para o blog.
