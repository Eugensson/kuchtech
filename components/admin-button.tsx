"use client";

import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const AdminMenuButton = () => {
  const { data: session } = useSession();

  return (
    <Button
      variant="outline"
      aria-label="Кнопка входу/виходу адмінки"
      size="icon"
      onClick={
        session && session.user
          ? () => signOut({ callbackUrl: "/signin" })
          : () => signIn()
      }
    >
      {session && session.user ? (
        <LogOut className="w-5 h-5" />
      ) : (
        <LogIn className="w-5 h-5" />
      )}
    </Button>
  );
};
