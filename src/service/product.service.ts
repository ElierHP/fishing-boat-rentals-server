import Product, { ProductDocument } from "../model/product.model";
import { DocumentDefinition } from "mongoose";

const findProduct = (id: string) => Product.findById(id);

const findAll = () => Product.find({});

const newProduct = (input: DocumentDefinition<ProductDocument>) =>
  new Product(input).save();

export { findAll, newProduct, findProduct };
