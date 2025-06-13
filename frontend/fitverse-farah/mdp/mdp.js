// mdp.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const emailInput = form.querySelector("input[type='email']");
      const email = emailInput.value.trim();
  
      if (!email) {
        alert("Veuillez entrer votre adresse e-mail.");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert(" Un lien de réinitialisation vous a été envoyé par e-mail.");
          emailInput.value = "";
        } else {
          alert(`Erreur : ${data.message || "Adresse e-mail invalide ou serveur indisponible."}`);
        }
      } catch (error) {
        alert(" Une erreur est survenue. Veuillez réessayer plus tard.");
        console.error("Erreur lors de l'envoi :", error);
      }
    });
  });
  