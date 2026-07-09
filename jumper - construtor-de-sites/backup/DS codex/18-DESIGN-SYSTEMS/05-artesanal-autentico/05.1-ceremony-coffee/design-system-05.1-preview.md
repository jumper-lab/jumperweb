# Ceremony Cupping Journal System

Categoria: 05 — Artesanal e Autêntico
Site inspiração: Ceremony Coffee Roasters — https://ceremonycoffee.com/

Este DS não é uma pele de cores. Ele parte do padrão cupping notes, flavor cards, craft commerce with sensory detail e transforma o site em um sistema com anatomia própria: cupping journal commerce.

## Filosofia Visual

- Arquitetura: cupping journal commerce
- Navegação: roast finder nav with subscription shortcut
- Hero: journal hero with tasting cards, bag detail and roast finder action
- Ritmo: paper card reveal, flavor note underline, slow product hover
- Responsivo: roast finder first, tasting cards become carousel
- Risco principal evitado: avoid mass-market cafe sweetness

## Paleta

- primary: #5A3825
- secondary: #B7793E
- surface: #F8F1E7
- surface_alt: #EAD8C3
- text: #2A1A12
- muted: #745C4C
- border: #D6BFA5

## Tipografia

- Heading: Recoleta
- Body: Source Serif 4
- Mono: IBM Plex Mono

## Cobertura do Site Inspiração

1. Roast finder: usar flavor-note-card como componente principal.
2. Flavor note cards: usar roast-finder-filter como componente principal.
3. Origin story: usar origin-story-slab como componente principal.
4. Subscription builder: usar subscription-builder como componente principal.
5. Brew guide: usar brew-method-step como componente principal.
6. Seasonal release: usar tasting-ledger-footer como componente principal.
7. Wholesale path: usar flavor-note-card como componente principal.
8. Footer as tasting ledger: usar roast-finder-filter como componente principal.

## Componentes Proprietários

### flavor-note-card

Função: sustentar a seção Roast finder.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

### roast-finder-filter

Função: sustentar a seção Flavor note cards.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

### origin-story-slab

Função: sustentar a seção Origin story.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

### subscription-builder

Função: sustentar a seção Subscription builder.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

### brew-method-step

Função: sustentar a seção Brew guide.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

### tasting-ledger-footer

Função: sustentar a seção Seasonal release.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cupping notes, flavor cards, craft commerce with sensory detail.

## Motion

Assinatura: paper card reveal, flavor note underline, slow product hover

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: sensory, educated and grounded

CTA principal: Find your roast
CTA secundário: Build subscription

Evitar:
- avoid mass-market cafe sweetness
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Ceremony Cupping Journal System: nav deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Ceremony Cupping Journal System: hero deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Roast finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Ceremony Cupping Journal System: sections deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Flavor note cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Ceremony Cupping Journal System: components deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra flavor-note-card conectado à seção Origin story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Ceremony Cupping Journal System: forms deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra roast-finder-filter conectado à seção Subscription builder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Ceremony Cupping Journal System: motion deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra origin-story-slab conectado à seção Brew guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Ceremony Cupping Journal System: responsive deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra subscription-builder conectado à seção Seasonal release.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Ceremony Cupping Journal System: accessibility deve expressar cupping journal commerce.
Evidência: Preview ou implementação mostra brew-method-step conectado à seção Wholesale path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Ceremony Cupping Journal System: conversion deve expressar cupping notes, flavor cards, craft commerce with sensory detail.
Evidência: Preview ou implementação mostra tasting-ledger-footer conectado à seção Footer as tasting ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: cafe sem finder de torra, assinatura ou notas sensoriais.

Funcionalidade obrigatoria adicionada ao preview HTML: Perfil de sabor.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
