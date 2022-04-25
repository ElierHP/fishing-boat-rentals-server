import express from "express";
import productHandler from "../controller/product.controller";

const router = express.Router();

router.get("/all", productHandler.findAllHandler);

router.post("/new", productHandler.newProductHandler);

router.get("/:id", productHandler.findProductHandler);

export default router;
