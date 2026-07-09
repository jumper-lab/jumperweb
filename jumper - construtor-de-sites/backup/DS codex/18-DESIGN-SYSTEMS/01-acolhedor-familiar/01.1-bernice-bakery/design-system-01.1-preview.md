# Bernice Counter Ritual System

Categoria: 01 — Acolhedor e Familiar
Site inspiração: Bernice Bakery — https://bernicebakery.com/

Este DS não é uma pele de cores. Ele parte do padrão warm counter ritual, product shelves, hand-written daily rhythm e transforma o site em um sistema com anatomia própria: counter-story vertical.

## Filosofia Visual

- Arquitetura: counter-story vertical
- Navegação: painted window sign nav with daily bake ticker
- Hero: low counter hero with pastry close-up, human hands, and opening-hours ribbon
- Ritmo: slow oven-warm reveal, soft vertical steam drift, tiny shelf lift
- Responsivo: single-column bakery board with sticky pickup button
- Risco principal evitado: never turn warmth into beige generic lifestyle cards

## Paleta

- primary: #8A3F2B
- secondary: #E7B86A
- surface: #FFF7EC
- surface_alt: #F4DFC8
- text: #2B1710
- muted: #765B4E
- border: #D9BFA4

## Tipografia

- Heading: Fraunces
- Body: Nunito Sans
- Mono: IBM Plex Mono

## Cobertura do Site Inspiração

1. Daily bake counter: usar bake-shelf-card como componente principal.
2. Neighbourhood welcome: usar daily-batch-ticker como componente principal.
3. Signature pastries shelf: usar crumb-trail-link como componente principal.
4. Pre-order and pickup flow: usar pickup-window-form como componente principal.
5. Baker notes: usar neighbor-quote-strip como componente principal.
6. Community praise: usar receipt-footer como componente principal.
7. Visit card: usar bake-shelf-card como componente principal.
8. Footer as receipt: usar daily-batch-ticker como componente principal.

## Componentes Proprietários

### bake-shelf-card

Função: sustentar a seção Daily bake counter.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

### daily-batch-ticker

Função: sustentar a seção Neighbourhood welcome.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

### crumb-trail-link

Função: sustentar a seção Signature pastries shelf.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

### pickup-window-form

Função: sustentar a seção Pre-order and pickup flow.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

### neighbor-quote-strip

Função: sustentar a seção Baker notes.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

### receipt-footer

Função: sustentar a seção Community praise.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar warm counter ritual, product shelves, hand-written daily rhythm.

## Motion

Assinatura: slow oven-warm reveal, soft vertical steam drift, tiny shelf lift

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: neighborly, sensorial and concrete

CTA principal: Pre-order today
CTA secundário: See the bakes

Evitar:
- never turn warmth into beige generic lifestyle cards
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Bernice Counter Ritual System: nav deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Bernice Counter Ritual System: hero deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Daily bake counter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Bernice Counter Ritual System: sections deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Neighbourhood welcome.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Bernice Counter Ritual System: components deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra bake-shelf-card conectado à seção Signature pastries shelf.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Bernice Counter Ritual System: forms deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra daily-batch-ticker conectado à seção Pre-order and pickup flow.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Bernice Counter Ritual System: motion deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra crumb-trail-link conectado à seção Baker notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Bernice Counter Ritual System: responsive deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra pickup-window-form conectado à seção Community praise.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Bernice Counter Ritual System: accessibility deve expressar counter-story vertical.
Evidência: Preview ou implementação mostra neighbor-quote-strip conectado à seção Visit card.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Bernice Counter Ritual System: conversion deve expressar warm counter ritual, product shelves, hand-written daily rhythm.
Evidência: Preview ou implementação mostra receipt-footer conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: preview antigo era cartaz estatico sem pedido, horario ou produto acionavel.

Funcionalidade obrigatoria adicionada ao preview HTML: Filtro de fornada.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
