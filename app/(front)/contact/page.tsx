import Link from "next/link";
import { Metadata } from "next";
import { Mail, MapPinned, Phone } from "lucide-react";

import { Map } from "@/components/Map";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "KuchTech | Контакти",
  description: "Контактна інформація постачальника обладнання",
};

const ContactPage = () => {
  return (
    <section className="w-full text-xs md:text-sm lg:text-base text-gray-500">
      <ul className="grid md:grid-cols-2 gap-2 md:gap-5">
        <li className="p-2 lg:p-4 rounded bg-zinc-100/5 flex items-center justify-center">
          <ul className="flex flex-col gap-2 md:gap-5 text-sm md:text-base">
            <li className="flex items-center gap-4">
              <Phone />
              <div>
                <Link
                  href="tel:+380938803787"
                  className="block transition hover:text-rose-700"
                >
                  +38 093 880 37 87
                </Link>
                <Link
                  href="tel:+380973940015"
                  className="block transition hover:text-rose-700"
                >
                  +38 097 394 00 15
                </Link>
                <Link
                  href="tel:+380631068008"
                  className="block transition hover:text-rose-700"
                >
                  +38 063 106 80 08
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Mail />
              <Link
                href="mailto:daksa1974@gmail.com"
                className="block transition hover:text-rose-700"
              >
                daksa1974@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <MapPinned />
              <p>
                Черкаська обл., м. Черкаси,
                <br />
                вул. Остафія Дашкевича, 29
                <br />
              </p>
            </li>
          </ul>
        </li>
        <li className="p-2 lg:p-4 rounded bg-zinc-100/5">
          <h2 className="text-center font-bold mb-2 md:mb-5">
            Зворотній з&apos;вязок
          </h2>
          <ContactForm />
        </li>
        <li className="md:col-span-2 rounded overflow-hidden">
          <Map />
        </li>
      </ul>
    </section>
  );
};

export default ContactPage;
