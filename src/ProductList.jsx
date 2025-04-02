import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.price} MAD</p>
          <p>Couleurs : {product.color.join(", ")}</p>
          <p>Tailles : {product.size.join(", ")}</p>
          <a className="text-blue-500 text-sm" href={product.image3D} target="_blank" rel="noreferrer">Voir le fichier 3D</a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;