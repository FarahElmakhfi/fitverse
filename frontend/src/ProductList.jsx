import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Erreur chargement produits', err);
      });
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Aucun produit disponible.</p>
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
