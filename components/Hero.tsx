import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex items-center bg-[url('/images/banner.webp')] bg-cover bg-center bg-no-repeat h-[250px] md:h-[400px] lg:h-[600px]">
      <div className="w-full flex flex-col gap-2 md:gap-5 lg:gap-10 p-5 md:p-10 lg:p-20">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-zinc-950">
          Будуйте бізнес з<br />
          <span className="font-extrabold uppercase text-zinc-950">Kuch</span>
          <span className="font-extrabold uppercase text-rose-700">Tech</span>
        </h1>
        <p className="w-[270px] md:w-[400px] lg:w-[475px] text-xs md:text-base lg:text-xl font-semibold text-zinc-950 bg-zinc-100/50 p-2 rounded-md">
          Постачальник професійного обладнання
          <br /> для Вашого бізнесу
        </p>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs md:text-sm">
          <li>
            <Link
              href={"/catalog"}
              className="block text-center w-full rounded-md bg-rose-600 px-9 py-3   text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 "
            >
              Перейти до каталогу
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="block text-center w-full rounded-md bg-white px-9 py-3  text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
            >
              Дізнатися більше
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
