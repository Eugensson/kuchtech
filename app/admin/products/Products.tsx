"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { FilePlus2, SquarePen, Trash2 } from "lucide-react";

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
  if (!products) return "Завантаження...";

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl">Товари</h1>
        <Button size="icon" variant="outline" onClick={() => createProduct()}>
          <FilePlus2 />
        </Button>
      </div>

      <div className="overflow-x-auto">
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
                    <SquarePen />
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
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
