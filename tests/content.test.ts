import { describe, expect, it } from "vitest";
import {
  categories,
  INSTAGRAM_URL,
  MAP_URL,
  WHATSAPP_URL,
} from "@/lib/content";

describe("conteúdo público da demonstração", () => {
  it("mantém as cinco categorias previstas", () => {
    expect(categories.map((category) => category.name)).toEqual([
      "Feminino",
      "Masculino",
      "Infantil",
      "Calçados",
      "Presentes",
    ]);
  });

  it("usa links externos HTTPS e uma mensagem de WhatsApp pré-preenchida", () => {
    expect(WHATSAPP_URL).toMatch(/^https:\/\/wa\.me\/5566992426467\?text=/);
    expect(decodeURIComponent(WHATSAPP_URL)).toContain(
      "vim pelo site da Jaísa",
    );
    expect(INSTAGRAM_URL).toMatch(/^https:\/\//);
    expect(MAP_URL).toMatch(/^https:\/\//);
  });

  it("marca todas as fotografias de categoria com alternativa descritiva", () => {
    for (const category of categories) {
      expect(category.alt.length).toBeGreaterThan(30);
      expect(category.image.endsWith(".webp")).toBe(true);
    }
  });
});
