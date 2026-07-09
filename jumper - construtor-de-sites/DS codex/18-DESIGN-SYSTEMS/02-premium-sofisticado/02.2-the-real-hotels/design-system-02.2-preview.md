# Real Hotels Editorial Stay System

Categoria: 02 — Premium e Sofisticado
Site inspiração: The Real Hotels — https://therealhotels.com/

Este DS não é uma pele de cores. Ele parte do padrão full-bleed travel editorial, booking ledger, cinematic destination rhythm e transforma o site em um sistema com anatomia própria: magazine stay ledger.

## Filosofia Visual

- Arquitetura: magazine stay ledger
- Navegação: thin editorial nav with booking ledger dock
- Hero: full-bleed destination image with oversized serif title and low booking ledger
- Ritmo: cinematic image crossfade, ledger slide, discreet text dissolve
- Responsivo: image-first hero with compact booking drawer
- Risco principal evitado: avoid template resort cards and stock-like dark overlays

## Paleta

- primary: #102338
- secondary: #C8A96A
- surface: #F5F0E6
- surface_alt: #E7DFD0
- text: #102033
- muted: #665F52
- border: #C9BFAE

## Tipografia

- Heading: Playfair Display
- Body: Libre Franklin
- Mono: Space Mono

## Cobertura do Site Inspiração

1. Destination opener: usar booking-ledger como componente principal.
2. Room editorial index: usar room-index-tile como componente principal.
3. Experience itinerary: usar itinerary-strip como componente principal.
4. Availability ledger: usar folio-link como componente principal.
5. Local guide: usar destination-caption como componente principal.
6. Guest notes: usar availability-chip como componente principal.
7. Press marks: usar booking-ledger como componente principal.
8. Footer as travel folio: usar room-index-tile como componente principal.

## Componentes Proprietários

### booking-ledger

Função: sustentar a seção Destination opener.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

### room-index-tile

Função: sustentar a seção Room editorial index.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

### itinerary-strip

Função: sustentar a seção Experience itinerary.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

### folio-link

Função: sustentar a seção Availability ledger.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

### destination-caption

Função: sustentar a seção Local guide.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

### availability-chip

Função: sustentar a seção Guest notes.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar full-bleed travel editorial, booking ledger, cinematic destination rhythm.

## Motion

Assinatura: cinematic image crossfade, ledger slide, discreet text dissolve

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: curated, quiet and destination-led

CTA principal: Check availability
CTA secundário: Explore rooms

Evitar:
- avoid template resort cards and stock-like dark overlays
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Real Hotels Editorial Stay System: nav deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Real Hotels Editorial Stay System: hero deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Destination opener.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Real Hotels Editorial Stay System: sections deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Room editorial index.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Real Hotels Editorial Stay System: components deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra booking-ledger conectado à seção Experience itinerary.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Real Hotels Editorial Stay System: forms deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra room-index-tile conectado à seção Availability ledger.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Real Hotels Editorial Stay System: motion deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra itinerary-strip conectado à seção Local guide.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Real Hotels Editorial Stay System: responsive deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra folio-link conectado à seção Guest notes.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Real Hotels Editorial Stay System: accessibility deve expressar magazine stay ledger.
Evidência: Preview ou implementação mostra destination-caption conectado à seção Press marks.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Real Hotels Editorial Stay System: conversion deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.
Evidência: Preview ou implementação mostra availability-chip conectado à seção Footer as travel folio.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: hotel sem checagem de disponibilidade nem diario de estadia.

Funcionalidade obrigatoria adicionada ao preview HTML: Tipo de estadia.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
