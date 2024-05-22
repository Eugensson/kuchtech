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
import { brandList } from "@/constants";

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
