const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

// ➕ Enregistrement d’un utilisateur
router.post("/register", registerUser);

// 🧪 Route de test (optionnelle)
router.get("/", (req, res) => {
  res.send("Route utilisateur OK");
});

module.exports = router;
