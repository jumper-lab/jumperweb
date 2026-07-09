# OceanX Expedition Interface System

Categoria: 06 — Moderno e Descolado
Site inspiração: OceanX 2025 — https://2025.oceanx.org/

Este DS não é uma pele de cores. Ele parte do padrão cinematic expedition, depth layers, mission timeline e transforma o site em um sistema com anatomia própria: deep-scroll expedition interface.

## Filosofia Visual

- Arquitetura: deep-scroll expedition interface
- Navegação: mission timeline nav with depth markers
- Hero: full-bleed ocean scene with depth scale, mission chapter and interactive timeline
- Ritmo: depth parallax, sonar ping, chapter crossfade
- Responsivo: depth timeline becomes chapter stack with sticky coordinates
- Risco principal evitado: avoid generic space-tech aesthetics; keep ocean evidence visible

## Paleta

- primary: #03121F
- secondary: #00D1FF
- surface: #E6FBFF
- surface_alt: #083C5B
- text: #0A2840
- muted: #4C6B7B
- border: #7ACFE2

## Tipografia

- Heading: Rajdhani
- Body: Inter
- Mono: IBM Plex Mono

## Cobertura do Site Inspiração

1. Mission chapter: usar depth-marker-nav como componente principal.
2. Depth timeline: usar mission-chapter-card como componente principal.
3. Research vessel map: usar vessel-map-panel como componente principal.
4. Crew cards: usar discovery-log-entry como componente principal.
5. Discoveries log: usar crew-signal-card como componente principal.
6. Media theatre: usar coordinate-footer como componente principal.
7. Join/support prompt: usar depth-marker-nav como componente principal.
8. Footer as expedition coordinates: usar mission-chapter-card como componente principal.

## Componentes Proprietários

### depth-marker-nav

Função: sustentar a seção Mission chapter.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

### mission-chapter-card

Função: sustentar a seção Depth timeline.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

### vessel-map-panel

Função: sustentar a seção Research vessel map.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

### discovery-log-entry

Função: sustentar a seção Crew cards.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

### crew-signal-card

Função: sustentar a seção Discoveries log.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

### coordinate-footer

Função: sustentar a seção Media theatre.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar cinematic expedition, depth layers, mission timeline.

## Motion

Assinatura: depth parallax, sonar ping, chapter crossfade

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: wonder-driven, scientific and cinematic

CTA principal: Explore mission
CTA secundário: See discoveries

Evitar:
- avoid generic space-tech aesthetics; keep ocean evidence visible
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar OceanX Expedition Interface System: nav deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar OceanX Expedition Interface System: hero deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Mission chapter.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar OceanX Expedition Interface System: sections deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Depth timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar OceanX Expedition Interface System: components deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra depth-marker-nav conectado à seção Research vessel map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar OceanX Expedition Interface System: forms deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra mission-chapter-card conectado à seção Crew cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar OceanX Expedition Interface System: motion deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra vessel-map-panel conectado à seção Discoveries log.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar OceanX Expedition Interface System: responsive deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra discovery-log-entry conectado à seção Media theatre.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar OceanX Expedition Interface System: accessibility deve expressar deep-scroll expedition interface.
Evidência: Preview ou implementação mostra crew-signal-card conectado à seção Join/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar OceanX Expedition Interface System: conversion deve expressar cinematic expedition, depth layers, mission timeline.
Evidência: Preview ou implementação mostra coordinate-footer conectado à seção Footer as expedition coordinates.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: experiencia imersiva sem timeline, profundidade ou log.

Funcionalidade obrigatoria adicionada ao preview HTML: Profundidade.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
