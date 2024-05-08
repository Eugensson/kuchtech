import Link from "next/link";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  toggleMobileMenu: () => void;
}

const navLinks = [
  { label: "Каталог", src: "/catalog" },
  { label: "Про нас", src: "/about" },
  { label: "Сервіс", src: "/service" },
  { label: "Оплата/доставка", src: "/payment" },
  { label: "Контакти", src: "/contact" },
];

export const MobileMenu = ({ toggleMobileMenu }: MobileMenuProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="absolute flex flex-col w-screen max-w-[430px] md:hidden h-screen z-50 top-0 right-0 bg-white dark:bg-zinc-800 p-2">
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer ml-auto bg-transparent"
        onClick={toggleMobileMenu}
      >
        <X />
      </Button>

      <nav className="ml-5 mt-20">
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ label, src }) => {
            const isActive = pathname === src;

            return (
              <li key={label}>
                <Link
                  href={src}
                  onClick={toggleMobileMenu}
                  className={`py-4 ${
                    isActive
                      ? "text-rose-800 dark:text-rose-400 font-semibold"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          {session?.user && (
            <li key="profile">
              <Link
                href="/admin/profile"
                onClick={toggleMobileMenu}
                className={`py-4 ${
                  pathname === "/admin/profile"
                    ? "hover:underline text-rose-800 dark:text-rose-400 font-semibold"
                    : ""
                }`}
              >
                Профіль
              </Link>
            </li>
          )}
          {session?.user?.isAdmin && (
            <li key="products">
              <Link
                href="/admin/products"
                onClick={toggleMobileMenu}
                className={`py-4 ${
                  pathname === "/admin/products"
                    ? "hover:underline text-rose-800 dark:text-rose-400 font-semibold"
                    : ""
                }`}
              >
                Товари
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
