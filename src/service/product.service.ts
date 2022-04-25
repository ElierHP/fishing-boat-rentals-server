import Product from "../model/product.model";
import { v4 as uuidv4 } from "uuid";

const findProduct = (id: string) => Product.findById(id);

const findAll = () => Product.find({});

const newProduct = (
  title: string,
  subtitle: string,
  desc: string,
  url: string
) => {
  const product = new Product({
    title,
    subtitle,
    desc,
    key: uuidv4(),
    url,
  });
  product.save();
  return product;
};

export { findAll, newProduct, findProduct };
