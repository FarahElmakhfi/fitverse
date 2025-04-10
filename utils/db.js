const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connecté rapidement 🚀');
  } catch (error) {
    console.error(`Erreur connexion MongoDB : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;

