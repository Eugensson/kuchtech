"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LockKeyholeOpen } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

type Inputs = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { data: session } = useSession();
  let callbackUrl = params.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { email, password } = form;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className="max-w-sm bg-zinc-100 dark:bg-transparent p-5 rounded-lg">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold flex items-center gap-2 mx-auto">
          <LockKeyholeOpen />
          Log In
        </h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Поле обов'язкове до заповнення",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email не коректний",
                },
              })}
              className="w-full max-w-md p-2 border-2 border-zinc-300 rounded-lg bg-transparent"
            />
            {errors.email?.message && (
              <div className="text-red-500 text-sm">{errors.email.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Поле обов'язкове до заповнення",
              })}
              className="w-full max-w-md p-2 border-2 border-zinc-300 rounded-lg bg-transparent"
            />
            {errors.password?.message && (
              <div className="text-red-500 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting} className="my-4 w-full">
            Увійти
          </Button>
        </form>

        {params.get("success") && (
          <div className="text-green-500">{params.get("success")}</div>
        )}

        {params.get("error") && (
          <div className="alert text-error">
            {params.get("error") === "CredentialsSignin"
              ? "Невірний email/пароль"
              : params.get("error")}
          </div>
        )}

        <Link
          href={`/register?callbackUrl=${callbackUrl}`}
          className="text-center text-sm hover:underline"
        >
          Don`t have an account?
        </Link>
      </div>
    </div>
  );
};
