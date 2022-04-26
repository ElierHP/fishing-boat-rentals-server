import { Schema, model } from "mongoose";

export interface ProductDocument {
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<ProductDocument>(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = model<ProductDocument>("Product", ProductSchema);

export default Product;
