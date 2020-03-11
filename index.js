const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

dotenv.config({ path: './config/config.env' });
app.use(bodyParser.json());

// Database Connection and Test
const db = require('./config/postgres-db');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(error => {
    console.log('Error: ', error);
  });

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
const notes = require('./routes/notes');
const dashboard = require('./routes/dashboard');
const scanner = require('./routes/scanner');
const user = require('./routes/user');
const orders = require('./routes/orders');
const products = require('./routes/products');
const customers = require('./routes/customers');

app.use('/api/v1/notes', notes);
app.use('/api/v1/dashboard', dashboard);
app.use('/api/v1/scanner', scanner);
app.use('/api/v1/user', user);
app.use('/api/v1/orders', orders);
app.use('/api/v1/products', products);
app.use('/api/v1/customers', customers);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
