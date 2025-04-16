const express = require('express');
const router = express.Router();

// Exemple de route GET pour les produits
router.get('/', (req, res) => {
  res.json([{ name: 'T-shirt 3D', price: 120 }]);
});

module.exports = router;
