# Pretty Patty Sticker Pop System

Categoria: 03 — Energético e Vibrante
Site inspiração: Pretty Patty — https://www.prettypatty.ch/

Este DS não é uma pele de cores. Ele parte do padrão sticker collage, badge shapes, playful burger mythology e transforma o site em um sistema com anatomia própria: sticker-poster grid.

## Filosofia Visual

- Arquitetura: sticker-poster grid
- Navegação: badge nav orbiting menu categories
- Hero: poster-like hero with badge headline, mascot/sticker field and menu CTA
- Ritmo: pop scale, sticker peel, playful rotate under 3deg
- Responsivo: stacked stickers with bottom order badge
- Risco principal evitado: avoid childish UI that hurts ordering clarity

## Paleta

- primary: #FF4FA3
- secondary: #2DD4BF
- surface: #FFF8CC
- surface_alt: #BEE7FF
- text: #261225
- muted: #75466D
- border: #F4A8D1

## Tipografia

- Heading: Cooper Black
- Body: DM Sans
- Mono: Space Mono

## Cobertura do Site Inspiração

1. Patty legend: usar sticker-menu-card como componente principal.
2. Menu stickers: usar badge-cta como componente principal.
3. Combo stories: usar loyalty-stamp-row como componente principal.
4. Loyalty club: usar photo-booth-tile como componente principal.
5. Photo booth grid: usar mascot-callout como componente principal.
6. Event/catering prompt: usar party-order-form como componente principal.
7. Order panel: usar sticker-menu-card como componente principal.
8. Footer as sticker sheet: usar badge-cta como componente principal.

## Componentes Proprietários

### sticker-menu-card

Função: sustentar a seção Patty legend.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

### badge-cta

Função: sustentar a seção Menu stickers.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

### loyalty-stamp-row

Função: sustentar a seção Combo stories.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

### photo-booth-tile

Função: sustentar a seção Loyalty club.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

### mascot-callout

Função: sustentar a seção Photo booth grid.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

### party-order-form

Função: sustentar a seção Event/catering prompt.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar sticker collage, badge shapes, playful burger mythology.

## Motion

Assinatura: pop scale, sticker peel, playful rotate under 3deg

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: cheeky, bright and social

CTA principal: Grab a patty
CTA secundário: Join the club

Evitar:
- avoid childish UI that hurts ordering clarity
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Pretty Patty Sticker Pop System: nav deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Pretty Patty Sticker Pop System: hero deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Patty legend.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Pretty Patty Sticker Pop System: sections deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Menu stickers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Pretty Patty Sticker Pop System: components deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra sticker-menu-card conectado à seção Combo stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Pretty Patty Sticker Pop System: forms deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra badge-cta conectado à seção Loyalty club.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Pretty Patty Sticker Pop System: motion deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra loyalty-stamp-row conectado à seção Photo booth grid.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Pretty Patty Sticker Pop System: responsive deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra photo-booth-tile conectado à seção Event/catering prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Pretty Patty Sticker Pop System: accessibility deve expressar sticker-poster grid.
Evidência: Preview ou implementação mostra mascot-callout conectado à seção Order panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Pretty Patty Sticker Pop System: conversion deve expressar sticker collage, badge shapes, playful burger mythology.
Evidência: Preview ou implementação mostra party-order-form conectado à seção Footer as sticker sheet.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: visual divertido sem clube, pedido ou estado ativo.

Funcionalidade obrigatoria adicionada ao preview HTML: Modo.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
