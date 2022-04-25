import express, { Request, Response } from "express";
import Product from "../model/product.model";
const router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
  const product = await Product.find({});
  res.send(product);
});

router.post("/new", async (req: Request, res: Response) => {
  const { title, subtitle, desc, key, url } = req.body;
  const product = new Product({
    title,
    subtitle,
    desc,
    key,
    url,
  });
  await product.save();
  res.send(product);
});

export default router;
