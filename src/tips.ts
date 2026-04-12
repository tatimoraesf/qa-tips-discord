export const tips: string[] = [
  // Fundamentos de Shift-Left (1-10)
  "💡 *Shift-Left #1 — O que é?*\nShift-left significa mover os testes para o início do desenvolvimento, e não só no final. Quanto antes você encontra um bug, mais barato é corrigir. Um bug em produção pode custar 100x mais do que um bug encontrado no código antes de ser commitado.",

  "💡 *Shift-Left #2 — O custo de um bug*\nEstudos mostram que um bug encontrado em produção custa ~30x mais do que encontrado durante o design. Shift-left não é só qualidade — é economia. Mostre esses números para seu time!",

  "💡 *Shift-Left #3 — QA desde o primeiro dia*\nNão espere o código estar 'pronto' para começar a testar. Leia os critérios de aceitação antes do desenvolvimento. Perguntas de QA no planejamento evitam retrabalho.",

  "💡 *Shift-Left #4 — Três amigos (Three Amigos)*\nAntes de desenvolver uma feature, reúna: Dev + QA + PO. Cada um traz uma perspectiva diferente. O QA pergunta 'o que pode dar errado?', o Dev pensa em como construir, o PO define o valor. Juntos cobrem muito mais terrenos.",

  "💡 *Shift-Left #5 — Pirâmide de Testes*\nA pirâmide: muitos testes unitários (rápidos e baratos), alguns de integração (médios), poucos E2E (lentos e caros). Shift-left significa investir na base da pirâmide.",

  "💡 *Shift-Left #6 — Prevenção > Detecção*\nShift-left é sobre prevenir defeitos, não apenas detectá-los mais cedo. Quando QA participa do design, muitos bugs simplesmente nunca são criados. A melhor correção é o bug que nunca existiu.",

  "💡 *Shift-Left #7 — Feedback contínuo*\nO coração do shift-left é o feedback rápido. Cada etapa do pipeline deve dar feedback em minutos, não dias. Se o dev precisa esperar 24h para saber que quebrou algo, o shift-left não está funcionando.",

  "💡 *Shift-Left #8 — Não é só automação*\nShift-left não é sinônimo de automação de testes. É uma mudança de mentalidade: qualidade como responsabilidade compartilhada desde o primeiro momento. Automação é uma ferramenta, não o objetivo.",

  "💡 *Shift-Left #9 — O papel do QA muda*\nNo shift-left, o QA deixa de ser o 'porteiro da qualidade' e vira um coach de qualidade. Você ensina o time a pensar em cenários de teste, a escrever testes melhores, a questionar requisitos ambíguos.",

  "💡 *Shift-Left #10 — Comece pequeno*\nNão tente implementar shift-left de uma vez. Comece com uma prática: talvez participar do refinamento, ou revisar code reviews. Depois expanda. Mudança cultural é gradual.",

  // Testes Unitários e TDD (11-20)
  "💡 *Shift-Left #11 — Testes unitários como documentação*\nUm bom teste unitário documenta o comportamento esperado da função. Quando você lê `it('deve retornar erro quando quantidade for zero')`, já entende a regra de negócio sem ler o código fonte.",

  "💡 *Shift-Left #12 — TDD (Test-Driven Development)*\nNo TDD você escreve o teste ANTES do código. Fluxo: 🔴 Red (teste falha) → 🟢 Green (código mínimo para passar) → 🔵 Refactor (melhorar sem quebrar). Isso força você a pensar na interface antes da implementação.",

  "💡 *Shift-Left #13 — Mocks e isolamento*\nTestes unitários devem ser rápidos e isolados. Use mocks para simular dependências externas (banco de dados, APIs, emails). Se um teste precisa de banco real para rodar, ele provavelmente é um teste de integração.",

  "💡 *Shift-Left #14 — Cobertura de código não é tudo*\n80% de cobertura com testes bons vale mais que 100% de cobertura com testes triviais. Foque nos caminhos críticos, nos edge cases e nas regras de negócio. Cobertura sem qualidade dá falsa confiança.",

  "💡 *Shift-Left #15 — Testes determinísticos*\nUm teste que passa às vezes e falha outras (flaky test) é pior que nenhum teste. Ele destrói a confiança do time nos testes. Investiga e corrija testes flaky imediatamente — trate como bug de alta prioridade.",

  "💡 *Shift-Left #16 — Nomes descritivos nos testes*\nNomeie seus testes como frases: `deve_rejeitar_pedido_com_estoque_insuficiente`. Quem lê o relatório de falha entende o problema sem abrir o código. Testes são documentação viva.",

  "💡 *Shift-Left #17 — Arrange-Act-Assert*\nEstruture seus testes em 3 blocos: Arrange (preparar dados), Act (executar a ação), Assert (verificar resultado). Essa estrutura torna os testes legíveis e previsíveis. Um teste bagunçado é difícil de manter.",

  "💡 *Shift-Left #18 — Testes de borda (boundary)*\nSempre teste os limites: zero, um, máximo, nulo, string vazia, lista vazia, data no passado, data no futuro. A maioria dos bugs mora nos extremos, não no caminho feliz.",

  "💡 *Shift-Left #19 — Refatoração com confiança*\nTestes unitários permitem refatorar sem medo. Se os testes passam, o comportamento foi preservado. Sem testes, cada mudança é um risco. Testes são a rede de segurança da evolução do código.",

  "💡 *Shift-Left #20 — Teste unitário rápido = feedback rápido*\nSe a suíte de testes unitários demora mais de 2 minutos para rodar, algo está errado. Testes unitários devem dar feedback em segundos. Se demoram, provavelmente estão acoplados a dependências externas.",

  // Code Review e Colaboração (21-30)
  "💡 *Shift-Left #21 — QA no Code Review*\nQA deve participar de code reviews! Você enxerga coisas que devs não enxergam: edge cases, tratamento de erros, mensagens de erro para o usuário final, acessibilidade. Não é só apontar bugs — é garantir qualidade no código.",

  "💡 *Shift-Left #22 — Checklist de Code Review para QA*\nAo revisar código, pergunte:\n• Todos os edge cases estão cobertos?\n• O que acontece se a entrada for nula/vazia?\n• As mensagens de erro fazem sentido para o usuário?\n• Existe algum caminho não testado?",

  "💡 *Shift-Left #23 — Pair Testing*\nPair Testing: QA e Dev resolvem um problema juntos em tempo real. O dev explica o que está fazendo, o QA pergunta 'mas e se...?'. Combina o conhecimento técnico do dev com a mentalidade de quebrar do QA.",

  "💡 *Shift-Left #24 — Mob Testing*\nMob Testing: o time inteiro testa junto uma feature. Um navega, os outros sugerem cenários. Gera conhecimento compartilhado e encontra bugs que ninguém encontraria sozinho. Experimente em features críticas.",

  "💡 *Shift-Left #25 — Comunicação assíncrona de qualidade*\nBugs encontrados no code review devem ter contexto: o que está errado, por quê, e como reproduzir. Comentários vagos como 'isso não funciona' não ajudam. Seja específico e construtivo.",

  "💡 *Shift-Left #26 — Pull Requests pequenos*\nPRs grandes são difíceis de revisar e escondem bugs. Incentive o time a fazer PRs menores e mais frequentes. Um PR com 50 linhas recebe uma revisão melhor do que um com 500.",

  "💡 *Shift-Left #27 — Revisão de testes no PR*\nAo revisar um PR, olhe os testes primeiro. Eles contam a história do que o código deve fazer. Se os testes não cobrem o cenário de erro, peça para adicionar. Testes ausentes são tão graves quanto bugs presentes.",

  "💡 *Shift-Left #28 — Knowledge sharing sessions*\nOrganize sessões onde QA compartilha bugs interessantes que encontrou e Dev compartilha decisões técnicas. Quando todos entendem o sistema melhor, a qualidade melhora organicamente.",

  "💡 *Shift-Left #29 — Bug bash colaborativo*\nOrganize sessões de bug bash onde todo o time (dev, QA, PO, design) testa uma feature antes do release. Muitos olhos diferentes = muitos cenários diferentes. É divertido e eficaz.",

  "💡 *Shift-Left #30 — Documentação de decisões (ADR)*\nArchitecture Decision Records registram o porquê das decisões técnicas. Quando QA entende por que uma decisão foi tomada, pode testar os riscos daquela decisão específica.",

  // CI/CD e Automação (31-40)
  "💡 *Shift-Left #31 — Testes no CI/CD*\nSe os testes só rodam localmente, na prática não existem. Configure testes automáticos no GitHub Actions (ou similar) para rodar em todo Pull Request. Nenhum código entra na main sem passar nos testes.",

  "💡 *Shift-Left #32 — Fail Fast no Pipeline*\nOrganize seu pipeline para falhar rápido: primeiro os testes mais rápidos (unitários), depois os mais lentos (integração, E2E). Se o unitário falhar, não perca tempo rodando E2E. Feedback rápido = correção rápida.",

  "💡 *Shift-Left #33 — Lint e análise estática*\nFerramentas como ESLint, TypeScript e SonarQube encontram bugs antes de você rodar uma linha de código. São a forma mais barata de qualidade. Adicione no CI e trate warnings como erros.",

  "💡 *Shift-Left #34 — Pipeline como guardião de qualidade*\nSeu pipeline de CI é a última linha de defesa antes da main. Ele deve rodar: lint, type check, testes unitários, testes de integração, análise de segurança. Se qualquer etapa falhar, o merge é bloqueado.",

  "💡 *Shift-Left #35 — Testes paralelos no CI*\nTestes lentos no CI desestimulam o time a rodar testes. Paralelizar a execução de testes pode reduzir o tempo de 30 minutos para 5. Investir em CI rápido é investir em qualidade.",

  "💡 *Shift-Left #36 — Feature flags para deploy seguro*\nFeature flags permitem deploy sem release. Você faz deploy do código novo desligado, testa em produção com uma porcentagem pequena, e só então liga para todos. Menos risco, mais controle.",

  "💡 *Shift-Left #37 — Ambientes efêmeros por PR*\nCrie um ambiente de preview para cada Pull Request. O QA testa a feature no ambiente do PR antes do merge. Bugs são encontrados antes de chegar na branch principal.",

  "💡 *Shift-Left #38 — Monitore o tempo do pipeline*\nSe o pipeline leva mais de 15 minutos, o time vai começar a ignorar ou evitar. Monitore e otimize. Cache de dependências, testes paralelos e builds incrementais fazem diferença.",

  "💡 *Shift-Left #39 — Rollback automatizado*\nTenha um mecanismo de rollback automático. Se o deploy causar um aumento nos erros, reverter deve ser um clique. Confiança no rollback permite deploys mais frequentes e menores.",

  "💡 *Shift-Left #40 — Canary deployments*\nDeploy canário envia a nova versão para 1-5% dos usuários primeiro. Se as métricas ficam estáveis, expande gradualmente. É como um teste A/B para estabilidade. O QA deve ajudar a definir os critérios de sucesso do canário.",

  // Requisitos e Planejamento (41-50)
  "💡 *Shift-Left #41 — BDD (Behaviour-Driven Development)*\nBDD descreve comportamentos em linguagem natural: `Dado que o usuário tem saldo insuficiente, Quando ele tentar comprar, Então deve ver uma mensagem de erro clara.` QA, Dev e PO entendem o mesmo critério — elimina ambiguidade.",

  "💡 *Shift-Left #42 — Critérios de aceitação são contratos*\nAntes de começar qualquer feature, os critérios de aceitação devem estar escritos, revisados e aprovados. Critério vago = interpretação diferente = retrabalho. QA deve ser o guardião desses critérios.",

  "💡 *Shift-Left #43 — Exploratório no começo*\nTestes exploratórios não são só para o final. Explore protótipos, wireframes e ambientes de dev. Encontrar problemas de UX no wireframe é infinitamente mais barato que encontrar em produção.",

  "💡 *Shift-Left #44 — Refinamento é prevenção*\nO refinamento (grooming) é sua melhor oportunidade de shift-left. É onde requisitos vagos se tornam claros, onde cenários de teste são discutidos, onde 'e se...?' é uma pergunta bem-vinda.",

  "💡 *Shift-Left #45 — Mapeamento de riscos*\nAntes de cada sprint, mapeie os riscos: o que é mais complexo? O que tem mais integrações? O que mudou recentemente? Concentre seus testes nos pontos de maior risco. Testar tudo igualmente não é eficiente.",

  "💡 *Shift-Left #46 — User stories testáveis*\nSe uma user story não pode ser testada, ela não está pronta para desenvolvimento. Critérios de aceitação devem ser verificáveis: não 'o sistema deve ser rápido', mas 'a página deve carregar em menos de 2 segundos'.",

  "💡 *Shift-Left #47 — Cenários negativos no planejamento*\nDurante o planejamento, para cada cenário feliz, pergunte: 'e o cenário triste?'. O que acontece quando o pagamento falha? Quando a API externa está fora? Quando o usuário faz algo inesperado?",

  "💡 *Shift-Left #48 — Definition of Ready*\nAssim como existe Definition of Done, crie uma Definition of Ready. Uma task só entra no sprint se tiver: critérios de aceitação claros, dependências mapeadas, cenários de teste discutidos, e estimativa validada.",

  "💡 *Shift-Left #49 — Prototipação rápida*\nPrototipar antes de implementar é shift-left puro. Um protótipo no Figma testado com 5 usuários evita semanas de retrabalho. QA pode participar dos testes de usabilidade do protótipo.",

  "💡 *Shift-Left #50 — Impacto de dependências externas*\nAntes de integrar com uma API externa, pergunte: qual o SLA? O que acontece se cair? Tem rate limiting? A documentação está atualizada? Essas perguntas no planejamento evitam surpresas em produção.",

  // Testes de API e Contrato (51-60)
  "💡 *Shift-Left #51 — Testes de contrato*\nContrato de API define o que um serviço promete entregar. Testes de contrato (ex: Pact) garantem que mudanças no backend não quebrem o frontend silenciosamente. Encontre breaking changes antes de chegar em produção.",

  "💡 *Shift-Left #52 — Testes de API antes da UI*\nSempre teste a API antes de testar a UI. Se a API retorna dados errados, a UI vai estar errada de qualquer forma. Testes de API são mais rápidos, mais estáveis e mais fáceis de debugar.",

  "💡 *Shift-Left #53 — Swagger/OpenAPI como fonte de verdade*\nMantenha a documentação da API atualizada com Swagger/OpenAPI. QA pode gerar testes automaticamente a partir da especificação. Se o código diverge do Swagger, alguém está errado — descubra quem.",

  "💡 *Shift-Left #54 — Teste de schema de resposta*\nNão teste só o status HTTP 200. Valide o schema completo da resposta: tipos dos campos, campos obrigatórios, formato de datas. Uma API que retorna 200 com dados errados é pior que uma que retorna 500.",

  "💡 *Shift-Left #55 — Teste de performance de API*\nMeça o tempo de resposta das APIs durante os testes. Se uma query começa a demorar mais com volume maior de dados, é melhor descobrir agora do que quando o cliente ligar reclamando.",

  "💡 *Shift-Left #56 — Versionamento de API*\nMudanças em APIs podem quebrar consumidores. Teste que a versão anterior da API ainda funciona quando uma nova versão é lançada. Testes de retrocompatibilidade evitam incidentes em cascata.",

  "💡 *Shift-Left #57 — Mock de APIs externas*\nNão dependa de APIs externas nos testes do CI. Use WireMock, MSW ou similar para simular respostas. Isso torna os testes mais rápidos, determinísticos e independentes de terceiros.",

  "💡 *Shift-Left #58 — Teste de erro em APIs*\nTeste o que a API faz quando recebe dados inválidos: body vazio, tipos errados, campos extras, payloads gigantes. Uma API robusta rejeita graciosamente — não quebra silenciosamente.",

  "💡 *Shift-Left #59 — Health checks e readiness*\nToda API deve ter um endpoint de health check. Teste que ele retorna informações úteis: status do banco, status de filas, versão do deploy. Monitore-os para detectar problemas antes dos usuários.",

  "💡 *Shift-Left #60 — Rate limiting e throttling*\nSua API tem rate limiting? Teste-o! Verifique que a resposta 429 é clara, que o header Retry-After está correto, e que o limite está adequado para o uso esperado.",

  // Segurança (61-70)
  "💡 *Shift-Left #61 — Security Shift-Left (DevSecOps)*\nSegurança também precisa ser shift-left. Adicione ferramentas de análise de vulnerabilidades no CI (Snyk, Dependabot). Revise autenticação e autorização no code review. Não deixe segurança para a equipe de infra resolver sozinha.",

  "💡 *Shift-Left #62 — OWASP nos testes*\nConheça o OWASP Top 10 — as 10 vulnerabilidades mais comuns em aplicações web. Como QA, inclua cenários de segurança nos seus testes: SQL injection, XSS, dados expostos, autenticação quebrada.",

  "💡 *Shift-Left #63 — Secrets no código*\nNunca commite senhas, tokens ou chaves de API no código. Use ferramentas como git-secrets ou truffleHog no CI para detectar secrets vazados. Um secret no histórico do git é um secret público.",

  "💡 *Shift-Left #64 — Dependências vulneráveis*\nSuas dependências podem ter vulnerabilidades conhecidas. Rode `npm audit` ou `yarn audit` regularmente. Automatize com Dependabot ou Renovate. Uma dependência desatualizada é uma porta aberta.",

  "💡 *Shift-Left #65 — Teste de permissões*\nSempre teste o controle de acesso: um usuário comum consegue acessar rotas de admin? Um usuário do time A vê dados do time B? Falhas de autorização são a vulnerabilidade mais comum e mais grave.",

  "💡 *Shift-Left #66 — HTTPS e cabeçalhos de segurança*\nVerifique que a aplicação usa HTTPS em todos os ambientes. Teste os headers de segurança: Content-Security-Policy, X-Frame-Options, Strict-Transport-Security. Sites como securityheaders.com ajudam.",

  "💡 *Shift-Left #67 — Sanitização de input*\nToda entrada do usuário é potencialmente maliciosa. Teste que o sistema sanitiza inputs: HTML em campos de texto, caracteres especiais em nomes, scripts em campos de busca. Validação no frontend não basta — teste o backend.",

  "💡 *Shift-Left #68 — Logs sem dados sensíveis*\nRevise os logs da aplicação: eles estão logando senhas, CPFs, números de cartão? Dados sensíveis em logs são uma violação de LGPD/GDPR esperando para acontecer. Inclua isso no checklist de code review.",

  "💡 *Shift-Left #69 — Teste de sessão e autenticação*\nTeste cenários de sessão: o token expira? O logout realmente invalida a sessão? É possível reutilizar um token antigo? Sessões mal gerenciadas são uma porta de entrada para invasores.",

  "💡 *Shift-Left #70 — Princípio do menor privilégio*\nTodo componente deve ter apenas as permissões mínimas necessárias. O serviço precisa de acesso de escrita ao banco inteiro ou só a uma tabela? QA deve questionar permissões excessivas durante o design.",

  // Qualidade como Cultura (71-80)
  "💡 *Shift-Left #71 — Qualidade é responsabilidade de todos*\nShift-left só funciona se o time todo abraçar a cultura. QA não é o 'guardião da qualidade' sozinho. Dev escreve teste unitário, PO revisa critérios, Infra monitora produção. Qualidade distribuída.",

  "💡 *Shift-Left #72 — Definition of Done com qualidade*\nA Definition of Done (DoD) da sua equipe inclui testes? Se não incluir, adicione. Uma task só está 'feita' quando: código escrito + testes passando + revisão de código feita + critérios de aceitação validados.",

  "💡 *Shift-Left #73 — Ambientes de teste iguais à produção*\nQuanto mais diferente for seu ambiente de teste do de produção, menos confiança você tem nos resultados. Use Docker para garantir paridade. O que passa no CI deve passar em prod.",

  "💡 *Shift-Left #74 — Métricas de qualidade*\nMeça: taxa de bugs em produção, tempo para encontrar bugs, cobertura de código, tempo de execução dos testes. O que não é medido não melhora. Apresente essas métricas para mostrar o impacto do shift-left.",

  "💡 *Shift-Left #75 — Retrospectivas de qualidade*\nNa retrospectiva, pergunte: 'algum bug poderia ter sido encontrado antes?' Se sim, o que faltou? Um teste? Uma revisão? Um critério de aceitação? Use bugs como oportunidade de aprendizado, não de culpa.",

  "💡 *Shift-Left #76 — Blameless post-mortems*\nQuando um incidente acontece, faça um post-mortem sem culpa. Foque em 'o que o sistema permitiu que acontecesse?' e não 'quem fez isso?'. Pessoas erram — sistemas devem prevenir que erros virem incidentes.",

  "💡 *Shift-Left #77 — Gamificação da qualidade*\nCrie dashboards de qualidade visíveis para o time: bugs encontrados antes vs depois do deploy, cobertura de testes, tempo do pipeline. Visibilidade gera consciência. Consciência gera melhoria.",

  "💡 *Shift-Left #78 — Onboarding com qualidade*\nQuando um novo membro entra no time, inclua qualidade no onboarding: como rodar testes, como funciona o CI, como participar do code review. Se a pessoa só aprende a codar sem testar, vai produzir sem qualidade.",

  "💡 *Shift-Left #79 — Tech debt é debt de qualidade*\nDívida técnica acumula juros. Código difícil de testar gera mais bugs. Código sem testes gera medo de refatorar. Medo de refatorar gera mais dívida técnica. Quebre o ciclo: reserve tempo para pagar a dívida.",

  "💡 *Shift-Left #80 — Celebre qualidade*\nCelebre quando o time encontra um bug antes da produção. Celebre quando o pipeline pega uma regressão. Celebre quando alguém adiciona um teste que faltava. Reforçar comportamentos positivos é mais eficaz que punir negativos.",

  // Testes E2E e Integração (81-90)
  "💡 *Shift-Left #81 — E2E com moderação*\nTestes E2E são importantes, mas caros e frágeis. Não tente cobrir tudo com E2E. Cubra os fluxos críticos de negócio: login, compra, pagamento, cadastro. O resto pode ser coberto por testes mais leves.",

  "💡 *Shift-Left #82 — Testes de integração focados*\nTestes de integração devem testar a interface entre componentes, não a lógica interna. Se dois serviços se comunicam via API, o teste de integração verifica o contrato. A lógica de cada serviço é testada com unitários.",

  "💡 *Shift-Left #83 — Dados de teste realistas*\nUse dados que pareçam reais nos seus testes. Nomes com acentos, emails longos, endereços internacionais. Dados genéricos como 'test123' não revelam bugs de formatação, truncamento ou encoding.",

  "💡 *Shift-Left #84 — Teste de regressão visual*\nFerramentas como Percy ou Chromatic comparam screenshots da UI antes e depois de mudanças. Capturam regressões visuais que testes funcionais não pegam: um botão que sumiu, um layout que quebrou, uma cor que mudou.",

  "💡 *Shift-Left #85 — Teste de responsividade*\nSeu app funciona no mobile? Teste em diferentes tamanhos de tela. Um menu que funciona no desktop pode ficar inacessível no celular. Inclua breakpoints de responsividade nos seus cenários de teste.",

  "💡 *Shift-Left #86 — Acessibilidade é qualidade*\nTeste com leitores de tela, navegação por teclado, contraste de cores. Acessibilidade não é um extra — é qualidade. Ferramentas como axe-core podem ser integradas ao CI para detectar problemas automaticamente.",

  "💡 *Shift-Left #87 — Teste de carga antecipado*\nNão espere o lançamento para fazer teste de carga. Teste com ferramentas como k6 ou Artillery durante o desenvolvimento. Descubra que a API suporta 100 requisições por segundo, não 10.000, antes de ir ao ar.",

  "💡 *Shift-Left #88 — Teste em condições adversas*\nTeste o que acontece quando as coisas dão errado: rede lenta (use Chrome DevTools throttling), servidor sobrecarregado, disco cheio, banco fora. A resiliência do sistema só é testada sob pressão.",

  "💡 *Shift-Left #89 — Teste de migração de dados*\nMudou o schema do banco? Teste a migração com dados reais (anonimizados). Migrações que funcionam com 10 registros podem falhar com 10 milhões. Teste volume, teste dados sujos, teste rollback.",

  "💡 *Shift-Left #90 — Smoke tests pós-deploy*\nApós cada deploy, rode um conjunto mínimo de smoke tests: a aplicação responde? O login funciona? A feature principal opera? Automatize isso — detecção em 2 minutos é melhor que detecção pelo cliente.",

  // Mindset e Soft Skills (91-100)
  "💡 *Shift-Left #91 — QA como parceiro de desenvolvimento*\nO papel do QA está mudando. Não somos mais os 'testadores do final'. Somos parceiros que ajudam o time a construir qualidade desde o início. Isso exige mais habilidade técnica — e muito mais impacto.",

  "💡 *Shift-Left #92 — Pergunte 'e se...?' cedo*\nA pergunta mais poderosa do QA é 'e se...?'. E se o usuário não preencher esse campo? E se a rede cair no meio da transação? E se dois usuários fizerem isso ao mesmo tempo? Faça essas perguntas no planejamento, não no final.",

  "💡 *Shift-Left #93 — Feedback loops curtos*\nShift-left é sobre encurtar loops de feedback. Teste local → CI → staging → produção. Cada etapa deve detectar problemas antes da próxima. Um loop curto significa menos tempo entre criar o bug e corrigi-lo.",

  "💡 *Shift-Left #94 — Documentação como prevenção de bugs*\nCódigo sem documentação gera bugs de entendimento. Como QA, incentive documentação inline, READMEs claros e Swagger atualizado. Um dev que entende o contrato da API comete menos erros.",

  "💡 *Shift-Left #95 — Empatia com o usuário*\nQA é o representante do usuário no time técnico. Pense como o usuário: ele não sabe o que é um 'null pointer exception'. A mensagem de erro deve dizer o que aconteceu e o que ele pode fazer. Teste as mensagens.",

  "💡 *Shift-Left #96 — Automatize o repetitivo*\nSe você testa o mesmo cenário manualmente toda sprint, automatize. Seu tempo como QA vale mais fazendo teste exploratório, revisando requisitos e pensando em cenários novos. Robô repete, humano pensa.",

  "💡 *Shift-Left #97 — Aprenda a ler código*\nComo QA, você não precisa ser expert em programação, mas precisa entender o que o código faz. Ler código te permite revisar PRs, entender onde estão os riscos e criar cenários de teste mais inteligentes.",

  "💡 *Shift-Left #98 — Shift-left não é shift-all*\nShift-left não significa eliminar testes no final. Significa adicionar qualidade antes. Você ainda precisa de testes E2E, exploratórios e de aceitação. O objetivo é que eles encontrem menos bugs, não que não existam.",

  "💡 *Shift-Left #99 — Melhoria contínua*\nShift-left é uma jornada, não um destino. Cada sprint, pergunte: 'como podemos encontrar bugs mais cedo dessa vez?' Pequenas melhorias consistentes geram grandes resultados ao longo do tempo.",

  "💡 *Shift-Left #100 — O objetivo final*\nO objetivo do shift-left não é ter mais testes — é ter software de mais qualidade, entregue mais rápido, com menos retrabalho. Qualidade não é um estágio do processo. É uma propriedade de como o time trabalha todos os dias.",
];
