"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";

import { formatId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/models/ProductModel";

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`);

  const router = useRouter();

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading("Deleting product...");
      const res = await fetch(`${url}/${arg.productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success("Товар успішно видалено", {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          });
    }
  );

  const { trigger: createProduct, isMutating: isCreating } = useSWRMutation(
    `/api/admin/products`,
    async (url) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success("Товар успішно створено");
      router.push(`/admin/products/${data.product._id}`);
    }
  );

  if (error) return "Сталася помилка.";
  if (!products)
    return (
      <div className="flex justify-center items-center h-[395px]">
        <p>Завантаження...</p>
      </div>
    );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Товари</h1>
        <Button
          aria-label="Кнопка додавання продукту"
          onClick={() => createProduct()}
        >
          Додати
        </Button>
      </div>
      <div className="overflow-x-auto overflow-y-scroll h-[440px]">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="text-left">Id</th>
              <th className="text-left">Назва</th>
              <th className="text-left">Ціна</th>
              <th className="text-left">Категорія</th>
              <th className="text-left">Дії</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td>{formatId(product._id!)}</td>
                <td>{product.name}</td>
                <td>&#8372; {product.price}</td>
                <td>{product.category}</td>
                <td className="flex items-center g-2">
                  <Link href={`/admin/products/${product._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                  <Button
                    variant="outline"
                    aria-label="Кнопка видалення продукту"
                    size="icon"
                    onClick={() => deleteProduct({ productId: product._id! })}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
