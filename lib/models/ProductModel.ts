import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = models.Product || model("Product", productSchema);

export default ProductModel;

export type Product = {
  _id?: string;
  category: string;
  brand: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
};
