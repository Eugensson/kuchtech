"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <ThemeToggle />
      </div>
    </header>
  );
};
