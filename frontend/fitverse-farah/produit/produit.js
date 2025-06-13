// produit.js

document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("add-to-cart");
    const productCard = document.querySelector(".product-card");
  
    if (addToCartBtn && productCard) {
      addToCartBtn.addEventListener("click", () => {
        const product = {
          id: productCard.getAttribute("data-id"),
          name: productCard.querySelector(".product-title").innerText,
          price: parseFloat(productCard.querySelector(".product-price").innerText.replace("€", "").trim())
        };
  
        let panier = JSON.parse(localStorage.getItem("panier")) || [];
        panier.push(product);
        localStorage.setItem("panier", JSON.stringify(panier));
  
        alert(`${product.name} a été ajouté au panier !`);
      });
    }
  });
  