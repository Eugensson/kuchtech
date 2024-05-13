"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brandList = [
  { name: "Adler", imageURL: "/images/logos/adler.svg" },
  { name: "Arris", imageURL: "/images/logos/arris.svg" },
  { name: "Astoria", imageURL: "/images/logos/astoria.svg" },
  { name: "Bartscher", imageURL: "/images/logos/bartscher.svg" },
  { name: "Brema", imageURL: "/images/logos/brema.svg" },
  { name: "Casta", imageURL: "/images/logos/casta.svg" },
  { name: "Ceado", imageURL: "/images/logos/ceado.svg" },
  { name: "Cold", imageURL: "/images/logos/cold.svg" },
  { name: "Conti", imageURL: "/images/logos/conti.svg" },
  { name: "Cuppone", imageURL: "/images/logos/cuppone.svg" },
  { name: "Dihr", imageURL: "/images/logos/dihr.svg" },
  { name: "Elettrobar", imageURL: "/images/logos/elettrobar.svg" },
  { name: "Empero", imageURL: "/images/logos/empero.svg" },
  { name: "Europa", imageURL: "/images/logos/europa.svg" },
  { name: "Fama", imageURL: "/images/logos/fama.svg" },
  { name: "Hoshizaki", imageURL: "/images/logos/hoshizaki.svg" },
  { name: "Josper", imageURL: "/images/logos/josper.svg" },
  { name: "Kopa", imageURL: "/images/logos/kopa.svg" },
  { name: "Mac-Pan", imageURL: "/images/logos/macpan.svg" },
  { name: "MBM", imageURL: "/images/logos/mbm.svg" },
  { name: "Morello-Forni", imageURL: "/images/logos/morelloforni.svg" },
  { name: "NTF", imageURL: "/images/logos/ntf.svg" },
  { name: "Orved", imageURL: "/images/logos/orved.svg" },
  { name: "Pavesi", imageURL: "/images/logos/pavesi.svg" },
  { name: "Prisma-Food", imageURL: "/images/logos/prismafood.svg" },
  { name: "Rational", imageURL: "/images/logos/rational.svg" },
  { name: "RobotCoupe", imageURL: "/images/logos/robotcoupe.svg" },
  { name: "ScanDomestic", imageURL: "/images/logos/scandomestic.svg" },
  { name: "Sidi", imageURL: "/images/logos/sidi.svg" },
  { name: "Silko", imageURL: "/images/logos/silko.svg" },
  { name: "SinMag", imageURL: "/images/logos/sinmag.svg" },
  { name: "Sirman", imageURL: "/images/logos/sirman.svg" },
  { name: "Tecnodom", imageURL: "/images/logos/tecnodom.svg" },
  { name: "Venix", imageURL: "/images/logos/venix.svg" },
  { name: "XTS", imageURL: "/images/logos/xts.svg" },
  { name: "Zernike", imageURL: "/images/logos/zernike.svg" },
];

export const Brands = () => {
  return (
    <section className="hidden xl:flex flex-col gap-2 md:gap-4 lg:gap-6 w-full mx-auto py-1 md:py-2 lg:py-4">
      <h2 className="md:text-xl lg:text-2xl font-bold text-center">
        Торгівельні марки
      </h2>
      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-center text-gray-500 dark:text-gray-300">
        Наша компанія має можливість запропонувати вам продукцію від світових
        лідерів у виробництві професійного виробничого та торгівельного
        обладнання.
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-1">
          {brandList.map(({ name, imageURL }) => (
            <CarouselItem key={name} className="pl-5 md:basis-1/3 lg:basis-1/5">
              <div className="flex items-center justify-center p-4 border-2 rounded-lg dark:bg-white/5">
                <Image
                  src={imageURL}
                  width={75}
                  height={50}
                  alt={`Логотип компанії ${name}`}
                  className="w-full h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
