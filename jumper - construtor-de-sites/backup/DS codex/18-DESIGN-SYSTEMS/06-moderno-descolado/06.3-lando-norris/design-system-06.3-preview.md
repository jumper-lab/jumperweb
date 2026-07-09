# Lando Velocity Fan System

Categoria: 06 — Moderno e Descolado
Site inspiração: Lando Norris — https://landonorris.com/

Este DS não é uma pele de cores. Ele parte do padrão race telemetry, merch drops, fan conversion, speed grid e transforma o site em um sistema com anatomia própria: telemetry commerce grid.

## Filosofia Visual

- Arquitetura: telemetry commerce grid
- Navegação: race-week nav with merch/drop ticker
- Hero: speed-line editorial grid with race status, merch drop and fan CTA
- Ritmo: speed-line sweep, ticker scroll, card overtake hover
- Responsivo: race status stays sticky, merch drops become swipe lane
- Risco principal evitado: avoid generic sports blog layout; commerce and race rhythm must lead

## Paleta

- primary: #0B0B0D
- secondary: #FF7A00
- surface: #F4F4F0
- surface_alt: #E9E8E1
- text: #24242A
- muted: #626267
- border: #C9C8C0

## Tipografia

- Heading: Barlow Condensed
- Body: Inter
- Mono: Roboto Mono

## Cobertura do Site Inspiração

1. Race week status: usar race-status-strip como componente principal.
2. Merch drop wall: usar merch-drop-card como componente principal.
3. Content feed: usar telemetry-stat-tile como componente principal.
4. Fan club prompt: usar fan-club-panel como componente principal.
5. Calendar strip: usar calendar-race-row como componente principal.
6. Partner proof: usar paddock-pass-footer como componente principal.
7. Shop conversion: usar race-status-strip como componente principal.
8. Footer as paddock pass: usar merch-drop-card como componente principal.

## Componentes Proprietários

### race-status-strip

Função: sustentar a seção Race week status.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

### merch-drop-card

Função: sustentar a seção Merch drop wall.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

### telemetry-stat-tile

Função: sustentar a seção Content feed.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

### fan-club-panel

Função: sustentar a seção Fan club prompt.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

### calendar-race-row

Função: sustentar a seção Calendar strip.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

### paddock-pass-footer

Função: sustentar a seção Partner proof.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar race telemetry, merch drops, fan conversion, speed grid.

## Motion

Assinatura: speed-line sweep, ticker scroll, card overtake hover

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: fast, fan-first and commercial

CTA principal: Shop the drop
CTA secundário: Join fan club

Evitar:
- avoid generic sports blog layout; commerce and race rhythm must lead
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Lando Velocity Fan System: nav deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Lando Velocity Fan System: hero deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Race week status.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Lando Velocity Fan System: sections deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Merch drop wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Lando Velocity Fan System: components deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra race-status-strip conectado à seção Content feed.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Lando Velocity Fan System: forms deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra merch-drop-card conectado à seção Fan club prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Lando Velocity Fan System: motion deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra telemetry-stat-tile conectado à seção Calendar strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Lando Velocity Fan System: responsive deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra fan-club-panel conectado à seção Partner proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Lando Velocity Fan System: accessibility deve expressar telemetry commerce grid.
Evidência: Preview ou implementação mostra calendar-race-row conectado à seção Shop conversion.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Lando Velocity Fan System: conversion deve expressar race telemetry, merch drops, fan conversion, speed grid.
Evidência: Preview ou implementação mostra paddock-pass-footer conectado à seção Footer as paddock pass.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: sports/fan sem drop, calendario ou ticker comercial.

Funcionalidade obrigatoria adicionada ao preview HTML: Race week.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
