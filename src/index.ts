import "dotenv/config";
import { tips } from "./tips";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

function getTip(): string {
  return tips[0];
}

async function sendTip(): Promise<void> {
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL não está definido");
  }

  const tip = getTip();

  const payload = {
    embeds: [{
      "title": "💡 Dica de Shift-Left",
      "description": tip,
      "color": 5763719
    }]
  }
  const response = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Falha ao enviar mensagem: ${response.statusText}`);
  }

}
sendTip().catch((err) => {
  console.error("❌ Falha:", err.message);
  process.exit(1);
})