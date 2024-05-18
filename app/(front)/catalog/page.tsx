import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MoveDown,
  MoveUp,
  SquareX,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SearchBox } from "@/components/SearchBox";
import { ProductItem } from "@/components/ProductItem";
import { ScrollArea } from "@/components/ui/scroll-area";
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
      title: "Каталог",
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

  const brands = await productServices.getBrands();
  const categories = await productServices.getCategories();

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
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Категорія</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="w-full h-[120px] lg:h-[180px]">
                {categories.map((c: string) => (
                  <Link
                    key={c}
                    href={getFilterUrl({ c })}
                    className={`block my-1 text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                      c === category &&
                      "font-semibold text-rose-800 dark:text-rose-400"
                    }`}
                  >
                    {c}
                  </Link>
                ))}
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Бренд</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="w-full h-[120px]">
                {brands.map((b: string) => (
                  <Link
                    key={b}
                    href={getFilterUrl({ b })}
                    className={`block my-1 text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                      b === brand &&
                      "font-semibold text-rose-800 dark:text-rose-400"
                    }`}
                  >
                    {b}
                  </Link>
                ))}
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Ціна, тис. &#8372;</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-[100px]">
                {prices.map((p) => (
                  <Link
                    key={p.name}
                    href={getFilterUrl({ p: p.value })}
                    className={`block my-1 text-xs md:text-sm hover:text-rose-800 dark:hover:text-rose-400 ${
                      p.value === price &&
                      "font-semibold text-rose-800 dark:text-rose-400"
                    }`}
                  >
                    {p.name}
                  </Link>
                ))}
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>

      <div className="md:col-span-3 xl:col-span-4 flex flex-col gap-2  border-l-2">
        <div className="flex flex-col gap-2 w-full md:p-2 lg:p-4">
          <div className="flex flex-col xl:flex-row gap-2 text-xs md:text-sm xl:text-base">
            <p className="flex gap-1">
              Результат:
              <span className="ml-1 font-semibold">
                {products.length === 0 ? 0 : countProducts}
              </span>
            </p>
            <ul className="flex flex-col md:flex-row md:items-center gap-1">
              <li>{q !== "all" && q !== "" && " : " + q}</li>
              <li>{category !== "all" && " : " + category}</li>
              <li>{brand !== "all" && " : " + brand}</li>
              <li>{price !== "all" && " : Ціна " + price}</li>
              <li>
                {(q !== "all" && q !== "") ||
                category !== "all" ||
                brand !== "all" ||
                price !== "all" ? (
                  <Link
                    className="btn btn-sm btn-ghost font-semibold"
                    href="/catalog"
                  >
                    <SquareX className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                ) : null}
              </li>
            </ul>
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
          <p className="flex flex-col gap-3 justify-center items-center h-full md:min-h-[280px] lg:min-h-[350px] font-semibold text-center">
            За даними критеріями пошуку не знайдено товарів.
            <span className="text-gray-500">
              Будь ласка, задайте інші критерії пошуку.
            </span>
          </p>
        ) : (
          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-2 h-[330px] md:h-[350px] lg:h-auto overflow-y-scroll lg:overflow-y-hidden">
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
            {Number(page) > 1 && (
              <Link
                href={getFilterUrl({ pg: `${Number(page) - 1}` })}
                aria-label="Навігація до попередньої сторінки"
              >
                <ChevronLeft />
              </Link>
            )}
            <p className="flex items-center gap-1">
              {page} <span>/</span> {pages}
            </p>
            {Number(page) < Number(pages) && (
              <Link
                href={getFilterUrl({ pg: `${Number(page) + 1}` })}
                aria-label="Навігація до наступної сторінки"
              >
                <ChevronRight />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
