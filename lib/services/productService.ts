import { cache } from "react";

import dbConnect from "@/lib/dbConnect";
import ProductModel, { Product } from "@/lib/models/ProductModel";

export const revalidate = 3600;

const getLatest = cache(async () => {
  await dbConnect();

  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(4)
    .lean();

  return products as Product[];
});

const getBySlug = cache(async (slug: string) => {
  await dbConnect();

  const product = await ProductModel.findOne({ slug }).lean();

  return product as Product;
});

const PAGE_SIZE = 8;

const getByQuery = cache(
  async ({
    q,
    category,
    brand,
    sort,
    price,
    page = "1",
  }: {
    q: string;
    category: string;
    brand: string;
    price: string;
    sort: string;
    page: string;
  }) => {
    await dbConnect();

    const queryFilter =
      q && q !== "all"
        ? {
            name: {
              $regex: q,
              $options: "i",
            },
          }
        : {};

    const categoryFilter = category && category !== "all" ? { category } : {};

    const brandFilter = brand && brand !== "all" ? { brand } : {};

    const priceFilter =
      price && price !== "all"
        ? {
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};

    const order: Record<string, 1 | -1> =
      sort === "lowest"
        ? { price: 1 }
        : sort === "highest"
        ? { price: -1 }
        : sort === "toprated"
        ? { rating: -1 }
        : { _id: -1 };

    const categories = await ProductModel.find().distinct("category");

    const products = await ProductModel.find(
      {
        ...queryFilter,
        ...categoryFilter,
        ...brandFilter,
        ...priceFilter,
      },
      "-reviews"
    )
      .sort(order)
      .skip(PAGE_SIZE * (Number(page) - 1))
      .limit(PAGE_SIZE)
      .lean();

    const countProducts = await ProductModel.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...brandFilter,
      ...priceFilter,
    });

    return {
      products: products as Product[],
      countProducts,
      page,
      pages: Math.ceil(countProducts / PAGE_SIZE),
      categories,
    };
  }
);

const getCategories = cache(async () => {
  await dbConnect();
  const categories = await ProductModel.find().distinct("category");
  return categories;
});

const getBrands = cache(async () => {
  await dbConnect();
  const brands = await ProductModel.find().distinct("brand");
  return brands;
});

const productService = {
  getLatest,
  getBySlug,
  getByQuery,
  getCategories,
  getBrands,
};

export default productService;
