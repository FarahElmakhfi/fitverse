const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../controllers/productController");

// Route principale pour récupérer les produits
router.get("/", getProducts);

// Route pour créer un produit
router.post("/", createProduct);

// 🧪 Route de test optionnelle
router.get("/test", (req, res) => {
  res.json([{ name: "T-shirt 3D", price: 120 }]);
});

module.exports = router;
