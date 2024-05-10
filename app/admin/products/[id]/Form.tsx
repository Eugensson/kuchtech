"use client";

import useSWR from "swr";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { ValidationRule, useForm } from "react-hook-form";

import { formatId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/models/ProductModel";

export default function ProductEditForm({ productId }: { productId: string }) {
  const router = useRouter();

  const { data: product, error } = useSWR(`/api/admin/products/${productId}`);

  const { trigger: updateProduct, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/products/${productId}`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      toast.success("Дані про товар успішно оновлено");

      router.push("/admin/products");
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>();

  useEffect(() => {
    if (!product) return;

    setValue("name", product.name);
    setValue("slug", product.slug);
    setValue("price", product.price);
    setValue("image", product.image);
    setValue("category", product.category);
    setValue("brand", product.brand);
    setValue("description", product.description);
  }, [product, setValue]);

  const formSubmit = async (formData: any) => {
    await updateProduct(formData);
  };

  if (error) return error.message;

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        Завантаження...
      </div>
    );

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof Product;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <label className="flex flex-col gap-1">
      {name}
      <input
        type="text"
        autoComplete="off"
        {...register(id, {
          required: required && `${name} обов'язкове поле`,
          pattern,
        })}
        className="border-2 rounded-lg p-1 w-full max-w-md"
      />
      {errors[id]?.message && (
        <div className="text-sm text-red-500">{errors[id]?.message}</div>
      )}
    </label>
  );

  const FormTextArea = ({
    id,
    name,
    required,
  }: {
    id: keyof Product;
    name: string;
    required?: boolean;
  }) => (
    <label className="flex flex-col gap-1">
      {name}
      <textarea
        id={id}
        {...register(id, {
          required: required && `${name} обов'язкове поле`,
        })}
        className="border-2 rounded-lg p-1 w-full max-w-md"
      ></textarea>
      {errors[id]?.message && (
        <span className="text-sm text-red-500">{errors[id]?.message}</span>
      )}
    </label>
  );

  const uploadHandler = async (e: any) => {
    const toastId = toast.loading("Оновлення зображення...");
    try {
      const resSign = await fetch("/api/cloudinary-sign", {
        method: "POST",
      });
      const { signature, timestamp } = await resSign.json();
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setValue("image", data.secure_url);
      toast.success("Зображення успішно оновлено", {
        id: toastId,
      });
    } catch (err: any) {
      toast.error(err.message, {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 min-h-[500px]">
      <h1 className="text-2xl pt-2">
        Редагувати продукт {formatId(productId)}
      </h1>
      <div>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="grid md:grid-cols-2 md:pb-4 gap-2"
        >
          <div className="flex flex-col gap-4">
            <FormInput name="Найменування" id="name" required />
            <FormInput name="Slug" id="slug" required />
            <FormInput name="Зображення" id="image" required />
            <FormInput name="Ціна" id="price" required />
            {/* <div className="md:flex mb-6">
              <label className="label md:w-2/5" htmlFor="imageFile">
                Оновити зображення
              </label>
              <div className="md:w-3/5">
                <input
                  type="file"
                  className="file-input w-full max-w-md"
                  id="imageFile"
                  onChange={uploadHandler}
                />
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex gap-5 items-center">
              Оновити зображення
              <input
                type="file"
                className="max-w-sm"
                onChange={uploadHandler}
              />
            </label>
            <FormInput name="Категорія" id="category" required />
            <FormInput name="Марка (країна)" id="brand" required />
            <FormTextArea name="Опис продукту" id="description" required />
            <div className="mt-2">
              <Button
                type="submit"
                size="lg"
                variant="outline"
                className="mr-4"
              >
                Оновити
              </Button>
              <Link href="/admin/products">Відмінити</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
