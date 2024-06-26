"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";

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
import { Textarea } from "@/components/ui/textarea";

const PhoneRegExp = /^(\+38-0\d{2}-\d{3}-\d{2}-\d{2})$/;

const contactFormSchema = z.object({
  username: z.string().min(2, {
    message: "Поле обов'зкове до заповнення",
  }),
  email: z
    .string()
    .email({
      message: "Невірний формат email",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  message: z.string().min(2, {
    message: "Поле обов'зкове до заповнення",
  }),
});

const callBackFormSchema = z.object({
  username: z.string().min(2, {
    message: "Поле обов'зкове до заповнення",
  }),
  phone: z.string().regex(PhoneRegExp, {
    message: "Телефон має бути у форматі +38-067-123-45-67",
  }),
});

export const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const response = await fetch("/api/contact", {
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
        title: "Дякуємо! Повідомлення відправлено.",
        description:
          "Менеджер найближчим часом надішле відповідь на Вашу пошту.",
      });

      form.reset();

      form.clearErrors();
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
        className="space-y-3 md:space-y-5 w-full flex flex-col justify-center"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ведіть Ваш email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Введіть текст повідомлення" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="dark:bg-gray-500 dark:hover:bg-gray-400 dark:text-white w-[200px] mx-auto flex items-center gap-2"
        >
          Надіслати
          <IoIosSend className="w-6 h-6" />
        </Button>
      </form>
    </Form>
  );
};

export const CallBackForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof callBackFormSchema>>({
    resolver: zodResolver(callBackFormSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof callBackFormSchema>) => {
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

      form.reset();

      form.clearErrors();
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
        <Button
          type="submit"
          className="dark:bg-gray-500 dark:hover:bg-gray-400 dark:text-white w-[200px] mx-auto flex items-center gap-2"
        >
          Надіслати
          <IoIosSend className="w-6 h-6" />
        </Button>
      </form>
    </Form>
  );
};
