const request = require("supertest");
const app = require("../server");

describe("GET /api/products", () => {
  // Avant le test, créer un produit
  beforeAll(async () => {
    await request(app).post("/api/products").send({
      name: "T-shirt Test",
      description: "Un T-shirt pour les tests",
      price: 99,
      image3D: "/t-shirt.glb"
    });
  });

  it("devrait retourner un tableau de produits", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
