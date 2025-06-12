let selectedRole = 'consultant'; // Rôle par défaut

// Boutons pour choisir le rôle
document.getElementById('userBtn').addEventListener('click', () => {
  selectedRole = 'consultant';
});

document.getElementById('adminBtn').addEventListener('click', () => {
  selectedRole = 'admin';
});

document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      // Vérifie que le rôle côté frontend correspond à celui dans le backend
      if (data.role !== selectedRole) {
        alert("❌ Vous n'avez pas accès à cette interface avec ce compte.");
        return;
      }

      alert('✅ Connexion réussie !');

      // Stocker le token dans localStorage
      localStorage.setItem('token', data.token);

      // Redirection selon le rôle
      if (selectedRole === 'admin') {
        window.location.href = "/fitverse/frontend/fitverse-farah/dashboard-admin/dashboard-admin.html";

      } else {
        window.location.href = "/fitverse/frontend/fitverse-farah/dashboard-utilisateur/dashboard-utilisateur.html";

      }

    } else {
      alert(data.message || '❌ Échec de la connexion');
    }
  } catch (error) {
    alert('❌ Erreur réseau');
  }
});
