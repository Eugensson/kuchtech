"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Eye, EyeOff, UserCog } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Form = () => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      setValue("name", session.user.name!);
      setValue("email", session.user.email!);
    }
  }, [router, session, setValue]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form;

    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 200) {
        toast.success("Профіль успішно оновлено!");

        const newSession = {
          ...session,
          user: {
            ...session?.user,
            name,
            email,
          },
        };

        await update(newSession);
      } else {
        const data = await res.json();

        toast.error(data.message || "error");
      }
    } catch (err: any) {
      const error =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message;

      toast.error(error);
    }
  };

  const toggleVisblePass = () => setIsVisiblePass((prev) => !prev);

  return (
    <div className="w-[350px] mx-auto card bg-base-300 my-4 bg-zinc-200 dark:bg-white/5 p-5 rounded-xl">
      <div className="flex flex-col gap-5">
        <h1 className="flex items-center gap-3 text-lg font-bold mx-auto">
          <UserCog />
          Профіль
        </h1>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Ведіть Ваше ім'я"
              autoComplete="off"
              {...register("name", {
                required: "Поле обов'зкове до заповнення",
              })}
            />
            {errors.name?.message && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Ведіть Ваш новий email"
              autoComplete="off"
              {...register("email", {
                required: "Поле обов'зкове до заповнення",
              })}
            />
            {errors.email?.message && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Input
                type={isVisiblePass ? "text" : "password"}
                placeholder="Ведіть Ваш новий пароль"
                autoComplete="off"
                {...register("password", {})}
              />
              {isVisiblePass ? (
                <EyeOff
                  className="absolute bottom-3 right-2 w-4 h-4 text-muted-foreground cursor-pointer"
                  onClick={toggleVisblePass}
                />
              ) : (
                <Eye
                  className="absolute bottom-3 right-2 w-4 h-4 text-muted-foreground cursor-pointer"
                  onClick={toggleVisblePass}
                />
              )}
            </div>
            {errors.password?.message && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type={isVisiblePass ? "text" : "password"}
              placeholder="Підтвердіть Ваш новий пароль"
              autoComplete="off"
              {...register("confirmPassword", {
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Паролі повинні співпадати!";
                },
              })}
            />
            {errors.confirmPassword?.message && (
              <span className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <Button type="submit" className="mt-5 w-full">
            Оновити дані
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
