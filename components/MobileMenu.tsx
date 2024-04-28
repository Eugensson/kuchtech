import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  toggleMobileMenu: () => void;
}

export const MobileMenu = ({ toggleMobileMenu }: MobileMenuProps) => {
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
                    isActive ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
