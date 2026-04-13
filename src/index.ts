import "dotenv/config";
import { tips, Tip } from "./tips";
import fs from "fs";
import path from "path";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const DATA_FILE = path.resolve(__dirname, "..", "data", "sent-tips.json");

interface SentTipsData {
  sentIndices: number[];
}
function loadSentTips() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao carregar sent-tips.json:", error);
    return { sentIndices: [] };
  }
}

function saveSentTips(data: SentTipsData): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao salvar sent-tips.json:", error);
  }
}


function getTip(): Tip {
  const data = loadSentTips();
  const allIndices = tips.map((_, i) => i)
  const remaining = allIndices.filter(i => !data.sentIndices.includes(i))
  const pick = remaining[Math.floor(Math.random() * remaining.length)]

  saveSentTips({ sentIndices: [...data.sentIndices, pick] })

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
    throw new Error(`Falha ao enviar mensagem: ${response.statusText}`);
  }

}
sendTip().catch((err) => {
  console.error("❌ Falha:", err.message);
  process.exit(1);
})