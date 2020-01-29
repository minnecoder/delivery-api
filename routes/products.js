const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/products");

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(addProduct);

router
  .route("/:productID")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);
module.exports = router;
