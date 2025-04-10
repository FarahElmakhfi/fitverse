
const request = require("supertest");
const app = require("../server"); // assure-toi que server.js exporte l'app Express

describe("GET /api/products", () => {
  it("devrait retourner une liste de produits", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Liste des produits");
  });
});
