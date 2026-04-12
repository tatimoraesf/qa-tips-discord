import "dotenv/config";
import { tips } from "./tips";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

function getTipOfTheDay(): string {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index];
}

function toDiscordMarkdown(text: string): string {
  // Slack usa *text* para bold, Discord usa **text**
  return text.replace(/\*([^*\n]+)\*/g, "**$1**");
}

async function sendTip(): Promise<void> {
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error(
      "DISCORD_WEBHOOK_URL não definida. Configure como variável de ambiente ou GitHub Secret."
    );
  }

  const tip = getTipOfTheDay();

  const payload = {
    content: toDiscordMarkdown(tip),
    username: "Shift-Left Bot 🔬",
  };

  const response = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Erro ao enviar para o Discord: ${response.status} — ${body}`
    );
  }

  console.log(`✅ Dica enviada com sucesso! Index: ${tips.indexOf(tip) + 1}/${tips.length}`);
  console.log(`📝 Dica: ${tip.substring(0, 80)}...`);
}

sendTip().catch((err) => {
  console.error("❌ Falha ao enviar dica:", err.message);
  process.exit(1);
});
