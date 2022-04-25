import { Request, Response } from "express";
import { findAll, newProduct, findProduct } from "../service/product.service";

const findProductHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await findProduct(id);
  res.send(product);
};

const findAllHandler = async (req: Request, res: Response) => {
  const product = await findAll();
  res.send(product);
};

const newProductHandler = async (req: Request, res: Response) => {
  const { title, subtitle, desc, url } = req.body;
  const product = newProduct(title, subtitle, desc, url);
  res.send(product);
};

export default { newProductHandler, findAllHandler, findProductHandler };
