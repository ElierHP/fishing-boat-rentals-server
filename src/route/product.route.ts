import express from "express";
import productController from "../controller/product.controller";

const router = express.Router();

router.get("/all", productController.findAllHandler);

router.get("/:id", productController.findProductHandler);

router.post("/new", productController.newProductHandler);

router.patch("/:id", productController.editProductHandler);

export default router;
