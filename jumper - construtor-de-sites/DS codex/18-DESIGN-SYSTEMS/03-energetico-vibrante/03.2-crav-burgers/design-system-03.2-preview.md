# Crav Red Order Board System

Categoria: 03 — Energético e Vibrante
Site inspiração: Crav Burgers — https://www.cravburgers.shop/

Este DS não é uma pele de cores. Ele parte do padrão red order board, menu urgency, product-first appetite e transforma o site em um sistema com anatomia própria: menu-board commerce.

## Filosofia Visual

- Arquitetura: menu-board commerce
- Navegação: sticky order rail with category buttons
- Hero: menu board hero with burger stack, price chips and immediate order action
- Ritmo: snappy menu flip, sauce hover splash, cart rail lock
- Responsivo: thumb-first category rail and cart summary
- Risco principal evitado: avoid restaurant brochure sections before ordering

## Paleta

- primary: #E6342A
- secondary: #FFD447
- surface: #FFF2D5
- surface_alt: #FFE29A
- text: #24110E
- muted: #6D392E
- border: #F08A6E

## Tipografia

- Heading: Anton
- Body: Barlow Condensed
- Mono: Roboto Mono

## Cobertura do Site Inspiração

1. Hero order board: usar menu-price-chip como componente principal.
2. Best sellers: usar combo-builder-card como componente principal.
3. Build your combo: usar sauce-selector como componente principal.
4. Limited drop: usar limited-drop-badge como componente principal.
5. Pickup/delivery choice: usar delivery-toggle como componente principal.
6. Sauce selector: usar receipt-summary como componente principal.
7. Social proof wall: usar menu-price-chip como componente principal.
8. Footer as receipt: usar combo-builder-card como componente principal.

## Componentes Proprietários

### menu-price-chip

Função: sustentar a seção Hero order board.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

### combo-builder-card

Função: sustentar a seção Best sellers.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

### sauce-selector

Função: sustentar a seção Build your combo.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

### limited-drop-badge

Função: sustentar a seção Limited drop.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

### delivery-toggle

Função: sustentar a seção Pickup/delivery choice.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

### receipt-summary

Função: sustentar a seção Sauce selector.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar red order board, menu urgency, product-first appetite.

## Motion

Assinatura: snappy menu flip, sauce hover splash, cart rail lock

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: hungry, direct and loud

CTA principal: Order burgers
CTA secundário: Build combo

Evitar:
- avoid restaurant brochure sections before ordering
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Crav Red Order Board System: nav deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Crav Red Order Board System: hero deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Hero order board.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Crav Red Order Board System: sections deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Best sellers.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Crav Red Order Board System: components deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra menu-price-chip conectado à seção Build your combo.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Crav Red Order Board System: forms deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra combo-builder-card conectado à seção Limited drop.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Crav Red Order Board System: motion deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra sauce-selector conectado à seção Pickup/delivery choice.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Crav Red Order Board System: responsive deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra limited-drop-badge conectado à seção Sauce selector.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Crav Red Order Board System: accessibility deve expressar menu-board commerce.
Evidência: Preview ou implementação mostra delivery-toggle conectado à seção Social proof wall.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Crav Red Order Board System: conversion deve expressar red order board, menu urgency, product-first appetite.
Evidência: Preview ou implementação mostra receipt-summary conectado à seção Footer as receipt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: hamburgueria sem carrinho, combos ou escolha de entrega.

Funcionalidade obrigatoria adicionada ao preview HTML: Categoria.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
