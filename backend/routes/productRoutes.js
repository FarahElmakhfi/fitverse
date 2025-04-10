const express = require("express");
const router = express.Router();

// Exemple de route test
router.get("/", (req, res) => {
  res.json({ message: "Liste des produits" });
});

module.exports = router;
