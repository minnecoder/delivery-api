import express from "express";
// import verify from '../auth/verifyToken');
// import { productCUDAccess } from '../auth/verifyRoles');
import {
  getProducts,
  getSingleProduct,
  addProduct,
  addBulkProducts,
  updateProduct,
  deleteProduct
} from "../controllers/products";

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(addProduct);
// .post(verify, productCUDAccess, addProduct);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);
// .put(verify, productCUDAccess, updateProduct)
// .delete(verify, productCUDAccess, deleteProduct);

router.route("/bulk").post(addBulkProducts);
module.exports = router;
