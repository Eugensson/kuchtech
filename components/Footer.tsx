import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";

import { Logo } from "./Logo";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl py-2 lg:py-4 mt-2 border-t-2">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex justify-center lg:justify-start">
            <Logo />
          </div>
          <p className="max-w-sm text-xs md:text-sm text-center leading-relaxed text-gray-500 sm:max-w-lg md:text-left">
            Постачальник професійного обладнання для кафе, барів та ресторанів.
          </p>

          <ul className="flex justify-center xl:justify-start gap-6 md:gap-8">
            <li>
              <Link
                href={"https://www.facebook.com"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Facebook"
              >
                <FaFacebook className="w-5 h-5 text-teal-700 transition hover:text-red-500" />
              </Link>
            </li>

            <li>
              <Link
                href={"https://www.instagram.com"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Instagram"
              >
                <FaInstagram className="w-5 h-5 text-teal-700 transition hover:text-red-500" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://telegram.org/"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Telegram"
              >
                <FaTelegram className="w-5 h-5 text-teal-700 transition hover:text-red-500" />
              </Link>
            </li>

            <li>
              <Link
                href="viber://chat?number=+380633062931"
                aria-label="Viber"
                rel="noreferrer"
                target="_blank"
              >
                <FaViber
                  aria-label="Viber icon"
                  className="w-5 h-5 text-teal-700 transition hover:text-red-500"
                />
              </Link>
            </li>

            <li>
              <Link
                href="whatsapp://send?phone=+380633062931"
                rel="noreferrer"
                target="_blank"
                aria-label="Whatsapp контакт"
              >
                <FaWhatsapp className="w-5 h-5 text-teal-700 transition hover:text-red-500" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          <div className="text-center sm:text-left">
            <p className="text-sm md:test-base font-medium text-gray-500">
              Про нас
            </p>

            <ul className="flex flex-col gap-2 mt-2 md:mt-4 xl:mt-8 text-xs xl:text-sm">
              <li>
                <Link
                  href={"/about"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Загальна інформація
                </Link>
              </li>

              <li>
                <Link
                  href={"/about/brands"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Марки обладнання
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm md:test-base font-medium text-gray-500">
              Послуги
            </p>

            <ul className="flex flex-col gap-2 mt-2 md:mt-4 xl:mt-8 text-xs xl:text-sm">
              <li>
                <Link
                  href={"/catalog"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Продукція
                </Link>
              </li>

              <li>
                <Link
                  href={"/service"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Сервіс
                </Link>
              </li>

              <li>
                <Link
                  href={"/payment"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Оплата та доставка
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm md:test-base font-medium text-gray-500">
              Корисне
            </p>

            <ul className="flex flex-col gap-2 mt-2 md:mt-4 xl:mt-8 text-xs xl:text-sm">
              <li>
                <Link
                  href={"/helpful/faq"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Запитання клієнтів
                </Link>
              </li>

              <li>
                <Link
                  href={"/helpful/support"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Підтримка
                </Link>
              </li>

              <li>
                <Link
                  href={"/helpful/articles"}
                  className="text-gray-600 transition hover:text-red-500"
                >
                  Статті
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm md:test-base font-medium text-gray-500">
              Контакти
            </p>

            <ul className="flex flex-col gap-2 mt-2 md:mt-4 xl:mt-8 text-xs xl:text-sm">
              <li>
                <Link
                  href="mailto:test@test.com"
                  className="flex justify-start items-center gap-2 text-gray-600 transition hover:text-red-500"
                >
                  <Mail />
                  test@test.com
                </Link>
              </li>

              <li>
                <Link
                  href="tel:+380671234567"
                  className="flex justify-start items-center gap-2 text-gray-600 transition hover:text-red-500"
                >
                  <Phone />
                  +380671234567
                </Link>
              </li>

              <li className="flex justify-start items-center gap-2 text-gray-600">
                <MapPin />
                <address className="not-italic text-left">
                  <p>м. Черкаси,</p>
                  <p>вул. О.Дашкевича, 10</p>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-xs text-gray-500">
            <span className="block sm:inline">Development & Design by</span>{" "}
            <Link
              href={"/"}
              className="inline-block text-teal-900 transition hover:text-red-500"
            >
              @Eugenssson
            </Link>
          </p>

          <p className="mt-2 text-xs text-gray-500 sm:order-first sm:mt-0">
            &copy; KuchTech - 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
