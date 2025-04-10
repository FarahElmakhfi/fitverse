const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userController");


// Route pour enregistrer un nouvel utilisateur
router.post("/register", registerUser);

// Route pour connecter un utilisateur
router.post("/login", authUser);


module.exports = router;
