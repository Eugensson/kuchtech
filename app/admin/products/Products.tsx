"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";

import { formatId } from "@/lib/utils";
import { Product } from "@/lib/models/ProductModel";
import { Button } from "@/components/ui/button";
import { FolderPlus, SquarePen, Trash2 } from "lucide-react";

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`);

  const router = useRouter();

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading("Видалення продукту...");
      const res = await fetch(`${url}/${arg.productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success("Продукт успішно видалено", {
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

      toast.success("Продукт успішно створено");
      router.push(`/admin/products/${data.product._id}`);
    }
  );

  if (error) return "Сталася помилка.";
  if (!products) return "Завантаження...";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Продукція</h1>
        <Button
          variant="outline"
          size="icon"
          disabled={isCreating}
          onClick={() => createProduct()}
        >
          <FolderPlus />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead>
            <tr>
              <th className="text-start">Id</th>
              <th className="text-start">Назва</th>
              <th className="text-start">Ціна</th>
              <th className="text-start">Категорія</th>
              <th className="text-start">Кількість</th>
              <th className="text-start">Рейтинг</th>
              <th className="text-start">Дії</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td>{formatId(product._id!)}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td className="flex gap-1 items-center">
                  <Link href={`/admin/products/${product._id}`}>
                    <SquarePen />
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    type="button"
                    onClick={() => deleteProduct({ productId: product._id! })}
                  >
                    <Trash2 />
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
