import { Schema, model } from "mongoose";

interface Product {
  title: string;
  subtitle: string;
  desc: string;
  key: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<Product>(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    desc: { type: String, required: true },
    key: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = model<Product>("Product", ProductSchema);

export default Product;
