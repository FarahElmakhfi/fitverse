const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  size: [String],
  color: [String],
  image3D: String, // ex : "/t-shirt.glb"
}, {
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
