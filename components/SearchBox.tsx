"use client";

import useSWR from "swr";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchBox = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";

  const { error } = useSWR("/api/products/categories");

  if (error) return error.message;

  return (
    <form action="/catalog" method="GET">
      <div className="flex items-center gap-1">
        <Input
          placeholder="Пошук"
          name="q"
          autoComplete="off"
          className="text-xs md:text-sm lg:text-base"
        />
        <Button
          size="icon"
          variant="outline"
          type="submit"
          aria-label="Кнопка пошуку"
        >
          <Search className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};
