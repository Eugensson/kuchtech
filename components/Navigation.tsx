"use client";

import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        <li>
          <Link href={"/catalog"} className="p-4">
            Каталог
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="p-4">
            Про нас
          </Link>
        </li>
        <li>
          <Link href={"/service"} className="p-4">
            Сервіс
          </Link>
        </li>
        <li>
          <Link href={"/payment"} className="p-4">
            Оплата та доставка
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="p-4">
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};
