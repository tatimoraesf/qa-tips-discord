import { getTip, sendWithRetry } from "../src/index";

describe("getTip", () => {
  it('Deve retornar uma dica válida', () => {
    const tip = getTip();

    expect(tip.title).toBeDefined();
    expect(tip.description).toBeDefined();
    expect(tip.category).toBeDefined();
    expect(tip.level).toBeDefined();
  });

  it('Não deve repetir dicas consecutivas', () => {
    const tip1 = getTip();
    const tip2 = getTip();

    expect(tip1).not.toEqual(tip2);
  });
});

describe('sendWithRetry', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('Deve lançar erro quando o Discord retorna falha', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: 'Service Unavailable'
    });
    const consoleSpy = jest.spyOn(console, "error");
    await sendWithRetry({}, 0);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Todas as tentativas falharam"),
      expect.any(Error)
    );
  });
});