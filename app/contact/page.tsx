import Link from "next/link";
import { Mail, MapPinned, Phone } from "lucide-react";

import { Map } from "@/components/Map";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <section className="mx-auto w-full py-5">
      <ul className="grid md:grid-cols-2 gap-5">
        <li className="flex flex-col justify-center gap-5 rounded-lg p-8 bg-zinc-200/50 dark:bg-transparent">
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
        <li className="rounded-lg p-8 bg-zinc-200/50 dark:bg-transparent">
          <h2 className="text-center font-bold mb-5">Зворотній з&apos;вязок</h2>
          <form className="flex flex-col gap-10">
            <Input placeholder="Ведіть Ваше і'мя" />
            <Input placeholder="Введіть e-mail" />
            <Textarea placeholder="Введіть текст повідомлення" />
            <Button>Надіслати</Button>
          </form>
        </li>
        <li className="col-span-2 rounded-lg bg-zinc-200/50 dark:bg-transparent">
          <Map />
        </li>
      </ul>
    </section>
  );
};

export default ContactPage;
