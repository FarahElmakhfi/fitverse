const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).json({ message: "L'utilisateur existe déjà" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  res.status(201).json({ 
    id: user._id, 
    name: user.name, 
    email: user.email,
    token: generateToken(user._id) 
  });
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ 
      id: user._id, 
      name: user.name, 
      email: user.email,
      token: generateToken(user._id) 
    });
  } else {
    res.status(401).json({ message: 'Email ou mot de passe incorrect' });
  }
};
