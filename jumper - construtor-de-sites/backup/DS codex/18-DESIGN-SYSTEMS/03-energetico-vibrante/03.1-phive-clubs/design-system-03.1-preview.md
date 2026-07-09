# Phive Kinetic Membership System

Categoria: 03 — Energético e Vibrante
Site inspiração: Phive Clubs — https://phive.pt/

Este DS não é uma pele de cores. Ele parte do padrão kinetic type, class energy, membership scoreboard e transforma o site em um sistema com anatomia própria: scoreboard plus class grid.

## Filosofia Visual

- Arquitetura: scoreboard plus class grid
- Navegação: training-mode nav with sticky join timer
- Hero: oversized condensed type over training motion, class chips and membership timer
- Ritmo: fast diagonal wipe, class chip snap, hover punch
- Responsivo: horizontal class scroller and sticky join button
- Risco principal evitado: avoid generic black-neon SaaS styling

## Paleta

- primary: #D7FF00
- secondary: #111111
- surface: #050505
- surface_alt: #191919
- text: #F6F6F0
- muted: #B3B3A8
- border: #343434

## Tipografia

- Heading: Bebas Neue
- Body: Inter Tight
- Mono: Space Mono

## Cobertura do Site Inspiração

1. Membership scoreboard: usar class-timetable-grid como componente principal.
2. Class timetable: usar membership-scorecard como componente principal.
3. Trainer cards: usar trainer-action-card como componente principal.
4. Facility zones: usar challenge-marquee como componente principal.
5. Challenge strip: usar zone-map como componente principal.
6. Plan comparison: usar join-timer-button como componente principal.
7. Join form: usar class-timetable-grid como componente principal.
8. Footer as club board: usar membership-scorecard como componente principal.

## Componentes Proprietários

### class-timetable-grid

Função: sustentar a seção Membership scoreboard.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

### membership-scorecard

Função: sustentar a seção Class timetable.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

### trainer-action-card

Função: sustentar a seção Trainer cards.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

### challenge-marquee

Função: sustentar a seção Facility zones.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

### zone-map

Função: sustentar a seção Challenge strip.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

### join-timer-button

Função: sustentar a seção Plan comparison.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar kinetic type, class energy, membership scoreboard.

## Motion

Assinatura: fast diagonal wipe, class chip snap, hover punch

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: urgent, athletic and bold

CTA principal: Join now
CTA secundário: View classes

Evitar:
- avoid generic black-neon SaaS styling
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Phive Kinetic Membership System: nav deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Phive Kinetic Membership System: hero deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Membership scoreboard.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Phive Kinetic Membership System: sections deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Class timetable.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Phive Kinetic Membership System: components deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra class-timetable-grid conectado à seção Trainer cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Phive Kinetic Membership System: forms deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra membership-scorecard conectado à seção Facility zones.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Phive Kinetic Membership System: motion deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra trainer-action-card conectado à seção Challenge strip.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Phive Kinetic Membership System: responsive deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra challenge-marquee conectado à seção Plan comparison.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Phive Kinetic Membership System: accessibility deve expressar scoreboard plus class grid.
Evidência: Preview ou implementação mostra zone-map conectado à seção Join form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Phive Kinetic Membership System: conversion deve expressar kinetic type, class energy, membership scoreboard.
Evidência: Preview ou implementação mostra join-timer-button conectado à seção Footer as club board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: fitness sem agenda, plano ou adesao funcional.

Funcionalidade obrigatoria adicionada ao preview HTML: Modalidade.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
