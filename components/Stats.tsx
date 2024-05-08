export const Stats = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-4 lg:gap-6 w-full mx-auto py-1 md:py-2 lg:py-4">
      <h2 className="md:text-xl lg:text-2xl font-bold text-center">
        Бізнес обирає нас
      </h2>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-center text-gray-500">
        Ми є надійним постачальником для бізнесу завдяки реалізації
        високоякісних товарів широкого асортименту з індивідуальним підходом до
        потреб кожного клієнта. Наш багаторічний досвід та ефективна служба
        підтримки гарантують успішну співпрацю на довгостроковій основі.
      </p>
      <ul className="grid md:grid-cols-3 gap-2 md:gap-5">
        <li className="flex flex-col gap-2 p-2 lg:p-5 text-center w-full rounded-lg bg-zinc-200 dark:bg-white/5">
          <p className="text-4xl font-bold text-red-600">$2.0m</p>
          <h3 className="text-sm md:text-base lg:text-lg font-semibold">
            Обсяги продаж понад
          </h3>
        </li>
        <li className="flex flex-col gap-2 p-2 lg:p-5 text-center w-full rounded-lg bg-zinc-200 dark:bg-white/5">
          <p className="text-4xl font-bold text-red-600">10+</p>
          <h3 className="text-sm md:text-base lg:text-lg font-semibold">
            Років на ринку
          </h3>
        </li>
        <li className="flex flex-col gap-2 p-2 lg:p-5 text-center w-full rounded-lg bg-zinc-200 dark:bg-white/5">
          <p className="text-4xl font-bold text-red-600">180+</p>
          <h3 className="text-sm md:text-base lg:text-lg font-semibold">
            Задоволених клієнтів
          </h3>
        </li>
      </ul>
    </section>
  );
};
