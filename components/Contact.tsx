import Image from "next/image";
import { CallBackForm } from "./CallBackForm";

export const Contact = () => {
  return (
    <section className="grid grid-cols-2">
      <Image
        src={"/images/contact.jpg"}
        width={600}
        height={600}
        alt="Світлина чоловіка перед ноутбуком з телефоном"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-5 mx-auto max-w-screen-xl p-10 w-full">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">
          Є питання?
        </h2>
        <p className="text-gray-500">
          Залиште заявку, будь ласка. Наш менеджер зв&apos;яжеться з Вами
          найближчим часом та надасть фахову консультацію.
        </p>
        <CallBackForm />
      </div>
    </section>
  );
};
