import { Metadata } from "next";
import { FaRegCheckSquare } from "react-icons/fa";

import { Devider } from "@/components/Devider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Сервісне обслуговування",
  description:
    "Гарантійне та післягарантійне обслугування, пуско-налагоджувальні роботи.",
};

export default function Service() {
  return (
    <section className="flex flex-col gap-2 text-xs md:text-sm lg:text-base">
      <Devider text="Сервіс" />
      <p>
        Сервісний центр компанії забезпечує гарантійне та післягарантійне
        обслуговування техніки торгових марок Fagor (Іспанія), Apach (Італія),
        Tatra (Туреччина), Hurakan (Китай), зокрема:
      </p>
      <p className="flex items-center gap-2">
        <FaRegCheckSquare className="min-w-3 min-h-3" />
        Професійний монтаж за найкоротшим терміном.
      </p>
      <p className="flex items-center gap-2">
        <FaRegCheckSquare className="min-w-3 min-h-3" />
        Обслуговування як нового, так і вживаного обладнання
      </p>
      <p className="flex items-center gap-2">
        <FaRegCheckSquare className="min-w-3 min-h-3" />
        Гарантійні зобов&apos;язання та ремонт у позагарантійних випадках
      </p>
      <p className="flex items-center gap-2">
        <FaRegCheckSquare className="min-w-3 min-h-3" />
        Консультативна підтримка, розробка проектів &#34;під ключ&#34; та їх
        впровадження в експлуатацію.
      </p>
      <p className="flex items-center gap-2">
        <FaRegCheckSquare className="min-w-3 min-h-3" />
        Постачання технічного обладнання (запасні частини та підмінний фонд).
      </p>
      <Devider text="Монтаж" />
      <p>
        Наші висококваліфіковані фахівці перед проведенням монтажу виїжджають на
        об&apos;єкт, обговорюють місце розташування обладнання з урахуванням
        ваших вимог та відповідно до чинного законодавства. Вони встановлюють,
        підключають та налаштовують його з урахуванням вашого специфічного
        завдання.
      </p>
      <Devider text="Обслуговування" />
      <p>
        Для ефективної роботи та тривалого терміну служби обладнання необхідно
        регулярне технічне обслуговування. Оскільки таке обладнання часто працює
        в екстремальних умовах, температура та вологість робочого середовища
        можуть значно відрізнятися від нормальних умов, що може негативно
        вплинути на його ефективність та призвести до виходу з ладу. Планове та
        позапланове (у разі потреби) обслуговування допоможе уникнути
        непотрібних простоїв, ремонтів та замін обладнання.
      </p>
      <p>
        Наша компанія має сервісний центр, який надає гарантійне та
        післягарантійне обслуговування техніки з виїздом фахівців безпосередньо
        на об&apos;єкт.
      </p>
      <Devider text="Гарантія" />
      <p>
        Ми надаємо офіційну гарантію на придбане обладнання протягом 12-18
        місяців.
      </p>
      <p>
        Післягарантійне обслуговування та ремонт придбаного в нас обладнання
        здійснюються зі знижкою.
      </p>
      <div className="grid items-center md:grid-cols-2 gap-2">
        <p>Контактні телефони сервісного центру:</p>
        <ul>
          <li>
            <Link
              href="tel:+380938803787"
              className="font-semibold transition hover:text-rose-700"
            >
              +38 093 880 37 87
            </Link>
          </li>
          <li>
            <Link
              href="tel:+380631068008"
              className="font-semibold transition hover:text-rose-700"
            >
              +38 063 106 80 08
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
