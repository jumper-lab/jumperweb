# Coffee Collective Farmline System

Categoria: 05 — Artesanal e Autêntico
Site inspiração: Coffee Collective — https://coffeecollective.dk/

Este DS não é uma pele de cores. Ele parte do padrão farm-to-cup timeline, Nordic calm, producer-centered commerce e transforma o site em um sistema com anatomia própria: producer timeline grid.

## Filosofia Visual

- Arquitetura: producer timeline grid
- Navegação: store / cafes / producers segmented nav
- Hero: Nordic calm hero with producer timeline and product detail close-up
- Ritmo: timeline line grow, catalogue fade, calm image settle
- Responsivo: producer timeline becomes swipeable story sequence
- Risco principal evitado: avoid making producers a decorative backdrop

## Paleta

- primary: #3C2F25
- secondary: #8FA36A
- surface: #F3EFE7
- surface_alt: #DED4C5
- text: #211B16
- muted: #6B5F52
- border: #C8BBA8

## Tipografia

- Heading: Spectral
- Body: Inter
- Mono: Roboto Mono

## Cobertura do Site Inspiração

1. Producer timeline: usar producer-story-card como componente principal.
2. Coffee catalogue: usar farmline-timeline como componente principal.
3. Direct trade explanation: usar coffee-catalogue-tile como componente principal.
4. Cafe locations: usar direct-trade-metric como componente principal.
5. Education journal: usar cafe-location-row como componente principal.
6. Subscription path: usar supply-chain-footer como componente principal.
7. Producer stories: usar producer-story-card como componente principal.
8. Footer as supply-chain map: usar farmline-timeline como componente principal.

## Componentes Proprietários

### producer-story-card

Função: sustentar a seção Producer timeline.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

### farmline-timeline

Função: sustentar a seção Coffee catalogue.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

### coffee-catalogue-tile

Função: sustentar a seção Direct trade explanation.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

### direct-trade-metric

Função: sustentar a seção Cafe locations.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

### cafe-location-row

Função: sustentar a seção Education journal.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

### supply-chain-footer

Função: sustentar a seção Subscription path.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar farm-to-cup timeline, Nordic calm, producer-centered commerce.

## Motion

Assinatura: timeline line grow, catalogue fade, calm image settle

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: transparent, respectful and craft-led

CTA principal: Explore coffees
CTA secundário: Meet producers

Evitar:
- avoid making producers a decorative backdrop
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Coffee Collective Farmline System: nav deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Coffee Collective Farmline System: hero deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Coffee Collective Farmline System: sections deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Coffee catalogue.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Coffee Collective Farmline System: components deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra producer-story-card conectado à seção Direct trade explanation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Coffee Collective Farmline System: forms deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra farmline-timeline conectado à seção Cafe locations.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Coffee Collective Farmline System: motion deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra coffee-catalogue-tile conectado à seção Education journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Coffee Collective Farmline System: responsive deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra direct-trade-metric conectado à seção Subscription path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Coffee Collective Farmline System: accessibility deve expressar producer timeline grid.
Evidência: Preview ou implementação mostra cafe-location-row conectado à seção Producer stories.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Coffee Collective Farmline System: conversion deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.
Evidência: Preview ou implementação mostra supply-chain-footer conectado à seção Footer as supply-chain map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: cadeia de valor sem linha produtor-produto.

Funcionalidade obrigatoria adicionada ao preview HTML: Produtor.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
