# 🔬 Discord Shift-Left Daily Tips

Bot que envia automaticamente uma **dica aleatória de Shift-Left Testing** no Discord, de segunda a sexta, via GitHub Actions.

## O que é Shift-Left Testing?

Shift-left significa mover os testes para o **início** do ciclo de desenvolvimento — não só no final. Quanto antes você encontra um bug, mais barato é corrigir. Este bot ajuda a disseminar essa cultura no seu time, uma dica por vez.

## Como funciona

1. O GitHub Actions roda todo dia útil às **09:00 (horário de Brasília)**
2. O script escolhe uma dica aleatória entre as 100 disponíveis
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

Use [crontab.guru](https://crontab.guru) para montar seu horário.

## Adicionando novas dicas

Abra `src/tips.ts` e adicione sua dica no array `tips`:

```typescript
export const tips: string[] = [
  // ...dicas existentes...
  "💡 **Shift-Left #101 — Sua nova dica aqui**\nDescrição da dica...",
];
```

## Tecnologias

- **Node.js** + **TypeScript**
- **GitHub Actions** (cron job)
- **Discord Webhooks**
