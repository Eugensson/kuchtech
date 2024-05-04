import Link from "next/link";
import { MoveDown, MoveUp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import productServices from "@/lib/services/productService";
import ProductItem from "@/components/products/ProductItem";

const sortOrders = ["newest", "lowest", "highest"];

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

export async function generateMetadata({
  searchParams: { q = "all", category = "all", price = "all" },
}: {
  searchParams: {
    q: string;
    category: string;
    price: string;
    sort: string;
    page: string;
  };
}) {
  if ((q !== "all" && q !== "") || category !== "all" || price !== "all") {
    return {
      title: `Search ${q !== "all" ? q : ""}
          ${category !== "all" ? ` : Category ${category}` : ""}
          ${price !== "all" ? ` : Price ${price}` : ""}`,
    };
  } else {
    return {
      title: "KuchTech | Каталог продукції",
    };
  }
}

export default async function SearchPage({
  searchParams: {
    q = "all",
    category = "all",
    brand = "all",
    price = "all",
    sort = "newest",
    page = "1",
  },
}: {
  searchParams: {
    q: string;
    category: string;
    brand: string;
    price: string;
    sort: string;
    page: string;
  };
}) {
  const getFilterUrl = ({
    c,
    b,
    s,
    p,
    pg,
  }: {
    c?: string;
    b?: string;
    s?: string;
    p?: string;
    pg?: string;
  }) => {
    const params = { q, category, brand, price, sort, page };
    if (c) params.category = c;
    if (b) params.brand = b;
    if (p) params.price = p;
    if (pg) params.page = pg;
    if (s) params.sort = s;
    return `/catalog?${new URLSearchParams(params).toString()}`;
  };

  const categories = await productServices.getCategories();
  const brands = await productServices.getBrands();

  const { countProducts, products, pages } = await productServices.getByQuery({
    category,
    brand,
    q,
    price,
    page,
    sort,
  });

  return (
    <section className="grid md:grid-cols-4 xl:grid-cols-5 w-full">
      <aside className="p-1 flex flex-col gap-2 md:gap-5">
        <ul className="flex flex-col col-span-1 gap-4 h-[100px] md:h-[250px] lg:h-[300px] overflow-y-scroll">
          {categories.map((c: string) => (
            <li key={c}>
              <Link
                className={`text-sm link link-hover ${
                  c === category && "text-rose-700"
                }`}
                href={getFilterUrl({ c })}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col col-span-1 gap-4 h-[50px] md:h-[150px] overflow-y-scroll">
          {brands.map((b: string) => (
            <li key={b}>
              <Link
                className={`text-sm link link-hover ${
                  b === brand && "text-rose-700"
                }`}
                href={getFilterUrl({ b })}
              >
                {b}
              </Link>
            </li>
          ))}
        </ul>
        <Accordion type="single" className="p-2" collapsible>
          <AccordionItem value="price">
            <AccordionTrigger>Ціна</AccordionTrigger>
            <AccordionContent>
              <Link href={getFilterUrl({ p: "all" })}>Будь-яка</Link>
            </AccordionContent>
            {prices.map((p) => (
              <AccordionContent key={p.value}>
                <Link href={getFilterUrl({ p: p.value })}>{p.name}</Link>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      </aside>

      <div className="md:col-span-3 xl:col-span-4 flex flex-col gap-2 items-center justify-center border-l-2">
        <div className="flex flex-col gap-2 w-full md:p-2 lg:p-4 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-2 text-xs md:text-sm xl:text-base">
            <p>Результат:</p>
            <span className="ml-1 font-semibold">
              {products.length === 0 ? 0 : countProducts}
            </span>
            {q !== "all" && q !== "" && " : " + q}
            {category !== "all" && " : " + category}
            {brand !== "all" && " : " + brand}
            {price !== "all" && " : Ціна " + price}
            &nbsp;
            {(q !== "all" && q !== "") ||
            category !== "all" ||
            brand !== "all" ||
            price !== "all" ? (
              <Link className="btn btn-sm btn-ghost" href="/catalog">
                Очистити
              </Link>
            ) : null}
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm xl:text-base">
            <p>Сортувати за:</p>
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`font-semibold hover:text-rose-700 ${
                  sort == s ? "text-rose-700" : ""
                } `}
                href={getFilterUrl({ s })}
              >
                {s === "newest" && <p>новинками</p>}
                {s === "lowest" && (
                  <p className="flex items-center">
                    <MoveUp className="w-4 h-4" />
                    ціни
                  </p>
                )}
                {s === "highest" && (
                  <p className="flex items-center">
                    <MoveDown className="w-4 h-4" />
                    ціни
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
        <ul className="flex flex-wrap items-center justify-center p-1 gap-1 md:gap-2">
          {products.map((product) => (
            <li
              key={product.slug}
              className="w-full max-w-[300px] md:max-w-[240px]"
            >
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
        <Pagination className="my-5">
          <PaginationContent>
            <PaginationItem>
              {products.length > 0 &&
                Array.from(Array(pages).keys()).map((p) => (
                  <PaginationLink
                    key={p}
                    href={getFilterUrl({ pg: `${p + 1}` })}
                  >
                    {p + 1}
                  </PaginationLink>
                ))}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
