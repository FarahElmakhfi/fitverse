// dashboard-admin.js

document.addEventListener("DOMContentLoaded", () => {
    const productBtn = document.querySelector('.card:nth-child(1)');
    const usersBtn = document.querySelector('.card:nth-child(2)');
    const statsBtn = document.querySelector('.card:nth-child(3)');
  
    productBtn.addEventListener('click', () => {
      window.location.href = '../produits/gestion-produits.html';
    });
  
    usersBtn.addEventListener('click', () => {
      window.location.href = '../utilisateurs/gestion-utilisateurs.html';
    });
  
    statsBtn.addEventListener('click', () => {
      window.location.href = '../stats/statistiques.html';
    });
  });
  