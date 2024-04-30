"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, LockKeyholeOpen } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { data: session } = useSession();
  let callbackUrl = params.get("callbackUrl") || "/";
  const [isVisiblePass, setIsVisiblePass] = useState(false);

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

  const toggleVisblePass = () => setIsVisiblePass((prev) => !prev);

  return (
    <div className="w-[300px] mx-auto card bg-base-300 my-4 bg-zinc-200 dark:bg-white/5 p-5 rounded-xl">
      <div className="flex flex-col gap-5">
        <h1 className="flex gap-3 text-lg font-bold mx-auto">
          <LockKeyholeOpen />
          Вхід
        </h1>
        {params.get("error") && (
          <span className="text-sm text-center text-red-500">
            {params.get("error") === "CredentialsSignin"
              ? "Email або паспорт невірний"
              : params.get("error")}
          </span>
        )}
        {params.get("success") && (
          <span className="text-sm text-center text-green-500">
            {params.get("success")}
          </span>
        )}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Ведіть Ваш email"
              autoComplete="off"
              {...register("email", {
                required: "Поле обов`зкове до заповнення",
              })}
            />
            {errors.email?.message && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative flex flex-col gap-2">
            <Input
              type={isVisiblePass ? "text" : "password"}
              placeholder="******"
              autoComplete="off"
              {...register("password", {
                required: "Поле обов`зкове до заповнення",
              })}
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
            {errors.password?.message && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="mt-5 w-full">
            Увійти
          </Button>
        </form>
      </div>
    </div>
  );
};
