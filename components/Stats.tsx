export const Stats = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Бізнес обирає нас</h2>

          <p className="mt-4 text-gray-500">
            Ми є надійним постачальником для бізнесу завдяки реалізації
            високоякісних товарів широкого асортименту з індивідуальним підходом
            до потреб кожного клієнта. Наш багаторічний досвід та ефективна
            служба підтримки гарантують успішну співпрацю на довгостроковій
            основі.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-zinc-200 dark:bg-white/5 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-zinc-800 dark:text-white">
                Обсяги продаж понад
              </dt>

              <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
                $2.0m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-zinc-200 dark:bg-white/5 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-zinc-800 dark:text-white">
                Років на ринку
              </dt>

              <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
                10+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-zinc-200 dark:bg-white/5 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-zinc-800 dark:text-white">
                Задоволених клієнтів
              </dt>

              <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">
                180+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
