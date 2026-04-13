import "dotenv/config";
import { tips, Tip } from "./tips";
import fs from "fs";
import path from "path";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const DATA_FILE = path.resolve(__dirname, "..", "data", "sent-tips.json");

interface SentTipsData {
  sentIndices: number[];
}

export function loadSentTips() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao carregar sent-tips.json:", error);
    return { sentIndices: [] };
  }
}

export function saveSentTips(data: SentTipsData): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao salvar sent-tips.json:", error);
  }
}

export async function sendWithRetry(payload: object, maxRetries: number = 3): Promise<void> {
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL não está definido");
  }
  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Falha: ${response.statusText}`);
    }
  } catch (error) {
    if (maxRetries > 0) {
      console.log(`Tentando novamente... ${maxRetries} tentativas restantes`);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await sendWithRetry(payload, maxRetries - 1);
    } else {
      console.error("❌ Todas as tentativas falharam:", error);
    }
  }
}


export function getTip(): Tip {
  const data = loadSentTips();
  const allIndices = tips.map((_, i) => i)
  let remaining = allIndices.filter(i => !data.sentIndices.includes(i))

  if (remaining.length === 0) {
    console.log("🔄 Ciclo completo! Reiniciando...")
    saveSentTips({ sentIndices: [] });
    remaining = allIndices;
  }
  const pick = remaining[Math.floor(Math.random() * remaining.length)]

  saveSentTips({ sentIndices: [...data.sentIndices, pick] })

  console.log(`Dica enviada: ${pick}`)
  console.log(`Total de dicas enviadas: ${data.sentIndices.length + 1}`)
  console.log(`Total de dicas disponíveis: ${tips.length}`)
  console.log(`Total de dicas restantes: ${remaining.length}`)

  return tips[pick];
}

async function sendTip(): Promise<void> {
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL não está definido");
  }

  const tip = getTip();

  const payload = {
    embeds: [{
      "title": tip.title,
      "description": tip.description,
      "color": 5763719,
      "footer": {
        "text": `Categoria: ${tip.category} | Nível: ${tip.level}`
      }
    }]
  }
  const response = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    await sendWithRetry(payload);
  }

}
sendTip().catch((err) => {
  console.error("❌ Falha:", err.message);
  process.exit(1);
})