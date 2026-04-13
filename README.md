# 🔬 Discord Shift-Left Daily Tips

Bot que envia automaticamente uma **dica aleatória de Shift-Left Testing** no Discord, de segunda a sexta, via GitHub Actions.

## O que é Shift-Left Testing?

Shift-left significa mover os testes para o **início** do ciclo de desenvolvimento — não só no final. Quanto antes você encontra um bug, mais barato é corrigir. Este bot ajuda a disseminar essa cultura no time, uma dica por vez.

## Como funciona

1. O GitHub Actions roda todo dia útil às **09:00 (horário de Brasília)**
2. O script escolhe uma dica aleatória entre as disponíveis
3. A dica é enviada para o canal do Discord configurado via **Webhook**

## Estrutura do projeto

```
discord-shift-left-tips/
├── .github/
│   └── workflows/
│       └── daily-tip.yml     # Cron job do GitHub Actions
├── src/
│   ├── index.ts              # Script principal (busca e envia a dica)
│   └── tips.ts               # Banco de dicas (100 dicas de shift-left)
├── data/
│   └── sent-tips.json        # Dicas já enviadas
├── tests/
│   ├── index.spec.ts         # Testes do script
├── package.json
├── tsconfig.json
└── README.md
```

## Setup

### 1. Crie um Discord Webhook

1. No Discord, abra as **Configurações do canal** onde quer receber as dicas
2. Vá em **Integrações → Webhooks**
3. Clique em **Novo Webhook**
4. Dê um nome (ex: "Shift-Left Bot") e escolha o canal
5. Copie a **URL do Webhook** (começa com `https://discord.com/api/webhooks/...`)

### 2. Configure o GitHub Secret

1. No seu repositório GitHub, vá em **Settings → Secrets and variables → Actions**
2. Clique em **New repository secret**
3. Nome: `DISCORD_WEBHOOK_URL`
4. Valor: a URL do webhook copiada acima

### 3. Instale as dependências e teste localmente

```bash
npm install

# Para testar localmente (precisa ter a variável de ambiente)
export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
npm start
```

### 4. Rode manualmente pelo GitHub Actions

Na aba **Actions** do seu repositório, selecione o workflow **Shift-Left Daily Tip** e clique em **Run workflow**.

## Personalizando o horário

No arquivo `.github/workflows/daily-tip.yml`, ajuste o cron:

```yaml
- cron: "0 12 * * 1-5"  # 12:00 UTC = 09:00 Brasília (UTC-3)
```

## Adicionando novas dicas

Abra `src/tips.ts` e adicione sua dica no array `tips`:

```typescript
export const tips: Tip[] = [
  {
  title: "💡 **Shift-Left #101 — Sua nova dica aqui**",
  description: "Descrição da dica...",
  category: "Categoria da dica",
  level: "Nível da dica",
}
];
```

## Testes

Usei Jest para testar a lógica principal do bot. Os testes cobrem:
- Validação de que a dica retornada tem todos os campos obrigatórios
- Anti-repetição — verifica que duas chamadas consecutivas não retornam a mesma dica
- Retentativa — simula falha do Discord via mock do `fetch` e verifica que o erro é logado após esgotar as tentativas

Para rodar os testes:
```bash
npm test
```

## Decisões técnicas

**Persistência via git commit:** optei por salvar o histórico de dicas enviadas (`data/sent-tips.json`) via commit automático no GitHub Actions. Artifacts do GitHub Actions não persistem entre runs diferentes do mesmo workflow, então o commit garante que o histórico sobrevive entre execuções.

**Retry automático:** o envio para o Discord tem retentativa automática de até 3 vezes em caso de falha. Isso torna o bot mais resiliente a instabilidades temporárias da API do Discord.

## Tecnologias

- **Node.js** + **TypeScript**
- **GitHub Actions** (cron job)
- **Discord Webhooks**
