"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SearchBox = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";

  const { data: categories, error } = useSWR("/api/products/categories");

  if (error) return error.message;

  if (!categories) return "Loading...";

  return (
    <form action="/catalog" method="GET">
      <div className="flex items-center gap-1">
        <Input
          placeholder="Пошук"
          name="q"
          autoComplete="off"
          defaultValue={q}
        />
        <Button size="icon" variant="outline" type="submit">
          <Search />
        </Button>
      </div>
    </form>
  );
};
