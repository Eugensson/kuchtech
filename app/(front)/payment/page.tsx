import Link from "next/link";
import { Metadata } from "next";

import { Devider } from "@/components/Devider";

export const metadata: Metadata = {
  title: "Оплата/доставка",
  description: "Умови оплати та доставки для покупця",
};

export default function Payment() {
  return (
    <section className="flex flex-col gap-2 text-xs md:text-sm lg:text-base">
      <Devider text="Оплата" />
      <p>
        Оформити замовлення можна, зателефонувавши за номерами телефонів,
        зазначеними в розділі{" "}
        <Link href={"/contact"} className="hover:underline">
          Контакти
        </Link>
        .
      </p>
      <p>
        Оплата за придбаний товар здійснюється безготівковим переказом на
        розрахунковий рахунок Продавця згідно рахунку-фактури в сумі 100% від
        вартості товару.
      </p>
      <Devider text="Доставка" />
      <p>
        Доставку обладнання забезпечують транспортні компанії &quot;Нова
        Пошта&quot;, &quot;Делівері&quot; та &quot;Інтайм&quot;.
      </p>
      <p>
        За вибором клієнта, товар доставляється транспортною компанією, яка
        найбільш зручна для нього.
      </p>
      <p>
        Відвантаження товару відбувається після отримання повної оплати за товар
        на наш рахунок.
      </p>
      <p>
        У випадку надходження коштів після 13:00, товар відправляється
        наступного дня після їхнього зарахування.
      </p>
      <p>
        Термін доставки залежить від регіону і становить приблизно 1-3 робочих
        дні.
      </p>
      <p>
        Придбаний товар обов&apos;язково страхується на суму 100% від його
        вартості.
      </p>
      <p>Вартість доставки покриває Покупець.</p>
    </section>
  );
}
