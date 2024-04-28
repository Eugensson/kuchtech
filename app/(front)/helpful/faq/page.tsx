import { Devider } from "@/components/Devider";

const FaqPage = () => {
  return (
    <div className="space-y-2">
      <Devider text="Часті запитання від клієнтів" />
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 w-full md:w-[750px]">
          <h2 className="font-medium">
            Якими критеріями слід керуватися під час вибору обладнання?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700 w-full md:w-[750px]">
          1. <strong className="mr-2">Параметри приміщень:</strong>Для
          забезпечення якісної роботи всі ресторанне обладнання повинно бути
          правильно розташоване в просторі.
          <br />
          2. <strong className="mr-2">Сфера діяльності:</strong>Ви можете
          організувати кафе з певним асортиментом продуктів і страв, відтак
          необхідно придбати обладнання для ресторанів, яке буде допомагати
          вирішувати конкретні завдання. Це може бути італійська, мексиканська,
          французька, турецька кухня тощо.
          <br />
          3. <strong className="mr-2">Меню</strong>: Обладнання для ресторанів
          та інших закладів варто придбати для конкретних завдань. Наприклад,
          якщо Ви тримаєте невеликий заклад, то малоймовірно, що вам знадобиться
          рисоварка та м&apos;ясорубка, але точно знадобляться льодогенератор чи
          шафа для вина. Обладнання буває універсальним (ви зможете готувати
          ширший асортимент страв) чи спеціалізованим (зосередження на
          спеціалізованих для певглї кухні стравах).
          <br />
          4. <strong className="mr-2">Розмір бізнесу</strong>: Від цього
          показника залежить кількість та потужність обладнання для кафе. Варто
          придбати таке, що задовольнить ваші потреби й допоможе виконувати
          потрібний обсяг робіт, що необхідний для виконання замовлень ваших
          відвідувачів з невеликим запасом &quot;на зростання&quot;.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 w-full md:w-[750px]">
          <h2 className="font-medium">
            На що першочергово потрібно звертати увагу?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700 w-full md:w-[750px]">
          1. <strong className="mr-2">Потужність:</strong>надаючи перевагу
          машинам, які здатні виконувати необхідний обсяг робіт і працювати
          протягом усієї зміни.
          <br />
          2. <strong className="mr-2">Продуктивність:</strong>рекомендуємо
          обирати обладнання, що забезпечить якісні продукти для всіх клієнтів і
          допоможе персоналу впоратися з потоком відвідувачів.
          <br />
          3. <strong className="mr-2">Функціональність:</strong>важливий аспект
          для оптимізації роботи на кухні та розширення асортименту страв.
          <br />
          4. <strong className="mr-2">Габарити приміщень та обладнання:</strong>
          все повинно бути пропорційним, зокрема для ефективної організації
          робочого простору.
          <br />
          5. <strong className="mr-2">Якість обладнання:</strong>
          надавати перевагу обладнанню відомих брендів, виготовлених з
          високоякісних, стійких до зносу та ударостійких матеріалів.
          <br />
          Ці критерії допоможуть забезпечити безперервність процесів та
          досягнути високих результатів в роботі вашого бізнесу.
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 w-full md:w-[750px]">
          <h2 className="font-medium">Які види обладнання існують?</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700 w-full md:w-[750px]">
          1. <strong className="mr-2">Обладнання для нагріву:</strong>Як
          зрозуміло з назви, сюди входять плити, котли, варильні панелі, грилі,
          блинниці, рисоварки, фритюрниці та інше. Зазвичай на цьому обладнанні
          здійснюється основний етап приготування всіх гарячих страв.
          <br />
          2. <strong className="mr-2">Холодильне обладнання:</strong>
          Ця група включає в себе обладнання для кафе та інших форм бізнесу, що
          відповідає за збереження продуктів, а також за їх приготування (до
          прикладу, льодогенератори). Також сюди входять агрегати, які мають
          принаймні дві функції: охолодження товару і його презентація (до
          прикладу, виставкові вітрини, винні шафи тощо).
          <br />
          3. <strong className="mr-2">Нейтральне:</strong>До цієї групи зазвичай
          включається вспоміжне або додаткове обладнання для їдальні, яке
          допомагає процесу організації роботи і функціональному оформленню
          робочого простору. Робочі столи, полиці, стерилізатори, візки тощо. Це
          суттєво полегшує роботу персоналу, а отже, допомагає швидше та
          простіше вирішити велику кількість завдань.
          <br />
          4. <strong className="mr-2">Електромеханічне обладнання:</strong>
          Якщо для вас важлива якість приготованої заготовки чи готового
          продукту і швидкість подачі, то електромеханічне професійне обладнання
          для ресторанів - ваш головний помічник. До цієї групи входять:
          м&apos;ясорубки, овочерізки, хліборізки, каттери та багато іншого.
        </p>
      </details>
    </div>
  );
};

export default FaqPage;
