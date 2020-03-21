const express = require('express');
// const verify = require('../auth/verifyToken');
// const { productCUDAccess } = require('../auth/verifyRoles');
const {
  getProducts,
  getSingleProduct,
  addProduct,
  addBulkProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(addProduct);
// .post(verify, productCUDAccess, addProduct);

router
  .route('/:productID')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);
// .put(verify, productCUDAccess, updateProduct)
// .delete(verify, productCUDAccess, deleteProduct);

router.route('/bulk').post(addBulkProducts);
module.exports = router;
