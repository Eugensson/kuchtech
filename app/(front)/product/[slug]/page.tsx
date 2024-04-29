import Link from "next/link";
import Image from "next/image";

import productService from "@/lib/services/productService";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return { title: "Товар відсутрій" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Товар відсутній</div>;
  }

  return (
    <section className="grid md:grid-cols-3 md:gap-5 w-full min-h-[400px]">
      <figure className="w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover h-auto"
        />
      </figure>
      <div className="p-2 md:p-5 lg:p-10">
        <h1 className="font-bold text-lg mb-5">{product.name}</h1>
        <h2 className="font-semibold mb-2 lg:mb-4">Основні характеристики:</h2>
        <ul className="flex flex-col gap-2 text-xs lg:text-sm">
          <li className="flex justify-between">
            <p>Бренд</p>
            <p className="font-semibold">{product.brand}</p>
          </li>
          <li className="flex justify-between">
            <p>Країна</p>
            <p className="font-semibold">{product.country}</p>
          </li>
          {product?.power && (
            <li className="flex justify-between">
              <p>Потужність</p>
              <p className="font-semibold">{product.power}</p>
            </li>
          )}
          {product?.voltage && (
            <li className="flex justify-between">
              <p>Напруга</p>
              <p className="font-semibold">{product.voltage}</p>
            </li>
          )}
          {product?.numberOfLevels && (
            <li className="flex justify-between">
              <p>Кількість рівнів</p>
              <p className="font-semibold">{product.numberOfLevels}</p>
            </li>
          )}
          {product?.controlPanel && (
            <li className="flex justify-between">
              <p>Панель керування</p>
              <p className="font-semibold">{product.controlPanel}</p>
            </li>
          )}
          {product?.humidification && (
            <li className="flex justify-between">
              <p>Тип парозволоження</p>
              <p className="font-semibold">{product.humidification}</p>
            </li>
          )}
          {product?.connectionType && (
            <li className="flex justify-between">
              <p>Тип підключення</p>
              <p className="font-semibold">{product.connectionType}</p>
            </li>
          )}
          {product?.dimensions && (
            <li className="flex justify-between">
              <p>Розміри</p>
              <p className="font-semibold">{product.dimensions} мм</p>
            </li>
          )}
          <li className="flex justify-between">
            <p>Ціна, &#8372;</p>
            <p className="font-semibold">{product.price}</p>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <h2 className="font-semibold mb-2 lg:mb-4">Опис товару:</h2>
        <p className="text-xs lg:text-sm">{product.description}</p>
      </div>
    </section>
  );
}
