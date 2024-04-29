import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    categoryGroup: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    voltage: { type: Number, required: false },
    power: { type: Number, required: false },
    weight: { type: Number, required: false },
    numberOfLevels: { type: Number, required: false },
    connectionType: { type: String, required: false },
    dimensions: { type: String, required: false },
    controlPanel: { type: String, required: false },
    brand: { type: String, required: true },
    country: { type: String, required: true },
    humidification: { type: String, required: false },
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
  categoryGroup: string;
  category: string;
  brand: string;
  country: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  voltage?: number;
  power?: number;
  weight?: number;
  numberOfLevels?: number;
  connectionType?: string;
  controlPanel?: string;
  dimensions?: string;
  humidification?: string;
  description: string;
};
