const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");

dotenv.config(); // ⚠️ ça doit être en haut !

const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // Connecter MongoDB après avoir chargé .env

app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
