const express = require('express');
const verify = require('../routes/verifyToken');
const { productCUDAccess } = require('./verifyRoles');
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(verify, productCUDAccess, addProduct);

router
  .route('/:productID')
  .get(getSingleProduct)
  .put(verify, productCUDAccess, updateProduct)
  .delete(verify, productCUDAccess, deleteProduct);
module.exports = router;
