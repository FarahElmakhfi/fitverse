const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Tes routes
app.use('/api/users', require('./routes/userRoutes.js'));
app.use('/api/products', require('./routes/productRoutes'));

module.exports = app;
