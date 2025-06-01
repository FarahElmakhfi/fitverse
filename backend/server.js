const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connecté avec succès");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Serveur lancé sur http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ Erreur MongoDB :", err));
