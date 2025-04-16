const request = require("supertest");
const app = require("../server"); // adapte ce chemin selon ton projet

describe("GET /api/products", () => {
  it("devrait retourner un tableau de produits", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  test('Test de base', () => {
    expect(2 + 2).toBe(4);
  })
});
