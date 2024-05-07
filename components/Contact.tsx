import Image from "next/image";
import { CallBackForm } from "./CallBackForm";

export const Contact = () => {
  return (
    <section className="grid md:grid-cols-2 dark:bg-white/5 text-xs md:text-sm lg:text-lg">
      <Image
        priority
        src={"/images/contact.jpg"}
        width={600}
        height={600}
        alt="Світлина чоловіка перед ноутбуком з телефоном"
        className="rounded-lg w-full md:h-auto"
      />
      <div className="flex flex-col gap-2 lg:gap-5 mx-auto max-w-screen-xl px-1 py-2 md:py-2 md:px-4 lg:p-5 xl:p-10 w-full">
        <h2 className="font-bold text-center lg:text-2xl">Є питання?</h2>
        <p className="text-gray-500">
          Залиште заявку, будь ласка. Наш менеджер зв&apos;яжеться з Вами
          найближчим часом та надасть фахову консультацію.
        </p>
        <CallBackForm />
      </div>
    </section>
  );
};
