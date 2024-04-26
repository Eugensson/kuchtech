import Link from "next/link";
import { Mail, MapPinned, Phone } from "lucide-react";

import { Map } from "@/components/Map";
import { ContactForm } from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <section className="mx-auto w-full py-5">
      <ul className="grid md:grid-cols-2 gap-5 font-semibold text-gray-500">
        <li className="flex flex-col min-h-[430px] justify-center gap-5 rounded-lg p-5">
          <div className="flex items-center ml-10 gap-5">
            <Phone />
            <div>
              <Link
                href="tel:+380671234567"
                className="block transition hover:text-rose-700"
              >
                +38 067 123 45 67
              </Link>
              <Link
                href="tel:+380671234567"
                className="block transition hover:text-rose-700"
              >
                +38 067 123 45 67
              </Link>
            </div>
          </div>
          <div className="flex items-center ml-10 gap-5">
            <Mail />
            <Link
              href="mailto:test@test.com"
              className="block transition hover:text-rose-700"
            >
              test@test.com
            </Link>
          </div>
          <div className="flex items-center ml-10 gap-5">
            <MapPinned />
            <p>
              Черкаська обл., м. Черкаси,
              <br />
              вул. Остафія Дашкевича, 10
              <br />
            </p>
          </div>
        </li>
        <li className="min-h-[430px] flex flex-col items-center justify-center rounded-lg p-5 ">
          <h2 className="text-gray-500 text-center font-bold mb-5">
            Зворотній з&apos;вязок
          </h2>
          <ContactForm />
        </li>
        <li className="col-span-2 rounded-lg">
          <Map />
        </li>
      </ul>
    </section>
  );
};

export default ContactPage;
