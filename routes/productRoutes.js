const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../controllers/productController');

// Ajouter un produit
router.post('/', addProduct);

// Lister tous les produits
router.get('/', getProducts);

module.exports = router;

