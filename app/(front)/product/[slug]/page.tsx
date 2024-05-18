import Link from "next/link";
import Image from "next/image";
import { ChevronsLeft } from "lucide-react";

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
    openGraph: {
      images: [{ url: product.image }],
    },
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
    <section className="grid md:grid-cols-2 gap-2 md:gap-5">
      <Image
        priority
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="rounded object-cover h-auto"
      />
      <div className="flex flex-col gap-4 p-2 md:p-5 lg:p-10 rounded bg-zinc-100/5 text-sm md:text-base lg:text-xl">
        <h1 className="font-bold">{product.name}</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between">
            <p>Бренд</p>
            <p>{product.brand}</p>
          </li>
          <li className="flex justify-between">
            <p>Ціна, &#8372;</p>
            <p>{product.price}</p>
          </li>
        </ul>
        <h2 className="font-semibold">Опис товару:</h2>
        <p className="md:text-sm lg:text-base">{product.description}</p>

        <Link
          href="/catalog"
          className="flex items-center gap-1 font-semibold lg:text-base hover:text-rose-700 mt-auto"
        >
          <ChevronsLeft className="w-7 h-7" />
          До каталогу
        </Link>
      </div>
    </section>
  );
}
