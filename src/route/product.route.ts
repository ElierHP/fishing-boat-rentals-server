import express from "express";
import productController from "../controller/product.controller";
import validate from "../middleware/validate";
import {
  createProductSchema,
  editProductSchema,
} from "../schema/product.schema";

const router = express.Router();

router.get("/all", productController.findAllHandler);

router.post(
  "/new",
  validate(createProductSchema),
  productController.newProductHandler
);

router
  .route("/:id")
  .get(productController.findProductHandler)
  .patch(validate(editProductSchema), productController.editProductHandler)
  .delete(productController.deleteProductHandler);

export default router;
