"use client";

import { useState } from "react";
import { AlignJustify, UserRoundCog } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);

  const signoutHandler = () => {
    signOut({ callbackUrl: "/signin" });
  };

  const toggleMobileMenu = () =>
    setIsVisible((prev) => (prev === false ? true : false));

  return (
    <header className="mx-auto max-w-screen-xl w-full">
      <div className="relative flex items-center justify-between p-2">
        <Logo />
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer md:hidden ml-auto"
          onClick={toggleMobileMenu}
        >
          <AlignJustify />
        </Button>
        {isVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        <Navigation />
        <div className="flex gap-2">
          <ThemeToggle />

          {session && session.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden md:flex"
                  aria-label="Кнопка входу в адмінменю"
                >
                  <UserRoundCog />
                  <span className="sr-only">Toggle Admin Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {session.user.isAdmin && (
                  <Link href="/admin/products">
                    <DropdownMenuItem>Панель адміна</DropdownMenuItem>
                  </Link>
                )}
                <Link href="/profile">
                  <DropdownMenuItem>Профіль</DropdownMenuItem>
                </Link>
                <Link href="/profile" onClick={signoutHandler}>
                  <DropdownMenuItem>Вийти</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => signIn()}
              variant="outline"
              size="icon"
              className="hidden md:flex"
              aria-label="Кнопка входу в адмінменю"
            >
              <UserRoundCog />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
