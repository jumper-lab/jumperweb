# Biblioteca de DSs-base por Personalidade

Biblioteca de Design Systems base por personalidade visual.

O fluxo oficial de cliente nao depende de ZIPs. O repositorio deve guardar os DSs-base leves, seus previews e a documentacao que explica como cada personalidade visual funciona.

## Como usar

1. Abra `index.html` no navegador para consultar os estilos e previews.
2. Ao receber um briefing de cliente, identifique a personalidade A/B/C/D/E/F.
3. Use os 3 DSs-base da personalidade escolhida como insumo.
4. Nao gere novamente esses 3 DSs dentro da pasta do cliente.
5. Cruze o DS inicial do cliente com os 3 DSs-base existentes.
6. Gere `clientes/[slug]/data/final-design-system.json`.
7. Construa o site do cliente a partir do DS final.

## GitHub e arquivos permitidos

O repositorio deve guardar apenas artefatos leves e reutilizaveis:

- `design-systems/json/reference-ds-XX-[site].json`
- `design-systems/previews/markdown/reference-ds-XX-[site]-preview.md`
- `design-systems/previews/html/reference-ds-XX-[site]-visual-preview.html`
- `design-systems/preview-assets/[site]/assets/*` somente quando o preview HTML precisar de imagens/fontes leves para abrir corretamente
- READMEs e prompts de apoio

O fluxo novo nao usa mais arquivos brutos de captura. Estas pastas nao devem existir dentro das personalidades:

- `_sites-extraidos/`
- `_zips-originais/`

Se elas reaparecerem, remova. O cliente final deve nascer somente do DS inicial do cliente, dos 3 DSs-base em `design-systems/json/`, dos previews leves, do DS final e dos assets permitidos.

## Estrutura

```
_referencias-visuais/
├── index.html                  ← Central de DSs-base e previews
├── README.md
├── 01-acolhedor-familiar/      ← Padaria, escola, clinica de familia
│   └── design-systems/
│       ├── json/
│       ├── previews/
│       └── preview-assets/
├── 02-premium-sofisticado/     ← Advocacia, consultoria, clinica especializada
│   └── design-systems/
│       ├── json/
│       └── previews/
├── 03-energetico-vibrante/     ← Academia, hamburgueria, sports bar
│   └── design-systems/
│       ├── json/
│       └── previews/
├── 04-tecnico-confiavel/       ← Medicina, contabilidade, tecnologia
│   └── design-systems/
│       ├── json/
│       └── previews/
├── 05-artesanal-autentico/     ← Atelie, cafeteria de especialidade
│   └── design-systems/
│       ├── json/
│       └── previews/
└── 06-moderno-descolado/       ← Tatuagem, moda, música, marcas urbanas
    └── design-systems/
        ├── json/
        └── previews/
```

## Como abrir o index.html rapidamente

No terminal, a partir de `_jumper-sites-system/`:
```bash
open _referencias-visuais/index.html
```
