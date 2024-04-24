import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-zinc-950">
            Будуйте бізнес з{" "}
            <strong className="block mt-5 font-extrabold uppercase text-zinc-950">
              Kuch<span className="text-rose-700">Tech</span>
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed font-bold text-zinc-950 bg-zinc-300/50 p-2 rounded-md">
            Постачальник професійного обладнання
            <br /> для Вашого бізнесу.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href={"/catalog"}
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Перейти до каталогу
            </Link>

            <Link
              href={"/about"}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Дізнатися більше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
