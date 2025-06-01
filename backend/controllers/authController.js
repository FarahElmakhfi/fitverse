const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');


// ✅ Fonction REGISTER (inscription)
const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    const user = await User.create({
      name,
      email,
      password, // NE PAS le hasher ici
      role
    });

    res.status(201).json({
      message: "Utilisateur enregistré avec succès.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur." });
  }
};


// ✅ Fonction LOGIN (connexion)
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: 'Identifiants invalides' });
  }
};

// ✅ Génère le token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
 register,
  login: login
};
