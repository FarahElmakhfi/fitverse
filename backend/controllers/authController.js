require('dotenv').config(); //  pour garantir que les variables sont chargées, même en appel direct
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
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
      password,
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

// ✅ Fonction FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Email introuvable' });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpire = Date.now() + 3600000; // 1h
    await user.save();

    const resetLink = `http://localhost:5500/frontend/fitverse-farah/mdp/reset-password.html?token=${token}`;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    

    await transporter.sendMail({
      from: '"TRY-ON Support" <no-reply@tryon.com>',
      to: email,
      subject: 'Réinitialisation de mot de passe',
      html: `<p>Bonjour,</p>
             <p>Cliquez ici pour réinitialiser votre mot de passe :</p>
             <a href="${resetLink}">${resetLink}</a>
             <p>Ce lien est valable 1 heure.</p>`
    });

    res.json({ message: 'Lien envoyé par e-mail.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l’envoi de l’e-mail.' });
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
  login,
  forgotPassword
};
