const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({ path: './config/config.env' });
app.use(bodyParser.json());

// Database Connection and Test
const db = require('./config/postgres-db');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((error) => {
    console.log('Error: ', error);
  });

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
const dashboard = require('./routes/dashboard');
const user = require('./routes/user');
const orders = require('./routes/orders');
const products = require('./routes/products');
const customers = require('./routes/customers');
const deliveryRoutes = require('./routes/deliveryRoutes');
const drivers = require('./routes/drivers');
const packages = require('./routes/packages');
const stops = require('./routes/stops');
const trucks = require('./routes/trucks');
const driverReports = require('./routes/driverReport');

app.use('/api/v1/dashboard', dashboard);
app.use('/api/v1/user', user);
app.use('/api/v1/orders', orders);
app.use('/api/v1/products', products);
app.use('/api/v1/customers', customers);
app.use('/api/v1/deliveryroutes', deliveryRoutes);
app.use('/api/v1/drivers', drivers);
app.use('/api/v1/packages', packages);
app.use('/api/v1/stops', stops);
app.use('/api/v1/trucks', trucks);
app.use('/api/v1/driverreports', driverReports);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
