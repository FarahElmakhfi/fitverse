document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector(".panier-items");
    const totalSpan = document.querySelector(".panier-total span");
  
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
  
    const afficherPanier = () => {
      itemsContainer.innerHTML = "";
      let total = 0;
  
      panier.forEach((item, index) => {
        total += item.price;
  
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("panier-item");
        itemDiv.innerHTML = `
          <div class="item-info">
            <p class="item-name">${item.name}</p>
            <p class="item-price">${item.price.toFixed(2)} €</p>
          </div>
          <button class="btn-neon" data-index="${index}">Retirer</button>
        `;
        itemsContainer.appendChild(itemDiv);
      });
  
      totalSpan.textContent = `${total.toFixed(2)} €`;
    };
  
    afficherPanier();
  
    // Gestion des suppressions
    itemsContainer.addEventListener("click", (e) => {
      if (e.target.matches("button[data-index]")) {
        const index = Number(e.target.dataset.index);
        panier.splice(index, 1);
        localStorage.setItem("panier", JSON.stringify(panier));
        afficherPanier(); // recalcul du total + mise à jour
      }
    });
  
    // Gestion du bouton "Vider le panier"
    const viderBtn = document.getElementById("vider-panier");
    if (viderBtn) {
      viderBtn.addEventListener("click", () => {
        localStorage.removeItem("panier");
        afficherPanier(); // le panier sera vide
      });
    }
  });
  