const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", createProduct); // facultatif

module.exports = router;
