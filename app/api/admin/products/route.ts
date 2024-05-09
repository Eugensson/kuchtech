import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: "Будь-ласка, авторизуйтеся в системі" },
      {
        status: 401,
      }
    );
  }

  await dbConnect();

  const products = await ProductModel.find();

  return Response.json(products);
}) as any;

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: "Будь-ласка, авторизуйтеся в системі" },
      {
        status: 401,
      }
    );
  }

  await dbConnect();

  const product = new ProductModel({
    name: "Найменування товару",
    slug: "найменування-товару-" + Math.random(),
    image: "/images/placeholder.jpg",
    price: 0,
    category: "Категорія товару",
    brand: "Марка виробника товару (країна)",
    description: "Опис товару",
  });

  try {
    await product.save();

    return Response.json(
      { message: "Продукт успішно створено", product },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}) as any;
