const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Route utilisateur OK');
});

module.exports = router;
