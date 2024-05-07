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
    <footer className="grid md:grid-cols-3 gap-2 md:gap-5 text-teal-700 text-xs lg:text-sm py-2 border-t-2 border-zinc-300 dark:border-zinc-300/15">
      <div>
        <Logo />
        <p className="text-xs text-center md:text-sm lg:text-base md:text-left">
          Постачальник професійного обладнання для кафе, барів та ресторанів.
        </p>
      </div>
      <ul className="md:col-span-2 mx-auto md:mx-0 md:ml-auto my-auto flex gap-3">
        <li>
          <Link
            href={"https://www.facebook.com"}
            rel="noreferrer"
            target="_blank"
            aria-label="Посилання на Facebook"
          >
            <FaFacebook className="w-8 h-8 transition hover:text-red-500" />
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.instagram.com"}
            rel="noreferrer"
            target="_blank"
            aria-label="Посилання на Instagram"
          >
            <FaInstagram className="w-8 h-8 transition hover:text-red-500" />
          </Link>
        </li>
        <li>
          <Link
            href={"https://telegram.org/"}
            rel="noreferrer"
            target="_blank"
            aria-label="Посилання на Telegram"
          >
            <FaTelegram className="w-8 h-8 transition hover:text-red-500" />
          </Link>
        </li>
      </ul>
      <span className="md:col-span-3 text-center">
        &copy; KuchTech - 2024. All rights reserved. Dev:{" "}
        <Link href={"/"} className="transition hover:text-rose-700">
          Eugensson
        </Link>
      </span>
    </footer>
  );
};
