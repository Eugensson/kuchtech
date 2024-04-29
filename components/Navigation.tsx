"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants/index";

export const Navigation = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav className="text-xs md:text-sm xl:text-base">
      <ul className="flex items-center gap-2 lg:gap-8">
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
        {session?.user && (
          <li key="profile">
            <Link
              href="/admin/profile"
              className={`py-4 ${
                pathname === "/admin/profile"
                  ? "hover:underline text-red-500 font-semibold"
                  : "hover:text-red-500"
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
              className={`py-4 ${
                pathname === "/admin/products"
                  ? "hover:underline text-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              Товари
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
