"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/data";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="text-sm xl:text-base">
      <ul className="hidden md:flex items-center md:gap-5 xl:gap-10">
        {navLinks.map(({ label, src }) => {
          const isActive = pathname === src;

          return (
            <li key={label}>
              <Link
                href={src}
                className={`py-4 ${
                  isActive
                    ? "hover:underline text-red-500 font-semibold"
                    : "hover:text-red-500"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
