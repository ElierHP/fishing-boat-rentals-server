import { Request, Response } from "express";
import {
  findAll,
  newProduct,
  findProduct,
  editProduct,
  deleteProduct,
} from "../service/product.service";

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

const editProductHandler = async (req: Request, res: Response) => {
  await editProduct(req.params.id, { ...req.body });
  res.sendStatus(200);
};

const deleteProductHandler = async (req: Request, res: Response) => {
  await deleteProduct(req.params.id);
  res.sendStatus(200);
};

export default {
  newProductHandler,
  findAllHandler,
  findProductHandler,
  editProductHandler,
  deleteProductHandler,
};
