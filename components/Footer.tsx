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
    <footer className="mx-auto max-w-screen-xl pb-6 pt-10 lg:pt-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Logo />
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
            Постачальник професійного обладнання для кафе, барів та ресторанів.
          </p>

          <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
            <li>
              <Link
                href={"https://www.facebook.com"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Facebook"
              >
                <FaFacebook className="w-5 h-5 text-teal-700 transition hover:text-teal-700/75" />
              </Link>
            </li>

            <li>
              <Link
                href={"https://www.instagram.com"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Instagram"
              >
                <FaInstagram className="w-5 h-5 text-teal-700 transition hover:text-teal-700/75" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://telegram.org/"}
                rel="noreferrer"
                target="_blank"
                aria-label="Посилання на Telegram"
              >
                <FaTelegram className="w-5 h-5 text-teal-700 transition hover:text-teal-700/75" />
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
                  className="w-5 h-5 text-teal-700 transition hover:text-teal-700/75"
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
                <FaWhatsapp className="w-5 h-5 text-teal-700 transition hover:text-teal-700/75" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Про нас</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  href={"/about"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Загальна інформація
                </Link>
              </li>

              <li>
                <Link
                  href={"/about/brands"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Марки обладнання
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Послуги</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  href={"/catalog"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Продукція
                </Link>
              </li>

              <li>
                <Link
                  href={"/service"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Сервіс
                </Link>
              </li>

              <li>
                <Link
                  href={"/payment"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Оплата та доставка
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Корисне</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  href={"/helpful/faq"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Запитання клієнтів
                </Link>
              </li>

              <li>
                <Link
                  href={"/helpful/support"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Підтримка
                </Link>
              </li>

              <li>
                <Link
                  href={"/helpful/articles"}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Статті
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Контакти</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="#"
                >
                  <Mail className="w-5 h-5" />
                  <span className="flex-1 text-gray-700">john@doe.com</span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="#"
                >
                  <Phone className="w-5 h-5" />
                  <span className="flex-1 text-gray-700">0123456789</span>
                </a>
              </li>

              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <MapPin className="w-5 h-5" />
                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  213 Lane, Cherkassy, Ukraine
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 border-t border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500">
            <span className="block sm:inline">Development & Design by</span>{" "}
            <Link
              href={"/"}
              className="inline-block text-teal-900 transition hover:text-teal-900/75"
            >
              @Eugenssson
            </Link>
          </p>

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; KuchTech - 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
