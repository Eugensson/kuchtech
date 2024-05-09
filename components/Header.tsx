"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { AdminMenuButton } from "@/components/admin-button";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMobileMenu = () =>
    setIsVisible((prev) => (prev === false ? true : false));

  return (
    <header className="flex items-center justify-between p-2 border-b-2 border-zinc-300 dark:border-zinc-300/15">
      <Logo />
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer md:hidden ml-auto"
        aria-label="Кнопка відкриття мобільного меню"
        onClick={toggleMobileMenu}
      >
        <AlignJustify />
      </Button>
      {isVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
      <div className="hidden md:flex items-center">
        <Navigation />
      </div>
      <div className="hidden md:flex items-center gap-1">
        <ThemeToggle />
        <AdminMenuButton />
      </div>
    </header>
  );
};
