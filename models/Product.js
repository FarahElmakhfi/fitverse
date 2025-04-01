const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  size: [String], // ["S", "M", "L"]
  color: [String], // ["red", "blue", "black"]
  image3D: String, // lien du fichier 3D (GLB/GLTF)
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

