import Link from "next/link";
import {
  ShoppingCart,
  Info,
  Cog,
  Truck,
  PhoneForwarded,
  X,
  ChevronRight,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

interface MobileMenuProps {
  toggleMobileMenu: () => void;
}

const navLinks = [
  { label: "Каталог", src: "/catalog", icon: <ShoppingCart /> },
  { label: "Про нас", src: "/about", icon: <Info /> },
  { label: "Сервіс", src: "/service", icon: <Cog /> },
  { label: "Оплата/доставка", src: "/payment", icon: <Truck /> },
  { label: "Контакти", src: "/contact", icon: <PhoneForwarded /> },
];

export const MobileMenu = ({ toggleMobileMenu }: MobileMenuProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="fixed flex flex-col w-screen max-w-[430px] md:hidden h-screen z-50 top-0 right-0 bg-white dark:bg-zinc-800">
      <div className="flex justify-between items-center p-2">
        <ThemeToggle />
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer ml-auto bg-transparent"
          onClick={toggleMobileMenu}
        >
          <X />
        </Button>
      </div>

      <nav className="mt-5">
        <ul className="flex flex-col">
          {navLinks.map(({ label, src, icon }) => {
            const isActive = pathname === src;

            return (
              <li key={label} className="">
                <Link
                  href={src}
                  onClick={toggleMobileMenu}
                  className={`flex items-center justify-between py-3 px-5 ${
                    isActive
                      ? "text-white bg-zinc-700 dark:text-white font-semibold"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {icon}
                    {label}
                  </div>
                  <ChevronRight />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
