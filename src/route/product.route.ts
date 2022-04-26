import express from "express";
import productController from "../controller/product.controller";

const router = express.Router();

router.get("/all", productController.findAllHandler);

router.post("/new", productController.newProductHandler);

router
  .route("/:id")
  .get(productController.findProductHandler)
  .patch(productController.editProductHandler)
  .delete(productController.deleteProductHandler);

export default router;
