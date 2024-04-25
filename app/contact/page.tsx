import Link from "next/link";
import { Mail, MapPinned, Phone } from "lucide-react";

import { Map } from "@/components/Map";
import { ContactForm } from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <section className="mx-auto w-full py-5">
      <ul className="grid md:grid-cols-2 gap-5">
        <li className="flex flex-col min-h-[430px] justify-center gap-5 rounded-lg p-5 bg-zinc-200/50 dark:bg-transparent">
          <div className="flex items-center ml-10 gap-5">
            <Phone className="w-7 h-7" />
            <div>
              <Link href="tel:+380671234567" className="block hover:underline">
                +38 067 123 45 67
              </Link>
              <Link href="tel:+380671234567" className="block hover:underline">
                +38 067 123 45 67
              </Link>
            </div>
          </div>
          <div className="flex items-center ml-10 gap-5">
            <Mail className="w-7 h-7" />
            <Link href="mailto:test@test.com" className="block hover:underline">
              test@test.com
            </Link>
          </div>
          <div className="flex items-center ml-10 gap-5">
            <MapPinned className="w-7 h-7" />
            <p>
              Черкаська обл., м. Черкаси,
              <br />
              вул. Остафія Дашкевича, 10
              <br />
            </p>
          </div>
        </li>
        <li className="min-h-[430px] flex flex-col items-center justify-center rounded-lg p-5 bg-zinc-200/50 dark:bg-transparent">
          <h2 className="text-center font-bold mb-5">Зворотній з&apos;вязок</h2>
          <ContactForm />
        </li>
        <li className="col-span-2 rounded-lg bg-zinc-200/50 dark:bg-transparent">
          <Map />
        </li>
      </ul>
    </section>
  );
};

export default ContactPage;
