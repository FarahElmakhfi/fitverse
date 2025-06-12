document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (password !== confirm) {
    alert("❌ Les mots de passe ne correspondent pas !");
    return;
  }

  const role = 'consultant'; // ✅ on force toujours consultant pour les utilisateurs

  try {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await res.json();

    if (res.ok) {
      alert('✅ Inscription réussie !');
      window.location.href = '../connexion/connexion.html';
    } else {
      alert(data.message || '❌ Échec de l\'inscription');
    }
  } catch (error) {
    alert('❌ Erreur réseau');
  }
});
