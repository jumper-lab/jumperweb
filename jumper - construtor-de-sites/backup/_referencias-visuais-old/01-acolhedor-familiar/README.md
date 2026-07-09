# A — Acolhedor e familiar

**Segmentos:** padaria, escola, clínica de família, cafeteria de bairro, floricultura, pet shop, pediatria.

**Mood:** convidativo, próximo, calor humano.

## Sites desta categoria

| # | Site | URL | Por que está aqui |
|---|---|---|---|
| 1 | Pinchman's Café & Artisan Bakery | https://pinchmans.ca | Awwwards nominee — café familiar canadense |
| 2 | Country Bird Bakery | https://countrybirdbakery.com | James Beard Award — padaria local premiada |
| 3 | Airbnb | https://airbnb.com | Referência global em hospitalidade e acolhimento humano |
| 4 | Magnolia | https://magnolia.com | Casa, loja e experiência familiar com direção editorial acolhedora |
| 5 | King Arthur Baking | https://kingarthurbaking.com | Padaria caseira icônica, marca centenária americana |

## Organização da pasta

```txt
01-acolhedor-familiar/
├── README.md
└── design-systems/
    ├── json/
    └── previews/
        ├── html/
        └── markdown/
```

- `design-systems/json/`: JSONs finais reutilizáveis da personalidade.
- `design-systems/previews/html/`: previews visuais navegáveis.
- `design-systems/previews/markdown/`: previews explicativos.

Arquivos pesados ou materiais historicos locais podem existir na maquina de trabalho, mas nao fazem parte do fluxo oficial e nao devem ser versionados.

## Design Systems de referência

Os DSs abaixo foram criados fora do fluxo de clientes. Eles servem como ativos reutilizáveis da personalidade `01-acolhedor-familiar`, para alimentar os 5 DSs aplicados ao cliente.

| # | Referência | JSON | Preview MD | Preview HTML |
|---|---|---|---|
| 1 | Pinchmans | `design-systems/json/reference-ds-01-pinchmans-ca.json` | `design-systems/previews/markdown/reference-ds-01-pinchmans-ca-preview.md` | `design-systems/previews/html/reference-ds-01-pinchmans-ca-visual-preview.html` |
| 2 | Country Bird Bakery | `design-systems/json/reference-ds-02-countrybirdbakery-com.json` | `design-systems/previews/markdown/reference-ds-02-countrybirdbakery-com-preview.md` | `design-systems/previews/html/reference-ds-02-countrybirdbakery-com-visual-preview.html` |
| 3 | Airbnb | `design-systems/json/reference-ds-03-airbnb-com.json` | `design-systems/previews/markdown/reference-ds-03-airbnb-com-preview.md` | `design-systems/previews/html/reference-ds-03-airbnb-com-visual-preview.html` |
| 4 | Magnolia | `design-systems/json/reference-ds-04-magnolia-com.json` | `design-systems/previews/markdown/reference-ds-04-magnolia-com-preview.md` | `design-systems/previews/html/reference-ds-04-magnolia-com-visual-preview.html` |
| 5 | King Arthur Baking | `design-systems/json/reference-ds-05-kingarthurbaking-com.json` | `design-systems/previews/markdown/reference-ds-05-kingarthurbaking-com-preview.md` | `design-systems/previews/html/reference-ds-05-kingarthurbaking-com-visual-preview.html` |

## Critérios aplicados

- Cada DS foi gerado a partir de uma única referência local.
- Cada preview HTML possui hero em sessão full viewport.
- Menus, drawers, modais, links internos, botões, estados de hover/focus, animações de entrada/saída e parallax foram validados.
- Foram registrados tokens de cor com Hex/RGB/HSL, opacidades, gradientes, tipografia, componentes, ícones, motion, riscos e decisões estratégicas.
- Arquivos pesados e pastas locais de referência não são necessários para criar clientes.
