# DS 03.1 — Academia CrossFit Energia · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** [Gymbox](https://gymbox.com) (Londres, Reino Unido) — o "antídoto para academias chatas": tipografia gigante, vídeos de alta energia, tom provocador. Perfil listado no Awwwards; campanha "Cutting Through The Bulls**t" (2023) citada como case de disrupção da categoria fitness (Econsultancy, Trendhunter). Prêmios específicos com data/nota não confirmados individualmente — tratar como referência estilística de alto nível.

**Tradução para o contexto local BR:** o aluno de box/academia de bairro decide por proximidade, comunidade e energia percebida — e a porta de entrada universal do segmento é a **aula experimental grátis**. O site precisa converter em agendamento de aula grátis (formulário ou WhatsApp), não em venda direta de plano.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Academia / box de CrossFit | ★★★★★ | uso direto do repertório |
| Escola de luta (muay thai, jiu-jitsu, boxe) | ★★★★★ | fotografia P&B de combate; stats viram graduações/títulos |
| Personal trainer / assessoria esportiva | ★★★★☆ | reduzir escala tipográfica 1 grau; prova social = resultados de alunos |
| Estúdio funcional / HIIT | ★★★★★ | manter marquees e counter-up |
| Arena de e-sports / gaming house | ★★★★☆ | glow amarelo conversa com estética gamer; trocar léxico de treino |
| Assessoria de corrida | ★★★☆☆ | suavizar o tom "combate" para "superação" |

**Anti-fit:** clínicas de saúde, pilates terapêutico, yoga, estúdios de bem-estar — a agressividade visual (preto absoluto + neon + imperativo) soaria hostil. Para esses, ver personalidade 01 ou 02.

---

## 3. Fatores de conversão (do JSON, com hipóteses mensuráveis)

1. **CTA "aula grátis" em 3 pontos** — navegação (sempre visível), hero (primeira dobra) e seção final. Oferta de entrada sem atrito repetida em todo o funil. Meta: ≥ 70% das conversões partindo desses 3 CTAs.
2. **Urgência honesta** — badges de vagas limitadas *por turma* ("16 atletas no máximo") e marquee de oferta. Sem falsa escassez: a limitação é real e verificável.
3. **Prova social numérica animada (counter-up)** — "+500 alunos, 40 aulas/semana, 600m²" em JetBrains Mono amarelo. Credibilidade em 3 segundos de scroll.
4. **Depoimento como manchete de RESULTADO** — "-14kg em 5 meses", nunca elogio genérico. Resultado mensurável converte mais que adjetivo.
5. **Plano featured em amarelo com ancoragem de preço** — o card central `#FFD600` com badge rotacionada direciona a escolha para o plano-alvo.
6. **Tipografia gigante + contraste 14.87:1** — mensagem principal lida em qualquer condição, inclusive mobile na rua sob sol.
7. **Fricção zero declarada** — "Sem fidelidade. Sem letra miúda." remove a objeção nº 1 do segmento (medo de contrato).

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique "AGENDAR AULA EXPERIMENTAL" | event por posição (nav/hero/final) |
| Envio do formulário de aula grátis | submit event + turma escolhida |
| Clique WhatsApp | `wa.me` com UTM |
| Scroll até planos | scroll depth |
| Clique em plano (qual card) | event com id do plano |
| Visualização dos stats (counter-up disparado) | IntersectionObserver event |

---

## 4. Metas de performance (Core Web Vitals)

| Métrica | Alvo | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.5s | Headline em TEXTO (não imagem) como elemento LCP; `font-display: swap` + preload do Anton woff2; vídeo/gradiente de fundo carregado depois do texto |
| **INP** | < 200ms | Marquees e gradientes em CSS puro (zero JS); counter-up com IntersectionObserver leve; **JS total < 30KB** |
| **CLS** | < 0.1 | `min-height` reservado para hero e marquees; animações só com transform/opacity — nunca propriedades de layout |
| **FID** | < 100ms | idem INP — quase nenhum JS bloqueante |

### Orçamento de página (primeira dobra)

- Fontes: Anton (1 peso) + Inter (2 pesos) + JetBrains Mono (1 peso, subset numérico se possível) — woff2, ~110KB total.
- Zero imagem obrigatória acima do fold (hero é gradiente CSS animado); vídeo real, se usado, entra lazy com poster gradiente.
- CSS crítico inline ≤ 14KB; `animations.css` pode ser adiado.

---

## 5. Checklist de lançamento

- [ ] CTA de aula grátis clicável nos 3 pontos (nav/hero/final) em mobile e desktop
- [ ] Counter-up dispara uma única vez e mostra valor final com reduced-motion
- [ ] Vídeo de fundo (se usado): mudo, com botão de pausa, poster de gradiente
- [ ] Lighthouse mobile ≥ 90 em Performance e Accessibility
- [ ] Schema.org `ExerciseGym`/`LocalBusiness` com horários e geo
- [ ] Teste de contraste em campo: tela sob luz solar direta
