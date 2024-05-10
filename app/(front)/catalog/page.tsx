import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveDown, MoveUp } from "lucide-react";

import { SearchBox } from "@/components/SearchBox";
import { ProductItem } from "@/components/ProductItem";
import productServices from "@/lib/services/productService";

const sortOrders = ["newest", "lowest", "highest"];

const prices = [
  {
    name: "до 50",
    value: "1-50000",
  },
  {
    name: "від 50 до 100",
    value: "50001-100000",
  },
  {
    name: "від 100 до 250",
    value: "100001-250000",
  },
  {
    name: "від 250 до 500",
    value: "250001-500000",
  },
  {
    name: "від 500 до 1000",
    value: "500001-1000000",
  },
  {
    name: "понад 1000",
    value: "1000000-3000000",
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

export default async function CatalogPage({
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
      <aside className="flex flex-col gap-1 md:gap-2">
        <SearchBox />
        <h2 className="text-xs md:text-base font-semibold">Категорія</h2>
        <ul className="flex flex-col gap-1 h-[120px] lg:h-[240px] overflow-y-scroll border-y-2">
          {categories.map((c: string) => (
            <li key={c}>
              <Link
                className={`text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                  c === category &&
                  "font-semibold text-rose-800 dark:text-rose-400"
                }`}
                href={getFilterUrl({ c })}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xs md:text-base font-semibold">Бренд</h2>
        <ul className="flex flex-col gap-1 h-[120px] overflow-y-scroll border-y-2">
          {brands.map((b: string) => (
            <li key={b}>
              <Link
                className={`text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                  b === brand &&
                  "font-semibold text-rose-800 dark:text-rose-400"
                }`}
                href={getFilterUrl({ b })}
              >
                {b}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xs md:text-base font-semibold">
          Ціна, тис. &#8372;
        </h2>
        <ul className="flex flex-col gap-1 h-[120px] overflow-y-scroll border-y-2">
          {prices.map((p) => (
            <li key={p.name}>
              <Link
                className={`text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                  p.value === price &&
                  "font-semibold text-rose-800 dark:text-rose-400"
                }`}
                href={getFilterUrl({ p: p.value })}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="md:col-span-3 xl:col-span-4 flex flex-col gap-2  border-l-2">
        <div className="flex flex-col gap-2 w-full md:p-2 lg:p-4">
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
              <Link
                className="btn btn-sm btn-ghost font-semibold"
                href="/catalog"
              >
                Очистити
              </Link>
            ) : null}
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm xl:text-base">
            <p>Сортувати за:</p>
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`font-semibold hover:text-rose-800 dark:hover:text-rose-400 ${
                  sort == s ? "text-rose-800 dark:text-rose-400" : ""
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
        {products.length === 0 ? (
          <p className="flex flex-col gap-3 justify-center items-center h-full font-semibold text-lg text-center">
            За даними критеріями пошуку не знайдено товарів.
            <span className="text-gray-500 text-base">
              Будь ласка, задайте інші критерії пошуку.
            </span>
          </p>
        ) : (
          <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2 h-[200px] md:h-[350px] lg:h-auto overflow-y-scroll lg:overflow-y-hidden">
            {products.map((product) => (
              <li
                key={product.slug}
                className="w-full max-w-[300px] md:max-w-[240px]"
              >
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        )}

        {pages > 1 && (
          <div className="flex items-center gap-2 my-4 mx-auto">
            <Link href={getFilterUrl({ pg: `${Number(page) - 1}` })}>
              <ChevronLeft />
            </Link>
            <p className="flex items-center gap-1">
              {page} <span>/</span> {pages}
            </p>
            <Link href={getFilterUrl({ pg: `${Number(page) + 1}` })}>
              <ChevronRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
