import Link from "next/link";
import Image from "next/image";

import { Product } from "@/lib/models/ProductModel";

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <article className="cursor-pointer rounded-md overflow-hidden hover:shadow-xl border border-zinc-200 dark:border-zinc-200/15">
      <Link href={`/product/${product.slug}`}>
        <Image
          priority
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover h-60 w-full"
        />
        <div className="flex flex-col min-h-[90px] justify-between gap-4 px-4 py-2 text-sm bg-zinc-100/10">
          <h2 className="font-semibold">{product.name}</h2>
          <div className="flex items-center justify-between">
            <span>Ціна, &#8372;</span>
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
