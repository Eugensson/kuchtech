import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    country: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    power: { type: Number, required: true },
    voltage: { type: String, required: true },
    weight: { type: Number, required: true },
    steamHumidificationType: { type: String },
    numberOfLevels: { type: Number, required: true },
    connectionType: { type: String, required: true },
    controlPanel: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = models.Product || model("Product", productSchema);

export default ProductModel;

export type Product = {
  _id?: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  country: string;
  size: string;
  price: number;
  power: number;
  voltage: string;
  weight: number;
  numberOfLevels: number;
  steamHumidificationType?: string;
  connectionType: string;
  controlPanel: string;
  description: string;
  imageURL: string;
};
