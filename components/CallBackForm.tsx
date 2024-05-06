"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PhoneRegExp = /^(\+38-0\d{2}-\d{3}-\d{2}-\d{2})$/;

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Поле обов'зкове до заповнення",
  }),
  phone: z.string().regex(PhoneRegExp, {
    message: "Телефон має бути у форматі +38-067-123-45-67",
  }),
});

export const CallBackForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    const { success, error } = await response.json();

    if (success) {
      toast({
        title: "Дякуємо! Запит відправлено.",
        description: "Менеджер найближчим часом зателефонує на Ваш номер.",
      });
    } else if (error) {
      toast({
        variant: "destructive",
        title: "Сталася помилка.",
        description: "Будь ласка, спробуйте пізніше.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 lg:space-y-5 w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ведіть Ваше і'мя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="+38-067-123-45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Надіслати</Button>
      </form>
    </Form>
  );
};
