import { Request, Response } from "express";
import { findAll, newProduct, findProduct } from "../service/product.service";

const findProductHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await findProduct(id);
  res.send(product);
};

const findAllHandler = async (req: Request, res: Response) => {
  const products = await findAll();
  res.send(products);
};

const newProductHandler = async (req: Request, res: Response) => {
  const product = await newProduct({ ...req.body });
  res.send(product);
};

export default { newProductHandler, findAllHandler, findProductHandler };
