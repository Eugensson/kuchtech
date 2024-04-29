import Link from "next/link";
import Image from "next/image";

import { Product } from "@/lib/models/ProductModel";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <article className="cursor-pointer rounded-md overflow-hidden hover:shadow-xl">
      <Link href={`/product/${product.slug}`}>
        <figure>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover h-60 w-full"
          />
        </figure>
        <div className="py-3 px-5 flex flex-col gap-2 font-semibold bg-zinc-100/10">
          <h2 className="text-lg">{product.name}</h2>
          <div className="flex items-center justify-between">
            <span>Ціна, &#8372;</span>
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
