import Link from "next/link";
import Image from "next/image";

import { Product } from "@/lib/models/ProductModel";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <article className="cursor-pointer hover:shadow-xl">
      <Link href={`/product/${product.slug}`}>
        <figure>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </figure>
        <div className="p-1 flex flex-col gap-1 font-semibold">
          <h2 className="text-xl">{product.name}</h2>
          <p className="text-zinc-500">{product.brand}</p>
          <span>&#8372; {product.price}</span>
        </div>
      </Link>
    </article>
  );
}
