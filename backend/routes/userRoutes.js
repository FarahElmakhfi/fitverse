const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Route protégée → voir les infos de l'utilisateur connecté
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
  res.status(200).json(req.user);
});

module.exports = router;
