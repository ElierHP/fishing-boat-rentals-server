import Product, { ProductDocument } from "../model/product.model";
import { DocumentDefinition } from "mongoose";

const findProduct = (id: string) => Product.findById(id);

const findAll = () => Product.find({});

const newProduct = (input: DocumentDefinition<ProductDocument>) =>
  new Product(input).save();

const editProduct = (id: string, update: DocumentDefinition<ProductDocument>) =>
  Product.findByIdAndUpdate(id, { ...update });

const deleteProduct = (id: string) => Product.findByIdAndDelete(id);

export { findAll, newProduct, findProduct, editProduct, deleteProduct };
