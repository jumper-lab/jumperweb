# Prompt Final de Construção — Casa Beliê

## Prompt Visual Executivo

A Casa Beliê deve aparecer como uma casa em plena celebração, não como um buffet que lista brinquedos. A experiência começa dentro de uma fotografia real: família, bolo, flores e balões ocupam a tela inteira, enquanto a mensagem nasce sobre uma luz quente e translúcida, sem faixa escura pesada e sem embranquecer demais a imagem. A frase manuscrita do hero deve aparecer como gesto solto, sem caixa de fundo. O menu começa sem fundo, com opacidade 0, e a lâmina paper translúcida com blur aparece em fade suave ao rolar; texto escuro e CTA lavanda permanecem legíveis. Depois da primeira dobra, a página segue como quem atravessa uma porta e chega ao quintal: papel quente, areia, manteiga, verde e lavanda pontual organizam manifesto, experiência, festa completa e espaço em composições editoriais variadas. Roxo escuro não deve funcionar como atmosfera dominante.

O elemento recorrente é o **Eixo Casa–Quintal**: uma linha lavanda com um pequeno acento verde. Ela aparece no hero, nos títulos de capítulos, na linha narrativa da festa, na galeria e na transição para o CTA final. Nunca vira moldura universal. A ousadia fica concentrada no hero imersivo, na galeria irregular e no CTA final lavanda; o restante é calmo, preciso e acolhedor.

Cada página interna começa com uma primeira dobra full-bleed em altura padronizada: `clamp(620px,82svh,820px)` no desktop/tablet e `clamp(540px,76svh,680px)` no mobile. A fotografia, a tipografia grande e uma indicação clara do próximo passo precisam identificar a página sem depender do menu. Se faltar uma fotografia apropriada, usar superfície editorial com composição tipográfica, nunca placeholder vazio.

## Síntese Profunda do Cliente

A Casa Beliê é uma casa de festas infantis em Laranjeiras para famílias que querem beleza, segurança e praticidade sem hiperestimulação. A promessa não é apenas alugar um espaço: é resolver a celebração com cuidado, deixar as crianças brincarem de verdade e permitir que os adultos estejam presentes. O site precisa transmitir infância livre, quintal, luz natural, festa afetiva, ausência de telas e curadoria de ponta a ponta.

O visitante chega cansado de buffets genéricos, barulho visual e decisões fragmentadas. Em cinco segundos deve entender que encontrou uma festa infantil completa e diferente, no Rio de Janeiro, com um CTA claro para pedir orçamento.

## Objetivo Comercial

Levar famílias interessadas a iniciar uma conversa de orçamento pelo WhatsApp. A conversão principal aparece no menu, no hero, depois da explicação da festa completa e no encerramento. O site não publica preços, promoções, avaliações ou alegações ainda não confirmadas. O endereço público aparece como Rua Glicério, 131 — Laranjeiras; CEP, horário, WhatsApp final, e-mail e pacotes continuam pendentes de confirmação operacional.

## Primeira Dobra

Ordem da leitura:

1. Menu com wordmark Casa Beliê, navegação e CTA de orçamento.
2. Rótulo “Casa de festas infantil · Laranjeiras”.
3. H1 “Um quintal inteiro para a infância acontecer.”
4. Texto sobre festas completas, brincar livre, luz natural e ausência de telas.
5. CTA “Quero uma festa Beliê” e link “Ver festas reais”.
6. Rail de prova: festa completa, brincar livre e cerca de 800 m².

Cobertura por viewport:

- Mobile: `height: 100svh`, foto vertical full-bleed, conteúdo abaixo do centro e rostos preservados.
- Tablet: `height: 100svh`, fotografia full-bleed e conteúdo no terço inferior esquerdo.
- Desktop: `height: 100svh` e `width: 100%`, texto à esquerda e família no centro/direita.
- Desktop largo: `height: 100svh` e `width: 100%`, mídia sangra; texto mantém largura controlada e não cresce indefinidamente.
- Paisagem baixa: mantém `100svh`, reduz tipografia e intervalos, preservando CTA e microprova.

A entrada acontece em cinco tempos: fotografia aproxima, véu lavanda revela, eixo cresce, título sobe por linhas e ações aparecem. Tudo termina rapidamente e é removido em `prefers-reduced-motion`.

## Menu e Navegação

No topo de todas as páginas, o fundo do header começa transparente, sem filete, sem sombra e sem blur. Ao rolar, o vidro paper translúcido aparece em fade suave com blur leve, filete sutil, texto escuro e sombra mínima. O CTA usa lavanda profunda com texto branco. Links têm sublinhado lavanda/verde que cresce da esquerda.

No mobile, mostrar wordmark, CTA compacto e botão de menu com alvo de 48px. O botão abre painel fullscreen em papel quente, links grandes em Fraunces, CTA na base, bloqueio de scroll, foco controlado e fechamento por Escape. Indicar a página atual com `aria-current`.

## Mídia, IA, Pexels e Vídeo

Prioridade obrigatória:

1. Instagram oficial `@casabelie`.
2. Imagem autoral gerada para a marca quando o Instagram não resolver.
3. Pexels somente em último caso.

Não utilizar imagens do site atual. O hero usa a fotografia oficial do reel `DWH5_7pEcK4`, restaurada e expandida horizontalmente para desktop, com versão vertical preservada para mobile. As demais imagens reais devem vir de posts oficiais já catalogados e ter overlays de texto removidos por crop, nunca por invenção de conteúdo.

Se for necessário gerar nova mídia, usar o seguinte prompt-base: “Fotografia editorial natural da Casa Beliê em Laranjeiras, arquitetura clara com esquadrias azul suave, madeira, plantas e quintal; crianças apenas de costas ou sem identidade reconhecível; brincar livre e decoração afetiva; luz natural quente e difusa; composição documental, sem texto, sem logo, sem aparência de banco, sem telas, neon ou buffet genérico.”

Não usar vídeo no primeiro build. Vídeo futuro precisa ter poster otimizado, controles e nunca iniciar com som.

## Estrutura do Site

### Home

Hero imersivo; manifesto com frase grande e fatos verificáveis; experiência em composição fotográfica irregular; jornada da festa completa em cinco etapas; seção do espaço com galeria assimétrica; apresentação textual de Isabela e Cecília com retratos públicos do Instagram recortados como avatares, sem inventar biografias; prova honesta com Instagram e fatos; destaque editorial do blog; CTA final para orçamento.

### Sobre

Hero full-bleed sobre a ideia de abrir a própria casa; história do desejo de unir beleza e simplicidade; princípios da Casa Beliê; bloco editorial sobre Isabela e Cecília, claramente sem inventar biografias além do briefing; CTA.

### Festas

Hero full-bleed focado na celebração resolvida; oferta principal Festa Beliê completa; linha narrativa espaço → buffet → decoração → recreação → equipe; bloco de itens incluídos; bloco de extras/cardápio como possibilidades a confirmar em orçamento; formatos secundários sem preços; FAQ prática com itens que precisam de confirmação apresentados como conversa de orçamento; CTA.

### Espaço

Hero full-bleed da casa/quintal; galeria editorial com fotos oficiais; lista ampla de ambientes confirmados; seção “800 m² para explorar” sem superlativos; localização pública em Laranjeiras com orientação de confirmar visita por atendimento; CTA para agendar visita.

### Blog / Novidades

Hero full-width editorial; artigo destaque; lista assimétrica de posts publicados; páginas individuais com leitura confortável e CTA contextual. `/novidades/` encaminha para `/blog/`.

### Contato

Hero full-width com ação direta; formulário com nome, contato, tipo de evento, data aproximada e mensagem. Validação acessível. Ao enviar, abrir conversa preenchida no WhatsApp. Mostrar endereço e atendimento por agendamento, sem publicar horário não confirmado.

### Política e 404

Política de privacidade clara, com dados ainda sujeitos à validação destacados no README, não como aviso visual. Página 404 autoral com linguagem da casa e rotas de retorno.

### Admin do blog

Antes da senha, mostrar somente login. Depois da autenticação, permitir criar, editar, publicar, salvar rascunho, arquivar, excluir e subir imagem. APIs devem ocultar rascunhos e arquivados sem senha.

## Componentes e Interações

- Botões pill moderados, estados default, hover, focus-visible, active, disabled e loading. O contorno gestual do hover deve ser desenhado progressivamente ao redor do botão, não aparecer inteiro de uma vez; a cor do traço precisa manter contraste sobre o fundo.
- Header com estado de topo, rolado e menu mobile aberto.
- Eixo Casa–Quintal em títulos, linha da jornada, galeria e CTA.
- Galeria em lista semântica com imagens dimensionadas, captions reais e zoom dispensável no primeiro build.
- FAQ com `details/summary` nativo e alvo de toque confortável.
- Formulários com labels persistentes, mensagens de erro ligadas por `aria-describedby` e confirmação textual.
- Reveals por `IntersectionObserver` apenas em blocos-chave, com variação entre linha, mídia e texto.
- Sem biblioteca de animação, carrossel automático ou JS decorativo.

## Critérios de Qualidade Premium

- Fraunces cria calor editorial; Manrope garante clareza de interface.
- A tipografia deve seguir a delicadeza visual da Casa Beliê no Instagram: Fraunces majoritariamente em 350, notas Kalam em 400 e ações Manrope em 600, evitando sensação pesada de anúncio ou editorial duro.
- Ritmo alterna seções amplas, faixas compactas e galeria densa; nenhuma anatomia se repete consecutivamente.
- Lavanda clara e verde médio ficam em superfícies; texto usa versões profundas com contraste AA.
- O hero comunica festa infantil, família, alegria e ação sem o logo.
- Mídia abaixo da dobra usa pipeline do Astro, formatos modernos, dimensões e lazy loading.
- Nenhuma página parece template de buffet, parque indoor ou site infantil saturado.
- Nenhum dado provisório aparece como confirmado.
- Responsividade recompõe a experiência: menu, galeria, jornada, tipografia e CTAs mudam de comportamento entre 320px e desktop largo.

## Checklist de Revisão Visual

- Capturar Home, Festas, Espaço, Blog e Contato em 320, 768, 1024 e 1440+.
- Confirmar hero dominante em todas as páginas e viewports.
- Conferir menu, CTA, foco, hover, menu mobile e formulário com erro.
- Confirmar zero scroll horizontal, texto cortado, sobreposição ou rosto coberto.
- Verificar que cada imagem vem do Instagram oficial ou de geração documentada.
- Revisar cada espaço vazio: nenhum buraco, faixa morta, asset ausente, padding exagerado ou área sem função em qualquer viewport.
- Reaplicar teste dos 5 segundos, teste do print e teste do concorrente depois das correções.
- Repetir a revisão completa ao menos duas vezes.

## Critério de Pronto

O site está pronto quando build e doctor passam; todas as rotas funcionam; blog cumpre os sete testes obrigatórios; não há overflow ou texto cortado de 320px a desktop largo; todos os CTAs e formulários têm destino; mídia e fontes estão otimizadas; contraste e foco passam AA; `prefers-reduced-motion` é respeitado; o Eixo Casa–Quintal aparece com consistência; nenhuma informação foi inventada; a auditoria visual registra correções e limitações; e o resultado parece digno de apresentação ao cliente diante dos melhores concorrentes locais.
